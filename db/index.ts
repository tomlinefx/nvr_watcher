import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as authSchema from "./schemas/auth"; // *まとめて扱う

config({ path: ".env.local" });

const url = process.env.DATABASE_URL;
if (!url) {
  throw new Error("Supabase環境変数が設定されていません");
}

const client = postgres(url);
export const db = drizzle(client, {
  schema: { ...authSchema, prepare: false },  // ...ばらして渡す
});
