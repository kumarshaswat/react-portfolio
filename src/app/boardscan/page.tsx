"use client";

import { useState, useEffect, useRef } from "react";

// Updated Accent Color
const CYAN = "#5BC3EF";

// Secondary pastel-leaning accents
const PASTEL_ORANGE = "#9e8268";
const PASTEL_RED = "#b56b6b";
const PASTEL_WARN = "#b08e64";
const PASTEL_SUCCESS = "#699684";

// Updated Background Palette
const BG = "#0A0A0A";
const SURFACE = "#121212";
const DEEP = "#050505";
const RULE = "#ffffff10";

// Global font setup (Assuming you load Urbanist globally via next/font/google or global.css)
const FONT_MAIN = "'Urbanist', sans-serif";

const SectionRule = ({ label, coord }) => (
  <div
    style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 56 }}
  >
    <span
      style={{
        fontFamily: "monospace",
        fontSize: 10,
        color: "#ffffff30",
        letterSpacing: ".14em",
      }}
    >
      {coord}
    </span>
    <div
      style={{
        flex: 1,
        height: "1px",
        background: `linear-gradient(90deg,${CYAN}40,transparent)`,
      }}
    />
    <span
      style={{
        fontFamily: "monospace",
        fontSize: 10,
        color: "#ffffff40",
        letterSpacing: ".18em",
        textTransform: "uppercase",
      }}
    >
      {label}
    </span>
  </div>
);

