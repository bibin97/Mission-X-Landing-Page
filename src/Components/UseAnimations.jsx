// src/Components/UseAnimations.jsx
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function UseAnimations() {
  useEffect(() => {
    // GSAP context to avoid double execution
    const ctx = gsap.context(() => {

      const sections = gsap.utils.toArray(".reveal-up");

      sections.forEach((sec) => {
        const items = sec.querySelectorAll(".reveal-item");

        // Main section animation
        gsap.fromTo(
          sec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
              once: true,
            }
          }
        );

        // Inner items animation
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sec,
                start: "top 85%",
                once: true,
              }
            }
          );
        }
      });

      // 🚀 THE IMPORTANT FIX FOR VERCEL:
      // Forces ScrollTrigger to calculate positions AFTER page fully loads
      window.addEventListener("load", () => {
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 200);
      });

    });

    return () => ctx.revert();
  }, []);

  return null;
}
