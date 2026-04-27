import React from "react";
import FeaturedProject from "./work/FeaturedProject";
import MiniProject from "./work/MiniProject";

function Work() {
  const workData = [
    {
      title: "Melina Studio",
      description:
        "A Figma-like infinite creative canvas with an AI copilot capable of understanding board context, selections, and performing live canvas edits through natural language. Built real-time AI-assisted editing, scoped memory per board, chat-based edit history, and intelligent canvas interactions.",
      thumbnail: "/work/melina_studio.png",
      stack: ["Next.js", "Go", "LLMs", "WebSockets"],
      deployedLink: "https://melina.studio",
      githubLink: "",
      mainTag: "AI Product Engineer",
      isMain: true,
      callout: "Scoped LLM memory per board — context isolation across concurrent canvas sessions.",
      underTheHood: [
        "Chose Go for the backend — goroutines for cheap concurrency across per-session canvas state without Node's event loop bottlenecks",
        "Scoped LLM memory per board using a Redis key-per-board-id pattern — context isolation so AI edits never bleed across boards",
        "WebSocket sessions with reconnection logic and client-side canvas state diffing — users never lose work on disconnect",
        "NL → canvas edit pipeline: parse intent → validate against board context → apply delta → stream confirmation back",
      ],
    },
    {
      title: "ATREAN (Data + AI SaaS)",
      description:
        "Built a data-to-AI analytics platform where organizations can upload structured and unstructured datasets, interact using natural language, generate reports, and run decision intelligence workflows powered by LLMs and analytical frameworks.",
      thumbnail: "/images/atrean-chat.png",
      stack: ["LangChain", "LangGraph", "Pinecone", "ClickHouse", "Airbyte"],
      deployedLink: "https://atrean.com",
      githubLink: "#",
      mainTag: "AI Architect & Backend Lead",
      isMain: false,
      callout: "ClickHouse for OLAP + Pinecone for semantic — two databases, two jobs, neither compromised.",
      underTheHood: [
        "ClickHouse for OLAP queries — columnar storage gives sub-second aggregations on 100M+ row tables that would timeout in Postgres",
        "Pinecone for semantic search — 512-token overlapping chunks, embedded with text-embedding-ada-002",
        "LangGraph over flat LangChain chains — needed conditional branching and loop-back steps for decision intelligence workflows",
        "Airbyte for ingestion pipelines — avoided writing custom connectors for 40+ data source types",
      ],
    },
    {
      title: "Spark (Dating App)",
      description:
        "Built entire messaging/chat system when i was in Hushl (Atrean now) from scratch with AWS SQS, Redis, Socket.IO, and MongoDB. Designed real-time message flow, offline support & push notifications.",
      thumbnail: "/images/spark-arch.png",
      stack: ["AWS SQS", "Redis", "Socket.IO", "MongoDB", "Expo"],
      deployedLink: null,
      githubLink: null,
      mainTag: "Backend & Realtime Systems",
      isMain: false,
      callout: "SQS for persistence, Redis pub/sub for speed — decoupled delivery without losing messages.",
      underTheHood: [
        "AWS SQS as message queue backbone — decoupled send from deliver, gave us replay on failure without losing messages",
        "Redis pub/sub for real-time delivery to online users — SQS handles persistence, Redis handles speed",
        "Expo push notifications as offline fallback — if Redis finds no subscriber, job falls to SQS → FCM/APNs",
        "MongoDB for message storage — flexible schema for text, media, and reactions without migration overhead",
      ],
    },
    {
      title: "DeliveryPlus (Logistics SaaS)",
      description:
        "Backend for a COD tracking system used by 2000+ agents in Hushl (Atrean now). Integrated OCR (Tecstract) to auto-extract data from receipts shared via WhatsApp forms.",
      thumbnail: "/work/delivery-plus.png",
      stack: ["Node-js", "OCR", "WhatsApp API", "PostgreSQL"],
      deployedLink: null,
      githubLink: null,
      mainTag: "Logistics & Automation",
      isMain: false,
      callout: "OCR pipeline processing WhatsApp-forwarded receipts at 2000+ agent scale.",
      underTheHood: [
        "OCR pipeline with Tecstract for receipt extraction from WhatsApp-forwarded images — handles skewed, low-res, partially cropped inputs",
        "PostgreSQL with row-level locking for concurrent agent updates — prevents double-confirmation race conditions",
        "Webhook-based WhatsApp form intake — media payloads queued for async OCR processing",
      ],
    },
  ];

  const featuredProjects = workData.filter((p) => p.isMain);
  const miniProjects = workData.filter((p) => !p.isMain);

  return (
    <div id="work" className="w-full flex flex-col gap-6">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-8 md:mb-12">
        <span className="font-mono uppercase text-text-muted/80" style={{ fontSize: "10px", letterSpacing: "2px" }}>
          Selected work
        </span>
      </div>

      {/* Main title */}
      <h3 className="font-serif text-text-primary leading-[1.05] tracking-tight mb-8 md:mb-12" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "-1px", fontWeight: 400 }}>
        <span className="block">Things I've</span>
        <span className="block italic text-text-secondary/90">built & shipped</span>
      </h3>

      {/* Work items */}
      <div className="flex flex-col gap-10">
        {/* Featured Projects */}
        {featuredProjects.map((project, index) => (
          <FeaturedProject key={index} index={index} project={project as any} />
        ))}

        {/* Mini Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {miniProjects.map((project, index) => (
            <MiniProject
              key={index}
              index={featuredProjects.length + index}
              project={project as any}
            />
          ))}

          {/* Coming Soon Placeholder */}
          <div className="border border-dashed border-light-border-2 rounded-sm p-8 flex items-center justify-center min-h-[220px] bg-off-white/30">
            <span className="font-mono text-[10px] tracking-[3px] uppercase text-text-ghost/60">
              More coming
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
