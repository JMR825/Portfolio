import React from "react";

const skillsData = {
  Languages: ["JavaScript", "Python", "C", "Java"],
  Frontend: ["React", "React Native", "HTML5", "CSS3", "JavaScript"],
  Backend: ["Node.js", "Express.js", "MongoDB", "SQL"],
  Tools: ["Git", "GitHub", "VS Code", "MongoDB Atlas", "Figma"],
  Cybersecurity: ["Kali Linux", "Wireshark", "Nmap", "Metasploit"],
  Specializations: ["AI/ML", "Web Development", "Mobile Development", "Cybersecurity"]
};

const Skills = React.memo(() => {
  return (

<div className="skills-content">

      <h2>Skills</h2>

      <div className="card-grid">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="card glass">
<h3 style={{color: '#fff', fontSize: '1.4rem', fontWeight: 700, marginBottom: '20px'}}>{category}</h3>
            <ul className="skill-tags">
              {skills.map((skill) => (
<li key={skill} className="skill-tag glass" style={{padding: '10px 20px', margin: '5px', borderRadius: '25px', fontWeight: 500}}>{skill}</li>
              ))}
            </ul>
            <div style={{marginTop: '20px', height: '4px', background: 'linear-gradient(90deg, rgba(255,255,255,0.3), transparent)', borderRadius: '2px'}}></div>
          </div>
        ))}
      </div>

    </div>
  );
});

Skills.displayName = "Skills";

export default Skills;
