import { useRef } from "react";

export default function MagneticButton({
  children,
  href = "#",
  className = "",
  bg = "#f8ba2b",
  icon = null,
}) {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    btn.style.transform = `translate(0px, 0px) scale(1)`;
  };

  return (
    <a
      href={href}
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        inline-flex items-center justify-center gap-2
        px-6 py-3 rounded-full font-semibold 
        shadow-md hover:shadow-xl transition-all duration-300
        text-black 
        ${className}
      `}
      style={{
        backgroundColor: bg,
        boxShadow:
          "0 0 8px rgba(0,0,0,0.15), 0 0 12px rgba(248,186,43,0.35)",
      }}
    >
      {icon}
      {children}
    </a>
  );
}
