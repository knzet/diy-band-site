import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const blogRouter = createTRPCRouter({
  unPublish: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.prisma.blogPost.update({
        where: { id: input.id },
        data: { published: false },
      });
      return post;
    }),
  edit: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string(),
        content: z.string(),
        published: z.boolean(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.prisma.blogPost.update({
        where: { id: input.id },
        data: {
          title: input.title,
          content: input.content,
          published: input.published,
        },
      });
      return post;
    }),
  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
        published: z.boolean(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.blogPost.create({
        data: {
          title: input.title,
          content: input.content,
          date: new Date(),
          published: input.published,
        },
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.blogPost.findMany({
      where: { published: true },
    });
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
