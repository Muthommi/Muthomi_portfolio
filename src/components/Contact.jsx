import { FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Contact() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <p className="mb-2">Feel free to reach out or connect with me:</p>
      <div className="flex space-x-4 text-2xl">
        <a href="https://github.com/Muthommi" target="_blank" rel="noreferrer">
          <FaGithub className="hover:text-blue-500" />
        </a>
        <a href="www.linkedin.com/in/martin-kelvin-muthomi" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-blue-500" />
        </a>
      </div>
    </section>
  );
}
