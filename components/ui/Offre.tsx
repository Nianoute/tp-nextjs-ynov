import { OffresDocument } from "@/prismicio-types";
import Link from "next/link";
import { usePinsStore } from "@/store/pins";

export default function Offre({ offre }: { offre: OffresDocument }) {
  const { pins, addPin, removePin } = usePinsStore();
  return (
    <article className="h-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <p className="mb-2 text-sm text-gray-500">{offre.data.date}</p>

      <Link href={`/offres/${offre.uid}`}>
        <h2 className="mb-3 text-lg font-semibold text-gray-900">
          {offre.data.title}
        </h2>
      </Link>

      <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
        {offre.data.synopsis}
      </p>

      <span
        onClick={() =>
          pins.some((p) => p.uid === offre.uid)
            ? removePin(offre)
            : addPin(offre)
        }
        className="material-symbols-outlined cursor-pointer"
      >
        {pins.some((p) => p.uid === offre.uid) ? "Enlever" : "Sauvegarder"}
      </span>
    </article>
  );
}
