// src/Pages/CTA.jsx
// Mission X – Premium CTA Section (Teal Buttons + Yellow Highlights)

import { useState, useEffect } from "react";
import SlideButton from "./SlideButton";



export default function Cta() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  // Countdown Timer Logic
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
    <div className="reveal-item bg-white rounded-xl p-5 border border-gray-200 shadow-sm min-w-[95px] text-center">
      <div className="text-3xl font-bold text-[var(--text-dark)]">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-xs mt-1 text-[var(--text-muted)]">{label}</div>
    </div>
  );

  return (
    <section id="join" className="py-28 reveal-up">
      <div className="max-w-4xl mx-auto px-6">

        <div className="card-soft rounded-3xl p-10 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full 
              bg-[var(--brand-yellow)]/20 text-[var(--text-dark)]
              border border-[var(--brand-yellow)]/50 font-semibold mb-6 reveal-item">
            <span className="w-2 h-2 bg-[var(--brand-yellow)] rounded-full animate-pulse"></span>
            Limited Time Premium Access
          </div>

          {/* Heading */}
          <h3 className="text-3xl sm:text-4xl font-bold text-[var(--text-dark)] mb-4 reveal-item">
            Join Mission X & Boost Your Math Score
          </h3>

          {/* Description */}
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto mb-10 text-lg reveal-item">
            Get instant access to missions, AI mentor help, expert guidance, and
            step-by-step learning paths — trusted by over{" "}
            <span className="text-[var(--brand-yellow)] font-semibold">10,000+</span> students.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-10 reveal-item">
            <SlideButton
              as="a"
              href="https://wa.me/8281832158"
              className="px-8 py-4 text-base"
            >
              Join Free on WhatsApp
            </SlideButton>

            <a
              href="#missions"
              className="px-8 py-4 rounded-full font-semibold border border-gray-300 
                text-[var(--text-dark)] hover:bg-gray-50 transition-all btn-magnetic"
            >
              Explore Missions
            </a>
          </div>

          {/* Timer */}
          <p className="text-[var(--text-dark)] font-medium mb-5 reveal-item">
            ⏰ Offer resets in:
          </p>

          <div className="flex justify-center gap-5 mb-10">
            {timeBox(timeLeft.hours, "Hours")}
            {timeBox(timeLeft.minutes, "Minutes")}
            {timeBox(timeLeft.seconds, "Seconds")}
          </div>

          {/* Bottom Note */}
          <p className="text-[var(--text-muted)] text-sm font-medium reveal-item">
            No credit card required • Instant access • 100% free to start
          </p>

        </div>

      </div>
    </section>
  );
}
