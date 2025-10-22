import React from "https://esm.sh/react@18.2.0";

const cards = [
  {
    title: "Structure réactive",
    description:
      "Point d'entrée minimal avec React 18 et rendu côté client via CDN. Idéal pour brancher progressivement les composants métier existants.",
    status: "Prêt à connecter",
  },
  {
    title: "Styles autonomes",
    description:
      "Feuille de styles locale (CSS pur) pour tester rapidement le rendu des composants sans dépendances supplémentaires.",
    status: "Vanilla CSS",
  },
  {
    title: "Mécanique KopMaths",
    description:
      "Section dédiée à l'intégration future de la logique pédagogique actuelle. Remplace ce bloc par la mécanique réelle lorsque prête.",
    status: "À brancher",
  },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function App() {
  return (
    <div className="app-shell">
      <header>
        <p className="pill">Prototype</p>
        <h1>KopMaths – Base React autonome</h1>
        <p>
          Ce boilerplate isole un socle React léger pour expérimenter l'UI avant
          d'y greffer la mécanique de l'application principale. Tout est en
          HTML, CSS et JS standards.
        </p>
      </header>

      <main className="main-grid">
        {cards.map((card) => (
          <article key={card.title} className="card">
            <h2 className="card-title">{card.title}</h2>
            <p className="card-content">{card.description}</p>
            <div className="card-footer">
              <span className="pill">{card.status}</span>
              <button className="link" type="button">
                Voir plus
                <ArrowIcon />
              </button>
            </div>
          </article>
        ))}
      </main>

      <footer>
        <span>2024 · KopMaths React Boilerplate</span>
        <span>Prêt pour une intégration progressive.</span>
      </footer>
    </div>
  );
}
