import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { pets, petType } from "../db/schemas/pet";

const MIN_HP = 0;
const MAX_HP = 100;
const MIN_NAME_LENGTH = 1;
const MAX_NAME_LENGTH = 50;

// 第2引数への関数で各フィールドのバリデーション追加
export const petFormSchema = createInsertSchema(pets, {
  hp: z
    .number()
    .min(MIN_HP, "HPは0以上の整数を入力してください")
    .max(MAX_HP, "HPは1000以下の整数を入力してください"),
  name: z
    .string()
    // 文字列前後空白削除
    .trim()
    .min(MIN_NAME_LENGTH, "名前は1文字以上で入力して下さい")
    .max(MAX_NAME_LENGTH, "名前は50文字以内で入力してください"),
  petType: z.enum(petType),
}).omit({
  // ルールから除外する場合 omit指定
  ownerId: true,
});
