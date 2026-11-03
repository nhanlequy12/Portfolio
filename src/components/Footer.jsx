import { PROFILE } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} {PROFILE.name} · {PROFILE.role} · Ho Chi Minh City</span>
        <span>Designed &amp; built with React + Vite</span>
        <a href="#hero" className="footer__top">Back to top ↑</a>
      </div>
    </footer>
  );
}
