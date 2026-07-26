"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isBig, setIsBig] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          target.closest(".interactive") ||
          target.classList.contains("offering") ||
          target.classList.contains("tour-card") ||
          target.classList.contains("event-card"))
      ) {
        setIsBig(true);
      } else {
        setIsBig(false);
      }
    };

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-multiply transition-[width,height,background-color,opacity] duration-300 -translate-x-1/2 -translate-y-1/2 ${
        isBig
          ? "w-12 h-12 bg-[#C9963A] opacity-35"
          : "w-2.5 h-2.5 bg-[#C9963A] opacity-100"
      }`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
      }}
    />
  );
}
