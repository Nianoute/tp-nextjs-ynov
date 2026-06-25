import Title from "@/components/ui/Title";
import { createClient } from "@/prismicio";
import OffresList from "./_components/OffresListe";
import { KeyTextField } from "@prismicio/client";
import Link from "next/link";

export default async function OffresPage() {
  const client = createClient();
  const offres = await client.getAllByType("offres", {
    orderings: [{ field: "my.offres.date_publication", direction: "desc" }],
  });

  let listeTechnologies: KeyTextField[] = [];

  offres.map((offre) => {
    offre.data.technologies.map((technologie) => {
      if (!listeTechnologies.includes(technologie.technologieName)) {
        listeTechnologies.push(technologie.technologieName);
      }
    });
  });

  return (
    <div>
      <Title tag="h2">Offres d'emplois</Title>
      {offres.length > 1 && <p>{offres.length} offres</p>}
      {offres.length === 1 && <p>{offres.length} offre</p>}

      {listeTechnologies.map((techno) => (
        <Link href={`/technologies/${techno}`} key={techno}>
          {techno}
        </Link>
      ))}

      <OffresList offres={offres} />
    </div>
  );
}
