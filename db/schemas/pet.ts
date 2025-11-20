import { relations } from "drizzle-orm";
import { integer, pgEnum, pgTable, text } from "drizzle-orm/pg-core";
import { nanoid } from "nanoid";
import { users } from "./auth";

export const petType = ["dog", "cat"] as const;
export const petTypeEnum = pgEnum("pet_type", petType);
const DEFAULT_HP = 50;

// ペットテーブル定義
export const pets = pgTable("pets", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => nanoid(10)),
  name: text("name", {}).notNull(),
  petType: petTypeEnum("pet_type").notNull(),
  hp: integer("hp")
    .notNull()
    .$default(() => DEFAULT_HP),
  // カラム値入れる時の制約指定
  ownerId: text("owner_id", {})
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});

// 巻き添えGet
// ペットのカイヌシはユーザーの中の誰かになる
export const petRelations = relations(pets, ({ one }) => ({
  owner: one(users, {
    fields: [pets.ownerId],
    references: [users.id],
  }),
}));
