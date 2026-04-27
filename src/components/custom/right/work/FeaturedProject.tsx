import React from "react";

interface FeaturedProjectProps {
  index: number;
  project: {
    title: string;
    description: string;
    mainTag: string;
    stack: string[];
    deployedLink: string;
    thumbnail: string;
  };
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ index, project }: any) => {
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
        <p className="font-sans max-w-2xl mb-8" style={{ fontSize: "12px", color: "#888", lineHeight: "1.8" }}>
          {project.description}
        </p>
        {/* Project stack */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.stack.map((tech: string, i: number) => (
            <span
              key={i}
              className="font-mono text-[9px] tracking-wider uppercase text-text-faint bg-off-white px-3 py-1 rounded-sm border border-light-border-2"
            >
              {tech}
            </span>
          ))}
        </div>
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
