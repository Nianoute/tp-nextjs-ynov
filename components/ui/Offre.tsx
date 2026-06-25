import { OffresDocument } from "@/prismicio-types";
import Link from "next/link";
import { usePinsStore } from "@/store/pins";

export default function Offre({ offre }: { offre: OffresDocument }) {
  const { pins, addPin, removePin } = usePinsStore();
  return (
    <article className="h-full rounded-xl border border-gray-200 bg-white p-5">
      <p className="mb-2 text-sm text-gray-500">{offre.data.date}</p>

      <Link href={`/offres/${offre.uid}`}>
        <h2 className="mb-3 text-lg font-semibold text-gray-900">
          {offre.data.title}
        </h2>
      </Link>

      <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
        {offre.data.synopsis}
      </p>

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
