import React from "react";
import { useState } from "react";

const sections = [
  {
    id: "getting-started",
    label: "Getting Started",
    content: {
      title: "Getting Started",
      subtitle: "Welcome to Textify — a collection of beautiful heading animations for your React projects.",
      blocks: [
        {
          type: "text",
          content: "Textify gives you plug-and-play animated heading components built with Framer Motion. Pick an animation, copy the code, drop it in your project."
        },
        {
          type: "step",
          steps: [
            { number: "01", title: "Browse animations", desc: "Go to the Animations page and preview each effect live." },
            { number: "02", title: "Customize it", desc: "Tweak text, color, duration, blur and easing from the Edit panel." },
            { number: "03", title: "Copy the code", desc: "Hit the copy button on the code block and paste it into your project." },
          ]
        }
      ]
    }
  },
  {
    id: "installation",
    label: "Installation",
    content: {
      title: "Installation",
      subtitle: "Textify components depend on Framer Motion. Install it before using any animation.",
      blocks: [
        { type: "text", content: "Install Framer Motion via your package manager:" },
        { type: "code", filename: "terminal", code: `npm install motion` },
        { type: "text", content: "Then copy any animation component from the Animations page into your project. No extra config needed." },
        { type: "callout", variant: "info", content: "Textify is not an npm package — it's a copy-paste library. You own the code." }
      ]
    }
  },
  {
    id: "usage",
    label: "How to Use",
    content: {
      title: "How to Use",
      subtitle: "Each animation component accepts a standard set of props for full customization.",
      blocks: [
        { type: "text", content: "After copying the component into your project, import and use it like any React component:" },
        {
          type: "code",
          filename: "MyPage.jsx",
          code: `import FadeInUp from './animations/FadeInUp'

export default function Hero() {
  return (
    <FadeInUp
      text="Hello World"
      color="#ff2d78"
      duration={0.6}
      blur={10}
      ease="easeInOut"
    />
  )
}`
        },
        { type: "text", content: "All Textify components accept the following props:" },
        {
          type: "props",
          rows: [
            { prop: "text", type: "string", default: '"Textortion"', desc: "The heading text to animate." },
            { prop: "color", type: "string", default: '"#ff2d78"', desc: "Text color — accepts any CSS color or hex." },
            { prop: "duration", type: "number", default: "0.5", desc: "Animation duration in seconds." },
            { prop: "blur", type: "number", default: "0", desc: "Starting blur in px. Animates to 0." },
            { prop: "ease", type: "string", default: '"easeInOut"', desc: '"easeIn" | "easeOut" | "easeInOut" | "linear"' },
          ]
        },
        { type: "callout", variant: "warn", content: "For spring-based animations like StaggerBounce, duration controls opacity and blur — not the bounce itself." }
      ]
    }
  }
]

function CodeBlock({ code, filename }) {
  const [copied, setCopied] = useState(false)
  return (
    <div style={{ border: "1px solid #1e1e1e", borderRadius: "10px", overflow: "hidden", margin: "16px 0" }}>
      <div style={{ background: "#111", borderBottom: "1px solid #1e1e1e", padding: "8px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "11px", color: "#555", fontFamily: "monospace" }}>{filename}</span>
        <button onClick={() => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000) }}
          style={{ background: copied ? "#ccff00" : "transparent", color: copied ? "#0a0a0a" : "#555", border: `1px solid ${copied ? "#ccff00" : "#2a2a2a"}`, borderRadius: "5px", padding: "3px 10px", fontSize: "10px", cursor: "pointer", fontFamily: "monospace", transition: "all 0.2s" }}>
          {copied ? "COPIED ✓" : "COPY"}
        </button>
      </div>
      <pre style={{ margin: 0, padding: "20px", background: "#0d0d0d", fontSize: "12px", lineHeight: 1.8, color: "#888", overflowX: "auto", fontFamily: "monospace", whiteSpace: "pre" }}>
        <code>{code}</code>
      </pre>
    </div>
  )
}

