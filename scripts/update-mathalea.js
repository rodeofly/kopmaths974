import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const projectRoot = path.resolve(process.cwd());
const externalRepo = path.resolve(projectRoot, "../mathalea");
const localMathalea = path.resolve(projectRoot, "src/mathalea");
const backupDir = path.resolve(projectRoot, "backups/mathalea_" + Date.now());

// Fonction d’exécution simple
function run(cmd, cwd = projectRoot) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: "inherit", cwd });
}

// Étape 1 : Cloner ou mettre à jour le dépôt officiel
try {
  if (!fs.existsSync(externalRepo)) {
    console.log("📥 Clonage initial du dépôt MathALEA...");
    run("git clone https://forge.apps.education.fr/coopmaths/mathalea.git ../mathalea");
  } else {
    console.log("🔄 Mise à jour du dépôt MathALEA existant...");
    run("git fetch --all", externalRepo);
    run("git reset --hard origin/main", externalRepo);
  }
} catch (err) {
  console.error("❌ Erreur pendant la mise à jour du dépôt :", err);
  process.exit(1);
}

// Étape 2 : Sauvegarde locale avant copie
if (fs.existsSync(localMathalea)) {
  fs.mkdirSync(path.dirname(backupDir), { recursive: true });
  console.log(`🗂️  Sauvegarde de l’ancien src/mathalea vers : ${backupDir}`);
  fs.renameSync(localMathalea, backupDir);
}

// Étape 3 : Copier les fichiers nécessaires
console.log("📦 Copie des fichiers de ../mathalea vers src/mathalea...");
fs.mkdirSync(localMathalea, { recursive: true });
run(`cp -r ${externalRepo}/src/* ${localMathalea}/`);

// Étape 4 : Journalisation
const logDir = path.resolve(projectRoot, "logs");
fs.mkdirSync(logDir, { recursive: true });
const logPath = path.join(logDir, "update-mathalea.log");
fs.writeFileSync(logPath, `[${new Date().toISOString()}] Mise à jour réussie.\n`);

console.log("✅ MathALEA mis à jour avec succès !");
