import { Prisma } from "@/prisma";
import { TodoRepository } from "./todo/Todo.repository";

export const todoRepository = new TodoRepository(Prisma);
