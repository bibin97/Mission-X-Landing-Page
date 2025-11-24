import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function UseAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      /* =====================================================
         1. HIGH WAVE TEXT ANIMATION (ALL TEXT)
      ===================================================== */
      const elements = document.querySelectorAll(".reveal-typing");

      elements.forEach((el) => {
        const text = new SplitType(el, { types: "chars" });

        gsap.from(text.chars, {
          opacity: 0,
          y: 25,
          rotation: 12,
          stagger: 0.045,
          duration: 0.7,
          ease: "back.out(2.8)",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      /* =====================================================
         2. BUTTON ENTRY ANIMATION
      ===================================================== */
      gsap.utils.toArray(".reveal-btn").forEach((btn) => {
        gsap.from(btn, {
          opacity: 0,
          scale: 0.8,
          y: 20,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: btn,
            start: "top 90%",
          },
        });
      });

      /* =====================================================
         3. CARD FADE + POP ANIMATION
      ===================================================== */
      gsap.utils.toArray(".reveal-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          scale: 0.92,
          duration: 0.7,
          ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
          },
        });
      });

      /* =====================================================
         4. IMAGE FLOAT-IN ANIMATION
      ===================================================== */
      gsap.utils.toArray(".reveal-img").forEach((img) => {
        gsap.from(img, {
          opacity: 0,
          y: 40,
          scale: 0.95,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
          },
        });
      });

      /* =====================================================
         5. SECTION FADE-UP
      ===================================================== */
      gsap.utils.toArray(".reveal-up").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
          },
        });
      });

      /* =====================================================
         6. GSAP Optimization
      ===================================================== */
      ScrollTrigger.defaults({
        once: true,
        markers: false,
      });

    });

    return () => ctx.revert();
  }, []);

  return null;
}
