import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Certifications", href: "#certifications" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-slate-200 shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
          Devansh Parikh
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="gap-2 rounded-full px-6 bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all">
            <FileText className="w-4 h-4" /> Resume
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-4 shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-slate-700 hover:text-primary py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full gap-2">
              <FileText className="w-4 h-4" /> Download Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
