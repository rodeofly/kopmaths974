import type { MathfieldElement } from "mathlive";

type InteractionStatus = "correct" | "incorrect" | "incomplet";

type StoredAttempt = {
  value: string | string[];
  status: InteractionStatus;
  timestamp: number;
  durationSinceStartMs: number;
  durationSinceFirstInteractionMs?: number;
  quality: number;
  evaluated: boolean;
  expectedAvailable: boolean;
};

type StoredQuestionState = {
  id: string;
  order: number;
  status: InteractionStatus;
  lastValue: string | string[];
  attempts: StoredAttempt[];
  srs?: SrsReviewState;
};

type StoredExerciseState = {
  exerciseId: string;
  startedAt: number;
  updatedAt: number;
  questions: Record<string, StoredQuestionState>;
};

type ExpectedAnswer = string | string[];

type QuestionType =
  | "singleChoice"
  | "multipleChoice"
  | "text"
  | "number"
  | "math"
  | "select";

type QuestionItem = {
  id: string;
  order: number;
  type: QuestionType;
  container: HTMLElement;
  elements: Array<HTMLElement>;
  feedback: HTMLElement;
  expected?: ExpectedAnswer;
  firstInteractionAt?: number;
};

type SrsReviewState = {
  easeFactor: number;
  intervalDays: number;
  repetitions: number;
  nextReview: number;
  lastReview: number;
  lastQuality: number;
};

type EvaluationResult = {
  status: InteractionStatus;
  hasValue: boolean;
  evaluated: boolean;
};

type InitializeOptions = {
  container: HTMLElement;
  exerciseId: string;
  exercice?: unknown;
  rawContent?: string;
};

type CleanupFn = () => void;

const STORAGE_PREFIX = "kopmaths:exercise:";
const QUESTION_CLASS = "mathalea-question-interactive";
const STATUS_CLASSES: Record<InteractionStatus, string> = {
  correct: "mathalea-question--correct",
  incorrect: "mathalea-question--incorrect",
  incomplet: "mathalea-question--incomplete"
};

const DAY_IN_MS = 24 * 60 * 60 * 1000;
const DEFAULT_EASE_FACTOR = 2.5;
const MIN_EASE_FACTOR = 1.3;

const DEBUG_INTERACTION_PREFIX = "[KopMaths][Interaction]";
const DEBUG_INTERACTION_CSS_PREFIX = `${DEBUG_INTERACTION_PREFIX}[CSS]`;

function debugInteractionCss(label: string, details: unknown): void {
  if (typeof console !== "undefined" && typeof console.debug === "function") {
    console.debug(DEBUG_INTERACTION_CSS_PREFIX, label, details);
  }
}

const FEEDBACK_MESSAGES: Record<InteractionStatus, string> = {
  correct: "✅ Bonne réponse !",
  incorrect: "❌ Essaie encore !",
  incomplet: "ℹ️ Réponse enregistrée."
};

const PENDING_MESSAGE = "🕑 En attente de réponse.";
const UNAVAILABLE_MESSAGE =
  "ℹ️ Réponse enregistrée (validation indisponible).";

function sanitizeHtml(raw: string): string {
  return raw
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stripLatexCommands(value: string): string {
  if (!value) return "";

  return value
    .replace(/\\text\*?\{([^}]*)\}/gi, "$1")
    .replace(/\\mathrm\{([^}]*)\}/gi, "$1")
    .replace(/\\operatorname\{([^}]*)\}/gi, "$1")
    .replace(/\\left\s*/gi, "")
    .replace(/\\right\s*/gi, "")
    .replace(/\\[,;:!]/g, " ")
    .replace(/\\times/g, "x")
    .replace(/\\cdot/g, "·")
    .replace(/\\frac\{([^}]*)\}\{([^}]*)\}/gi, "$1 / $2")
    .replace(/\\sqrt\{([^}]*)\}/gi, "sqrt($1)")
    .replace(/\\overline\{([^}]*)\}/gi, "$1")
    .replace(/\\underline\{([^}]*)\}/gi, "$1")
    .replace(/\\[a-zA-Z]+/g, " ")
    .replace(/[{}$]/g, " ");
}

function normalizeAnswerValue(value: string): string {
  if (!value) return "";
  const sanitized = sanitizeHtml(value);
  const withoutLatex = stripLatexCommands(sanitized);
  return normalizeString(withoutLatex);
}

