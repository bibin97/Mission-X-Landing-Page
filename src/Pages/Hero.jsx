import SlideButton from "../Components/SlideButton";
import MouseTilt from "../Components/MouseTilt";
import mxi from "../assets/mxi.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-padding relative bg-[var(--bg)] overflow-hidden  reveal-up"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE CONTENT */}
        <div className="text-left space-y-6 reveal-item">

          {/* Badge (Typing) */}
     <div className="badge-fix inline-flex items-center gap-2 px-4 py-2 rounded-full
  bg-teal-100 text-[var(--brand-teal)] border border-teal-200 font-semibold shadow-sm reveal-typing">
  <span className="w-2 h-2 rounded-full bg-[var(--brand-yellow)] animate-pulse"></span>
  <span className="badge-text">Premium AI-Powered Learning</span>
</div>



          {/* Main Heading (Typing) */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-dark)] leading-tight reveal-typing">
            Transform Your Learning with{" "}
            <span className="text-[var(--brand-teal)]">Mission X</span>
          </h1>

          {/* Description (Typing) */}
          <p className="text-[var(--text)] max-w-xl text-base sm:text-lg reveal-typing">
            Mission-based learning powered by AI, expert mentors, and a structured
            curriculum designed to help students score{" "}
            <span className="font-semibold text-[var(--brand-teal)]">90+</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 reveal-item">
            <SlideButton
              as="a"
              href="#join"
              className="!px-7 !py-4 slide-btn"
              baseBg="#f8ba2b"
              fillColor="#f8ba2b"
            >
              Join on WhatsApp
            </SlideButton>

            <a
              href="#missions"
              className="px-7 py-4 rounded-full border border-gray-300
              text-[var(--text-dark)] font-semibold bg-white hover:bg-gray-100 
              transition-all shadow-sm"
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
                <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm 
                text-center reveal-item">
                  <div className="text-2xl font-extrabold text-[var(--text-dark)]">{num}</div>
                  <div className="text-xs mt-1 text-[var(--text-muted)]">{label}</div>
                </div>
              </MouseTilt>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center lg:justify-end reveal-item">
          <MouseTilt>
            <img
              src={mxi}
              alt="Mission X Illustration"
              className="w-[300px] sm:w-[420px] lg:w-[480px] rounded-3xl shadow-xl border border-gray-200 object-cover"
            />
          </MouseTilt>
        </div>

      </div>
    </section>
  );
}
