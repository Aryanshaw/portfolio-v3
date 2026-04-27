import React from "react";

function Cinema() {
  const allTimeFavorites = [
    {
      rank: "No.1 · All time",
      title: "Mulholland Drive",
      meta: "Lynch · 2001",
      gradient: "linear-gradient(160deg, #1a0a0a, #3d1515)",
    },
    {
      rank: "No.2",
      title: "2001: A Space Odyssey",
      meta: "Kubrick · 1968",
      gradient: "linear-gradient(160deg, #0a0f1a, #152240)",
    },
    {
      rank: "No.3",
      title: "Come and See",
      meta: "Klimov · 1985",
      gradient: "linear-gradient(160deg, #0d1a0a, #1a3514)",
    },
  ];

  const recentlyWatched = [
    {
      title: "Oppenheimer",
      gradient: "linear-gradient(160deg, #1a1510, #352b1a)",
    },
    {
      title: "Dune Pt II",
      gradient: "linear-gradient(160deg, #0a0f18, #1a2535)",
    },
    {
      title: "Zone of Interest",
      gradient: "linear-gradient(160deg, #120a0a, #2a1010)",
    },
    {
      title: "Past Lives",
      gradient: "linear-gradient(160deg, #0a180a, #182a18)",
    },
    { title: "Stalker", gradient: "linear-gradient(160deg, #160a1a, #2d1040)" },
  ];

  return (
    <section
      id="cinema"
      className="relative bg-off-white px-8 md:px-16 lg:px-24 py-20 md:py-32"
    >
      <div className="flex flex-col gap-8 md:gap-12">
        {/* Header with eyebrow and title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-text-muted/80">
                Cinephile
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-2xl md:text-4xl lg:text-6xl text-text-primary leading-[1.05] tracking-tight">
              <span className="block">Films that live</span>
              <span className="block italic text-text-secondary/90">
                rent-free.
              </span>
            </h3>
          </div>

          {/* Letterboxd link */}
          <a
            href="https://letterboxd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-text-primary border-b border-text-ghost/50 pb-1 hover:border-text-primary transition-all duration-200"
          >
            Letterboxd ↗
          </a>
        </div>

        {/* All-time favorites */}
        <div>
          <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-text-ghost/60 mb-4 block">
            All-time
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {allTimeFavorites.map((film, index) => (
              <div
                key={index}
                className="group relative rounded-sm overflow-hidden cursor-pointer"
              >
                <div
                  className="w-full h-32 md:h-40 relative"
                  style={{ background: film.gradient }}
                >
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="font-mono text-xs text-white">View →</span>
                  </div>
                </div>
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 rounded-b-sm">
                  <span className="font-mono text-[8px] md:text-[9px] tracking-[0.15em] uppercase text-white/50 block mb-1">
                    {film.rank}
                  </span>
                  <span className="font-serif text-sm md:text-base text-white block">
                    {film.title}
                  </span>
                  <span className="font-mono text-[9px] md:text-[10px] text-white/50 mt-1 block">
                    {film.meta}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recently watched */}
        <div>
          <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-text-ghost/60 mb-4 block">
            Recently watched
          </span>
          <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2">
            {recentlyWatched.map((film, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-20 md:w-24 group relative rounded-sm overflow-hidden cursor-pointer"
              >
                <div
                  className="w-full h-28 md:h-32 relative"
                  style={{ background: film.gradient }}
                >
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="font-mono text-[10px] text-white">
                      View
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="font-mono text-[8px] md:text-[9px] text-white/60 block truncate">
                    {film.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cinema;
