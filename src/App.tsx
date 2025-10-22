import { useEffect, useRef, useState } from "react";
import renderMathInElement from "katex/contrib/auto-render";
import "mathlive";

import translateLatexToHtml from "./utils/latexToHtml";

type ExerciceInstance = {
  applyNewSeed: () => void;
  nouvelleVersion: () => void;
  contenu?: string;
  listeQuestions?: string[];
};

type ExerciceModule = {
  default: new () => ExerciceInstance;
};

const delimiters = [
  { left: "$$", right: "$$", display: true },
  { left: "$", right: "$", display: false },
  { left: "\\(", right: "\\)", display: false },
  { left: "\\[", right: "\\]", display: true }
];

function App() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [contenu, setContenu] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadExercise() {
      try {
        const module: ExerciceModule = await import(
          "@mathalea/exercices/6e/6N5-3"
        );
        if (typeof window !== "undefined") {
          window.MathALEA = {
            ...(window.MathALEA ?? {}),
            eN5_3: module
          };
        }

        const ExerciseClass = module.default;
        const exercice = new ExerciseClass();
        exercice.applyNewSeed();
        exercice.nouvelleVersion();
        const html =
          exercice.contenu ?? exercice.listeQuestions?.join("\n") ?? "";
        if (mounted) {
          setContenu(translateLatexToHtml(html));
        }
      } catch (err) {
        console.error("Erreur lors du chargement de l'exercice", err);
        if (mounted) {
          setError(err instanceof Error ? err.message : String(err));
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadExercise();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!contenu || !containerRef.current) return;

    renderMathInElement(containerRef.current, {
      delimiters,
      throwOnError: false,
      strict: "ignore"
    });
  }, [contenu]);

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 p-6">
        <header>
          <h1 className="text-3xl font-bold">Kop Maths 974</h1>
          <p className="text-slate-600">
            Aperçu dynamique des exercices générés par MathALEA.
          </p>
        </header>
        {loading && <p>Chargement de l'exercice…</p>}
        {error && (
          <div className="rounded border border-red-300 bg-red-100 p-4 text-red-700">
            {error}
          </div>
        )}
        {!loading && !error && (
          <div
            ref={containerRef}
            className="rounded-lg bg-white p-6 shadow"
            dangerouslySetInnerHTML={{ __html: contenu }}
          />
        )}
      </div>
    </main>
  );
}

export default App;
