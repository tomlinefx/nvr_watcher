"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import coverImage from "./login-form-cover.jpg";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="font-bold text-2xl">おかえりなさい</h1>
                <p className="text-balance text-muted-foreground">
                  ゲストとしてログイン
                </p>
              </div>
              <Field>
                <Button
                  className="w-full"
                  onClick={() => {
                    authClient.signIn.anonymous().then(() => {
                      router.push("/mypage");
                    });
                  }}
                  size="lg"
                  type="button"
                >
                  ゲストログイン
                </Button>
              </Field>
            </FieldGroup>
          </form>
          <div className="relative hidden bg-muted md:block">
            <Image
              alt=""
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
              placeholder="blur"
              src={coverImage}
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        続行することで、<a href="#">利用規約</a>と
        <a href="#">プライバシーポリシー</a>に同意したものとみなされます。
      </FieldDescription>
    </div>
  );
}
