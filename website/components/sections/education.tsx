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
    </section>
  );
}
