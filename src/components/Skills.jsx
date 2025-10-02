import React from "react";

const skillsData = {
  Languages: ["JavaScript", "Python", "C", "Java"],
  Frontend: ["React", "React Native", "HTML5", "CSS3", "JavaScript"],
  Backend: ["Node.js", "Express.js", "MongoDB", "SQL"],
  Tools: ["Git", "GitHub", "Claude", "VS Code", "MongoDB Atlas", "Tableau", "Power BI", "Figma", "Blender", "FlutterFlow"],
  Cybersecurity: ["Kali Linux", "Wireshark", "Nmap", "Metasploit"],
  Specializations: ["AI/ML", "Web Development", "Mobile Development", "Cybersecurity"]
};

const Skills = React.memo(() => {
  return (
    <section id="skills" className="section skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <ul>
              {skills.map((skill) => (
                <li key={skill} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
});

Skills.displayName = "Skills";

export default Skills;