// ─── log-style challenge entry ───────────────────────────────────────────────
const LogEntry = ({ timestamp, level, title, problem, solution }) => {
  const [open, setOpen] = useState(false);
  const lc =
    level === "ERROR"
      ? PASTEL_RED
      : level === "WARN"
        ? PASTEL_WARN
        : PASTEL_SUCCESS;

  return (
    <div
      style={{ borderBottom: `1px solid ${RULE}`, cursor: "pointer" }}
      onClick={() => setOpen((p) => !p)}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          padding: "20px 0",
          fontFamily: "monospace",
        }}
      >
        <span style={{ fontSize: 11, color: "#ffffff25", minWidth: 76 }}>
          {timestamp}
        </span>
        <span
          style={{
            fontSize: 10,
            padding: "2px 8px",
            background: `${lc}18`,
            color: lc,
            borderRadius: 2,
            minWidth: 44,
            textAlign: "center",
            letterSpacing: ".08em",
          }}
        >
          {level}
        </span>
        <span
          style={{
            flex: 1,
            fontSize: 14,
            color: open ? "#f1f5f9" : "#cbd5e1",
            fontFamily: FONT_MAIN,
            fontWeight: 600,
            transition: "color .2s",
          }}
        >
          {title}
        </span>
        <span style={{ fontSize: 11, color: "#ffffff25" }}>
          {open ? "−" : "+"}
        </span>
      </div>
      {open && (
        <div style={{ paddingBottom: 28, display: "grid", gap: 12 }}>
          <div
            style={{
              padding: "16px 20px",
              background: "#140808",
              borderLeft: `1.5px solid ${PASTEL_RED}40`,
            }}
          >
            <p
              style={{
                fontSize: 10,
                color: PASTEL_RED,
                fontFamily: "monospace",
                margin: "0 0 8px",
                letterSpacing: ".1em",
                textTransform: "uppercase",
              }}
            >
              Problem
            </p>
            <p
              style={{
                color: "#cbd5e1",
                fontSize: 14,
                lineHeight: 1.8,
                margin: 0,
                fontFamily: FONT_MAIN,
                fontWeight: 400,
              }}
            >
              {problem}
            </p>
          </div>
          <div
            style={{
              padding: "16px 20px",
              background: "#080c14",
              borderLeft: `1.5px solid ${CYAN}40`,
            }}
          >
            <p
              style={{
                fontSize: 10,
                color: CYAN,
                fontFamily: "monospace",
                margin: "0 0 8px",
                letterSpacing: ".1em",
                textTransform: "uppercase",
              }}
            >
              Resolution
            </p>
            <p
              style={{
                color: "#cbd5e1",
                fontSize: 14,
                lineHeight: 1.8,
                margin: 0,
                fontFamily: FONT_MAIN,
                fontWeight: 400,
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

// ─── interactive pipeline diagram ────────────────────────────────────────────
const NODES = [
  { id: "capture", label: ["Mobile", "Capture"], sub: "React Native", x: 60 },
  { id: "detect", label: ["YOLO", "Detection"], sub: "YOLOv26-Medium", x: 220 },
  { id: "preproc", label: ["Ink", "Isolation"], sub: "OpenCV", x: 380 },
  { id: "vector", label: ["Vector", "Tracing"], sub: "VTracer", x: 540 },
  { id: "output", label: ["Canvas", "Output"], sub: ".excalidraw", x: 700 },
];
const DETAIL = {
  capture:
    "Smartphone photo submitted via camera or gallery. Transmitted as multipart form-data to the local Flask server over the device's local network. Server connectivity configurable via an in-app settings screen with a built-in connection test.",
  detect:
    "YOLOv26-Medium (20.4M parameters) localizes content as bounding boxes across two classes: handwriting and shape. NMS-free end-to-end prediction head. Sub-50ms inference via Metal Performance Shaders.",
  preproc:
    "Each cropped region passes through three stages: fastNlMeansDenoising (h=10) to suppress sensor noise, adaptive Gaussian thresholding (blockSize=15, C=8) to handle uneven board illumination, then morphological closing (3×3 ellipse, 2 iterations) to reconnect strokes broken by glare.",
  vector:
    "VTracer fits cubic Bézier splines to each binarized ink region. Parameters tuned empirically for marker-stroke smoothness: corner_threshold=80, splice_threshold=45, path_precision=5, length_threshold=2.0.",
  output:
    "All SVG paths assembled into a .excalidraw JSON document — one element per detected region, each positioned using its original YOLO bounding box coordinates. Returned to the mobile app for interactive viewing in an embedded Excalidraw WebView.",
};

const PipelineDiagram = () => {
  const [active, setActive] = useState(null);
  return (
    <div>
      <svg viewBox="0 0 800 130" style={{ width: "100%", overflow: "visible" }}>
        {NODES.slice(0, -1).map((n, i) => (
          <line
            key={i}
            x1={n.x + 70}
            y1={60}
            x2={NODES[i + 1].x}
            y2={60}
            stroke={CYAN}
            strokeWidth={
              active === n.id || active === NODES[i + 1].id ? 1 : 0.4
            }
            strokeDasharray="4 3"
            opacity={
              active && active !== n.id && active !== NODES[i + 1].id
                ? 0.15
                : 0.5
            }
            style={{ transition: "all .25s" }}
          />
        ))}
        {NODES.slice(0, -1).map((n, i) => (
          <polygon
            key={`a${i}`}
            points={`${NODES[i + 1].x + 1},56 ${NODES[i + 1].x + 10},60 ${
              NODES[i + 1].x + 1
            },64`}
            fill={CYAN}
            opacity={active && active !== NODES[i + 1].id ? 0.15 : 0.45}
            style={{ transition: "opacity .25s" }}
          />
        ))}
        {NODES.map((n) => (
          <g
            key={n.id}
            onClick={() => setActive(active === n.id ? null : n.id)}
            style={{ cursor: "pointer" }}
          >
            <rect
              x={n.x}
              y={24}
              width={70}
              height={72}
              rx={3}
              fill={active === n.id ? "#1A2228" : "#181818"}
              stroke={active === n.id ? CYAN : "#ffffff15"}
              strokeWidth={active === n.id ? 1 : 0.5}
              style={{ transition: "all .25s" }}
            />
            {active === n.id && (
              <rect
                x={n.x}
                y={24}
                width={70}
                height={1.5}
                fill={CYAN}
                opacity={0.8}
              />
            )}
            <text
              x={n.x + 35}
              y={54}
              textAnchor="middle"
              fill={active === n.id ? "#f1f5f9" : "#cbd5e1"}
              fontSize={11}
              fontWeight={600}
              fontFamily={FONT_MAIN}
              style={{ transition: "fill .25s" }}
            >
              {n.label[0]}
            </text>
            <text
              x={n.x + 35}
              y={67}
              textAnchor="middle"
              fill={active === n.id ? "#f1f5f9" : "#cbd5e1"}
              fontSize={11}
              fontWeight={600}
              fontFamily={FONT_MAIN}
              style={{ transition: "fill .25s" }}
            >
              {n.label[1]}
            </text>
            <text
              x={n.x + 35}
              y={84}
              textAnchor="middle"
              fill={active === n.id ? CYAN : "#ffffff20"}
              fontSize={8}
              fontFamily="monospace"
              style={{ transition: "fill .25s" }}
            >
              {n.sub}
            </text>
          </g>
        ))}
      </svg>
      {active ? (
        <div
          style={{
            marginTop: 12,
            padding: "18px 22px",
            background: DEEP,
            border: `1px solid ${CYAN}25`,
            borderRadius: 4,
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontSize: 10,
              color: CYAN,
              margin: "0 0 10px",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              opacity: 0.8,
            }}
          >
            {active}
          </p>
          <p
            style={{
              color: "#e2e8f0",
              fontSize: 14,
              lineHeight: 1.8,
              margin: 0,
              fontFamily: FONT_MAIN,
              fontWeight: 400,
            }}
          >
            {DETAIL[active]}
          </p>
        </div>
      ) : (
        <p
          style={{
            color: "#ffffff20",
            fontSize: 11,
            fontFamily: "monospace",
            marginTop: 14,
            textAlign: "center",
            letterSpacing: ".1em",
          }}
        >
          select a stage
        </p>
      )}
    </div>
  );
};

// ─── mAP training chart ───────────────────────────────────────────────────────
const TrainingChart = () => {
  const ref = useRef(null);
  useEffect(() => {
    let chart;
    const epochs = Array.from({ length: 19 }, (_, i) => i * 5);
    const mAP50 = [
      0.06, 0.15, 0.25, 0.3, 0.32, 0.34, 0.36, 0.374, 0.37, 0.368, 0.365, 0.37,
      0.372, 0.369, 0.367, 0.365, 0.368, 0.366, 0.367,
    ];
    const mAP5095 = [
      0.03, 0.07, 0.1, 0.12, 0.13, 0.14, 0.148, 0.152, 0.15, 0.149, 0.15, 0.151,
      0.152, 0.15, 0.151, 0.152, 0.151, 0.152, 0.152,
    ];
    const load = () => {
      if (!window.Chart || !ref.current) return;
      chart = new window.Chart(ref.current, {
        type: "line",
        data: {
          labels: epochs,
          datasets: [
            {
              label: "mAP@50",
              data: mAP50,
              borderColor: CYAN,
              backgroundColor: `${CYAN}14`,
              fill: true,
              tension: 0.4,
              borderWidth: 1.5,
              pointRadius: 0,
              pointHoverRadius: 3,
            },
            {
              label: "mAP@50-95",
              data: mAP5095,
              borderColor: PASTEL_ORANGE,
              backgroundColor: `${PASTEL_ORANGE}14`,
              fill: true,
              tension: 0.4,
              borderWidth: 1.5,
              pointRadius: 0,
              pointHoverRadius: 3,
              borderDash: [5, 3],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: SURFACE,
              borderColor: `${CYAN}30`,
              borderWidth: 1,
              titleColor: CYAN,
              bodyColor: "#cbd5e1",
              titleFont: { family: "monospace", size: 10 },
              callbacks: {
                label: (ctx) =>
                  `  ${ctx.dataset.label}: ${ctx.parsed.y.toFixed(3)}`,
              },
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "epoch",
                color: "#ffffff25",
                font: { family: "monospace", size: 10 },
              },
              ticks: {
                color: "#ffffff25",
                font: { family: "monospace", size: 10 },
                maxTicksLimit: 10,
              },
              grid: { color: "#ffffff06" },
              border: { color: "#ffffff10" },
            },
            y: {
              min: 0,
              max: 0.45,
              title: {
                display: true,
                text: "mAP",
                color: "#ffffff25",
                font: { family: "monospace", size: 10 },
              },
              ticks: {
                color: "#ffffff25",
                font: { family: "monospace", size: 10 },
                callback: (v) => v.toFixed(2),
              },
              grid: { color: "#ffffff06" },
              border: { color: "#ffffff10" },
            },
          },
          animation: { duration: 1000, easing: "easeInOutQuart" },
        },
      });
    };
    if (window.Chart) load();
    else {
      const s = document.createElement("script");
      s.src =
        "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js";
      s.onload = load;
      document.head.appendChild(s);
    }
    return () => chart?.destroy();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: 28,
          marginBottom: 20,
          fontFamily: "monospace",
          fontSize: 11,
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              display: "inline-block",
              width: 20,
              height: 1.5,
              background: CYAN,
            }}
          />
          <span style={{ color: "#cbd5e1" }}>mAP@50</span>
          <span style={{ color: CYAN, opacity: 0.9 }}>0.403 peak</span>
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              display: "inline-block",
              width: 20,
              height: 1.5,
              background: PASTEL_ORANGE,
              borderTop: `1.5px dashed ${PASTEL_ORANGE}`,
            }}
          />
          <span style={{ color: "#cbd5e1" }}>mAP@50-95</span>
          <span style={{ color: PASTEL_ORANGE, opacity: 0.9 }}>0.173 peak</span>
        </span>
      </div>
      <div style={{ position: "relative", height: 260 }}>
        <canvas
          ref={ref}
          role="img"
          aria-label="Line chart: mAP@50 peaks near 40% at epoch 40 then plateaus. mAP@50-95 peaks near 17%."
        />
        <div
          style={{
            position: "absolute",
            top: "8%",
            left: "37%",
            fontFamily: "monospace",
            fontSize: 9,
            color: CYAN,
            opacity: 0.65,
            borderLeft: `1px dashed ${CYAN}50`,
            paddingLeft: 6,
            lineHeight: 1.6,
            pointerEvents: "none",
          }}
        >
          best checkpoint
          <br />
          epoch 40
        </div>
      </div>
      <p
        style={{
          fontFamily: "monospace",
          fontSize: 10,
          color: "#ffffff20",
          marginTop: 12,
          textAlign: "right",
          letterSpacing: ".08em",
        }}
      >
        early stop @ epoch 90 · patience=50
      </p>
    </div>
  );
};

