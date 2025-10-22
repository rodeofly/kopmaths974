# KopMaths React Boilerplate

Ce dossier contient un socle autonome pour expérimenter une version React légère de l'application.
L'objectif est d'y intégrer progressivement les composants et la mécanique pédagogique existante,
sans impacter le code Vite/TypeScript actuel.

## Structure

- `index.html` : point d'entrée statique chargeant React via CDN.
- `styles.css` : feuille de styles autonome pour tester rapidement le rendu visuel.
- `main.js` : initialisation de React 18 avec `createRoot`.
- `src/App.js` : composant racine contenant un aperçu de zones à alimenter.

## Lancer le prototype

Ce prototype fonctionne comme une page statique. Vous pouvez utiliser n'importe quel
serveur de fichiers statiques. Exemple avec `npx serve` :

```bash
npx serve boilerplate
```

Puis ouvrez l'URL indiquée (généralement <http://localhost:3000>) pour vérifier le rendu
HTML/CSS/JS.
