import React from "react";
import Image from "next/image";

function Cinema() {
  const allTimeFavorites = [
    {
      rank: "No.1 · All time",
      title: "A Different Man",
      meta: "Schimberg · 2024",
      image: "/movies/a_different_man.jpeg",
      link: "https://letterboxd.com/film/a-different-man/",
    },
    {
      rank: "No.2",
      title: "Eddington",
      meta: "Aster · 2025",
      image: "/movies/eddington.jpeg",
      link: "https://letterboxd.com/film/eddington/",
    },
    {
      rank: "No.3",
      title: "Incendies",
      meta: "Villeneuve · 2010",
      image: "/movies/incendies.jpeg",
      link: "https://letterboxd.com/film/incendies/",
    },
  ];

  const recentlyWatched = [
    {
      title: "Civil War",
      image: "/movies/civil_war.jpeg",
      link: "https://letterboxd.com/film/civil-war-2024/",
    },
    {
      title: "Dune Pt II",
      image: "/movies/Dune.jpeg",
      link: "https://letterboxd.com/film/dune-part-two/",
    },
    {
      title: "It Follows",
      image: "/movies/it_follows.jpeg",
      link: "https://letterboxd.com/film/it-follows/",
    },
    {
      title: "Paris, Texas",
      image: "/movies/paris_texas.jpeg",
      link: "https://letterboxd.com/film/paris-texas/",
    },
    {
      title: "Cure",
      image: "/movies/cure.jpeg",
      link: "https://letterboxd.com/film/cure/",
    },
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
            <h3 className="font-serif text-text-primary leading-[1.05] tracking-tight" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "-1px", fontWeight: 400 }}>
              <span className="block">Films that live</span>
              <span className="block italic text-text-secondary/90">
                rent-free
              </span>
              <span className="block">in my heart.</span>
            </h3>
          </div>

          {/* Letterboxd link */}
          <a
            href="https://letterboxd.com/aryanshaw"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-text-primary border-b border-text-ghost/50 pb-1 hover:border-text-primary transition-all duration-200"
          >
            Letterboxd ↗
          </a>
        </div>

        {/* All-time favorites */}
        <div>
          <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-text-muted/60 mb-4 block">
            All-time
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {allTimeFavorites.map((film, index) => (
              <a
                key={index}
                href={film.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-sm overflow-hidden cursor-pointer block"
              >
                <div className="w-full h-48 md:h-56 relative">
                  <Image
                    src={film.image}
                    alt={film.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwYI/8QAJRAAAgEDAwUBAAAAAAAAAAAAAQIDBAURBiASIQcxQWFxgf/EABUBAQEAAAAAAAAAAAAAAAAAAAAE/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AqdOagtlBpymp6m4UsE0MSpJHJMispCjggE8jwV0dN6hoNSWyG6W2oWelp5CscipjJABPH6I/WK4rqtPVRVVFTU4qYY5XhV5JApYgEgEgDAHyAP7rS0dW01HpPTWnoJRLTU8ESTGMY3bRhuH5ycmsKrqY4lZ//2Q=="
                  />
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
              </a>
            ))}
          </div>
        </div>

        {/* Recently watched */}
        <div>
          <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-text-muted/60 mb-4 block">
            Recently watched
          </span>
          <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2">
            {recentlyWatched.map((film, index) => (
              <a
                key={index}
                href={film.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-20 md:w-24 group relative rounded-sm overflow-hidden cursor-pointer block"
              >
                <div className="w-full h-28 md:h-36 relative">
                  <Image
                    src={film.image}
                    alt={film.title}
                    fill
                    className="object-cover"
                    sizes="25vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwYI/8QAJRAAAgEDAwUBAAAAAAAAAAAAAQIDBAURBiASIQcxQWFxgf/EABUBAQEAAAAAAAAAAAAAAAAAAAAE/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AqdOagtlBpymp6m4UsE0MSpJHJMispCjggE8jwV0dN6hoNSWyG6W2oWelp5CscipjJABPH6I/WK4rqtPVRVVFTU4qYY5XhV5JApYgEgEgDAHyAP7rS0dW01HpPTWnoJRLTU8ESTGMY3bRhuH5ycmsKrqY4lZ//2Q=="
                  />
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cinema;
