import React, { useState } from "react";
import { T, FadeIn, SectionHeader } from "./ui";

function ContactBtn({ label, href }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-block", padding: "0.7rem 1.5rem",
        border: `1px solid ${hov ? T.gold : "rgba(201,169,110,0.3)"}`,
        fontFamily: "Arial,sans-serif", fontSize: "0.72rem",
        letterSpacing: "2px", textTransform: "uppercase",
        color: hov ? T.gold : T.muted,
        transition: "all 0.3s", textDecoration: "none",
      }}
    >
      {label}
    </a>
  );
}

export default function Contact() {
  const links = [
    { label: "Email", href: "mailto:nhan.lequy12@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nhanlequy/" },
    { label: "Github", href: "https://github.com/nhanlequy12" },
    { label: "Facebook", href: "https://www.facebook.com/nhan.lequy.12/" },
  ];
  return (
    <section id="contact" style={{ padding: "6rem 2rem", minWidth: "120px", background: T.dark, textAlign: "center" }}>
      <div style={{ maxWidth: 520, margin: "0 auto" }}>
        <FadeIn>
          <SectionHeader label="Contact" title="Let's connect" align="center" />
          <p style={{ fontFamily: "Arial,sans-serif", fontSize: "0.92rem", color: T.muted, lineHeight: 1.8, marginBottom: "2rem" }}>
            Open to AI/ML roles, research collaborations, and interesting side projects. Feel free to reach out.
          </p>
          <div style={{ display: "flex", flexWrap: "nowrap", justifyContent: "center", gap: "1rem" }}>
            {links.map(({ label, href }) => (
              <ContactBtn key={label} label={label} href={href} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
