import React from "react";
import { T, Btn } from "./ui";

export default function Hero() {
  const anim = (delay) => ({
    opacity: 0,
    animation: `fadeUp 0.8s ${delay}s forwards`,
  });
  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", textAlign: "center",
      padding: "6rem 2rem 4rem",
      background: "radial-gradient(ellipse at 50% 60%, rgba(201,169,110,0.07) 0%, transparent 70%)",
    }}>
      <div>
        <p style={{ fontFamily: "Arial,sans-serif", fontSize: "0.75rem", letterSpacing: "4px", textTransform: "uppercase", color: T.gold, marginBottom: "1.5rem", ...anim(0.3) }}>
          AI Engineer
        </p>
        <h1 style={{ fontSize: "clamp(3rem,8vw,5.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-1px", marginBottom: "1.2rem", ...anim(0.5) }}>
          Nhan<br /><span style={{ color: T.gold }}>Le Quy</span>
        </h1>
        <p style={{ fontFamily: "Arial,sans-serif", fontSize: "1rem", color: T.muted, maxWidth: 520, margin: "0 auto 2.5rem", lineHeight: 1.8, ...anim(0.7) }}>
          Building intelligent systems that bridge AI research and production — from diffusion models to scalable MLOps pipelines.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", ...anim(0.9) }}>
          <Btn href="#projects">View Projects</Btn>
          <Btn ghost href="#contact">Get In Touch</Btn>
        </div>
        <div style={{ width: 1, height: 60, background: `linear-gradient(to bottom,${T.gold},transparent)`, margin: "4rem auto 0", ...anim(1.1) }} />
      </div>
    </section>
  );
}