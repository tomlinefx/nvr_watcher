import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { nanoid } from "nanoid";
import { getBaseURL } from "@/lib/get-base-url";
import { db } from "../../db";
import * as schema from "../../db/schemas/auth";

export const auth = betterAuth({
  baseURL: getBaseURL(),
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
    schema,
  }),
  advanced: {
    database: {
      generateId: () => nanoid(10),
    },
  },

  plugins: [nextCookies()],
});