function computeAttemptQuality(
  status: InteractionStatus,
  durationSinceStartMs: number,
  durationSinceFirstInteractionMs: number | undefined,
  evaluated: boolean
): number {
  if (!evaluated) {
    return 0;
  }

  const referenceDuration =
    durationSinceFirstInteractionMs ?? durationSinceStartMs ?? 0;

  if (status === "correct") {
    if (referenceDuration <= 8000) return 5;
    if (referenceDuration <= 15000) return 4;
    if (referenceDuration <= 30000) return 3;
    if (referenceDuration <= 60000) return 2;
    return 1;
  }

  if (status === "incorrect") {
    return referenceDuration <= 15000 ? 1 : 0;
  }

  return 0;
}

function updateSrsStateFromAttempt(
  current: SrsReviewState | undefined,
  attempt: StoredAttempt
): SrsReviewState {
  const base: SrsReviewState = current ?? {
    easeFactor: DEFAULT_EASE_FACTOR,
    intervalDays: 0,
    repetitions: 0,
    nextReview: attempt.timestamp,
    lastReview: attempt.timestamp,
    lastQuality: attempt.quality
  };

  let easeFactor = base.easeFactor;
  let repetitions = base.repetitions;
  let intervalDays = base.intervalDays;

  easeFactor += 0.1 - (5 - attempt.quality) * (0.08 + (5 - attempt.quality) * 0.02);
  if (easeFactor < MIN_EASE_FACTOR) {
    easeFactor = MIN_EASE_FACTOR;
  }

  if (attempt.quality < 2) {
    repetitions = 0;
    intervalDays = 0;
  } else if (attempt.quality < 3) {
    repetitions = 0;
    intervalDays = 1;
  } else {
    repetitions += 1;
    if (repetitions <= 1) {
      intervalDays = 1;
    } else if (repetitions === 2) {
      intervalDays = 6;
    } else {
      const baseInterval = intervalDays > 0 ? intervalDays : 1;
      intervalDays = Math.max(1, Math.round(baseInterval * easeFactor));
    }
  }

  const nextReview = attempt.timestamp + intervalDays * DAY_IN_MS;

  return {
    easeFactor,
    intervalDays,
    repetitions,
    nextReview,
    lastReview: attempt.timestamp,
    lastQuality: attempt.quality
  };
}

function normalizeString(value: string): string {
  return value
    .replace(/\s+/g, " ")
    .replace(/,/g, ".")
    .trim()
    .toLowerCase();
}

function toStringValue(value: unknown): string {
  if (value == null) return "";
  if (typeof value === "string") return sanitizeHtml(value).trim();
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  if (Array.isArray(value)) {
    return value.map(toStringValue).join(" | ");
  }
  if (typeof value === "object" && "value" in value) {
    return toStringValue((value as { value: unknown }).value);
  }
  return String(value);
}

function isTruthy(value: unknown): boolean {
  if (value === true) return true;
  if (value === false || value == null) return false;
  if (typeof value === "number") {
    return Math.abs(value) > 1e-9;
  }
  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    if (!normalized) return false;
    return ["true", "vrai", "yes", "oui", "1"].includes(normalized);
  }
  return Boolean(value);
}

function getChoiceText(input: HTMLInputElement): string {
  if (input.value && input.value.trim() && input.value !== "on") {
    return input.value.trim();
  }

  const labelledBy = input.getAttribute("aria-labelledby");
  if (labelledBy) {
    const label = input.ownerDocument.getElementById(labelledBy);
    if (label) {
      return sanitizeHtml(label.innerHTML);
    }
  }

  const siblingLabel = input.nextElementSibling;
  if (siblingLabel instanceof HTMLLabelElement) {
    return sanitizeHtml(siblingLabel.innerHTML);
  }

  if (input.id) {
    const associated = input.ownerDocument.querySelector<HTMLLabelElement>(
      `label[for="${input.id}"]`
    );
    if (associated) {
      return sanitizeHtml(associated.innerHTML);
    }
  }

  const parentLabel = input.closest("label");
  if (parentLabel) {
    return sanitizeHtml(parentLabel.innerHTML);
  }

  return input.value && input.value !== "on"
    ? input.value.trim()
    : input.getAttribute("data-value")?.trim() ?? "";
}

