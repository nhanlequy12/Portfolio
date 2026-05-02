import React from "react";
import { T, FadeIn, Tag, SectionHeader } from "./ui";

export default function About() {
  const infoRows = [
    ["Email", "nhan.lequy12@gmail.com", "mailto:nhan.lequy12@gmail.com"],
    ["Phone", "0987 735 699", "tel:0987735699"],
    ["Location", "Ho Chi Minh City, VN", null],
    ["LinkedIn", "nhanlequy", "https://www.linkedin.com/in/nhanlequy/"],
    ["DOB", "12 / 01 / 2004", null],
  ];

  return (
    <section id="about" style={{ padding: "6rem 2rem", background: T.dark2 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "4rem", alignItems: "start" }}>

            <div style={{ background: T.dark3, border: "1px solid rgba(201,169,110,0.15)", padding: "2rem", position: "relative" }}>
              <div style={{ position: "absolute", top: 10, left: 10, right: -10, bottom: -10, border: "1px solid rgba(201,169,110,0.07)", pointerEvents: "none" }} />
              <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(201,169,110,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", color: T.gold, marginBottom: "1.2rem" }}>
                ☺
              </div>
              {infoRows.map(([label, val, href]) => (
                <div key={label} style={{ display: "flex", gap: "0.6rem", alignItems: "baseline", marginBottom: "0.6rem" }}>
                  <span style={{ fontFamily: "Arial,sans-serif", fontSize: "0.68rem", letterSpacing: "2px", textTransform: "uppercase", color: T.gold, minWidth: 65 }}>
                    {label}
                  </span>
                  {href
                    ? <a href={href} target="_blank" rel="noreferrer" style={{ fontFamily: "Arial,sans-serif", fontSize: "0.85rem", color: T.goldL }}>{val}</a>
                    : <span style={{ fontFamily: "Arial,sans-serif", fontSize: "0.85rem", color: T.muted }}>{val}</span>
                  }
                </div>
              ))}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.5rem" }}>
                {["PyTorch", "LangChain", "FastAPI", "Docker", "MLflow", "Python"].map(s => <Tag key={s} label={s} />)}
              </div>
            </div>

            <div style={{ textAlign: "left" }}>
              <SectionHeader label="About Me" title="Turning research<br/>into real-world AI" />
              {[
                "I'm an AI Engineer currently pursuing a Bachelor of Computer Science at the University of Information Technology — VNUHCM (GPA 3.2/4.0). My work spans machine learning, deep learning, and production-grade AI systems.",
                "I specialize in bridging the gap between cutting-edge AI research and scalable deployment — whether that's building RAG pipelines, training diffusion models, or orchestrating ML lifecycle management with MLOps tools.",
                "Outside of code, I follow AI/ML research papers closely, contribute to open-source projects, play badminton, and study Japanese.",
              ].map((p, i) => (
                <p key={i} style={{ fontFamily: "Arial,sans-serif", fontSize: "0.92rem", color: T.muted, lineHeight: 1.85, marginBottom: "1.2rem" }}>{p}</p>
              ))}
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}