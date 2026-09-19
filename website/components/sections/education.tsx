import SectionHeading from "@/components/layout/section-heading";

const EDUCATION = [
  {
    id: 1,
    date: "DEC 2025 — DEC 2026",
    degree: "M.S. in Artificial Intelligence and Data Science",
    description: "In progress. 3.9 GPA.",
    tags: ["Machine Learning", "Data Science", "AI Systems"],
  },
  {
    id: 2,
    date: "AUG 2022 — DEC 2025",
    degree: "B.S. in Computer Science",
    description: "Summa Cum Laude. 3.85 GPA.",
    tags: ["Java", "Data Structures", "Algorithms", "Database Systems"],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="mx-auto mt-24 max-w-xl scroll-mt-24 lg:mt-36 lg:max-w-2xl"
    >
      <SectionHeading>Education</SectionHeading>
      <p className="font-mono text-xs tracking-widest text-accent uppercase">
        5-Year Program · St. John&apos;s University
      </p>
      <div className="mt-6 space-y-8">
        {EDUCATION.map((entry) => (
          <div
            key={entry.id}
            className="group grid gap-1 sm:grid-cols-[160px_1fr] sm:gap-8"
          >
            <span className="font-mono text-xs tracking-wide text-slate uppercase whitespace-nowrap">
              {entry.date}
            </span>
            <div>
              <h3 className="font-medium text-slate-lightest">
                {entry.degree}
              </h3>
              <p className="mt-2 leading-relaxed text-slate">
                {entry.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
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

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="font-mono text-xs tracking-widest text-accent uppercase">
            Honors
          </h3>
          <ul className="mt-3 space-y-1.5 leading-relaxed text-slate">
            <li>Summa Cum Laude</li>
            <li>University Honors Program</li>
            <li>Dean&apos;s List, all semesters</li>
            <li>Collins College of Professional Studies (CCPS) Honors Society</li>
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-xs tracking-widest text-accent uppercase">
            Extracurriculars
          </h3>
          <ul className="mt-3 space-y-1.5 leading-relaxed text-slate">
            <li>St. John&apos;s Hacks Organizer (Active)</li>
            <li>
              St. John&apos;s CyberStorm Member,{" "}
              <span className="whitespace-nowrap">2025 - 2026</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