// ─── main ─────────────────────────────────────────────────────────────────────
export default function BoardScanCaseStudy() {
  const failures = [
    {
      timestamp: "epoch 000",
      level: "ERROR",
      title: "Validation loss divergence — overfitting detected",
      problem:
        "Our initial training run produced a textbook overfitting signature: validation classification loss diverged sharply from training loss while training metrics continued to improve. The model was memorizing the 300-sample training set rather than extracting generalizable features.",
      solution:
        "Added dropout (0.1) and weight decay (0.0005) for regularization, and removed backbone freezing to allow full domain adaptation from ImageNet pretraining to whiteboard imagery. Under the corrected configuration, both losses declined and plateaued together — a stable generalization pattern.",
    },
    {
      timestamp: "epoch 040",
      level: "WARN",
      title: "Performance plateau — dataset signal exhausted before schedule",
      problem:
        "The model hit its best checkpoint at epoch 40 out of 300 scheduled, then made no further improvement before early stopping triggered at epoch 90. With only 100 hand-annotated images, all available training signal was extracted well before the learning schedule completed. The plateau at 40.3% mAP@50 reflects this data constraint directly.",
      solution:
        "Applied Roboflow augmentation to expand to 300 training samples via brightness variation and rotation transforms. Disabled horizontal flipping (fliplr=0.0) to prevent the model from learning mirrored text and notation as valid patterns. Dataset expansion to 500–1000 images remains the primary performance path forward.",
    },
    {
      timestamp: "inference",
      level: "WARN",
      title: "Spatial bias — systematic underdetection on right side of frame",
      problem:
        "Early inference testing revealed the model consistently missed content positioned on the right-hand side of whiteboard images. The annotation distribution in the training set concentrated content in the left-center of the frame, and the model learned that spatial prior.",
      solution:
        "Applied IoU suppression (iou=0.45) at inference time to manage duplicate detections at lower confidence thresholds. The root cause requires targeted annotation: images with deliberate right-heavy content distribution, scoped into the next dataset sprint.",
    },
    {
      timestamp: "hardware",
      level: "WARN",
      title: "Memory overflow at 1280×1280 — forced resolution tradeoff",
      problem:
        "Training and inference at 1280×1280 resolution caused memory overflow on unified memory in both phases. This was not a model size issue — it was an MPS backend constraint that affected training and inference identically.",
      solution:
        "Settled on 640×640 as the engineering compromise between detail preservation and hardware feasibility. The dataset was curated to include thin-stroke and high-glare examples specifically to compensate for detail lost at the reduced resolution.",
    },
    {
      timestamp: "vtracer",
      level: "INFO",
      title: "Fragmented SVG paths on faint and thin marker strokes",
      problem:
        "VTracer performs well on thick marker strokes but produces discontinuous SVG paths for very thin or faint strokes that survive preprocessing only partially. Raising adaptive threshold sensitivity to capture more thin strokes also risks including board texture noise in the binary image.",
      solution:
        "Settled on corner_threshold=80, splice_threshold=45, path_precision=5, length_threshold=2.0 — tuned for the thick-marker case that dominates the dataset. Centerline tracing alternatives represent the longer-term path to improved thin-stroke fidelity.",
    },
  ];

  const metrics = [
    {
      label: "mAP@50",
      value: "40.3%",
      sub: "best checkpoint · epoch 40",
      accent: CYAN,
    },
    {
      label: "mAP@50-95",
      value: "17.3%",
      sub: "stricter localization metric",
      accent: CYAN,
    },
    {
      label: "F1 · handwriting",
      value: "0.54",
      sub: "conf threshold 0.247",
      accent: PASTEL_ORANGE,
    },
    {
      label: "F1 · shape",
      value: "0.44",
      sub: "conf threshold 0.247",
      accent: PASTEL_ORANGE,
    },
    {
      label: "Precision",
      value: "41.2%",
      sub: "at optimal threshold",
      accent: "#ffffff25",
    },
    {
      label: "Recall",
      value: "51.9%",
      sub: "at optimal threshold",
      accent: "#ffffff25",
    },
    {
      label: "Inference",
      value: "<50ms",
      sub: "Local · Metal MPS",
      accent: "#ffffff25",
    },
    {
      label: "Parameters",
      value: "20.4M",
      sub: "YOLOv26-Medium",
      accent: "#ffffff25",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        color: "#e2e8f0", // Restored bright text
        overflowX: "hidden",
      }}
    >
      {/* subtle grid */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          backgroundImage: `linear-gradient(#ffffff04 1px,transparent 1px),linear-gradient(90deg,#ffffff04 1px,transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* ── HERO ── */}
        <section
          style={{
            padding: "100px 7vw 96px",
            borderBottom: `1px solid ${RULE}`,
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: 40,
                flexWrap: "wrap",
                marginBottom: 48,
              }}
            >
              <h1
                style={{
                  fontSize: "clamp(64px,9vw,128px)",
                  fontWeight: 900,
                  lineHeight: 0.88,
                  letterSpacing: "-.02em",
                  color: "#f1f5f9",
                  margin: 0,
                  fontFamily: FONT_MAIN,
                }}
              >
                BOARD<span style={{ color: CYAN }}>SCAN</span>
              </h1>
              <div style={{ textAlign: "right", paddingBottom: 8 }}>
                <p
                  style={{
                    fontFamily: "monospace",
                    fontSize: 11,
                    color: "#ffffff30",
                    margin: "0 0 4px",
                    letterSpacing: ".14em",
                  }}
                >
                  GROUP 17 · UT DALLAS
                </p>
                <p
                  style={{
                    fontFamily: "monospace",
                    fontSize: 11,
                    color: "#ffffff20",
                    margin: 0,
                    letterSpacing: ".14em",
                  }}
                >
                  COMPUTER VISION · 2026
                </p>
              </div>
            </div>

            <p
              style={{
                fontSize: "clamp(16px,1.8vw,22px)",
                color: "#cbd5e1",
                lineHeight: 1.65,
                maxWidth: 680,
                margin: "0 0 48px",
                fontFamily: FONT_MAIN,
                fontWeight: 500,
              }}
            >
              An end-to-end pipeline that converts a single smartphone
              photograph of a whiteboard into a fully editable, infinitely
              scalable vector canvas.
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[
                "YOLOv26-Medium",
                "OpenCV",
                "VTracer",
                "React Native",
                "Flask",
                ".excalidraw",
                "Roboflow",
                "Metal MPS",
              ].map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "5px 13px",
                    border: `1px solid #ffffff15`,
                    color: "#94a3b8",
                    fontSize: 11,
                    fontFamily: "monospace",
                    borderRadius: 2,
                    letterSpacing: ".06em",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROBLEM ── */}
        <section
          style={{ padding: "96px 7vw", maxWidth: 1100, margin: "0 auto" }}
        >
          <SectionRule label="Problem Statement" coord="01" />
          <div style={{ maxWidth: 780 }}>
            <p
              style={{
                fontSize: "clamp(20px,2.6vw,28px)",
                lineHeight: 1.5,
                color: "#e2e8f0",
                fontWeight: 600,
                fontFamily: FONT_MAIN,
                borderLeft: `2px solid ${CYAN}50`,
                paddingLeft: 28,
                margin: "0 0 40px",
              }}
            >
              Whiteboards are the primary medium for collaborative ideation in
              academic and professional settings — yet the information they
              contain is routinely lost or degraded when captured as static
              photographs.
            </p>
            <p
              style={{
                color: "#94a3b8",
                lineHeight: 1.9,
                fontSize: 16,
                fontFamily: FONT_MAIN,
                margin: "0 0 24px",
              }}
            >
              Existing tools fall into two categories. OCR extracts printed text
              but discards spatial layout entirely and fails on handwriting,
              diagrams, and mathematical notation. Commercial scanning apps like
              Microsoft Lens produce enhanced raster images — but not editable
              elements. Neither approach preserves the structural semantics of
              whiteboard content in a form that supports downstream digital
              work.
            </p>
            <p
              style={{
                color: "#94a3b8",
                lineHeight: 1.9,
                fontSize: 16,
                fontFamily: FONT_MAIN,
                margin: 0,
              }}
            >
              BoardScan addresses this as an{" "}
              <em
                style={{
                  color: "#cbd5e1",
                  fontStyle: "normal",
                  fontWeight: 700,
                }}
              >
                object detection problem
              </em>
              . Rather than producing a cleaner photograph, the system detects
              each spatial region independently, converts it to a scalable
              vector path, and reconstructs the full layout as an interactive
              canvas — preserving not just the content, but its editability.
            </p>
          </div>
        </section>

        {/* ── PIPELINE ── */}
        <section
          style={{
            padding: "96px 7vw",
            background: SURFACE,
            borderTop: `1px solid ${RULE}`,
            borderBottom: `1px solid ${RULE}`,
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <SectionRule label="Inference Pipeline" coord="02" />
            <p
              style={{
                color: "#94a3b8",
                lineHeight: 1.9,
                fontSize: 16,
                maxWidth: 680,
                marginBottom: 56,
                fontFamily: FONT_MAIN,
              }}
            >
              Four sequential stages coordinated by a Flask server running
              locally on the user's machine. The mobile app transmits the
              captured image and receives a .excalidraw JSON payload in return.
            </p>
            <PipelineDiagram />
          </div>
        </section>

        {/* ── RESULTS ── */}
        <section
          style={{ padding: "96px 7vw", maxWidth: 1100, margin: "0 auto" }}
        >
          <SectionRule label="Experimental Results" coord="03" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 1,
              marginBottom: 64,
            }}
          >
            {metrics.map((m, i) => (
              <div
                key={i}
                style={{
                  padding: "28px 22px",
                  background: SURFACE,
                  borderTop: `1.5px solid ${m.accent}`,
                }}
              >
                <p
                  style={{
                    fontFamily: "monospace",
                    fontSize: 10,
                    color: "#ffffff25",
                    margin: "0 0 10px",
                    letterSpacing: ".1em",
                  }}
                >
                  {m.label}
                </p>
                <p
                  style={{
                    fontSize: "clamp(22px,2.8vw,30px)",
                    fontWeight: 800,
                    color: m.accent === "#ffffff25" ? "#cbd5e1" : m.accent,
                    margin: "0 0 6px",
                    fontFamily: FONT_MAIN,
                  }}
                >
                  {m.value}
                </p>
                <p
                  style={{
                    fontFamily: "monospace",
                    fontSize: 9,
                    color: "#ffffff20",
                    margin: 0,
                    letterSpacing: ".06em",
                  }}
                >
                  {m.sub}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              padding: "36px 40px",
              background: SURFACE,
              border: `1px solid #ffffff0a`,
              borderRadius: 4,
            }}
          >
            <p
              style={{
                fontFamily: "monospace",
                fontSize: 10,
                color: "#ffffff30",
                margin: "0 0 28px",
                letterSpacing: ".14em",
                textTransform: "uppercase",
              }}
            >
              Detection accuracy over epochs
            </p>
            <TrainingChart />
          </div>

          <div
            style={{
              marginTop: 16,
              padding: "14px 20px",
              background: SURFACE,
              borderLeft: `2px solid ${PASTEL_ORANGE}40`,
              borderRadius: "0 3px 3px 0",
            }}
          >
            <p
              style={{
                fontFamily: FONT_MAIN,
                fontSize: 14,
                color: "#94a3b8",
                margin: 0,
                fontWeight: 500,
              }}
            >
              <span style={{ color: PASTEL_ORANGE, fontWeight: 700 }}>
                Note
              </span>{" "}
              — Model peaks at epoch 40 of 300 scheduled. The plateau at 40.3%
              mAP@50 reflects dataset scale, not an architecture ceiling.
              Training signal from 100 annotated images was exhausted before the
              learning schedule completed.
            </p>
          </div>
        </section>

        {/* ── FAILURE LOG ── */}
        <section
          style={{
            padding: "96px 7vw",
            background: SURFACE,
            borderTop: `1px solid ${RULE}`,
            borderBottom: `1px solid ${RULE}`,
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <SectionRule label="Failure Log" coord="04" />
            <p
              style={{
                color: "#94a3b8",
                lineHeight: 1.9,
                fontSize: 16,
                marginBottom: 40,
                fontFamily: FONT_MAIN,
              }}
            >
              Every significant design decision in this project was preceded by
              something breaking. The log below documents each failure and how
              it was resolved.
            </p>
            {failures.map((f, i) => (
              <LogEntry key={i} {...f} />
            ))}
          </div>
        </section>

        {/* ── DECISIONS ── */}
        <section
          style={{ padding: "96px 7vw", maxWidth: 1100, margin: "0 auto" }}
        >
          <SectionRule label="Design Decisions" coord="05" />
          <div>
            {[
              {
                q: "Why VTracer over Potrace?",
                a: "Potrace traces stroke outlines, producing hollow letter forms that are visually degraded for handwriting. VTracer's hierarchical path-fitting algorithm produces filled paths better suited to the dense, variable-width strokes found in whiteboard marker handwriting. The rendering difference was immediately apparent in output comparisons.",
              },
              {
                q: "Why two detection classes, not a finer taxonomy?",
                a: "We explored separating mathematical notation from prose handwriting, and arrow types from enclosures. Each additional class reduced per-class training data and hurt recall. At 100 annotated images, the two-class design — handwriting and shape — represents the granularity the data can reliably support while still providing sufficient structure for Excalidraw canvas assembly.",
              },
              {
                q: "Why a local Flask server over a cloud API?",
                a: "Running locally eliminated per-call network latency and kept the system functional without an internet connection — appropriate for classroom environments. The local server dependency is the primary usability limitation and the first target for future infrastructure work: containerization and cloud deployment.",
              },
              {
                q: "Why .excalidraw over a flat SVG export?",
                a: "A flat SVG would be simpler to produce but misses the actual use case: users need to select, move, delete, and annotate individual elements after digitization. The .excalidraw format natively supports per-element interaction and infinite canvas zoom. Choosing it made canvas assembly more complex but made the output genuinely usable rather than just a prettier photograph.",
              },
              {
                q: "Why 640×640 input resolution?",
                a: "1280×1280 caused memory overflow on unified memory during both training and inference. 640×640 is the engineering compromise between detail preservation and hardware feasibility on the target deployment machine. The dataset was curated with thin-stroke and high-glare examples to compensate for the detail lost at reduced resolution.",
              },
            ].map((d, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1.6fr",
                  gap: 60,
                  padding: "32px 0",
                  borderBottom: `1px solid ${RULE}`,
                }}
              >
                <p
                  style={{
                    color: "#e2e8f0",
                    fontSize: 16,
                    fontWeight: 700,
                    fontFamily: FONT_MAIN,
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {d.q}
                </p>
                <p
                  style={{
                    color: "#cbd5e1",
                    fontSize: 16,
                    lineHeight: 1.85,
                    margin: 0,
                    fontFamily: FONT_MAIN,
                  }}
                >
                  {d.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TAKEAWAYS ── */}
        <section
          style={{
            padding: "96px 7vw",
            background: SURFACE,
            borderTop: `1px solid ${RULE}`,
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <SectionRule label="Key Learnings" coord="06" />
            <div>
              {[
                {
                  n: "01",
                  h: "Dataset scale is the primary performance lever",
                  b: "The model exhausted its training signal at epoch 40 of 300 — not because the architecture was wrong, but because 100 annotated images has a hard ceiling on pattern diversity. Architecture selection, optimizer choice, and augmentation all matter considerably less than dataset quantity and diversity. Every future work recommendation flows from this observation.",
                },
                {
                  n: "02",
                  h: "Summary metrics can hide critical failure modes",
                  b: "Our initial training run appeared healthy on training metrics while validation loss was quietly diverging. Plotting training and validation curves explicitly surfaced what aggregate numbers obscured. The correct fix — dropout, weight decay, unfrozen backbone — became clear only after diagnosing the actual failure signature rather than tuning hyperparameters blindly.",
                },
                {
                  n: "03",
                  h: "Hardware constraints are design inputs, not just limitations",
                  b: "The 640×640 resolution compromise was shaped by unified memory limits. Understanding those limits changed how we approached dataset curation: ensuring the training set built explicit tolerance for the detail that would be lost at reduced resolution. Constraints surfaced in the build phase should reshape upstream decisions.",
                },
                {
                  n: "04",
                  h: "Modular pipelines make debugging tractable",
                  b: "Because detection, preprocessing, and vectorization maintained clean interfaces, failures could be isolated precisely. Right-side blind spots pointed to data bias in the detection stage. Fragmented SVG paths pointed to preprocessing threshold sensitivity. A monolithic pipeline would have turned each of these into a multi-day search across an undifferentiated codebase.",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "52px 1fr",
                    padding: "36px 0",
                    borderBottom: `1px solid ${RULE}`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: 22,
                      color: `${CYAN}30`,
                      fontWeight: 800,
                      paddingTop: 3,
                    }}
                  >
                    {t.n}
                  </span>
                  <div>
                    <h3
                      style={{
                        color: "#f1f5f9",
                        fontSize: 18,
                        fontWeight: 700,
                        margin: "0 0 14px",
                        fontFamily: FONT_MAIN,
                      }}
                    >
                      {t.h}
                    </h3>
                    <p
                      style={{
                        color: "#cbd5e1",
                        fontSize: 16,
                        lineHeight: 1.85,
                        margin: 0,
                        fontFamily: FONT_MAIN,
                      }}
                    >
                      {t.b}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FUTURE WORK ── */}
        <section
          style={{ padding: "96px 7vw", maxWidth: 1100, margin: "0 auto" }}
        >
          <SectionRule label="Future Work" coord="07" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 1,
            }}
          >
            {[
              {
                p: "P0",
                label: "Dataset expansion",
                body: "Grow the annotated set to 500–1000 images with deliberate spatial diversity and right-heavy content distribution. Based on the observed learning trajectory, this is estimated to push mAP@50 into the 55–65% range.",
                c: CYAN,
              },
              {
                p: "P0",
                label: "Centerline tracing",
                body: "Explore alternatives to VTracer for thin-stroke fidelity. Centerline methods produce paths along the center of each stroke rather than its outline — better suited to fine handwriting than VTracer's current approach.",
                c: CYAN,
              },
              {
                p: "P1",
                label: "Cloud deployment",
                body: "Containerize the Flask inference server and evaluate cloud hosting to remove the local network dependency. The local setup is the primary friction point for end users outside the original development environment.",
                c: PASTEL_ORANGE,
              },
              {
                p: "P1",
                label: "OCR integration",
                body: "Layer text recognition on detected handwriting regions to produce searchable, copy-pasteable content alongside the vector paths — making the canvas output useful for downstream text-based workflows.",
                c: PASTEL_ORANGE,
              },
              {
                p: "P1",
                label: "Perspective correction",
                body: "Automatic rectification of off-angle captures before the detection stage, reducing sensitivity to how the board was photographed and expanding the range of usable input images.",
                c: PASTEL_ORANGE,
              },
              {
                p: "P2",
                label: "Real-time preview",
                body: "Live bounding box overlay during mobile camera capture so users can verify detection coverage before submitting the image for processing.",
                c: "#ffffff25",
              },
              {
                p: "P2",
                label: "Multi-board stitching",
                body: "Detect and align overlapping captures of a large whiteboard into a single continuous canvas — necessary for boards that are too wide to capture in a single photograph.",
                c: "#ffffff25",
              },
              {
                p: "P2",
                label: "Collaborative editing",
                body: "Serve the resulting .excalidraw canvas via a shared URL, enabling simultaneous multi-user annotation of the digitized whiteboard without requiring file sharing.",
                c: "#ffffff25",
              },
            ].map((f, i) => (
              <div
                key={i}
                style={{
                  padding: "28px 26px",
                  background: SURFACE,
                  borderTop: `1.5px solid ${f.c}`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: 10,
                      padding: "2px 7px",
                      background: `${f.c}16`,
                      color: f.c,
                      borderRadius: 2,
                      letterSpacing: ".06em",
                    }}
                  >
                    {f.p}
                  </span>
                  <span
                    style={{
                      color: "#e2e8f0",
                      fontWeight: 700,
                      fontSize: 16,
                      fontFamily: FONT_MAIN,
                    }}
                  >
                    {f.label}
                  </span>
                </div>
                <p
                  style={{
                    color: "#cbd5e1",
                    fontSize: 15,
                    lineHeight: 1.7,
                    margin: 0,
                    fontFamily: FONT_MAIN,
                  }}
                >
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <section
          style={{
            padding: "56px 7vw 80px",
            borderTop: `1px solid ${RULE}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: FONT_MAIN,
                fontSize: 20,
                fontWeight: 900,
                color: "#e2e8f0",
                margin: "0 0 4px",
                letterSpacing: "-.02em",
              }}
            >
              BOARD<span style={{ color: CYAN }}>SCAN</span>
            </p>
            <p
              style={{
                fontFamily: "monospace",
                fontSize: 10,
                color: "#ffffff25",
                margin: 0,
                letterSpacing: ".1em",
              }}
            >
              Shaz Kumar · Abel Thomas · Ethan Turner
            </p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {[
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/shaswatkumar1/",
              },
              { label: "GitHub", href: "https://github.com/kumarshaswat" },
              { label: "Email", href: "mailto:shaswat_kr@yahoo.com" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  padding: "9px 18px",
                  border: "1px solid #ffffff15",
                  borderRadius: 3,
                  color: "#94a3b8",
                  fontFamily: "monospace",
                  fontSize: 11,
                  textDecoration: "none",
                  letterSpacing: ".06em",
                  transition: "border-color .2s,color .2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = CYAN;
                  e.currentTarget.style.color = CYAN;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#ffffff15";
                  e.currentTarget.style.color = "#94a3b8";
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
