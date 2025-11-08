import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { nanoid } from "nanoid";
import { getBaseURL } from "@/lib/get-base-url";
import { db } from "../../db";
import * as schema from "../../db/schemas/auth";
import { anonymous } from "better-auth/plugins";

export const auth = betterAuth({
  baseURL: getBaseURL(),
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true, // 複数系テーブル名対応
    schema,
  }),
  advanced: {
    database: {
      generateId: () => nanoid(10), // 生成ID10桁数指定
    },
  },

  plugins: [nextCookies(), anonymous()],
});
