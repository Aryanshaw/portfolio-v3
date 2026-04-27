import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center py-20 min-h-[calc(100vh-100px)] text-left"
    >
      <div className="max-w-3xl w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <div className="w-8 md:w-12 h-[1px] bg-text-muted/40"></div>
          <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-text-muted/80">
            Available for work
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-xl md:text-2xl lg:text-7xl text-text-primary leading-[1.05] tracking-tight mb-8 md:mb-12">
          <span className="block">Fullstack AI</span>
          <span className="block italic text-text-secondary/90">engineer &</span>
          <span className="block">builder.</span>
        </h1>

        {/* Bio */}
        <p className="font-sans text-sm md:text-md lg:text-lg text-text-secondary leading-relaxed max-w-xl md:max-w-2xl mb-12 md:mb-16">
          I build things that scale — from GenAI workflows to full-stack products. AI first, always.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-24 md:mb-32">
          <button className="bg-text-primary cursor-pointer text-off-white font-mono text-xs md:text-sm lg:text-md tracking-widest uppercase px-10 py-5 rounded-sm hover:bg-zinc-800 transition-all duration-300 transform hover:-translate-y-1">
            View work
          </button>
          <button className="bg-white text-text-primary cursor-pointer border border-text-ghost/50 font-mono text-xs md:text-sm lg:text-md tracking-widest uppercase px-10 py-5 rounded-sm hover:border-text-secondary transition-all duration-300 transform hover:-translate-y-1">
            Say hello
          </button>
        </div>

        {/* Scroll Hint */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-text-muted/80">
            Scroll to explore
          </span>
          <div className="relative w-16 md:w-24 h-[1px] bg-text-muted/30">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-text-muted/50 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
