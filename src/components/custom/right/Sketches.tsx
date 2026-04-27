import React from "react";

function Sketches() {
  const sketches = [
    {
      id: 1,
      title: "Figure Study",
      svg: (
        <svg
          viewBox="0 0 120 160"
          style={{ width: "100%", display: "block" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="120" height="160" fill="#111" />
          <ellipse
            cx="60"
            cy="32"
            rx="14"
            ry="16"
            fill="none"
            stroke="#d8d4cc"
            strokeWidth="0.7"
            opacity="0.6"
          />
          <line
            x1="60"
            y1="48"
            x2="60"
            y2="100"
            stroke="#d8d4cc"
            strokeWidth="0.7"
            opacity="0.5"
          />
          <line
            x1="60"
            y1="62"
            x2="34"
            y2="85"
            stroke="#d8d4cc"
            strokeWidth="0.6"
            opacity="0.45"
          />
          <line
            x1="60"
            y1="62"
            x2="86"
            y2="80"
            stroke="#d8d4cc"
            strokeWidth="0.6"
            opacity="0.45"
          />
          <line
            x1="60"
            y1="100"
            x2="40"
            y2="148"
            stroke="#d8d4cc"
            strokeWidth="0.6"
            opacity="0.5"
          />
          <line
            x1="60"
            y1="100"
            x2="80"
            y2="148"
            stroke="#d8d4cc"
            strokeWidth="0.6"
            opacity="0.5"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Portrait · charcoal",
      svg: (
        <svg
          viewBox="0 0 120 110"
          style={{ width: "100%", display: "block" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="120" height="110" fill="#131313" />
          <ellipse
            cx="60"
            cy="52"
            rx="28"
            ry="34"
            fill="none"
            stroke="#c8c4bc"
            strokeWidth="0.7"
            opacity="0.55"
          />
          <ellipse
            cx="46"
            cy="47"
            rx="6"
            ry="4"
            fill="none"
            stroke="#c8c4bc"
            strokeWidth="0.6"
            opacity="0.6"
          />
          <ellipse
            cx="74"
            cy="47"
            rx="6"
            ry="4"
            fill="none"
            stroke="#c8c4bc"
            strokeWidth="0.6"
            opacity="0.6"
          />
          <circle cx="46" cy="47" r="2" fill="#c8c4bc" opacity="0.4" />
          <circle cx="74" cy="47" r="2" fill="#c8c4bc" opacity="0.4" />
          <path
            d="M52 64 Q60 70 68 64"
            fill="none"
            stroke="#c8c4bc"
            strokeWidth="0.6"
            opacity="0.4"
          />
          <path
            d="M32 38 Q46 18 60 22 Q74 18 88 38"
            fill="none"
            stroke="#c8c4bc"
            strokeWidth="0.5"
            opacity="0.35"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Eye study",
      svg: (
        <svg
          viewBox="0 0 120 130"
          style={{ width: "100%", display: "block" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="120" height="130" fill="#0e0e0e" />
          <path
            d="M12 65 Q60 30 108 65 Q60 100 12 65 Z"
            fill="none"
            stroke="#d8d4cc"
            strokeWidth="0.8"
            opacity="0.55"
          />
          <circle
            cx="60"
            cy="65"
            r="20"
            fill="none"
            stroke="#d8d4cc"
            strokeWidth="0.7"
            opacity="0.45"
          />
          <circle
            cx="60"
            cy="65"
            r="9"
            fill="none"
            stroke="#c8c4bc"
            strokeWidth="0.6"
            opacity="0.55"
          />
          <circle cx="60" cy="65" r="4" fill="#d8d4cc" opacity="0.25" />
          <circle cx="66" cy="59" r="2" fill="#fff" opacity="0.12" />
          <line
            x1="24"
            y1="52"
            x2="20"
            y2="42"
            stroke="#d8d4cc"
            strokeWidth="0.5"
            opacity="0.35"
          />
          <line
            x1="36"
            y1="46"
            x2="34"
            y2="36"
            stroke="#d8d4cc"
            strokeWidth="0.5"
            opacity="0.35"
          />
          <line
            x1="50"
            y1="42"
            x2="50"
            y2="32"
            stroke="#d8d4cc"
            strokeWidth="0.5"
            opacity="0.35"
          />
          <line
            x1="64"
            y1="41"
            x2="65"
            y2="31"
            stroke="#d8d4cc"
            strokeWidth="0.5"
            opacity="0.35"
          />
          <line
            x1="78"
            y1="44"
            x2="81"
            y2="34"
            stroke="#d8d4cc"
            strokeWidth="0.5"
            opacity="0.35"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "City · ink",
      svg: (
        <svg
          viewBox="0 0 120 100"
          style={{ width: "100%", display: "block" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="120" height="100" fill="#0f0f0f" />
          <rect
            x="6"
            y="48"
            width="14"
            height="46"
            fill="none"
            stroke="#777"
            strokeWidth="0.5"
            opacity="0.45"
          />
          <rect
            x="24"
            y="32"
            width="20"
            height="62"
            fill="none"
            stroke="#888"
            strokeWidth="0.6"
            opacity="0.55"
          />
          <line
            x1="34"
            y1="18"
            x2="34"
            y2="32"
            stroke="#bbb"
            strokeWidth="0.4"
            opacity="0.4"
          />
          <rect
            x="48"
            y="20"
            width="14"
            height="74"
            fill="none"
            stroke="#999"
            strokeWidth="0.6"
            opacity="0.6"
          />
          <rect
            x="66"
            y="38"
            width="16"
            height="56"
            fill="none"
            stroke="#777"
            strokeWidth="0.5"
            opacity="0.45"
          />
          <rect
            x="86"
            y="28"
            width="12"
            height="66"
            fill="none"
            stroke="#888"
            strokeWidth="0.6"
            opacity="0.55"
          />
          <rect
            x="102"
            y="44"
            width="13"
            height="50"
            fill="none"
            stroke="#666"
            strokeWidth="0.5"
            opacity="0.4"
          />
          <line
            x1="0"
            y1="94"
            x2="120"
            y2="94"
            stroke="#555"
            strokeWidth="0.5"
            opacity="0.4"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="sketches"
      className="relative bg-black overflow-hidden px-8 md:px-16 lg:px-24 py-20 md:py-32"
    >
      {/* Noise texture */}
      <div className="absolute inset-0 bg-dark-texture opacity-100 pointer-events-none" />

      {/* Light ray */}
      <div
        className="absolute left-[55%] top-0 w-[2px] h-full bg-light-ray animate-ray-pulse pointer-events-none"
        style={{
          transform: "rotate(-20deg)",
          transformOrigin: "top center",
        }}
      />

      <div className="relative z-10 flex flex-col gap-8 md:gap-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-text-ghost/30">
            Sketchbook
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl md:text-4xl lg:text-6xl text-white leading-[1.05] tracking-tight">
          <span className="block">Drawn by hand,</span>
          <span className="block italic text-white/40">built in code.</span>
        </h3>

        {/* Sketches Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {sketches.map((sketch) => (
            <div
              key={sketch.id}
              className="group relative rounded-sm overflow-hidden cursor-pointer"
            >
              <div className="w-full aspect-[3/4]">{sketch.svg}</div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 rounded-sm">
                <span className="font-mono text-[8px] md:text-[10px] tracking-[0.15em] uppercase text-white/70">
                  {sketch.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* See all link */}
        <div className="text-right mt-4">
          <a
            href="#"
            className="inline-block font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/40 border-b border-white/20 pb-1 hover:text-white/60 hover:border-white/40 transition-all duration-200"
          >
            See all sketches ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Sketches;
