import React, { useState, useEffect } from "react";
import { T } from "./ui";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "about", "experience", "projects", "skills", "contact"];
      let current = "";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 150px offset to account for navbar height + breathing room
          if (rect.top <= 150) {
            current = section;
          }
        }
      }

      setActive((prev) => {
        if (window.scrollY === 0) return "hero";

        // If we are at the very bottom of the page, highlight the last section (contact)
        if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50) {
          return "contact";
        }

        if (current !== "" && prev !== current) return current;
        return prev;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["about", "experience", "projects", "skills", "contact"];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "1.2rem 3rem",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      background: scrolled ? "rgba(13,15,20,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(201,169,110,0.15)" : "none",
      transition: "all 0.4s",
    }}>
      <a href="#hero" onClick={() => setActive("hero")} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "Georgia,serif", fontSize: "1rem", letterSpacing: "3px", color: T.gold, textTransform: "uppercase", textDecoration: "none" }}>
        Nhan Le Quy
      </a>

      <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
        {links.map(id => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={() => setActive(id)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "Arial,sans-serif", fontSize: "0.75rem",
                letterSpacing: "2px", textTransform: "uppercase",
                color: active === id ? T.gold : T.muted,
                transition: "color 0.3s",
                borderBottom: active === id ? `1px solid ${T.gold}` : "none",
                paddingBottom: 2,
                textDecoration: "none"
              }}
            >
              {id}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}