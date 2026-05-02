import React from "react";
import { T } from "./components/ui";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const GLOBAL_CSS = `
  *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
  html { scroll-behavior:smooth; }
  body { font-family:'Georgia',serif; background:${T.dark}; color:${T.light}; overflow-x:hidden; }
  a    { text-decoration:none; color:inherit; }
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(20px); }
    to   { opacity:1; transform:translateY(0);    }
  }
`;

export default function App() {
  return (
    <div style={{ background: T.dark, minHeight: "100vh", color: T.light, fontFamily: "Georgia,serif" }}>
      <style>{GLOBAL_CSS}</style>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}