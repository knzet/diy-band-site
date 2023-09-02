import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const configurationRouter = createTRPCRouter({
  getOne: publicProcedure
    .input(
      z.object({
        key: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.configuration.findUnique({
        where: {
          key: input.key,
        },
      });
    }),
});
