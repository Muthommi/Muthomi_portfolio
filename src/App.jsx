import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <>
      <Helmet>
	<title>Muthomi | Backend Engineer portfolio</title>
	<meta name="description" content= "Muthomi's portfolio, aspiring backend engineer." />
	<meta name="keywords" content="Python, Backend, RESTFULAPI, Kelvin" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
	
      <div className="font-inter bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300">
	<header className="p-4 flex justify-between items-center border-b dark:border-gray-700">
	  <h1 className="text-2xl font bold">Muthomi's Portfolio</h1>
	  <button
	    onClick={() => setDarkMode(!darkMode)}
	    className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded"
	  >
	    {darkMode ? 'Light Mode' : 'Dark Mode'}
	  </button>
	</header>

	<main classname="space-y-12 p-6 max-w-4xl mx-auto">
	  <About />
	  <Projects />
	  <Resume />
	  <Contact />
	</main>

	<footer className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
	  &copy: Muthomi {new Date().getFullYear()}
	</footer>
      </div>
    </>
  );
}

export default App;
