import Home from "@/components/ui/Home";
import Link from "next/link";
import { createClient } from "@/prismicio";
import OffresList from "./_components/OffresListe";
import Title from "@/components/ui/Title";

export default async function HomePage() {
  const client = createClient();
  const offres = await client.getAllByType("offres");
  console.log(offres);

  return (
    <div>
      <Home />
        <Title tag="h2">
          Sites web
        </Title>
      <OffresList offres={offres} />
      <Link href="/offres">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Voir les offres
        </button>
      </Link>
    </div>
  );
}