function parseExpectedEntry(entry: unknown): ExpectedAnswer | undefined {
  if (entry == null) return undefined;

  if (Array.isArray(entry)) {
    const flattened = entry
      .map(item => toStringValue(item))
      .map(item => item.trim())
      .filter(Boolean);
    if (flattened.length === 0) {
      return undefined;
    }
    return flattened.length === 1 ? flattened[0] : flattened;
  }

  if (typeof entry === "object") {
    const record = entry as Record<string, unknown>;

    if (Array.isArray(record.propositions)) {
      const correctChoices = record.propositions
        .map(choice => {
          if (!choice || typeof choice !== "object") {
            return undefined;
          }
          const choiceRecord = choice as Record<string, unknown>;
          const status =
            choiceRecord.statut ??
            choiceRecord.status ??
            choiceRecord.correct ??
            choiceRecord.isCorrect;
          if (!isTruthy(status)) {
            return undefined;
          }
          const textSource =
            choiceRecord.texte ??
            choiceRecord.text ??
            choiceRecord.label ??
            choiceRecord.value ??
            choiceRecord.valeur;
          const parsedText = textSource != null ? toStringValue(textSource) : "";
          return parsedText.trim() ? parsedText : undefined;
        })
        .filter((value): value is string => typeof value === "string" && value.trim().length > 0);

      if (correctChoices.length > 0) {
        const options = record.options;
        const radioOption =
          options && typeof options === "object" && options !== null
            ? (options as Record<string, unknown>).radio
            : undefined;
        const expectsSingle =
          radioOption !== undefined ? isTruthy(radioOption) : correctChoices.length === 1;
        return expectsSingle ? correctChoices[0] : correctChoices;
      }
    }

    if ("value" in record) {
      return parseExpectedEntry(record.value);
    }
    if ("texte" in record) {
      return parseExpectedEntry(record.texte);
    }
    if ("reponse" in record) {
      return parseExpectedEntry(record.reponse);
    }
    if ("reponses" in record) {
      return parseExpectedEntry(record.reponses);
    }
    if ("valeur" in record) {
      return parseExpectedEntry(record.valeur);
    }
    if ("valeurs" in record) {
      return parseExpectedEntry(record.valeurs);
    }
    if ("answer" in record) {
      return parseExpectedEntry(record.answer);
    }
    if ("answers" in record) {
      return parseExpectedEntry(record.answers);
    }
  }

  if (typeof entry === "string") {
    const sanitized = sanitizeHtml(entry);
    if (!sanitized) return undefined;

    const splitted = sanitized
      .split(/\s*[;\n\|]+\s*/)
      .map(part => part.trim())
      .filter(Boolean);

    if (splitted.length > 1) {
      return splitted;
    }

    return sanitized.trim();
  }

  if (typeof entry === "number" || typeof entry === "boolean") {
    return String(entry);
  }

  return undefined;
}

function extractExpectedAnswers(exercice: unknown): ExpectedAnswer[] {
  if (!exercice || typeof exercice !== "object") {
    return [];
  }

  const obj = exercice as Record<string, unknown>;

  const arrayCandidates = [
    obj.autoCorrection,
    obj.autocorrection,
    obj.reponses,
    obj.reponse,
    obj.answers,
    obj.solutions,
    obj.solution,
    obj.listeCorrections,
    obj.listeSolutions,
    obj.listeReponses,
    obj.listeResponses
  ];

  for (const candidate of arrayCandidates) {
    if (Array.isArray(candidate)) {
      const parsed = candidate
        .map(entry => parseExpectedEntry(entry))
        .filter((entry): entry is ExpectedAnswer => entry !== undefined);
      if (parsed.length > 0) {
        return parsed;
      }
    }
  }

  const stringCandidates = [
    obj.correction,
    obj.corrections,
    obj.contenuCorrige,
    obj.contenuCorrection,
    obj.solution,
    obj.solutions
  ];

  for (const candidate of stringCandidates) {
    if (typeof candidate === "string") {
      const sanitized = sanitizeHtml(candidate);
      if (!sanitized) continue;
      const split = sanitized
        .split(/\s*(?:\n|;|\|)\s*/)
        .map(value => value.trim())
        .filter(Boolean);
      if (split.length > 0) {
        return split;
      }
    }
  }

  return [];
}

