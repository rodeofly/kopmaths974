/*
 * Utility helpers dedicated to reading the MathALEA exercise catalogue and
 * exposing it as a hierarchical tree that mirrors the original repository
 * structure.
 */

import referentiel2022FR from "@mathalea/json/referentiel2022FR.json";
import codeToLevelList from "@mathalea/json/codeToLevelList.json";
import levelsThemesList from "@mathalea/json/levelsThemesList.json";
import { isJSONReferentielEnding } from "@mathalea/lib/types/referentiels";

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
  ce1: "CE1",
  ce2: "CE2",
  cp: "CP",
  "6e": "6e",
  "5e": "5e",
  "4e": "4e",
  "3e": "3e",
  "2nde": "2nde",
  "2de": "2de",
  seconde: "Seconde",
  "1re": "1re",
  premiere: "Première",
  term: "Terminale",
  terminale: "Terminale",
  lycee: "Lycée",
  college: "Collège",
  cycle3: "Cycle 3",
  cycle4: "Cycle 4",
  cm1cm2: "CM1/CM2",
  cm1cm2cycle3: "CM1/CM2 – Cycle 3"
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

const CACHE_KEY = "mathalea.exerciseTree.v1";
const CACHE_VERSION = 1;

const moduleGlob = import.meta.glob("@exos/**/*.ts");
const moduleIds = Object.keys(moduleGlob);

treeInfo("Initialisation des modules Vite", {
  total: moduleIds.length,
  apercu: moduleIds.slice(0, 5)
});

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
    treeDebug("Module ignoré car l'extension n'est pas .ts", {
      moduleId,
      relativePath
    });
    return;
  }

  const normalized = normalizeRelativePath(relativePath);
  if (!loaderMap.has(normalized)) {
    loaderMap.set(normalized, loader);
    modulePaths.push(normalized);
  } else {
    treeDebug("Module déjà présent dans la carte des loaders", { normalized });
  }
});

modulePaths.sort((a, b) => a.localeCompare(b, "fr", { sensitivity: "base" }));

if (modulePaths.length === 0) {
  treeWarn("Aucun chemin d'exercice disponible après normalisation");
} else {
  treeInfo("Chemins d'exercices normalisés", {
    total: modulePaths.length,
    premier: modulePaths[0],
    dernier: modulePaths[modulePaths.length - 1]
  });
}

let runtimeCache: ExerciseTreeData | null = null;

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

