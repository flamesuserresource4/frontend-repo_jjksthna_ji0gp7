export default function Footer() {
  return (
    <footer id="about" className="py-10 bg-white border-t border-orange-200/60">
      <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h3 className="text-lg font-semibold text-orange-900">About Retro Picks</h3>
          <p className="mt-2 text-sm text-orange-900/80">
            A playful celebration of the games that shaped our love for the medium. Every pick is
            hand-selected for timeless design, charm, and pure fun.
          </p>
        </div>
        <div className="flex md:justify-end">
          <a
            href="#picks"
            className="px-4 py-2 rounded-lg bg-orange-600 text-white font-medium shadow hover:bg-orange-700 transition-colors"
          >
            Back to picks
          </a>
        </div>
      </div>
    </footer>
  );
}
