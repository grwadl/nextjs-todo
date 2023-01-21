import { Todo } from "@prisma/client";

export type TodoDTO = Omit<Todo, "createdAt" | "id">;
