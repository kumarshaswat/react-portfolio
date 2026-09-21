"use client";

import Image from "next/image";
import Link from "next/link";
import { Space_Grotesk, Work_Sans } from "next/font/google";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { EarnifyPhoneColumns } from "@/components/earnify-phone-columns";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const body = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// ── canopy / dusk-forecourt palette ─────────────────────────────────────
const GREEN = "#2FA84F";
const GREEN_DIM = "#1E7A3B";
const AMBER = "#FFB238";
const BG = "#0B1A17";
const PANEL = "#102420";
const PANEL_ALT = "#0E2019";
const BORDER = "#1F3B33";
const TEXT = "#F3F1E7";
const MUTED = "#9FB3AA";

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
    <p
      style={{
        color: MUTED,
        fontSize: 12,
        margin: "0 0 8px",
        letterSpacing: "0.01em",
      }}
    >
      {label}
    </p>
    <div style={{ color: TEXT, fontSize: 15, lineHeight: 1.6 }}>{value}</div>
  </div>
);

const SectionHeading = ({
  num,
  kicker,
  title,
}: {
  num: string;
  kicker: string;
  title: string;
}) => (
  <div style={{ marginBottom: 28 }}>
    <Badge
      variant="outline"
      className="mb-4 gap-2 border-[#2FA84F40] bg-[#2FA84F14] px-3 py-1 text-[12.5px] font-medium tracking-wide text-[#2FA84F]"
    >
      <span className={display.className} style={{ opacity: 0.75 }}>
        {num}
      </span>
      <span style={{ width: 1, height: 12, background: "#2FA84F40" }} />
      {kicker}
    </Badge>
    <h2
      className={display.className}
      style={{
        fontSize: "clamp(28px, 3.6vw, 42px)",
        fontWeight: 700,
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
      style={{
        color: TEXT,
        fontSize: 18,
        fontWeight: 700,
        margin: "0 0 10px",
      }}
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
      padding: "20px 22px",
      background: `linear-gradient(160deg, ${PANEL_ALT}, ${PANEL})`,
      border: `1px solid ${BORDER}`,
      borderRadius: 12,
      flex: "1 1 200px",
    }}
  >
    <p
      className={display.className}
      style={{ color: AMBER, fontSize: 30, fontWeight: 700, margin: "0 0 6px" }}
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
    <div style={{ background: GREEN, borderRadius: 2 }} />
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
      <p
        style={{
          color: MUTED,
          fontSize: 14.5,
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  </div>
);

const Frame = ({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) => (
  <figure style={{ margin: 0 }}>
    <div
      style={{
        borderRadius: 12,
        overflow: "hidden",
        border: `1px solid ${BORDER}`,
        background: PANEL_ALT,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={900}
        height={700}
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
    {caption && (
      <figcaption
        style={{
          color: MUTED,
          fontSize: 13,
          marginTop: 10,
          fontFamily: body.style.fontFamily,
        }}
      >
        {caption}
      </figcaption>
    )}
  </figure>
);

export default function EarnifyCaseStudy() {
  return (
    <div
      className={body.className}
      style={{ background: BG, color: TEXT, minHeight: "100vh" }}
    >
      <ScrollProgress className="bg-[#FFB238]" />
      <style>{`
        /* both back links share one wiping underline: the top one wipes in on
           hover, the closing one wipes out */
        .earnify-back {
          position: relative;
          transition: color 0.25s ease;
        }
        .earnify-back::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 2px;
          background: ${AMBER};
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .earnify-back--in {
          color: ${MUTED};
        }
        .earnify-back--in::after {
          transform: scaleX(0);
          transform-origin: left;
        }
        .earnify-back--in:hover {
          color: ${TEXT};
        }
        .earnify-back--in:hover::after {
          transform: scaleX(1);
        }
        @media (prefers-reduced-motion: reduce) {
          .earnify-back::after { transition: none; }
        }
      `}</style>
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "120px 6vw 200px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 60% 45% at 20% -10%, ${GREEN}33 0%, transparent 60%), radial-gradient(ellipse 45% 40% at 90% 10%, ${AMBER}22 0%, transparent 60%)`,
            pointerEvents: "none",
          }}
        />
        {/* phone-column graphic: absolutely positioned so it bleeds from
            the very top of the section instead of starting below the
            section's own top padding */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: 0,
            width: "46%",
            // stretch to the section's bottom edge so the fade ends right
            // above the meta cards
            bottom: 0,
          }}
        >
          <EarnifyPhoneColumns />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          {/* copy sits in its own max-width column so it never runs into
              the graphic on the right */}
          <div style={{ maxWidth: 560 }}>
            <Link
              href="/#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 14,
                textDecoration: "none",
                marginBottom: 40,
                paddingBottom: 4,
              }}
              className="earnify-back earnify-back--in"
            >
              <ArrowLeft size={15} /> Back to projects
            </Link>

            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                marginBottom: 28,
              }}
            >
              {["Case Study", "BP · earnify", "Jan – May 2025"].map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 999,
                    border: `1px solid ${BORDER}`,
                    color: MUTED,
                    fontSize: 12.5,
                    background: PANEL,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <h1
              className={display.className}
              style={{
                fontSize: "clamp(52px, 7.5vw, 96px)",
                fontWeight: 700,
                lineHeight: 0.95,
                margin: "0 0 26px",
                letterSpacing: "-0.03em",
                color: TEXT,
              }}
            >
              earnify
            </h1>
            <p
              style={{
                fontSize: "clamp(17px, 1.6vw, 21px)",
                color: MUTED,
                maxWidth: 520,
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              The earnify app marks BP&apos;s evolution from a purely
              fuel-focused platform, formerly &ldquo;bpme,&rdquo; into a loyalty
              ecosystem connecting fuel and convenience store offerings.
            </p>
          </div>
        </div>
      </section>

      {/* ── Project details ── */}
      <section style={{ padding: "60px 6vw 90px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 14,
          }}
        >
          <Meta label="My Role" value="Project Manager" />
          <Meta label="Timeline" value="January 2025 – May 2025" />
          <Meta label="Tools" value="Figma · Google Suite" />
          <Meta
            label="Team"
            value={
              <span style={{ fontSize: 13.5, lineHeight: 1.9 }}>
                Shaswat Kumar (Project Manager)
                <br />
                Nhi Vo (Lead Designer)
                <br />
                Daniel Nguyen (Lead Developer)
                <br />
                Justine Laderer (Lead UX Researcher, survey)
                <br />
                Benjamin Kiriko (Lead UX Researcher, other)
              </span>
            }
          />
        </div>
      </section>

      {/* ── Overview ── */}
      <section style={{ padding: "0 6vw 90px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
            }}
          >
            <div>
              <SectionHeading
                num="01"
                kicker="Overview"
                title="From fuel app to loyalty ecosystem"
              />
              <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.85 }}>
                The earnify app marks BP&apos;s evolution from a purely
                fuel-focused platform, formerly &ldquo;bpme,&rdquo; into a
                loyalty ecosystem connecting fuel and convenience store
                offerings. Operating across 7,000 locations with 1.5 million
                users, earnify aims to transform routine gas station visits into
                engaging retail experiences.
              </p>
              <p
                style={{
                  color: MUTED,
                  fontSize: 16,
                  lineHeight: 1.85,
                  marginTop: 16,
                }}
              >
                The design challenge centers on using the app&apos;s
                points-based loyalty system to convert fuel customers into
                convenience store shoppers, supporting BP&apos;s broader
                strategy of creating seamless digital experiences across fuel
                and in-store purchases.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <StatPill
                value="7,000"
                label="BP locations operating on earnify"
              />
              <StatPill value="1.5M" label="Active earnify users" />
              <StatPill
                value="200+"
                label="Users surveyed on fueling & shopping habits"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section style={{ padding: "0 6vw 90px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeading
            num="02"
            kicker="Problem"
            title="Fuel customers aren't becoming shoppers"
          />
          <p
            style={{
              color: MUTED,
              fontSize: 16,
              lineHeight: 1.85,
              maxWidth: 720,
              marginBottom: 32,
            }}
          >
            The primary challenge lies in the missed opportunity to convert fuel
            customers into convenience store shoppers. Although earnify has
            successfully transitioned a substantial user base from the legacy
            app, customers continue to view BP locations mainly as fuel stops
            rather than complete retail destinations. This mindset creates
            several key challenges:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 14,
            }}
          >
            {[
              "Unrealized revenue from customers who don't visit the convenience store",
              "Limited use of earnify's loyalty program features for cross-category purchases",
              "The gap between digital (app) and physical (in-store) experiences",
              "Insufficient incentives to change fuel-only customers' established habits",
              "Untapped potential for personalized engagement that could boost both customer satisfaction and store revenue",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "20px 22px",
                  background: PANEL,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 10,
                  color: TEXT,
                  fontSize: 14.5,
                  lineHeight: 1.7,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution ── */}
      <section style={{ padding: "0 6vw 90px", background: PANEL_ALT }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "90px 0" }}>
          <SectionHeading
            num="03"
            kicker="Solution"
            title="Bridging the pump and the shelf"
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
            Our solution redesigns the earnify app to bridge the gap between
            fuel and convenience purchases by creating a more integrated,
            personalized, and rewarding experience. The redesign focuses on:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            <FeatureCard
              title="Contextual journey"
              body="We're reimagining the app flow to guide users naturally from fuel purchases to relevant in-store opportunities. The interface anticipates customer needs based on time of day, purchase history, and location."
            />
            <FeatureCard
              title="Fresh meal visibility"
              body="The redesigned app highlights a curated selection of fresh prepared meals available at each location, with real-time inventory updates and nutritional information to help busy customers make quick, healthy choices during their evening commute."
            />
            <FeatureCard
              title="Store exploration"
              body="A search feature lets customers virtually browse convenience store inventory from anywhere, with personalized filters highlighting relevant products based on past purchases and preferences."
            />
            <FeatureCard
              title="Seamless digital-physical connection"
              body="Location-aware features activate as customers approach or fuel at BP locations, offering timely incentives and highlighting in-store value before departure. This creates a smooth connection between digital interactions and physical store visits."
            />
          </div>
          <p
            style={{
              color: MUTED,
              fontSize: 15.5,
              lineHeight: 1.8,
              maxWidth: 720,
              marginTop: 36,
            }}
          >
            The enhanced app experience doesn&apos;t merely promote in-store
            visits, it reframes how customers view their relationship with BP,
            transforming simple transactions into meaningful engagement across
            both fuel and convenience offerings.
          </p>
        </div>
      </section>

      {/* ── Process / Research ── */}
      <section style={{ padding: "90px 6vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeading
            num="04"
            kicker="Process"
            title="Understanding the forecourt customer"
          />
          <p
            style={{
              color: MUTED,
              fontSize: 16,
              lineHeight: 1.85,
              maxWidth: 720,
              marginBottom: 20,
            }}
          >
            After understanding BP&apos;s needs and expectations, my group
            conducted extensive research to gain deeper insights into customer
            behaviors and pain points at BP stations. We combined quantitative
            data analysis with qualitative interviews, surveying over 200
            earnify users about their fueling and convenience store habits.
          </p>
          <p
            style={{
              color: MUTED,
              fontSize: 16,
              lineHeight: 1.85,
              maxWidth: 720,
              marginBottom: 48,
            }}
          >
            Our comprehensive research approach combined surveys, interviews,
            and behavioral analysis to understand the dynamics between fueling
            visits and convenience store engagement.
          </p>

          <h3
            className={display.className}
            style={{ fontSize: 22, fontWeight: 700, margin: "0 0 18px" }}
          >
            Customer behavior patterns
          </h3>
          <p
            style={{
              color: MUTED,
              fontSize: 15.5,
              lineHeight: 1.8,
              maxWidth: 720,
              marginBottom: 24,
            }}
          >
            Our survey data revealed distinct temporal patterns in convenience
            store visits, with peak engagement occurring between 5pm and 11pm.
            However, despite this evening activity window, most customers
            reported entering the store only about once a month, highlighting a
            significant opportunity gap between fueling frequency and in-store
            conversion rates.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              marginBottom: 48,
            }}
          >
            <StatPill
              value="5–11pm"
              label="Peak convenience-store visit window"
            />
            <StatPill value="~1×/mo" label="Typical in-store visit frequency" />
          </div>

          <p
            style={{
              color: MUTED,
              fontSize: 15.5,
              lineHeight: 1.8,
              maxWidth: 720,
              marginBottom: 24,
            }}
          >
            When analyzing purchase motivations, two primary factors emerged as
            powerful incentives:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
              marginBottom: 56,
            }}
          >
            <div
              style={{
                padding: "26px 24px",
                background: PANEL,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
              }}
            >
              <p style={{ color: GREEN, fontWeight: 600, margin: "0 0 8px" }}>
                Reward integration
              </p>
              <p
                style={{
                  color: MUTED,
                  fontSize: 14.5,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                Customers expressed heightened interest in products that
                contributed back to their fuel points, suggesting an untapped
                potential for circular reward mechanisms.
              </p>
            </div>
            <div
              style={{
                padding: "26px 24px",
                background: PANEL,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
              }}
            >
              <p style={{ color: GREEN, fontWeight: 600, margin: "0 0 8px" }}>
                Fresh options appeal
              </p>
              <p
                style={{
                  color: MUTED,
                  fontSize: 14.5,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                A surprising preference for fresh fruits and produce indicated
                that conventional convenience store product assumptions may be
                limiting engagement.
              </p>
            </div>
          </div>

          <h3
            className={display.className}
            style={{ fontSize: 22, fontWeight: 700, margin: "0 0 18px" }}
          >
            Qualitative insights
          </h3>
          <p
            style={{
              color: MUTED,
              fontSize: 15.5,
              lineHeight: 1.8,
              maxWidth: 720,
              marginBottom: 22,
            }}
          >
            Through in-depth interviews, we uncovered critical barriers to more
            frequent convenience store visits:
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 22,
              maxWidth: 760,
              marginBottom: 56,
            }}
          >
            <InsightRow
              title="Selection limitations"
              text="Participants consistently expressed a preference for shopping at locations with diverse options, with many bypassing convenience stores entirely except when needing fuel."
            />
            <InsightRow
              title="Competitive disadvantage"
              text="Store chains with expanded food selections were capturing potential BP customers seeking more substantial options."
            />
            <InsightRow
              title="Physical purchase preference"
              text="Despite digital trends, our interviewees maintained a strong preference for in-person food purchases rather than delivery services."
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
              marginBottom: 56,
            }}
          >
            <StatPill
              value="12%"
              label="increase in digital purchases is expected through 2030 as in-store visits continue to decline"
            />
            <StatPill
              value="42%"
              label="of survey participants are more likely to enter convenience stores at 5:00PM – 11:00PM"
            />
            <StatPill
              value="65%"
              label="of Gen Z consumers prefer simple packaging for their products, and 58% value eco-friendly packaging"
            />
          </div>

          <h3
            className={display.className}
            style={{ fontSize: 22, fontWeight: 700, margin: "0 0 18px" }}
          >
            Challenge identification
          </h3>
          <p
            style={{
              color: MUTED,
              fontSize: 15.5,
              lineHeight: 1.8,
              maxWidth: 720,
              marginBottom: 28,
            }}
          >
            BP currently faces several key challenges that limit customer
            experience and engagement with their convenience stores. Many
            customers only visit BP stores for fueling their cars. Our goal is
            to increase customer engagement with BP stores by providing them
            with more options to choose from.
          </p>
          <figure style={{ margin: 0 }}>
            <div
              style={{
                padding: "36px 40px",
                background: `linear-gradient(160deg, ${PANEL_ALT}, ${PANEL})`,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
              }}
            >
              <p
                style={{
                  color: GREEN,
                  fontSize: 12,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  margin: "0 0 14px",
                }}
              >
                Problem statement
              </p>
              <p
                className={display.className}
                style={{
                  color: TEXT,
                  fontSize: 24,
                  fontWeight: 600,
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                &ldquo;Customers who are hungry late at night need
                budget-friendly dining options that provide both nourishment and
                value after long, exhausting workdays.&rdquo;
              </p>
            </div>
            <figcaption
              style={{
                color: MUTED,
                fontSize: 13,
                marginTop: 10,
                lineHeight: 1.6,
              }}
            >
              This problem statement captures both the specific temporal
              opportunity window (evening hours) and the value-oriented mindset
              that drives purchase decisions, particularly after workdays when
              convenience and affordability become paramount considerations.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── Wireframes ── */}
      <section style={{ padding: "90px 6vw", background: PANEL_ALT }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeading
            num="05"
            kicker="Wireframes"
            title="From flow to interface"
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
            These wireframes showcase our solution&apos;s key features, focusing
            on enhancing the in-store discovery experience. The design maintains
            earnify&apos;s existing navigation structure while introducing new
            features that connect fuel visits to meaningful in-store engagement
            opportunities.
          </p>
          <div
            style={{
              display: "grid",
              // all five wireframes in one row on desktop, wrapping only
              // once the screen is too narrow for them
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: 28,
            }}
          >
            <Frame
              src="/assets/earnify/WF-Location_Map.png"
              alt="Location map wireframe"
            />
            <Frame
              src="/assets/earnify/WF-Location_Map_after.png"
              alt="Location map wireframe, updated"
            />
            <Frame
              src="/assets/earnify/WF-In_Store_Page.png"
              alt="In-store page wireframe"
            />
            <Frame
              src="/assets/earnify/WF-Item_Search.png"
              alt="Item search wireframe"
            />
            <Frame
              src="/assets/earnify/WF-Item_Filtered_(ICON).png"
              alt="Filtered item search wireframe"
            />
          </div>
        </div>
      </section>

      {/* ── Final Design / Prototype ── */}
      <section style={{ padding: "90px 6vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeading
            num="06"
            kicker="Final Design"
            title="Play with the prototype"
          />
          <div
            style={{
              borderRadius: 14,
              overflow: "hidden",
              border: `1px solid ${BORDER}`,
              background: PANEL,
            }}
          >
            <iframe
              style={{
                border: "none",
                width: "100%",
                height: 620,
                display: "block",
              }}
              src="https://embed.figma.com/design/YHnlGiKLJG3erEDxmnQNEG/BP?node-id=1-2&embed-host=share&footer=false&theme=system"
              allowFullScreen
              title="earnify Figma prototype"
            />
          </div>
          <a
            href="https://www.figma.com/design/YHnlGiKLJG3erEDxmnQNEG/BP?node-id=1-2"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 18,
              color: GREEN,
              fontSize: 14.5,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Click to play with the prototype <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      {/* ── Future Improvements ── */}
      <section style={{ padding: "90px 6vw", background: PANEL_ALT }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeading
            num="07"
            kicker="What's Next"
            title="Future improvements"
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
            Our redesigned earnify app addresses the core challenge, but we
            still have a bunch of improvements to make:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            {[
              {
                title: "Enhanced personalization",
                body: "Future iterations could leverage machine learning for more personalized recommendations that evolve with customer behavior.",
              },
              {
                title: "Expanded payment integration",
                body: "Adding additional payment options and subscription models would provide greater convenience and potentially unlock new value propositions.",
              },
              {
                title: "In-store navigation",
                body: "Indoor mapping technology could guide customers directly to promoted items, solving the findability challenge for first-time store visitors.",
              },
              {
                title: "Cross-partner ecosystem",
                body: "Strategic partnerships with service providers would transform earnify into a more comprehensive platform.",
              },
              {
                title: "Sustainability features",
                body: "Rewarding environmentally conscious behaviors would align with younger demographics' values while supporting BP's broader corporate initiatives.",
              },
            ].map((f) => (
              <FeatureCard key={f.title} title={f.title} body={f.body} />
            ))}
          </div>
        </div>
      </section>

      {/* ── What I Learned ── */}
      <section style={{ padding: "100px 6vw 120px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <SectionHeading num="08" kicker="Reflection" title="What I learned" />
          <p style={{ color: MUTED, fontSize: 16.5, lineHeight: 1.9 }}>
            Through this earnify redesign, I gained valuable insights into
            effectively balancing business objectives with genuine user needs. I
            developed a deeper appreciation for research approaches that
            revealed not just what customers were doing, but why they were
            making these choices, which is crucial information for creating
            meaningful solutions.
          </p>
          <p
            style={{
              color: MUTED,
              fontSize: 16.5,
              lineHeight: 1.9,
              marginTop: 18,
            }}
          >
            Working with my cross-functional team enhanced my ability to
            communicate concepts to diverse audiences, a skill that will serve
            me well throughout my career. The project also reinforced my belief
            that the most successful digital experiences are those that
            seamlessly bridge physical and digital interactions while providing
            clear value to both users and businesses.
          </p>

          <Link
            href="/#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 44,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              paddingBottom: 4,
            }}
            className="earnify-back earnify-back--in"
          >
            <ArrowLeft size={16} /> Back to all projects
          </Link>
        </div>
      </section>
    </div>
  );
}
