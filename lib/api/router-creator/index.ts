import { isAllowedRoute } from "./is-allowed";
import { CreateRouterCreatorArgs, RouterCreator } from "./types/router";

export const createRouterCreator =
  <T>(args: CreateRouterCreatorArgs<T>): RouterCreator<T> =>
  (options) =>
  async (req, res, ctx) => {
    try {
      const middlewares = [
        ...(args?.globalMiddlewares ?? []),
        ...(options?.middlewares ?? []),
      ];

      for (const mw of middlewares) await mw(req, res);

      const context = args.createContext();
      const method = req.method?.toLowerCase() ?? "";
      const isAllowed = isAllowedRoute(method);

      const handler = isAllowed
        ? options[method] ?? args.unimplementedHandler
        : args.unimplementedHandler;

      await handler(req, res, context);
    } catch (e) {
      args.handleError(req, res, e);
    }
  };
