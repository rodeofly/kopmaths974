/*
 * Utility helpers dedicated to reading the MathALEA exercise catalogue and
 * exposing it as a hierarchical tree that mirrors the original repository
 * structure.
 */

const DEBUG_PREFIX = "[KopMaths][ExerciseTree]";

function treeDebug(...args: unknown[]): void {
  if (typeof console !== "undefined" && typeof console.debug === "function") {
    console.debug(DEBUG_PREFIX, ...args);
  }
}

function treeInfo(...args: unknown[]): void {
  if (typeof console !== "undefined" && typeof console.info === "function") {
    console.info(DEBUG_PREFIX, ...args);
  }
}

function treeWarn(...args: unknown[]): void {
  if (typeof console !== "undefined" && typeof console.warn === "function") {
    console.warn(DEBUG_PREFIX, ...args);
  }
}

const CATEGORY_NAME_OVERRIDES: Record<string, string> = {
  cm1: "CM1",
  cm2: "CM2",
  c3: "CM1/CM2",
  ce1: "CE1",
  ce2: "CE2",
  cp: "CP",
  "6e": "6e",
  "5e": "5e",
  "4e": "4e",
  "3e": "3e",
  "2e": "2nde",
  "2nde": "2nde",
  "1e": "1re",
  "1re": "1re",
  premiere: "Première",
  term: "Terminale",
  terminale: "Terminale",
  lycee: "Lycée",
  college: "Collège",
  cycle3: "Cycle 3",
  cycle4: "Cycle 4",
  cm1cm2: "CM1/CM2",
  cm1cm2cycle3: "CM1/CM2 – Cycle 3",
  c3c: "CM1C1 : Calcul mental",
  c3c1: "CM1C1 : Calcul mental",
  c3c2: "CM1M1 : Longueurs",
  c3c3: "CM1M3 : Contenances",
  c3d: "CM2D1 : Organisation et gestion de données",
  c3i: "CM2I1 : Pensée informatique",
  c3i1: "CM2I1 : Pensée informatique",
  c3m: "CM1M2 : Grandeurs et mesures",
  c3n: "CM2N1 : Nombres entiers",
  c3n1: "CM2N1 : Nombres entiers",
  c3n2: "CM2N2 : Fractions",
  c3n3: "CM2N4 : Addition, soustraction, multiplication, division"
};

export interface ExerciseDefinition {
  id: string;
  niveau: string;
  importPath: string;
  relativePath: string;
  categories: string[];
  categoryTitles: string[];
  tags: string[];
  label: string;
  title: string;
  searchableTitle: string;
  order: number;
  uuid?: string;
}

interface ExerciseNodeBase {
  id: string;
  type: "category" | "exercise";
  title: string;
  searchableTitle: string;
  fullPath: string;
  order: number;
}

export interface ExerciseCategoryNode extends ExerciseNodeBase {
  type: "category";
  segment: string;
  children: Record<string, ExerciseNode>;
}

export interface ExerciseLeafNode extends ExerciseNodeBase {
  type: "exercise";
  path: string;
  definitionId: string;
  niveau: string;
  categories: string[];
  label: string;
}

export type ExerciseNode = ExerciseCategoryNode | ExerciseLeafNode;

export interface ExerciseTreeData {
  tree: Record<string, ExerciseNode>;
  definitions: ExerciseDefinition[];
  definitionMap: Map<string, ExerciseDefinition>;
  fingerprint: string;
}

type ExerciseTreeCache = {
  version: number;
  fingerprint: string;
  generatedAt: string;
  tree: Record<string, ExerciseNode>;
  definitions: ExerciseDefinition[];
};

const CACHE_KEY = "mathalea.exerciseTree.v2";
const CACHE_VERSION = 1;

