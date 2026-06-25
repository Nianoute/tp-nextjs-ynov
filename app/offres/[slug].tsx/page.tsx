export async function generateStaticParams() {
  const res = await fetch(`http://localhost:3000/offres.json`);
  const offres = await res.json();

  return offres.map((offre: { title: string }) => ({
    slug: offre.title,
  }));
}

export default async function OffrePage({
  params,
}: {
  params: { slug: string };
}) {
  const res = await fetch(`http://localhost:3000/offres.json`);
  const offres = await res.json();
  const offre = offres.find((o: { title: string }) => o.title === params.slug);

  if (!offre) {
    return <div>Offre not found</div>;
  }

  return (
    <div>
      <h1>{offre.title}</h1>
      <p>{offre.description}</p>
      <p>{offre.date}</p>
      <div>
        {offre.tags.map((tag: string) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
