import React from "react";
import Image from "next/image";

function Sketches() {
  const sketches = [
    { id: 0, image: "/sketches/0.jpeg", title: "Figure Study" },
    { id: 1, image: "/sketches/1.jpeg", title: "Portrait · charcoal" },
    { id: 2, image: "/sketches/2.jpeg", title: "Eye study" },
    { id: 3, image: "/sketches/3.jpeg", title: "City · ink" },
    { id: 4, image: "/sketches/4.jpeg", title: "Hands · pencil" },
    { id: 5, image: "/sketches/5.jpeg", title: "Skull · charcoal" },
    { id: 6, image: "/sketches/6.jpeg", title: "Gesture · ink" },
    { id: 7, image: "/sketches/7.jpeg", title: "Architecture · pencil" },
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
        <h3 className="font-serif text-white leading-[1.05] tracking-tight" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "-1px", fontWeight: 400 }}>
          <span className="block">Drawn by hand,</span>
          <span className="block italic text-white/40">built in code.</span>
        </h3>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {sketches.map((sketch) => (
            <div
              key={sketch.id}
              className="group relative rounded-sm overflow-hidden cursor-pointer break-inside-avoid"
            >
              <div className="relative w-full">
                <Image
                  src={sketch.image}
                  alt={sketch.title}
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwYI/8QAJRAAAgEDAwUBAAAAAAAAAAAAAQIDBAURBiASIQcxQWFxgf/EABUBAQEAAAAAAAAAAAAAAAAAAAAE/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AqdOagtlBpymp6m4UsE0MSpJHJMispCjggE8jwV0dN6hoNSWyG6W2oWelp5CscipjJABPH6I/WK4rqtPVRVVFTU4qYY5XhV5JApYgEgEgDAHyAP7rS0dW01HpPTWnoJRLTU8ESTGMY3bRhuH5ycmsKrqY4lZ//2Q=="
                />
              </div>
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
