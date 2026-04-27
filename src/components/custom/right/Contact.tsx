import React from "react";

function Contact() {
  const contactLinks = [
    {
      name: "Email",
      value: "aryan.shaw2702@email.com",
      href: "mailto:aryan@email.com",
    },
    {
      name: "GitHub",
      value: "github.com/Aryanshaw",
      href: "https://github.com/Aryanshaw",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/aryanshaw",
      href: "https://www.linkedin.com/in/aryan-shaw-66784418b/",
    },
    {
      name: "Letterboxd",
      value: "letterboxd.com/aryanshaw",
      href: "https://letterboxd.com/aryanshaw",
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-black overflow-hidden px-8 md:px-16 lg:px-24 py-20 md:py-32"
    >
      {/* Noise texture */}
      <div className="absolute inset-0 bg-dark-texture opacity-100 pointer-events-none" />

      {/* Light ray */}
      <div
        className="absolute left-[50%] top-0 w-[2px] h-full bg-light-ray animate-ray-pulse pointer-events-none"
        style={{
          transform: "rotate(-20deg)",
          transformOrigin: "top center",
        }}
      />

      <div className="relative z-10 flex flex-col gap-8 md:gap-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/20">
            Contact
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl md:text-4xl lg:text-6xl text-white leading-[1.05] tracking-tight">
          <span className="block">Let's build</span>
          <span className="block italic text-white/30">something.</span>
        </h3>

        {/* Contact Links */}
        <div className="flex flex-col gap-3 mt-4">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-3 md:py-4 px-4 md:px-5 border border-white/10 rounded-sm hover:border-white/30 transition-all duration-200 group cursor-pointer"
            >
              <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/50 group-hover:text-white/70 transition-colors">
                {link.name}
              </span>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] md:text-xs text-white/30 group-hover:text-white/50 transition-colors">
                  {link.value}
                </span>
                <span className="text-sm text-white/20 group-hover:text-white/40 transition-colors">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Footer line */}
        <div className="mt-8 md:mt-12">
          <span className="font-mono text-[9px] md:text-[10px] tracking-[0.15em] text-white/15">
            Aryan Shaw · 2026 · Built with intention.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
