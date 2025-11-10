import { UserCard } from "@/components/user-card";
import { verifySession } from "@/lib/session";

export default async function MyPage() {
  const session = await verifySession();

  return (
    <div className="container">
      <h1 className="mb-4 font-bold text-2xl"> マイページ </h1>
      <UserCard user={session.user} />
    </div>
  );
}
