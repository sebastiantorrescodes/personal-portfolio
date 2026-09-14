export type CaseStudySection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  year: string;
  madeAt: string;
  tags: string[];
  summary: string;
  href?: string;
  /** Path under /public, e.g. "/projects/sonar.png" */
  image?: string;
  sections: CaseStudySection[];
};

// Add a new entry here (and link to it from components/sections/projects-table.tsx
// by adding a matching `slug` to that project's row) to give a project its own page.
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "sonar",
    title: "Sonar — A&R Intelligence Agent",
    year: "2026",
    madeAt: "Enterprise AI Agent Hackathon",
    tags: ["TypeScript", "Next.js", "Anthropic Claude", "MCP", "Redis"],
    summary:
      "An autonomous AI talent-scouting agent for the music industry that acts as an A&R researcher — given a natural-language brief, it runs a multi-phase research pipeline and streams results live as artist cards.",
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Sonar takes a natural-language brief from an A&R team and turns it into a fully-researched shortlist of artists, complete with scores, risk flags, and outreach drafts ready to send. It was built during an Enterprise AI Agent hackathon and won \"Most Innovative Project.\"",
        ],
      },
      {
        heading: "How it works",
        paragraphs: [
          "The agent runs a multi-phase pipeline rather than a single prompt-and-response loop:",
        ],
        bullets: [
          "Discovery — surfaces candidate artists matching the brief",
          "Cross-source validation — checks candidates against multiple data sources",
          "Deep per-artist research — builds a full profile per artist",
          "Competitive scan — situates each artist against comparable acts",
          "Scoring — produces a proprietary 0–100 \"Sonar Score\"",
          "Briefing — writes a full A&R brief with risk flags",
          "Outreach drafting — generates ready-to-send outreach emails",
        ],
      },
      {
        heading: "Agent & data architecture",
        paragraphs: [
          "The orchestration layer runs on Anthropic Claude (Sonnet) via the Anthropic SDK, with prompt caching on the system prompt and tool schema to keep multi-turn runs fast and cheap, plus parallel/batched tool-calling for speed. Additional tool servers — Spotify, Reddit, Slack — plug in over the Model Context Protocol (MCP) without touching the core agent.",
          "Redis Stack (via Docker) is the backbone for state and memory: session/chat history persistence, a RediSearch vector index (HNSW) for semantic artist-similarity search over Voyage AI embeddings, and Redis's Agent Memory Server for long-term qualitative memory and entity/topic tagging across sessions.",
        ],
      },
      {
        heading: "Frontend & data sources",
        paragraphs: [
          "The frontend is built with Next.js (App Router), React, TypeScript, and Tailwind CSS, with a streaming chat UI that shows a real-time tool-call feed over server-sent events. External data comes from the Spotify Web API, YouTube Data API v3, Reddit API, and the Tavily API for web search and social-signal scraping.",
        ],
      },
      {
        heading: "Result",
        paragraphs: ["Won \"Most Innovative Project\" at an Enterprise AI Agent hackathon."],
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
