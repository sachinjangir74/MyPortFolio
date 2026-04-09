import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import Tilt from "react-parallax-tilt";

function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "SEREN – Mental Health Platform",
      desc: "Architected a full-stack platform enabling real-time therapist-user communication. Secured user authentication using JWT and role-based access control mechanisms. Streamlined backend operations by designing efficient RESTful APIs. Strengthened application security using Helmet, rate limiting, and input sanitization.",
      image: "/images/seren.png",
      liveLink: "#",
      githubLink: "#",
      tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      category: "Fullstack"
    },
    {
      title: "3D Bioprinting Scaffold Platform",
      desc: "Engineered an interactive 3D visualization system for biomimetic scaffold modeling. Enabled real-time rendering of complex datasets using Plotly.js. Simulated layer-wise bioprinting through a custom G-code generation module. Refined rendering performance for smooth and responsive user interaction.",
      image: "/images/3d-bioprinting.png",
      liveLink: "#",
      githubLink: "#",
      tags: ["React", "Plotly.js", "Tailwind CSS", "Framer Motion"],
      category: "Frontend"
    },
    {
      title: "Personal Portfolio Website",
      desc: "Crafted a responsive portfolio leveraging modular component architecture. Enhanced user engagement through dynamic animations and UI transitions. Boosted performance and accessibility via frontend optimization techniques.",
      image: "/images/portfolio.png",
      liveLink: "#",
      githubLink: "#",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      category: "Frontend"
    }
  ];

  const categories = ["All", "Frontend", "Fullstack"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 relative bg-[var(--bg-primary)]">
      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]"
          >
            My Projects
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                filter === category 
                  ? "bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/40" 
                  : "bg-[var(--bg-primary)] border border-[var(--card-border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--color-primary)]/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <Tilt 
                  tiltMaxAngleX={10} 
                  tiltMaxAngleY={10} 
                  scale={1.02} 
                  transitionSpeed={2000} 
                  className="glass-card rounded-2xl overflow-hidden flex flex-col group h-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgb(99,102,241,0.25)] border-[var(--card-border)] hover:border-[var(--color-primary)]/30"
                >
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-80"></div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{project.title}</h3>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-semibold px-2 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-md border border-[var(--color-primary)]/20">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-[var(--text-muted)] text-sm mb-6 flex-grow leading-relaxed">
                      {project.desc}
                    </p>

                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-[var(--card-border)]">
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-[var(--text-primary)] hover:text-[var(--color-primary)] font-medium text-sm flex items-center transition-colors"
                      >
                        Live Demo <span className="ml-1">↗</span>
                      </a>

                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="btn-secondary px-4 py-1.5 text-sm"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;
