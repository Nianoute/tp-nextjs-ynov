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
    <div className="p-5">
      <Title tag="h2">Offres d'emplois</Title>
      {offres.length > 1 && <p>{offres.length} offres</p>}
      {offres.length === 1 && <p>{offres.length} offre</p>}

      <div className="flex flex-wrap gap-2 my-4">
        {listeTechnologies.map((techno) => (
          <Link
            href={`/technologies/${techno}`}
            key={techno}
            className="inline-block rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 transition-colors hover:bg-indigo-700 hover:text-white hover:border-indigo-700"
          >
            {techno}
          </Link>
        ))}
      </div>

      <OffresList offres={offres} />
    </div>
  );
}
