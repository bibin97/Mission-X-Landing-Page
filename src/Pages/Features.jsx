import MouseTilt from "../Components/MouseTilt";

const featuresList = [
  {
    icon: "🚀",
    title: "45 High-Impact Missions",
    desc: "A structured, outcome-focused mission system that covers every chapter with clarity, deep understanding, and smart practice."
  },
  {
    icon: "🤖",
    title: "AI Mentor — Instant Help 24×7",
    desc: "Get step-by-step solutions, explanations, and concept breakdowns instantly — powered by our advanced AI mentor."
  },
  {
    icon: "👨‍🏫",
    title: "Super Mentor Support",
    desc: "Top educators guide you with personalised tips, corrections, revision plans, and exam strategies during crucial learning moments."
  },
  {
    icon: "🎯",
    title: "Exam-Ready Practice System",
    desc: "Score-boosting practice sets designed using real CBSE patterns to improve accuracy, speed, and problem-solving confidence."
  },
  {
    icon: "🎁",
    title: "Exclusive Rewards & Unlocks",
    desc: "Earn badges, complete streaks, unlock premium perks, and access early lessons as you progress through missions."
  },
  {
    icon: "🌐",
    title: "10,000+ Student Community",
    desc: "Learn together with motivated students, share ideas, discuss doubts, and stay consistent through community challenges."
  }
];

export default function Features() {
  return (
    <section
      id="features"
      className="section-padding bg-[var(--bg)] reveal-up"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Header */}
        <div className="text-center mb-14">

          <div
            className="badge-fix inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-teal-100 text-[var(--brand-teal)] border border-teal-200 font-semibold shadow-sm overflow-hidden"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--brand-yellow)] animate-pulse"></span>
            <span className="badge-text reveal-typing">
              AI-Powered Premium Learning System
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-dark)] mb-3 reveal-typing">
            Why Students Love Mission X
          </h2>

          <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg reveal-typing">
            A powerful mission-based system built with AI mentorship and expert guidance — designed to deliver real exam results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

          {featuresList.map((item, i) => (
            <MouseTilt key={i}>
              <div
                className="p-7 bg-white rounded-2xl shadow-sm border border-gray-200 h-full 
                flex flex-col justify-between hover:shadow-xl transition-all duration-300 
                reveal-card"
              >

                {/* Icon Box */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-5
                  bg-teal-100 border border-teal-200 reveal-img"
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[var(--text-dark)] mb-2 reveal-typing">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed reveal-typing">
                  {item.desc}
                </p>

                {/* Learn More */}
                <div className="mt-6 reveal-btn">
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
