import { AllowedMethods } from "./types/methods";

export const isAllowedRoute = (route: string): route is AllowedMethods =>
  route === "get" || route === "post" || route === "put" || route === "delete";
