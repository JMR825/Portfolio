import React from "react";

const projectsData = [
  {
    title: "Sign Language Recognition System",
    description:
      "AI-powered application using TensorFlow and OpenCV to recognize sign language gestures, aimed at improving communication for deaf and hearing-impaired individuals.",
    technologies: ["Python", "TensorFlow", "OpenCV", "MediaPipe", "Machine Learning"],
    status: "In Development"
  },
  {
    title: "MongoDB Task Manager",
    description:
      "Full-stack task management application with MongoDB Atlas integration, featuring user authentication and real-time updates.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    status: "Completed"
  },
  {
    title: "Astral Dreamer Studios Website",
    description:
      "Professional company website with modern design, interactive elements, and comprehensive company information.",
    technologies: ["React", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
    status: "Live"
  },
  {
    title: "React Native Mobile Apps",
    description:
      "Various mobile applications developed using React Native and Expo, focusing on cross-platform compatibility.",
    technologies: ["React Native", "Expo", "JavaScript", "Mobile Development"],
    status: "Ongoing"
  }
];

const Projects = React.memo(() => {
  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map(({ title, description, technologies, status }) => (
          <article key={title} className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>Technologies:</strong> {technologies.join(", ")}</p>
            <p className="project-status"><em>Status: {status}</em></p>
          </article>
        ))}
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
