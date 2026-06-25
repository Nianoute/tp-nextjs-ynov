import Title from "@/components/ui/Title";
import { createClient } from "@/prismicio";
import OffresList from "./_components/OffresListe";

export default async function OffresPage() {
  const client = createClient();
  const offres = await client.getAllByType("offres");

  return (
    <div>
      <Title tag="h2">Offres d'emplois</Title>
      {offres.length > 1 && <p>{offres.length} offres</p>}
      {offres.length === 1 && <p>{offres.length} offre</p>}

      <OffresList offres={offres} />
    </div>
  );
}
