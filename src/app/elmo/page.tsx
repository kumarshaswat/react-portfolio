"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DM_Serif_Display, Work_Sans } from "next/font/google";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  Plus,
  Minus,
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

const display = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const body = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// ── late-night newsroom palette ─────────────────────────────────────────
const ACCENT = "#FF7E77";
const ACCENT_DIM = "#C25A55";
const BG = "#0C0B0E";
const PANEL = "#151318";
const PANEL_ALT = "#110F14";
const BORDER = "#2A2630";
const TEXT = "#F4F1EE";
const MUTED = "#9B93A4";

// ── shared bits ──────────────────────────────────────────────────────────
const Meta = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div
    style={{
      padding: "18px 20px",
      background: PANEL,
      border: `1px solid ${BORDER}`,
      borderRadius: 10,
    }}
  >
    <p style={{ color: MUTED, fontSize: 12, margin: "0 0 8px" }}>{label}</p>
    <div style={{ color: TEXT, fontSize: 15, lineHeight: 1.6 }}>{value}</div>
  </div>
);

const SectionHeading = ({
  kicker,
  title,
}: {
  kicker: string;
  title: React.ReactNode;
}) => {
  // "01 — The Problem" -> numeral and label, shown in one badge
  const [num, ...rest] = kicker.split(" — ");
  return (
    <div style={{ marginBottom: 28 }}>
      <Badge
        variant="outline"
        className="mb-4 gap-2 border-[#FF7E7740] bg-[#FF7E7712] px-3 py-1 text-[12.5px] font-medium tracking-wide text-[#FF7E77]"
      >
        <span className={display.className} style={{ opacity: 0.75 }}>
          {num}
        </span>
        <span style={{ width: 1, height: 12, background: "#FF7E7740" }} />
        {rest.join(" — ")}
      </Badge>
      <h2
        className={display.className}
        style={{
          fontSize: "clamp(30px, 3.8vw, 46px)",
          fontWeight: 400,
          margin: 0,
          color: TEXT,
          letterSpacing: "-0.01em",
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
    </div>
  );
};

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      padding: "6px 14px",
      borderRadius: 999,
      border: `1px solid ${BORDER}`,
      color: MUTED,
      fontSize: 13,
    }}
  >
    {children}
  </span>
);

const FeatureCard = ({
  title,
  body: text,
}: {
  title: string;
  body: string;
}) => (
  <div
    style={{
      padding: "26px 24px",
      background: PANEL,
      border: `1px solid ${BORDER}`,
      borderRadius: 12,
    }}
  >
    <h3
      className={display.className}
      style={{ color: TEXT, fontSize: 19, fontWeight: 400, margin: "0 0 10px" }}
    >
      {title}
    </h3>
    <p
      style={{
        color: MUTED,
        fontSize: 14.5,
        lineHeight: 1.75,
        margin: 0,
        fontFamily: body.style.fontFamily,
      }}
    >
      {text}
    </p>
  </div>
);

const StatPill = ({ value, label }: { value: string; label: string }) => (
  <div
    style={{
      width: 240,
      flexShrink: 0,
      padding: "18px 20px",
      background: `linear-gradient(160deg, ${PANEL_ALT}, ${PANEL})`,
      border: `1px solid ${BORDER}`,
      borderRadius: 12,
    }}
  >
    <p
      className={display.className}
      style={{
        color: ACCENT,
        fontSize: 26,
        fontWeight: 400,
        margin: "0 0 6px",
      }}
    >
      {value}
    </p>
    <p style={{ color: MUTED, fontSize: 13.5, margin: 0, lineHeight: 1.5 }}>
      {label}
    </p>
  </div>
);

const InsightRow = ({ title, text }: { title: string; text: string }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "3px 1fr",
      gap: 18,
      padding: "4px 0",
    }}
  >
    <div style={{ background: ACCENT, borderRadius: 2 }} />
    <div>
      <p
        style={{
          color: TEXT,
          fontWeight: 600,
          fontSize: 15,
          margin: "0 0 4px",
        }}
      >
        {title}
      </p>
      <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.7, margin: 0 }}>
        {text}
      </p>
    </div>
  </div>
);

