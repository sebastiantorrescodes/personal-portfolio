import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CASE_STUDIES, getCaseStudy } from "@/lib/case-studies";

export function generateStaticParams() {
  return CASE_STUDIES.map((project) => ({ slug: project.slug }));
}

export default async function ProjectCaseStudyPage(
  props: PageProps<"/projects/[slug]">
) {
  const { slug } = await props.params;
  const project = getCaseStudy(slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen bg-navy px-6 py-10 sm:px-10 sm:py-16 lg:px-24 lg:py-24">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 font-mono text-sm text-accent"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          All Projects
        </Link>

        <p className="mt-8 font-mono text-sm text-slate">
          {project.year} · {project.madeAt}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          {project.title}
        </h1>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent"
            >
              {tag}
            </li>
          ))}
        </ul>

        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-slate-lightest transition-colors hover:text-accent"
          >
            View live
            <ArrowUpRight size={16} />
          </a>
        )}

        {project.image && (
          <div className="relative mt-8 aspect-video overflow-hidden rounded-lg border border-navy-lightest">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 672px, 100vw"
            />
          </div>
        )}

        <p className="mt-8 text-lg leading-relaxed text-slate-light">
          {project.summary}
        </p>

        <div className="mt-12 space-y-10">
          {project.sections.map((section, i) => (
            <section key={section.heading ?? i}>
              {section.heading && (
                <h2 className="text-xl font-semibold text-slate-lightest">
                  {section.heading}
                </h2>
              )}
              <div className="mt-3 space-y-4 leading-relaxed text-slate">
                {section.paragraphs?.map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="list-disc space-y-2 pl-5 marker:text-accent">
                    {section.bullets.map((bullet, j) => (
                      <li key={j}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
