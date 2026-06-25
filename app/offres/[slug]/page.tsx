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
    <main className="max-w-3xl mx-auto px-4 py-10 p-5">
      <Link href="/offres">
        <button className="mb-6 inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
          ← Voir toutes les offres
        </button>
      </Link>

      <Title tag="h1">{offre.data.title}</Title>

      <p className="mt-2 text-sm text-gray-500">{offre.data.date}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {offre.data.technologies.map((technologie) => (
          <Link
            href={`/technologies/${technologie.technologieName}`}
            key={technologie.technologieName}
            className="inline-block rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 transition-colors hover:bg-indigo-700 hover:text-white hover:border-indigo-700"
          >
            {technologie.technologieName}
          </Link>
        ))}
      </div>

      <p className="mt-8 text-lg font-semibold text-gray-900">Synopsis</p>
      <p className="mt-2 text-gray-700">{offre.data.synopsis}</p>

      <p className="mt-8 text-lg font-semibold text-gray-900">Description</p>
      <div className="prose prose-gray mt-2 max-w-none">
        <PrismicRichText field={offre.data.description} />
      </div>
    </main>
  );
}
