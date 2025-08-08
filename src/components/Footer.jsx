export default function Footer() {
  return (
    <footer
      className="
	text-center p-4 text-sm
	text-text-light/70 dark:text-text-dark/70
      "
    >
      © Kelvin {new Date().getFullYear()}
    </footer>
  );
}
