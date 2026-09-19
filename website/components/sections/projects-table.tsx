"use client";

import { useState } from "react";
import Link from "next/link";

const CATEGORIES = ["All", "AI & Data", "Full-Stack"] as const;
type Category = (typeof CATEGORIES)[number];

const ALL_PROJECTS: {
  year: string;
  title: string;
  description: string;
  tags: string[];
  categories: Exclude<Category, "All">[];
  slug?: string;
}[] = [
  {
    year: "2026",
    title: "Music Key Detection Pipeline",
    description:
      "End-to-end Hadoop/Spark pipeline predicting a song's musical key from audio (~72% test accuracy).",
    tags: ["Python", "Hadoop", "Spark", "Docker"],
    categories: ["AI & Data"],
  },
  {
    year: "2026",
    title: "Sonar · A&R Intelligence Agent",
    description:
      "Autonomous AI agent that researches, scores, and drafts outreach for music talent scouting.",
    tags: ["TypeScript", "Next.js", "Anthropic Claude", "Redis"],
    categories: ["AI & Data", "Full-Stack"],
    slug: "sonar",
  },
  {
    year: "2026",
    title: "Slider · AI-Powered PowerPoint Add-in",
    description:
      "Conversational AI PowerPoint add-in that generates slides, charts, and images from prompts.",
    tags: ["React", "TypeScript", "Office.js", "OpenAI"],
    categories: ["AI & Data", "Full-Stack"],
  },
  {
    year: "2026",
    title: "Elden Ring Proximity Voice Chat & Murder Mystery Mod",
    description:
      "Reverse-engineered game mod powering real-time proximity voice chat and a murder-mystery mode.",
    tags: ["C++", "Electron", "WebRTC"],
    categories: ["Full-Stack"],
  },
  {
    year: "2026",
    title: "Siphon · Desktop YouTube Audio/Video Extractor",
    description:
      "Cross-platform desktop app for extracting audio and video from YouTube links.",
    tags: ["Electron", "React", "TypeScript"],
    categories: ["Full-Stack"],
  },
  {
    year: "2026",
    title: "NOVI Restaurant Website",
    description:
      "Freelance-built website and online ordering site for an Italian restaurant, pulling its live menu via the Toast API and matching the restaurant's in-store branding.",
    tags: ["Next.js", "Tailwind CSS", "Toast API"],
    categories: ["Full-Stack"],
  },
  {
    year: "2026",
    title: "Ledger · Wealth Management Platform",
    description:
      "Internal wealth-management tool for investment advisors to track a book of clients and their positions across private deals, with Postgres row-level security enforcing role-based access to each advisor's book.",
    tags: ["Next.js", "TypeScript", "Supabase", "Google OAuth", "PostgreSQL RLS", "Tailwind CSS"],
    categories: ["Full-Stack"],
  },
  {
    year: "2025",
    title: "Hit-Song-Predictor",
    description:
      "Investigated whether Spotify audio features alone can predict Billboard hits.",
    tags: ["Python", "scikit-learn", "LightGBM"],
    categories: ["AI & Data"],
  },
  {
    year: "2025",
    title: "VCRTS · Vehicular Cloud Real-Time System",
    description:
      "Client-server Java app for scheduling vehicle repair jobs under a vehicular cloud model.",
    tags: ["Java", "MySQL", "Swing"],
    categories: ["Full-Stack"],
  },
  {
    year: "2025",
    title: "The Not Project",
    description:
      "Live storytelling platform for user-submitted stories, filterable by category and NYC borough.",
    tags: ["Next.js", "TypeScript", "React", "Express"],
    categories: ["Full-Stack"],
  },
  {
    year: "2025",
    title: "YouTube Clone",
    description:
      "Microservices video-sharing platform (upload → transcode → stream) built from a NeetCode tutorial to learn GCP: Cloud Storage, Pub/Sub, and Firestore.",
    tags: ["Next.js", "TypeScript", "Google Cloud Storage", "Pub/Sub", "Firestore", "Cloud Run"],
    categories: ["Full-Stack"],
  },
  {
    year: "2024",
    title: "Heart Disease Prediction & Analysis",
    description:
      "ML workflow comparing decision trees, ensembles, and clustering to predict heart disease.",
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
                Description
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
                <td className="max-w-xs px-4 py-5 align-top text-slate">
                  {project.description}
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
