
import { motion, useScroll } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Internships from "./components/Internships";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";





function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="app font-sans bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen selection:bg-[var(--color-primary)] selection:text-white relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[var(--color-primary)] origin-left z-50 overflow-hidden"
        style={{ scaleX: scrollYProgress }}
      />
      
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Internships />
      <Certificates />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
