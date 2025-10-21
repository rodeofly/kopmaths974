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
      // Unbalanced braces: append the rest of the string and stop processing.
      result += input.slice(start);
      break;
    }
  }

  return result;
}

export function translateLatexToHtml(value: string): string {
  if (!value) {
    return value;
  }

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
      result += "<ol>";
      listStack.push({ liOpen: false });
    } else if (token === "\\end{enumerate}") {
      const last = listStack.pop();
      if (last?.liOpen) {
        result += "</li>";
      }
      result += "</ol>";
    } else if (token === "\\item") {
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
      result += `<div class='cols-${suffix}'>`;
    } else if (token === "\\end{multicols}") {
      result += "</div>";
    } else if (token.startsWith("\\begin{spacing}")) {
      // Intentionally removed from the output
    } else if (token === "\\end{spacing}") {
      // Intentionally removed from the output
    } else if (token === "\\\\") {
      result += "<br>";
    }

    lastIndex = tokenRegex.lastIndex;
  }

  result += value.slice(lastIndex);

  const finalResult = styledCommands.reduce((acc, { command, tag }) => {
    return applySimpleStyle(acc, command, tag);
  }, result);

  return finalResult;
}

export default translateLatexToHtml;
