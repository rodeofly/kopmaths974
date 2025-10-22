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

type ExerciseDefinition = {
  id: string;
  niveau: string;
  path: string;
};

const EXERCISES: ExerciseDefinition[] = [
  { id: "CM1M1", niveau: "CM1", path: "@mathalea/exercices/cm1/CM1M1" },
  { id: "CM1M3", niveau: "CM1", path: "@mathalea/exercices/cm1/CM1M3" },
  { id: "CM1N3", niveau: "CM1", path: "@mathalea/exercices/cm1/CM1N3" },
  { id: "CM2D1", niveau: "CM2", path: "@mathalea/exercices/cm2/CM2D1" },
  { id: "CM2D3n", niveau: "CM2", path: "@mathalea/exercices/cm2/CM2D3n" },
  { id: "CM2G2", niveau: "CM2", path: "@mathalea/exercices/cm2/CM2G2" },
  { id: "CM2G3", niveau: "CM2", path: "@mathalea/exercices/cm2/CM2G3" },
  { id: "CM2G5", niveau: "CM2", path: "@mathalea/exercices/cm2/CM2G5" },
  { id: "CM2I1", niveau: "CM2", path: "@mathalea/exercices/cm2/CM2I1" },
  { id: "CM2N1", niveau: "CM2", path: "@mathalea/exercices/cm2/CM2N1" },
  { id: "CM2N2", niveau: "CM2", path: "@mathalea/exercices/cm2/CM2N2" },
  { id: "CM2N3", niveau: "CM2", path: "@mathalea/exercices/cm2/CM2N3" },
  { id: "CM2N4", niveau: "CM2", path: "@mathalea/exercices/cm2/CM2N4" },
  { id: "6N5-3", niveau: "6e", path: "@mathalea/exercices/6e/6N5-3" }
];

const delimiters = [
  { left: "$$", right: "$$", display: true },
  { left: "$", right: "$", display: false },
  { left: "\\(", right: "\\)", display: false },
  { left: "\\[", right: "\\]", display: true }
];

function buildOrderedListRaw(items: string[]): string {
  const trimmed = items
    .map(item => (typeof item === "string" ? item : ""))
    .map(item => item.trim())
    .filter(Boolean);
  if (trimmed.length === 0) return "";
  return `<ol class="mathalea-numbered-list">${trimmed
    .map(item => `<li>${item}</li>`)
    .join("")}</ol>`;
}

function buildOrderedListHtml(items: string[]): string {
  const trimmed = items
    .map(item => (typeof item === "string" ? item : ""))
    .map(item => item.trim())
    .filter(Boolean);
  if (trimmed.length === 0) return "";
  return `<ol class="mathalea-numbered-list">${trimmed
    .map(item => `<li>${translateLatexToHtml(item)}</li>`)
    .join("")}</ol>`;
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
  const correctionSeen = new Set<string>();
  const autoValues: string[] = [];
  const autoSeen = new Set<string>();

  const addUnique = (
    source: unknown,
    target: string[],
    seen: Set<string>
  ) => {
    flattenToStrings(source).forEach(entry => {
      const cleaned = entry.replace(/\s+/g, " ").trim();
      if (!cleaned) return;
      if (!seen.has(cleaned)) {
        seen.add(cleaned);
        target.push(cleaned);
      }
    });
  };

  addUnique(exercice.listeCorrections, correctionValues, correctionSeen);
  addUnique(exercice.correction, correctionValues, correctionSeen);
  addUnique(exercice.contenuCorrige, correctionValues, correctionSeen);

  const autoSource =
    (exercice.autoCorrection as unknown) ??
    (exercice.autocorrection as unknown);
  addUnique(autoSource, autoValues, autoSeen);

  return { corrections: correctionValues, autoCorrections: autoValues };
}

