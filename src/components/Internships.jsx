import { motion } from "framer-motion";

function Internships() {
  const experiences = [
    {
      role: "Frontend Web Development Intern",
      company: "Motion Cut [Lucknow, UP] Remote",
      duration: "Jan 2025 - Feb 2025",
      work: "Engineered responsive UI components, ensuring seamless performance across devices. Resolved UI inconsistencies and rendering issues, enhancing application stability. Accelerated feature delivery by efficiently implementing frontend modules within deadlines.",
    }
  ];

  return (
    <section id="internships" className="py-24 relative">
      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]"
          >
            Internships & Experience
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"
          />
        </div>

        <div className={`grid grid-cols-1 ${experiences.length === 1 ? 'md:grid-cols-1 max-w-2xl' : 'md:grid-cols-2 max-w-4xl'} gap-8 mx-auto`}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(99,102,241,0.1)] transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/10 rounded-bl-full -z-10 group-hover:bg-[var(--color-primary)]/20 transition-colors duration-500"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-indigo-500 flex items-center justify-center text-2xl shadow-lg">
                  💼
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-[var(--card-bg)] text-[var(--text-secondary)] rounded-full border border-[var(--card-border)]">
                  {exp.duration}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{exp.role}</h3>
              <p className="text-[var(--color-primary)] font-semibold mb-4">{exp.company}</p>
              <p className="text-[var(--text-muted)] leading-relaxed">{exp.work}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Internships;
