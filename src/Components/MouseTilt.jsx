

import { useRef, useEffect } from "react";

export default function MouseTilt({
  children,
  className = "",
  strength = 18,   // max translation in px
  scale = 1.03,    // hover scale
  shadowBlur = 28, // shadow blur intensity
}) {
  const root = useRef(null);
  const pos = useRef({ tx: 0, ty: 0, rx: 0, ry: 0 });
  const target = useRef({ tx: 0, ty: 0, rx: 0, ry: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    // disable on touch devices
    const isTouch = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    if (isTouch) {
      el.style.transform = "";
      el.style.transition = "";
      el.style.boxShadow = "";
      return;
    }

    // helper to lerp
    const lerp = (a, b, n) => (1 - n) * a + n * b;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const x = (e.clientX - cx) / (rect.width / 2); // -1 .. 1
      const y = (e.clientY - cy) / (rect.height / 2); // -1 .. 1

      // Clamp
      const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

      target.current.tx = clamp(x * strength, -strength, strength);
      target.current.ty = clamp(y * strength, -strength, strength);

      // small rotate based on x/y (optional subtle)
      target.current.rx = clamp(-y * (strength / 6), -6, 6);
      target.current.ry = clamp(x * (strength / 6), -6, 6);

      // ensure quick transition start (remove long transition)
      el.style.transition = "transform 0s ease";
    };

    const onEnter = () => {
      // scale up softly
      el.style.willChange = "transform";
      el.style.transition = "box-shadow 220ms ease, transform 220ms cubic-bezier(.2,.9,.2,1)";
      // subtle initial shadow
      el.style.boxShadow = `0 10px ${Math.round(shadowBlur * 0.6)}px rgba(2,6,23,0.06)`;
    };

    const onLeave = () => {
      // reset targets
      target.current = { tx: 0, ty: 0, rx: 0, ry: 0 };
      // smooth reset
      el.style.transition = "transform 360ms cubic-bezier(.2,.9,.2,1), box-shadow 300ms ease";
      el.style.transform = `perspective(900px) translate3d(0px,0px,0px) rotateX(0deg) rotateY(0deg) scale(1)`;
      el.style.boxShadow = `0 6px ${Math.round(shadowBlur * 0.25)}px rgba(2,6,23,0.05)`;
    };

    const animate = () => {
      // lerp current -> target
      pos.current.tx = lerp(pos.current.tx, target.current.tx, 0.14);
      pos.current.ty = lerp(pos.current.ty, target.current.ty, 0.14);
      pos.current.rx = lerp(pos.current.rx, target.current.rx, 0.12);
      pos.current.ry = lerp(pos.current.ry, target.current.ry, 0.12);

      const t = pos.current;
      // transform: translate + rotate + scale
      const transform = `perspective(900px) translate3d(${t.tx}px, ${t.ty}px, 0px) rotateX(${t.rx}deg) rotateY(${t.ry}deg) scale(${scale})`;
      el.style.transform = transform;

      // dynamic shadow based on Y distance (subtle)
      const absY = Math.abs(t.ty);
      const dynamicBlur = Math.round(shadowBlur + absY * 0.8);
      el.style.boxShadow = `0 ${10 + Math.abs(t.ty) * 0.6}px ${dynamicBlur}px rgba(2,6,23,0.07)`;

      raf.current = requestAnimationFrame(animate);
    };

    // events
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    // start RAF
    raf.current = requestAnimationFrame(animate);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, [strength, scale, shadowBlur]);

  // wrapper styling: ensure smoothness and pointer-events preserved
  return (
    <div
      ref={root}
      className={`will-change-transform ${className}`}
      style={{
        transform: "translate3d(0,0,0) scale(1)",
        transition: "transform 320ms cubic-bezier(.2,.9,.2,1), box-shadow 300ms ease",
        boxShadow: `0 6px ${Math.round(shadowBlur * 0.25)}px rgba(2,6,23,0.05)`,
        borderRadius: "inherit",
      }}
    >
      {children}
    </div>
  );
}
