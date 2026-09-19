import Blossom from "@/components/Blossom";

const ITEMS = [
  "Energetically Tranquil",
  "Chris Pyrate & Friends",
  "Washington, D.C.",
  "Art Is Not Done Until It's Witnessed",
];

export default function Ticker() {
  const row = (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="whitespace-nowrap px-8 font-display text-lg font-medium tracking-wide text-cream md:text-xl">
            {item}
          </span>
          <Blossom className="h-6 w-6 shrink-0" variant={2} />
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden border-y-2 border-navy bg-navy py-4">
      <div className="animate-marquee flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}
