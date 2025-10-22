const DEBUG_PREFIX = "[KopMaths][LaTeX]";

function latexDebug(...args: unknown[]): void {
  if (typeof console !== "undefined" && typeof console.debug === "function") {
    console.debug(DEBUG_PREFIX, ...args);
  }
}

function latexInfo(...args: unknown[]): void {
  if (typeof console !== "undefined" && typeof console.info === "function") {
    console.info(DEBUG_PREFIX, ...args);
  }
}

function latexWarn(...args: unknown[]): void {
  if (typeof console !== "undefined" && typeof console.warn === "function") {
    console.warn(DEBUG_PREFIX, ...args);
  }
}

const styledCommands = [
  { command: "textbf", tag: "strong" },
  { command: "textit", tag: "em" }
] as const;

function applySimpleStyle(input: string, command: string, tag: string): string {
  const token = `\\${command}{`;
  let result = "";
  let index = 0;

  while (index < input.length) {
    const start = input.indexOf(token, index);
    if (start === -1) {
      result += input.slice(index);
      break;
    }

    result += input.slice(index, start);

    let cursor = start + token.length;
    let depth = 1;

    while (cursor < input.length && depth > 0) {
      const char = input[cursor];
      if (char === "{") {
        depth += 1;
      } else if (char === "}") {
        depth -= 1;
      }
      cursor += 1;
    }

    if (depth === 0) {
      const inner = input.slice(start + token.length, cursor - 1);
      const processedInner = applySimpleStyle(inner, command, tag);
      result += `<${tag}>${processedInner}</${tag}>`;
      index = cursor;
    } else {
      latexWarn("Accolades déséquilibrées détectées lors de l'application du style", {
        command,
        extrait: input.slice(start, Math.min(input.length, start + 80))
      });
      result += input.slice(start);
      break;
    }
  }

  return result;
}

export function translateLatexToHtml(value: string): string {
  if (!value) {
    latexDebug("Conversion LaTeX ignorée : valeur vide");
    return value;
  }

  const apercuInitial = value.length > 120 ? `${value.slice(0, 117)}…` : value;
  latexInfo("Conversion LaTeX → HTML démarrée", { longueur: value.length, apercu: apercuInitial });

  const tokenRegex =
    /\\begin\{enumerate\}|\\end\{enumerate\}|\\item|\\begin\{multicols\}\{([^}]*)\}|\\end\{multicols\}|\\begin\{spacing\}\{[^}]*\}|\\end\{spacing\}|\\\\/g;

  let result = "";
  let lastIndex = 0;
  const listStack: { liOpen: boolean }[] = [];

  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(value)) !== null) {
    const [token] = match;
    const precedingText = value.slice(lastIndex, match.index);
    result += precedingText;

    const currentList = listStack[listStack.length - 1];

    if (token === "\\begin{enumerate}") {
      latexDebug("Début d'une liste numérotée détecté");
      result += "<ol>";
      listStack.push({ liOpen: false });
    } else if (token === "\\end{enumerate}") {
      const last = listStack.pop();
      if (last?.liOpen) {
        result += "</li>";
      }
      result += "</ol>";
      latexDebug("Fin de liste numérotée");
    } else if (token === "\\item") {
      latexDebug("Ajout d'un item de liste", { dansListe: Boolean(currentList) });
      if (currentList) {
        if (currentList.liOpen) {
          result += "</li>";
        }
        result += "<li>";
        currentList.liOpen = true;
      } else {
        result += "<li>";
      }
    } else if (token.startsWith("\\begin{multicols}")) {
      const columnCount = (match[1] ?? "").trim();
      const sanitizedCount = columnCount.replace(/[^0-9a-zA-Z_-]/g, "");
      const suffix = sanitizedCount || columnCount || "auto";
      latexDebug("Début d'un environnement multicolonnes", {
        columnCount,
        suffix
      });
      result += `<div class='cols-${suffix}'>`;
    } else if (token === "\\end{multicols}") {
      latexDebug("Fin de l'environnement multicolonnes");
      result += "</div>";
    } else if (token.startsWith("\\begin{spacing}")) {
      latexDebug("Bloc spacing détecté (ignoré)");
      // Intentionally removed from the output
    } else if (token === "\\end{spacing}") {
      latexDebug("Fin de bloc spacing (ignoré)");
      // Intentionally removed from the output
    } else if (token === "\\\\") {
      latexDebug("Insertion d'un saut de ligne HTML");
      result += "<br>";
    }

    lastIndex = tokenRegex.lastIndex;
  }

  result += value.slice(lastIndex);

  const finalResult = styledCommands.reduce((acc, { command, tag }) => {
    return applySimpleStyle(acc, command, tag);
  }, result);

  const apercuFinal = finalResult.length > 120 ? `${finalResult.slice(0, 117)}…` : finalResult;
  latexInfo("Conversion LaTeX → HTML terminée", { longueur: finalResult.length, apercu: apercuFinal });

  return finalResult;
}

export default translateLatexToHtml;
