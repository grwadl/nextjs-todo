export interface Repository<T> {
  get(opt?: Record<string, unknown>): Promise<T[]>;

  getOne(opt: Record<string, unknown>): Promise<T>;

  add(data: unknown): Promise<T>;

  delete(opt: Record<string, unknown>): Promise<T>;
}
