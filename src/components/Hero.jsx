import { Button, ArrowIcon, GithubIcon } from "./ui";
import { PROFILE, STATS, TICKER } from "../data";
import avatar from "../assets/avatar.jpg";

const BADGE_TEXT = "OPEN TO WORK · AI ENGINEER · HCMC · ";

export default function Hero() {
  const delay = (ms) => ({ animationDelay: `${ms}ms` });
  const tickerItems = [...TICKER, ...TICKER];

  return (
    <section id="hero" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="hero__eyebrow mono fade-up" style={delay(100)}>
            <span className="hero__dot" />
            Available for AI / ML roles · {PROFILE.location}
          </p>

          <h1 className="hero__title fade-up" style={delay(250)}>
            Hi, I'm <em>{PROFILE.shortName}.</em>
            <br />
            I build AI that ships.
          </h1>

          <p className="hero__lead fade-up" style={delay(400)}>
            {PROFILE.tagline}
          </p>

          <div className="hero__cta fade-up" style={delay(550)}>
            <Button href="#projects" variant="primary">
              See my work <ArrowIcon />
            </Button>
            <Button href="#contact" variant="ghost">
              Get in touch
            </Button>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hero__social">
              <GithubIcon /> GitHub
            </a>
          </div>

          <ul className="hero__stats fade-up" style={delay(700)}>
            {STATS.map((s) => (
              <li key={s.label}>
                <div className="stat__value">
                  {s.value}
                  {s.unit && <small>{s.unit}</small>}
                </div>
                <div className="stat__label">{s.label}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="portrait__frame" />
          <div className="portrait">
            <img src={avatar} alt="" />
          </div>

          <div className="badge">
            <svg viewBox="0 0 100 100">
              <defs>
                <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <text>
                <textPath href="#badge-circle">{BADGE_TEXT}</textPath>
              </text>
            </svg>
            <span className="badge__center">N.</span>
          </div>

          <span className="sticker sticker--1">Diffusion models</span>
          <span className="sticker sticker--2">RAG · LLM agents</span>
          <span className="sticker sticker--3">MLOps</span>
        </div>
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {tickerItems.map((item, i) => (
            <span key={i} className="ticker__item">
              {item} <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
