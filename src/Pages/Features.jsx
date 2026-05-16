import MouseTilt from "../Components/MouseTilt";

const featuresList = [
  {
    icon: "🚀",
    title: "Mission-Based Syllabus Coverage",
    desc: "Complete your entire syllabus through structured, goal-oriented missions rather than boring chapters."
  },
  {
    icon: "⚡",
    title: "Daily Bite-Sized Maths Tasks",
    desc: "No long lectures. Just focused, small tasks every day that fit your schedule perfectly."
  },
  {
    icon: "🤖",
    title: "Personal AI Maths Mentor",
    desc: "Get instant, step-by-step help 24/7. Your AI mentor explains concepts until you understand."
  },
  {
    icon: "👨‍🏫",
    title: "Human Doubt Clearing Support",
    desc: "Stuck on a tricky problem? Real expert mentors are there to guide you personally."
  },
  {
    icon: "📊",
    title: "Progress Tracking & Reports",
    desc: "Visualise your growth. See exactly where you stand and what to improve with detailed weekly reports."
  },
  {
    icon: "🎯",
    title: "Exam-Focused Strategies",
    desc: "Learn smart shortcuts, time management, and proven techniques to score 90+ in exams."
  }
];

export default function Features() {
  return (
    <section
      id="features"
      className="section-padding bg-white relative reveal-up"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-dark)] reveal-typing">
            Why Mission X <span className="text-[#008080]">Works Better</span> <br className="hidden md:block" />
            Than Traditional Tuition
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg reveal-typing">
            A smarter, faster, and more effective way to master maths without the stress.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((item, i) => (
            <MouseTilt key={i}>
              <div
                className="p-8 bg-[var(--bg)] rounded-3xl border border-gray-100 
                hover:border-teal-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 
                h-full flex flex-col items-start gap-4 group reveal-card"
              >
                {/* Icon Box */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl
                  bg-white shadow-sm border border-gray-100 group-hover:bg-teal-50 group-hover:scale-110 transition-transform"
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3 group-hover:text-[var(--brand-teal)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            </MouseTilt>
          ))}
        </div>

      </div>
    </section>
  );
}
