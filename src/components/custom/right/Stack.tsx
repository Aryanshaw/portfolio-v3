import React from "react";

const stackRows = [
  {
    category: "AI / LLM",
    chips: ["LangChain", "LangGraph", "OpenAI API", "Pinecone", "RAG", "Embeddings", "Prompt Engineering", "Vector DBs"],
  },
  {
    category: "Backend",
    chips: ["Node.js", "Go", "FastAPI", "Python", "REST", "WebSockets", "gRPC", "Express"],
  },
  {
    category: "Infrastructure",
    chips: ["AWS SQS", "AWS EC2", "AWS S3", "Docker", "Redis", "Nginx", "CI/CD", "Linux"],
  },
  {
    category: "Databases",
    chips: ["PostgreSQL", "MongoDB", "ClickHouse", "Pinecone", "Redis", "Airbyte"],
  },
  {
    category: "Frontend",
    chips: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
  },
];

function Stack() {
  return (
    <section
      id="stack"
      style={{
        background: "#ffffff",
        borderTop: "0.5px solid #e8e7e3",
      }}
      className="px-8 md:px-16 lg:px-24 py-20"
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-6">
        <span
          className="font-mono uppercase"
          style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.25)" }}
        >
          <span style={{ color: "#bbb" }}>Stack</span>
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-serif text-text-primary leading-[1.05] tracking-tight mb-12"
        style={{ fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "-1px", fontWeight: 400 }}
      >
        <span className="block">How I build</span>
        <span className="block italic" style={{ color: "#888" }}>systems.</span>
      </h3>

      {/* Stack rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {stackRows.map((row, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "160px 1fr",
              alignItems: "center",
              padding: "18px 0",
              borderBottom: i < stackRows.length - 1 ? "0.5px solid #f0f0ec" : "none",
            }}
          >
            {/* Category label */}
            <span
              className="font-mono uppercase"
              style={{ fontSize: "9px", letterSpacing: "2px", color: "#bbb" }}
            >
              {row.category}
            </span>
            {/* Chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {row.chips.map((chip, j) => (
                <span
                  key={j}
                  className="font-mono uppercase"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "1px",
                    color: "#555",
                    background: "#f7f6f3",
                    border: "0.5px solid #e0ddd8",
                    padding: "5px 10px",
                    borderRadius: "2px",
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stack;
