// src/Components/UseAnimations.jsx
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function UseAnimations() {
  useEffect(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((el) => {
      const items = el.querySelectorAll(".reveal-item");

      // MAIN element (do NOT hide initially)
      gsap.from(el, {
        opacity: 1,        // always start visible
        y: 0,              // no hidden position
        duration: 0.001,   // instant reset (no blink)
      });

      // Smooth animation on scroll
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      // Inner item animation (optional)
      if (items.length > 0) {
        gsap.from(items, {
          opacity: 0,
          y: 18,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      }
    });
  }, []);

  return null;
}
