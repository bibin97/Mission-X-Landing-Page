
import MouseTilt from "../Components/MouseTilt";

const featuresList = [
  {
    icon: "🚀",
    title: "25 Structured Missions",
    desc: "Clear chapter-based missions designed to build strong fundamentals step-by-step."
  },
  {
    icon: "🤖",
    title: "AI Mentor 24×7",
    desc: "Instant solutions and explanations from our advanced AI Mentor whenever you're stuck."
  },
  {
    icon: "👨‍🏫",
    title: "Expert Mentor Support",
    desc: "Live doubt support from experienced teachers during crucial learning moments."
  },
  {
    icon: "🎯",
    title: "Exam-Focused Challenges",
    desc: "Score-boosting practice challenges based on real CBSE exam patterns."
  },
  {
    icon: "🎁",
    title: "Premium Rewards",
    desc: "Unlock badges, perks, early access lessons and exclusive member benefits."
  },
  {
    icon: "🌐",
    title: "Community Learning",
    desc: "Join a supportive group of 10,000+ students learning together every day."
  }
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-[var(--bg)] py-24 lg:py-32 reveal-up"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ----------------------- */}
        {/* Section Header */}
        {/* ----------------------- */}
        <div className="text-center mb-14 reveal-item">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full
            bg-teal-100 text-[var(--brand-teal)] border border-teal-200 font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-yellow)] animate-pulse"></span>
            Premium Learning Ecosystem
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-dark)] mb-3">
            Why Students Choose Mission X
          </h2>

          <p className="text-[var(--text)] max-w-2xl mx-auto text-base sm:text-lg">
            A refined mission-based system with powerful tools, AI mentorship,
            and expert-guided pathways built for results.
          </p>
        </div>

        {/* ----------------------- */}
        {/* Features Grid */}
        {/* ----------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

          {featuresList.map((item, i) => (
            <MouseTilt key={i}>
              <div
                className="p-7 bg-white rounded-2xl shadow-sm border border-gray-200 h-full 
                flex flex-col justify-between hover:shadow-lg transition-all duration-300 reveal-item"
              >

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-5
                  bg-teal-100 border border-teal-200">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[var(--text-dark)] mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Learn More */}
                <div className="mt-6">
                  <a
                    href="#join"
                    className="inline-flex items-center gap-2 text-[var(--brand-teal)] font-semibold hover:text-teal-700 transition-all"
                  >
                    Learn More →
                  </a>
                </div>

              </div>
            </MouseTilt>
          ))}

        </div>

      </div>
    </section>
  );
}
