import type z from "zod";
import type { pets } from "../db/schemas/pet";
import type { petFormSchema } from "../zod/pet";

export type Pet = typeof pets.$inferSelect;
export type PetType = Pet["petType"];
export type PetFormData = z.infer<typeof petFormSchema>;
