import MouseTilt from "../Components/MouseTilt";

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    content:
      "Mission X made Math finally click for me. The missions simplified every tough chapter, and my score jumped from 78 to 95+. It changed my confidence completely!",
    author: "Arushi Singh",
    role: "CBSE Student",
    avatar: "👩‍🎓",
  },
  {
    id: 2,
    rating: 5,
    content:
      "The combination of AI mentor + structured missions is a game changer. My students understand concepts faster, make fewer mistakes, and revise smarter.",
    author: "Mr. Kumar",
    role: "Mathematics Teacher",
    avatar: "👨‍🏫",
  },
  {
    id: 3,
    rating: 5,
    content:
      "From day one, the mission-style learning built my accuracy and speed. The explanations were super clear—perfect for competitive exam preparation.",
    author: "Priya Verma",
    role: "NEET Aspirant",
    avatar: "👩‍💻",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-[var(--bg)] reveal-up">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14">

          {/* Badge */}
          <div
            className="badge-fix inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-teal-100 text-[var(--brand-teal)] border border-teal-200 font-semibold shadow-sm overflow-hidden"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--brand-yellow)] animate-pulse"></span>

            <span className="badge-text reveal-typing">
              Trusted by 10,000+ Learners Nationwide
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-dark)] mb-3 reveal-typing">
            What Students & Mentors Say
          </h2>

          {/* Paragraph */}
          <p className="text-[var(--text-muted)] max-w-3xl mx-auto text-base sm:text-lg reveal-typing">
            Real reviews from learners and educators who transformed their maths journey with Mission X.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {testimonialsData.map((t) => (
            <MouseTilt key={t.id}>
              <div
                className="p-7 bg-white rounded-2xl shadow-sm border border-gray-200 
                h-full flex flex-col justify-between hover:shadow-xl transition-all
                duration-300 reveal-card"
              >

                {/* Rating */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-500 text-lg">★</span>
                    ))}
                  </div>

                  <span className="px-3 py-1 text-xs rounded-full bg-teal-50 
                    text-teal-700 border border-teal-200 font-semibold">
                    Top Rated
                  </span>
                </div>

                {/* Content */}
                <blockquote className="text-[var(--text)] italic leading-relaxed mb-6 reveal-typing">
                  “{t.content}”
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">

                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center 
                    text-2xl shadow-sm reveal-img">
                    {t.avatar}
                  </div>

                  <div>
                    <div className="font-semibold text-[var(--text-dark)] reveal-typing">
                      {t.author}
                    </div>

                    <div className="text-sm text-gray-500 reveal-typing">
                      {t.role}
                    </div>
                  </div>

                </div>

              </div>
            </MouseTilt>
          ))}

        </div>
      </div>
    </section>
  );
}
