import { Reveal, Button, ArrowIcon, GithubIcon } from "./ui";
import { PROFILE } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <p className="sh__label mono" style={{ justifyContent: "center", marginBottom: "1rem" }}>
            05 — Contact
          </p>
          <h2 className="contact__title">
            Let's build something <em>useful.</em>
          </h2>
          <p className="contact__sub">
            Open to AI / ML engineering roles, research collaborations and interesting side projects.
            The fastest way to reach me is email.
          </p>
          <a href={`mailto:${PROFILE.email}`} className="contact__email">
            {PROFILE.email}
          </a>
          <div className="contact__links">
            <Button href={PROFILE.linkedin} variant="primary">
              LinkedIn <ArrowIcon />
            </Button>
            <Button href={PROFILE.github} variant="ghost">
              <GithubIcon /> GitHub
            </Button>
            <Button href={PROFILE.facebook} variant="ghost">
              Facebook <ArrowIcon />
            </Button>
            <Button href={PROFILE.phoneHref} variant="ghost">
              {PROFILE.phone}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
