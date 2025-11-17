// src/Components/ParticleCursor.jsx
import { useEffect, useRef } from "react";

export default function ParticleCursor({
  size = 22,
  color = "rgba(16,115,115,0.25)",
  glow = "rgba(16,115,115,0.35)",
  blur = 16,
  smooth = 0.15
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

      cursor.style.transform = `translate3d(${pos.current.x - size / 2}px,${
        pos.current.y - size / 2
      }px,0)`;

      frameRef.current = requestAnimationFrame(update);
    };

    const move = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);
    frameRef.current = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("mousemove", move);
    };
  }, [smooth, size]);

  // Disable on touch screens
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) {
      if (cursorRef.current) cursorRef.current.style.display = "none";
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
          0 0 ${blur}px ${glow}
        `,
        left: 0,
        top: 0,
        opacity: 1,
        transform: "translate3d(-50%, -50%, 0)",
        mixBlendMode: "overlay"   // FIXED MODE (SAFE)
      }}
    />
  );
}
