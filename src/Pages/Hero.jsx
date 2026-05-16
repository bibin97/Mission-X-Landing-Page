// src/Pages/Hero.jsx
import MagneticButton from "../Components/MagneticButton.jsx";
import MouseTilt from "../Components/MouseTilt";
import { FaWhatsapp, FaRocket, FaRobot, FaUserGraduate, FaChartLine } from "react-icons/fa";
import mxi from "../assets/mxi.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-12 pb-12 lg:pt-20 lg:pb-20 bg-[var(--bg)] overflow-hidden"
    >
      {/* Background Decor (Subtle Gradients) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-100 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-yellow-100 rounded-full blur-[120px] opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* MAIN HERO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="text-left space-y-8">

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--text-dark)] leading-[1.1] tracking-tight reveal-typing">
                From Average to <span className="text-[var(--brand-teal)]">90+ in Maths</span> <br className="hidden lg:block" />
                — The Mission-Based Way
              </h1>

              {/* Trust Line */}
              <p className="text-sm font-semibold text-[var(--brand-teal)] tracking-wide uppercase reveal-typing">
                Trusted by 10,000+ students across India
              </p>
            </div>

            {/* Sub-Headline */}
            <p className="text-lg sm:text-xl text-[var(--text)] max-w-xl leading-relaxed reveal-typing">
              Crack your entire maths syllabus through 25 structured missions with AI guidance and real mentors.
              Study smart for just 1–1.5 hours a day and consistently score 90+.
            </p>

            {/* CTAs */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Primary CTA */}
                <div className="slide-from-left">
                  <MagneticButton
                    href="https://wa.me/8281832158"
                    bg="#f8ba2b"
                    className="font-bold text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all"
                    icon={<FaWhatsapp size={24} color="#25D366" />}
                  >
                    Start Free on WhatsApp
                  </MagneticButton>
                </div>

                {/* Secondary CTA */}
                <div className="slide-from-right">
                  <a
                    href="#missions"
                    className="px-8 py-4 rounded-full border-2 border-gray-300 text-[var(--text-dark)] 
                    font-bold text-lg hover:border-[var(--brand-teal)] hover:text-[var(--brand-teal)] 
                    bg-transparent hover:bg-teal-50 transition-all text-center"
                  >
                    Explore Missions
                  </a>
                </div>
              </div>

              {/* Micro-text */}
              <p className="text-sm text-gray-500 font-medium pl-1 reveal-typing">
                No payment required • Free starter mission
              </p>
            </div>

          </div>

          {/* RIGHT IMAGE (Existing Image, New Presentation) */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="reveal-img relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px] aspect-[4/3] animate-float">
              {/* Glow/Halo Effect behind image */}
              <div className="absolute inset-4 bg-[var(--brand-teal)] blur-[60px] opacity-20 -z-10 rounded-full"></div>

              <MouseTilt>
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50 ring-1 ring-gray-100">
                  <img
                    src={mxi}
                    alt="Mission X Student Learning"
                    className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </MouseTilt>
            </div>
          </div>

        </div>

        {/* TRUST METRICS (Just Below Hero) */}
        <div className="mt-20 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <FaRocket />, num: "25", label: "Structured Missions" },
            { icon: <FaRobot />, num: "24/7", label: "AI + Human Mentor" },
            { icon: <FaUserGraduate />, num: "10,000+", label: "Students" },
            { icon: <FaChartLine />, num: "95%", label: "Success Rate" },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center 
               hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-white/60 group reveal-card"
            >
              <div className="text-[var(--brand-teal)] text-3xl mb-3 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl font-extrabold text-[var(--text-dark)]">
                {stat.num}
              </div>
              <div className="text-sm font-medium text-gray-600 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