export function normalizeRelativePath(path: string): string {
  return path.replace(/\\/g, "/").replace(/^\.\/+/, "").replace(/^\//, "");
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

type JsonObject = Record<string, unknown>;

interface ReferentielExerciseMetadata {
  id: string;
  title: string;
  relativePath: string;
  categoryCodes: string[];
  categoryTitles: string[];
  tags: string[];
  uuid?: string;
  orderTrail: number[];
}

const LEVEL_TITLE_LOOKUP = codeToLevelList as Record<string, string | undefined>;
const THEME_TITLE_LOOKUP = levelsThemesList as Record<string, { titre?: string } | undefined>;

const referentielExerciseMetadataByPath = new Map<string, ReferentielExerciseMetadata>();
const referentielCategoryTitleByPath = new Map<string, string>();
const referentielCategorySearchByPath = new Map<string, string>();
const referentielCategoryOrderTrailByPath = new Map<string, number[]>();

function resolveCategoryTitleFromCode(code: string): string {
  const trimmed = code.trim();
  if (!trimmed) {
    return "";
  }

  const levelTitle = LEVEL_TITLE_LOOKUP[trimmed];
  if (typeof levelTitle === "string" && levelTitle.trim()) {
    return levelTitle.trim();
  }

  const themeEntry = THEME_TITLE_LOOKUP[trimmed];
  if (themeEntry && typeof themeEntry.titre === "string" && themeEntry.titre.trim()) {
    return themeEntry.titre.trim();
  }

  return formatSegmentNameFallback(trimmed);
}

function buildCategorySearchableTokens(
  code: string,
  title: string,
  pathCodes: string[],
  pathTitles: string[]
): string {
  const tokens = new Set<string>();
  tokens.add(code);
  tokens.add(title);
  pathCodes.forEach(token => tokens.add(token));
  pathTitles.forEach(token => tokens.add(token));

  return Array.from(tokens)
    .map(token => normalizeWhitespace(String(token)).toLowerCase())
    .filter(Boolean)
    .join(" ");
}

function registerReferentielCategory(
  pathCodes: string[],
  pathTitles: string[],
  code: string,
  title: string,
  orderTrail: number[]
): void {
  const fullCodes = [...pathCodes, code];
  const fullPath = fullCodes.join("/");
  referentielCategoryTitleByPath.set(fullPath, title);
  referentielCategorySearchByPath.set(
    fullPath,
    buildCategorySearchableTokens(code, title, fullCodes, [...pathTitles, title])
  );
  referentielCategoryOrderTrailByPath.set(fullPath, [...orderTrail]);
}

function buildReferentielMetadata(): void {
  const rootNode = referentiel2022FR as JsonObject;

  function traverse(
    node: JsonObject,
    pathCodes: string[],
    pathTitles: string[],
    orderTrail: number[]
  ): void {
    const entries = Object.entries(node);
    entries.forEach(([key, value], index) => {
      if (!value || typeof value !== "object") {
        return;
      }

      const nextOrderTrail = [...orderTrail, index];

      if (isJSONReferentielEnding(value)) {
        const relativePath = normalizeRelativePath(String((value as JsonObject).url ?? ""));
        if (!relativePath) {
          return;
        }

        const titleValue = (value as JsonObject).titre;
        const idValue = (value as JsonObject).id;
        const tagsValue = (value as JsonObject).tags;
        const uuidValue = (value as JsonObject).uuid;
        const categoryTitles = [...pathTitles];

        referentielExerciseMetadataByPath.set(relativePath, {
          id: typeof idValue === "string" && idValue.trim() ? idValue.trim() : key,
          title:
            typeof titleValue === "string" && titleValue.trim()
              ? titleValue.trim()
              : typeof idValue === "string" && idValue.trim()
                ? idValue.trim()
                : key,
          relativePath,
          categoryCodes: [...pathCodes],
          categoryTitles,
          tags: Array.isArray(tagsValue)
            ? (tagsValue.filter(tag => typeof tag === "string") as string[])
            : [],
          uuid: typeof uuidValue === "string" && uuidValue.trim() ? uuidValue.trim() : undefined,
          orderTrail: nextOrderTrail
        });
        return;
      }

      const childNode = value as JsonObject;
      const title = resolveCategoryTitleFromCode(key);
      registerReferentielCategory(pathCodes, pathTitles, key, title, nextOrderTrail);
      traverse(
        childNode,
        [...pathCodes, key],
        [...pathTitles, title],
        nextOrderTrail
      );
    });
  }

  traverse(rootNode, [], [], []);
}

buildReferentielMetadata();

treeInfo("Métadonnées du référentiel 2022 chargées", {
  exercices: referentielExerciseMetadataByPath.size,
  categories: referentielCategoryTitleByPath.size
});

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

function formatNiveau(segment: string): string {
  if (!segment) return "Autre";
  const formatted = resolveCategoryTitleFromCode(segment);
  return formatted || segment;
}

function formatExerciseLabel(segments: string[]): string {
  if (segments.length === 0) return "";
  const parts = segments
    .map(segment => resolveCategoryTitleFromCode(segment))
    .filter(Boolean);
  return parts.join(" · ");
}

function buildDefinition(
  path: string,
  metadataOverride?: ReferentielExerciseMetadata
): ExerciseDefinition | null {
  const normalizedPath = normalizeRelativePath(path);
  if (!normalizedPath.endsWith(".ts")) {
    return null;
  }

  const segments = normalizedPath.split("/").filter(Boolean);
  if (segments.length === 0) {
    return null;
  }

  const fileName = segments[segments.length - 1];
  const id = fileName.replace(/\.ts$/i, "");
  if (!id) {
    return null;
  }

  const fallbackCategories = segments.slice(0, -1);
  const metadata = metadataOverride ?? referentielExerciseMetadataByPath.get(normalizedPath);

  const categories = (metadata?.categoryCodes.length ? metadata.categoryCodes : fallbackCategories).map(code =>
    normalizeRelativePath(code)
  );
  const categoryTitles = metadata?.categoryTitles.length
    ? metadata.categoryTitles.map((title, index) => {
        if (title && title.trim()) {
          return title.trim();
        }
        const code = metadata?.categoryCodes[index];
        return code ? resolveCategoryTitleFromCode(code) : "";
      })
    : fallbackCategories.map(segment => resolveCategoryTitleFromCode(segment));

  const niveau = metadata?.categoryTitles[0]?.trim()
    ? metadata.categoryTitles[0].trim()
    : formatNiveau(categories[0] ?? "");

  const title = (metadata?.title ?? formatExerciseLabel([...fallbackCategories, fileName])) || id;
  const label = metadata
    ? (() => {
        const parts = [...categoryTitles.slice(1), metadata.title];
        return parts.map(part => part.trim()).filter(Boolean).join(" · ") || metadata.title;
      })()
    : formatExerciseLabel([...fallbackCategories, fileName]) || id;

  const tags = metadata?.tags ?? [];
  const importPath = `@exos/${normalizedPath}`;

  const searchableParts = new Set<string>();
  searchableParts.add(id);
  searchableParts.add(label);
  searchableParts.add(title);
  searchableParts.add(importPath);
  searchableParts.add(normalizedPath);
  searchableParts.add(niveau);
  categories.forEach(segment => {
    searchableParts.add(segment);
    searchableParts.add(resolveCategoryTitleFromCode(segment));
  });
  categoryTitles.forEach(part => searchableParts.add(part));
  tags.forEach(tag => searchableParts.add(tag));
  if (metadata?.uuid) {
    searchableParts.add(metadata.uuid);
  }

  const searchableTitle = Array.from(searchableParts)
    .map(part => normalizeWhitespace(part).toLowerCase())
    .filter(Boolean)
    .join(" ");

  return {
    id,
    niveau,
    importPath,
    relativePath: normalizedPath,
    categories,
    categoryTitles,
    tags,
    label,
    title,
    searchableTitle
  };
}

function toOrderKey(trail?: number[]): string {
  if (!trail || trail.length === 0) {
    return "";
  }
  return trail.map(index => index.toString().padStart(4, "0")).join("-");
}

function buildDefinitionsFromMetadata(): ExerciseDefinition[] {
  const definitions: ExerciseDefinition[] = [];
  const availableModules = new Set(modulePaths);

  referentielExerciseMetadataByPath.forEach(metadata => {
    const definition = buildDefinition(metadata.relativePath, metadata);
    if (!definition) {
      treeWarn("Définition invalide lors de la construction du catalogue", {
        path: metadata.relativePath,
        id: metadata.id
      });
      return;
    }

    if (!availableModules.has(definition.relativePath)) {
      treeWarn("Exercice référencé introuvable dans les modules disponibles", {
        relativePath: definition.relativePath,
        id: metadata.id,
        titre: metadata.title
      });
    }

    definitions.push(definition);
  });

  definitions.sort((a, b) => {
    const metadataA = referentielExerciseMetadataByPath.get(a.relativePath);
    const metadataB = referentielExerciseMetadataByPath.get(b.relativePath);
    const keyA = toOrderKey(metadataA?.orderTrail);
    const keyB = toOrderKey(metadataB?.orderTrail);

    if (keyA && keyB && keyA !== keyB) {
      return keyA.localeCompare(keyB);
    }
    if (keyA && !keyB) {
      return -1;
    }
    if (!keyA && keyB) {
      return 1;
    }

    return a.relativePath.localeCompare(b.relativePath, "fr", { sensitivity: "base" });
  });

  return definitions;
}

function getCategoryDisplayTitle(fullPath: string, segment: string): string {
  const override = referentielCategoryTitleByPath.get(fullPath);
  if (override && override.trim()) {
    return override.trim();
  }
  return resolveCategoryTitleFromCode(segment) || segment;
}

function getCategorySearchableTitle(
  fullPath: string,
  segment: string,
  pathSegments: string[]
): string {
  const override = referentielCategorySearchByPath.get(fullPath);
  if (override) {
    return override;
  }

  const aggregateParts = [segment, resolveCategoryTitleFromCode(segment), ...pathSegments];
  return aggregateParts
    .map(part => normalizeWhitespace(part).toLowerCase())
    .filter(Boolean)
    .join(" ");
}

function buildTree(definitions: ExerciseDefinition[]): Record<string, ExerciseNode> {
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
        const displayTitle = getCategoryDisplayTitle(fullPath, segment);
        const orderTrail = referentielCategoryOrderTrailByPath.get(fullPath);
        categoryNode = {
          id: segment,
          type: "category",
          segment,
          title: displayTitle,
          searchableTitle: getCategorySearchableTitle(fullPath, segment, [...pathSegments]),
          fullPath,
          children: {},
          order:
            orderTrail && orderTrail.length > 0
              ? orderTrail[orderTrail.length - 1]
              : Number.MAX_SAFE_INTEGER
        };
        categoryMap.set(fullPath, categoryNode);
        children[segment] = categoryNode;
      }

      children = categoryNode.children;
    });

    const exerciseFullPath = [...definition.categories, definition.id].join("/");
    const metadata = referentielExerciseMetadataByPath.get(definition.relativePath);
    const exerciseNode: ExerciseLeafNode = {
      id: definition.id,
      type: "exercise",
      title: definition.title,
      searchableTitle: definition.searchableTitle,
      fullPath: exerciseFullPath,
      path: definition.relativePath,
      definitionId: definition.id,
      niveau: definition.niveau,
      categories: [...definition.categories],
      label: definition.label,
      order:
        metadata && metadata.orderTrail.length > 0
          ? metadata.orderTrail[metadata.orderTrail.length - 1]
          : Number.MAX_SAFE_INTEGER
    };

    children[definition.id] = exerciseNode;
  });

  return root;
}

function computeFingerprint(paths: string[]): string {
  return paths.join("|");
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
    console.warn("Impossible de lire le cache du catalogue d'exercices", error);
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
    console.warn("Impossible d'enregistrer le cache du catalogue", error);
  }
}


export function loadExerciseTree(): ExerciseTreeData {
  if (runtimeCache) {
    treeDebug("Utilisation du cache en mémoire pour le catalogue d'exercices", {
      definitions: runtimeCache.definitions.length,
      fingerprint: runtimeCache.fingerprint
    });
    return runtimeCache;
  }

  const fingerprint = computeFingerprint(modulePaths);
  treeInfo("Construction du catalogue d'exercices", {
    fingerprint,
    moduleCount: modulePaths.length
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
      definitionMap: new Map(
        cached.definitions.map(definition => [definition.id, definition])
      ),
      fingerprint: cached.fingerprint
    };
    return runtimeCache;
  }

  const definitions = buildDefinitionsFromMetadata();
  const tree = buildTree(definitions);

  treeInfo("Catalogue reconstruit depuis la source", {
    definitions: definitions.length,
    categories: Object.keys(tree).length
  });

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



export function collectCategoryPaths(nodes: Record<string, ExerciseNode>, acc: Set<string> = new Set()): Set<string> {
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

