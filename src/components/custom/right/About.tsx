import React from "react";

function About() {
  const aboutData = [
    {
      title: "3+",
      subtitle: "years building",
    },
    {
      title: "10+",
      subtitle: "projects shipped",
    },
    {
      title: "∞",
      subtitle: "hours dedicated",
    },
    {
      title: "1",
      subtitle: "AI-First mindset",
    },
  ];

  return (
    <div className="w-full h-full bg-white relative px-6 md:px-16 lg:px-24 pt-12 md:pt-14 pb-10">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-6 md:mb-12">
        <span className="font-mono text-[10px] md:text-sm tracking-[0.3em] uppercase text-text-muted/80">
          About
        </span>
      </div>

      {/* Main title */}
      <h3 className="font-serif text-xl md:text-4xl lg:text-6xl text-text-primary leading-[1.05] tracking-tight mb-6 md:mb-12">
        <span className="">Who I </span>
        <span className="italic text-text-secondary/90">actually</span>
        <span className=""> am</span>
      </h3>

      {/* About data grid */}
      <div className="grid grid-cols-2 gap-3 md:gap-6">
        {aboutData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-3 md:gap-6 rounded-lg bg-off-white p-4 md:p-8 min-h-[100px] md:min-h-[160px]"
          >
            <p className="font-serif text-3xl md:text-5xl leading-none tracking-tight text-text-primary">
              {item.title}
            </p>

            <p className="uppercase tracking-[0.2em] md:tracking-[0.25em] text-[10px] md:text-sm text-text-secondary/80 text-center">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>

      {/* text */}
      <p className="font-serif text-sm md:text-lg lg:text-xl text-text-secondary/90 py-8 md:py-10 leading-relaxed">
        Fullstack engineer obsessed with building things that actually scale. I
        work at the intersection of distributed systems and AI — mostly thinking
        about how to make LLMs useful in production, not just in demos.
      </p>
    </div>
  );
}

export default About;
