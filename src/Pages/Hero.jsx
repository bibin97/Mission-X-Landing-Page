// src/Pages/Hero.jsx
import MagneticButton from "../Components/MagneticButton.jsx";
import MouseTilt from "../Components/MouseTilt";
import { FaWhatsapp } from "react-icons/fa";
import mxi from "../assets/mxi.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-padding relative bg-[var(--bg)] overflow-hidden reveal-up"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-left space-y-6">

          {/* Badge */}
          <div
            className="badge-fix inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-teal-100 text-[var(--brand-teal)] border border-teal-200 font-semibold shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--brand-yellow)] animate-pulse"></span>
            <span className="badge-text reveal-typing">
              India’s Smartest Maths Learning System
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-dark)] leading-tight reveal-typing">
            Score 90+ In <br />
            Maths The Smart <br />
            Mission Based Way
          </h1>

          {/* Description */}
          <p className="text-[var(--text)] max-w-xl text-base sm:text-lg reveal-typing">
            Crack your entire syllabus in 25 structured missions with the power
            of AI learning + real human mentors. Just 1–1.5 hours/day is all you
            need to transform your maths performance.{" "}
            <span className="font-semibold text-[var(--brand-teal)]">90+</span>.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">

            {/* WhatsApp Magnetic Button */}
            <div className="reveal-btn">
              <MagneticButton
                href="https://wa.me/8281832158"
                bg="#f8ba2b"
                className="inline-flex items-center gap-2"
                icon={<FaWhatsapp size={20} color="#25D366" />}
              >
                Start Free on WhatsApp
              </MagneticButton>
            </div>

            {/* Explore Button */}
            <a
              href="#missions"
              className="reveal-btn px-6 py-3 rounded-full border border-gray-300
              text-[var(--text-dark)] font-semibold bg-white hover:bg-yellow-400 
              transition-all shadow-sm inline-flex justify-center items-center"
            >
              Explore Missions
            </a>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl pt-8">
            {[
              ["25", "Missions"],
              ["24/7", "AI Mentor"],
              ["10K+", "Students"],
              ["95%", "Success Rate"],
            ].map(([num, label], i) => (
              <MouseTilt key={i}>
                <div
                  className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm 
                  text-center reveal-card"
                >
                  <div className="text-2xl font-extrabold text-[var(--text-dark)] reveal-typing">
                    {num}
                  </div>
                  <div className="text-xs mt-1 text-[var(--text-muted)] reveal-typing">
                    {label}
                  </div>
                </div>
              </MouseTilt>
            ))}
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <MouseTilt>
            <div className="reveal-img w-[300px] sm:w-[420px] lg:w-[480px] rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
              <img
                src={mxi}
                alt="Mission X Illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </MouseTilt>
        </div>

      </div>
    </section>
  );
}
