"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { projects } from "@/lib/project";
import Card from "../_components/card";

// Inline custom SVG icons to avoid bundler or version issues with lucide-react
const ChevronLeftIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [xOffset, setXOffset] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isDragActive, setIsDragActive] = useState(false);

  const updateBounds = () => {
    if (containerRef.current && sliderRef.current) {
      const containerWidth = containerRef.current.getBoundingClientRect().width;
      const sliderWidth = sliderRef.current.scrollWidth;
      const max = sliderWidth - containerWidth;
      setMaxScroll(max > 0 ? max : 0);
    }
  };

  useEffect(() => {
    updateBounds();
    window.addEventListener("resize", updateBounds);

    // Perform multiple checks as contents and fonts load
    const timer1 = setTimeout(updateBounds, 100);
    const timer2 = setTimeout(updateBounds, 500);
    const timer3 = setTimeout(updateBounds, 1000);

    return () => {
      window.removeEventListener("resize", updateBounds);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleNext = () => {
    setXOffset((prev) => {
      // Scroll by roughly one card width + gap (e.g. 400px card + 24px gap)
      const next = prev + 424;
      return next > maxScroll ? maxScroll : next;
    });
  };

  const handlePrev = () => {
    setXOffset((prev) => {
      const next = prev - 424;
      return next < 0 ? 0 : next;
    });
  };

  return (
    <section id="projects" className="relative w-full lg:min-h-screen bg-[#111827] text-white py-15 px-6 md:px-10 overflow-hidden flex flex-col items-center justify-center">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full flex flex-col relative z-10">

        {/* Header and Slide Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4 px-2">
          <div className="flex flex-col gap-4">
            <span className="text-teal-400 font-mono tracking-wider text-sm uppercase">My Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              My <span className="text-teal-400">Projects</span>
            </h2>
          </div>

          {/* Controls */}
          {maxScroll > 0 && (
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                disabled={xOffset <= 0}
                className="p-3.5 rounded-full border border-teal-500/40 bg-teal-500/5 text-teal-400 hover:text-zinc-400 hover:border-zinc-800 hover:bg-zinc-950/60 transition-all duration-300 disabled:opacity-40 disabled:hover:text-teal-400 disabled:hover:border-teal-500/40 disabled:hover:bg-teal-500/5 disabled:cursor-not-allowed"
                aria-label="Previous project"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={xOffset >= maxScroll}
                className="p-3.5 rounded-full border border-teal-500/40 bg-teal-500/5 text-teal-400 hover:text-zinc-400 hover:border-zinc-800 hover:bg-zinc-950/60 transition-all duration-300 disabled:opacity-40 disabled:hover:text-teal-400 disabled:hover:border-teal-500/40 disabled:hover:bg-teal-500/5 disabled:cursor-not-allowed"
                aria-label="Next project"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Sliding Viewport */}
        <div ref={containerRef} className="w-full overflow-hidden px-2 py-4">
          <motion.div
            ref={sliderRef}
            drag="x"
            dragConstraints={{ left: -maxScroll, right: 0 }}
            dragElastic={0.1}
            animate={{ x: -xOffset }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            onDragStart={() => setIsDragActive(true)}
            onDragEnd={(event, info) => {
              setIsDragActive(false);
              // Update xOffset based on where the drag ended, clamped to constraints
              setXOffset((prev) => {
                const newX = -prev + info.offset.x;
                const newOffset = -newX;
                return Math.max(0, Math.min(newOffset, maxScroll));
              });
            }}
            className={`flex gap-6 cursor-grab ${isDragActive ? "cursor-grabbing" : ""}`}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-[300px] sm:w-[360px] md:w-[400px] shrink-0 select-none"
              >
                <Card project={project} />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}