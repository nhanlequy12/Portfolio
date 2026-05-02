import React, { useState } from "react";
import { T, FadeIn, SectionHeader, Tag } from "./ui";

export const PROJECTS = [
  {
    id: "tryon",
    period: "03 / 2026 — Present",
    title: "Virtual Try-On Clothes",
    type: "Diffusion Models · Personal Project",
    desc: "Enables users to visualize themselves wearing different outfits through realistic AI-generated try-on images using StableVITON and Latent Diffusion Models. Integrates SAM & DINO for precise foreground segmentation.",
    tags: ["Diffusion Models", "StableVITON", "SAM", "DINO", "PyTorch"],
    github: "https://github.com/nhanlequy12", // thay bằng link repo thực tế
  },
  {
    id: "infobot",
    period: "01 / 2025 — 03 / 2025",
    title: "Infobot",
    type: "Full-Stack AI Web App · Personal Project",
    desc: "AI-driven RAG web app that lets users chat with PDF documents and auto-generate quizzes. Built with React and FastAPI, integrating OCR, LLMs (OpenAI/Gemini), and Pinecone vector databases.",
    tags: ["RAG", "LangChain", "FastAPI", "Pinecone", "React"],
    github: "https://github.com/NahwngLe/Infobot", // thay bằng link repo thực tế
  },
  {
    id: "anomaly",
    period: "03 / 2025 — 05 / 2025",
    title: "Network Anomaly Detection",
    type: "MLOps · Course Project",
    desc: "ML models trained on CICIDS2017 to detect network anomalies. Managed full model lifecycle with MLflow for experiment tracking, deployed via Docker and FastAPI.",
    tags: ["Scikit-learn", "MLflow", "Docker", "FastAPI", "MLOps"],
    github: "https://github.com/NahwngLe/mlflow-network-anomaly-cicids2017", // thay bằng link repo thực tế
  },
];

function ProjectCard({ project }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "block",
        textDecoration: "none",
        color: "inherit",
        background: T.dark3,
        border: `1px solid ${hov ? "rgba(201,169,110,0.4)" : "rgba(201,169,110,0.1)"}`,
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
        transform: hov ? "translateY(-4px)" : "none",
        transition: "border-color 0.3s, transform 0.3s",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: hov ? "100%" : 0, background: T.gold, transition: "height 0.3s" }} />
      <p style={{ fontFamily: "Arial,sans-serif", fontSize: "0.68rem", letterSpacing: "2px", color: T.gold, marginBottom: "0.8rem" }}>{project.period}</p>
      <h3 style={{ fontSize: "1.1rem", fontWeight: 400, marginBottom: "0.4rem" }}>{project.title}</h3>
      <p style={{ fontFamily: "Arial,sans-serif", fontSize: "0.7rem", letterSpacing: "1px", color: T.muted, marginBottom: "0.8rem" }}>{project.type}</p>
      <p style={{ fontFamily: "Arial,sans-serif", fontSize: "0.83rem", color: T.muted, lineHeight: 1.75, marginBottom: "1.2rem" }}>{project.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.tags.map(t => <Tag key={t} label={t} />)}
      </div>
      <p style={{ fontFamily: "Arial,sans-serif", fontSize: "0.62rem", letterSpacing: "2px", textTransform: "uppercase", color: hov ? T.gold : T.muted, marginTop: "1.5rem", transition: "color 0.3s" }}>
        View on GitHub ↗
      </p>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "6rem 2rem", background: T.dark2 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn><SectionHeader label="Selected Projects" title="What I've Built" /></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem", textAlign: "left" }}>
          {PROJECTS.map(p => (
            <FadeIn key={p.id}>
              <ProjectCard project={p} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
