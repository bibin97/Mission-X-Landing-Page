import MouseTilt from "../Components/MouseTilt";

const missionsData = [
  {
    id: 1,
    name: "Mission 1: Algebra Foundation",
    detail:
      "Build a rock-solid understanding of linear equations, polynomials and factorisation with visual explanations and guided steps.",
    progress: 100,
    difficulty: "Beginner",
    duration: "2–3 days",
    topics: ["Linear Equations", "Polynomials", "Factorisation"],
    icon: "📐"
  },
  {
    id: 2,
    name: "Mission 2: Geometry Mastery",
    detail:
      "Understand triangles, circles and constructions using visual learning and real-world geometric reasoning.",
    progress: 100,
    difficulty: "Intermediate",
    duration: "3–4 days",
    topics: ["Triangles", "Circles", "Constructions"],
    icon: "📏"
  },
  {
    id: 3,
    name: "Mission 3: Trigonometry Essentials",
    detail:
      "Master trigonometric ratios, identities and applications through simple breakdowns and real-life problem examples.",
    progress: 100,
    difficulty: "Advanced",
    duration: "4–5 days",
    topics: ["Ratios", "Identities", "Applications"],
    icon: "📊"
  }
];

export default function Missions() {
  return (
    <section id="missions" className="section-padding bg-[var(--bg)] reveal-up">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14 reveal-item">

          <div className="badge-fix inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-teal-100 text-[var(--brand-teal)] border border-teal-200 font-semibold shadow-sm reveal-typing overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-yellow)] animate-pulse"></span>
            <span className="badge-text">Structured 25-Mission Learning Path</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-dark)] mb-3 reveal-typing">
            Explore Your Learning Missions
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg reveal-typing">
            A complete journey of 25 missions designed to turn complex chapters into clear,
            exam-ready understanding — one mission at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {missionsData.map((m) => (
            <MouseTilt key={m.id}>
              <div
                className="relative bg-white rounded-2xl p-8 border border-white
                shadow-sm hover:shadow-xl transition-all duration-300 
                flex flex-col h-full reveal-item"
              >

                <div className="absolute -top-3 right-5">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold
                    bg-teal-100 text-teal-700 border border-teal-200">
                    {m.difficulty}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-teal-100 border border-teal-200 
                    flex items-center justify-center text-3xl">
                    {m.icon}
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-[var(--text-dark)] leading-tight reveal-typing">
                      {m.name}
                    </h3>
                    <p className="text-sm text-gray-700">{m.duration}</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-6 reveal-typing">
                  {m.detail}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">
                    Key Topics:
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {m.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200 
                          text-gray-700 text-xs font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-grow"></div>

                <div className="mb-7">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-800">Progress</span>
                    <span className="text-sm font-semibold text-gray-800">{m.progress}%</span>
                  </div>

                  <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-500 to-teal-700"
                      style={{ width: `${m.progress}%` }}
                    />
                  </div>
                </div>

                <button
                  className="w-full py-3 rounded-full bg-white text-black font-semibold border-gray-300 border-2
                  hover:bg-yellow-500 transition-all"
                >
                  {m.progress === 100 ? "Completed ✓" : "Start Mission"}
                </button>

              </div>
            </MouseTilt>
          ))}

        </div>

      </div>
    </section>
  );
}
