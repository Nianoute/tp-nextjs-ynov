// app/api/offres/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@/prismicio";

export async function GET() {
  try {
    const client = createClient();

    const offres = await client.getAllByType("offres", {
      orderings: [{ field: "my.offres.date_publication", direction: "desc" }],
    });

    const dernieresOffres = offres.slice(0, 3);

    const result = dernieresOffres.map((offre) => ({
      uid: offre.uid,
      title: offre.data.title ?? null,
      technologies: offre.data.technologies,
      description: offre.data.description,
      synopsis: offre.data.synopsis,
      date: offre.data.date,
    }));

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la récupération des offres :", error);
    return NextResponse.json(
      { error: "Impossible de récupérer les offres" },
      { status: 500 },
    );
  }
}
