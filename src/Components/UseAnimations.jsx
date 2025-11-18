// src/Components/UseAnimations.jsx
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function UseAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-typing");

    elements.forEach((el) => {
      const split = new SplitType(el, { types: "chars" });

      gsap.from(split.chars, {
        opacity: 0,
        y: 10,
        stagger: 0.03, // speed of typing
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
      });
    });
  }, []);

  return null;
}
