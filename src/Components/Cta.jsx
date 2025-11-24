// src/Pages/CTA.jsx
// Mission X – Premium CTA Section (Boxed Version)

import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import MagneticButton from "./MagneticButton";

export default function Cta() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  // Countdown Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0)
          return { ...prev, seconds: prev.seconds - 1 };

        if (prev.minutes > 0)
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };

        if (prev.hours > 0)
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };

        return { hours: 23, minutes: 59, seconds: 59 }; // reset daily
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBox = (value, label) => (
    <div className="reveal-card bg-white rounded-xl p-5 border border-gray-200 shadow-sm min-w-[95px] text-center">
      <div className="text-3xl font-bold text-[var(--text-dark)] reveal-typing">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-xs mt-1 text-[var(--text-muted)] reveal-typing">
        {label}
      </div>
    </div>
  );

  return (
    <section id="join" className="section-padding reveal-up">
      <div className="max-w-4xl mx-auto px-6">

        {/* FULL BOX */}
        <div className="bg-white rounded-3xl p-10 md:p-12 shadow-xl border border-gray-200 text-center reveal-up">

          {/* Badge */}
          <div className="flex justify-center mb-4">
            <div
              className="badge-fix inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-teal-100 text-[var(--brand-teal)] border border-teal-200 font-semibold 
              shadow-sm overflow-hidden"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--brand-yellow)] animate-pulse"></span>
              <span className="badge-text reveal-typing">
                Early Access to Premium Missions
              </span>
            </div>
          </div>

          {/* Heading */}
          <h3 className="text-3xl sm:text-4xl font-bold text-[var(--text-dark)] mb-4 reveal-typing">
            Start Your Mission & Transform Your Maths Score
          </h3>

          {/* Description */}
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto mb-10 text-lg reveal-typing">
            Unlock structured missions, 24×7 AI mentor help, expert guidance, and
            a complete learning roadmap trusted by over{" "}
            <span className="text-[var(--brand-yellow)] font-semibold">10,000+ learners</span>.
            Begin your journey to confident, high-scoring maths.
          </p>

          {/* BUTTONS — BOTH ANIMATED */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">

            {/* WhatsApp Button */}
            <div className="reveal-btn">
              <MagneticButton
                href="https://wa.me/8281832158"
                bg="#f8ba2b"
                className="inline-flex items-center gap-2"
                icon={<FaWhatsapp size={20} color="#25D366" />}
              >
                Join Free on WhatsApp
              </MagneticButton>
            </div>

            {/* Explore Button */}
            <a
              href="#missions"
              className="reveal-btn px-7 py-4 rounded-full border border-gray-300
              text-[var(--text-dark)] font-semibold bg-white hover:bg-yellow-400 
              transition-all shadow-sm flex items-center justify-center"
            >
              Explore Missions
            </a>
          </div>

          {/* Timer Label */}
          <p className="text-[var(--text-dark)] font-medium mb-5 reveal-typing">
            ⏰ Offer Ends In:
          </p>

          {/* TIMER — ANIMATED CARDS */}
          <div className="flex justify-center gap-5 mb-10">
            {timeBox(timeLeft.hours, "Hours")}
            {timeBox(timeLeft.minutes, "Minutes")}
            {timeBox(timeLeft.seconds, "Seconds")}
          </div>

          {/* Bottom Note */}
          <p className="text-[var(--text-muted)] text-sm font-medium reveal-typing">
            No credit card required • Instant access • 100% free to start
          </p>
        </div>

      </div>
    </section>
  );
}
