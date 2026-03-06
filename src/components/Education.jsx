import { motion } from "framer-motion";

function Education() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science & Business Systems",
      school: "Jain University, Bengaluru",
      duration: "Expected 2026",
      desc: "CGPA: 7.0",
    },
    {
      degree: "Class XII (RBSE)",
      school: "Matrix High School, Sikar (Raj.)",
      duration: "2020 - 2021",
      desc: "Percentage: 95.20%",
    },
    {
      degree: "Class X (RBSE)",
      school: "Sardar Patel Public School, Katrathal (Sikar)",
      duration: "2018 - 2019",
      desc: "Percentage: 86.33%",
    }
  ];

  return (
    <section id="education" className="py-24 relative bg-[var(--bg-primary)]">
      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]"
          >
            Education
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--color-primary)] to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full border border-[var(--color-primary)]/20">
                  {edu.year}
                </span>
                <div className="w-10 h-10 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-xl shadow-inner">
                  🎓
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 leading-tight">{edu.degree}</h3>
              <p className="text-[var(--color-primary)] font-medium text-sm mb-4">{edu.school}</p>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">{edu.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;
