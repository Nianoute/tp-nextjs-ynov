import { OffresDocument } from "@/prismicio-types";
import Link from "next/link";

export default function Offre({
  offre: {
    uid,
    data: { title, date, synopsis },
  },
}: {
  offre: OffresDocument;
}) {
  return (
    <Link href={`/offres/${uid}`}>
      <article className="h-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
        <p className="mb-2 text-sm text-gray-500">
          {date}
        </p>

        <h2 className="mb-3 text-lg font-semibold text-gray-900">
          {title}
        </h2>

        <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
          {synopsis}
        </p>
      </article>
    </Link>
  );
}