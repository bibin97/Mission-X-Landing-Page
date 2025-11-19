import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function UseAnimations() {
  useEffect(() => {

    const ctx = gsap.context(() => {

      /* =====================================================
         1. ONE-TIME TYPING ANIMATION (SUPER SMOOTH)
      ===================================================== */
      const typingElements = document.querySelectorAll(".reveal-typing");

      typingElements.forEach((el) => {
        const text = new SplitType(el, { types: "chars" });

        gsap.from(text.chars, {
          opacity: 0,
          y: 5,
          stagger: 0.015,
          duration: 0.5,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none", // only ONCE
          },
        });
      });

      /* =====================================================
         2. SECTION FADE-UP (ZERO LAG)
      ===================================================== */
      gsap.utils.toArray(".reveal-up").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none", // no replay
          },
        });
      });

      /* =====================================================
         3. SCROLLTRIGGER GLOBAL OPTIMIZATION
      ===================================================== */
      ScrollTrigger.defaults({
        markers: false,
        once: true,      // NEVER rerun
      });

    });

    return () => ctx.revert();
  }, []);

  return null;
}
