import React from "react";

interface MiniProjectProps {
  index: number;
  project: {
    title: string;
    description: string;
    stack?: string[];
    deployedLink?: string;
    githubLink?: string;
  };
}

const MiniProject: React.FC<MiniProjectProps> = ({ index, project }) => {
  const link =
    project.deployedLink && project.deployedLink !== "#"
      ? project.deployedLink
      : project.githubLink && project.githubLink !== "#"
        ? project.githubLink
        : null;

  const CardContent = (
    <div
      className={`border border-light-border-2 rounded-sm p-8 bg-white hover:bg-off-white transition-all duration-300 group cursor-pointer flex flex-col justify-between min-h-[220px] h-full ${!link ? "cursor-default" : ""}`}
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
