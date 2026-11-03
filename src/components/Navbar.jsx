import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = ["hero", ...LINKS.map((l) => l.id), "contact"];
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);

      let current = "hero";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) current = id;
      }
      if (window.innerHeight + Math.round(y) >= document.body.offsetHeight - 40) current = "contact";
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__progress" style={{ width: `${progress}%` }} />
      <div className="container nav__inner">
        <a href="#hero" className="nav__logo" aria-label="Back to top" onClick={() => setOpen(false)}>
          nhan<i>.</i>
        </a>

        <button
          className={`nav__burger ${open ? "nav__burger--open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>

        <div className={`nav__links ${open ? "nav__links--open" : ""}`}>
          {LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav__link ${active === id ? "nav__link--active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="btn btn--ink nav__cta" onClick={() => setOpen(false)}>
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
