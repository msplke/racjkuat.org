import { type schema } from "~/server/db";

export type Post = typeof schema.posts.$inferSelect;
