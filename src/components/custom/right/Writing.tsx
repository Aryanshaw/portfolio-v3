import React from "react";

const posts: {
  title: string;
  summary: string;
  date: string;
  link: string;
}[] = [
  {
    title: "How to Run 'Any' System-Level Library on AWS Lambda",
    summary: "Packaging native binaries and shared libraries into Lambda layers to bypass runtime restrictions.",
    date: "Feb 2026",
    link: "https://medium.com/@aryanrot234/how-to-run-any-system-level-library-on-aws-lambda-cfc1412bda87",
  },
  {
    title: "Airbyte Raw Data Transformation Using DBT (Dynamically)",
    summary: "Automating dbt model generation from Airbyte raw tables — no manual schema mapping.",
    date: "Oct 2024",
    link: "https://medium.com/@aryanrot234/airbyte-raw-data-transformation-using-dbt-dynamically-221de752733b",
  },
  {
    title: "Postgres → ClickHouse: ELT Pipeline with Airbyte and DBT",
    summary: "End-to-end pipeline from relational OLTP to columnar OLAP — ingestion, transformation, query.",
    date: "Oct 2024",
    link: "https://medium.com/@aryanrot234/want-to-connect-postgres-to-your-clickhouse-lets-build-an-elt-flow-using-airbyte-and-dbt-52074baa5ab4",
  },
  {
    title: "Async/Await Isn't Enough: Solving Synchronous Bottlenecks in FastAPI",
    summary: "Why async alone doesn't fix CPU-bound work in FastAPI — and how threadpools and background tasks do.",
    date: "Aug 2024",
    link: "https://medium.com/@aryanrot234/async-await-isnt-enough-solving-synchronous-bottlenecks-in-fastapi-6f9f152256a2",
  },
  {
    title: "Running SQL Queries Simultaneously on ClickHouse with clickhouse-driver",
    summary: "Parallelising analytical queries against ClickHouse using Python's threading and clickhouse-driver.",
    date: "Aug 2024",
    link: "https://medium.com/@aryanrot234/running-a-list-of-sql-queries-simultaneously-on-clickhouse-using-clickhouse-driver-2abf2c7fbb7f",
  },
];

function Writing() {
  return (
    <section
      id="writing"
      style={{
        background: "#f7f6f3",
        borderTop: "0.5px solid #e8e7e3",
      }}
      className="px-8 md:px-16 lg:px-24 py-20"
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-6">
        <span
          className="font-mono uppercase"
          style={{ fontSize: "10px", letterSpacing: "2px", color: "#bbb" }}
        >
          Writing
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-serif text-text-primary leading-[1.05] tracking-tight mb-8"
        style={{ fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "-1px", fontWeight: 400 }}
      >
        <span className="block">Thinking out</span>
        <span className="block italic" style={{ color: "#888" }}>loud.</span>
      </h3>

      {/* Post list */}
      <div style={{ borderTop: "0.5px solid #e8e7e3", marginTop: "32px" }}>
        {posts.length === 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "baseline",
              padding: "20px 0",
              borderBottom: "0.5px solid #e8e7e3",
            }}
          >
            <div>
              <p
                className="font-serif"
                style={{ fontSize: "18px", color: "#ccc", marginBottom: "4px", fontWeight: 400 }}
              >
                First post coming soon
              </p>
              <p
                className="font-sans"
                style={{ fontSize: "12px", color: "#ccc", lineHeight: "1.6" }}
              >
                Writing about how I built scoped LLM memory for Melina Studio
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span
                className="font-mono uppercase"
                style={{ fontSize: "9px", letterSpacing: "1px", color: "#ccc" }}
              >
                —
              </span>
            </div>
          </div>
        ) : (
          posts.map((post, i) => (
            <a
              key={i}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                alignItems: "baseline",
                padding: "20px 10px",
                borderBottom: "0.5px solid #e8e7e3",
                cursor: "pointer",
                textDecoration: "none",
                transition: "background 200ms",
              }}
              className="hover:bg-black/[0.02]"
            >
              <div>
                <p
                  className="font-serif"
                  style={{ fontSize: "18px", color: "#111", marginBottom: "4px", fontWeight: 400 }}
                >
                  {post.title}
                </p>
                <p
                  className="font-sans"
                  style={{ fontSize: "12px", color: "#888", lineHeight: "1.6" }}
                >
                  {post.summary}
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span
                  className="font-mono uppercase"
                  style={{ fontSize: "9px", letterSpacing: "1px", color: "#ccc" }}
                >
                  {post.date}
                </span>
                <span style={{ fontSize: "12px", color: "#ccc" }}>↗</span>
              </div>
            </a>
          ))
        )}
      </div>
    </section>
  );
}

export default Writing;
