"use client";

import { useRouter } from "next/navigation";
import { deletePet } from "../../actions/pet";
import { Button } from "./ui/button";

export function DeletePetButton({ petId }: { petId: string }) {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        deletePet(petId);
        router.refresh();
      }}
      variant="destructive"
    >
      ペットを削除
    </Button>
  );
}