export function normalizeRelativePath(path: string): string {
  return path.replace(/\\/g, "/").replace(/^\.\/+/, "").replace(/^\//, "");
}

const moduleGlob = import.meta.glob("@exos/**/*.ts");
const moduleIds = Object.keys(moduleGlob);

if (moduleIds.length === 0) {
  treeWarn("Aucun module d'exercice détecté via import.meta.glob");
}

const loaderMap = new Map<string, () => Promise<unknown>>();
const modulePaths: string[] = [];

Object.entries(moduleGlob).forEach(([moduleId, loader]) => {
  const relativePath = extractRelativeExercisePath(moduleId);
  if (!relativePath) {
    treeWarn("Impossible de déterminer le chemin relatif pour un module", { moduleId });
    return;
  }

  if (!relativePath.endsWith(".ts")) {
    return;
  }

  const normalized = normalizeRelativePath(relativePath);
  if (!loaderMap.has(normalized)) {
    loaderMap.set(normalized, loader);
    modulePaths.push(normalized);
  }
});

modulePaths.sort((a, b) => a.localeCompare(b, "fr", { sensitivity: "base" }));

const jsonModules = import.meta.glob("@mathalea/src/json/**/*.json", { eager: true });

type JsonObject = Record<string, unknown>;

type JsonModuleEntry = {
  sourcePath: string;
  normalizedPath: string;
  data: unknown;
};

const jsonEntries: JsonModuleEntry[] = Object.entries(jsonModules).map(([path, module]) => ({
  sourcePath: path,
  normalizedPath: normalizeRelativePath(path),
  data: extractModuleDefault(module)
}));

const jsonFingerprint = new Map<string, string>();

function extractModuleDefault(module: unknown): unknown {
  if (
    module &&
    typeof module === "object" &&
    "default" in (module as Record<string, unknown>) &&
    (module as Record<string, unknown>).default !== undefined
  ) {
    return (module as Record<string, unknown>).default;
  }

  return module;
}

function isPlainObject(value: unknown): value is JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function stableSerialize(value: unknown): string {
  if (Array.isArray(value)) {
    return `[${value.map(item => stableSerialize(item)).join(",")}]`;
  }

  if (isPlainObject(value)) {
    const entries = Object.entries(value).sort((a, b) =>
      a[0].localeCompare(b[0], "fr", { sensitivity: "base" })
    );
    return `{${entries
      .map(([key, val]) => `${JSON.stringify(key)}:${stableSerialize(val)}`)
      .join(",")}}`;
  }

  const serialized = JSON.stringify(value);
  return typeof serialized === "string" ? serialized : "null";
}

function computeChecksum(value: unknown): string {
  const serialized = stableSerialize(value);
  let hash = 0;

  for (let index = 0; index < serialized.length; index += 1) {
    hash = (hash * 31 + serialized.charCodeAt(index)) >>> 0;
  }

  return hash.toString(16);
}

function readJsonModule(fileName: string): JsonModuleEntry | null {
  const normalizedTarget = normalizeRelativePath(fileName);
  const entry = jsonEntries.find(candidate =>
    candidate.normalizedPath.endsWith(normalizedTarget)
  );

  if (!entry) {
    treeWarn("Fichier JSON introuvable", { file: fileName });
    return null;
  }

  if (!jsonFingerprint.has(entry.normalizedPath)) {
    jsonFingerprint.set(entry.normalizedPath, computeChecksum(entry.data));
  }

  return entry;
}

function readJsonObject(fileName: string): JsonObject | null {
  const entry = readJsonModule(fileName);
  if (!entry) {
    return null;
  }

  if (!isPlainObject(entry.data)) {
    treeWarn("Fichier JSON mal formé", { file: fileName });
    return null;
  }

  return entry.data;
}

function readJsonArray(fileName: string): unknown[] | null {
  const entry = readJsonModule(fileName);
  if (!entry) {
    return null;
  }

  if (!Array.isArray(entry.data)) {
    treeWarn("Fichier JSON mal formé", { file: fileName });
    return null;
  }

  return entry.data;
}

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

export function extractRelativeExercisePath(moduleId: string): string | null {
  const normalized = moduleId.replace(/\\/g, "/");
  const marker = "/exercices/";
  const markerIndex = normalized.lastIndexOf(marker);
  if (markerIndex !== -1) {
    return normalized.slice(markerIndex + marker.length);
  }

  const aliasPrefix = "@exos/";
  if (normalized.startsWith(aliasPrefix)) {
    return normalized.slice(aliasPrefix.length);
  }

  return null;
}

function formatSegmentNameFallback(segment: string): string {
  const cleaned = segment.replace(/\.ts$/i, "").replace(/[_-]+/g, " ").trim();
  if (!cleaned) return "";

  const lower = cleaned.toLowerCase();
  const override = CATEGORY_NAME_OVERRIDES[lower];
  if (override) return override;

  const words = cleaned.split(/\s+/).map(word => {
    const lowerWord = word.toLowerCase();
    if (CATEGORY_NAME_OVERRIDES[lowerWord]) {
      return CATEGORY_NAME_OVERRIDES[lowerWord];
    }
    if (/^[a-z]{1,3}\d?$/i.test(lowerWord)) {
      return lowerWord.toUpperCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return words.join(" ");
}

type ThemeStructure = {
  code: string;
  title: string;
  order: number;
  subThemes: SubThemeStructure[];
};

type SubThemeStructure = {
  code: string;
  title: string;
  order: number;
};

type CategoryMetadata = {
  code: string;
  title: string;
  order: number;
  searchableTitle: string;
};

const missingKeys = new Set<string>();

function logMissingKey(key: string): void {
  if (missingKeys.has(key)) {
    return;
  }
  missingKeys.add(key);
  treeWarn(`Missing key: ${key}`);
}

function buildTitleLookup(record: JsonObject | null): Map<string, string> {
  const lookup = new Map<string, string>();
  if (!record) {
    return lookup;
  }

  Object.entries(record).forEach(([key, value]) => {
    if (isPlainObject(value) && typeof value.titre === "string" && value.titre.trim()) {
      lookup.set(key, normalizeWhitespace(value.titre));
    }
  });

  return lookup;
}

function registerLevelTitles(target: Map<string, string>, record: JsonObject | null): void {
  if (!record) {
    return;
  }

  Object.entries(record).forEach(([code, value]) => {
    if (typeof value === "string" && value.trim()) {
      target.set(code, normalizeWhitespace(value));
    }
  });
}

type LevelThemeStructureMap = Map<string, ThemeStructure[]>;

type RawThemeStructure = {
  titre?: unknown;
  sousThemes?: Record<string, unknown>;
};

type RawLevelStructure = Record<string, RawThemeStructure>;

function buildThemeStructure(
  levelCode: string,
  raw: RawLevelStructure | null,
  titleLookup: Map<string, string>
): ThemeStructure[] {
  if (!raw) {
    return [];
  }

  const themes: ThemeStructure[] = [];
  Object.entries(raw).forEach(([themeCode, value], index) => {
    if (!isPlainObject(value)) {
      return;
    }

    const rawTheme = value as RawThemeStructure;
    const titleCandidate = typeof rawTheme.titre === "string" ? rawTheme.titre : undefined;
    const title = titleCandidate && titleCandidate.trim()
      ? normalizeWhitespace(titleCandidate)
      : titleLookup.get(themeCode) ?? formatSegmentNameFallback(themeCode);
    if (!titleLookup.has(themeCode) && !titleCandidate) {
      logMissingKey(themeCode);
    }

    const subThemes: SubThemeStructure[] = [];
    if (isPlainObject(rawTheme.sousThemes)) {
      Object.entries(rawTheme.sousThemes).forEach(([subCode, subValue], subIndex) => {
        if (typeof subValue !== "string") {
          return;
        }
        const cleaned = normalizeWhitespace(subValue);
        const resolvedTitle = cleaned || titleLookup.get(subCode) || formatSegmentNameFallback(subCode);
        if (!cleaned && !titleLookup.has(subCode)) {
          logMissingKey(subCode);
        }
        subThemes.push({
          code: subCode,
          title: resolvedTitle,
          order: subIndex
        });
      });
    }

    themes.push({
      code: themeCode,
      title,
      order: index,
      subThemes
    });
  });

  treeDebug("Structure des thèmes chargée", { levelCode, themes: themes.length });
  return themes;
}

function convertTags(value: unknown): string[] {
  if (!isPlainObject(value)) {
    return [];
  }

  const tags: string[] = [];
  Object.entries(value).forEach(([key, tagValue]) => {
    if (!tagValue) {
      return;
    }
    if (tagValue === true) {
      tags.push(key);
      return;
    }
    if (typeof tagValue === "string" || typeof tagValue === "number") {
      tags.push(`${key}:${tagValue}`);
      return;
    }
    if (Array.isArray(tagValue)) {
      tagValue.forEach(entry => {
        if (typeof entry === "string" || typeof entry === "number") {
          tags.push(`${key}:${entry}`);
        }
      });
      return;
    }
    tags.push(`${key}:${JSON.stringify(tagValue)}`);
  });

  return tags;
}

function isExerciseRecord(value: JsonObject): boolean {
  if (!isPlainObject(value)) {
    return false;
  }

  const url = value.url;
  return typeof url === "string" && url.trim().length > 0;
}

function convertUrlToTsPath(url: string): { normalizedTsPath: string; normalizedJsPath: string } {
  const normalized = normalizeRelativePath(url);
  const tsPath = normalized.replace(/\.jsx?$/i, ".ts");
  return { normalizedTsPath: tsPath, normalizedJsPath: normalized };
}

function computeSearchable(parts: Iterable<string>): string {
  const tokens = new Set<string>();
  for (const part of parts) {
    if (!part) continue;
    tokens.add(normalizeWhitespace(part).toLowerCase());
  }
  return Array.from(tokens)
    .filter(Boolean)
    .join(" ");
}

function inferSubThemeCode(
  exerciseId: string,
  themeCode: string,
  knownCodes: Set<string>
): string {
  const trimmed = normalizeWhitespace(exerciseId);
  if (!trimmed) {
    return themeCode;
  }

  const hyphenIndex = trimmed.indexOf("-");
  const candidate = hyphenIndex > 0 ? trimmed.slice(0, hyphenIndex) : trimmed;
  if (knownCodes.has(candidate)) {
    return candidate;
  }
  if (candidate.startsWith(themeCode)) {
    return candidate;
  }
  return themeCode;
}

type CategoryRegistry = Map<string, CategoryMetadata>;

function registerCategoryMetadata(
  registry: CategoryRegistry,
  pathSegments: string[],
  code: string,
  title: string,
  order: number,
  extraTokens: string[]
): void {
  const fullPath = pathSegments.join("/");
  const normalizedTitle = title && title.trim() ? title.trim() : formatSegmentNameFallback(code);
  const tokens = [code, normalizedTitle, ...pathSegments, ...extraTokens];
  const searchableTitle = computeSearchable(tokens);

  if (!registry.has(fullPath)) {
    registry.set(fullPath, {
      code,
      title: normalizedTitle,
      order,
      searchableTitle
    });
    return;
  }

  const existing = registry.get(fullPath);
  if (!existing) {
    return;
  }

  if (!existing.title && normalizedTitle) {
    existing.title = normalizedTitle;
  }
  existing.order = Math.min(existing.order, order);
  existing.searchableTitle = existing.searchableTitle || searchableTitle;
}

function ensureTitle(lookup: Map<string, string>, code: string): string {
  const title = lookup.get(code);
  if (title && title.trim()) {
    return title.trim();
  }
  logMissingKey(code);
  return formatSegmentNameFallback(code);
}

function buildDefinitions(): {
  definitions: ExerciseDefinition[];
  categoryRegistry: CategoryRegistry;
  fingerprintSegments: string[];
} {
  const allExercice = readJsonObject("allExercice.json");
  const exercicesList = readJsonArray("exercicesList.json") ?? [];
  const levelTitles = new Map<string, string>();
  registerLevelTitles(levelTitles, readJsonObject("codeToLevelList.json"));
  registerLevelTitles(levelTitles, readJsonObject("codeToLevelListCH.json"));

  const themeTitleLookup = buildTitleLookup(readJsonObject("levelsThemesList.json"));
  const swissThemeTitleLookup = buildTitleLookup(readJsonObject("levelsThemesListCH.json"));
  swissThemeTitleLookup.forEach((value, key) => {
    if (!themeTitleLookup.has(key)) {
      themeTitleLookup.set(key, value);
    }
  });

  readJsonObject("uuidsRessources.json");
  readJsonObject("referentielBibliotheque.json");

  const categoryTitleLookup = new Map<string, string>();
  levelTitles.forEach((value, key) => {
    if (typeof value === "string") {
      const normalized = normalizeWhitespace(value);
      if (normalized) {
        categoryTitleLookup.set(key, normalized);
      }
    }
  });
  themeTitleLookup.forEach((value, key) => {
    if (typeof value === "string") {
      const normalized = normalizeWhitespace(value);
      if (normalized) {
        categoryTitleLookup.set(key, normalized);
      }
    }
  });

  const exercicesSet = new Set(
    exercicesList
      .map(entry => (typeof entry === "string" ? entry : String(entry)))
      .map(entry => normalizeRelativePath(entry).replace(/\.jsx?$/i, ".ts"))
  );

  const availableModules = new Set(modulePaths);
  const categoryRegistry: CategoryRegistry = new Map();

  const fingerprintSegments: string[] = Array.from(jsonFingerprint.entries())
    .sort((a, b) => a[0].localeCompare(b[0], "fr", { sensitivity: "base" }))
    .map(([path, checksum]) => `${path}:${checksum}`);

  if (!allExercice || !isPlainObject(allExercice)) {
    treeWarn("Fichier allExercice.json introuvable – catalogue vide");
    return { definitions: [], categoryRegistry, fingerprintSegments };
  }

  type DefinitionWithOrder = { definition: ExerciseDefinition; orderTrail: number[] };

  const definitionsWithOrder: DefinitionWithOrder[] = [];

  const resolveCategoryTitleForPath = (pathSegments: string[]): string => {
    if (pathSegments.length === 0) {
      return "";
    }

    const segment = pathSegments[pathSegments.length - 1];
    if (!segment) {
      return "";
    }

    const normalizedSegment = segment.trim();
    if (!normalizedSegment) {
      return formatSegmentNameFallback(segment);
    }

    const attempts = new Set<string>();
    attempts.add(normalizedSegment);
    attempts.add(normalizedSegment.toLowerCase());
    attempts.add(normalizedSegment.toUpperCase());

    const sanitized = normalizedSegment.replace(/[-_.]/g, "");
    if (sanitized && sanitized !== normalizedSegment) {
      attempts.add(sanitized);
    }

    const levelSegment = pathSegments[0];
    if (levelSegment) {
      attempts.add(`${levelSegment}${normalizedSegment}`);
      attempts.add(`${levelSegment}-${normalizedSegment}`);
      if (sanitized) {
        attempts.add(`${levelSegment}${sanitized}`);
      }
    }

    if (levelSegment === "CAN") {
      const prefixed = normalizedSegment.startsWith("can")
        ? normalizedSegment
        : `can${normalizedSegment}`;
      attempts.add(prefixed);
      if (pathSegments.length >= 2) {
        attempts.add(`can${pathSegments.slice(1).join("")}`);
      }
    }

    for (const candidate of attempts) {
      const title = candidate ? categoryTitleLookup.get(candidate) : undefined;
      if (title && title.trim()) {
        return title.trim();
      }
    }

    return ensureTitle(categoryTitleLookup, normalizedSegment);
  };

  const traverseNode = (
    node: JsonObject,
    pathSegments: string[],
    titleTrail: string[],
    orderTrail: number[]
  ) => {
    Object.entries(node).forEach(([key, value], index) => {
      if (!isPlainObject(value)) {
        return;
      }

      const record = value as JsonObject;

      if (isExerciseRecord(record)) {
        const idValue =
          typeof record.ref === "string" && record.ref.trim() ? record.ref.trim() : key;
        const titleValue =
          typeof record.titre === "string" ? normalizeWhitespace(record.titre) : "";
        const urlValue = typeof record.url === "string" ? record.url : "";
        if (!urlValue) {
          treeWarn("Exercice sans chemin d'accès", { path: [...pathSegments, key].join("/") });
          return;
        }

        const { normalizedTsPath, normalizedJsPath } = convertUrlToTsPath(urlValue);
        const tags = convertTags(record.tags);
        const uuid = typeof record.uuid === "string" ? record.uuid.trim() : undefined;

        const categories = [...pathSegments];
        const categoryTitles = [...titleTrail];
        const niveauTitle =
          categoryTitles[0] && categoryTitles[0].trim()
            ? categoryTitles[0]
            : categories[0]
              ? resolveCategoryTitleForPath([categories[0]])
              : formatSegmentNameFallback("Divers");

        const searchableParts: string[] = [
          idValue,
          titleValue,
          normalizedTsPath,
          normalizedJsPath,
          ...categories,
          ...categoryTitles,
          uuid ?? ""
        ];
        tags.forEach(tag => searchableParts.push(tag));

        const definition: ExerciseDefinition = {
          id: idValue,
          niveau: niveauTitle,
          importPath: `@exos/${normalizedTsPath}`,
          relativePath: normalizedTsPath,
          categories,
          categoryTitles,
          tags,
          label: titleValue || idValue,
          title: titleValue || idValue,
          searchableTitle: computeSearchable(searchableParts),
          order: index,
          uuid
        };

        if (!availableModules.has(normalizedTsPath)) {
          treeWarn("Module d'exercice introuvable", {
            relativePath: normalizedTsPath,
            originalUrl: urlValue
          });
        }

        if (!exercicesSet.has(normalizedTsPath) && !exercicesSet.has(normalizedJsPath)) {
          treeWarn("Chemin absent de exercicesList.json", { relativePath: normalizedTsPath });
        }

        definitionsWithOrder.push({ definition, orderTrail: [...orderTrail, index] });
        return;
      }

      const childPath = [...pathSegments, key];
      const childOrderTrail = [...orderTrail, index];
      const childTitle = resolveCategoryTitleForPath(childPath);
      const childTitleTrail = [...titleTrail, childTitle];

      registerCategoryMetadata(
        categoryRegistry,
        childPath,
        key,
        childTitle,
        index,
        childTitleTrail
      );

      traverseNode(record, childPath, childTitleTrail, childOrderTrail);
    });
  };

  traverseNode(allExercice as JsonObject, [], [], []);

  definitionsWithOrder.sort((a, b) => {
    const length = Math.max(a.orderTrail.length, b.orderTrail.length);
    for (let position = 0; position < length; position += 1) {
      const valueA = a.orderTrail[position] ?? Number.MAX_SAFE_INTEGER;
      const valueB = b.orderTrail[position] ?? Number.MAX_SAFE_INTEGER;
      if (valueA !== valueB) {
        return valueA - valueB;
      }
    }

    return a.definition.id.localeCompare(b.definition.id, "fr", { sensitivity: "base" });
  });

  const definitions = definitionsWithOrder.map(entry => {
    const trail = entry.orderTrail;
    const lastOrder = trail[trail.length - 1];
    if (typeof lastOrder === "number") {
      entry.definition.order = lastOrder;
    }
    return entry.definition;
  });

  return { definitions, categoryRegistry, fingerprintSegments };
}

function buildTree(
  definitions: ExerciseDefinition[],
  categoryRegistry: CategoryRegistry
): Record<string, ExerciseNode> {
  const root: Record<string, ExerciseNode> = {};
  const categoryMap = new Map<string, ExerciseCategoryNode>();

  definitions.forEach(definition => {
    let children = root;
    const pathSegments: string[] = [];

    definition.categories.forEach(segment => {
      pathSegments.push(segment);
      const fullPath = pathSegments.join("/");
      let categoryNode = categoryMap.get(fullPath);
      if (!categoryNode) {
        const metadata = categoryRegistry.get(fullPath);
        const title = metadata?.title ?? formatSegmentNameFallback(segment);
        const searchableTitle = metadata?.searchableTitle ?? computeSearchable([
          segment,
          title,
          ...pathSegments
        ]);
        const order = metadata?.order ?? Number.MAX_SAFE_INTEGER;
        categoryNode = {
          id: segment,
          type: "category",
          segment,
          title,
          searchableTitle,
          fullPath,
          children: {},
          order
        };
        categoryMap.set(fullPath, categoryNode);
        children[segment] = categoryNode;
      }
      children = categoryNode.children;
    });

    const fullExercisePath = [...definition.categories, definition.id].join("/");
    const exerciseNode: ExerciseLeafNode = {
      id: definition.id,
      type: "exercise",
      title: definition.title,
      searchableTitle: definition.searchableTitle,
      fullPath: fullExercisePath,
      path: definition.relativePath,
      definitionId: definition.id,
      niveau: definition.niveau,
      categories: [...definition.categories],
      label: definition.label,
      order: definition.order
    };

    children[definition.id] = exerciseNode;
  });

  return root;
}

function computeFingerprint(paths: string[], segments: string[]): string {
  return [...paths, ...segments].join("|");
}

function readCache(fingerprint: string): ExerciseTreeCache | null {
  if (typeof window === "undefined" || !window.localStorage) {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ExerciseTreeCache;
    if (parsed.version !== CACHE_VERSION) return null;
    if (parsed.fingerprint !== fingerprint) return null;
    if (!parsed.tree || !parsed.definitions) return null;
    return parsed;
  } catch (error) {
    treeWarn("Impossible de lire le cache du catalogue d'exercices", error);
    return null;
  }
}

function writeCache(cache: ExerciseTreeCache) {
  if (typeof window === "undefined" || !window.localStorage) {
    return;
  }

  try {
    window.localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch (error) {
    treeWarn("Impossible d'enregistrer le cache du catalogue", error);
  }
}

let runtimeCache: ExerciseTreeData | null = null;

export function loadExerciseTree(): ExerciseTreeData {
  if (runtimeCache) {
    treeDebug("Utilisation du cache en mémoire pour le catalogue d'exercices", {
      definitions: runtimeCache.definitions.length,
      fingerprint: runtimeCache.fingerprint
    });
    return runtimeCache;
  }

  const { definitions, categoryRegistry, fingerprintSegments } = buildDefinitions();
  const fingerprint = computeFingerprint(modulePaths, fingerprintSegments);
  treeInfo("Construction du catalogue d'exercices", {
    fingerprint,
    modules: modulePaths.length,
    definitions: definitions.length
  });

  const cached = readCache(fingerprint);
  if (cached) {
    treeInfo("Catalogue chargé depuis le cache localStorage", {
      definitions: cached.definitions.length,
      generatedAt: cached.generatedAt
    });
    runtimeCache = {
      tree: cached.tree,
      definitions: cached.definitions,
      definitionMap: new Map(cached.definitions.map(definition => [definition.id, definition])),
      fingerprint: cached.fingerprint
    };
    return runtimeCache;
  }

  const tree = buildTree(definitions, categoryRegistry);

  runtimeCache = {
    tree,
    definitions,
    definitionMap: new Map(definitions.map(definition => [definition.id, definition])),
    fingerprint
  };

  const cachePayload: ExerciseTreeCache = {
    version: CACHE_VERSION,
    fingerprint,
    generatedAt: new Date().toISOString(),
    tree,
    definitions
  };

  treeDebug("Écriture du cache du catalogue d'exercices", {
    version: CACHE_VERSION,
    definitions: definitions.length
  });
  writeCache(cachePayload);

  return runtimeCache;
}

export function collectCategoryPaths(
  nodes: Record<string, ExerciseNode>,
  acc: Set<string> = new Set()
): Set<string> {
  Object.values(nodes).forEach(node => {
    if (node.type === "category") {
      acc.add(node.fullPath);
      collectCategoryPaths(node.children, acc);
    }
  });
  return acc;
}

export function getSortedChildren(children: Record<string, ExerciseNode>): ExerciseNode[] {
  const entries = Object.values(children);
  entries.sort((a, b) => {
    if (a.order !== b.order) {
      return a.order - b.order;
    }
    if (a.type === "category" && b.type === "exercise") return -1;
    if (a.type === "exercise" && b.type === "category") return 1;
    const labelA = normalizeWhitespace(
      (a.title || (a.type === "category" ? a.fullPath : a.id) || a.id).toLowerCase()
    );
    const labelB = normalizeWhitespace(
      (b.title || (b.type === "category" ? b.fullPath : b.id) || b.id).toLowerCase()
    );
    return labelA.localeCompare(labelB, "fr", { sensitivity: "base" });
  });
  return entries;
}

export function getExerciseLoader(path: string): (() => Promise<unknown>) | undefined {
  const normalized = normalizeRelativePath(path);
  return loaderMap.get(normalized);
}
