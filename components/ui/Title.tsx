type TitleType = {
  tag?: "h1" | "h2";
  topLine?: string;
  bottomLine?: string;
  children: React.ReactNode;
};

export default function Title({
  tag = "h1",
  topLine,
  bottomLine,
  children,
}: TitleType) {
  const Tag = tag;

  return (
    <div className="flex w-full items-center gap-4">
      <Tag className="relative inline-flex flex-col flex-shrink-0 pb-2 leading-tight">

        <span className="text-xl font-bold uppercase text-slate-900">
          {children}
        </span>

        {/* Barre épaisse sous le texte */}
        <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-indigo-900" />
      </Tag>
    </div>
  );
}