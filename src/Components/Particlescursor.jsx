// src/Components/ParticleCursor.jsx
import { useEffect, useRef } from "react";

export default function ParticleCursor({
  size = 26,
  color = "rgba(16,115,115,0.55)",
  glow = "rgba(16,115,115,0.35)",
  blur = 20,
  smooth = 0.12
}) {
  const cursorRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);

  const lerp = (a, b, n) => a + (b - a) * n;

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const update = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, smooth);
      pos.current.y = lerp(pos.current.y, target.current.y, smooth);

      cursor.style.transform = `translate3d(${pos.current.x - size / 2}px, ${
        pos.current.y - size / 2
      }px, 0)`;

      frameRef.current = requestAnimationFrame(update);
    };

    const move = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    // Start animation loop only ONCE
    frameRef.current = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("mousemove", move);
    };
  }, [smooth, size]);

  // Hide on mobile
  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch && cursorRef.current) {
      cursorRef.current.style.display = "none";
    }
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999]"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        boxShadow: `
          0 0 ${blur}px ${glow},
          0 0 ${blur * 1.4}px ${glow}
        `,
        opacity: 0.9,
        left: 0,
        top: 0,
        transform: "translate3d(-50%, -50%, 0)",
        mixBlendMode: "normal"
      }}
    />
  );
}
