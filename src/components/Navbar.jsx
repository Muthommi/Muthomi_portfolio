import ThemeToggle from './ThemeToggle';

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <header
      className="
        flex items-center justify-between
	p-6 border-b border-primary
	dark: border-secondary
	"
      >
        <h1 className="text-4xl font-heading text-primary">
          Kelvin's Portfolio
        </h1>

        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-secondary transition">
            About
          </a>
          <a href="#projects" className="hover:text-secondary transition">
	    Projects
	  </a>
	  <a href="#resume" className="hover:text-secondary transition">
            Resume
          </a>
          <a href="#contact" className="hover:text-secondary transition">
            Contact
          </a>
        </nav>

        <ThemeToggle
	  darkMode={darkMode}
	  toggleDarkMode={() => setDarkMode(prev => !prev)}
	/>
      </header>
  );
}
