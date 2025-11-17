import { useRef, useEffect } from "react";

export default function MouseTilt({
  children,
  className = "",
  maxTilt = 10,    // rotation angle
  scale = 1.02,    // gentle zoom
  transitionSpeed = 200, // ms
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Disable tilt on mobile/touch
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouch) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Convert to rotation range -maxTilt to maxTilt
      const rotateX = ((y / rect.height) - 0.5) * -2 * maxTilt;
      const rotateY = ((x / rect.width) - 0.5) * 2 * maxTilt;

      el.style.transform = `
        perspective(800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(${scale})
      `;
    };

    const handleEnter = () => {
      el.style.transition = `transform ${transitionSpeed}ms ease`;
    };

    const handleLeave = () => {
      el.style.transition = `transform ${transitionSpeed}ms ease`;
      el.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale(1)";
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [maxTilt, scale, transitionSpeed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: "perspective(800px) rotateX(0) rotateY(0) scale(1)",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