function getQuestionContainer(element: Element, root: HTMLElement): HTMLElement {
  const selectors = [
    "[data-question]",
    "[data-question-id]",
    ".question",
    ".questions",
    ".qcm",
    ".ligne",
    "li",
    "p",
    "div"
  ];

  for (const selector of selectors) {
    const candidate = element.closest<HTMLElement>(selector);
    if (candidate && root.contains(candidate)) {
      return candidate;
    }
  }

  return element.parentElement instanceof HTMLElement
    ? element.parentElement
    : root;
}

function ensureFeedbackElement(container: HTMLElement): HTMLElement {
  const existing = container.querySelector<HTMLElement>(
    ":scope > .mathalea-question-feedback"
  );
  if (existing) {
    return existing;
  }
  const feedback = container.ownerDocument.createElement("div");
  feedback.className = "mathalea-question-feedback";
  container.appendChild(feedback);
  return feedback;
}

function getStorageKey(exerciseId: string): string {
  return `${STORAGE_PREFIX}${exerciseId}`;
}

function loadStoredState(exerciseId: string): StoredExerciseState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(getStorageKey(exerciseId));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredExerciseState;
    if (!parsed || typeof parsed !== "object") return null;
    if (parsed.exerciseId !== exerciseId) return null;
    return migrateStoredState(parsed);
  } catch (error) {
    console.warn("Impossible de lire l'état de l'exercice", error);
    return null;
  }
}

function saveStoredState(state: StoredExerciseState) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      getStorageKey(state.exerciseId),
      JSON.stringify(state)
    );
  } catch (error) {
    console.warn("Impossible d'enregistrer l'état de l'exercice", error);
  }
}

function migrateStoredState(state: StoredExerciseState): StoredExerciseState {
  const migrated = state;
  const questionEntries = Object.values(migrated.questions ?? {});
  questionEntries.forEach(question => {
    if (!Array.isArray(question.attempts)) {
      question.attempts = [];
    }

    let currentSrs: SrsReviewState | undefined = undefined;

    question.attempts = question.attempts.map(rawAttempt => {
      const normalized = normalizeStoredAttempt(rawAttempt);
      currentSrs = updateSrsStateFromAttempt(currentSrs, normalized);
      return normalized;
    });

    if (currentSrs) {
      question.srs = currentSrs;
    }
  });

  return migrated;
}

function normalizeStoredAttempt(rawAttempt: Partial<StoredAttempt>): StoredAttempt {
  const status: InteractionStatus =
    rawAttempt?.status === "correct" ||
    rawAttempt?.status === "incorrect" ||
    rawAttempt?.status === "incomplet"
      ? rawAttempt.status
      : "incomplet";
  const durationSinceStartMs =
    typeof rawAttempt.durationSinceStartMs === "number"
      ? rawAttempt.durationSinceStartMs
      : 0;
  const durationSinceFirstInteractionMs =
    typeof rawAttempt.durationSinceFirstInteractionMs === "number"
      ? rawAttempt.durationSinceFirstInteractionMs
      : undefined;
  const evaluated =
    typeof rawAttempt.evaluated === "boolean"
      ? rawAttempt.evaluated
      : status !== "incomplet";
  const expectedAvailable =
    typeof rawAttempt.expectedAvailable === "boolean"
      ? rawAttempt.expectedAvailable
      : evaluated;
  const quality =
    typeof rawAttempt.quality === "number"
      ? rawAttempt.quality
      : computeAttemptQuality(
          status,
          durationSinceStartMs,
          durationSinceFirstInteractionMs,
          evaluated
        );

  const value = rawAttempt.value;
  const normalizedValue: string | string[] = Array.isArray(value)
    ? value.map(entry => (typeof entry === "string" ? entry : String(entry)))
    : typeof value === "string"
      ? value
      : "";

  return {
    value: normalizedValue,
    status,
    timestamp:
      typeof rawAttempt.timestamp === "number"
        ? rawAttempt.timestamp
        : Date.now(),
    durationSinceStartMs,
    durationSinceFirstInteractionMs,
    quality,
    evaluated,
    expectedAvailable
  };
}

function compareStringValues(a: string, b: string): boolean {
  const normalizedA = normalizeAnswerValue(a);
  const normalizedB = normalizeAnswerValue(b);
  if (!normalizedA && !normalizedB) return true;

  const numberA = Number(normalizedA);
  const numberB = Number(normalizedB);
  if (!Number.isNaN(numberA) && !Number.isNaN(numberB)) {
    return Math.abs(numberA - numberB) < 1e-6;
  }

  return normalizedA === normalizedB;
}

