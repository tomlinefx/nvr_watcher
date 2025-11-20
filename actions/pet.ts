"use server";

import { and, eq } from "drizzle-orm";
import { verifySession } from "@/lib/session";
import { db } from "../db";
import { pets } from "../db/schemas/pet";
import type { PetFormData } from "../types/pet";
import { petFormSchema } from "../zod/pet";

export async function createPet(formData: PetFormData) {
  // Form入力内容再チェック
  const data = petFormSchema.parse(formData);
  // ログインチェック
  const session = await verifySession();
  const ownerId = session.user.id;
  // 第2引数 omit/チェックしないもの
  await db.insert(pets).values({ ...data, ownerId });
}

// 対象ペット特定するためのidを引数入力追加
export async function updatePet(id: string, formData: PetFormData) {
  const data = petFormSchema.parse(formData);
  const session = await verifySession();
  const ownerId = session.user.id;
  await db
    .update(pets)
    .set({ ...data, ownerId })
    // ペットID一致？　かつ　対象ペットがあなたのペット？→カイヌシ保証
    .where(and(eq(pets.id, id), eq(pets.ownerId, ownerId)));
}

export async function deletePet(id: string) {
  const session = await verifySession();
  const ownerId = session.user.id;
  await db.delete(pets).where(and(eq(pets.id, id), eq(pets.ownerId, ownerId)));
}
