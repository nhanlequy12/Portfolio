import { useEffect, useRef, useState } from "react";

/* Reveal children once they scroll into view. */
export function Reveal({ children, className = "", delay = 0, as: Tag = "div", style }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "in" : ""} ${className}`.trim()}
      style={{ ...(delay ? { transitionDelay: `${delay}ms` } : {}), ...style }}
    >
      {children}
    </Tag>
  );
}

export function SectionHeader({ label, title, sub, center = false }) {
  return (
    <Reveal className={`sh ${center ? "sh--center" : ""}`}>
      <span className="sh__label mono">{label}</span>
      <h2 className="sh__title">{title}</h2>
      {sub && <p className="sh__sub">{sub}</p>}
    </Reveal>
  );
}

export function Tag({ children, orange = false }) {
  return <span className={`tag ${orange ? "tag--orange" : ""}`.trim()}>{children}</span>;
}

export function Button({ href, variant = "primary", children, className = "", ...rest }) {
  const external = href && /^https?:/.test(href);
  return (
    <a
      href={href}
      className={`btn btn--${variant} ${className}`.trim()}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      {...rest}
    >
      {children}
    </a>
  );
}

export const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);