function compareArrayValues(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  const normalizedA = a.map(normalizeAnswerValue).sort();
  const normalizedB = b.map(normalizeAnswerValue).sort();
  return normalizedA.every((value, index) => value === normalizedB[index]);
}

function evaluateAnswer(
  value: string | string[],
  expected: ExpectedAnswer | undefined,
  questionType: QuestionType
): EvaluationResult {
  const hasValue = Array.isArray(value) ? value.length > 0 : value.trim().length > 0;
  if (!hasValue) {
    return { status: "incomplet", hasValue: false, evaluated: false };
  }

  if (expected === undefined) {
    return { status: "incomplet", hasValue: true, evaluated: false };
  }

  if (Array.isArray(expected)) {
    const valuesArray = Array.isArray(value) ? value : [value];
    const isCorrect = compareArrayValues(valuesArray, expected);
    return {
      status: isCorrect ? "correct" : "incorrect",
      hasValue: true,
      evaluated: true
    };
  }

  const stringValue = Array.isArray(value) ? value.join(" ") : value;
  const isCorrect = compareStringValues(stringValue, expected);
  return {
    status: isCorrect ? "correct" : "incorrect",
    hasValue: true,
    evaluated: true
  };
}

function readMathFieldValue(element: HTMLElement): string {
  const mathField = element as MathfieldElement & { getValue?: () => string };
  if (typeof mathField.getValue === "function") {
    return mathField.getValue();
  }
  if ("value" in mathField) {
    const value = (mathField as MathfieldElement & { value?: string }).value;
    if (typeof value === "string") {
      return value;
    }
  }
  return element.textContent?.trim() ?? "";
}

function getQuestionValue(question: QuestionItem): string | string[] {
  switch (question.type) {
    case "singleChoice": {
      const input = question.elements.find(
        el => el instanceof HTMLInputElement && el.checked
      ) as HTMLInputElement | undefined;
      if (!input) {
        return "";
      }
      const choiceValue = getChoiceText(input);
      if (choiceValue.trim()) {
        return choiceValue.trim();
      }
      return input.value ?? "";
    }
    case "multipleChoice": {
      const values: string[] = [];
      question.elements.forEach(element => {
        if (element instanceof HTMLInputElement && element.checked) {
            const choiceValue = getChoiceText(element);
            values.push(
              choiceValue.trim()
                ? choiceValue.trim()
                : element.value && element.value !== "on"
                  ? element.value
                  : "true"
            );
        }
      });
      return values;
    }
    case "select": {
      const element = question.elements[0];
      if (element instanceof HTMLSelectElement) {
        if (element.multiple) {
          return Array.from(element.selectedOptions).map(option => option.value);
        }
        return element.value;
      }
      return "";
    }
    case "number": {
      const element = question.elements[0];
      if (element instanceof HTMLInputElement) {
        return element.value;
      }
      return "";
    }
    case "math": {
      const element = question.elements[0];
      return element ? readMathFieldValue(element) : "";
    }
    case "text":
    default: {
      const element = question.elements[0];
      if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
        return element.value;
      }
      return element?.textContent?.trim() ?? "";
    }
  }
}

function detectExpectedFromDom(question: QuestionItem): ExpectedAnswer | undefined {
  for (const element of question.elements) {
    const dataset = (element as HTMLElement).dataset;
    const direct = dataset.answer ?? dataset.solution ?? dataset.correct;
    if (direct) {
      return parseExpectedEntry(direct);
    }
    const attributeValue =
      element.getAttribute("data-answer") ??
      element.getAttribute("data-solution") ??
      element.getAttribute("data-correct");
    if (attributeValue) {
      return parseExpectedEntry(attributeValue);
    }

    const parentWithData = element.closest<HTMLElement>(
      "[data-answer], [data-solution], [data-correct]"
    );
    if (parentWithData) {
      const value =
        parentWithData.dataset.answer ??
        parentWithData.dataset.solution ??
        parentWithData.dataset.correct ??
        parentWithData.getAttribute("data-answer") ??
        parentWithData.getAttribute("data-solution") ??
        parentWithData.getAttribute("data-correct");
      if (value) {
        return parseExpectedEntry(value);
      }
    }

    const labelled = element.closest<HTMLElement>(
      ".bonne, .bon, .correct, .reponse-correcte, .solution"
    );
    if (labelled) {
      if (question.type === "multipleChoice") {
        const values = question.elements
          .filter(el =>
            el.closest<HTMLElement>(
              ".bonne, .bon, .correct, .reponse-correcte, .solution"
            )
          )
          .map(el =>
            el instanceof HTMLInputElement ? el.value : el.textContent ?? ""
          )
          .filter(Boolean);
        if (values.length > 0) {
          return values;
        }
      }
      if (question.type === "singleChoice") {
        const input = question.elements.find(el => labelled.contains(el));
        if (input instanceof HTMLInputElement) {
          return input.value;
        }
        const text = labelled.textContent?.trim();
        if (text) {
          return text;
        }
      }
    }
  }
  return undefined;
}

