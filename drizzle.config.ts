import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env" });

const url = process.env.DATABASE_URL;

if (!url) {
  throw new Error("DATABASE_URL is not defined");
}

export default defineConfig({
  schema: "./db/schemas/*.ts",
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url,
  },
});
