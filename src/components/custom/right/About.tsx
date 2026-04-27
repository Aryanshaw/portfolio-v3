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
      title: "3",
      subtitle: "PRODUCTS IN PRODUCTION",
    },
  ];

  return (
    <div className="w-full h-full bg-white relative px-6 md:px-16 lg:px-24 pt-12 md:pt-14 pb-10">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-6 md:mb-12">
        <span className="font-mono uppercase text-text-muted/80" style={{ fontSize: "10px", letterSpacing: "2px" }}>
          About
        </span>
      </div>

      {/* Main title */}
      <h3 className="font-serif text-text-primary leading-[1.05] tracking-tight mb-6 md:mb-12" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "-1px", fontWeight: 400 }}>
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
      <p className="font-sans text-text-secondary/90 py-8 md:py-10" style={{ fontSize: "13px", lineHeight: "1.85", color: "#666" }}>
        Fullstack engineer obsessed with building things that actually scale. I
        work at the intersection of distributed systems and AI — mostly thinking
        about how to make LLMs useful in production, not just in demos.
      </p>

      {/* GitHub contribution graph */}
      <div
        style={{
          marginTop: "8px",
          padding: "20px",
          background: "#f7f6f3",
          borderRadius: "4px",
          border: "0.5px solid #e8e7e3",
          marginBottom: "16px",
        }}
      >
        <img
          src="https://ghchart.rshah.org/Aryanshaw"
          alt="Aryan's GitHub contribution graph"
          style={{ width: "100%", filter: "invert(1) opacity(0.5)" }}
        />
        <a
          href="https://github.com/Aryanshaw"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            marginTop: "10px",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "9px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "#888",
            textDecoration: "none",
          }}
        >
          github.com/Aryanshaw ↗
        </a>
      </div>
    </div>
  );
}

export default About;
