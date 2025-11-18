import { PetCard } from "@/components/pet-card";
import type { Pet } from "../../../types/pet";

export default function PetsPage() {
  const mockPets: Pet[] = [
    {
      id: "1",
      name: "タロー",
      petType: "dog",
      hp: 100,
      ownerId: "user123",
    },
    {
      id: "2",
      name: "ぽち",
      petType: "cat",
      hp: 80,
      ownerId: "user456",
    },
  ];
  return (
    <div>
      <h1 className="mb-4 font-bold text-2xl">ペット一覧</h1>
      {mockPets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
}
