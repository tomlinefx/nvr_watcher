import { PetCard } from "@/components/pet-card";
import { getPets } from "../../../data/pet";

export default async function PetsPage() {
  const pets = await getPets();
  return (
    <div className="container">
      <h1 className="mb-6 font-bold text-2xl">ペット一覧</h1>
      <div className="grid grid-cols-3 gap-4">
        {pets.map((pet) => (
          <div key={pet.id}>
            <PetCard pet={pet} />
          </div>
        ))}
      </div>
    </div>
  );
}

// 固定文字列通知
/*
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
*/
