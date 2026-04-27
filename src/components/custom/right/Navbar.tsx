"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Work", id: "work" },
  { label: "Stack", id: "stack" },
  { label: "Sketches", id: "sketches" },
  { label: "Cinema", id: "cinema" },
  { label: "Writing", id: "writing" },
  { label: "Now", id: "now" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const container = document.getElementById("right-side");
    if (!container) return;

    const handleScroll = () => {
      setScrolled(container.scrollTop > 10);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    const allSections = [
      "hero",
      "work",
      "stack",
      "sketches",
      "cinema",
      "writing",
      "now",
      "contact",
    ];
    allSections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden md:sticky md:top-0 md:z-50 md:flex md:w-full md:px-8 md:px-16 lg:px-24 md:py-5 md:items-center md:justify-between md:transition-all md:duration-300 ${
          scrolled
            ? "bg-off-white/90 backdrop-blur-md border-b border-light-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-text-primary">
          Aryan Shaw
        </div>
        <div className="flex gap-5 md:gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-mono text-[10px] md:text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeSection === item.id
                  ? "text-text-primary font-medium"
                  : "text-text-primary/50 hover:text-text-primary/70"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`md:hidden sticky top-0 z-50 w-full px-4 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-off-white/90 backdrop-blur-md border-b border-light-border/50"
            : "bg-off-white/80"
        }`}
      >
        <div className="font-mono text-[10px] uppercase tracking-widest text-text-primary">
          Aryan Shaw
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-text-primary" />
          ) : (
            <Menu className="w-5 h-5 text-text-primary" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[44px] bg-off-white/95 backdrop-blur-md z-40 px-4 py-6 transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-mono text-[13px] uppercase tracking-wider text-left transition-all duration-200 ${
                activeSection === item.id
                  ? "text-text-primary font-medium"
                  : "text-text-primary/50"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
