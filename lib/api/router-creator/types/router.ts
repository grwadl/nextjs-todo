import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { Middleware } from "../../middleware/apply-middleware";
import { AllowedMethods } from "./methods";

type NextErrorHandler = (
  req: NextApiRequest,
  res: NextApiResponse,
  e: unknown
) => void;

type CreateRouterCreatorArgs<Context> = {
  globalMiddlewares: Middleware[];
  unimplementedHandler: NextApiHandler;
  handleError: NextErrorHandler;
  createContext: () => Context;
};

type NextApiHandlerWithContext<Context> = (
  req: NextApiRequest,
  res: NextApiResponse,
  ctx: Context
) => void;

type RouterCreatorArgs<T> = {
  [method in AllowedMethods]?: NextApiHandlerWithContext<T>;
} & { middlewares?: Middleware[] };

type RouterCreator<Context> = (
  args: RouterCreatorArgs<Context>
) => NextApiHandlerWithContext<Context>;

export type {
  CreateRouterCreatorArgs,
  NextErrorHandler,
  RouterCreatorArgs,
  RouterCreator,
};
