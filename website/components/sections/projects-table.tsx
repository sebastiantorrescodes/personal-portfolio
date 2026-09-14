"use client";

import { useState } from "react";
import Link from "next/link";

const CATEGORIES = ["All", "AI & Data", "Full-Stack"] as const;
type Category = (typeof CATEGORIES)[number];

const ALL_PROJECTS: {
  year: string;
  title: string;
  madeAt: string;
  tags: string[];
  categories: Exclude<Category, "All">[];
  slug?: string;
}[] = [
  {
    year: "2025 — Present",
    title: "The Not Project",
    madeAt: "Personal",
    tags: ["Next.js", "TypeScript", "React", "Express"],
    categories: ["Full-Stack"],
  },
  {
    year: "2026",
    title: "Music Key Detection Pipeline",
    madeAt: "Personal",
    tags: ["Python", "Hadoop", "Spark", "Docker"],
    categories: ["AI & Data"],
  },
  {
    year: "2026",
    title: "Sonar — A&R Intelligence Agent",
    madeAt: "Enterprise AI Agent Hackathon",
    tags: ["TypeScript", "Next.js", "Anthropic Claude", "Redis"],
    categories: ["AI & Data", "Full-Stack"],
    slug: "sonar",
  },
  {
    year: "2026",
    title: "Slider — AI-Powered PowerPoint Add-in",
    madeAt: "St. John's Hacks",
    tags: ["React", "TypeScript", "Office.js", "OpenAI"],
    categories: ["AI & Data", "Full-Stack"],
  },
  {
    year: "2025",
    title: "Hit-Song-Predictor",
    madeAt: "St. John's University",
    tags: ["Python", "scikit-learn", "LightGBM"],
    categories: ["AI & Data"],
  },
  {
    year: "2025",
    title: "VCRTS — Vehicular Cloud Real-Time System",
    madeAt: "St. John's University",
    tags: ["Java", "MySQL", "Swing"],
    categories: ["Full-Stack"],
  },
  {
    year: "—",
    title: "Elden Ring Proximity Voice Chat & Murder Mystery Mod",
    madeAt: "Personal",
    tags: ["C++", "Electron", "WebRTC"],
    categories: ["Full-Stack"],
  },
  {
    year: "—",
    title: "Siphon — Desktop YouTube Audio/Video Extractor",
    madeAt: "Personal",
    tags: ["Electron", "React", "TypeScript"],
    categories: ["Full-Stack"],
  },
  {
    year: "—",
    title: "Heart Disease Prediction & Analysis",
    madeAt: "Personal",
    tags: ["Python", "scikit-learn", "pandas"],
    categories: ["AI & Data"],
  },
];

export default function ProjectsTable() {
  const [filter, setFilter] = useState<Category>("All");

  const projects =
    filter === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((project) => project.categories.includes(filter));

  return (
    <div>
      <div className="mt-10 flex flex-wrap gap-2">
        {CATEGORIES.map((category) => {
          const isActive = filter === category;
          return (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
                isActive
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-navy-lightest text-slate hover:border-slate hover:text-slate-lightest"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="border-b border-navy-lightest">
              <th className="pr-4 pb-4 font-mono text-sm font-semibold text-white">
                Year
              </th>
              <th className="px-4 pb-4 font-mono text-sm font-semibold text-white">
                Project
              </th>
              <th className="px-4 pb-4 font-mono text-sm font-semibold text-white">
                Made at
              </th>
              <th className="pl-4 pb-4 font-mono text-sm font-semibold text-white">
                Built with
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project.title}
                className="border-b border-navy-lightest/60"
              >
                <td className="py-5 pr-4 align-top whitespace-nowrap text-slate">
                  {project.year}
                </td>
                <td className="max-w-xs px-4 py-5 align-top font-semibold text-slate-lightest">
                  {project.slug ? (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="transition-colors hover:text-accent"
                    >
                      {project.title}
                    </Link>
                  ) : (
                    project.title
                  )}
                </td>
                <td className="px-4 py-5 align-top whitespace-nowrap text-slate">
                  {project.madeAt}
                </td>
                <td className="py-5 pl-4 align-top">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs whitespace-nowrap text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
