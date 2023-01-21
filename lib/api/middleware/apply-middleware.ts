import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export type Middleware = (req: NextApiRequest, res: NextApiResponse) => void;

export const applyMiddleware =
  (middleware: Middleware): NextApiHandler =>
  (req, res) =>
    middleware(req, res);
