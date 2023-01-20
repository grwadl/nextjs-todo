import type { Todo } from "@prisma/client";

class TodoService {
  deleteToDo(id: number): Promise<Todo> {
    return fetch("/api/todos/" + id, { method: "POST" }).then((res) =>
      res.json()
    );
  }
}

export const todoService = new TodoService();
