import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const mathaleaPath = path.resolve("../mathalea");
const backupPath = path.resolve("../mathalea_backup");
const logFile = path.resolve("./logs/update-mathalea.log");

function log(msg) {
  console.log(msg);
  fs.appendFileSync(logFile, msg + "\n");
}

function listFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(listFiles(filePath));
    } else if (file.endsWith(".ts")) {
      results.push(filePath.replace(mathaleaPath + "/", ""));
    }
  });
  return results.sort();
}

console.log("📦 Mise à jour du dépôt MathALEA...");
fs.mkdirSync(path.dirname(logFile), { recursive: true });
fs.writeFileSync(logFile, `=== ${new Date().toISOString()} ===\n`);

try {
  // Sauvegarde
  if (fs.existsSync(backupPath)) fs.rmSync(backupPath, { recursive: true, force: true });
  fs.cpSync(mathaleaPath, backupPath, { recursive: true });
  log(`🗂️  Sauvegarde créée dans ${backupPath}`);

  // Liste avant mise à jour
  const before = listFiles(path.join(mathaleaPath, "src/exercices"));

  // Mise à jour git
  execSync(`cd ${mathaleaPath} && git fetch --all && git reset --hard origin/main`, { stdio: "inherit" });

  // Liste après mise à jour
  const after = listFiles(path.join(mathaleaPath, "src/exercices"));

  // Comparaison
  const added = after.filter(f => !before.includes(f));
  const removed = before.filter(f => !after.includes(f));
  const common = after.filter(f => before.includes(f));
  const modified = common.filter(f => {
    const oldF = path.join(backupPath, f);
    const newF = path.join(mathaleaPath, f);
    if (fs.existsSync(oldF) && fs.existsSync(newF)) {
      return fs.readFileSync(oldF, "utf-8") !== fs.readFileSync(newF, "utf-8");
    }
    return false;
  });

  log(`\n✅ MathALEA mise à jour !\n`);
  log(`🟩 Nouveaux fichiers (${added.length}):`);
  added.forEach(f => log("  + " + f));

  log(`\n🟥 Fichiers supprimés (${removed.length}):`);
  removed.forEach(f => log("  - " + f));

  log(`\n🟨 Fichiers modifiés (${modified.length}):`);
  modified.forEach(f => log("  * " + f));

  console.log("\n📘 Résumé enregistré dans :", logFile);
  console.log("✨ Mise à jour terminée !");
} catch (err) {
  console.error("❌ Erreur lors de la mise à jour :", err.message);
  log("❌ Erreur : " + err.message);
}
