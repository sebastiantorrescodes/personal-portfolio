"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="lg:hidden" />
      <h2
        className={`sticky top-0 z-20 -mx-6 mb-6 bg-navy/30 px-6 py-3 text-lg font-bold text-white backdrop-blur-md transition-shadow duration-300 sm:-mx-10 sm:px-10 lg:hidden ${
          stuck ? "shadow-lg shadow-black/10" : "shadow-none"
        }`}
      >
        {children}
      </h2>
    </>
  );
}
