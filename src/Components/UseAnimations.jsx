// src/Components/UseAnimations.jsx
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

export default function UseAnimations() {
  useEffect(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((el) => {
      const items = el.querySelectorAll(".reveal-item");

      // Main element reveal
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });

      // Inner items
      if (items.length > 0) {
        gsap.from(items, {
          opacity: 0,
          y: 20,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      }
    });
  }, []);

  return null;
}
