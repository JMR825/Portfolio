import React from "react";
import Navbar from "./components/Navbar";
import FloatingStars from "./components/FloatingStars";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useCursorEffect } from "./hooks/useCursorEffect";
import "./App.css";

const Portfolio = () => {
  useCursorEffect();

  return (
    <>
      <Navbar />
      <FloatingStars />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <div className="cursor" aria-hidden="true"></div>
    </>
  );
};

export default Portfolio;
