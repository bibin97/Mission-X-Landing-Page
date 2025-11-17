import { useEffect, useRef } from "react";

export default function ParticleCursor({
  size = 24,
  color = "rgba(0,150,136,0.55)",
  glow = "rgba(0,150,136,0.4)",
  blur = 25,
  smooth = 0.15,
}) {
  const cursorRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const frame = useRef(null);

  const lerp = (a, b, n) => a + (b - a) * n;

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const update = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, smooth);
      pos.current.y = lerp(pos.current.y, target.current.y, smooth);

      cursor.style.transform = `translate3d(${pos.current.x - size / 2}px, ${
        pos.current.y - size / 2
      }px, 0)`;

      frame.current = requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", move);
    frame.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(frame.current);
    };
  }, [smooth, size]);

  // Hide on touch devices
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) {
      cursorRef.current.style.display = "none";
    }
  }, []);

  return (
    <div
      id="particle-cursor"
      ref={cursorRef}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 999999,
        mixBlendMode: "normal",
        boxShadow: `
          0 0 ${blur}px ${glow},
          0 0 ${blur * 1.4}px ${glow}
        `,
      }}
    ></div>
  );
}
