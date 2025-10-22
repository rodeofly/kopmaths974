import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const features = [
  "Interface ultra-rapide grâce à Vite et React 18",
  "Tailwind CSS 3 pour un design réactif sans effort",
  "Structure prête pour accueillir vos outils PokMaths"
];

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-12 px-6 py-16 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            <a
              className="rounded-xl bg-slate-900/80 p-4 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:bg-slate-900 hover:ring-brand-400"
              href="https://vitejs.dev"
              target="_blank"
              rel="noreferrer"
            >
              <img src={viteLogo} alt="Vite logo" className="h-16 w-16" />
            </a>
            <a
              className="rounded-xl bg-slate-900/80 p-4 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:bg-slate-900 hover:ring-brand-400"
              href="https://react.dev"
              target="_blank"
              rel="noreferrer"
            >
              <img src={reactLogo} alt="React logo" className="h-16 w-16 animate-spin-slow" />
            </a>
          </div>
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Bienvenue sur <span className="text-brand-400">pokmaths974 v2</span>
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            Cette base moderne combine Vite, React et Tailwind CSS pour accélérer le développement de la nouvelle version de
            PokMaths974.
          </p>
        </div>

        <ul className="grid w-full gap-6 text-left sm:grid-cols-3">
          {features.map((feature) => (
            <li
              key={feature}
              className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-800 transition hover:-translate-y-1 hover:ring-brand-400"
            >
              <h2 className="text-xl font-semibold text-brand-300">Atout</h2>
              <p className="mt-3 text-sm text-slate-300">{feature}</p>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-3 text-sm text-slate-400">
          <span className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 uppercase tracking-[0.25em]">
            Stack moderne
          </span>
          <p>
            Configurez vos composants et utilitaires Tailwind dans <code>tailwind.config.cjs</code> et commencez à coder dans{" "}
            <code>src/App.tsx</code>.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
