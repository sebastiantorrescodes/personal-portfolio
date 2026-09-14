import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProjectsTable from "@/components/sections/projects-table";

export default function AllProjectsPage() {
  return (
    <div className="min-h-screen bg-navy px-6 py-10 sm:px-10 sm:py-16 lg:px-24 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-mono text-sm text-accent"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          Sebastian Torres
        </Link>
        <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
          All Projects
        </h1>

        <ProjectsTable />
      </div>
    </div>
  );
}
