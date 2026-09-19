import SectionHeading from "@/components/layout/section-heading";

const SKILLS = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "C++"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend & Infra",
    items: ["Node.js", "Express", "Supabase", "AWS", "Docker", "Redis"],
  },
  {
    category: "AI / ML & Data",
    items: [
      "OpenAI API",
      "Anthropic Claude",
      "MCP",
      "Machine Learning",
      "Hadoop",
      "Spark",
    ],
  },
  {
    category: "Tools & Integrations",
    items: ["Git", "Electron", "Office.js", "Google OAuth", "FHIR/HL7"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto mt-24 max-w-xl scroll-mt-24 lg:mt-36 lg:max-w-2xl"
    >
      <SectionHeading>Skills</SectionHeading>
      <div className="space-y-6">
        {SKILLS.map(({ category, items }) => (
          <div
            key={category}
            className="grid gap-1 sm:grid-cols-[160px_1fr] sm:gap-8"
          >
            <span className="font-mono text-xs tracking-wide text-slate uppercase">
              {category}
            </span>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
