import { createClient } from "@/prismicio";
import { redirect } from "next/navigation";
import Link from "next/link";
import Title from "@/components/ui/Title";
import { PrismicRichText } from "@prismicio/react";

type OffrePageType = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const client = createClient();
  const offres = await client.getAllByType("offres");

  return offres.map((w) => ({
    slug: w.uid,
  }));
}

export default async function OffrePage({ params }: OffrePageType) {
  const { slug } = await params;
  const client = createClient();
  const offre = await client.getByUID("offres", slug);

  if (!offre) redirect("/offres");

  return (
    <main>
      <Link href="/offres">
        <button>Voir toutes les offres</button>
      </Link>
      <Title tag="h1">{offre.data.title}</Title>
      <p>{offre.data.date}</p>
      {offre.data.technologies.map((technologie) => (
        <p key={technologie.technologieName}>{technologie.technologieName}</p>
      ))}
      <p>Synopsis</p>
      <p>{offre.data.synopsis}</p>
      <p>Description</p>
      <PrismicRichText field={offre.data.description} />
    </main>
  );
}
