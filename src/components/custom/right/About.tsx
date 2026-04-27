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
    <div className="w-full h-full bg-white relative px-8 md:px-16 lg:px-24 pt-14">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-8 md:mb-12">
        <span className="font-mono text-sm md:text-md tracking-[0.3em] uppercase text-text-muted/80">
          About
        </span>
      </div>

      {/* Main title */}
      <h3 className="font-serif text-2xl md:text-4xl lg:text-6xl text-text-primary leading-[1.05] tracking-tight mb-8 md:mb-12">
        <span className="">Who I </span>
        <span className=" italic text-text-secondary/90"> actually </span>
        <span className="">am</span>
      </h3>

      {/* About data */}
      <div className="flex flex-wrap gap-12">
        {aboutData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center gap-6 rounded-lg bg-off-white px-18 py-6 min-h-[160px] max-w-[400px] md:px-30 md:py-8"
          >
            <p className="font-serif text-5xl leading-none tracking-tight text-text-primary">
              {item.title}
            </p>

            <p className="uppercase tracking-[0.25em] text-sm text-text-secondary/80">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>

      {/* text */}
      <p className="font-serif text-md md:text-lg lg:text-xl text-text-secondary/90 py-10">
        Fullstack engineer obsessed with building things that actually scale. I
        work at the intersection of distributed systems and AI — mostly thinking
        about how to make LLMs useful in production, not just in demos.
      </p>
    </div>
  );
}

export default About;
