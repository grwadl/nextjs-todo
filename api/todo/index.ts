import type { Todo } from "@prisma/client";
import { TodoDTO } from "./types";

class TodoService {
  deleteToDo(id: number): Promise<Todo> {
    return fetch("/api/todo/" + id, { method: "DELETE" }).then((res) =>
      res.json()
    );
  }

  addToDo(data: TodoDTO): Promise<Todo> {
    return fetch("/api/todo/", {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }
}

export const todoService = new TodoService();
