// scripts/release.js
import { execSync } from "child_process";

function run(cmd, msg) {
  console.log(`\n🔹 ${msg}`);
  execSync(cmd, { stdio: "inherit" });
}

try {
  console.log("🚀 Lancement du processus de release complète...\n");

  // 1️⃣ Met à jour MathALEA
  run("npm run update:mathalea", "Mise à jour du dépôt MathALEA");

  // 2️⃣ Sauvegarde du travail en stash
  run('git add .', "Ajout des fichiers modifiés");
  run('git stash push -m "Préparation release auto"', "Sauvegarde temporaire du travail");

  // 3️⃣ Passage sur codex-dev
  run("git checkout codex-dev", "Passage sur la branche codex-dev");
  run("git pull origin codex-dev", "Mise à jour de codex-dev");
  run("git stash pop", "Restauration du stash dans codex-dev");

  // 4️⃣ Commit et push sur codex-dev
  run('git add .', "Ajout des fichiers à commiter");
  run('git commit -m "chore: release automatique - update MathALEA & build config" || echo "Aucun changement à valider"', "Commit sur codex-dev");
  run("git push origin codex-dev", "Push vers origin/codex-dev");

  // 5️⃣ Fusion dans main
  run("git checkout main", "Passage sur la branche main");
  run("git pull origin main", "Mise à jour de main");
  run("git merge codex-dev --no-edit", "Fusion de codex-dev dans main");
  run("git push origin main", "Push vers origin/main");

  // 6️⃣ Build pour GitHub Pages
  run("npm run build", "Build du projet pour GitHub Pages");

  // 7️⃣ Déploiement sur gh-pages
  run("git subtree push --prefix dist origin gh-pages", "Déploiement sur GitHub Pages");

  console.log("\n✅ Release complète terminée avec succès !");
  console.log("🌐 Le site sera en ligne sur : https://rodeofly.github.io/kopmaths974/");
} catch (err) {
  console.error("\n❌ Erreur pendant le processus :", err.message);
}