function updateQuestionStatus(
  question: QuestionItem,
  status: InteractionStatus,
  message: string
) {
  question.container.classList.add(QUESTION_CLASS);
  Object.values(STATUS_CLASSES).forEach(className => {
    question.container.classList.remove(className);
  });
  question.container.classList.add(STATUS_CLASSES[status]);
  question.feedback.textContent = message;
  question.feedback.classList.remove(
    "mathalea-question-feedback--correct",
    "mathalea-question-feedback--incorrect",
    "mathalea-question-feedback--incomplete"
  );
  const modifier =
    status === "correct"
      ? "mathalea-question-feedback--correct"
      : status === "incorrect"
        ? "mathalea-question-feedback--incorrect"
        : "mathalea-question-feedback--incomplete";
  question.feedback.classList.add(modifier);

  const baseDetails = {
    id: question.id,
    status,
    containerClasses: Array.from(question.container.classList),
    feedbackClasses: Array.from(question.feedback.classList)
  };

  if (
    typeof window !== "undefined" &&
    typeof window.getComputedStyle === "function"
  ) {
    const containerStyle = window.getComputedStyle(question.container);
    const feedbackStyle = window.getComputedStyle(question.feedback);
    debugInteractionCss("update-question-status", {
      ...baseDetails,
      styles: {
        borderLeftColor: containerStyle.borderLeftColor,
        backgroundColor: containerStyle.backgroundColor,
        padding: containerStyle.padding,
        feedbackColor: feedbackStyle.color
      }
    });
  } else {
    debugInteractionCss("update-question-status", {
      ...baseDetails,
      environment: "no-window"
    });
  }
}

function restoreInitialStatus(question: QuestionItem) {
  question.container.classList.add(QUESTION_CLASS);
  Object.values(STATUS_CLASSES).forEach(className => {
    question.container.classList.remove(className);
  });
  question.feedback.textContent = PENDING_MESSAGE;
  question.feedback.classList.remove(
    "mathalea-question-feedback--correct",
    "mathalea-question-feedback--incorrect",
    "mathalea-question-feedback--incomplete"
  );
  question.feedback.classList.add("mathalea-question-feedback--incomplete");

  if (
    typeof window !== "undefined" &&
    typeof window.getComputedStyle === "function"
  ) {
    const containerStyle = window.getComputedStyle(question.container);
    const feedbackStyle = window.getComputedStyle(question.feedback);
    debugInteractionCss("restore-initial-status", {
      id: question.id,
      containerClasses: Array.from(question.container.classList),
      feedbackClasses: Array.from(question.feedback.classList),
      styles: {
        borderLeftColor: containerStyle.borderLeftColor,
        backgroundColor: containerStyle.backgroundColor,
        padding: containerStyle.padding,
        feedbackColor: feedbackStyle.color
      }
    });
  } else {
    debugInteractionCss("restore-initial-status", {
      id: question.id,
      containerClasses: Array.from(question.container.classList),
      feedbackClasses: Array.from(question.feedback.classList),
      environment: "no-window"
    });
  }
}

function createQuestion(
  id: string,
  type: QuestionType,
  element: HTMLElement,
  container: HTMLElement,
  order: number
): QuestionItem {
  const feedback = ensureFeedbackElement(container);
  container.classList.add(QUESTION_CLASS);
  if (!container.dataset.mathaleaQuestionId) {
    container.dataset.mathaleaQuestionId = id;
  }
  const question: QuestionItem = {
    id,
    order,
    type,
    container,
    elements: [element],
    feedback
  };
  restoreInitialStatus(question);
  return question;
}

