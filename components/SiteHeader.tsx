"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" }
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition ${scrolled ? "bg-white/80 backdrop-blur shadow" : "bg-transparent"}`}>
      <nav className="container flex items-center justify-between h-16">
        <div className="flex gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm md:text-base text-gray-700 hover:text-brand-600 font-medium">
              {l.label}
            </a>
          ))}
        </div>

        {/* Resume Download Button (put Tanvi_Resume.pdf in /public) */}
        <a
          href="/Tanvi_Resume.pdf"
          download
          className="px-4 py-2 text-sm font-medium bg-brand-600 text-white rounded-full shadow hover:bg-brand-700"
        >
          Download Resume
        </a>
      </nav>
    </header>
  );
}
