// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations } from "drizzle-orm";
import { boolean, index, json, text, varchar } from "drizzle-orm/pg-core";

import { createdAt, pgTable, updatedAt } from "./_table";

export const users = pgTable("users", {
  id: varchar("userId", { length: 64 }).primaryKey(),
  classification: varchar("classification", { length: 32 }),
  bio: text("bio"),

  createdAt,
});

export const userRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}));

export const posts = pgTable(
  "posts",
  {
    id: varchar("id", { length: 32 }).primaryKey(), // prefix_ + nanoid(16)
    title: varchar("title", { length: 32 }).notNull(),
    content: json("content"),

    authorId: varchar("authorId", { length: 64 }).notNull(),

    published: boolean("published").default(false),
    createdAt,
    updatedAt,
  },
  (post) => ({
    authorIdIdx: index("authorId_idx").on(post.authorId),
  }),
);

export const postRelations = relations(posts, ({ one }) => ({
  author: one(users, { fields: [posts.authorId], references: [users.id] }),
}));
