import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/rwKT-aWtlkdY-8UV/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20 md:pt-28">
        <div className="max-w-2xl bg-white/70 backdrop-blur-md rounded-xl p-6 md:p-8 border border-orange-200/60 shadow-xl">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-orange-900">
            Editor's Pick: Retro Video Games
          </h1>
          <p className="mt-3 md:mt-4 text-orange-900/80 text-sm md:text-base">
            A curated collection of timeless classics that still feel magical today.
            Explore interactive models, handpicked reviews, and era-defining soundtracks.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#picks" className="px-5 py-2.5 rounded-lg bg-orange-600 text-white font-medium shadow hover:bg-orange-700 transition-colors">Browse Picks</a>
            <a href="#about" className="px-5 py-2.5 rounded-lg bg-white text-orange-900 border border-orange-300/80 hover:bg-orange-50 transition-colors">Learn More</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/70" />
    </section>
  );
}
