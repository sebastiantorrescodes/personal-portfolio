"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

// TODO: swap in your real GitHub handle
const SOCIALS = [
  { id: "github", href: "https://github.com/yourusername", label: "GitHub", Icon: GithubIcon },
  { id: "linkedin", href: "https://linkedin.com/in/torres-codes", label: "LinkedIn", Icon: LinkedinIcon },
  { id: "email", href: "mailto:sebastian.torres.codes@gmail.com", label: "Email", Icon: Mail },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState(NAV_LINKS[0].id);

  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    // A section becomes active once its top has scrolled up past this line,
    // and stays active until the next section's top crosses it too. This
    // tracks correctly regardless of how tall or short a section is.
    const LINE = 200;

    const handleScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) {
        setActiveId(sections[sections.length - 1].id);
        return;
      }

      let current = sections[0].id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= LINE) {
          current = section.id;
        }
      }
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="flex flex-col justify-between gap-10 px-6 py-10 sm:px-10 sm:py-16 lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[400px] lg:px-16 lg:py-24">
      <div>
        <Image
          src="/avatar.jpg"
          alt="Sebastian Torres"
          width={130}
          height={130}
          priority
          className="h-[130px] w-[130px] rounded-full object-cover"
        />
        <h1 className="mt-6 text-4xl font-bold whitespace-nowrap text-white">
          Sebastian Torres
        </h1>
        <h2 className="mt-3 text-lg font-medium text-slate-light sm:text-xl">
          Full-Stack Developer &amp; Data Scientist
        </h2>
        <p className="mt-4 max-w-xs leading-relaxed text-slate">
          I build full-stack products and AI-driven tools — from pixel-perfect
          interfaces to the data pipelines underneath.
        </p>

        <nav className="mt-14 hidden lg:block">
          <ul className="space-y-4">
            {NAV_LINKS.map(({ id, label }) => {
              const isActive = activeId === id;
              return (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="group flex items-center gap-4 py-1"
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        isActive
                          ? "w-16 bg-white"
                          : "w-8 bg-slate group-hover:w-16 group-hover:bg-slate-light"
                      }`}
                    />
                    <span
                      className={`font-mono text-xs tracking-widest uppercase transition-colors ${
                        isActive ? "text-white" : "text-slate group-hover:text-slate-light"
                      }`}
                    >
                      {label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul className="flex items-center gap-5">
        {SOCIALS.map(({ id, href, label, Icon }) => (
          <li key={id}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="block text-slate transition-colors hover:text-accent"
            >
              <Icon width={20} height={20} />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
