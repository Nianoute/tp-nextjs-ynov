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
    <div className="p-5">
      <Link href="/offres">
        <button className="mb-6 inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
          ← Voir toutes les offres
        </button>
      </Link>
      <Title>Offres pour la technologie : {slug}</Title>
      <ul>
        <OffresList offres={offresFiltrees} />
      </ul>
    </div>
  );
}
