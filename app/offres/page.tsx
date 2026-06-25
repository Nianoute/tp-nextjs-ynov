import { Offre } from "../../types/offre";

export default async function OffresPage() {
  const offres = await fetch("http://localhost:3000/offres.json");
  const offresData = await offres.json();
  return (
    <div>
      {offresData.map((offre: Offre) => (
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
