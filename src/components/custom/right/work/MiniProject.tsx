"use client";

import React, { useState } from "react";

interface MiniProjectProps {
  index: number;
  project: {
    title: string;
    description: string;
    stack?: string[];
    deployedLink?: string;
    githubLink?: string;
    callout?: string;
    underTheHood?: string[];
  };
}

const MiniProject: React.FC<MiniProjectProps> = ({ index, project }) => {
  const [open, setOpen] = useState(false);

  const link =
    project.deployedLink && project.deployedLink !== "#"
      ? project.deployedLink
      : project.githubLink && project.githubLink !== "#"
        ? project.githubLink
        : null;

  const CardContent = (
    <div
      className={`border border-light-border-2 rounded-sm p-8 bg-white hover:bg-off-white transition-all duration-300 group flex flex-col justify-between min-h-[220px] h-full ${!link ? "cursor-default" : "cursor-pointer"}`}
    >
      <div>
        <div className="flex justify-between items-start mb-8">
          <span className="font-mono text-[10px] text-text-faint tracking-widest">
            0{index + 1}
          </span>
          {link && (
            <span className="text-xl text-text-ghost group-hover:text-text-primary transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          )}
        </div>
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

        <p className="font-sans leading-relaxed line-clamp-3" style={{ fontSize: "12px", color: "#888", lineHeight: "1.8" }}>
          {project.description}
        </p>

        {/* Project stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project?.stack &&
            project.stack.map((tech: string, i: number) => (
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
          <div style={{ borderTop: "0.5px solid #e8e7e3", marginTop: "16px" }}>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpen(!open);
              }}
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
                  marginBottom: "8px",
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
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

export default MiniProject;
