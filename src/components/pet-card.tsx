import type { Pet } from "../../types/pet";
import { Card, CardContent } from "./ui/card";

export function PetCard({ pet }: { pet: Pet }) {
  return (
    <Card className="mx-auto max-w-sm">
      <CardContent className="flex flex-col items-start gap-4 pt-6">
        <h1 className="flex flex-col items-center gap-4 p-6">{pet.name}</h1>
        <p className="break-all text-muted-foreground text-sm">{pet.petType}</p>
        <p className="break-all text-muted-foreground text-sm">{pet.hp}</p>
        <p className="break-all text-muted-foreground text-sm">{pet.ownerId}</p>
      </CardContent>
    </Card>
  );
}
