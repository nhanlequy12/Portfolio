import { Reveal, SectionHeader, Tag } from "./ui";
import { EXPERIENCE } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader
          label="02 — Experience"
          title={
            <>
              Where I've <em>worked.</em>
            </>
          }
        />
        {EXPERIENCE.map((job) => (
          <Reveal className="xp" key={job.company}>
            <div className="xp__period">
              {job.period}
              <small>{job.location}</small>
            </div>
            <div>
              <h3 className="xp__company">{job.company}</h3>
              <p className="xp__role">{job.role}</p>
              <ul className="xp__bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="tags">
                {job.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
