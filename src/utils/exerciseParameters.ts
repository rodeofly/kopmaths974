const PARAMETER_FLAG_KEYS = [
  "besoinFormulaire2CaseACocher",
  "besoinFormulaire2Numerique",
  "besoinFormulaire2Texte",
  "besoinFormulaire3CaseACocher",
  "besoinFormulaire3Numerique",
  "besoinFormulaire3Texte",
  "besoinFormulaire4CaseACocher",
  "besoinFormulaire4Texte",
  "besoinFormulaire5CaseACocher",
  "besoinFormulaire5Numerique",
  "besoinFormulaire5Texte",
  "besoinFormulaireCaseACocher",
  "besoinFormulaireNumerique",
  "besoinFormulaireTexte",
  "besoinFormulaire",
  "besoinFormulaire2",
  "besoinFormulaire3",
  "besoinFormulaire4",
  "besoinFormulaire5"
] as const;

const LABEL_KEYS = [
  "label",
  "libelle",
  "texte",
  "titre",
  "name",
  "nom",
  "question",
  "placeholder",
  "description"
];

const HELP_KEYS = [
  "aide",
  "help",
  "info",
  "infos",
  "infobulle",
  "infoBulle",
  "commentaire",
  "description",
  "hint"
];

const OPTION_KEYS = [
  "options",
  "choix",
  "choices",
  "values",
  "valeurs",
  "liste",
  "list",
  "items",
  "propositions"
];

const PRIMARY_VALUE_KEYS = [
  "valeur",
  "value",
  "val",
  "selected",
  "current",
  "reponse",
  "reponses",
  "answer",
  "answers"
];

const SECONDARY_VALUE_KEYS = [
  "defaut",
  "default",
  "texte",
  "text",
  "choix",
  "selection",
  "nb",
  "nbre",
  "nombre",
  "quantite",
  "amount"
];

type ParameterFlagKey = (typeof PARAMETER_FLAG_KEYS)[number];

type ParameterFieldType = "text" | "number" | "boolean" | "select";

type ParameterOption = {
  label: string;
  value: string;
};

type ParameterField = {
  path: string;
  label: string;
  type: ParameterFieldType;
  value: string | number | boolean;
  help?: string;
  options?: ParameterOption[];
};

type ParameterValueMap = Record<string, string | number | boolean>;

type TraversalContext = {
  label?: string;
  help?: string;
};

function isPrimitive(value: unknown): value is string | number | boolean {
  const type = typeof value;
  return type === "string" || type === "number" || type === "boolean";
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  if (!value || typeof value !== "object") return false;
  if (Array.isArray(value)) return false;
  return true;
}

function createLabelFromKey(key: string): string {
  if (!key) return "Paramètre";
  const normalized = key
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_.-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!normalized) return "Paramètre";
  return normalized.charAt(0).toUpperCase() + normalized.slice(1);
}

function resolveFormKey(key: ParameterFlagKey): string {
  const suffix = key.replace(/^besoin/, "");
  if (!suffix) return "formulaire";
  return suffix.charAt(0).toLowerCase() + suffix.slice(1);
}

function findFirstString(
  obj: Record<string, unknown>,
  keys: string[]
): string | undefined {
  for (const key of keys) {
    const value = obj[key];
    if (typeof value === "string" && value.trim().length > 0) {
      return value.trim();
    }
  }
  return undefined;
}

function findOptions(raw: unknown): ParameterOption[] {
  if (!Array.isArray(raw)) return [];
  const options: ParameterOption[] = [];
  raw.forEach(item => {
    if (item == null) return;
    if (typeof item === "string" || typeof item === "number") {
      const stringValue = String(item);
      options.push({ label: stringValue, value: stringValue });
      return;
    }
    if (isPlainObject(item)) {
      const candidateLabel =
        findFirstString(item, LABEL_KEYS) ??
        findFirstString(item, ["text", "texte", "value", "valeur"]);
      const candidateValue =
        findFirstString(item, ["value", "valeur", "id", "code", "key"]) ??
        candidateLabel;
      if (candidateValue) {
        options.push({
          label: candidateLabel ?? candidateValue,
          value: candidateValue
        });
      }
    }
  });
  return options;
}

