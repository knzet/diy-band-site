import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
  unpriveligedProcedure,
} from "~/server/api/trpc";

export const rsvpRouter = createTRPCRouter({
  approveById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.prisma.rsvp.update({
        where: { id: input.id },
        data: { approved: true, rejected: false },
      });
      return post;
    }),
  revokeById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.prisma.rsvp.update({
        where: { id: input.id },
        data: { approved: false },
      });
      return post;
    }),
  rejectById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.prisma.rsvp.update({
        where: { id: input.id },
        data: { approved: false, rejected: true },
      });
      return post;
    }),

  request: unpriveligedProcedure
    .input(
      z.object({
        guests: z.number(),
      })
    )
    .mutation(({ ctx, input }) => {
      const { id, name, email } = ctx?.session?.user;
      return ctx.prisma.rsvp.create({
        data: {
          name: name as string,
          email: email as string,
          userId: id,
          requested_date: new Date(),
          approved: false,
          coverRequired: true,
          rejected: false,
          guests: input.guests,
          message: "",
        },
      });
    }),
  getMine: unpriveligedProcedure.query(({ ctx }) => {
    const { id } = ctx?.session?.user;
    return ctx.prisma.rsvp.findMany({
      where: { userId: id },
    });
  }),
  getAllRequested: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.rsvp.findMany({
      where: { approved: false },
    });
  }),
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.rsvp.findMany({});
  }),
  // get one needs an input of post id
  getAllApproved: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const post = await ctx.prisma.blogPost.findUnique({
        where: { id: input?.id },
      });
      return post;
    }),
  edit: protectedProcedure
    .input(z.object({
      id: z.string(),
      coverRequired: z.boolean().optional(),
      guests: z.number().optional(),
      message: z.string().optional(),
    }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.rsvp.update({
        where: { id: input?.id },
        data: {
          coverRequired: input.coverRequired,
          guests: input.guests,
          message: input.message
        }
      });
    }),
});
