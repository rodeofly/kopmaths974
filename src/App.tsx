import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import renderMathInElement from "katex/contrib/auto-render";
import "mathlive";

import translateLatexToHtml from "./utils/latexToHtml";
import { initializeExerciseInteraction } from "./utils/exerciseInteraction";
import {
  applyParameterValues,
  buildParameterFields,
  createValueMap,
  type ParameterField,
  type ParameterValueMap
} from "./utils/exerciseParameters";
import {
  collectCategoryPaths,
  getExerciseLoader,
  getSortedChildren,
  loadExerciseTree,
  type ExerciseDefinition,
  type ExerciseNode
} from "./utils/exerciseTree";

type ExerciceInstance = {
  applyNewSeed?: () => void;
  nouvelleVersion?: () => void;
  contenu?: string;
  listeQuestions?: string[];
  correction?: string;
  contenuCorrige?: string;
  listeCorrections?: string[];
  autoCorrection?: unknown;
  autocorrection?: unknown;
  titre?: string;
  titreExercice?: string;
  title?: string;
  consigne?: string;
  interactif?: boolean;
  interactifReady?: boolean;
  interactifObligatoire?: boolean;
  [key: string]: unknown;
};

type ExerciceModule = {
  default: new () => ExerciceInstance;
};

type CopyKey = "question" | "correction" | "autoCorrection";

const TREE_DATA = loadExerciseTree();
const EXERCISE_TREE = TREE_DATA.tree;
const EXERCISES = TREE_DATA.definitions;
const EXERCISES_BY_ID = TREE_DATA.definitionMap;
const DEFAULT_EXPANDED_CATEGORIES = collectCategoryPaths(EXERCISE_TREE);

const delimiters = [
  { left: "$$", right: "$$", display: true },
  { left: "$", right: "$", display: false },
  { left: "\\(", right: "\\)", display: false },
  { left: "\\[", right: "\\]", display: true }
];


const DEBUG_PREFIX = "[KopMaths]";
const DEBUG_APP_PREFIX = `${DEBUG_PREFIX}[App]`;
const DEBUG_CSS_PREFIX = `${DEBUG_PREFIX}[CSS]`;

function debugLog(...args: unknown[]): void {
  if (typeof console !== "undefined" && typeof console.debug === "function") {
    console.debug(DEBUG_APP_PREFIX, ...args);
  }
}

function debugInfo(...args: unknown[]): void {
  if (typeof console !== "undefined" && typeof console.info === "function") {
    console.info(DEBUG_APP_PREFIX, ...args);
  }
}

function debugWarn(...args: unknown[]): void {
  if (typeof console !== "undefined" && typeof console.warn === "function") {
    console.warn(DEBUG_APP_PREFIX, ...args);
  }
}

function startDebugTimer(label: string): void {
  if (typeof console !== "undefined" && typeof console.time === "function") {
    console.time(label);
  }
}

function endDebugTimer(label: string): void {
  if (typeof console !== "undefined" && typeof console.timeEnd === "function") {
    console.timeEnd(label);
  }
}

function debugCss(label: string, details: unknown): void {
  if (typeof console !== "undefined" && typeof console.debug === "function") {
    console.debug(DEBUG_CSS_PREFIX, label, details);
  }
}

debugInfo("Catalogue initial chargé", {
  definitions: EXERCISES.length,
  rootCategories: Object.keys(EXERCISE_TREE).length,
  fingerprint: TREE_DATA.fingerprint
});

type OrderedListContent = {
  rawHtml: string;
  html: string;
  latex: string;
};

function sanitizeStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map(entry => {
      if (typeof entry === "string") {
        return entry;
      }

      if (entry == null) {
        return "";
      }

      return String(entry);
    })
    .map(entry => entry.trim())
    .filter(Boolean);
}

function getCategoryTitlesFrom(
  definition: ExerciseDefinition | { categoryTitles?: unknown; categories?: unknown } | null | undefined
): string[] {
  if (!definition) {
    return [];
  }

  const record = definition as { categoryTitles?: unknown; categories?: unknown };
  const categoryTitles = sanitizeStringArray(record.categoryTitles);
  if (categoryTitles.length > 0) {
    return categoryTitles;
  }

  const categories = sanitizeStringArray(record.categories);
  if (categories.length > 0) {
    return categories;
  }

  return [];
}

function normalizeListItems(items: string[]): string[] {
  return items
    .map(item => (typeof item === "string" ? item : ""))
    .map(item => item.trim())
    .filter(Boolean);
}

function buildOrderedListContent(items: string[]): OrderedListContent {
  const trimmed = normalizeListItems(items);
  debugLog("Construction liste ordonnée", {
    total: items.length,
    retenus: trimmed.length
  });
  if (trimmed.length === 0) {
    debugWarn("Liste ordonnée vide après normalisation", { items });
    return { rawHtml: "", html: "", latex: "" };
  }

  const latex = trimmed.join("\n\n");
  const rawItems = trimmed.map(item => `<li>${item}</li>`).join("");
  const htmlItems = trimmed
    .map(item => `<li>${translateLatexToHtml(item)}</li>`)
    .join("");

  return {
    rawHtml: `<ol class="mathalea-numbered-list">${rawItems}</ol>`,
    html: `<ol class="mathalea-numbered-list">${htmlItems}</ol>`,
    latex
  };
}

