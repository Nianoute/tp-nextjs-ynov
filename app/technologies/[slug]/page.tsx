import { redirect } from "next/navigation";
import Title from "@/components/ui/Title";
import { createClient } from "@/prismicio";
import OffresList from "@/app/_components/OffresListe";
import Link from "next/link";

type OffrePageType = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const client = createClient();
  const offres = await client.getAllByType("offres");

  const slugs = offres.flatMap((offre) =>
    offre.data.technologies.map((t) => t.technologieName),
  );

  const uniqueSlugs = Array.from(new Set(slugs));

  return uniqueSlugs.map((slug) => ({ slug }));
}

export default async function OffrePage({ params }: OffrePageType) {
  const { slug } = await params;
  const client = createClient();

  const offres = await client.getAllByType("offres");

  const offresFiltrees = offres.filter((offre) =>
    offre.data.technologies.some((t) => t.technologieName === slug),
  );

  if (offresFiltrees.length === 0) {
    redirect("/offres");
  }

  return (
    <div>
      <Link href="/offres">Voir toutes nos offres</Link>
      <Title>Offres pour la technologie : {slug}</Title>
      <ul>
        <OffresList offres={offresFiltrees} />
      </ul>
    </div>
  );
}
