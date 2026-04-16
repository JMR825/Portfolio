import React from "react";


const projectsData = [
  {
    title: "Sign Language Recognition System v1",
    description: "AI-powered application using TensorFlow and OpenCV to recognize sign language gestures, aimed at improving communication for deaf and hearing-impaired individuals.",
    technologies: ["Python", "TensorFlow", "OpenCV", "MediaPipe", "Machine Learning"],
    status: "In Development",
    github: "https://github.com/JMR825/sign-language-recognition",
    demo: ""
  },
  {
    title: "MongoDB Task Manager",
    description: "Full-stack task management application with MongoDB Atlas integration, featuring user authentication and real-time updates.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    status: "Completed",
    github: "https://github.com/JMR825/task-manager",
    demo: "https://task-manager-jmr825.netlify.app"
  },
  {
    title: "Astral Dreamer Studios Website",
    description: "Professional company website with modern design, interactive elements, and comprehensive company information.",
    technologies: ["React", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
    status: "Live",
    github: "https://github.com/JMR825/astral-dreamer",
    demo: "https://astral-dreamer.vercel.app"
  },
  {
    title: "React Native Mobile Apps",
    description: "Various mobile applications developed using React Native and Expo, focusing on cross-platform compatibility.",
    technologies: ["React Native", "Expo", "JavaScript", "Mobile Development"],
    status: "Ongoing",
    github: "https://github.com/JMR825/react-native-apps",
    demo: ""
  }
];


const Projects = React.memo(() => {
  return (
<div className="projects-content">
      <h2>Projects</h2>

      <div className="card-grid">
        {projectsData.map(({ title, description, technologies, status, github, demo }) => (
          <article key={title} className="card glass">
<h3 style={{color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginBottom: '15px'}}>{title}</h3>
<p style={{opacity: 0.9, lineHeight: 1.6, marginBottom: '20px', fontSize: '1.05rem'}}>{description}</p>
<div style={{fontSize: '0.9rem', opacity: 0.8, marginBottom: '15px'}}>{technologies.join(" • ")}</div>
            <p style={{opacity: 0.7, fontStyle: 'italic', fontSize: '0.95rem', marginBottom: '25px'}}><em>{status}</em></p>
            <div className="project-links" style={{display: 'flex', gap: '15px'}}>
              <a href={github} target="_blank" rel="noopener noreferrer" className="btn-secondary glass" style={{padding: '12px 24px'}}>View Code</a>
{demo && <a href={demo} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{padding: '12px 24px', boxShadow: 'var(--glow)'}}>Live Demo</a>}
            </div>
          </article>
        ))}
      </div>

    </div>
  );

});

Projects.displayName = "Projects";

export default Projects;
