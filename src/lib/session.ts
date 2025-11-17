import "server-only";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./auth";

export const verifySession = async () => {
  // auth.api.getSessionはガチ検証
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // セッションがなければログインページへ飛ばす！
  // 変なユーザーはここで弾く！
  if (!session) {
    redirect("/login");
  }
  return session;
};
