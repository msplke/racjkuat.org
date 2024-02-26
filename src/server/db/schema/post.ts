// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { index, serial, varchar } from "drizzle-orm/pg-core";

import { createdAt, pgTable, updatedAt } from "./_table";

export const posts = pgTable(
  "posts",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),

    createdAt,
    updatedAt,
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  }),
);