function gatherQuestions(
  root: HTMLElement,
  expectedAnswers: ExpectedAnswer[],
  exerciseId: string
): QuestionItem[] {
  const questions: QuestionItem[] = [];
  const radioGroups = new Map<string, QuestionItem>();
  const checkboxGroups = new Map<string, QuestionItem>();
  let autoIndex = 0;

  const interactiveElements = Array.from(
    root.querySelectorAll<HTMLElement>("input, textarea, select, math-field")
  );

  interactiveElements.forEach(element => {
    if (element instanceof HTMLInputElement) {
      const type = element.type;
      if (type === "hidden" || type === "submit" || type === "button") {
        return;
      }

      if (type === "radio" || type === "checkbox") {
        const groupMap = type === "radio" ? radioGroups : checkboxGroups;
        const container = getQuestionContainer(element, root);
        const keyFromName = element.name || container.dataset.mathaleaQuestionId;
        const key = keyFromName || `${exerciseId}-${type}-${autoIndex}`;
        let question = groupMap.get(key);
        if (!question) {
          question = createQuestion(
            key,
            type === "radio" ? "singleChoice" : "multipleChoice",
            element,
            container,
            questions.length
          );
          const expected =
            detectExpectedFromDom(question) ?? expectedAnswers[question.order];
          if (expected !== undefined) {
            question.expected = expected;
          }
          questions.push(question);
          groupMap.set(key, question);
          autoIndex += 1;
        } else {
          question.elements.push(element);
        }
        return;
      }

      const container = getQuestionContainer(element, root);
      const id =
        element.id ||
        element.name ||
        container.dataset.mathaleaQuestionId ||
        `${exerciseId}-input-${autoIndex}`;
      const question = createQuestion(
        id,
        type === "number" ? "number" : "text",
        element,
        container,
        questions.length
      );
      const expected =
        detectExpectedFromDom(question) ?? expectedAnswers[question.order];
      if (expected !== undefined) {
        question.expected = expected;
      }
      questions.push(question);
      autoIndex += 1;
      return;
    }

    if (element instanceof HTMLTextAreaElement) {
      const container = getQuestionContainer(element, root);
      const id =
        element.id ||
        element.name ||
        container.dataset.mathaleaQuestionId ||
        `${exerciseId}-textarea-${autoIndex}`;
      const question = createQuestion(
        id,
        "text",
        element,
        container,
        questions.length
      );
      const expected =
        detectExpectedFromDom(question) ?? expectedAnswers[question.order];
      if (expected !== undefined) {
        question.expected = expected;
      }
      questions.push(question);
      autoIndex += 1;
      return;
    }

    if (element instanceof HTMLSelectElement) {
      const container = getQuestionContainer(element, root);
      const id =
        element.id ||
        element.name ||
        container.dataset.mathaleaQuestionId ||
        `${exerciseId}-select-${autoIndex}`;
      const question = createQuestion(
        id,
        "select",
        element,
        container,
        questions.length
      );
      const expected =
        detectExpectedFromDom(question) ?? expectedAnswers[question.order];
      if (expected !== undefined) {
        question.expected = expected;
      }
      questions.push(question);
      autoIndex += 1;
      return;
    }

    if (element.tagName.toLowerCase() === "math-field") {
      const container = getQuestionContainer(element, root);
      const id =
        (element.getAttribute("id") ??
          element.getAttribute("name") ??
          container.dataset.mathaleaQuestionId ??
          `${exerciseId}-math-${autoIndex}`);
      const question = createQuestion(
        id,
        "math",
        element,
        container,
        questions.length
      );
      const expected =
        detectExpectedFromDom(question) ?? expectedAnswers[question.order];
      if (expected !== undefined) {
        question.expected = expected;
      }
      questions.push(question);
      autoIndex += 1;
      return;
    }
  });

  return questions;
}

