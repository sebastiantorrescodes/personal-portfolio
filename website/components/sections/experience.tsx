const EXPERIENCE = [
  {
    id: 1,
    date: "MAY 2026 — PRESENT",
    title: "Freelance Software & Technology Consultant",
    company: "B2B Tek",
    description:
      "Software development and technology consulting for small business clients — full-stack web apps with third-party integrations (Toast POS, Google OAuth), plus hardware and infrastructure setup.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Google OAuth"],
  },
  {
    id: 2,
    date: "AUG 2025 — PRESENT",
    title: "Research Assistant / Full-Stack Developer",
    company: "Bukhari Lab · Medicaddie (NSF-funded)",
    description:
      "Build bi-directional EHR integrations (Athena, Epic) using SMART on FHIR and HL7, design API endpoints powering a pre-submission billing audit engine, and lead the platform's UI/UX redesign.",
    tags: ["React", "Tailwind CSS", "Python", "SQL", "FHIR/HL7"],
  },
  {
    id: 3,
    date: "SEP 2025 — MAY 2026",
    title: "Computer Science Tutor",
    company: "St. John's University",
    description:
      "Ran drop-in and group tutoring sessions covering programming fundamentals through advanced data structures and database systems, using a Socratic, whiteboard-based teaching method.",
    tags: ["Java", "SQL"],
  },
  {
    id: 4,
    date: "JAN 2024 — JAN 2026",
    title: "Research Assistant",
    company: "Codify",
    description:
      "Contributed to a RAG-based AI tutoring product that guides students toward answers rather than giving them directly, using student history to generate personalized practice questions.",
    tags: ["Python", "OpenAI API", "React", "AWS"],
  },
  {
    id: 5,
    date: "JUL 2023 — SEP 2023",
    title: "Coding & Graphic Design Instructor",
    company: "Project New York",
    description:
      "Taught coding fundamentals in Python and design principles in Adobe Illustrator to students ages 10–16 through hands-on projects and workshops.",
    tags: ["Python", "Adobe Illustrator"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mt-24 max-w-xl scroll-mt-24 lg:mt-36 lg:max-w-2xl"
    >
      <div className="space-y-12">
        {EXPERIENCE.map((job) => (
          <div
            key={job.id}
            className="group grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-8"
          >
            <span className="font-mono text-xs tracking-wide text-slate uppercase">
              {job.date}
            </span>
            <div>
              <h3 className="font-medium text-slate-lightest">
                {job.title} · {job.company}
              </h3>
              <p className="mt-2 leading-relaxed text-slate">
                {job.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
