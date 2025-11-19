import MouseTilt from "../Components/MouseTilt";

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    content:
      "Mission X completely changed the way I understand Math. The missions helped me score above 95 effortlessly!",
    author: "Arushi Singh",
    role: "CBSE Student",
    avatar: "👩‍🎓",
  },
  {
    id: 2,
    rating: 5,
    content:
      "Well-structured missions + AI mentor = unbeatable combination. Students grasp concepts faster than ever.",
    author: "Mr. Kumar",
    role: "Math Teacher",
    avatar: "👨‍🏫",
  },
  {
    id: 3,
    rating: 4,
    content:
      "The mission-based learning boosted my confidence from day one. Highly recommended for exam preparation!",
    author: "Priya Verma",
    role: "NEET Aspirant",
    avatar: "👩‍💻",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[var(--bg)] py-24 lg:py-32 reveal-up">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14 reveal-item">

          {/* Badge */}
          <div className="badge-fix inline-flex items-center gap-2 px-4 py-2 rounded-full
  bg-teal-100 text-[var(--brand-teal)] border border-teal-200 font-semibold shadow-sm reveal-typing overflow-hidden">
  <span className="w-2 h-2 rounded-full bg-[var(--brand-yellow)] animate-pulse"></span>
  <span className="badge-text">Trusted by 10,000+ Students</span>
</div>


          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-dark)] mb-3 reveal-typing">
            What Students & Mentors Say
          </h2>

          {/* Paragraph */}
          <p className="text-[var(--text-muted)] max-w-3xl mx-auto text-base sm:text-lg reveal-typing">
            Real experiences from students and educators who achieved extraordinary results with Mission X.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {testimonialsData.map((t) => (
            <MouseTilt key={t.id}>
              <div
                className="p-7 bg-white rounded-2xl shadow-sm border border-gray-200 
                h-full flex flex-col justify-between hover:shadow-xl transition-all
                duration-300 reveal-item"
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
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center 
                    text-2xl shadow-sm">
                    {t.avatar}
                  </div>

                  <div>
                    <div className="font-semibold text-[var(--text-dark)] reveal-typing">
                      {t.author}
                    </div>
                    <div className="text-sm text-gray-500">{t.role}</div>
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