function attachListeners(
  question: QuestionItem,
  handler: () => void
): Array<() => void> {
  const removers: Array<() => void> = [];
  question.elements.forEach(element => {
    let eventName: keyof HTMLElementEventMap = "change";
    if (
      question.type === "text" ||
      question.type === "number" ||
      question.type === "math"
    ) {
      eventName = "input";
    }
    const listener = () => handler();
    element.addEventListener(eventName, listener);
    if (question.type === "math") {
      element.addEventListener("change", listener);
    }
    removers.push(() => {
      element.removeEventListener(eventName, listener);
      if (question.type === "math") {
        element.removeEventListener("change", listener);
      }
    });
  });
  return removers;
}

export function initializeExerciseInteraction(
  options: InitializeOptions
): CleanupFn {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const { container, exerciseId, exercice } = options;
  const expectedAnswers = extractExpectedAnswers(exercice);
  const questions = gatherQuestions(container, expectedAnswers, exerciseId);

  const storedState =
    loadStoredState(exerciseId) ??
    migrateStoredState({
      exerciseId,
      startedAt: Date.now(),
      updatedAt: Date.now(),
      questions: {}
    });

  const sessionStart =
    typeof performance !== "undefined" ? performance.now() : Date.now();
  const removers: Array<() => void> = [];

  questions.forEach(question => {
    const existing = storedState.questions[question.id];
    if (existing) {
      const lastAttempt = existing.attempts[existing.attempts.length - 1];
      if (lastAttempt) {
        const message =
          lastAttempt.status === "incomplet" && lastAttempt.value
            ? UNAVAILABLE_MESSAGE
            : FEEDBACK_MESSAGES[lastAttempt.status] ?? PENDING_MESSAGE;
        updateQuestionStatus(question, lastAttempt.status, message);
      } else {
        restoreInitialStatus(question);
      }
    } else {
      storedState.questions[question.id] = {
        id: question.id,
        order: question.order,
        status: "incomplet",
        lastValue: "",
        attempts: [],
        srs: undefined
      };
      restoreInitialStatus(question);
    }

    const listeners = attachListeners(question, () => {
      const now =
        typeof performance !== "undefined" ? performance.now() : Date.now();
      if (question.firstInteractionAt === undefined) {
        question.firstInteractionAt = now;
      }
      const value = getQuestionValue(question);
      const evaluation = evaluateAnswer(value, question.expected, question.type);

      const hadExpected = question.expected !== undefined;
      const message = evaluation.hasValue
        ? evaluation.evaluated
          ? FEEDBACK_MESSAGES[evaluation.status]
          : UNAVAILABLE_MESSAGE
        : PENDING_MESSAGE;

      updateQuestionStatus(question, evaluation.status, message);

      const durationSinceStart = Math.max(
        0,
        Math.round(now - sessionStart)
      );
      const durationSinceFirstInteraction =
        question.firstInteractionAt !== undefined
          ? Math.max(0, Math.round(now - question.firstInteractionAt))
          : undefined;

      const serializedValue = Array.isArray(value)
        ? value.map(part => part)
        : value;

      const questionState = storedState.questions[question.id];
      questionState.status = evaluation.status;
      questionState.lastValue = serializedValue;
      const attemptRecord: StoredAttempt = {
        value: serializedValue,
        status: evaluation.status,
        timestamp: Date.now(),
        durationSinceStartMs: durationSinceStart,
        durationSinceFirstInteractionMs: durationSinceFirstInteraction,
        quality: computeAttemptQuality(
          evaluation.status,
          durationSinceStart,
          durationSinceFirstInteraction,
          evaluation.evaluated
        ),
        evaluated: evaluation.evaluated,
        expectedAvailable: hadExpected
      };

      questionState.attempts.push(attemptRecord);
      questionState.srs = updateSrsStateFromAttempt(
        questionState.srs,
        attemptRecord
      );
      storedState.updatedAt = Date.now();

      // If we still do not have an expected answer, try to infer it from the DOM once.
      if (!hadExpected) {
        const inferred = detectExpectedFromDom(question);
        if (inferred !== undefined) {
          question.expected = inferred;
        }
      }

      saveStoredState(storedState);
    });

    removers.push(...listeners);
  });

  return () => {
    removers.forEach(remove => remove());
    questions.forEach(question => {
      question.container.classList.remove(QUESTION_CLASS);
      Object.values(STATUS_CLASSES).forEach(className => {
        question.container.classList.remove(className);
      });
      if (question.feedback.parentElement === question.container) {
        question.container.removeChild(question.feedback);
      }
    });
  };
}

export type { InteractionStatus, StoredExerciseState };
