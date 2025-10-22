import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import renderMathInElement from "katex/contrib/auto-render";
import "mathlive";

import translateLatexToHtml from "../utils/latexToHtml";

type ExerciceInstance = {
  applyNewSeed: () => void;
  nouvelleVersion: () => void;
  contenu?: string;
  listeQuestions?: string[];
  correction?: string;
  contenuCorrige?: string;
  listeCorrections?: string[];
};

type ExerciceModule = {
  default: new () => ExerciceInstance;
};

type FlashcardSession = {
  question: string;
  timestamp: number;
  durationMs: number;
  success: boolean;
};

const delimiters = [
  { left: "$$", right: "$$", display: true },
  { left: "$", right: "$", display: false },
  { left: "\\(", right: "\\)", display: false },
  { left: "\\[", right: "\\]", display: true }
];

const STORAGE_KEY = "flashcardsSessions";
const MAX_SESSIONS = 50;
const FALLBACK_ANSWER = "Aucune correction disponible pour cette carte.";

function splitFlashcardContent(rawHtml: string, fallbackAnswer: string) {
  const sanitizedHtml = translateLatexToHtml(rawHtml);
  const sanitizedFallback = translateLatexToHtml(fallbackAnswer);

  if (!sanitizedHtml) {
    return { question: "", answer: sanitizedFallback };
  }

  if (typeof window === "undefined" || typeof window.DOMParser === "undefined") {
    return { question: sanitizedHtml, answer: sanitizedFallback };
  }

  const parser = new window.DOMParser();
  const doc = parser.parseFromString(sanitizedHtml, "text/html");
  const answerNode = doc.querySelector(
    ".correction, .corrige, .reponse, .solution, .answer"
  );

  if (answerNode) {
    const extracted = answerNode.innerHTML.trim();
    answerNode.remove();
    return {
      question: doc.body.innerHTML.trim(),
      answer: extracted || sanitizedFallback
    };
  }

  return { question: sanitizedHtml, answer: sanitizedFallback };
}

function extractPlainText(html: string) {
  if (!html) return "";

  if (typeof window === "undefined" || !window.document) {
    return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  }

  const container = window.document.createElement("div");
  container.innerHTML = html;
  return (container.textContent || "").replace(/\s+/g, " ").trim();
}

function formatDuration(ms: number) {
  return `${(ms / 1000).toFixed(1)} s`;
}

function truncate(text: string, length = 120) {
  if (text.length <= length) return text;
  return `${text.slice(0, length)}…`;
}

