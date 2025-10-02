import React from "react";
import { useTypingEffect } from "../hooks/useTypingEffect";

const Hero = React.memo(() => {
  const typingText = useTypingEffect([
    "Full-Stack Developer",
    "AI Enthusiast",
    "Problem Solver",
    "Cyber Analyst",
    "Data Analyst"
  ], 120, 1300);

  const handleDownloadResume = () => {
    const resumeUrl = "/Janhav Rathod_software.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Janhavi_Rathod_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="dark-hero">
      <div className="gradient-bg" aria-hidden="true" />
      
      <div className="hero-content">
        <h1>JANHAVI RATHOD</h1>
        <h2 aria-live="polite">
          <span className="typing">{typingText}</span>
          <span className="cursor" aria-hidden="true">|</span>
        </h2>
        <p>Coding the future with innovation and passion.</p>
        <button 
          className="cta-btn" 
          onClick={handleDownloadResume}
          aria-label="Download Resume"
        >
          Download Resume
        </button>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
