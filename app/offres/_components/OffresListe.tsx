"use client";

import { OffresDocument } from "@/prismicio-types";
import Offre from "@/components/ui/Offre";

type OffreListType = {
  offres: OffresDocument[];
};
export default function OffresList({ offres }: OffreListType) {
  return (
    <>
      <div className="grid md:grid-cols-4 gap-x-4 gap-y-8 pt-12">
        {offres.map((w, i) => (
          <Offre key={`offre-${i}`} offre={w} />
        ))}
      </div>
    </>
  );
}