function detectOptions(obj: Record<string, unknown>): ParameterOption[] {
  for (const key of OPTION_KEYS) {
    const value = obj[key];
    const options = findOptions(value);
    if (options.length > 0) {
      return options;
    }
  }
  return [];
}

function findValueKey(obj: Record<string, unknown>): string | undefined {
  for (const key of PRIMARY_VALUE_KEYS) {
    if (key in obj) {
      return key;
    }
  }
  for (const key of SECONDARY_VALUE_KEYS) {
    if (key in obj) {
      return key;
    }
  }
  return undefined;
}

function determineFieldType(
  value: unknown,
  options: ParameterOption[]
): ParameterFieldType {
  if (options.length > 0) {
    return "select";
  }
  if (typeof value === "boolean") {
    return "boolean";
  }
  if (typeof value === "number") {
    return "number";
  }
  if (typeof value === "string") {
    return "text";
  }
  return "text";
}

function normalizeValue(
  value: unknown,
  type: ParameterFieldType
): string | number | boolean {
  if (type === "boolean") {
    return Boolean(value);
  }
  if (type === "number") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  if (value == null) return "";
  return String(value);
}

function collectFromArray(
  array: unknown[],
  basePath: string,
  context: TraversalContext,
  accumulator: Map<string, ParameterField>
) {
  array.forEach((item, index) => {
    const path = `${basePath}[${index}]`;
    if (isPrimitive(item)) {
      const type = determineFieldType(item, []);
      accumulator.set(path, {
        path,
        label:
          context.label ?? `${createLabelFromKey(basePath.split(".").pop() ?? basePath)} ${index + 1}`,
        help: context.help,
        type,
        value: normalizeValue(item, type)
      });
      return;
    }
    if (isPlainObject(item)) {
      collectFromObject(item, path, context, accumulator);
      return;
    }
    if (Array.isArray(item)) {
      collectFromArray(item, path, context, accumulator);
    }
  });
}

function collectFromObject(
  obj: Record<string, unknown>,
  basePath: string,
  context: TraversalContext,
  accumulator: Map<string, ParameterField>
) {
  const label =
    findFirstString(obj, LABEL_KEYS) ??
    context.label ??
    createLabelFromKey(basePath.split(".").pop() ?? basePath);
  const help = findFirstString(obj, HELP_KEYS) ?? context.help;
  const options = detectOptions(obj);
  const valueKey = findValueKey(obj);

  if (valueKey) {
    const valuePath = `${basePath}.${valueKey}`;
    const rawValue = obj[valueKey];
    const type = determineFieldType(rawValue, options);
    accumulator.set(valuePath, {
      path: valuePath,
      label,
      help,
      type,
      value: normalizeValue(rawValue, type),
      options: options.length > 0 ? options : undefined
    });
  }

  Object.entries(obj).forEach(([key, value]) => {
    if (key === valueKey) return;
    if (OPTION_KEYS.includes(key)) return;
    if (HELP_KEYS.includes(key) || LABEL_KEYS.includes(key)) return;
    if (typeof value === "function") return;

    const path = `${basePath}.${key}`;
    const nextContext: TraversalContext = {
      label: `${label} – ${createLabelFromKey(key)}`,
      help
    };

    if (isPrimitive(value)) {
      const type = determineFieldType(value, []);
      accumulator.set(path, {
        path,
        label: nextContext.label,
        help,
        type,
        value: normalizeValue(value, type)
      });
      return;
    }

    if (Array.isArray(value)) {
      collectFromArray(value, path, nextContext, accumulator);
      return;
    }

    if (isPlainObject(value)) {
      collectFromObject(value, path, nextContext, accumulator);
    }
  });
}

