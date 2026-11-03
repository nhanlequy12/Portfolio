import { Reveal, SectionHeader, Tag } from "./ui";
import { SKILLS, CERTIFICATIONS } from "../data";

const AwardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.5 13 17 22l-5-3-5 3 1.5-9" />
  </svg>
);

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          label="04 — Skills"
          title={
            <>
              Tools I <em>reach for.</em>
            </>
          }
        />
        <div className="skills">
          {SKILLS.map((g, i) => (
            <Reveal
              key={g.group}
              className="skill"
              style={{ gridColumn: `span ${g.span || 2}` }}
              delay={i * 60}
            >
              <div className="skill__head">
                <span className="skill__group">{g.group}</span>
                <span className="skill__idx">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="tags">
                {g.items.map((it) => (
                  <Tag key={it}>{it}</Tag>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {CERTIFICATIONS.map((c) => (
          <Reveal className="cert" key={c.title}>
            <div className="cert__icon"><AwardIcon /></div>
            <div>
              <div className="cert__title">{c.title}</div>
              <div className="cert__issuer">Certification · {c.issuer}</div>
            </div>
            <span className="cert__year">{c.year}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
