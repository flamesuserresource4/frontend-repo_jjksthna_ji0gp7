import { Star } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-orange-200/60">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-orange-400 to-pink-500 grid place-items-center text-white font-bold">8</div>
          <span className="font-semibold text-lg tracking-tight text-orange-700">Retro Picks</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-orange-800/80">
          <a href="#picks" className="hover:text-orange-900 transition-colors">Editor's Picks</a>
          <a href="#genres" className="hover:text-orange-900 transition-colors">Genres</a>
          <a href="#about" className="hover:text-orange-900 transition-colors flex items-center gap-1">
            <Star className="h-4 w-4 fill-orange-400 text-orange-500" /> About
          </a>
        </nav>
      </div>
    </header>
  );
}
