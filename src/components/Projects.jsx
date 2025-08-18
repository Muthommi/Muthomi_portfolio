import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="fade-in">
      <h2 className="section-title">Let's Connect</h2>
      <div className="contact-container">
        <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>
          Ready to collaborate?
        </h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          I'm always excited to discuss new opportunities and interesting projects. Let's build something amazing together!
        </p>
        
        <div className="contact-links">
          <a
            href="mailto:muthommi@example.com" // Replace with your actual email
            className="contact-link"
            aria-label="Email"
          >
            <FaEnvelope />
            Email
          </a>
          
          <a
            href="https://www.linkedin.com/in/martin-kelvin-muthomi"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
            LinkedIn
          </a>
          
          <a
            href="https://github.com/Muthommi"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="Github profile"
          >
            <FaGithub />
            GitHub
          </a>
          
          <a
            href="https://twitter.com/yourhandle" // Replace with your Twitter handle
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            aria-label="Twitter profile"
          >
            <FaTwitter />
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
}
