import React from "react";

function Now() {
  const nowItems = [
    {
      label: "Building",
      title: "AI Workflow v2",
      subtitle: "Shipping this month\nMulti-agent support",
      bg: "bg-off-white",
      isDark: false,
    },
    {
      label: "Listening",
      title: "Lo-fi Radio",
      subtitle: "While coding · always",
      bg: "bg-black",
      isDark: true,
      showWaveform: true,
    },
    {
      label: "Watching",
      title: "Severance S2",
      subtitle: "Ep 6 · no spoilers",
      bg: "bg-white",
      isDark: false,
    },
    {
      label: "Reading",
      title: "DDIA — Kleppmann",
      subtitle: "Ch.9 · third read",
      bg: "bg-white",
      isDark: false,
    },
    {
      label: "Sketching",
      title: "Portrait series",
      subtitle: "12 studies in pencil",
      bg: "bg-off-white",
      isDark: false,
    },
    {
      label: "Based in",
      title: "Bengaluru,\nIndia.",
      subtitle: "Open to remote",
      bg: "bg-black",
      isDark: true,
    },
  ];

  const WaveformBars = () => (
    <div className="flex items-end gap-[2px] h-4 md:h-5">
      {[7, 13, 18, 10, 15, 8, 16, 11].map((height, i) => (
        <div
          key={i}
          className="w-[2.5px] bg-accent-green rounded-sm animate-wave"
          style={{
            height: `${height}px`,
            animationDelay: `${i * 0.05}s`,
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  );

  return (
    <section
      id="now"
      className="relative bg-white px-8 md:px-16 lg:px-24 py-20 md:py-32"
    >
      <div className="flex flex-col gap-8 md:gap-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-text-muted/80">
            Now
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl md:text-4xl lg:text-6xl text-text-primary leading-[1.05] tracking-tight">
          <span className="block">What I'm doing</span>
          <span className="block italic text-text-secondary/90">
            right now.
          </span>
        </h3>

        {/* Now Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-light-border rounded-lg overflow-hidden">
          {nowItems.map((item, index) => (
            <div
              key={index}
              className={`relative p-5 md:p-6 ${item.bg} ${
                item.isDark ? "text-white" : "text-text-primary"
              }`}
            >
              {/* Noise texture for dark cells */}
              {item.isDark && (
                <div className="absolute inset-0 bg-dark-texture opacity-50 pointer-events-none" />
              )}

              <div className="relative z-10">
                {/* Eyebrow */}
                <span
                  className={`font-mono text-[8px] md:text-[9px] tracking-[0.3em] uppercase block mb-3 ${
                    item.isDark ? "text-white/20" : "text-text-ghost/60"
                  }`}
                >
                  {item.label}
                </span>

                {/* Title */}
                <h4
                  className={`font-serif text-lg md:text-xl leading-tight mb-2 ${
                    item.isDark ? "text-white" : "text-text-primary"
                  }`}
                  style={{ letterSpacing: "-0.3px" }}
                >
                  {item.title}
                </h4>

                {/* Subtitle */}
                <p
                  className={`font-mono text-[10px] md:text-xs leading-relaxed ${
                    item.isDark ? "text-white/25" : "text-text-muted/80"
                  }`}
                >
                  {item.subtitle}
                </p>

                {/* Waveform for Listening */}
                {item.showWaveform && (
                  <div className="mt-4">
                    <WaveformBars />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Now;
