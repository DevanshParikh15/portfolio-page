import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Certifications from "@/components/sections/Certifications";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Certifications />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