function normalizeLatexForComparison(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function flattenToStrings(
  value: unknown,
  visited: Set<unknown> = new Set()
): string[] {
  if (value == null) return [];
  if (typeof value === "string") return [value];
  if (typeof value === "number" || typeof value === "boolean") {
    return [String(value)];
  }
  if (Array.isArray(value)) {
    return value.flatMap(entry => flattenToStrings(entry, visited));
  }
  if (typeof value === "object") {
    if (visited.has(value)) return [];
    visited.add(value);
    const obj = value as Record<string, unknown>;
    const preferredKeys = [
      "texte",
      "text",
      "reponse",
      "reponses",
      "correction",
      "value",
      "valeur",
      "phrase",
      "detail",
      "description",
      "solution",
      "solutions",
      "expected"
    ];
    for (const key of preferredKeys) {
      if (key in obj) {
        const nested = flattenToStrings(obj[key], visited);
        if (nested.length > 0) {
          return nested;
        }
      }
    }
    const aggregated: string[] = [];
    Object.values(obj).forEach(entry => {
      aggregated.push(...flattenToStrings(entry, visited));
    });
    return aggregated;
  }
  return [];
}

function extractCorrectionData(exercice: ExerciceInstance) {
  const correctionValues: string[] = [];
  const correctionRawValues: string[] = [];
  const correctionSeen = new Set<string>();
  const autoValues: string[] = [];
  const autoRawValues: string[] = [];
  const autoSeen = new Set<string>();

  const addUnique = (
    source: unknown,
    target: string[],
    seen: Set<string>,
    rawTarget: string[]
  ) => {
    flattenToStrings(source).forEach(entry => {
      const raw = entry.trim();
      if (!raw) return;
      const cleaned = raw.replace(/\s+/g, " ").trim();
      if (!cleaned) return;
      if (!seen.has(cleaned)) {
        seen.add(cleaned);
        target.push(cleaned);
        rawTarget.push(raw);
      }
    });
  };

  addUnique(
    exercice.listeCorrections,
    correctionValues,
    correctionSeen,
    correctionRawValues
  );
  addUnique(
    exercice.correction,
    correctionValues,
    correctionSeen,
    correctionRawValues
  );
  addUnique(
    exercice.contenuCorrige,
    correctionValues,
    correctionSeen,
    correctionRawValues
  );

  const autoSource =
    (exercice.autoCorrection as unknown) ??
    (exercice.autocorrection as unknown);
  addUnique(autoSource, autoValues, autoSeen, autoRawValues);

  debugLog("Extraction des corrections", {
    correctionCount: correctionValues.length,
    autoCorrectionCount: autoValues.length,
    rawPreview: correctionRawValues.slice(0, 2),
    autoPreview: autoRawValues.slice(0, 2)
  });

  if (correctionValues.length === 0 && autoValues.length === 0) {
    const titrePotentiel = extractExerciseTitle(exercice);
    debugWarn("Aucune correction détectée pour l'exercice", {
      titre: titrePotentiel,
      cles: Object.keys(exercice)
    });
  }

  return {
    corrections: correctionValues,
    autoCorrections: autoValues,
    rawCorrections: correctionRawValues,
    rawAutoCorrections: autoRawValues
  };
}

function buildQuestionContent(exercice: ExerciceInstance): OrderedListContent {
  const questions = Array.isArray(exercice.listeQuestions)
    ? exercice.listeQuestions.filter(
        (question): question is string => typeof question === "string"
      )
    : [];

  debugLog("Construction du contenu d'énoncé", {
    mode: questions.length > 0 ? "liste" : "contenu",
    questionCount: questions.length,
    hasContenu: typeof exercice.contenu === "string" && exercice.contenu.trim().length > 0
  });

  if (questions.length > 0) {
    return buildOrderedListContent(questions);
  }

  const contenu =
    typeof exercice.contenu === "string" ? exercice.contenu : "";
  if (!contenu) {
    debugWarn("Aucun contenu d'énoncé détecté", { clefs: Object.keys(exercice) });
  }
  return {
    rawHtml: contenu,
    html: translateLatexToHtml(contenu),
    latex: contenu
  };
}

function extractExerciseTitle(exercice: ExerciceInstance): string | undefined {
  const candidates = [
    exercice.titre,
    exercice.titreExercice,
    exercice.title,
    exercice.consigne
  ];
  for (const candidate of candidates) {
    if (typeof candidate === "string" && candidate.trim()) {
      return candidate.trim();
    }
  }
  return undefined;
}

function App() {
  const questionContainerRef = useRef<HTMLDivElement | null>(null);
  const correctionContainerRef = useRef<HTMLDivElement | null>(null);
  const autoCorrectionContainerRef = useRef<HTMLDivElement | null>(null);
  const interactionCleanupRef = useRef<(() => void) | null>(null);
  const exerciceRef = useRef<ExerciceInstance | null>(null);
  const moduleCacheRef = useRef(new Map<string, ExerciceModule>());
  const parameterValuesRef = useRef<ParameterValueMap>({});
  const currentDefinitionRef = useRef<ExerciseDefinition | null>(null);
  const requestIdRef = useRef(0);
  const copyTimeoutsRef = useRef<
    Partial<Record<CopyKey, ReturnType<typeof setTimeout>>>
  >({});

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExerciseId, setSelectedExerciseId] = useState<string | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [questionHtml, setQuestionHtml] = useState("");
  const [questionRawHtml, setQuestionRawHtml] = useState("");
  const [questionLatex, setQuestionLatex] = useState("");
  const [correctionItems, setCorrectionItems] = useState<string[]>([]);
  const [autoCorrectionItems, setAutoCorrectionItems] = useState<string[]>([]);
  const [correctionLatexItems, setCorrectionLatexItems] = useState<string[]>([]);
  const [autoCorrectionLatexItems, setAutoCorrectionLatexItems] =
    useState<string[]>([]);
  const [showCorrection, setShowCorrection] = useState(false);
  const [parameterFields, setParameterFields] = useState<ParameterField[]>([]);
  const [parameterValues, setParameterValues] = useState<ParameterValueMap>({});
  const [exerciseTitles, setExerciseTitles] = useState<Record<string, string>>({});
  const [isInteractive, setIsInteractive] = useState(false);
  const [exerciseSummary, setExerciseSummary] = useState<
    { title?: string; consigne?: string } | null
  >(null);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [copyFeedback, setCopyFeedback] = useState<
    Partial<Record<CopyKey, "copied" | "error">>
  >({});

  const updateParameterValues = useCallback((map: ParameterValueMap) => {
    parameterValuesRef.current = map;
    setParameterValues(map);
  }, []);

  const filteredExercises = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return EXERCISES;
    return EXERCISES.filter(exercise => {
      const title = exerciseTitles[exercise.id]?.toLowerCase() ?? "";
      return (
        exercise.searchableTitle.includes(term) ||
        title.includes(term)
      );
    });
  }, [searchTerm, exerciseTitles]);

  const hasSearch = searchTerm.trim().length > 0;

  const allCategoryPaths = useMemo(() => Array.from(DEFAULT_EXPANDED_CATEGORIES), []);
  const expandedCategoryCount = useMemo(() => {
    return allCategoryPaths.reduce((count, path) => {
      return count + (expandedCategories[path] ? 1 : 0);
    }, 0);
  }, [allCategoryPaths, expandedCategories]);
  const allCategoriesExpanded =
    allCategoryPaths.length > 0 && expandedCategoryCount === allCategoryPaths.length;

  const handleToggleAllCategories = useCallback(() => {
    if (allCategoriesExpanded) {
      setExpandedCategories({});
      return;
    }

    const nextEntries = Object.fromEntries(allCategoryPaths.map(path => [path, true] as const));
    setExpandedCategories(nextEntries);
  }, [allCategoriesExpanded, allCategoryPaths]);

  const displayedCorrections = useMemo(() => {
    const seen = new Set<string>();
    const combined: string[] = [];

    correctionItems.forEach(item => {
      const trimmed = item.trim();
      if (!trimmed || seen.has(trimmed)) return;
      seen.add(trimmed);
      combined.push(trimmed);
    });

    if (!isInteractive) {
      autoCorrectionItems.forEach(item => {
        const trimmed = item.trim();
        if (!trimmed || seen.has(trimmed)) return;
        seen.add(trimmed);
        combined.push(trimmed);
      });
    }

    return combined;
  }, [correctionItems, autoCorrectionItems, isInteractive]);

  const correctionHtml = useMemo(
    () => buildOrderedListContent(displayedCorrections).html,
    [displayedCorrections]
  );

  const autoCorrectionHtml = useMemo(
    () => buildOrderedListContent(autoCorrectionItems).html,
    [autoCorrectionItems]
  );

  const displayedCorrectionLatex = useMemo(() => {
    const seen = new Set<string>();
    const combined: string[] = [];

    correctionLatexItems.forEach(item => {
      const trimmed = item.trim();
      if (!trimmed) return;
      const normalized = normalizeLatexForComparison(trimmed);
      if (!normalized || seen.has(normalized)) return;
      seen.add(normalized);
      combined.push(trimmed);
    });

    if (!isInteractive) {
      autoCorrectionLatexItems.forEach(item => {
        const trimmed = item.trim();
        if (!trimmed) return;
        const normalized = normalizeLatexForComparison(trimmed);
        if (!normalized || seen.has(normalized)) return;
        seen.add(normalized);
        combined.push(trimmed);
      });
    }

    return combined.join("\n\n");
  }, [correctionLatexItems, autoCorrectionLatexItems, isInteractive]);

  const autoCorrectionLatexExport = useMemo(
    () =>
      autoCorrectionLatexItems
        .map(item => item.trim())
        .filter(Boolean)
        .join("\n\n"),
    [autoCorrectionLatexItems]
  );

  const questionLatexExport = useMemo(
    () => questionLatex.trim(),
    [questionLatex]
  );

  const latexExportSections = useMemo(
    () =>
      [
        {
          key: "question" as const,
          label: "Énoncé",
          value: questionLatexExport
        },
        {
          key: "correction" as const,
          label: "Correction",
          value: displayedCorrectionLatex.trim()
        },
        {
          key: "autoCorrection" as const,
          label: "Auto-correction",
          value: autoCorrectionLatexExport
        }
      ].filter(section => section.value.trim().length > 0),
    [questionLatexExport, displayedCorrectionLatex, autoCorrectionLatexExport]
  );

  const hasLatexData = latexExportSections.length > 0;



  const loadExercise = useCallback(
    async (
      definition: ExerciseDefinition,
      options: { applyOverrides?: boolean; withNewSeed?: boolean } = {}
    ) => {
      const timerLabel = `${DEBUG_APP_PREFIX} ${definition.id}`;
      const groupLabel = `${DEBUG_APP_PREFIX} Chargement exercice ${definition.id}`;
      let groupOpened = false;
      if (typeof console !== "undefined" && typeof console.groupCollapsed === "function") {
        console.groupCollapsed(groupLabel);
        groupOpened = true;
      }

      debugInfo("Début du chargement de l'exercice", {
        id: definition.id,
        relativePath: definition.relativePath,
        options
      });
      startDebugTimer(timerLabel);

      currentDefinitionRef.current = definition;
      setSelectedExerciseId(definition.id);
      setLoading(true);
      setError(null);
      const requestId = ++requestIdRef.current;

      try {
        const cacheKey = definition.relativePath;
        let module = moduleCacheRef.current.get(cacheKey);
        if (!module) {
          debugLog("Module absent du cache, tentative de chargement dynamique", {
            id: definition.id,
            relativePath: definition.relativePath
          });
          const loader = getExerciseLoader(definition.relativePath) as
            | (() => Promise<ExerciceModule>)
            | undefined;
          if (loader) {
            debugLog("Utilisation du loader Vite pour l'exercice", {
              relativePath: definition.relativePath
            });
            module = await loader();
          } else {
            debugWarn("Loader Vite introuvable, recours à un import dynamique", {
              importPath: definition.importPath
            });
            try {
              module = (await import(
                /* @vite-ignore */ definition.importPath
              )) as ExerciceModule;
            } catch (dynamicImportError) {
              debugWarn("Échec de l'import dynamique", dynamicImportError);
              throw new Error(
                `Impossible de charger l'exercice ${definition.importPath}`
              );
            }
          }
          if (requestId !== requestIdRef.current) {
            debugLog("Demande obsolète détectée, abandon du chargement", {
              requestId,
              courant: requestIdRef.current
            });
            return;
          }
          moduleCacheRef.current.set(cacheKey, module);
        } else {
          debugLog("Module trouvé dans le cache", {
            id: definition.id,
            relativePath: definition.relativePath
          });
        }

        if (!module) {
          throw new Error(
            `Le module de l'exercice ${definition.id} est vide après chargement.`
          );
        }

        const ExerciseClass = module.default;
        if (typeof ExerciseClass !== "function") {
          debugWarn("Module d'exercice sans export par défaut exploitable", {
            id: definition.id,
            cles: Object.keys(module as Record<string, unknown>)
          });
          throw new Error(
            `Export par défaut introuvable pour ${definition.importPath}`
          );
        }
        const exercice = new ExerciseClass();

        debugLog("Instance d'exercice initialisée", {
          clefs: Object.keys(exercice as Record<string, unknown>),
          titre: extractExerciseTitle(exercice)
        });

        const shouldActivate = Boolean(
          (exercice as Record<string, unknown>).interactifReady ||
            (exercice as Record<string, unknown>).interactifObligatoire
        );
        (exercice as Record<string, unknown>).interactif = shouldActivate;

        debugLog("Détermination du mode interactif", {
          shouldActivate,
          interactifReady: Boolean(
            (exercice as Record<string, unknown>).interactifReady
          ),
          interactifObligatoire: Boolean(
            (exercice as Record<string, unknown>).interactifObligatoire
          )
        });

        if (typeof window !== "undefined") {
          window.MathALEA = {
            ...(window.MathALEA ?? {}),
            [definition.id]: module
          };
        }

        const baseFields = buildParameterFields(
          exercice as Record<string, unknown>
        );
        debugLog("Paramètres détectés (initial)", {
          count: baseFields.length,
          chemins: baseFields.map(field => field.path)
        });

        let valuesToApply = createValueMap(baseFields);
        if (options.applyOverrides) {
          valuesToApply = {
            ...valuesToApply,
            ...parameterValuesRef.current
          };
        }

        debugLog("Valeurs de paramètres appliquées", valuesToApply);
        applyParameterValues(
          exercice as Record<string, unknown>,
          baseFields,
          valuesToApply
        );

        if (options.withNewSeed ?? true) {
          debugLog("Application d'une nouvelle graine aléatoire");
          exercice.applyNewSeed?.();
        }

        debugLog("Génération d'une nouvelle version de l'exercice");
        exercice.nouvelleVersion?.();

        const finalFields = buildParameterFields(
          exercice as Record<string, unknown>
        );
        setParameterFields(finalFields);
        const finalValues = createValueMap(finalFields);
        updateParameterValues(finalValues);
        debugLog("Paramètres finaux enregistrés", {
          count: finalFields.length,
          chemins: finalFields.map(field => field.path)
        });

        const {
          corrections,
          autoCorrections,
          rawCorrections,
          rawAutoCorrections
        } = extractCorrectionData(exercice);
        const questionContent = buildQuestionContent(exercice);

        if (requestId !== requestIdRef.current) {
          debugLog("Demande obsolète détectée après extraction des données", {
            requestId,
            courant: requestIdRef.current
          });
          return;
        }

        debugLog("Mise à jour de l'état React avec l'exercice chargé", {
          questionLatex: questionContent.latex?.slice(0, 120) ?? "",
          correctionCount: corrections.length,
          autoCorrectionCount: autoCorrections.length
        });

        exerciceRef.current = exercice;
        setIsInteractive(Boolean((exercice as Record<string, unknown>).interactif));
        setQuestionRawHtml(questionContent.rawHtml);
        setQuestionHtml(questionContent.html);
        setQuestionLatex(questionContent.latex ?? "");
        setCorrectionItems(corrections);
        setAutoCorrectionItems(autoCorrections);
        setCorrectionLatexItems(rawCorrections);
        setAutoCorrectionLatexItems(rawAutoCorrections);
        setCopyFeedback({});
        setShowCorrection(!shouldActivate);

        const title = extractExerciseTitle(exercice);
        setExerciseSummary({
          title,
          consigne:
            typeof exercice.consigne === "string" && exercice.consigne.trim()
              ? exercice.consigne
              : undefined
        });

        if (title) {
          setExerciseTitles(prev => ({
            ...prev,
            [definition.id]: title
          }));
        }

        if (typeof window !== "undefined") {
          (window as Record<string, unknown>).currentExercice = exercice;
          console.info("Exercice complet :", exercice);
        }

        debugInfo("Chargement de l'exercice terminé", {
          id: definition.id,
          corrections: corrections.length,
          autoCorrections: autoCorrections.length,
          interactif: shouldActivate
        });
      } catch (err) {
        if (requestId !== requestIdRef.current) {
          debugLog("Demande obsolète détectée lors de la gestion d'erreur", {
            requestId,
            courant: requestIdRef.current
          });
          return;
        }
        debugWarn("Erreur lors du chargement de l'exercice", err);
        console.error("Erreur lors du chargement de l'exercice", err);
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        if (requestId === requestIdRef.current) {
          setLoading(false);
        }
        if (groupOpened && typeof console !== "undefined" && typeof console.groupEnd === "function") {
          console.groupEnd();
        }
        endDebugTimer(timerLabel);
      }
    },
    [updateParameterValues]
  );

  const handleParameterChange = useCallback(
    (field: ParameterField, value: string | number | boolean) => {
      const next = {
        ...parameterValuesRef.current,
        [field.path]: value
      };
      updateParameterValues(next);
      setParameterFields(prev =>
        prev.map(item => (item.path === field.path ? { ...item, value } : item))
      );
    },
    [updateParameterValues]
  );

  const handleSelectExercise = useCallback(
    (definition: ExerciseDefinition) => {
      setExpandedCategories(prev => {
        const next = { ...prev };
        definition.categories.forEach((_, index) => {
          const path = definition.categories.slice(0, index + 1).join("/");
          next[path] = true;
        });
        return next;
      });
      loadExercise(definition, { applyOverrides: false, withNewSeed: true });
    },
    [loadExercise]
  );

  const handleApplyParameters = useCallback(() => {
    const definition = currentDefinitionRef.current;
    if (!definition) return;
    loadExercise(definition, { applyOverrides: true, withNewSeed: true });
  }, [loadExercise]);

  const handleResetParameters = useCallback(() => {
    const definition = currentDefinitionRef.current;
    if (!definition) return;
    updateParameterValues({});
    loadExercise(definition, { applyOverrides: false, withNewSeed: true });
  }, [loadExercise, updateParameterValues]);

  const handleGenerateNewVersion = useCallback(() => {
    const definition = currentDefinitionRef.current;
    if (!definition) return;
    loadExercise(definition, { applyOverrides: true, withNewSeed: true });
  }, [loadExercise]);

  const clearCopyTimeout = useCallback((key: CopyKey) => {
    const timeoutId = copyTimeoutsRef.current[key];
    if (timeoutId != null) {
      clearTimeout(timeoutId);
      delete copyTimeoutsRef.current[key];
    }
  }, []);

  const scheduleCopyFeedbackReset = useCallback(
    (key: CopyKey) => {
      if (typeof window === "undefined") return;
      clearCopyTimeout(key);
      const timeoutId = window.setTimeout(() => {
        setCopyFeedback(prev => {
          const next = { ...prev };
          delete next[key];
          return next;
        });
        delete copyTimeoutsRef.current[key];
      }, 2000);
      copyTimeoutsRef.current[key] = timeoutId;
    },
    [clearCopyTimeout]
  );

  const handleCopyLatex = useCallback(
    async (key: CopyKey, content: string) => {
      const text = content.trim();
      if (!text) return;

      try {
        if (typeof navigator === "undefined" || !navigator.clipboard) {
          throw new Error("Clipboard API unavailable");
        }
        await navigator.clipboard.writeText(text);
        setCopyFeedback(prev => ({
          ...prev,
          [key]: "copied"
        }));
      } catch (err) {
        console.warn("Impossible de copier le contenu LaTeX", err);
        setCopyFeedback(prev => ({
          ...prev,
          [key]: "error"
        }));
      } finally {
        scheduleCopyFeedbackReset(key);
      }
    },
    [scheduleCopyFeedbackReset]
  );

  useEffect(() => {
    if (!questionHtml) {
      debugLog("Aucun HTML de question à rendre");
      return;
    }
    if (!questionContainerRef.current) {
      debugWarn("Conteneur d'énoncé introuvable pour le rendu LaTeX");
      return;
    }

    try {
      renderMathInElement(questionContainerRef.current, {
        delimiters,
        throwOnError: false,
        strict: "ignore"
      });
      debugLog("Rendu LaTeX de l'énoncé terminé", { longueur: questionHtml.length });
    } catch (renderError) {
      debugWarn("Erreur lors du rendu LaTeX de l'énoncé", renderError);
    }
  }, [questionHtml]);

  useEffect(() => {
    if (!correctionHtml) {
      debugLog("Aucune correction HTML à rendre");
      return;
    }
    if (!correctionContainerRef.current) {
      debugWarn("Conteneur de correction introuvable pour le rendu LaTeX");
      return;
    }

    try {
      renderMathInElement(correctionContainerRef.current, {
        delimiters,
        throwOnError: false,
        strict: "ignore"
      });
      debugLog("Rendu LaTeX de la correction terminé", { longueur: correctionHtml.length });
    } catch (renderError) {
      debugWarn("Erreur lors du rendu LaTeX de la correction", renderError);
    }
  }, [correctionHtml]);

  useEffect(() => {
    if (!autoCorrectionHtml) {
      debugLog("Aucune auto-correction HTML à rendre");
      return;
    }
    if (!autoCorrectionContainerRef.current) {
      debugWarn("Conteneur d'auto-correction introuvable pour le rendu LaTeX");
      return;
    }

    try {
      renderMathInElement(autoCorrectionContainerRef.current, {
        delimiters,
        throwOnError: false,
        strict: "ignore"
      });
      debugLog("Rendu LaTeX de l'auto-correction terminé", { longueur: autoCorrectionHtml.length });
    } catch (renderError) {
      debugWarn("Erreur lors du rendu LaTeX de l'auto-correction", renderError);
    }
  }, [autoCorrectionHtml]);

  useEffect(() => {
    const container = questionContainerRef.current;
    if (!container) return;

    if (interactionCleanupRef.current) {
      interactionCleanupRef.current();
      interactionCleanupRef.current = null;
    }

    if (isInteractive && exerciceRef.current) {
      interactionCleanupRef.current = initializeExerciseInteraction({
        container,
        exerciseId: selectedExerciseId ?? "exercice",
        exercice: exerciceRef.current,
        rawContent: questionRawHtml
      });
    }
  }, [isInteractive, questionRawHtml, questionHtml, selectedExerciseId]);

  useEffect(() => {
    return () => {
      if (interactionCleanupRef.current) {
        interactionCleanupRef.current();
        interactionCleanupRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    return () => {
      Object.values(copyTimeoutsRef.current).forEach(timeoutId => {
        if (timeoutId != null) {
          clearTimeout(timeoutId);
        }
      });
      copyTimeoutsRef.current = {};
    };
  }, []);

  const selectedDefinition = useMemo(
    () =>
      (selectedExerciseId
        ? EXERCISES_BY_ID.get(selectedExerciseId) ?? null
        : null),
    [selectedExerciseId]
  );

  const selectedCategoryTitles = useMemo(
    () => getCategoryTitlesFrom(selectedDefinition),
    [selectedDefinition]
  );

  const selectedThemeTrailLabel = useMemo(
    () => selectedCategoryTitles.slice(1).join(" · "),
    [selectedCategoryTitles]
  );

  const handleToggleCategory = useCallback((fullPath: string, nextOpen: boolean) => {
    setExpandedCategories(prev => ({
      ...prev,
      [fullPath]: nextOpen
    }));
  }, []);

  const mainClassName = "min-h-screen bg-slate-100 text-slate-900";
  const layoutContainerClassName = "mx-auto max-w-6xl space-y-6 p-6";
  const asidePanelClassName = "space-y-4 self-start lg:sticky lg:top-28";
  const catalogueCardClassName = "rounded-lg bg-white p-4 shadow";
  const treeScrollContainerClassName = "mt-4 max-h-[60vh] overflow-y-auto pr-1";
  const treeListClassName = "space-y-2";
  const contentGridClassName =
    "grid grid-cols-1 gap-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start";

  useEffect(() => {
    debugCss("layout-classes", {
      main: mainClassName,
      layout: layoutContainerClassName,
      aside: asidePanelClassName,
      catalogueCard: catalogueCardClassName,
      treeScrollContainer: treeScrollContainerClassName,
      treeList: treeListClassName,
      contentGrid: contentGridClassName
    });
  }, [
    mainClassName,
    layoutContainerClassName,
    asidePanelClassName,
    catalogueCardClassName,
    treeScrollContainerClassName,
    treeListClassName,
    contentGridClassName
  ]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const container = questionContainerRef.current;
    if (!container) {
      debugCss("question-container", "indisponible pour l'inspection CSS");
      return;
    }

    const orderedLists = Array.from(
      container.querySelectorAll<HTMLOListElement>("ol")
    );
    if (orderedLists.length === 0) {
      debugCss("ordered-lists", "aucune liste ordonnée détectée dans l'énoncé");
    }

    orderedLists.slice(0, 5).forEach((list, index) => {
      const computed = window.getComputedStyle(list);
      debugCss("ordered-list-style", {
        index,
        classList: Array.from(list.classList),
        listStyleType: computed.listStyleType,
        listStylePosition: computed.listStylePosition,
        paddingLeft: computed.paddingLeft,
        marginLeft: computed.marginLeft
      });
    });

    if (orderedLists.length > 5) {
      debugCss(
        "ordered-list-style",
        `+${orderedLists.length - 5} listes supplémentaires non journalisées`
      );
    }

    const interactiveBlocks = Array.from(
      container.querySelectorAll<HTMLElement>(
        ".mathalea-question-interactive"
      )
    );
    interactiveBlocks.slice(0, 5).forEach((block, index) => {
      const computed = window.getComputedStyle(block);
      debugCss("interactive-block-style", {
        index,
        classList: Array.from(block.classList),
        borderLeftColor: computed.borderLeftColor,
        backgroundColor: computed.backgroundColor,
        padding: computed.padding,
        margin: computed.margin
      });
    });

    if (interactiveBlocks.length > 5) {
      debugCss(
        "interactive-block-style",
        `+${interactiveBlocks.length - 5} blocs supplémentaires non journalisés`
      );
    }
  }, [questionHtml, questionRawHtml, isInteractive]);

  useEffect(() => {
    debugCss("tree-mode", hasSearch ? "search-results" : "navigation-tree");
  }, [hasSearch]);

  useEffect(() => {
    debugCss("expanded-categories", {
      expanded: expandedCategoryCount,
      total: allCategoryPaths.length
    });
  }, [expandedCategoryCount, allCategoryPaths]);

  useEffect(() => {
    debugCss("selected-exercise", selectedExerciseId ?? "none");
  }, [selectedExerciseId]);

  const renderTree = useCallback(
    (nodes: Record<string, ExerciseNode>): JSX.Element | null => {
      const entries = getSortedChildren(nodes);
      if (entries.length === 0) return null;

      return (
        <ul className={treeListClassName}>
          {entries.map(node => {
            if (node.type === "category") {
              const expanded = expandedCategories[node.fullPath] ?? false;
              const displayTitle =
                node.title && node.title.trim().length > 0 ? node.title : node.id;
              const showIdentifier = node.id && node.id !== displayTitle;
              return (
                <li key={node.fullPath}>
                  <details
                    open={expanded}
                    className="group"
                    onToggle={event =>
                      handleToggleCategory(node.fullPath, event.currentTarget.open)
                    }
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-2 rounded px-2 py-1 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100">
                      <span className="flex items-center gap-2">
                        <span aria-hidden="true" className="text-base leading-none">
                          📁
                        </span>
                        <span className="flex flex-col text-left">
                          <span className="font-semibold tracking-wide">
                            {displayTitle}
                          </span>
                          {showIdentifier && (
                            <span className="text-xs font-normal text-slate-500">
                              {node.id}
                            </span>
                          )}
                        </span>
                      </span>
                      <span className="text-[10px] uppercase tracking-wide text-slate-400">
                        {expanded ? "Masquer" : "Afficher"}
                      </span>
                    </summary>
                    <div className="ml-4 mt-2 border-l border-slate-200 pl-3">
                      {renderTree(node.children)}
                    </div>
                  </details>
                </li>
              );
            }

            const definition = EXERCISES_BY_ID.get(node.definitionId);
            if (!definition) {
              return null;
            }

            const title =
              exerciseTitles[node.definitionId] ??
              definition.title ??
              definition.label ??
              `Exercice ${node.definitionId}`;
            const isActive = node.definitionId === selectedExerciseId;
            const definitionCategoryTitles = getCategoryTitlesFrom(definition);
            const themeTrail = definitionCategoryTitles.slice(1).join(" · ");

            return (
              <li key={node.fullPath}>
                <button
                  type="button"
                  onClick={() => handleSelectExercise(definition)}
                  className={`mt-1 w-full rounded border px-3 py-2 text-left text-sm transition-colors ${
                    isActive
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-white text-slate-800 hover:border-slate-400"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span aria-hidden="true" className="text-base leading-none">
                      📘
                    </span>
                    <span>
                      <span className="block font-semibold">{title}</span>
                      {themeTrail && (
                        <span className="mt-1 block text-xs text-slate-500">
                          {themeTrail}
                        </span>
                      )}
                      <span className="mt-1 block text-xs text-slate-500">
                        ID : {definition.id} · Niveau : {definition.niveau}
                      </span>
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      );
    },
    [
      expandedCategories,
      exerciseTitles,
      handleSelectExercise,
      handleToggleCategory,
      selectedExerciseId,
      treeListClassName
    ]
  );

  return (
    <main id="main-content" className={mainClassName}>
      <div className={layoutContainerClassName}>
        <header>
          <h1 className="text-3xl font-bold">Kop Maths 974</h1>
          <p className="text-slate-600">
            Aperçu dynamique et interactif des exercices générés par MathALEA.
          </p>
        </header>

        <div className={contentGridClassName}>
          <aside className={asidePanelClassName}>
            <div className={catalogueCardClassName}>
              <h2 className="text-lg font-semibold">Catalogue d'exercices</h2>
              <label className="mt-4 block text-sm font-medium text-slate-700">
                Rechercher un exercice
              </label>
              <input
                type="search"
                value={searchTerm}
                onChange={event => setSearchTerm(event.target.value)}
                placeholder="Titre, niveau ou identifiant"
                className="mt-2 w-full rounded border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300"
              />
              {!hasSearch && (
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                  <button
                    type="button"
                    onClick={handleToggleAllCategories}
                    className="inline-flex items-center gap-1 rounded px-2 py-1 font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
                  >
                    {allCategoriesExpanded ? "Tout masquer" : "Tout afficher"}
                  </button>
                  <span>
                    {allCategoryPaths.length === 0
                      ? "Aucune catégorie"
                      : `${expandedCategoryCount}/${allCategoryPaths.length} ouverts`}
                  </span>
                </div>
              )}
              <div className={treeScrollContainerClassName}>
                {hasSearch ? (
                  <ul className="space-y-2">
                    {filteredExercises.map(exercise => {
                      const title =
                        exerciseTitles[exercise.id] ??
                        exercise.title ??
                        exercise.label ??
                        `Exercice ${exercise.id}`;
                      const isActive = exercise.id === selectedExerciseId;
                      const exerciseCategoryTitles = getCategoryTitlesFrom(exercise);
                      const themeTrail = exerciseCategoryTitles.slice(1).join(" · ");
                      return (
                        <li key={exercise.id}>
                          <button
                            type="button"
                            onClick={() => handleSelectExercise(exercise)}
                            className={`w-full rounded border px-3 py-2 text-left text-sm transition-colors ${
                              isActive
                                ? "border-slate-900 bg-slate-900 text-white"
                                : "border-slate-200 bg-white text-slate-800 hover:border-slate-400"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <span aria-hidden="true" className="text-base leading-none">
                                📘
                              </span>
                              <span>
                                <span className="block font-semibold">{title}</span>
                                {themeTrail && (
                                  <span className="mt-1 block text-xs text-slate-500">
                                    {themeTrail}
                                  </span>
                                )}
                                <span className="mt-1 block text-xs text-slate-500">
                                  ID : {exercise.id} · Niveau : {exercise.niveau}
                                </span>
                              </span>
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <div className="space-y-2">
                    {renderTree(EXERCISE_TREE)}
                  </div>
                )}
              </div>
            </div>
          </aside>

          <section className="space-y-6">
            {error && (
              <div className="rounded border border-red-300 bg-red-100 p-4 text-red-700">
                {error}
              </div>
            )}

            {selectedDefinition ? (
              <>
                <section className="rounded-lg bg-white p-6 shadow">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold">
                        {exerciseSummary?.title ??
                          exerciseTitles[selectedDefinition.id] ??
                          selectedDefinition.title ??
                          `Exercice ${selectedDefinition.id}`}
                      </h2>
                      {selectedThemeTrailLabel && (
                        <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">
                          {selectedThemeTrailLabel}
                        </p>
                      )}
                      <p className="mt-1 text-sm text-slate-600">
                        ID : {selectedDefinition.id} · Niveau : {selectedDefinition.niveau}
                      </p>
                      {exerciseSummary?.consigne && (
                        <p className="mt-3 text-sm text-slate-700">
                          {exerciseSummary.consigne}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                          isInteractive
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-slate-200 text-slate-700"
                        }`}
                      >
                        {isInteractive ? "Mode interactif" : "Mode lecture"}
                      </span>
                      <button
                        type="button"
                        onClick={handleGenerateNewVersion}
                        disabled={loading}
                        className="rounded bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
                      >
                        Nouvelle version
                      </button>
                    </div>
                  </div>
                  {loading && (
                    <p className="mt-4 text-sm text-slate-500">
                      Chargement de l'exercice…
                    </p>
                  )}
                </section>

                <section className="rounded-lg bg-white p-6 shadow">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Paramètres</h3>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={handleApplyParameters}
                        disabled={loading || parameterFields.length === 0}
                        className="rounded bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
                      >
                        Appliquer
                      </button>
                      <button
                        type="button"
                        onClick={handleResetParameters}
                        disabled={loading || parameterFields.length === 0}
                        className="rounded border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-400"
                      >
                        Réinitialiser
                      </button>
                    </div>
                  </div>
                  {parameterFields.length === 0 ? (
                    <p className="mt-4 text-sm text-slate-600">
                      Aucun paramètre disponible pour cet exercice.
                    </p>
                  ) : (
                    <form
                      className="mt-4 grid gap-4 md:grid-cols-2"
                      onSubmit={event => event.preventDefault()}
                    >
                      {parameterFields.map(field => {
                        const rawValue =
                          parameterValues[field.path] ?? field.value;
                        if (field.type === "boolean") {
                          return (
                            <label
                              key={field.path}
                              className="flex items-start gap-3 rounded border border-slate-200 p-3 text-sm shadow-sm"
                            >
                              <input
                                type="checkbox"
                                checked={Boolean(rawValue)}
                                onChange={event =>
                                  handleParameterChange(
                                    field,
                                    event.target.checked
                                  )
                                }
                                className="mt-1 h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-500"
                              />
                              <span>
                                <span className="font-medium text-slate-800">
                                  {field.label}
                                </span>
                                {field.help && (
                                  <span className="mt-1 block text-xs text-slate-500">
                                    {field.help}
                                  </span>
                                )}
                              </span>
                            </label>
                          );
                        }

                        if (field.type === "select" && field.options) {
                          return (
                            <label
                              key={field.path}
                              className="flex flex-col gap-2 text-sm"
                            >
                              <span className="font-medium text-slate-700">
                                {field.label}
                              </span>
                              <select
                                value={String(rawValue ?? "")}
                                onChange={event =>
                                  handleParameterChange(
                                    field,
                                    event.target.value
                                  )
                                }
                                className="rounded border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300"
                              >
                                {field.options.map(option => (
                                  <option key={option.value} value={option.value}>
                                    {option.label}
                                  </option>
                                ))}
                              </select>
                              {field.help && (
                                <span className="text-xs text-slate-500">
                                  {field.help}
                                </span>
                              )}
                            </label>
                          );
                        }

                        if (field.type === "number") {
                          const numericValue =
                            typeof rawValue === "number"
                              ? rawValue
                              : Number(rawValue);
                          return (
                            <label
                              key={field.path}
                              className="flex flex-col gap-2 text-sm"
                            >
                              <span className="font-medium text-slate-700">
                                {field.label}
                              </span>
                              <input
                                type="number"
                                value={
                                  Number.isFinite(numericValue)
                                    ? numericValue
                                    : ""
                                }
                                onChange={event => {
                                  if (event.target.value === "") {
                                    return;
                                  }
                                  const parsed = Number(event.target.value);
                                  if (!Number.isNaN(parsed)) {
                                    handleParameterChange(field, parsed);
                                  }
                                }}
                                className="rounded border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300"
                              />
                              {field.help && (
                                <span className="text-xs text-slate-500">
                                  {field.help}
                                </span>
                              )}
                            </label>
                          );
                        }

                        return (
                          <label
                            key={field.path}
                            className="flex flex-col gap-2 text-sm"
                          >
                            <span className="font-medium text-slate-700">
                              {field.label}
                            </span>
                            <input
                              type="text"
                              value={String(rawValue ?? "")}
                              onChange={event =>
                                handleParameterChange(
                                  field,
                                  event.target.value
                                )
                              }
                              className="rounded border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300"
                            />
                            {field.help && (
                              <span className="text-xs text-slate-500">
                                {field.help}
                              </span>
                            )}
                          </label>
                        );
                      })}
                    </form>
                  )}
                </section>

                <section className="rounded-lg bg-white p-6 shadow">
                  <h3 className="text-lg font-semibold">Questions</h3>
                  {questionHtml ? (
                    <div
                      ref={questionContainerRef}
                      className="mt-4 space-y-4"
                      dangerouslySetInnerHTML={{ __html: questionHtml }}
                    />
                  ) : (
                    <p className="mt-4 text-sm text-slate-600">
                      Sélectionnez un exercice pour afficher son contenu.
                    </p>
                  )}
                </section>

                <section className="rounded-lg bg-white p-6 shadow">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Correction</h3>
                    <button
                      type="button"
                      onClick={() => setShowCorrection(prev => !prev)}
                      className="rounded border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100"
                    >
                      {showCorrection ? "Masquer" : "Afficher"} la correction
                    </button>
                  </div>
                  {showCorrection ? (
                    <>
                      {correctionHtml ? (
                        <div
                          ref={correctionContainerRef}
                          className="mt-4 space-y-4"
                          dangerouslySetInnerHTML={{ __html: correctionHtml }}
                        />
                      ) : (
                        <p className="mt-4 text-sm text-slate-600">
                          Aucune correction disponible pour le moment.
                        </p>
                      )}

                      {isInteractive && autoCorrectionItems.length > 0 && (
                        <details className="mt-4 rounded border border-slate-200 bg-slate-50 p-4 text-sm">
                          <summary className="cursor-pointer font-semibold text-slate-700">
                            Réponses attendues (auto-correction)
                          </summary>
                          <div
                            ref={autoCorrectionContainerRef}
                            className="mt-3 space-y-2"
                            dangerouslySetInnerHTML={{
                              __html: autoCorrectionHtml
                            }}
                          />
                        </details>
                      )}
                    </>
                  ) : (
                    <p className="mt-4 text-sm text-slate-600">
                      La correction est masquée. Cliquez sur le bouton pour l'afficher.
                    </p>
                  )}
                </section>

                {hasLatexData && (
                  <section className="rounded-lg bg-white p-6 shadow">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-lg font-semibold">Export LaTeX</h3>
                      <p className="text-xs text-slate-500">
                        Copiez le contenu brut pour l'intégrer dans vos documents.
                      </p>
                    </div>
                    <div className="mt-4 space-y-4">
                      {latexExportSections.map(section => (
                        <div key={section.key} className="space-y-2">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <h4 className="text-sm font-semibold text-slate-700">
                              {section.label}
                            </h4>
                            <div className="flex items-center gap-2">
                              {copyFeedback[section.key] === "copied" && (
                                <span className="text-xs font-semibold text-emerald-600">
                                  Copié !
                                </span>
                              )}
                              {copyFeedback[section.key] === "error" && (
                                <span className="text-xs font-semibold text-red-600">
                                  Copie impossible
                                </span>
                              )}
                              <button
                                type="button"
                                onClick={() => handleCopyLatex(section.key, section.value)}
                                disabled={!section.value.trim()}
                                className="inline-flex items-center gap-2 rounded border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
                              >
                                Copier
                              </button>
                            </div>
                          </div>
                          <textarea
                            value={section.value}
                            readOnly
                            rows={Math.min(
                              12,
                              Math.max(3, section.value.split(/\n/).length + 1)
                            )}
                            className="w-full resize-y rounded border border-slate-300 bg-slate-50 px-3 py-2 text-xs font-mono leading-relaxed text-slate-700 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300"
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </>
            ) : (
              <section className="rounded-lg bg-white p-6 text-sm text-slate-600 shadow">
                Sélectionnez un exercice dans la liste pour commencer l'exploration.
              </section>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
