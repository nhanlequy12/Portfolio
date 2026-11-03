import React from "react";
import { Reveal, SectionHeader, Tag, Button, ArrowIcon, GithubIcon } from "./ui";
import { PROJECTS, PROFILE } from "../data";

function ProjectLink({ link }) {
  if (!link) {
    return <span className="pcard__link pcard__link--muted">Internal project · source private</span>;
  }
  return (
    <a href={link} target="_blank" rel="noreferrer" className="pcard__link">
      View on GitHub <ArrowIcon />
    </a>
  );
}

function FeaturedCard({ p }) {
  return (
    <Reveal className="pcard pcard--featured">
      <div className="pcard__main">
        <div className="pcard__top">
          <span className="pcard__kind">★ Featured · {p.kind}</span>
          <span>{p.period}</span>
        </div>
        <h3 className="pcard__title">{p.title}</h3>
        <p className="pcard__summary">{p.summary}</p>
        <ul className="bullets">
          {p.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className="tags">
          {p.tags.map((t) => (
            <Tag key={t} orange>{t}</Tag>
          ))}
        </div>
        <ProjectLink link={p.link} />
      </div>

      <div className="pcard__aside">
        <div className="pipeline" aria-label="Message pipeline">
          {p.pipeline.map((node, i) => (
            <React.Fragment key={node}>
              <span className="pipeline__node">{node}</span>
              {i < p.pipeline.length - 1 && <span className="pipeline__arrow">→</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="bigmetric">
          <span className="bigmetric__value">{p.metric.value}</span>
          <span className="bigmetric__label">{p.metric.label}</span>
        </div>
      </div>
    </Reveal>
  );
}

function Card({ p, index }) {
  return (
    <Reveal className="pcard" delay={index * 90}>
      <div className="pcard__top">
        <span className="pcard__kind">{p.kind}</span>
        <span>{p.period}</span>
      </div>
      <h3 className="pcard__title">{p.title}</h3>
      <p className="pcard__summary">{p.summary}</p>
      {p.metrics && (
        <div className="metrics">
          {p.metrics.map((m) => (
            <div className="metric" key={m.label}>
              <div className="metric__value">{m.value}</div>
              <div className="metric__label">{m.label}</div>
            </div>
          ))}
          {p.metricNote && <div className="metrics__note">{p.metricNote}</div>}
        </div>
      )}
      <ul className="bullets">
        {p.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <div className="tags">
        {p.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <ProjectLink link={p.link} />
    </Reveal>
  );
}

export default function Projects() {
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="section projects theme-dark">
      <div className="container">
        <SectionHeader
          label="03 — Projects"
          title={
            <>
              Things I've <em>built.</em>
            </>
          }
          sub="From an LLM agent running inside Microsoft Teams to a diffusion pipeline that beats its research baseline."
        />
        <div className="pgrid">
          {featured && <FeaturedCard p={featured} />}
          {rest.map((p, i) => (
            <Card key={p.id} p={p} index={i} />
          ))}
        </div>
        <Reveal className="more">
          <Button href={PROFILE.github} variant="ghost">
            <GithubIcon /> More on GitHub
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
