// scripts/update-mathalea.js
import { execSync } from "child_process";
import path from "path";
import fs from "fs";

const projectRoot = path.resolve(process.cwd());
const submodulePath = path.resolve(projectRoot, "src/mathalea");
const logDir = path.resolve(projectRoot, "logs");
const logPath = path.join(logDir, "update-mathalea.log");

fs.mkdirSync(logDir, { recursive: true });

function run(cmd, cwd = projectRoot) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: "inherit", cwd });
}

try {
  if (!fs.existsSync(submodulePath)) {
    console.error("❌ Le dossier src/mathalea n'existe pas ou n'est pas un sous-module !");
    process.exit(1);
  }

  console.log("🔍 Vérification du sous-module Mathalea...");
  const gitFolder = path.join(submodulePath, ".git");
  if (!fs.existsSync(gitFolder)) {
    console.error("❌ src/mathalea n'est pas un sous-module Git valide !");
    process.exit(1);
  }

  console.log("🔄 Mise à jour du sous-module Mathalea...");
  run("git pull origin main", submodulePath);

    console.log("💾 Enregistrement de la mise à jour dans le dépôt principal...");
  run("git add src/mathalea", projectRoot);

  try {
    // On ne commit que si quelque chose a changé
    const diff = execSync("git diff --cached --name-only", { cwd: projectRoot }).toString().trim();
    if (diff) {
      run('git commit -m "⬆️ Update Mathalea submodule to latest version"', projectRoot);
      console.log("✅ Commit créé pour la mise à jour du sous-module.");
    } else {
      console.log("ℹ️ Aucun changement détecté dans le sous-module, aucun commit créé.");
    }
  } catch (commitErr) {
    console.warn("⚠️ Impossible de committer : ", commitErr.message);
  }


  fs.appendFileSync(logPath, `[${new Date().toISOString()}] Mise à jour réussie.\n`);
  console.log("✅ Mathalea mise à jour avec succès !");
} catch (err) {
  console.error("❌ Erreur pendant la mise à jour :", err.message);
  fs.appendFileSync(logPath, `[${new Date().toISOString()}] ❌ ${err.message}\n`);
  process.exit(1);
}
