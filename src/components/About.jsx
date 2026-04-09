import { motion } from "framer-motion";

function About() {
  const cards = [
    {
      title: "Education",
      subtitle: "B.Tech CSE (2022–2026)",
      icon: "🎓",
    },
    {
      title: "Projects",
      subtitle: "Full-Stack & Interactive Apps",
      icon: "💻",
    },
    {
      title: "Skills",
      subtitle: "React, Node.js, MongoDB, Express",
      icon: "⚙️",
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">About Me</h2>
            <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Content */}
            <div className="flex-1 space-y-6 text-lg text-[var(--text-secondary)]">
              <p className="leading-relaxed">
                I am a Full-Stack Developer with hands-on experience building scalable web applications, real-time systems, and interactive data visualization platforms using the MERN stack and modern frontend technologies.
              </p>
              <p className="leading-relaxed">
                I focus on crafting production-ready systems with secure architecture, optimized performance, and seamless user experiences. With strong foundations in Data Structures, Algorithms using Java, and OOPs, I write clean, efficient, and maintainable code — continuously pushing boundaries with modern development practices.
              </p>
            </div>

            {/* Right Cards Grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  onClick={() => {
                    const el = document.getElementById(card.title.toLowerCase());
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`glass-card p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-[var(--color-primary)]/50 ${index === 2 ? "sm:col-span-2 sm:w-1/2 sm:mx-auto" : ""}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{card.title}</h3>
                  <p className="text-sm text-[var(--text-muted)] font-medium">{card.subtitle}</p>
                </motion.div>
              ))}
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;
