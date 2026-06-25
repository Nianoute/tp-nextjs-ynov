import { Offre } from "../../types/offre";
import Offres from "../../public/offres.json";

export default async function OffresPage() {
  return (
    <div>
      {Offres.map((offre: Offre) => (
        <div key={offre.title}>
          <h1>{offre.title}</h1>
          <p>{offre.description}</p>
          <p>{offre.date}</p>
          <div>
            {offre.tags.map((tag: string) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
