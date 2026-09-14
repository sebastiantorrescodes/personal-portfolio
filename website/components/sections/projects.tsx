import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Sonar — A&R Intelligence Agent",
    description:
      "An autonomous AI talent-scouting agent for the music industry: given a natural-language brief, it researches, cross-validates, scores, and drafts outreach for artists, streaming results live as artist cards.",
    note: "Won \"Most Innovative Project\" — Enterprise AI Agent Hackathon",
    tags: ["TypeScript", "Next.js", "Anthropic Claude", "MCP", "Redis"],
    href: undefined,
  },
  {
    id: 2,
    title: "The Not Project — Storytelling Platform",
    description:
      "A live storytelling platform where users read and submit stories — articles, photo series, short films — filterable by category and NYC borough, with an editorial admin dashboard.",
    note: "Live in production · 235+ commits over ~1.5 years",
    tags: ["Next.js", "TypeScript", "React", "Express"],
    href: "https://thenotproject.com",
  },
  {
    id: 3,
    title: "Elden Ring Proximity Voice Chat & Murder Mystery Mod",
    description:
      "A custom C++ mod that reverse-engineers the game's memory to track player position in real time, powering proximity voice chat and a murder-mystery game mode for a live community playtest.",
    tags: ["C++", "Electron", "WebRTC"],
    href: undefined,
  },
  {
    id: 4,
    title: "Slider — AI-Powered PowerPoint Add-in",
    description:
      "A PowerPoint add-in with a conversational AI interface that generates full slides — research, charts, images — from natural-language prompts.",
    note: "2nd place — St. John's Hacks",
    tags: ["React", "TypeScript", "Office.js", "OpenAI"],
    href: undefined,
  },
  {
    id: 5,
    title: "Music Key Detection Pipeline",
    description:
      "An end-to-end Hadoop/Spark pipeline predicting a song's musical key from audio, from HDFS ingestion through Spark MLlib feature engineering to a trained classifier (~72% test accuracy).",
    tags: ["Python", "Hadoop", "Spark", "Docker"],
    href: undefined,
  },
  {
    id: 6,
    title: "Siphon — Desktop YouTube Audio/Video Extractor",
    description:
      "A cross-platform desktop app for extracting audio and video from YouTube links, with live download progress and format previews.",
    tags: ["Electron", "React", "TypeScript"],
    href: undefined,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mt-24 max-w-xl scroll-mt-24 lg:mt-36 lg:max-w-2xl"
    >
      <div className="-mx-4 space-y-2">
        {PROJECTS.map((project) => {
          const Wrapper = project.href ? "a" : "div";
          return (
            <Wrapper
              key={project.id}
              {...(project.href
                ? { href: project.href, target: "_blank", rel: "noreferrer" }
                : {})}
              className="group block rounded-md p-4 transition-colors hover:bg-navy-light"
            >
              <h3 className="inline-flex items-center gap-1.5 font-medium text-slate-lightest transition-colors group-hover:text-accent">
                {project.title}
                {project.href && (
                  <ArrowUpRight
                    size={16}
                    className="text-slate transition-colors group-hover:text-accent"
                  />
                )}
              </h3>
              <p className="mt-2 leading-relaxed text-slate">
                {project.description}
              </p>
              {project.note && (
                <p className="mt-2 font-mono text-xs text-accent">
                  {project.note}
                </p>
              )}
              <ul className="mt-4 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <li key={tag} className="font-mono text-xs text-slate">
                    {tag}
                  </li>
                ))}
              </ul>
            </Wrapper>
          );
        })}
      </div>

      <Link
        href="/projects"
        className="group mt-8 inline-flex items-center gap-2 font-mono text-sm text-accent"
      >
        View More Projects
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>
    </section>
  );
}
