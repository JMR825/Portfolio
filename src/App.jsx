import React from "react";
import { useCursorEffect } from "./hooks/useCursorEffect";
import Navbar from "./components/Navbar";
import FloatingStars from "./components/FloatingStars";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import "./App.css";

const Portfolio = () => {
  useCursorEffect();

  return (
    <ThemeProvider>
      <Navbar />
      <FloatingStars />
      <section id="home" className="fullscreen-section">
        <Hero />
      </section>
      <section id="skills" className="fullscreen-section">
        <Skills />
      </section>
      <section id="experience" className="fullscreen-section">
        <Experience />
      </section>
      <section id="projects" className="fullscreen-section">
        <Projects />
      </section>
      <section id="contact" className="fullscreen-section">
        <Contact />
      </section>
      <HeaderToggle />
      <div className="cursor" aria-hidden="true"></div>
    </ThemeProvider>
  );
};

const HeaderToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default Portfolio;
