import {FaSun, FaMoon } from 'ewct-icons/fa';

export default function ThemeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle dark/light mode"
      className="
        p-2 rounded
	text-white bg-primary
	hover: bg-primary/90
	dark: bg-secondary dark:text-black
	dark: hover: bg-secondary/90
	transition
      "
    >
      {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
}
