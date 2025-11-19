import type { Pet } from "../../types/pet";
import { Card, CardContent } from "./ui/card";

export function PetCard({ pet }: { pet: Pet }) {
  return (
    <Card>
      <CardContent>
        <h1 className="flex flex-col items-center gap-4 p-6">{pet.name}</h1>
        <p className="break-all text-muted-foreground text-sm">{pet.petType}</p>
        <p className="break-all text-muted-foreground text-sm">{pet.hp}</p>
      </CardContent>
    </Card>
  );
}
