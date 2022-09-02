export function serialize(obj: JSX.Element): string {
  if (Array.isArray(obj)) {
    return (obj as any[])
      .filter((x) => x)
      .map((child: any) => serialize(child))
      .join("");
  }

  if (!obj || typeof obj === "boolean") {
    return "";
  }

  if (typeof obj === "string" || typeof obj === "number") {
    return escape(specialElementChars, String(obj));
  }

  const {
    elem,
    props: { children, ...rest },
  } = obj;

  const text = serialize(children);

  if (elem === undefined) {
    return text;
  }

  const opening =
    "<" +
    elem +
    Object.entries(rest)
      .filter(([, v]) => v !== undefined)
      .map(([k, v]) => {
        const vs = String(v);

        const q = vs.includes('"') && !vs.includes("'") ? "'" : '"';

        return ` ${k.replace(
          /[A-Z]/g,
          (letter) => `-${letter.toLowerCase()}`
        )}=${q}${escape(specialAttChars[q], vs)}${q}`;
      })
      .join("");

  return text === ""
    ? opening + "/>"
    : opening + ">" + text + "</" + elem + ">";
}

const specialAttChars: Record<string, Record<string, string>> = {
  '"': {
    "<": "&lt;",
    '"': "&quot;",
    "&": "&amp;",
  },
  "'": {
    "<": "&lt;",
    "&": "&amp;",
  },
};

const specialElementChars: Record<string, string> = {
  ">": "&gt;",
  "<": "&lt;",
  "&": "&amp;",
};

function escape(specialChars: Record<string, string>, string: string) {
  return string.replace(
    new RegExp("([&\"<>'])", "g"),
    (_str, item) => specialChars[item] ?? item
  );
}
