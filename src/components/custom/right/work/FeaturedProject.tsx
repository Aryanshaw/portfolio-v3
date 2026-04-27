"use client";

import React, { useState } from "react";

interface FeaturedProjectProps {
  index: number;
  project: {
    title: string;
    description: string;
    mainTag: string;
    stack: string[];
    deployedLink: string;
    thumbnail: string;
    callout?: string;
    underTheHood?: string[];
  };
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ index, project }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-light-border-2 rounded-sm overflow-hidden group cursor-pointer transition-all duration-300 hover:border-text-faint/30">
      {/* Project image */}
      <div className="h-64 md:h-80 bg-black relative flex items-center justify-center bg-dark-texture overflow-hidden">
        {project.thumbnail && (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        )}
        <span className="font-serif text-[120px] md:text-[160px] font-bold text-white/[0.03] select-none transform transition-transform duration-700 group-hover:scale-110 relative z-10">
          0{index + 1}
        </span>
        {/* Project tagline */}
        <div className="absolute bottom-6 left-6 flex items-center gap-2 z-20">
          <span className="font-mono text-[9px] tracking-[2px] uppercase text-text-primary border border-white/10 px-3 py-1.5 rounded-sm backdrop-blur-sm">
            {project.mainTag}
          </span>
        </div>
      </div>
      {/* Project details */}
      <div className="p-8 md:p-12 bg-white">
        <h4 className="font-serif text-text-primary mb-4 leading-tight" style={{ fontSize: "20px", fontWeight: 400 }}>
          {project.title}
        </h4>

        {/* Architecture callout */}
        {project.callout && (
          <p
            className="font-serif italic mb-4"
            style={{
              fontSize: "13px",
              color: "#888",
              borderLeft: "2px solid #e0ddd8",
              paddingLeft: "12px",
              lineHeight: "1.6",
            }}
          >
            {project.callout}
          </p>
        )}

        <p className="font-sans max-w-2xl mb-8" style={{ fontSize: "12px", color: "#888", lineHeight: "1.8" }}>
          {project.description}
        </p>
        {/* Project stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech: string, i: number) => (
            <span
              key={i}
              className="font-mono text-[9px] tracking-wider uppercase text-text-faint bg-off-white px-3 py-1 rounded-sm border border-light-border-2"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Under the hood collapsible */}
        {project.underTheHood && project.underTheHood.length > 0 && (
          <div style={{ borderTop: "0.5px solid #e8e7e3" }}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-between w-full"
              style={{ padding: "10px 0", cursor: "pointer" }}
            >
              <span
                className="font-mono uppercase"
                style={{
                  fontSize: "9px",
                  letterSpacing: "1.5px",
                  color: open ? "#111" : "#888",
                  transition: "color 200ms ease",
                }}
              >
                Under the hood
              </span>
              <span
                style={{
                  fontSize: "14px",
                  color: open ? "#111" : "#888",
                  transition: "color 200ms ease",
                  lineHeight: 1,
                }}
              >
                {open ? "−" : "+"}
              </span>
            </button>

            {open && (
              <div
                style={{
                  background: "#f7f6f3",
                  borderRadius: "4px",
                  padding: "14px 16px",
                  marginTop: "8px",
                  marginBottom: "16px",
                }}
              >
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {project.underTheHood.map((bullet: string, i: number) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <span
                        style={{
                          display: "inline-block",
                          width: "4px",
                          height: "4px",
                          background: "#111",
                          flexShrink: 0,
                          marginTop: "7px",
                        }}
                      />
                      <span
                        className="font-sans"
                        style={{ fontSize: "11px", color: "#555", lineHeight: "1.8" }}
                      >
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* View project link */}
        <a
          href={project.deployedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] tracking-[2px] uppercase text-text-primary flex items-center gap-4 group/link"
        >
          <span>View project</span>
          <div className="w-10 h-[1px] bg-text-primary transition-all duration-300 group-hover/link:w-16"></div>
        </a>
      </div>
    </div>
  );
};

export default FeaturedProject;
