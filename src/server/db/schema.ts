import {
  boolean,
  index,
  pgTableCreator,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM.
 * Use the same database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const pgTable = pgTableCreator((name) => `racjkuat_${name}`);

export const users = pgTable(
  "users",
  {
    id: varchar("userId", { length: 64 }).primaryKey(),
    classification: varchar("classification", { length: 32 }),
    bio: text("bio"),

    profileIsPublic: boolean("published").default(false),

    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow(),
  },
  (user) => ({
    userIdIdx: index("userId_idx").on(user.id),
  }),
);