function collectFields(
  value: unknown,
  basePath: string,
  context: TraversalContext,
  accumulator: Map<string, ParameterField>
) {
  if (value == null) return;
  if (isPrimitive(value)) {
    const type = determineFieldType(value, []);
    accumulator.set(basePath, {
      path: basePath,
      label:
        context.label ?? createLabelFromKey(basePath.split(".").pop() ?? basePath),
      help: context.help,
      type,
      value: normalizeValue(value, type)
    });
    return;
  }
  if (Array.isArray(value)) {
    collectFromArray(value, basePath, context, accumulator);
    return;
  }
  if (isPlainObject(value)) {
    collectFromObject(value, basePath, context, accumulator);
  }
}

function parsePath(path: string): Array<string | number> {
  const segments: Array<string | number> = [];
  const regex = /([^.[\]]+)|\[(\d+)\]/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(path)) !== null) {
    if (match[1] !== undefined) {
      segments.push(match[1]);
    } else if (match[2] !== undefined) {
      segments.push(Number(match[2]));
    }
  }
  return segments;
}

function setValueAtPath(
  target: Record<string, unknown>,
  path: string,
  value: unknown
) {
  const segments = parsePath(path);
  if (segments.length === 0) return;

  let current: unknown = target;
  for (let index = 0; index < segments.length - 1; index += 1) {
    const segment = segments[index];
    if (typeof segment === "number") {
      if (!Array.isArray(current)) {
        return;
      }
      current = current[segment];
      continue;
    }
    if (
      current &&
      typeof current === "object" &&
      segment in (current as Record<string, unknown>)
    ) {
      current = (current as Record<string, unknown>)[segment];
    } else {
      return;
    }
  }

  const last = segments[segments.length - 1];
  if (typeof last === "number") {
    if (Array.isArray(current) && last >= 0 && last < current.length) {
      current[last] = value;
    }
    return;
  }

  if (current && typeof current === "object") {
    (current as Record<string, unknown>)[last] = value;
  }
}

function ensureValueType(
  value: string | number | boolean,
  type: ParameterFieldType
): string | number | boolean {
  if (type === "boolean") {
    return Boolean(value);
  }
  if (type === "number") {
    const parsed = typeof value === "number" ? value : Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return String(value);
}

function buildParameterFields(
  exercice: Record<string, unknown>
): ParameterField[] {
  const accumulator = new Map<string, ParameterField>();

  PARAMETER_FLAG_KEYS.forEach(flag => {
    if (!exercice[flag]) return;
    const formKey = resolveFormKey(flag);
    const value = exercice[formKey];
    if (value === undefined) return;

    const helpCandidate =
      typeof exercice[`${formKey}Aide`] === "string"
        ? String(exercice[`${formKey}Aide`])
        : undefined;

    collectFields(value, formKey, { help: helpCandidate }, accumulator);
  });

  return Array.from(accumulator.values()).sort((a, b) =>
    a.label.localeCompare(b.label, "fr")
  );
}

function createValueMap(fields: ParameterField[]): ParameterValueMap {
  const map: ParameterValueMap = {};
  fields.forEach(field => {
    map[field.path] = field.value;
  });
  return map;
}

function applyParameterValues(
  exercice: Record<string, unknown>,
  fields: ParameterField[],
  values: ParameterValueMap
) {
  const valueEntries = fields.map(field => {
    const mapHasValue = Object.prototype.hasOwnProperty.call(
      values,
      field.path
    );
    const rawValue = mapHasValue ? values[field.path] : field.value;
    const ensured = ensureValueType(rawValue, field.type);
    return { field, value: ensured };
  });

  valueEntries.forEach(entry => {
    setValueAtPath(exercice, entry.field.path, entry.value);
  });
}

export type { ParameterField, ParameterOption, ParameterValueMap, ParameterFieldType };
export { applyParameterValues, buildParameterFields, createValueMap };
