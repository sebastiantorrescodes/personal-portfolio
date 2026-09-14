import Sidebar from "@/components/layout/sidebar";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-navy">
      <Sidebar />
      <main className="px-6 py-4 pb-24 sm:px-10 lg:ml-[400px] lg:px-16 lg:py-24">
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
