import { todoRepository } from "@/repositories";
import { TodoRepository } from "@/repositories/todo/Todo.repository";
import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { applyMiddleware, Middleware } from "./api/middleware/apply-middleware";
import { createRouterCreator } from "./api/router-creator";
import { HttpError } from "./http-error";
import { isDirectlyInherit } from "./is-directrly-inherit";

const cors = applyMiddleware(
  (req, res) =>
    NextCors(req, res, {
      origin: "*",
    }) as unknown as Middleware
);

type Context = {
  todoRepo: TodoRepository;
};

const handleError = (__: NextApiRequest, res: NextApiResponse, e: unknown) => {
  if (typeof e === "string") return res.status(400).json({ message: e });

  if (isDirectlyInherit<HttpError>(e, HttpError))
    return res.status(e.statusCode).json({ message: e.message });

  if (e instanceof Error) return res.status(500).json({ message: e.message });
};

export const createApiRoute = createRouterCreator<Context>({
  createContext: () => ({ todoRepo: todoRepository }),
  globalMiddlewares: [],
  handleError,
  unimplementedHandler: (_, res) =>
    res.status(405).json({ message: "method is not allowed" }),
});
