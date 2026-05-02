import React from "react";
import { T, FadeIn, SectionHeader } from "./ui";

export default function Skills() {
  const groups = [
    { label: "Languages", items: ["Python", "JavaScript", "C++"] },
    { label: "AI / ML", items: ["PyTorch · TensorFlow", "LangChain · LangGraph", "Pandas · NumPy", "Scikit-learn"] },
    { label: "Backend & MLOps", items: ["FastAPI", "Docker · MLflow", "Prometheus · Grafana · Loki", "DVC · Git"] },
    { label: "Databases", items: ["MSSQL · MongoDB", "Pinecone · Firebase"] },
  ];
  return (
    <>
      <section id="skills" style={{ padding: "6rem 2rem", background: T.dark, textAlign: "left" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <FadeIn><SectionHeader label="Technical Skills" title="Tools &amp; Technologies" /></FadeIn>

          <FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "2rem" }}>
              {groups.map(g => (
                <div key={g.label} style={{ borderLeft: "1px solid rgba(201,169,110,0.2)", paddingLeft: "1.5rem" }}>
                  <h3 style={{ fontFamily: "Arial,sans-serif", fontSize: "0.7rem", letterSpacing: "3px", textTransform: "uppercase", color: T.gold, marginBottom: "1rem" }}>{g.label}</h3>
                  {g.items.map(it => (
                    <div key={it} style={{ position: "relative", fontFamily: "Arial,sans-serif", fontSize: "0.87rem", color: T.muted, marginBottom: "0.6rem", paddingLeft: "0.9rem" }}>
                      <span style={{ position: "absolute", left: 0, top: "0.45em", width: 4, height: 4, borderRadius: "50%", background: T.gold, display: "inline-block" }} />
                      {it}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="cert" style={{ padding: "4rem 2rem", background: T.dark2 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <FadeIn>
            <SectionHeader label="Certifications" title="Credentials" />
            <div style={{ background: T.dark3, border: "1px solid rgba(201,169,110,0.2)", padding: "1.2rem 2rem", display: "inline-flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(201,169,110,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: T.gold, fontSize: "1rem", flexShrink: 0 }}>◆</div>
              <div>
                <p style={{ fontFamily: "Arial,sans-serif", fontSize: "0.9rem", color: T.light }}>Applications of AI for Anomaly Detection</p>
                <p style={{ fontFamily: "Arial,sans-serif", fontSize: "0.75rem", color: T.gold, marginTop: "0.2rem" }}>NVIDIA — 2024</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
