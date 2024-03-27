import { z } from "zod";

export const createPostSchema = z.object({
  title: z
    .string()
    .min(4, "Title must be at least 4 characters")
    .max(64, "Title cannot exceed 64 characters"),
  content: z.any().optional(), // TODO: Type this properly from editorjs block types?
});

export const deletePostSchema = z.object({
  postId: z
    .string()
    .min(16, "Post ID must be at least 16 characters")
    .max(32, "Post ID cannot exceed 32 characters"),
});

export const getAllPostsByUserSchema = z.object({
  userId: z
    .string()
    .min(32, "User ID must be at least 32 characters")
    .max(64, "User ID cannot exceed 64 characters"),
});

export const getPostByIdSchema = z.object({
  postId: z
    .string()
    .min(16, "Post ID must be at least 16 characters")
    .max(32, "Post ID cannot exceed 32 characters"),
});

export const updatePostSchema = z.object({
  postId: z
    .string()
    .min(16, "Post ID must be at least 16 characters")
    .max(32, "Post ID cannot exceed 32 characters"),
  title: z
    .string()
    .min(4, "Title must be at least 4 characters")
    .max(64, "Title cannot exceed 64 characters"),
  content: z.any().optional(), // TODO: Type this properly from editorjs block types?
});
