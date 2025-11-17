import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import ParticleCursor from "./Components/Particlescursor.jsx";

import Hero from "./Pages/Hero.jsx";
import Features from "./Pages/Features.jsx";
import Missions from "./Pages/Missions.jsx";
import Testimonials from "./Pages/Testimonials.jsx";
import Cta from "./Components/Cta.jsx";

import UseAnimations from "./Components/UseAnimations.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] overflow-x-hidden">

      {/* IMPORTANT - enable animations */}
      <UseAnimations />

      <ParticleCursor />
      <Navbar />

      <main className="pt-20 space-y-24 lg:space-y-32">
        <Hero />
        <Features />
        <Missions />
        <Testimonials />
        <Cta />
      </main>

      <Footer />
    </div>
  );
}
