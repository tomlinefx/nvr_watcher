import "server-only";

import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SECRET_KEY;

if (!(url && key)) {
  throw new Error("Supabase環境変数が設定されていません");
}

export const supabase = createClient(url, key);
