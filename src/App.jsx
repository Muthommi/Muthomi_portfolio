import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <>
      <Helmet>
        <title>Kelvin | Backend Engineer Portfolio</title>
        <meta
          name="description"
          content="Kelvin’s portfolio as an aspiring backend engineer."
        />
        <meta
          name="keywords"
          content="Python, Backend, APIs, Portfolio, Kelvin"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Poppins:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="
        min-h-screen
        bg-bg-light text-text-light
        dark:bg-bg-dark dark:text-text-dark
        transition-colors duration-300
        font-sans
      ">
        <header className="
          flex items-center justify-between
          p-6
          border-b border-primary dark:border-secondary
        ">
          <h1 className="text-4xl font-heading text-primary">
            Kelvin’s Portfolio
          </h1>

          <button
            onClick={() => setDarkMode(prev => !prev)}
            className="
              px-4 py-2 text-sm font-medium
              text-white bg-primary rounded shadow
              hover:bg-primary/90
              dark:bg-secondary dark:text-black
              dark:hover:bg-secondary/90
              transition
            "
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>

        <main className="max-w-4xl mx-auto p-6 space-y-16">
          <About />
          <Projects />
          <Resume />
          <Contact />
        </main>

        <footer className="
          text-center p-4 text-sm
          text-text-light/70 dark:text-text-dark/70
        ">
          &copy; Kelvin {new Date().getFullYear()}
        </footer>
      </div>
    </>
  );
}

export default App;
