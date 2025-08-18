const projectList = [
  {
    title: "SokoFresh",
    description: "A comprehensive platform that bridges the gap between rural farmers and urban markets through a robust RESTful API. This solution addresses food distribution challenges while empowering farmers with direct market access.",
    tech: ["Python", "REST API", "Database Design"],
    link: "https://github.com/Tinayo001/sokofreshh.git",
    demoLink: "#" // No demos yet
  },
  {
    title: "JIJENGE Budget Tracker",
    description: "An intuitive financial management application that helps users take control of their finances through smart budget planning and expense tracking. Features real-time analytics and personalized insights.",
    tech: ["Python", "Data Analytics", "User Experience"],
    link: "https://github.com/Muthommi/JIJENGE-Budget-tracker.git",
    demoLink: "#" // No demos yet
  }
];

export default function Projects() {
  return (
    <section id="projects" className="fade-in">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projectList.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <div className="project-tech">
              {project.tech.join(" • ")}
            </div>
            
            <div className="project-links">
              {project.demoLink && project.demoLink !== "#" && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  🚀 Live Demo
                </a>
              )}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                📄 View Code
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Resume section */}
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a 
          href="/Kelvin_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link" 
          style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
}
