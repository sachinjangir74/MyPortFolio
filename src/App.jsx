import { motion, useScroll } from "framer-motion";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load components below the fold for better performance
const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Internships = lazy(() => import("./components/Internships"));
const Certificates = lazy(() => import("./components/Certificates"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// A simple loading skeleton for Suspense fallback
const FallbackLoader = () => (
  <div className="w-full h-screen flex items-center justify-center bg-[var(--bg-primary)]">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[var(--color-primary)]"></div>
  </div>
);

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="app font-sans bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen selection:bg-[var(--color-primary)] selection:text-white relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[var(--color-primary)] origin-left z-50 overflow-hidden"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Kept out of suspense so they render immediately */}
      <Navbar />
      <Hero />
      
      {/* Suspense boundary for lazily loaded sections */}
      <Suspense fallback={<FallbackLoader />}>
        <About />
        <Education />
        <Internships />
        <Certificates />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
