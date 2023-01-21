import { createApiRoute } from "@/lib";
import { HttpError } from "@/lib/http-error";

export default createApiRoute({
  delete: async (req, res, ctx) => {
    const { todoRepo } = ctx;
    const {
      query: { id },
    } = req;

    if (!id) throw new HttpError(400, "todo not found");
    const deleted = await todoRepo.delete({ where: { id: +id } });
    return res.status(200).json(deleted);
  },
});
