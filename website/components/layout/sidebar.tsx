"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { EMAIL } from "@/lib/constants";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  // { id: "contact", label: "Contact" },
];

const RESUME_HREF = "/sebastian-torres-resume.pdf";

// TODO: swap in your real GitHub handle
const SOCIALS = [
  { id: "github", href: "https://github.com/sebastiantorrescodes", label: "GitHub", Icon: GithubIcon },
  { id: "linkedin", href: "https://linkedin.com/in/torres-codes", label: "LinkedIn", Icon: LinkedinIcon },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState(NAV_LINKS[0].id);
  const [emailCopied, setEmailCopied] = useState(false);

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

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <aside className="flex flex-col justify-between gap-10 px-6 py-10 sm:px-10 sm:py-16 lg:sticky lg:top-0 lg:h-screen lg:w-[400px] lg:shrink-0 lg:px-16 lg:py-24">
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
        <h2 className="mt-3 text-lg font-medium text-white sm:text-xl">
          Full-Stack Developer
        </h2>
        <p className="mt-4 max-w-xs leading-relaxed text-slate">
          I build full-stack applications with integrated AI/ML systems.
        </p>

        <a
          href={RESUME_HREF}
          download
          className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-mono text-xs tracking-widest text-accent uppercase shadow-lg shadow-black/10 backdrop-blur-md transition-colors hover:bg-accent/20"
        >
          Resume
          <ArrowUpRight width={14} height={14} />
        </a>

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
        <li className="relative">
          <button
            type="button"
            onClick={copyEmail}
            aria-label="Copy email address"
            className="block text-slate transition-colors hover:text-accent"
          >
            {emailCopied ? <Check width={20} height={20} /> : <Mail width={20} height={20} />}
          </button>
          <span
            role="status"
            className={`pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-md bg-navy-light px-2 py-1 font-mono text-xs whitespace-nowrap text-slate-lightest transition-opacity duration-200 ${
              emailCopied ? "opacity-100" : "opacity-0"
            }`}
          >
            Copied!
          </span>
        </li>
      </ul>
    </aside>
  );
}
