import { redirect } from "next/navigation";
import { getPet } from "@/../data/pet";
import { DeletePetButton } from "@/components/delete-pet-button";
import { PetCard } from "@/components/pet-card";
import { PetForm } from "@/components/pet-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function PetPage({ params }: PageProps<"/pets/[id]">) {
  const petId = (await params).id;
  const pet = await getPet(petId);

  if (!pet) {
    redirect("/pets");
  }

  return (
    <div className="container py-10">
      <PetCard pet={pet} />
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>ペット情報の編集</CardTitle>
        </CardHeader>
        <CardContent>
          <PetForm defaultValues={pet} />
        </CardContent>
        <DeletePetButton petId={petId} />
      </Card>
    </div>
  );
}
