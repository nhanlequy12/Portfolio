import React, { useState, useEffect, useRef } from "react";

export const T = {
  gold: "#C9A96E",
  goldL: "#E8D5B0",
  dark: "#0D0F14",
  dark2: "#161A22",
  dark3: "#1E2330",
  muted: "#8892A4",
  light: "#F0F2F5",
};

export function useFadeIn() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, isVisible };
}

export function FadeIn({ children, style }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div ref={ref} style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(24px)",
      transition: "opacity 0.7s ease, transform 0.7s ease",
      ...style,
    }}>
      {children}
    </div>
  );
}

export function Tag({ label }) {
  return (
    <span style={{
      fontFamily: "Arial,sans-serif",
      fontSize: "0.62rem",
      letterSpacing: "1px",
      textTransform: "uppercase",
      padding: "0.25rem 0.6rem",
      background: "rgba(201,169,110,0.08)",
      color: T.goldL,
      border: "1px solid rgba(201,169,110,0.15)",
    }}>
      {label}
    </span>
  );
}

export function Btn({ children, href, ghost, onClick, style }) {
  const [hov, setHov] = useState(false);
  const base = {
    display: "inline-block",
    padding: "0.85rem 2rem",
    border: `1px solid ${ghost ? "rgba(201,169,110,0.3)" : T.gold}`,
    color: hov ? (ghost ? T.goldL : T.dark) : (ghost ? T.muted : T.gold),
    background: hov ? (ghost ? "rgba(201,169,110,0.1)" : T.gold) : "transparent",
    fontFamily: "Arial,sans-serif",
    fontSize: "0.75rem",
    letterSpacing: "2.5px",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "all 0.3s",
    textDecoration: "none",
    ...style,
  };
  const events = {
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
  };
  if (href) {
    const isInternal = href.startsWith("#");
    return <a href={href} target={isInternal ? "_self" : "_blank"} rel={isInternal ? "" : "noreferrer"} style={base} {...events}>{children}</a>;
  }
  return <button style={{ ...base, border: base.border }} onClick={onClick} {...events}>{children}</button>;
}

export function SectionHeader({ label, title, align = "left" }) {
  return (
    <div style={{ textAlign: align, marginBottom: "2.5rem" }}>

      {/* Label */}
      <p
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "0.65rem",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: T.gold,
          marginBottom: "0.5rem",
          opacity: 0.85,
        }}
      >
        {label}
      </p>

      {/* Title */}
      <h2
        style={{
          fontSize: "2.3rem",
          fontWeight: 500,
          lineHeight: 1.25,
          marginBottom: "1rem",
          color: "#fff",
          letterSpacing: "-0.5px",
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {/* Decorative line */}
      <div
        style={{
          position: "relative",
          width: 60,
          height: 2,
          background: "linear-gradient(90deg, rgba(201,169,110,1), rgba(201,169,110,0.2))",
          borderRadius: 2,
          margin: align === "center" ? "0 auto" : undefined, // 👈 chỉ thêm dòng này
        }}
      >
        {/* glow effect */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            boxShadow: "0 0 10px rgba(201,169,110,0.6)",
            opacity: 0.6,
          }}
        />
      </div>

    </div>
  );
}
