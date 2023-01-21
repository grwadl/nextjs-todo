type Class<T> = new (...args: any[]) => T;

export const isDirectlyInherit = <T>(e: unknown, p: Class<T>): e is T =>
  Object.getPrototypeOf(e) === p.prototype;
