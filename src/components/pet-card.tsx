import Link from "next/link";
import type { Pet, PetType } from "../../types/pet";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

const MAX_HP = 100;
const PERCENT_MULTIPLIER = 100;
const HP_THRESHOLD_HIGH = 60;
const HP_THRESHOLD_LOW = 30;
const MIN_PERCENT = 0;
const MAX_PERCENT = 100;

const getPetTypeLabel = (type: PetType) => {
  const typeMap: Record<PetType, string> = {
    dog: "🐶",
    cat: "🐈",
  };
  return typeMap[type] || type;
};

/*
const PET_TYPE_LABELS: Record<string, string> = {
  dog: "犬",
  cat: "猫",
};
*/

function getHpColor(hp: number): string {
  const hpPercentage = (hp / MAX_HP) * PERCENT_MULTIPLIER;

  if (hpPercentage > HP_THRESHOLD_HIGH) {
    return "bg-green-500";
  }
  if (hpPercentage > HP_THRESHOLD_LOW) {
    return "bg-yellow-500";
  }
  return "bg-red-500";
}

export function PetCard({ pet }: { pet: Pet }) {
  const hpPercentage = Math.max(
    MIN_PERCENT,
    Math.min(MAX_PERCENT, (pet.hp / MAX_HP) * PERCENT_MULTIPLIER)
  );
  const hpColor = getHpColor(pet.hp);

  return (
    <Card>
      <CardContent className="p-6">
        <h1 className="mb-4 text-center font-bold text-xl">{pet.name}</h1>
        <p className="mb-2 text-center text-muted-foreground text-sm">
          {getPetTypeLabel(pet.petType)}
        </p>

        <div className="mt-4">
          <div className="mb-1 flex items-center justify-between text-sm">
            <span className="font-medium">HP</span>
            <span className="text-muted-foreground">
              {pet.hp} / {MAX_HP}
            </span>
            j
          </div>
          <div className="h-4 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className={`h-full transition-all duration-300 ${hpColor}`}
              style={{ width: `${hpPercentage}%` }}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/pets/${pet.id}`}>編集</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
