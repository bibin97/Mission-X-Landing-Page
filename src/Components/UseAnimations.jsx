import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function UseAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      /* -------------------------------------------------- */
      /* NAVBAR FADE-IN (light, no lag)                     */
      /* -------------------------------------------------- */
      gsap.from(".navbar-reveal", {
        opacity: 0,
        y: -8,
        duration: 0.4,
        stagger: 0.08,
        ease: "power2.out",
      });

      /* -------------------------------------------------- */
      /* TYPING EFFECT (optimized, lightweight)             */
      /* -------------------------------------------------- */
      document.querySelectorAll(".reveal-typing").forEach((el) => {
        const split = new SplitType(el, { types: "chars" });
        gsap.from(split.chars, {
          opacity: 0,
          y: 8,
          stagger: 0.015,
          duration: 0.45,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
          },
        });
      });

      /* -------------------------------------------------- */
      /* REVEAL-ITEM (now ultra smooth, 0 lag)              */
      /* -------------------------------------------------- */
      gsap.utils.toArray(".reveal-item").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 25,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      });

    });

    return () => ctx.revert();
  }, []);

  return null;
}
