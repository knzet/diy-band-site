import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const blogRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.blogPost.findMany();
  }),
  newPost: publicProcedure.query(async ({ ctx }) => {
    const post = await ctx.prisma.blogPost.create({
      data: {
        title: "title",
        content: "content",
        date: new Date(),
      },
    });
    return post;
  }),
  // get one needs an input of post id
  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const post = await ctx.prisma.blogPost.findUnique({
        where: { id: input?.id },
      });
      return post;
    }),
});
