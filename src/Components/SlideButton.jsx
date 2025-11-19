// src/Components/SlideButton.jsx
import { useRef } from "react";

export default function SlideButton({
  children,
  className = "",
  as = "button",
  href,
  baseBg = "#f8ba2b",
  fillColor = "#f8ba2b",
  textColor = "#000",              // BLACK TEXT
  borderColor = "#f8ba2b"          // YELLOW BORDER
}) {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.06}px, ${y * 0.06}px)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transform = `translate(0,0)`;
  };

  const Component = as;

  return (
    <Component
      ref={btnRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden inline-flex items-center justify-center font-semibold rounded-full px-6 py-3 transition-all duration-300 shadow-md border ${className}`}
      style={{
        background: baseBg,
        color: textColor,
        borderColor: borderColor,         // YELLOW BORDER
      }}
    >
      <span
        className="absolute inset-0 -left-full transition-all duration-500 ease-out group-hover:left-0"
        style={{
          background: fillColor,
          zIndex: 0,
        }}
      />
      <span className="relative z-10">{children}</span>
    </Component>
  );
}
