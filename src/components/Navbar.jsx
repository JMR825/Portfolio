import React from "react";

const Navbar = React.memo(() => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <ul>
        <li><a href="#home" onClick={(e) => handleSmoothScroll(e, "#home")}>Home</a></li>
        <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, "#skills")}>Skills</a></li>
        <li><a href="#experience" onClick={(e) => handleSmoothScroll(e, "#experience")}>Experience</a></li>
        <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, "#projects")}>Projects</a></li>
        <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")}>Contact</a></li>
      </ul>
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
