import { TodoDTO } from "@/api/todo/types";
import { createApiRoute } from "@/lib";
import { HttpError } from "@/lib/http-error";

export default createApiRoute({
  post: async (req, res, ctx) => {
    const { todoRepo } = ctx;

    const { priority, text } = req.body as TodoDTO;

    if (!priority || !text) throw new HttpError(400, "invalid data format");

    const todo = await todoRepo.add({ data: { priority, text } });
    return res.status(200).json(todo);
  },
});
