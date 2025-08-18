import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">Kelvin.</div>
        
        <ul className="nav-links">
          <li>
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, '#hero')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, '#about')}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, '#projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Contact
            </a>
          </li>
        </ul>
        
        {/* I should work on my themes since they do not work */}
        <ThemeToggle
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(prev => !prev)}
        />
      </div>
    </nav>
  );
}
