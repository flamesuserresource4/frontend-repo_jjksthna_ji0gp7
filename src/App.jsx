import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PicksGrid from "./components/PicksGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-orange-900">
      <Navbar />
      <main>
        <Hero />
        <PicksGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
