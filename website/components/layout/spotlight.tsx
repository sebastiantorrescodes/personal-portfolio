"use client";

import { useEffect, useRef } from "react";

export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      ref.current?.style.setProperty("--spotlight-x", `${e.clientX}px`);
      ref.current?.style.setProperty("--spotlight-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 mix-blend-screen animate-[spotlight-pulse_2s_ease-in-out_infinite]"
      style={{
        background:
          "radial-gradient(650px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(168, 61, 86, 0.22), transparent 80%)",
      }}
    />
  );
}