// ── collapsible challenge ────────────────────────────────────────────────
const ChallengeCard = ({
  number,
  title,
  problem,
  solution,
}: {
  number: number;
  title: string;
  problem: string;
  solution: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        border: `1px solid ${BORDER}`,
        borderRadius: 12,
        overflow: "hidden",
        background: open ? PANEL : PANEL_ALT,
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
          fontFamily: body.style.fontFamily,
        }}
      >
        <span
          className={display.className}
          style={{ fontSize: 13, color: ACCENT_DIM, minWidth: 28 }}
        >
          {String(number).padStart(2, "0")}
        </span>
        <span style={{ flex: 1, color: TEXT, fontSize: 16, fontWeight: 600 }}>
          {title}
        </span>
        <motion.span
          animate={{ rotate: open ? 90 : 0, color: open ? ACCENT : MUTED }}
          transition={{ duration: 0.25 }}
          style={{ display: "flex" }}
        >
          <Plus size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.32, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: 0.22 },
            }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "0 24px 24px", display: "grid", gap: 14 }}>
              {[
                { label: "The problem", text: problem, color: MUTED },
                { label: "How we solved it", text: solution, color: ACCENT },
              ].map((block) => (
                <div
                  key={block.label}
                  style={{
                    padding: "16px 18px",
                    borderRadius: 10,
                    background: BG,
                    border: `1px solid ${BORDER}`,
                  }}
                >
                  <p
                    style={{
                      fontSize: 12,
                      color: block.color,
                      margin: "0 0 8px",
                      fontWeight: 600,
                    }}
                  >
                    {block.label}
                  </p>
                  <p
                    style={{
                      color: MUTED,
                      fontSize: 14.5,
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {block.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ── pipeline ─────────────────────────────────────────────────────────────
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
        gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
        gap: 14,
      }}
    >
      {PIPELINE.map((item, i) => {
        const on = active === i;
        return (
          <div
            key={item.step}
            onMouseEnter={() => setActive(i)}
            style={{
              padding: "26px 22px",
              background: on ? PANEL : PANEL_ALT,
              border: `1px solid ${on ? ACCENT_DIM : BORDER}`,
              borderRadius: 12,
              transition: "background 0.25s, border-color 0.25s",
            }}
          >
            <span
              className={display.className}
              style={{
                fontSize: 12,
                color: ACCENT,
                opacity: on ? 1 : 0.55,
                display: "block",
                marginBottom: 12,
                transition: "opacity 0.25s",
              }}
            >
              {item.step}
            </span>
            <h3
              className={display.className}
              style={{
                color: on ? TEXT : MUTED,
                fontSize: 17,
                fontWeight: 400,
                margin: "0 0 10px",
                transition: "color 0.25s",
              }}
            >
              {item.label}
            </h3>
            <p
              style={{
                color: MUTED,
                fontSize: 13.5,
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

const METRICS = [
  { value: "3–4 s", label: "Article summarization and expansion" },
  { value: "~200 ms", label: "Home page load, 200 articles" },
  { value: "~60 ms", label: "Article view load" },
  { value: "~200 ms", label: "Auth page load" },
  { value: "~5.6 min", label: "Daily bulk article Lambda, in the background" },
];

// ── page ─────────────────────────────────────────────────────────────────
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
      className={body.className}
      style={{ background: BG, color: TEXT, minHeight: "100vh" }}
    >
      <style>{`
        /* back links: muted until hover, when the text lifts to white and the
           accent underline wipes in from the left */
        .elmo-back {
          position: relative;
          color: ${MUTED};
          transition: color 0.25s ease;
        }
        .elmo-back::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 2px;
          background: ${ACCENT};
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .elmo-back:hover {
          color: ${TEXT};
        }
        .elmo-back:hover::after {
          transform: scaleX(1);
        }
        @media (prefers-reduced-motion: reduce) {
          .elmo-back::after { transition: none; }
        }
      `}</style>
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "120px 6vw 80px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 55% 45% at 12% -5%, ${ACCENT}22 0%, transparent 60%), radial-gradient(ellipse 45% 40% at 88% 10%, ${ACCENT}14 0%, transparent 60%)`,
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto" }}>
          <Link
            href="/#projects"
            className="elmo-back"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 14,
              textDecoration: "none",
              marginBottom: 40,
              paddingBottom: 4,
            }}
          >
            <ArrowLeft size={15} /> Back to projects
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                  marginBottom: 28,
                }}
              >
                <Pill>Case Study</Pill>
                <Pill>CS 4485 · UT Dallas</Pill>
                <Pill>Jan – May 2025</Pill>
              </div>

              <h1
                className={display.className}
                style={{
                  fontSize: "clamp(58px, 8.4vw, 110px)",
                  fontWeight: 400,
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                  margin: "0 0 24px",
                }}
              >
                ELMO
              </h1>

              <p
                style={{
                  fontSize: "clamp(16px, 1.5vw, 19px)",
                  color: MUTED,
                  lineHeight: 1.75,
                  maxWidth: 560,
                  margin: "0 0 36px",
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
                  padding: "14px 26px",
                  background: ACCENT,
                  color: "#1A0F0E",
                  borderRadius: 10,
                  fontSize: 14.5,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <Github size={16} /> View repository <ArrowUpRight size={15} />
              </a>
            </div>

            {/* product screenshot in a browser frame */}
            <div
              style={{
                borderRadius: 16,
                overflow: "hidden",
                border: `1px solid ${BORDER}`,
                boxShadow: `0 40px 80px -30px #000000cc, 0 0 70px ${ACCENT}1a`,
              }}
            >
              <div
                style={{
                  background: PANEL,
                  padding: "10px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  borderBottom: `1px solid ${BORDER}`,
                }}
              >
                {["#ff5f56", "#ffbd2e", "#27c93f"].map((c) => (
                  <div
                    key={c}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: c,
                      opacity: 0.8,
                    }}
                  />
                ))}
                <div
                  style={{
                    flex: 1,
                    marginLeft: 12,
                    background: BG,
                    borderRadius: 5,
                    height: 22,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ color: MUTED, fontSize: 11 }}>elmo.app</span>
                </div>
              </div>
              <Image
                src="/assets/elmo-screenshot.png"
                alt="ELMO product screenshot"
                width={2000}
                height={2000}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Meta strip ── */}
      <section style={{ padding: "40px 6vw 90px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 14,
          }}
        >
          <Meta label="My Role" value="AI Engineer" />
          <Meta label="Timeline" value="January 2025 – May 2025" />
          <Meta
            label="Stack"
            value="Next.js · AWS · DeepSeek R1:14b · Pinecone"
          />
          <Meta
            label="Team"
            value="5 students, supervised by Prof. Sridhar Alagar"
          />
        </div>
      </section>

      {/* ── The Problem ── */}
      <section style={{ padding: "0 6vw 90px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                kicker="01 — The Problem"
                title={
                  <>
                    Too much news.
                    <br />
                    Too little signal.
                  </>
                }
              />
              <p
                style={{
                  color: MUTED,
                  fontSize: 16,
                  lineHeight: 1.85,
                  margin: 0,
                }}
              >
                The average person trying to stay informed today must navigate
                dozens of sources, frequently encountering the same story
                rewritten three different ways before finding anything new. The
                fragmentation is exhausting, and the cure is often worse than
                the disease. Algorithmic feeds designed to keep you engaged tend
                to deepen filter bubbles, showing you content that confirms what
                you already believe rather than broadening your perspective.
              </p>
              <p
                style={{
                  color: MUTED,
                  fontSize: 16,
                  lineHeight: 1.85,
                  marginTop: 16,
                }}
              >
                ELMO was built to solve exactly this. Rather than adding yet
                another news feed, we built a platform that synthesizes: pulling
                from multiple sources, stripping out the redundancy, and letting
                users control how deep they want to go on any given topic.
              </p>
            </div>

            <div style={{ display: "grid", gap: 14, alignContent: "start" }}>
              {[
                [
                  "Core goal",
                  "Aggregate news without repeating it — comprehensive coverage, zero redundancy",
                ],
                [
                  "User control",
                  "Choose between concise summaries or full deep-dives based on your time and interest",
                ],
                [
                  "Source transparency",
                  "Users can see and manage where their content comes from",
                ],
                [
                  "Live context",
                  "RAG pipeline brings in articles published within the last 24 hours, beyond any model's training data",
                ],
              ].map(([label, desc]) => (
                <div
                  key={label}
                  style={{
                    padding: "20px 22px",
                    border: `1px solid ${BORDER}`,
                    borderRadius: 10,
                    background: PANEL,
                  }}
                >
                  <p
                    style={{
                      color: ACCENT,
                      fontSize: 13,
                      margin: "0 0 6px",
                      fontWeight: 600,
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      color: MUTED,
                      fontSize: 14,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{ padding: "90px 6vw", background: PANEL_ALT }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeading
            kicker="02 — How It Works"
            title="The content pipeline"
          />
          <p
            style={{
              color: MUTED,
              fontSize: 16,
              lineHeight: 1.85,
              maxWidth: 720,
              marginBottom: 40,
            }}
          >
            ELMO&apos;s architecture is a deliberate layering of three systems:
            a cloud backend on AWS, a real-time news retrieval layer, and an AI
            generation pipeline driven by DeepSeek R1:14b. Each layer has a
            specific job, and they&apos;re connected by a custom RAG framework
            built by the AI Engineer on the team.
          </p>

          <PipelineSteps />

          <div style={{ marginTop: 56 }}>
            <p
              style={{
                color: ACCENT,
                fontSize: 14,
                fontWeight: 600,
                margin: "0 0 18px",
              }}
            >
              Measured in production
            </p>

            <style>{`
              @keyframes elmo-marquee {
                0%   { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .elmo-metrics-track {
                display: flex;
                width: max-content;
                animation: elmo-marquee 26s linear infinite;
              }
              .elmo-metrics-track:hover { animation-play-state: paused; }
              @media (prefers-reduced-motion: reduce) {
                .elmo-metrics-track { animation: none; }
              }
            `}</style>
            <div
              style={{
                overflow: "hidden",
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent 0%, black 7%, black 93%, transparent 100%)",
                maskImage:
                  "linear-gradient(90deg, transparent 0%, black 7%, black 93%, transparent 100%)",
              }}
            >
              <div className="elmo-metrics-track">
                {/* the list is rendered twice so the loop never shows a seam */}
                {[0, 1].map((copy) => (
                  <div
                    key={copy}
                    style={{ display: "flex", gap: 12, paddingRight: 12 }}
                  >
                    {METRICS.map((m) => (
                      <StatPill
                        key={`${copy}-${m.label}`}
                        value={m.value}
                        label={m.label}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <p style={{ color: MUTED, fontSize: 13.5, marginTop: 14 }}>
              The 14-second AI generation Lambda runs in the background, so
              users only experience the 3–4s summarization endpoints.
            </p>
          </div>
        </div>
      </section>

      {/* ── Infrastructure ── */}
      <section style={{ padding: "90px 6vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeading
            kicker="03 — Infrastructure"
            title="Built exclusively on AWS"
          />
          <p
            style={{
              color: MUTED,
              fontSize: 16,
              lineHeight: 1.85,
              maxWidth: 720,
              marginBottom: 36,
            }}
          >
            Rather than mixing cloud providers, we committed entirely to the AWS
            ecosystem, both to keep our architecture coherent and because the
            capstone gave us a chance to understand how these services actually
            fit together in a real application.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 14,
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
              <FeatureCard
                key={s.service}
                title={`AWS ${s.service}`}
                body={s.purpose}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Challenges ── */}
      <section style={{ padding: "90px 6vw", background: PANEL_ALT }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <SectionHeading
            kicker="04 — What Broke"
            title="The challenges that shaped ELMO"
          />
          <p
            style={{
              color: MUTED,
              fontSize: 16,
              lineHeight: 1.85,
              marginBottom: 32,
            }}
          >
            Every one of these cost us days. Open any of them to see what went
            wrong and what we did about it.
          </p>
          <div style={{ display: "grid", gap: 12 }}>
            {challenges.map((c, i) => (
              <ChallengeCard key={c.title} number={i + 1} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Decisions ── */}
      <section style={{ padding: "90px 6vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeading
            kicker="05 — Decisions"
            title="Design choices worth understanding"
          />
          <div className="grid gap-3.5 md:grid-cols-2">
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
              <FeatureCard key={d.title} title={d.title} body={d.body} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section style={{ padding: "90px 6vw", background: PANEL_ALT }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeading
            kicker="06 — The Team"
            title="Five people, one semester"
          />
          <p
            style={{
              color: MUTED,
              fontSize: 16,
              lineHeight: 1.85,
              maxWidth: 680,
              marginBottom: 32,
            }}
          >
            ELMO was a capstone project for CS 4485 at UT Dallas, supervised by
            Professor Sridhar Alagar. Each team member owned a distinct layer of
            the system, with collaboration happening through weekly sprints,
            GitHub Projects, and daily Discord syncs.
          </p>
          {/* six columns, each card spanning two: three on the first row, and
              the last two centred by starting the fourth at column two */}
          <div className="grid auto-rows-fr gap-3.5 sm:grid-cols-2 lg:grid-cols-6">
            {team.map((t, i) => (
              <div
                key={t.name}
                className={
                  i === 3 ? "lg:col-span-2 lg:col-start-2" : "lg:col-span-2"
                }
                style={{
                  padding: "24px 22px",
                  border: `1px solid ${t.highlight ? ACCENT_DIM : BORDER}`,
                  borderRadius: 12,
                  background: PANEL,
                }}
              >
                <p
                  className={display.className}
                  style={{
                    color: TEXT,
                    fontWeight: 400,
                    fontSize: 19,
                    margin: "0 0 8px",
                  }}
                >
                  {t.name}
                </p>
                <span
                  style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    borderRadius: 999,
                    border: `1px solid ${ACCENT}44`,
                    background: `${ACCENT}12`,
                    color: ACCENT,
                    fontSize: 12.5,
                  }}
                >
                  {t.role}
                </span>
                <ul
                  style={{
                    margin: "16px 0 0",
                    padding: 0,
                    listStyle: "none",
                    display: "grid",
                    gap: 10,
                  }}
                >
                  {t.contributions.map((c) => (
                    <li
                      key={c}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "6px 1fr",
                        gap: 12,
                        alignItems: "start",
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: ACCENT,
                          marginTop: 8,
                        }}
                      />
                      <span
                        style={{
                          color: MUTED,
                          fontSize: 13.5,
                          lineHeight: 1.7,
                        }}
                      >
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Takeaways ── */}
      <section style={{ padding: "90px 6vw" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <SectionHeading
            kicker="07 — Takeaways"
            title="What building ELMO actually taught us"
          />
          <div style={{ display: "grid", gap: 26 }}>
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
              <InsightRow key={t.heading} title={t.heading} text={t.body} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Future work ── */}
      <section style={{ padding: "90px 6vw", background: PANEL_ALT }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeading
            kicker="08 — Future Work"
            title="Where ELMO goes next"
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 14,
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
                  padding: "20px 22px",
                  border: `1px solid ${BORDER}`,
                  borderRadius: 10,
                  background: PANEL,
                }}
              >
                <p
                  style={{
                    color: TEXT,
                    fontWeight: 600,
                    fontSize: 14.5,
                    margin: "0 0 6px",
                  }}
                >
                  {f.area}
                </p>
                <p
                  style={{
                    color: MUTED,
                    fontSize: 13.5,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {f.note}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/#projects"
            className="elmo-back"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 48,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              paddingBottom: 4,
            }}
          >
            <ArrowLeft size={16} /> Back to all projects
          </Link>
        </div>
      </section>

      {/* ── Contact ── */}
      <section style={{ padding: "100px 6vw 120px" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          <h2
            className={display.className}
            style={{
              fontSize: "clamp(28px, 3.2vw, 38px)",
              fontWeight: 400,
              margin: "0 0 12px",
              letterSpacing: "-0.01em",
            }}
          >
            Want to talk about it?
          </h2>
          <p
            style={{
              color: MUTED,
              fontSize: 15.5,
              lineHeight: 1.75,
              marginBottom: 32,
            }}
          >
            Interested in AI engineering, RAG pipelines, or what it&apos;s like
            to ship a real product in a semester? Happy to connect.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
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
                  border: `1px solid ${BORDER}`,
                  borderRadius: 10,
                  color: MUTED,
                  fontSize: 14,
                  textDecoration: "none",
                  background: PANEL,
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = ACCENT;
                  e.currentTarget.style.color = ACCENT;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = BORDER;
                  e.currentTarget.style.color = MUTED;
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
