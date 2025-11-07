import { Star } from "lucide-react";

const picks = [
  {
    title: "Super Mario Bros.",
    year: 1985,
    platform: "NES",
    blurb: "The side-scroller that defined a generation with tight controls and iconic level design.",
    cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "The Legend of Zelda",
    year: 1986,
    platform: "NES",
    blurb: "Open-world adventure roots with dungeons, secrets, and a golden cartridge legend.",
    cover: "https://images.unsplash.com/photo-1603349206295-e9b9b84f7354?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Sonic the Hedgehog",
    year: 1991,
    platform: "Genesis",
    blurb: "Blistering speed meets vibrant art—an electric answer to the platforming crown.",
    cover: "https://images.unsplash.com/photo-1585076808439-2a700a2aaf9e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Tetris",
    year: 1984,
    platform: "Game Boy",
    blurb: "Endlessly elegant puzzle perfection that turned a handheld into a phenomenon.",
    cover: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
  },
];

function Card({ game }) {
  return (
    <div className="group rounded-xl overflow-hidden bg-white border border-orange-200/60 shadow hover:shadow-lg transition-shadow">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={game.cover} alt={game.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-orange-900">{game.title}</h3>
          <span className="text-xs text-orange-700/70 bg-orange-100 px-2 py-0.5 rounded-md">
            {game.platform}
          </span>
        </div>
        <p className="mt-2 text-sm text-orange-900/80">{game.blurb}</p>
        <div className="mt-3 flex items-center gap-1 text-orange-600">
          <Star className="h-4 w-4 fill-orange-300" />
          <span className="text-xs">Editor's Pick · {game.year}</span>
        </div>
      </div>
    </div>
  );
}

export default function PicksGrid() {
  return (
    <section id="picks" className="relative py-16 bg-gradient-to-b from-white to-orange-50/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-orange-900">Editor's Picks</h2>
            <p className="text-orange-800/80 text-sm md:text-base">Hand-chosen favorites that still play like a dream.</p>
          </div>
          <a href="#" className="text-sm text-orange-700 hover:text-orange-900">See all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {picks.map((g) => (
            <Card key={g.title} game={g} />
          ))}
        </div>
      </div>
    </section>
  );
}
