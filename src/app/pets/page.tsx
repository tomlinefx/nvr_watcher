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
    {
      id: "3",
      name: "たま",
      petType: "cat",
      hp: 200,
      ownerId: "user789",
    },
  ];
  return (
    <div className="container">
      <h1 className="mb-6 font-bold text-2xl">ペット一覧</h1>
      <div className="grid grid-cols-3 gap-4">
        {mockPets.map((pet) => (
          <div key={pet.id}>
            <PetCard pet={pet} />
          </div>
        ))}
      </div>
    </div>
  );
}
