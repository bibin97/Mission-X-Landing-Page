import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function UseAnimations() {
  useEffect(() => {

    const ctx = gsap.context(() => {

      /* =====================================================
         1. HIGH INTENSITY OYUKKU WAVE TEXT ANIMATION
            (Apply to ALL .reveal-typing)
      ===================================================== */
      const elements = document.querySelectorAll(".reveal-typing");

      elements.forEach((el) => {
        const text = new SplitType(el, { types: "chars" });

        gsap.from(text.chars, {
          opacity: 0,
          y: 20,                     // stronger lift
          rotation: 12,              // wave twist
          stagger: 0.045,            // stronger stagger
          duration: 0.65,
          ease: "back.out(2.5)",     // elastic wave feel
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      /* =====================================================
         2. SECTION FADE-UP ANIMATION
      ===================================================== */
      gsap.utils.toArray(".reveal-up").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });

      /* =====================================================
         3. Global ScrollTrigger Optimization
      ===================================================== */
      ScrollTrigger.defaults({
        markers: false,
        once: true,   // run animation ONLY once
      });

    });

    return () => ctx.revert();
  }, []);

  return null;
}
