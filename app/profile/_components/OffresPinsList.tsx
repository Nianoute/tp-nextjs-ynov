"use client";

import Offre from "@/components/ui/Offre";
import { usePinsStore } from "@/store/pins";
import Title from "@/components/ui/Title";

export default function PinsList() {
  const pins = usePinsStore((s) => s.pins);

  return (
    <div>
      <Title tag="h2">Offres enregistrées</Title>
      <div className="grid md:grid-cols-4 gap-x-4 gap-y-8 pt-12">
        {pins.map((p, i) => (
          <Offre key={`website-${i}`} offre={p} />
        ))}
      </div>
    </div>
  );
}
