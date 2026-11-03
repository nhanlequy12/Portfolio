import { Reveal, SectionHeader } from "./ui";
import { PROFILE, EDUCATION } from "../data";
import avatar from "../assets/avatar.jpg";

const GradIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m2 10 10-5 10 5-10 5z" />
    <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
    <path d="M22 10v6" />
  </svg>
);

export default function About() {
  const facts = [
    ["Email", PROFILE.email, `mailto:${PROFILE.email}`],
    ["Phone", PROFILE.phone, PROFILE.phoneHref],
    ["Based in", PROFILE.location, null],
    ["LinkedIn", "in/nhanlequy", PROFILE.linkedin],
    ["GitHub", "nhanlequy12", PROFILE.github],
  ];

  return (
    <section id="about" className="section">
      <div className="container about__grid">
        <Reveal className="about__card">
          <div className="about__card-head">
            <img src={avatar} alt={PROFILE.name} className="about__avatar" />
            <div>
              <div className="about__name">{PROFILE.name}</div>
              <div className="about__role">{PROFILE.role}</div>
            </div>
          </div>
          <div className="facts">
            {facts.map(([k, v, href]) => (
              <div className="fact" key={k}>
                <span className="fact__k">{k}</span>
                <span className="fact__v">
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                      {v}
                    </a>
                  ) : (
                    v
                  )}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <div>
          <SectionHeader
            label="01 — About"
            title={
              <>
                Research in, <em>product</em> out.
              </>
            }
          />
          <Reveal className="about__body" delay={100}>
            <p>
              I'm a final-year Computer Science student at <strong>UIT — VNUHCM</strong> who likes the part of AI
              engineering where a paper stops being a paper. I focus on deep learning model design and robust
              data processing to drive practical business solutions.
            </p>
            <p>
              Lately that has meant automating a diffusion-based virtual try-on pipeline, building RAG systems
              over messy PDFs, and shipping an LLM agent that runs real tasks for a leadership team inside
              Microsoft Teams. The goal is always the same: transform research into scalable product features
              that make systems more efficient and people's days easier.
            </p>

            <div className="edu">
              <div className="edu__icon"><GradIcon /></div>
              <div>
                <div className="edu__school">{EDUCATION.school}</div>
                <div className="edu__degree">{EDUCATION.degree} · {EDUCATION.period}</div>
                <div className="edu__meta">
                  <span>GPA {EDUCATION.gpa}</span>
                  <span>TOEIC {EDUCATION.toeic}</span>
                </div>
              </div>
            </div>

            <ul className="now">
              <li>Currently building LLM agents with MCP and Claude Code.</li>
              <li>Exploring diffusion models and segmentation for generative pipelines.</li>
              <li>Open to AI / ML engineering roles and research collaborations.</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