function buildQuestionContent(exercice: ExerciceInstance) {
  const questions = Array.isArray(exercice.listeQuestions)
    ? exercice.listeQuestions.filter(
        (question): question is string => typeof question === "string"
      )
    : [];

  if (questions.length > 0) {
    return {
      rawHtml: buildOrderedListRaw(questions),
      html: buildOrderedListHtml(questions)
    };
  }

  const contenu =
    typeof exercice.contenu === "string" ? exercice.contenu : "";
  return {
    rawHtml: contenu,
    html: translateLatexToHtml(contenu)
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

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExerciseId, setSelectedExerciseId] = useState<string | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [questionHtml, setQuestionHtml] = useState("");
  const [questionRawHtml, setQuestionRawHtml] = useState("");
  const [correctionItems, setCorrectionItems] = useState<string[]>([]);
  const [autoCorrectionItems, setAutoCorrectionItems] = useState<string[]>([]);
  const [showCorrection, setShowCorrection] = useState(false);
  const [parameterFields, setParameterFields] = useState<ParameterField[]>([]);
  const [parameterValues, setParameterValues] = useState<ParameterValueMap>({});
  const [exerciseTitles, setExerciseTitles] = useState<Record<string, string>>({});
  const [isInteractive, setIsInteractive] = useState(false);
  const [exerciseSummary, setExerciseSummary] = useState<
    { title?: string; consigne?: string } | null
  >(null);

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
        exercise.id.toLowerCase().includes(term) ||
        exercise.niveau.toLowerCase().includes(term) ||
        title.includes(term)
      );
    });
  }, [searchTerm, exerciseTitles]);

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
    () => buildOrderedListHtml(displayedCorrections),
    [displayedCorrections]
  );

  const autoCorrectionHtml = useMemo(
    () => buildOrderedListHtml(autoCorrectionItems),
    [autoCorrectionItems]
  );

  const loadExercise = useCallback(
    async (
      definition: ExerciseDefinition,
      options: { applyOverrides?: boolean; withNewSeed?: boolean } = {}
    ) => {
      currentDefinitionRef.current = definition;
      setSelectedExerciseId(definition.id);
      setLoading(true);
      setError(null);
      const requestId = ++requestIdRef.current;

      try {
        let module = moduleCacheRef.current.get(definition.id);
        if (!module) {
          module = await import(definition.path);
          if (requestId !== requestIdRef.current) return;
          moduleCacheRef.current.set(definition.id, module);
        }

        const ExerciseClass = module.default;
        const exercice = new ExerciseClass();

        const shouldActivate = Boolean(
          (exercice as Record<string, unknown>).interactifReady ||
            (exercice as Record<string, unknown>).interactifObligatoire
        );
        (exercice as Record<string, unknown>).interactif = shouldActivate;

        if (typeof window !== "undefined") {
          window.MathALEA = {
            ...(window.MathALEA ?? {}),
            [definition.id]: module
          };
        }

        const baseFields = buildParameterFields(
          exercice as Record<string, unknown>
        );

        let valuesToApply = createValueMap(baseFields);
        if (options.applyOverrides) {
          valuesToApply = {
            ...valuesToApply,
            ...parameterValuesRef.current
          };
        }

        applyParameterValues(
          exercice as Record<string, unknown>,
          baseFields,
          valuesToApply
        );

        if (options.withNewSeed ?? true) {
          exercice.applyNewSeed?.();
        }

        exercice.nouvelleVersion?.();

        const finalFields = buildParameterFields(
          exercice as Record<string, unknown>
        );
        setParameterFields(finalFields);
        const finalValues = createValueMap(finalFields);
        updateParameterValues(finalValues);

        const { corrections, autoCorrections } = extractCorrectionData(exercice);
        const questionContent = buildQuestionContent(exercice);

        if (requestId !== requestIdRef.current) return;

        exerciceRef.current = exercice;
        setIsInteractive(Boolean((exercice as Record<string, unknown>).interactif));
        setQuestionRawHtml(questionContent.rawHtml);
        setQuestionHtml(questionContent.html);
        setCorrectionItems(corrections);
        setAutoCorrectionItems(autoCorrections);
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
      } catch (err) {
        if (requestId !== requestIdRef.current) return;
        console.error("Erreur lors du chargement de l'exercice", err);
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        if (requestId === requestIdRef.current) {
          setLoading(false);
        }
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

  useEffect(() => {
    if (!questionHtml || !questionContainerRef.current) return;
    renderMathInElement(questionContainerRef.current, {
      delimiters,
      throwOnError: false,
      strict: "ignore"
    });
  }, [questionHtml]);

  useEffect(() => {
    if (!correctionHtml || !correctionContainerRef.current) return;
    renderMathInElement(correctionContainerRef.current, {
      delimiters,
      throwOnError: false,
      strict: "ignore"
    });
  }, [correctionHtml]);

  useEffect(() => {
    if (!autoCorrectionHtml || !autoCorrectionContainerRef.current) return;
    renderMathInElement(autoCorrectionContainerRef.current, {
      delimiters,
      throwOnError: false,
      strict: "ignore"
    });
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

  const selectedDefinition = useMemo(
    () =>
      EXERCISES.find(exercise => exercise.id === selectedExerciseId) ?? null,
    [selectedExerciseId]
  );

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 p-6">
        <header>
          <h1 className="text-3xl font-bold">Kop Maths 974</h1>
          <p className="text-slate-600">
            Aperçu dynamique et interactif des exercices générés par MathALEA.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[320px,1fr]">
          <aside className="space-y-4">
            <div className="rounded-lg bg-white p-4 shadow">
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
              <ul className="mt-4 max-h-[60vh] space-y-2 overflow-y-auto pr-1">
                {filteredExercises.map(exercise => {
                  const title =
                    exerciseTitles[exercise.id] ?? `Exercice ${exercise.id}`;
                  const isActive = exercise.id === selectedExerciseId;
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
                        <span className="block font-semibold">{title}</span>
                        <span className="mt-1 block text-xs text-slate-500">
                          ID : {exercise.id} · Niveau : {exercise.niveau}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
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
                          `Exercice ${selectedDefinition.id}`}
                      </h2>
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
