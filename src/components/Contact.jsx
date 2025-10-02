import React from "react";

const Contact = React.memo(() => {
  return (
    <section id="contact" className="section contact">
      <h2>Contact</h2>
      <div className="contact-content">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:janhavi.rathod255@gmail.com">
            janhavi.rathod255@gmail.com
          </a>
        </p>
        <div className="social-links">
          {/* Add your social media links here */}
          <a 
            href="https://github.com/JMR825" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/janhavi-rathod-448707256/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
