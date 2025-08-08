import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

import Navbar from './components/Navbar'
import About   from './components/About'
import Projects from './components/Projects'
import Resume  from './components/Resume'
import Contact from './components/Contact'
import Footer  from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [darkMode])

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

        {/* NAVIGATION */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* PAGE CONTENT */}
        <main className="max-w-4xl mx-auto p-6 space-y-16 scroll-smooth">
          <div id="about">
            <About />
          </div>

          <div id="projects">
            <Projects />
          </div>

          <div id="resume">
            <Resume />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  )
}

export default App
