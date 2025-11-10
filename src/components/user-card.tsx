import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import type { User } from "../../types/user";

export function UserCard({ user }: { user: User }) {
  return (
    <Card className="mx-auto max-w-sm">
      <CardContent className="flex items-start gap-4 pt-6">
        <Avatar className="h-12 w-12">
          <AvatarImage alt={user.name} src="https://github.com/shadcn.png" />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-1 flex-col gap-1 overflow-hidden">
          <div className="font-bold text-lg">{user.name}</div>
          <div className="text-muted-foreground text-sm">{user.email}</div>
        </div>
      </CardContent>
    </Card>
  );
}
