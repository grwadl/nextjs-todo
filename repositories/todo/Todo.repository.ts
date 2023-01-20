import { Prisma, PrismaClient, Todo } from "@prisma/client";
import { Repository } from "../types";

export class TodoRepository implements Repository<Todo> {
  constructor(private dbService: PrismaClient) {}

  async get(opt?: Prisma.TodoFindManyArgs): Promise<Todo[]> {
    return this.dbService.todo.findMany(opt);
  }

  async getOne(opt: Prisma.TodoFindUniqueOrThrowArgs): Promise<Todo> {
    return this.dbService.todo.findUniqueOrThrow(opt);
  }

  async add(opt: Prisma.TodoCreateArgs): Promise<Todo> {
    return this.dbService.todo.create(opt);
  }

  async delete(opt: Prisma.TodoDeleteArgs): Promise<Todo> {
    return this.dbService.todo.delete(opt);
  }
}
