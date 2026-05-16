import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function UseAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      /* =====================================================
         1. CLEAN PREMIUM FADE-IN FOR HEADINGS & TEXT
         (Replaces legacy typing & hover wave animations)
      ===================================================== */
      gsap.utils.toArray(".reveal-typing, .hover-wave, .reveal-up").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 25,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true
          },
        });
      });

      /* =====================================================
         2. BUTTON REVEAL (SMOOTH PREMIUM FADE)
      ===================================================== */
      gsap.utils.toArray(".reveal-btn").forEach((btn) => {
        gsap.from(btn, {
          opacity: 0,
          scale: 0.95,
          y: 15,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: btn,
            start: "top 90%",
            once: true
          }
        });
      });

      /* =====================================================
         3. CARD PREMIUM ENTRANCE (SMOOTH, NO BOUNCE)
      ===================================================== */
      gsap.utils.toArray(".reveal-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 35,
          scale: 0.96,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            once: true
          }
        });
      });

      /* =====================================================
         4. IMAGE PREMIUM FLOAT-IN
      ===================================================== */
      gsap.utils.toArray(".reveal-img").forEach((img) => {
        gsap.from(img, {
          opacity: 0,
          y: 30,
          scale: 0.98,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            once: true
          }
        });
      });

      /* =====================================================
         5. SLIDE-IN BUTTONS (SMOOTH PREMIUM)
      ===================================================== */
      gsap.utils.toArray(".slide-from-left").forEach((btn) => {
        gsap.from(btn, {
          opacity: 0,
          x: -40,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: btn,
            start: "top 95%",
            once: true
          }
        });
      });

      gsap.utils.toArray(".slide-from-right").forEach((btn) => {
        gsap.from(btn, {
          opacity: 0,
          x: 40,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: btn,
            start: "top 95%",
            once: true
          }
        });
      });

      /* =====================================================
         GSAP GLOBAL SETTINGS
      ===================================================== */
      ScrollTrigger.defaults({
        markers: false,
        once: true
      });

    });

    return () => ctx.revert();
  }, []);

  return null;
}
