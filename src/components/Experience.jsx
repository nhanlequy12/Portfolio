import React from "react";
import { T, FadeIn, SectionHeader } from "./ui";

export default function Experience() {
  const jobs = [
    {
      period: "08 / 2025 — 02 / 2026",
      company: "Bosch Global Software Technologies",
      role: "Software Engineering Intern",
      bullets: [
        "Navigated Linux-based environments using Vim and CLI tools, adhering to standard Git workflows for code integration and peer reviews.",
        "Collaborated within an Agile/Kanban framework, managing task progress and actively participating in team syncs.",
        "Integrated a custom Vehicle Hardware Abstraction Layer service into the Android Open Source Project build system.",
      ],
    },
  ];

  return (
    <section id="experience" style={{ padding: "6rem 2rem", background: T.dark }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn><SectionHeader label="Work Experience" title="Where I've Worked" /></FadeIn>

        <FadeIn>
          <div style={{ position: "relative", paddingLeft: "2rem", borderLeft: "1px solid rgba(201,169,110,0.2)" }}>
            {jobs.map((job, i) => (
              <div key={i} style={{ position: "relative", marginBottom: "2.5rem", textAlign: "left" }}>
                <div style={{ position: "absolute", left: "-2.4rem", top: "0.4rem", width: 8, height: 8, borderRadius: "50%", background: T.gold }} />
                <p style={{ fontFamily: "Arial,sans-serif", fontSize: "0.7rem", letterSpacing: "2px", color: T.gold, marginBottom: "0.4rem" }}>{job.period}</p>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 400, marginBottom: "0.2rem" }}>{job.company}</h3>
                <p style={{ fontFamily: "Arial,sans-serif", fontSize: "0.8rem", letterSpacing: "1px", color: T.muted, marginBottom: "0.8rem" }}>{job.role}</p>

                <ul style={{ listStyle: "none", padding: 0 }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ position: "relative", fontFamily: "Arial,sans-serif", fontSize: "0.85rem", color: T.muted, lineHeight: 1.7, marginBottom: "0.5rem", paddingLeft: "1rem" }}>
                      <span style={{ position: "absolute", left: 0, color: T.gold }}>—</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
