import SectionHeading from "@/components/layout/section-heading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-xl scroll-mt-24 lg:max-w-2xl">
      <SectionHeading>About</SectionHeading>
      <div className="space-y-6 leading-relaxed text-slate">
        <p>
          Hey! I&apos;m Sebastian, and I love building new things with code.
          I&apos;m currently finishing an{" "}
          <span className="font-medium text-slate-lightest">
            M.S. in Artificial Intelligence and Data Science
          </span>{" "}
          at{" "}
          <span className="font-medium text-slate-lightest">
            St. John&apos;s University
          </span>
          . I like to build across the{" "}
          <span className="font-medium text-slate-lightest">full-stack</span>,
          building efficient and scalable apps with integrated{" "}
          <span className="font-medium text-slate-lightest">
            AI/ML systems
          </span>
          . I especially enjoy projects at the intersection of{" "}
          <span className="font-medium text-slate-lightest">
            music and tech
          </span>
          .
        </p>
        <p>
          As I am finishing my last semester of my M.S. program, I&apos;m
          building{" "}
          <span className="font-medium text-slate-lightest">
            personal projects
          </span>{" "}
          while picking up new{" "}
          <span className="font-medium text-slate-lightest">
            certifications
          </span>{" "}
          along the way. I&apos;m always learning, and open to new
          opportunities to grow as a developer.
        </p>
        <p>
          When I am not coding, I enjoy going to the gym, making music, watching movies, and drawing. 
        </p>
      </div>
    </section>
  );
}
