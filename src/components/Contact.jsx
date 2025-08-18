import { FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Contact() {
  return (
    <section
      id="contact"
      className="space-y-4"
    >
      <h2 className="text-3xl font-heading text-primary mb-2 border-l-4 border-primary pl-3">
        Contact
      </h2>

      <p className="text-lg">
	Feel free to reach out via any of the platforms below:
      </p>

      <div className="flex space-x-6">
	<a
	  href="https://github.com/Muthommi"
	  target="_blank"
	  rel="noopener noreferrer"
	  aria-label="Github profile"
	  className="
	    p-3
	    bg-bg-light dark:bg-bg-dark
	    rounded-full shadow
	    hover:bg-primary/10
	    transition
	  "
	>
	  <FaGithub className="text-2xl text-primary" />
	</a>

	<a
	  href="https://www.linkedin.com/in/martin-kelvin-muthomi"
	  target="_blank"
	  rel="noopener noreferrer"
	  aria-label="LinkedIn profile"
	  className="
	    p-3
	    bg-bg-light dark:bg-bg-dark
	    rounded-full shadow
	    hover:bg-secondary/10
	    transition
	  "
	>
	  <FaLinkedin className="text-2xl text-secondary" />
	</a>
      </div>
    </section>
  );
}
