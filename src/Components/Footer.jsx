// src/Components/Footer.jsx
// Mission X — Premium Footer (Light Gray Theme + Teal Accents)

export default function Footer() {
  return (
    <footer className="mt-24 py-16 bg-[var(--bg)] border-t border-gray-200 reveal-up">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Navigation */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 reveal-item">
          {[
            { label: "Home", href: "#hero" },
            { label: "Features", href: "#features" },
            { label: "Missions", href: "#missions" },
            { label: "Testimonials", href: "#testimonials" },
            { label: "Join", href: "#join" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="text-[var(--text-dark)] font-medium text-sm sm:text-base
              hover:text-[var(--brand-teal)] transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Brand Statement */}
        <div className="text-center mb-8 reveal-item">
          <h3 className="text-xl font-semibold text-[var(--brand-teal)]">
            Mission X — Learn Smarter. Score Higher.
          </h3>
          <p className="text-[var(--text-muted)] text-sm mt-2 max-w-xl mx-auto">
            India’s most refined mission-based learning system designed to build confidence,
            improve understanding, and help every student achieve their highest potential.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-8 reveal-item"></div>

        {/* Bottom Copyright */}
        <div className="text-center text-xs text-[var(--text-muted)] reveal-item">
          © {new Date().getFullYear()} <span className="text-[var(--brand-teal)] font-semibold">
            Mission X
          </span>. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
