export default function About() {
  return (
    <section id="about" className="max-w-xl scroll-mt-24 lg:max-w-2xl">
      <div className="space-y-6 leading-relaxed text-slate">
        <p>
          Hi, I&apos;m Sebastian — a full-stack developer based in Queens, NY,
          currently finishing an M.S. in Artificial Intelligence and Data
          Science at St. John&apos;s University (Summa Cum Laude, 3.9 GPA),
          after a B.S. in Computer Science there. I like working across the
          whole stack, from building clean, accessible interfaces to
          designing the APIs, data pipelines, and AI systems underneath them.
        </p>
        <p>
          Right now I&apos;m a Research Assistant / Full-Stack Developer at
          the <span className="font-medium text-slate-lightest">Bukhari Lab</span>,
          building <span className="font-medium text-slate-lightest">Medicaddie</span>,
          an NSF-funded platform with bi-directional EHR integrations, and I
          take on freelance web and infrastructure projects for small
          businesses through{" "}
          <span className="font-medium text-slate-lightest">B2B Tek</span>.
        </p>
        <p>
          Outside of client work, you&apos;ll usually find me tinkering on
          side projects — reverse-engineering game internals, building AI
          agents, or picking apart how a new dataset behaves.
        </p>
      </div>
    </section>
  );
}
