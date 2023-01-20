const isArray = <T extends Array<unknown>>(data: unknown): data is T =>
  Array.isArray(data);

export default function classNames(classnames: string | string[]): string {
  if (typeof classnames === "string") return classnames.trim();

  if (isArray<string[]>(classnames)) return classnames.join(" ").trim();

  throw new Error("param must be a string or an array of strings");
}
