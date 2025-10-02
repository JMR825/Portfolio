import React from "react";

const experienceData = [
  {
    company: "Vault Of Codes",
    role: "Web Development Intern",
    duration: "31st Dec 2024 - 31st Jan 2025",
    description: "Designed and developed responsive web applications using HTML, CSS, JavaScript, and React. Built real-world projects with modern frameworks and collaborated on UI/UX improvements.",
    achievements: [
      "Created a responsive NGO website and task management application",
      "Developed user-friendly interfaces using HTML, CSS, and JavaScript",
      "Built frontend projects with React and integrated APIs",
      "Collaborated with a team on deployment and testing of web solutions"
    ]
  },
  {
    company: "Vault Of Codes",
    role: "Java Intern",
    duration: "31st Dec 2024 - 31st Jan 2025",
    description: "Focused on core and advanced Java programming concepts, contributing to backend modules and enterprise-level applications. Strengthened problem-solving skills through DSA and real-world Java projects.",
    achievements: [
      "Developed Java-based applications with OOPs concepts",
      "Implemented data structures and algorithms for backend tasks",
      "Gained exposure to enterprise development workflows",
      "Worked on debugging, optimization, and clean code practices"
    ]
  },
  {
    company: "Vault Of Codes",
    role: "Cybersecurity & Ethical Hacking Intern",
    duration: "31st Dec 2024 - 31st Jan 2025",
    description: "Worked on security-focused projects, gaining practical exposure to ethical hacking, vulnerability assessment, and cyber forensics. Applied cybersecurity fundamentals to identify risks and strengthen system defenses.",
    achievements: [
      "Performed vulnerability assessment and basic penetration testing",
      "Gained hands-on experience with ethical hacking and security tools",
      "Worked on cyber forensics tasks such as log analysis and evidence gathering",
      "Collaborated with mentors to implement improved security practices"
    ]
  }
];

const Experience = React.memo(() => {
  return (
    <section id="experience" className="section experience">
      <h2>Experience</h2>
      {experienceData.map(({ company, role, duration, description, achievements }, index) => (
        <article key={`${company}-${role}-${index}`} className="experience-card">
          <h3>{role} @ {company}</h3>
          <span className="duration">{duration}</span>
          <p>{description}</p>
          <ul>
            {achievements.map((ach, i) => (
              <li key={i}>{ach}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
});

Experience.displayName = "Experience";

export default Experience;