function PropsTable({ rows }) {
  return (
    <div style={{ overflowX: "auto", margin: "16px 0", border: "1px solid #1a1a1a", borderRadius: "10px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", fontFamily: "monospace" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #1e1e1e", background: "#111" }}>
            {["Prop", "Type", "Default", "Description"].map(h => (
              <th key={h} style={{ textAlign: "left", padding: "10px 16px", color: "#ccff00", fontWeight: 700, fontSize: "10px", letterSpacing: "0.1em" }}>{h.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #111", background: i % 2 === 0 ? "#0d0d0d" : "#0a0a0a" }}>
              <td style={{ padding: "12px 16px", color: "#ff2d78" }}>{row.prop}</td>
              <td style={{ padding: "12px 16px", color: "#60a5fa" }}>{row.type}</td>
              <td style={{ padding: "12px 16px", color: "#888" }}>{row.default}</td>
              <td style={{ padding: "12px 16px", color: "#666" }}>{row.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Callout({ content, variant }) {
  return (
    <div style={{ border: `1px solid ${variant === "warn" ? "#ff2d7840" : "#ccff0040"}`, background: variant === "warn" ? "#ff2d7808" : "#ccff0008", borderRadius: "8px", padding: "14px 18px", margin: "16px 0", fontSize: "13px", color: variant === "warn" ? "#ff2d78" : "#ccff00", fontFamily: "monospace", lineHeight: 1.6 }}>
      {variant === "warn" ? "⚠ " : "ℹ "}{content}
    </div>
  )
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("getting-started")
  const current = sections.find(s => s.id === activeSection)

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", fontFamily: "'Space Mono', monospace", color: "#e0e0e0", display: "flex", flexDirection: "column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Navbar */}
      <nav style={{ borderBottom: "1px solid #1a1a1a", padding: "14px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#0a0a0a" }}>
        <span style={{ fontSize: "18px", fontWeight: 700, color: "#ccff00", letterSpacing: "-0.02em" }}>
          textify<span style={{ color: "#333" }}>.</span>
        </span>
        <span style={{ fontSize: "10px", color: "#333", letterSpacing: "0.2em" }}>DOCS</span>
      </nav>

      <div style={{ display: "flex", flex: 1, height: "calc(100vh - 49px)" }}>

        {/* Sidebar */}
        <div style={{ width: "210px", borderRight: "1px solid #1a1a1a", padding: "28px 12px", display: "flex", flexDirection: "column", gap: "4px", overflowY: "auto", flexShrink: 0 }}>
          <p style={{ fontSize: "9px", color: "#333", letterSpacing: "0.2em", marginBottom: "12px", paddingLeft: "12px" }}>CONTENTS</p>
          {sections.map(s => (
            <button key={s.id} onClick={() => setActiveSection(s.id)}
              style={{ background: activeSection === s.id ? "#ccff0010" : "transparent", border: `1px solid ${activeSection === s.id ? "#ccff00" : "transparent"}`, color: activeSection === s.id ? "#ccff00" : "#555", borderRadius: "6px", padding: "10px 12px", textAlign: "left", fontSize: "12px", cursor: "pointer", transition: "all 0.2s", fontFamily: "monospace", width: "100%" }}>
              {s.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: "48px 56px", overflowY: "auto", maxWidth: "800px" }}>
          <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#e0e0e0", marginBottom: "10px", letterSpacing: "-0.02em" }}>
            {current.content.title}
          </h1>
          <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.8, marginBottom: "32px", borderBottom: "1px solid #1a1a1a", paddingBottom: "24px" }}>
            {current.content.subtitle}
          </p>

          {current.content.blocks.map((block, i) => {
            if (block.type === "text") return <p key={i} style={{ color: "#666", fontSize: "14px", lineHeight: 1.8, marginBottom: "16px" }}>{block.content}</p>
            if (block.type === "code") return <CodeBlock key={i} code={block.code} filename={block.filename} />
            if (block.type === "callout") return <Callout key={i} content={block.content} variant={block.variant} />
            if (block.type === "props") return <PropsTable key={i} rows={block.rows} />
            if (block.type === "step") return (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: "12px", margin: "24px 0" }}>
                {block.steps.map((step, j) => (
                  <div key={j} style={{ display: "flex", gap: "20px", alignItems: "flex-start", border: "1px solid #1a1a1a", borderRadius: "10px", padding: "18px 20px" }}>
                    <span style={{ fontSize: "22px", fontWeight: 700, color: "#ccff00", minWidth: "36px" }}>{step.number}</span>
                    <div>
                      <p style={{ color: "#e0e0e0", fontWeight: 700, marginBottom: "6px", fontSize: "13px" }}>{step.title}</p>
                      <p style={{ color: "#555", fontSize: "12px", lineHeight: 1.6 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )
            return null
          })}
        </div>
      </div>
    </div>
  )
}