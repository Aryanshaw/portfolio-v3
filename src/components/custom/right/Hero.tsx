import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col min-h-[calc(100vh-100px)]"
    >
      {/* Hero body - vertically centered */}
      <div className="flex-1 flex flex-col justify-center max-w-3xl w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 md:mb-10">
          <div className="w-8 md:w-12 h-[1px] bg-text-muted/40"></div>
          <span
            className="font-mono uppercase"
            style={{ fontSize: "11px", letterSpacing: "2.5px", color: "#bbb" }}
          >
            Available for work
          </span>
        </div>

        {/* Hero Title */}
        <h1
          className="font-serif text-text-primary leading-[1.12] mb-8 md:mb-10"
          style={{
            fontSize: "clamp(36px, 4.5vw, 56px)",
            letterSpacing: "-1.5px",
            fontWeight: 400,
          }}
        >
          <span className="block">Fullstack AI</span>
          <span className="block italic text-text-secondary/90">
            engineer &
          </span>
          <span className="block">builder.</span>
        </h1>

        {/* Bio */}
        <p
          className="font-sans mb-10 md:mb-12"
          style={{
            fontSize: "14px",
            color: "#777",
            lineHeight: "1.85",
            maxWidth: "480px",
          }}
        >
          I build things that scale — from GenAI workflows to full-stack
          products. AI first, always.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="/Aryan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-text-primary cursor-pointer text-off-white font-mono uppercase rounded-sm hover:bg-zinc-800 transition-all duration-300 transform hover:-translate-y-1 inline-block"
            style={{ padding: "10px 24px", fontSize: "11px", letterSpacing: "1.5px" }}
          >
            View resume
          </a>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white text-text-primary cursor-pointer border border-text-ghost/50 font-mono uppercase rounded-sm hover:border-text-secondary transition-all duration-300 transform hover:-translate-y-1"
            style={{ padding: "10px 24px", fontSize: "11px", letterSpacing: "1.5px" }}
          >
            Say hello
          </button>
        </div>
      </div>

      {/* Scroll Hint - pinned to bottom */}
      <div className="flex items-center gap-4 pb-8">
        <span
          className="font-mono uppercase"
          style={{ fontSize: "10px", letterSpacing: "2px", color: "#ccc" }}
        >
          Scroll to explore
        </span>
        <div className="relative w-16 md:w-24 h-[1px] bg-text-muted/30">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-text-muted/50 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
