import { TRPCError } from "@trpc/server";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import {
  createPostSchema,
  deletePostSchema,
  getAllPostsByUserSchema,
  getAllPostsSchema,
  getPostByIdSchema,
  updatePostSchema,
} from "~/server/api/validators/post";
import { eq, genId, schema } from "~/server/db";

export const postRouter = createTRPCRouter({
  create: protectedProcedure
    .input(createPostSchema)
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx.session;
      const { title } = input;
      const postId = `post_${genId()}`;

      // TODO: Implement rate-limiting
      // const { success } = await ratelimit.limit(authorId);
      // if (!success) throw new TRPCError({ code: "TOO_MANY_REQUESTS" });

      await ctx.db
        .insert(schema.posts)
        .values({ id: postId, title, authorId: userId });

      return ctx.db.query.posts.findFirst({
        where: eq(schema.posts.id, postId),
      });
    }),

  delete: protectedProcedure
    .input(deletePostSchema)
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx.session;
      const { postId } = input;

      const postByUserId = await ctx.db.query.posts.findFirst({
        where: eq(schema.posts.id, postId) && eq(schema.posts.authorId, userId),
      });

      if (!postByUserId) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }

      await ctx.db.delete(schema.posts).where(eq(schema.posts.id, postId));

      return postId;
    }),

  getAll: publicProcedure
    .input(getAllPostsSchema)
    .mutation(async ({ ctx, input }) => {
      const { limit, page } = input;

      return ctx.db.query.posts.findMany({
        limit: parseInt(limit),
        offset: (parseInt(page) - 1) * parseInt(limit), // Skip should start from 0 for page 1
        orderBy: (posts, { desc }) => [desc(posts.createdAt)],
      });
    }),

  getAllByUser: publicProcedure
    .input(getAllPostsByUserSchema)
    .mutation(async ({ ctx, input }) => {
      const { userId } = input;

      return ctx.db.query.posts.findMany({
        where: eq(schema.posts.authorId, userId),
      });
    }),

  getById: publicProcedure
    .input(getPostByIdSchema)
    .mutation(async ({ ctx, input }) => {
      const { postId } = input;

      return ctx.db.query.posts.findFirst({
        where: eq(schema.posts.id, postId),
      });
    }),

  update: protectedProcedure
    .input(updatePostSchema)
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx.session;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { postId, title, content } = input;

      const postByUserId = await ctx.db.query.posts.findFirst({
        where: eq(schema.posts.id, postId) && eq(schema.posts.authorId, userId),
      });

      if (!postByUserId) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }

      await ctx.db
        .update(schema.posts)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        .set({ title, content })
        .where(eq(schema.posts.id, postId));

      return ctx.db.query.posts.findFirst({
        where: eq(schema.posts.id, postId),
      });
    }),
});
