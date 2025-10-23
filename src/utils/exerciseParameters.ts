const FORM_PARAMETER_FLAG_KEYS = [
  "besoinFormulaireCaseACocher",
  "besoinFormulaireNumerique",
  "besoinFormulaireTexte",
  "besoinFormulaire2CaseACocher",
  "besoinFormulaire2Numerique",
  "besoinFormulaire2Texte",
  "besoinFormulaire3CaseACocher",
  "besoinFormulaire3Numerique",
  "besoinFormulaire3Texte",
  "besoinFormulaire4CaseACocher",
  "besoinFormulaire4Numerique",
  "besoinFormulaire4Texte",
  "besoinFormulaire5CaseACocher",
  "besoinFormulaire5Numerique",
  "besoinFormulaire5Texte"
] as const;

const GENERIC_FORM_FLAG_KEYS = [
  "besoinFormulaire",
  "besoinFormulaire2",
  "besoinFormulaire3",
  "besoinFormulaire4",
  "besoinFormulaire5"
] as const;

const PARAMETER_FLAG_KEYS = [
  ...FORM_PARAMETER_FLAG_KEYS,
  ...GENERIC_FORM_FLAG_KEYS
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

type FormParameterFlagKey = (typeof FORM_PARAMETER_FLAG_KEYS)[number];
type GenericFormFlagKey = (typeof GENERIC_FORM_FLAG_KEYS)[number];
type ParameterFlagKey = (typeof PARAMETER_FLAG_KEYS)[number];

type ParameterFieldType = "text" | "number" | "boolean" | "select";

type ParameterOption = {
  label: string;
  value: string;
};

type FormParameterConfig = {
  path: string;
  order: number;
  type: ParameterFieldType;
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

const FORM_PARAMETER_CONFIG: Record<FormParameterFlagKey, FormParameterConfig> = {
  besoinFormulaireCaseACocher: { path: "sup", order: 1, type: "boolean" },
  besoinFormulaireNumerique: { path: "sup", order: 1, type: "number" },
  besoinFormulaireTexte: { path: "sup", order: 1, type: "text" },
  besoinFormulaire2CaseACocher: { path: "sup2", order: 2, type: "boolean" },
  besoinFormulaire2Numerique: { path: "sup2", order: 2, type: "number" },
  besoinFormulaire2Texte: { path: "sup2", order: 2, type: "text" },
  besoinFormulaire3CaseACocher: { path: "sup3", order: 3, type: "boolean" },
  besoinFormulaire3Numerique: { path: "sup3", order: 3, type: "number" },
  besoinFormulaire3Texte: { path: "sup3", order: 3, type: "text" },
  besoinFormulaire4CaseACocher: { path: "sup4", order: 4, type: "boolean" },
  besoinFormulaire4Numerique: { path: "sup4", order: 4, type: "number" },
  besoinFormulaire4Texte: { path: "sup4", order: 4, type: "text" },
  besoinFormulaire5CaseACocher: { path: "sup5", order: 5, type: "boolean" },
  besoinFormulaire5Numerique: { path: "sup5", order: 5, type: "number" },
  besoinFormulaire5Texte: { path: "sup5", order: 5, type: "text" }
};

const DEFAULT_FORM_LABELS: Record<string, string> = {
  sup: "Paramètre 1",
  sup2: "Paramètre 2",
  sup3: "Paramètre 3",
  sup4: "Paramètre 4",
  sup5: "Paramètre 5"
};

type FormFieldMetadata = {
  label: string;
  help?: string;
  options?: ParameterOption[];
  valueOverride?: string | number | boolean;
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

function extractFormFieldMetadata(
  flagValue: unknown,
  fallbackLabel: string,
  expectedType: ParameterFieldType
): FormFieldMetadata {
  let label = fallbackLabel;
  const helpParts: string[] = [];
  let options: ParameterOption[] | undefined;
  let valueOverride: string | number | boolean | undefined;

  const recordHelp = (text: string | undefined) => {
    if (!text) return;
    const trimmed = text.trim();
    if (trimmed.length > 0) {
      helpParts.push(trimmed);
    }
  };

  if (Array.isArray(flagValue)) {
    if (flagValue.length > 0) {
      const [rawLabel] = flagValue;
      if (typeof rawLabel === "string" && rawLabel.trim().length > 0) {
        label = rawLabel.trim();
      }
    }

    flagValue.slice(1).forEach(entry => {
      if (typeof entry === "string") {
        recordHelp(entry);
        return;
      }
      if (typeof entry === "number") {
        if (expectedType === "number") {
          recordHelp(`Valeur maximale : ${entry}`);
        }
        return;
      }
      if (typeof entry === "boolean") {
        if (expectedType === "boolean") {
          valueOverride = entry;
        }
        return;
      }
      if (Array.isArray(entry)) {
        const detected = findOptions(entry);
        if (detected.length > 0) {
          options = detected;
        }
        return;
      }
      if (isPlainObject(entry)) {
        const nestedLabel = findFirstString(entry, LABEL_KEYS);
        if (nestedLabel) {
          label = nestedLabel;
        }
        recordHelp(findFirstString(entry, HELP_KEYS));
        const nestedOptions = detectOptions(entry);
        if (nestedOptions.length > 0) {
          options = nestedOptions;
        }
        const valueKey = findValueKey(entry);
        if (valueKey && valueKey in entry) {
          valueOverride = (entry as Record<string, unknown>)[valueKey] as
            | string
            | number
            | boolean;
        }
      }
    });
  } else if (typeof flagValue === "string") {
    const trimmed = flagValue.trim();
    if (trimmed.length > 0) {
      label = trimmed;
    }
  } else if (isPlainObject(flagValue)) {
    const candidateLabel = findFirstString(flagValue, LABEL_KEYS);
    if (candidateLabel) {
      label = candidateLabel;
    }
    recordHelp(findFirstString(flagValue, HELP_KEYS));
    const nestedOptions = detectOptions(flagValue);
    if (nestedOptions.length > 0) {
      options = nestedOptions;
    }
    const valueKey = findValueKey(flagValue);
    if (valueKey && valueKey in flagValue) {
      valueOverride = (flagValue as Record<string, unknown>)[valueKey] as
        | string
        | number
        | boolean;
    }
  }

  const help = helpParts.length > 0 ? helpParts.join("\n\n") : undefined;
  return { label, help, options, valueOverride };
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

function getValueAtPath(target: Record<string, unknown>, path: string): unknown {
  const segments = parsePath(path);
  if (segments.length === 0) {
    return undefined;
  }

  let current: unknown = target;
  for (const segment of segments) {
    if (typeof segment === "number") {
      if (!Array.isArray(current) || segment < 0 || segment >= current.length) {
        return undefined;
      }
      current = current[segment];
      continue;
    }

    if (!current || typeof current !== "object") {
      return undefined;
    }

    if (!(segment in (current as Record<string, unknown>))) {
      return undefined;
    }

    current = (current as Record<string, unknown>)[segment];
  }

  return current;
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
  const fieldMap = new Map<string, ParameterField>();
  const orderMap = new Map<string, number>();

  const addField = (field: ParameterField, order: number) => {
    if (fieldMap.has(field.path)) {
      return;
    }
    fieldMap.set(field.path, field);
    orderMap.set(field.path, order);
  };

  const nbQuestionsRaw = getValueAtPath(exercice, "nbQuestions");
  const nbQuestionsValue =
    typeof nbQuestionsRaw === "number" && Number.isFinite(nbQuestionsRaw)
      ? nbQuestionsRaw
      : Number.isFinite(Number(nbQuestionsRaw))
        ? Number(nbQuestionsRaw)
        : 10;

  addField(
    {
      path: "nbQuestions",
      label: "Nombre de questions",
      type: "number",
      value: nbQuestionsValue
    },
    0
  );

  FORM_PARAMETER_FLAG_KEYS.forEach(flag => {
    const descriptor = (exercice as Record<string, unknown>)[flag];
    if (!descriptor) return;

    const config = FORM_PARAMETER_CONFIG[flag];
    const path = config.path;
    if (fieldMap.has(path)) return;

    const fallbackLabel =
      DEFAULT_FORM_LABELS[path] ?? createLabelFromKey(path);
    const metadata = extractFormFieldMetadata(
      descriptor,
      fallbackLabel,
      config.type
    );
    const fieldType: ParameterFieldType =
      metadata.options && metadata.options.length > 0
        ? "select"
        : config.type;

    const rawValue = getValueAtPath(exercice, path);
    const valueToUse =
      rawValue !== undefined ? rawValue : metadata.valueOverride;
    const normalizedValue = normalizeValue(valueToUse, fieldType);

    const field: ParameterField = {
      path,
      label: metadata.label,
      type: fieldType,
      value: normalizedValue
    };

    if (metadata.help) {
      field.help = metadata.help;
    }
    if (metadata.options && metadata.options.length > 0) {
      field.options = metadata.options;
    }

    addField(field, config.order);
  });

  GENERIC_FORM_FLAG_KEYS.forEach(flag => {
    if (!exercice[flag]) return;
    const formKey = resolveFormKey(flag);
    const value = exercice[formKey];
    if (value === undefined) return;

    const helpCandidate =
      typeof exercice[`${formKey}Aide`] === "string"
        ? String(exercice[`${formKey}Aide`])
        : undefined;

    const fallbackAccumulator = new Map<string, ParameterField>();
    collectFields(value, formKey, { help: helpCandidate }, fallbackAccumulator);
    fallbackAccumulator.forEach(field => {
      addField(field, Number.POSITIVE_INFINITY);
    });
  });

  const fields = Array.from(fieldMap.values());
  fields.sort((a, b) => {
    const orderA = orderMap.get(a.path) ?? Number.POSITIVE_INFINITY;
    const orderB = orderMap.get(b.path) ?? Number.POSITIVE_INFINITY;
    if (orderA !== orderB) {
      return orderA - orderB;
    }
    return a.label.localeCompare(b.label, "fr");
  });

  return fields;
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
