// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import SlideButton from "./SlideButton";
import logo from "../assets/mxlogo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#hero", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#missions", label: "Missions" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#join", label: "Join" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 nav-glass transition-all duration-300 ${
        shrink ? "py-2 bg-white/80" : "py-4 bg-white/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <a href="#hero" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Mission X"
            className="h-12 sm:h-14 w-auto object-contain navbar-reveal"
          />
          <span className="hidden sm:inline-block text-lg font-semibold text-[var(--text-dark)] navbar-typing">
            Mission X
          </span>
        </a>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-medium text-[var(--text-dark)] group navbar-reveal"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[var(--brand-yellow)] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <SlideButton
          as="a"
          href="#join"
          className="px-4 py-2 rounded-full text-black font-semibold slide-btn btn-animate navbar-reveal"
          baseBg="#f8ba2b"
          fillColor="#f8ba2b"
        >
          Join Free
        </SlideButton>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setOpen((s) => !s)}
          className="md:hidden p-2 rounded-md bg-white border border-gray-200 navbar-reveal"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path
              d={open ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"}
              stroke="#083B3A"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden bg-white/95 border-t border-gray-200 transition-all duration-300 ${
          open ? "max-h-72 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="px-6 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 font-medium text-[var(--text-dark)] navbar-reveal"
            >
              {l.label}
            </a>
          ))}

          {/* MOBILE CTA */}
          <div className="pt-2 navbar-reveal">
       <SlideButton
  as="a"
  href="#join"
  className="navbar-desktop-cta px-4 py-2 rounded-full font-semibold slide-btn btn-animate navbar-reveal text-black"
  baseBg="#f8ba2b"
  textColor="#000"
>
  Join Free
</SlideButton>


          </div>
        </div>
      </div>
    </header>
  );
}
