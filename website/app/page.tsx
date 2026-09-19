import Sidebar from "@/components/layout/sidebar";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-navy">
      <div className="mx-auto max-w-[1800px] lg:flex">
        <Sidebar />
        <main className="px-6 py-4 pb-24 sm:px-10 lg:flex-1 lg:px-16 lg:py-24">
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
