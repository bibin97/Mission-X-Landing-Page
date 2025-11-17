// src/Components/UseAnimations.jsx
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function UseAnimations() {
  useEffect(() => {
    // Kill all old triggers (important)
    ScrollTrigger.getAll().forEach(t => t.kill());

    const sections = gsap.utils.toArray("section.reveal-up");

    sections.forEach((sec) => {
      gsap.fromTo(
        sec,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 85%",
            once: true,
            // VERY IMPORTANT — ensures GSAP does NOT leave opacity:0
            onLeaveBack: () => gsap.set(sec, { opacity: 1 }),
          },
        }
      );
    });
  }, []);

  return null;
}
