import "server-only";
import { eq } from "drizzle-orm";
import { db } from "../db";
import { pets } from "../db/schemas/pet";

// drizzle-ormはdataフォルダへ追加

export const getPets = async () => db.select().from(pets);

// drizzel-ormはfirst()非対応のためエラーになる
//export const getPet = async (id: string) => db.select().from(pets).where(eq(pets.id, id)).first();
/* 下記ならOK
export const getPet = async (id: string) => {
  const result = await db.select().from(pets).where(eq(pets.id, id));
  return result[0];
};
*/

// query使った書き方(こっちの方がメソッド多い)
//export const getPets = async () => db.query.pets.findMany();

// 指定カラム限定で出力したいとき
/*
export const getPets = async () =>
  db.query.pets.findMany({
    columns: {
      id: true,
      name: true,
    },
  });
*/

export const getPet = async (id: string) =>
  db.query.pets.findFirst({
    where: eq(pets.id, id),
  });
