/*
 * Utility helpers dedicated to reading the MathALEA exercise catalogue and
 * exposing it as a hierarchical tree that mirrors the original repository
 * structure.
 */

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

const loaderMap = new Map<string, () => Promise<unknown>>();
const modulePaths: string[] = [];

Object.entries(moduleGlob).forEach(([moduleId, loader]) => {
  const relativePath = extractRelativeExercisePath(moduleId);
  if (!relativePath || !relativePath.endsWith(".ts")) {
    return;
  }

  const normalized = normalizeRelativePath(relativePath);
  if (!loaderMap.has(normalized)) {
    loaderMap.set(normalized, loader);
    modulePaths.push(normalized);
  }
});

modulePaths.sort((a, b) => a.localeCompare(b, "fr", { sensitivity: "base" }));

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

function formatSegmentName(segment: string): string {
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
  const formatted = formatSegmentName(segment);
  return formatted || segment;
}

function formatExerciseLabel(segments: string[]): string {
  if (segments.length === 0) return "";
  const parts = segments
    .map(segment => formatSegmentName(segment))
    .filter(Boolean);
  return parts.join(" · ");
}

function buildDefinition(path: string): ExerciseDefinition | null {
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

  const categories = segments.slice(0, -1);
  const niveau = formatNiveau(categories[0] ?? "");
  const label = formatExerciseLabel([...categories, fileName]) || id;
  const title = label;
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
    searchableParts.add(formatSegmentName(segment));
  });

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
    label,
    title,
    searchableTitle
  };
}

function buildDefinitions(paths: string[]): ExerciseDefinition[] {
  return paths
    .map(buildDefinition)
    .filter((definition): definition is ExerciseDefinition => definition !== null)
    .sort((a, b) => a.relativePath.localeCompare(b.relativePath, "fr", { sensitivity: "base" }));
}

function buildCategorySearchableTitle(segment: string, pathSegments: string[]): string {
  const formattedSegment = formatSegmentName(segment);
  const aggregateParts = [segment, formattedSegment, ...pathSegments];
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
        categoryNode = {
          id: segment,
          type: "category",
          segment,
          title: formatSegmentName(segment) || segment,
          searchableTitle: buildCategorySearchableTitle(segment, [...pathSegments]),
          fullPath,
          children: {}
        };
        categoryMap.set(fullPath, categoryNode);
        children[segment] = categoryNode;
      }

      children = categoryNode.children;
    });

    const exerciseFullPath = [...definition.categories, definition.id].join("/");
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
      label: definition.label
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
    return runtimeCache;
  }

  const fingerprint = computeFingerprint(modulePaths);
  const cached = readCache(fingerprint);

  if (cached) {
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

  const definitions = buildDefinitions(modulePaths);
  const tree = buildTree(definitions);

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
    if (a.type === "category" && b.type === "exercise") return -1;
    if (a.type === "exercise" && b.type === "category") return 1;
    const pathA = normalizeWhitespace(a.fullPath || a.id).toLowerCase();
    const pathB = normalizeWhitespace(b.fullPath || b.id).toLowerCase();
    return pathA.localeCompare(pathB, "fr", { sensitivity: "base" });
  });
  return entries;
}

export function getExerciseLoader(path: string): (() => Promise<unknown>) | undefined {
  const normalized = normalizeRelativePath(path);
  return loaderMap.get(normalized);
}