function Flashcards() {
  const exerciceRef = useRef<ExerciceInstance | null>(null);
  const questionContainerRef = useRef<HTMLDivElement | null>(null);
  const answerContainerRef = useRef<HTMLDivElement | null>(null);
  const isMountedRef = useRef(false);
  const startTimeRef = useRef<number | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [questionHtml, setQuestionHtml] = useState("");
  const [answerHtml, setAnswerHtml] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [sessions, setSessions] = useState<FlashcardSession[]>([]);

  const dateFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat("fr-FR", {
        dateStyle: "short",
        timeStyle: "medium"
      }),
    []
  );

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) return;
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        setSessions(parsed);
      }
    } catch (err) {
      console.warn("Impossible de lire les sessions de flashcards", err);
    }
  }, []);

  const persistSessions = useCallback((next: FlashcardSession[]) => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (err) {
      console.warn("Impossible d'enregistrer les sessions de flashcards", err);
    }
  }, []);

  const generateCard = useCallback(
    (options: { showLoader?: boolean } = {}) => {
      const exercice = exerciceRef.current;
      if (!exercice) return;

      if (options.showLoader) {
        setLoading(true);
      }

      try {
        exercice.applyNewSeed?.();
        exercice.nouvelleVersion?.();

        const rawContent =
          exercice.contenu ?? exercice.listeQuestions?.join("\n") ?? "";
        const rawAnswer =
          exercice.contenuCorrige ??
          exercice.correction ??
          exercice.listeCorrections?.join("\n") ??
          "";

        const { question, answer } = splitFlashcardContent(rawContent, rawAnswer);
        if (!isMountedRef.current) return;

        setQuestionHtml(question);
        setAnswerHtml(answer);
        setShowAnswer(false);
        setError(null);
        startTimeRef.current =
          typeof performance !== "undefined" ? performance.now() : Date.now();
      } catch (err) {
        console.error("Erreur lors de la génération de la carte", err);
        if (isMountedRef.current) {
          setError(err instanceof Error ? err.message : String(err));
        }
      } finally {
        if (isMountedRef.current) {
          setLoading(false);
        }
      }
    },
    []
  );

  useEffect(() => {
    let active = true;

    async function loadExercise() {
      setLoading(true);
      try {
        const module: ExerciceModule = await import("@exos/6e/6N5-3");

        if (!active) return;

        if (typeof window !== "undefined") {
          window.MathALEA = {
            ...(window.MathALEA ?? {}),
            eN5_3: module
          };
        }

        const ExerciseClass = module.default;
        const exercice = new ExerciseClass();
        exerciceRef.current = exercice;
        generateCard();
      } catch (err) {
        console.error("Erreur lors du chargement de l'exercice", err);
        if (active) {
          setError(err instanceof Error ? err.message : String(err));
          setLoading(false);
        }
      }
    }

    loadExercise();

    return () => {
      active = false;
    };
  }, [generateCard]);

  useEffect(() => {
    if (!questionHtml || !questionContainerRef.current) return;

    renderMathInElement(questionContainerRef.current, {
      delimiters,
      throwOnError: false,
      strict: "ignore"
    });
  }, [questionHtml]);

  useEffect(() => {
    if (!showAnswer || !answerHtml || !answerContainerRef.current) return;

    renderMathInElement(answerContainerRef.current, {
      delimiters,
      throwOnError: false,
      strict: "ignore"
    });
  }, [answerHtml, showAnswer]);

  const handleRevealAnswer = useCallback(() => {
    setShowAnswer(true);
  }, []);

  const handleResult = useCallback(
    (success: boolean) => {
      const endTime =
        typeof performance !== "undefined" ? performance.now() : Date.now();
      const startTime = startTimeRef.current ?? endTime;
      const durationMs = Math.max(0, Math.round(endTime - startTime));
      const plainQuestion = extractPlainText(questionHtml);

      const session: FlashcardSession = {
        question: plainQuestion,
        timestamp: Date.now(),
        durationMs,
        success
      };

      setSessions(prev => {
        const updated = [session, ...prev].slice(0, MAX_SESSIONS);
        persistSessions(updated);
        return updated;
      });

      setShowAnswer(false);
      generateCard();
    },
    [generateCard, persistSessions, questionHtml]
  );

  const hasAnswer = answerHtml.trim().length > 0;

  return (
    <main id="main-content" className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 p-6">
        <header>
          <h1 className="text-3xl font-bold">Flashcards MathALEA</h1>
          <p className="text-slate-600">
            Entraînez-vous en révélant progressivement les réponses puis en
            suivant vos progrès.
          </p>
        </header>

        {loading && (
          <div className="rounded border border-slate-200 bg-white p-4 shadow-sm">
            <p>Chargement de l'exercice…</p>
          </div>
        )}

        {error && (
          <div className="rounded border border-red-300 bg-red-100 p-4 text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && (
          <section className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-2xl font-semibold">Question</h2>
            <div
              ref={questionContainerRef}
              className="mt-4 space-y-4"
              dangerouslySetInnerHTML={{ __html: questionHtml }}
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleRevealAnswer}
                className="rounded bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
                disabled={showAnswer}
              >
                Afficher la réponse
              </button>
              <button
                type="button"
                onClick={() => generateCard({ showLoader: true })}
                className="rounded border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
              >
                Nouvelle carte
              </button>
            </div>

            {showAnswer && (
              <div className="mt-8 border-t pt-6">
                <h3 className="text-xl font-semibold">Réponse</h3>
                {hasAnswer ? (
                  <div
                    ref={answerContainerRef}
                    className="mt-4 space-y-4"
                    dangerouslySetInnerHTML={{ __html: answerHtml }}
                  />
                ) : (
                  <p className="mt-4 text-slate-500">{FALLBACK_ANSWER}</p>
                )}

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => handleResult(true)}
                    className="rounded bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
                  >
                    J'ai réussi
                  </button>
                  <button
                    type="button"
                    onClick={() => handleResult(false)}
                    className="rounded bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
                  >
                    À retravailler
                  </button>
                </div>
              </div>
            )}
          </section>
        )}

        {sessions.length > 0 && (
          <section className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-2xl font-semibold">Historique récent</h2>
            <ul className="mt-4 space-y-4">
              {sessions.slice(0, 5).map((session, index) => (
                <li
                  key={`${session.timestamp}-${index}`}
                  className="rounded border border-slate-200 p-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={
                        session.success
                          ? "inline-flex items-center gap-2 rounded bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700"
                          : "inline-flex items-center gap-2 rounded bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-700"
                      }
                    >
                      {session.success ? "Réussi" : "À revoir"}
                    </span>
                    <span className="text-xs text-slate-500">
                      {dateFormatter.format(new Date(session.timestamp))}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-700">
                    {truncate(session.question || "Question enregistrée", 140)}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Temps de réponse : {formatDuration(session.durationMs)}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}

export default Flashcards;

