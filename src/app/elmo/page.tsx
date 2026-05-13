"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";

const ACCENT = "#FF7E77";

// ─── tiny design-system helpers ────────────────────────────────────────────
const Tag = ({ children }) => (
  <span
    style={{
      display: "inline-block",
      padding: "3px 12px",
      borderRadius: 999,
      border: `1px solid ${ACCENT}44`,
      color: ACCENT,
      fontSize: 12,
      fontFamily: "monospace",
      letterSpacing: "0.08em",
      background: `${ACCENT}11`,
    }}
  >
    {children}
  </span>
);

const Divider = () => (
  <div
    style={{
      width: 48,
      height: 3,
      background: `linear-gradient(90deg, ${ACCENT}, transparent)`,
      borderRadius: 2,
      margin: "16px 0 24px",
    }}
  />
);

const SectionLabel = ({ children }) => (
  <p
    style={{
      fontFamily: "monospace",
      fontSize: 11,
      letterSpacing: "0.2em",
      color: ACCENT,
      textTransform: "uppercase",
      marginBottom: 8,
    }}
  >
    {children}
  </p>
);

// ─── collapsible challenge card ────────────────────────────────────────────
const ChallengeCard = ({ number, title, problem, solution }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        border: "1px solid #2a2a2a",
        borderRadius: 12,
        overflow: "hidden",
        background: open ? "#1c1c1c" : "transparent",
        transition: "background 0.25s",
      }}
    >
      <button
        onClick={() => setOpen((p) => !p)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "20px 24px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 13,
            color: ACCENT,
            opacity: 0.6,
            minWidth: 28,
          }}
        >
          {String(number).padStart(2, "0")}
        </span>
        <span
          style={{ flex: 1, color: "#e2e8f0", fontSize: 16, fontWeight: 600 }}
        >
          {title}
        </span>
        <span style={{ color: "#555" }}>
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>
      {open && (
        <div style={{ padding: "0 24px 24px", display: "grid", gap: 14 }}>
          <div
            style={{
              padding: "14px 18px",
              borderRadius: 8,
              background: "#ff000011",
              borderLeft: "3px solid #ff6b6b",
            }}
          >
            <p
              style={{
                fontSize: 11,
                color: "#ff6b6b",
                fontFamily: "monospace",
                marginBottom: 6,
              }}
            >
              THE PROBLEM
            </p>
            <p
              style={{
                color: "#94a3b8",
                fontSize: 14,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {problem}
            </p>
          </div>
          <div
            style={{
              padding: "14px 18px",
              borderRadius: 8,
              background: `${ACCENT}0d`,
              borderLeft: `3px solid ${ACCENT}`,
            }}
          >
            <p
              style={{
                fontSize: 11,
                color: ACCENT,
                fontFamily: "monospace",
                marginBottom: 6,
              }}
            >
              HOW WE SOLVED IT
            </p>
            <p
              style={{
                color: "#94a3b8",
                fontSize: 14,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {solution}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── team member card ──────────────────────────────────────────────────────
const TeamCard = ({ name, role, contributions, highlight }) => (
  <div
    style={{
      padding: "24px",
      border: "1px solid #2a2a2a",
      borderRadius: 12,
      background: "#111",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: highlight
          ? `linear-gradient(90deg, ${ACCENT}, transparent)`
          : "transparent",
      }}
    />
    <p
      style={{
        color: "#e2e8f0",
        fontWeight: 700,
        fontSize: 16,
        margin: "0 0 4px",
      }}
    >
      {name}
    </p>
    <Tag>{role}</Tag>
    <ul
      style={{
        margin: "16px 0 0",
        padding: 0,
        listStyle: "none",
        display: "grid",
        gap: 8,
      }}
    >
      {contributions.map((c, i) => (
        <li
          key={i}
          style={{ display: "flex", gap: 10, alignItems: "flex-start" }}
        >
          <span
            style={{ color: ACCENT, marginTop: 6, flexShrink: 0, fontSize: 6 }}
          >
            ●
          </span>
          <span style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.65 }}>
            {c}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

// ─── pipeline steps with sticky hover highlight ────────────────────────────
const PIPELINE = [
  {
    step: "01",
    label: "Content Retrieval",
    desc: "NewsAPI fetches up to 200 articles daily across user-selected categories. Google Search API fills gaps and surfaces breaking stories that NewsAPI's 24-hour delay misses.",
  },
  {
    step: "02",
    label: "Full-Text Enrichment",
    desc: "NewsAPI often returns only a title and short description. JSDOM + Readability scrape the full article text from source URLs, giving the AI model something real to work with.",
  },
  {
    step: "03",
    label: "Vector Embedding",
    desc: "Article content is embedded into Pinecone's vector database, enabling semantic search — so when a user asks a question or expands an article, the system retrieves contextually relevant material rather than keyword matches.",
  },
  {
    step: "04",
    label: "AI Generation",
    desc: "DeepSeek R1:14b, hosted locally via Ollama and shared across the team through Ngrok tunneling, synthesizes retrieved content into summaries, full articles, or query-driven deep dives. Prompt engineering enforces accuracy and English-only output.",
  },
  {
    step: "05",
    label: "Personalized Delivery",
    desc: "The frontend, built in Next.js + TypeScript, presents the output at whatever detail level the user has configured — from a quick summary to an expanded multi-source analysis. Everything is tied to a user account managed via AWS Cognito.",
  },
];

const PipelineSteps = () => {
  const [active, setActive] = useState(0);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 2,
      }}
    >
      {PIPELINE.map((item, i) => {
        const highlighted = active === i;
        return (
          <div
            key={item.step}
            onMouseEnter={() => setActive(i)}
            style={{
              padding: "28px 24px",
              background: "#111",
              position: "relative",
              cursor: "default",
              transition: "background 0.2s",
            }}
          >
            {/* top highlight bar — always rendered, opacity drives visibility */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: highlighted ? ACCENT : "#1e1e1e",
                transition: "background 0.25s ease",
              }}
            />
            <span
              style={{
                fontFamily: "monospace",
                fontSize: 11,
                color: ACCENT,
                opacity: highlighted ? 1 : 0.5,
                display: "block",
                marginBottom: 12,
                transition: "opacity 0.25s",
              }}
            >
              {item.step}
            </span>
            <h3
              style={{
                color: highlighted ? "#f1f5f9" : "#94a3b8",
                fontSize: 16,
                fontWeight: 700,
                margin: "0 0 10px",
                transition: "color 0.25s",
              }}
            >
              {item.label}
            </h3>
            <p
              style={{
                color: "#64748b",
                fontSize: 13,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const InsightPill = ({ label, value }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "16px 20px",
      border: "1px solid #2a2a2a",
      borderRadius: 10,
      background: "#111",
    }}
  >
    <span
      style={{
        fontFamily: "monospace",
        fontSize: 11,
        color: "#555",
        letterSpacing: "0.1em",
      }}
    >
      {label}
    </span>
    <span style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 18 }}>
      {value}
    </span>
  </div>
);

// ─── main component ────────────────────────────────────────────────────────
export default function ELMOCaseStudy() {
  const challenges = [
    {
      title: "DeepSeek Hallucinations & Language Drift",
      problem:
        "Despite explicit instructions, DeepSeek R1:14b would occasionally fabricate facts or — more disruptively — respond entirely in Chinese instead of English. This was particularly problematic for a platform users are meant to trust for news accuracy.",
      solution:
        "We spent significant time dissecting our prompt structure, testing dozens of phrasings, and adding explicit language constraints. We also cross-referenced AI output against the source articles retrieved via Google Search API, which gave the model grounded context to anchor its responses. This process fundamentally changed how we thought about prompt design: structure and specificity matter far more than length or politeness.",
    },
    {
      title: "AWS Cognito & Outdated Documentation",
      problem:
        "Setting up user authentication with AWS Cognito was our earliest major roadblock. The Amplify ecosystem was evolving rapidly, making official documentation inconsistent and sometimes outright wrong. Steps that should have taken an afternoon stretched into multi-day debugging sessions.",
      solution:
        "We leaned heavily on GitHub issue threads, developer forums, and cross-referencing multiple versions of AWS docs. The experience reinforced a lesson that only comes from building real systems: official documentation is a starting point, not a ground truth. We eventually stabilized our auth flow and documented our own internal steps for the team.",
    },
    {
      title: "Running a 14B Model on Consumer Hardware",
      problem:
        "DeepSeek R1:14b is a demanding model. Not every team member had the hardware to run it locally at a usable speed — which created unequal access during development and made collaborative testing difficult.",
      solution:
        "One team member with a higher-spec machine hosted the model locally and exposed it to the rest of the team via Ngrok tunneling. This created a shared development endpoint the entire team could hit. It was a pragmatic workaround, though it also made us think carefully about what a production AI deployment needs to look like — which informed our future work recommendations around containerization with AWS Fargate.",
    },
    {
      title: "NewsAPI's Limitations: Freshness & Category Depth",
      problem:
        "NewsAPI doesn't deliver real-time content — most articles were at least 24 hours old by the time they reached us. Additionally, the API's usable topic categories were more limited than anticipated, which threatened to shrink the range of user preferences we could offer.",
      solution:
        "We blended recent articles with slightly older content to maintain coverage continuity, and supplemented NewsAPI with the Google Search API to fill gaps. For categories, we pulled back to only the most reliably populated ones rather than offering empty or sparse topics. We also used open-source web scraping (JSDOM + Readability) to extract full article text from source URLs, since NewsAPI often returned only a title and description.",
    },
    {
      title: "Balancing Generation Speed vs. Content Depth",
      problem:
        "Our AI article generation Lambda averaged around 14 seconds per call when using Deepseek with the Google Search API. For a news platform, that's a long time to wait. But cutting the depth of retrieval hurt content quality.",
      solution:
        "We implemented separate processing paths based on content type and user preference. Feature summarization and expansion operations — the user-facing AI calls — were tuned to run in 3–4 seconds by scoping the retrieval window and adjusting model parameters. The heavier bulk article population job (which inserts ~90 articles daily) was allowed to run longer as a background Lambda, invisible to users.",
    },
  ];

  const team = [
    {
      name: "Shaz Kumar",
      role: "AI Engineer",
      highlight: true,
      contributions: [
        "Integrated DeepSeek R1:14b via a fine-tuned pipeline optimized for news generation",
        "Deployed the model locally using Ollama and exposed it via Ngrok for team-wide access during development",
        "Designed and built the custom RAG framework combining NewsAPI retrieval, Google Search context injection, and Pinecone vector embeddings",
        "Led prompt engineering work to reduce hallucinations and enforce English-only responses",
      ],
    },
    {
      name: "Isaac Hasan",
      role: "Backend Developer",
      contributions: [
        "Created and managed AWS Lambda functions powering API integrations across the platform",
        "Led the onboarding of the AI model and coordinated its connection to frontend and backend services",
      ],
    },
    {
      name: "Abel Thomas",
      role: "Backend Developer",
      contributions: [
        "Architected core backend operations within AWS: authentication, user data storage, and API routing",
        "Integrated backend services with frontend components through AWS Amplify",
      ],
    },
    {
      name: "Avanthi Reddy",
      role: "Frontend Developer",
      contributions: [
        "Designed the full user flow for ELMO with a focus on intuitive, modern UX",
        "Implemented key frontend pages and interactive components",
      ],
    },
    {
      name: "Kshitij Kulshrestha",
      role: "Frontend Developer",
      contributions: [
        "Established the design system for consistent branding across the platform",
        "Refined article rendering, built the landing page, and designed the sidebar navigation flow",
      ],
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d0d0d",
        color: "#e2e8f0",
        fontFamily: "'Georgia', serif",
      }}
    >
      {/* ── Hero ── */}
      <section
        style={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          padding: "80px 5vw",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* background mesh */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
              radial-gradient(ellipse 60% 50% at 15% 0%, ${ACCENT}18 0%, transparent 60%),
              radial-gradient(ellipse 40% 40% at 85% 100%, ${ACCENT}0d 0%, transparent 60%)
            `,
            pointerEvents: "none",
          }}
        />
        {/* grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(#ffffff05 1px, transparent 1px), linear-gradient(90deg, #ffffff05 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px, 6vw, 100px)",
            alignItems: "center",
          }}
        >
          {/* Left: text */}
          <div>
            <div
              style={{
                display: "flex",
                gap: 10,
                marginBottom: 32,
                flexWrap: "wrap",
              }}
            >
              <Tag>CS 4485.0W1 · UT Dallas</Tag>
              <Tag>Jan – May 2025</Tag>
              <Tag>Team of 5</Tag>
            </div>

            <h1
              style={{
                fontSize: "clamp(52px, 7vw, 100px)",
                fontWeight: 900,
                lineHeight: 0.92,
                margin: "0 0 28px",
                color: "#f1f5f9",
                letterSpacing: "-0.03em",
              }}
            >
              ELMO
            </h1>

            <p
              style={{
                fontSize: "clamp(15px, 1.5vw, 20px)",
                color: "#94a3b8",
                lineHeight: 1.75,
                margin: "0 0 40px",
              }}
            >
              An AI-powered news platform that aggregates content from across
              the web, eliminates redundancy, and delivers personalized
              summaries — built in one semester by five students at the
              University of Texas at Dallas.
            </p>

            <a
              href="https://github.com/Sharktail001/ELMO-Capstone-Proj"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 28px",
                background: ACCENT,
                color: "#fff",
                borderRadius: 8,
                fontFamily: "sans-serif",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              <Github size={16} /> View Repository <ArrowRight size={14} />
            </a>
          </div>

          {/* Right: product screenshot */}
          <div
            style={{
              position: "relative",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: `0 0 0 1px #2a2a2a, 0 40px 80px -20px #000000cc, 0 0 60px ${ACCENT}22`,
            }}
          >
            {/* browser chrome strip */}
            <div
              style={{
                background: "#1a1a1a",
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                gap: 6,
                borderBottom: "1px solid #2a2a2a",
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#ff5f56",
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#ffbd2e",
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#27c93f",
                }}
              />
              <div
                style={{
                  flex: 1,
                  marginLeft: 12,
                  background: "#222",
                  borderRadius: 4,
                  height: 22,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "#555",
                    fontSize: 10,
                    fontFamily: "monospace",
                  }}
                >
                  elmo.app
                </span>
              </div>
            </div>
            <Image
              src="/assets/elmo-screenshot.png"
              alt="ELMO product screenshot"
              width={2000}
              height={2000}
              className="w-full block"
            />
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section
        style={{ padding: "100px 5vw", maxWidth: 1200, margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          <div>
            <SectionLabel>01 — The Problem</SectionLabel>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                lineHeight: 1.2,
                margin: "0 0 8px",
                letterSpacing: "-0.02em",
              }}
            >
              Too much news.
              <br />
              Too little signal.
            </h2>
            <Divider />
            <p style={{ color: "#94a3b8", lineHeight: 1.85, fontSize: 16 }}>
              The average person trying to stay informed today must navigate
              dozens of sources, frequently encountering the same story
              rewritten three different ways before finding anything new. The
              fragmentation is exhausting — and the cure is often worse than the
              disease. Algorithmic feeds designed to keep you engaged tend to
              deepen filter bubbles, showing you content that confirms what you
              already believe rather than broadening your perspective.
            </p>
            <p
              style={{
                color: "#94a3b8",
                lineHeight: 1.85,
                fontSize: 16,
                marginTop: 16,
              }}
            >
              ELMO was built to solve exactly this. Rather than adding yet
              another news feed, we built a platform that <em>synthesizes</em> —
              pulling from multiple sources, stripping out the redundancy, and
              letting users control how deep they want to go on any given topic.
            </p>
          </div>
          <div style={{ display: "grid", gap: 16, paddingTop: 20 }}>
            {[
              [
                "Core Goal",
                "Aggregate news without repeating it — comprehensive coverage, zero redundancy",
              ],
              [
                "User Control",
                "Choose between concise summaries or full deep-dives based on your time and interest",
              ],
              [
                "Source Transparency",
                "Users can see and manage where their content comes from",
              ],
              [
                "Live Context",
                "RAG pipeline brings in articles published within the last 24 hours, beyond any model's training data",
              ],
            ].map(([label, desc]) => (
              <div
                key={label}
                style={{
                  padding: "20px 22px",
                  border: "1px solid #1e1e1e",
                  borderRadius: 10,
                  background: "#111",
                }}
              >
                <p
                  style={{
                    color: ACCENT,
                    fontSize: 12,
                    fontFamily: "monospace",
                    margin: "0 0 6px",
                    letterSpacing: "0.08em",
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: 14,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section style={{ padding: "80px 5vw", background: "#0f0f0f" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>02 — How It Works</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              lineHeight: 1.2,
              margin: "0 0 8px",
              letterSpacing: "-0.02em",
            }}
          >
            The Content Pipeline
          </h2>
          <Divider />
          <p
            style={{
              color: "#94a3b8",
              lineHeight: 1.85,
              fontSize: 16,
              maxWidth: 680,
              marginBottom: 48,
            }}
          >
            ELMO's architecture is a deliberate layering of three systems: a
            cloud backend on AWS, a real-time news retrieval layer, and an AI
            generation pipeline driven by DeepSeek R1:14b. Each layer has a
            specific job, and they're connected by a custom RAG framework built
            by the AI Engineer on the team.
          </p>

          {/* pipeline steps */}
          <PipelineSteps />

          {/* real perf numbers — marquee */}
          <div style={{ marginTop: 48 }}>
            <p
              style={{
                fontFamily: "monospace",
                fontSize: 11,
                color: "#555",
                letterSpacing: "0.15em",
                marginBottom: 16,
                textTransform: "uppercase",
              }}
            >
              Measured in production
            </p>

            {/* marquee container */}
            <style>{`
              @keyframes marquee {
                0%   { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .metrics-track {
                display: flex;
                width: max-content;
                animation: marquee 22s linear infinite;
              }
              .metrics-track:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div
              style={{
                overflow: "hidden",
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
                maskImage:
                  "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
              }}
            >
              <div className="metrics-track">
                {/* render the list twice so the loop is seamless */}
                {[0, 1].map((copy) => (
                  <div
                    key={copy}
                    style={{ display: "flex", gap: 12, paddingRight: 12 }}
                  >
                    <InsightPill
                      label="Article summarization / expansion"
                      value="~3–4 seconds"
                    />
                    <InsightPill
                      label="Page load (Home — 200 articles)"
                      value="~200 ms"
                    />
                    <InsightPill label="Article view load" value="~60 ms" />
                    <InsightPill
                      label="Daily bulk article Lambda"
                      value="~5.6 min (background)"
                    />
                    <InsightPill label="Auth page load" value="~200 ms" />
                  </div>
                ))}
              </div>
            </div>

            <p
              style={{
                color: "#555",
                fontSize: 13,
                marginTop: 12,
                fontFamily: "sans-serif",
              }}
            >
              The 14-second AI generation Lambda runs in the background — users
              only experience the 3–4s summarization endpoints.
            </p>
          </div>
        </div>
      </section>

      {/* ── AWS Stack ── */}
      <section style={{ padding: "80px 5vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>03 — Infrastructure</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              lineHeight: 1.2,
              margin: "0 0 8px",
              letterSpacing: "-0.02em",
            }}
          >
            Built exclusively on AWS
          </h2>
          <Divider />
          <p
            style={{
              color: "#94a3b8",
              lineHeight: 1.85,
              fontSize: 16,
              maxWidth: 680,
              marginBottom: 40,
            }}
          >
            Rather than mixing cloud providers, we committed entirely to the AWS
            ecosystem — both to keep our architecture coherent and because the
            capstone gave us a chance to understand how these services actually
            fit together in a real application.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {[
              {
                service: "Amplify",
                purpose:
                  "The connective tissue between our Next.js frontend and all AWS backend services. Handles deployment and resource management.",
              },
              {
                service: "Lambda",
                purpose:
                  "Serverless execution for AI article generation, daily bulk article population, API routing, and database operations. No always-on servers.",
              },
              {
                service: "Cognito",
                purpose:
                  "User authentication, account creation, and session management. Proved to be our steepest early learning curve — see the Challenges section.",
              },
              {
                service: "DynamoDB",
                purpose:
                  "Four tables: Users, Articles, SavedArticles, and LastViewedArticles. NoSQL made sense for the varied shape of article metadata.",
              },
              {
                service: "API Gateway",
                purpose:
                  "Secure, authenticated exposure of Lambda functions to the frontend. Provides rate limiting and request logging.",
              },
              {
                service: "EventBridge",
                purpose:
                  "Scheduled triggers for background tasks like the daily article curation Lambda — so 200 fresh articles are ready before users open the app each morning.",
              },
            ].map((s) => (
              <div
                key={s.service}
                style={{
                  padding: "22px 22px",
                  border: "1px solid #1e1e1e",
                  borderRadius: 10,
                  background: "#111",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: ACCENT,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      color: "#f1f5f9",
                      fontWeight: 700,
                      fontSize: 15,
                      fontFamily: "sans-serif",
                    }}
                  >
                    AWS {s.service}
                  </span>
                </div>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: 13,
                    lineHeight: 1.7,
                    margin: 0,
                    fontFamily: "sans-serif",
                  }}
                >
                  {s.purpose}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Challenges ── */}
      <section style={{ padding: "80px 5vw", background: "#0f0f0f" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <SectionLabel>04 — What Broke</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              lineHeight: 1.2,
              margin: "0 0 8px",
              letterSpacing: "-0.02em",
            }}
          >
            The challenges that shaped ELMO
          </h2>
          <Divider />
          <p
            style={{
              color: "#94a3b8",
              lineHeight: 1.85,
              fontSize: 16,
              marginBottom: 36,
            }}
          >
            Every significant technical decision we made was driven by something
            breaking first. Click each challenge to read what actually happened
            and how we got through it.
          </p>
          <div style={{ display: "grid", gap: 8 }}>
            {challenges.map((c, i) => (
              <ChallengeCard key={i} number={i + 1} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Decisions ── */}
      <section style={{ padding: "80px 5vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>05 — Decisions</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              lineHeight: 1.2,
              margin: "0 0 8px",
              letterSpacing: "-0.02em",
            }}
          >
            Design choices worth understanding
          </h2>
          <Divider />
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          >
            {[
              {
                title: "Why RAG over fine-tuning?",
                body: "We experimented with the idea of fine-tuning DeepSeek on news data, but the effort-to-gain ratio didn't make sense for a semester-long project. RAG gave us something more practically valuable: the ability to inject yesterday's news into every generation call, making the model's output genuinely current rather than frozen at a training cutoff.",
              },
              {
                title: "Why Pinecone for vector search?",
                body: "We needed semantic search — the ability to find articles that are conceptually related to a user's query, not just keyword-matched. Pinecone's managed vector database let us skip the infrastructure complexity and focus on the embedding pipeline. It also made the article expansion feature possible: when a user expands an article, we retrieve semantically similar content from other sources and weave it in.",
              },
              {
                title: "Why Ollama for local model serving?",
                body: "Running DeepSeek locally via Ollama meant we had full control over the model and zero per-token API costs during development. The tradeoff was hardware dependency — not everyone on the team had a machine that could run a 14B parameter model. Ngrok tunneling solved the access problem for development, and informed our future recommendation to containerize with AWS Fargate for production.",
              },
              {
                title: "Why three separate article detail levels?",
                body: "User research in the news space consistently shows that different contexts call for different depths: a commuter wants a headline and three sentences, a researcher wants the full story with sources. We built two one-tap AI calls — 'Simplify' and 'Expand' — on every article view, so users can go deeper or shallower without changing screens. The design philosophy was to anticipate user needs rather than require users to navigate to a settings page.",
              },
            ].map((d) => (
              <div
                key={d.title}
                style={{
                  padding: "28px",
                  border: "1px solid #1e1e1e",
                  borderRadius: 12,
                  background: "#111",
                }}
              >
                <h3
                  style={{
                    color: ACCENT,
                    fontSize: 15,
                    fontWeight: 700,
                    fontFamily: "sans-serif",
                    margin: "0 0 12px",
                  }}
                >
                  {d.title}
                </h3>
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: 14,
                    lineHeight: 1.75,
                    margin: 0,
                    fontFamily: "sans-serif",
                  }}
                >
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section style={{ padding: "80px 5vw", background: "#0f0f0f" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>06 — The Team</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              lineHeight: 1.2,
              margin: "0 0 8px",
              letterSpacing: "-0.02em",
            }}
          >
            Five people, one semester
          </h2>
          <Divider />
          <p
            style={{
              color: "#94a3b8",
              lineHeight: 1.85,
              fontSize: 16,
              maxWidth: 640,
              marginBottom: 36,
              fontFamily: "sans-serif",
            }}
          >
            ELMO was a capstone project for CS 4485 at UT Dallas, supervised by
            Professor Sridhar Alagar. Each team member owned a distinct layer of
            the system, with collaboration happening through weekly sprints,
            GitHub Projects, and daily Discord syncs.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {team.map((t) => (
              <TeamCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Learned ── */}
      <section style={{ padding: "80px 5vw" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <SectionLabel>07 — Takeaways</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              lineHeight: 1.2,
              margin: "0 0 8px",
              letterSpacing: "-0.02em",
            }}
          >
            What building ELMO actually taught us
          </h2>
          <Divider />
          <div style={{ display: "grid", gap: 28, fontFamily: "sans-serif" }}>
            {[
              {
                heading: "Context is everything in LLM prompting",
                body: "The single biggest improvement to our AI output came not from changing models, but from changing what we fed the model. When we started injecting real, recent articles from Google Search API into each generation call, the quality of output jumped noticeably. Relevance, accuracy, and coherence all improved — because the model had something concrete to synthesize rather than drawing purely from weights trained months ago.",
              },
              {
                heading:
                  "API documentation is a starting point, not a contract",
                body: "Between NewsAPI's category limitations, AWS Cognito's evolving Amplify integration, and DeepSeek's behavior drift under certain prompt structures, we learned to treat documentation as a rough guide rather than a specification. The real knowledge came from running the code, reading error messages, and digging through GitHub issues from developers who hit the same walls.",
              },
              {
                heading: "Agile sprints are a forcing function for honesty",
                body: "Weekly sprint reviews made it hard to hide stalled work or ambiguous progress. Having to articulate what was done — and what wasn't — every seven days created a useful discipline. Tasks that seemed vague got scoped down. Features that seemed essential got deprioritized when the sprint showed we'd overcommitted.",
              },
              {
                heading: "Good UX decisions are often subtractive",
                body: "We didn't conduct formal user studies, but we did constantly ask ourselves how we'd want to use the app. That question led us to cut several features we'd initially planned — category filters that were too granular, a recommendation engine we didn't have time to tune well — in favor of making the core reading experience fast and clean. The two-state article view (Simplify / Expand) came from this mindset.",
              },
            ].map((t) => (
              <div
                key={t.heading}
                style={{
                  display: "grid",
                  gridTemplateColumns: "3px 1fr",
                  gap: 24,
                  alignItems: "start",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    background: `linear-gradient(${ACCENT}, transparent)`,
                    borderRadius: 2,
                    minHeight: 80,
                  }}
                />
                <div>
                  <h3
                    style={{
                      color: "#f1f5f9",
                      fontSize: 17,
                      fontWeight: 700,
                      margin: "0 0 10px",
                    }}
                  >
                    {t.heading}
                  </h3>
                  <p
                    style={{
                      color: "#94a3b8",
                      fontSize: 15,
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {t.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Next ── */}
      <section style={{ padding: "80px 5vw", background: "#0f0f0f" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>08 — Future Work</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              lineHeight: 1.2,
              margin: "0 0 8px",
              letterSpacing: "-0.02em",
            }}
          >
            Where ELMO goes next
          </h2>
          <Divider />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
              fontFamily: "sans-serif",
            }}
          >
            {[
              {
                area: "Multi-language support",
                note: "Expand beyond English-only output for global coverage",
              },
              {
                area: "Opinion & bias detection",
                note: "Surface when an article leans a particular direction, rather than leaving that judgment to the reader alone",
              },
              {
                area: "Audio articles",
                note: "Text-to-speech so the content is accessible while commuting or exercising",
              },
              {
                area: "Mobile apps",
                note: "iOS and Android native clients for the core read + explore experience",
              },
              {
                area: "AI model optimization",
                note: "Containerize with AWS Fargate; fine-tune DeepSeek with real user feedback signals",
              },
              {
                area: "Automated testing",
                note: "Replace manual Postman runs with a CI pipeline that validates generation quality on each deploy",
              },
              {
                area: "Real-time alerts",
                note: "EventBridge triggers for breaking news that bypasses the 24-hour daily batch",
              },
              {
                area: "Reading analytics",
                note: "Help users understand their own information diet: what topics, sources, and perspectives they're actually engaging with",
              },
            ].map((f) => (
              <div
                key={f.area}
                style={{
                  padding: "20px",
                  border: "1px solid #1e1e1e",
                  borderRadius: 10,
                  background: "#111",
                }}
              >
                <p
                  style={{
                    color: "#f1f5f9",
                    fontWeight: 700,
                    fontSize: 14,
                    margin: "0 0 6px",
                  }}
                >
                  {f.area}
                </p>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: 13,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {f.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section style={{ padding: "80px 5vw 120px" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 800,
              margin: "0 0 12px",
              letterSpacing: "-0.02em",
            }}
          >
            Want to talk about it?
          </h2>
          <p
            style={{
              color: "#94a3b8",
              fontSize: 15,
              lineHeight: 1.7,
              marginBottom: 36,
              fontFamily: "sans-serif",
            }}
          >
            Interested in AI engineering, RAG pipelines, or what it's like to
            ship a real product in a semester? Happy to connect.
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/shaswatkumar1/",
                icon: <Linkedin size={15} />,
              },
              {
                label: "GitHub",
                href: "https://github.com/kumarshaswat",
                icon: <Github size={15} />,
              },
              {
                label: "Email",
                href: "mailto:shaswat_kr@yahoo.com",
                icon: <Mail size={15} />,
              },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 22px",
                  border: `1px solid #2a2a2a`,
                  borderRadius: 8,
                  color: "#94a3b8",
                  fontFamily: "sans-serif",
                  fontSize: 14,
                  textDecoration: "none",
                  background: "#111",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = ACCENT;
                  e.currentTarget.style.color = ACCENT;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#2a2a2a";
                  e.currentTarget.style.color = "#94a3b8";
                }}
              >
                {l.icon} {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
