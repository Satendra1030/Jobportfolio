import { Helmet } from "react-helmet-async";

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contacts from './components/Contacts'
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div>

      {/* SEO START */}
      <Helmet>
        <title>Rishi Portfolio | Frontend Developer</title>
        <meta
          name="description"
          content="Rishi Kushwaha - Computer Engineering student and Frontend Developer from Nepal specializing in React, JavaScript, and modern UI development."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* SEO END */}

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />

    </div>
  )
}

export default App