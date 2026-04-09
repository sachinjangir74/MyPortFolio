import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "Frontend (React, Vite, Tailwind, Framer)", level: 95, color: "bg-[#61DAFB]" },
    { name: "Backend (Node.js, Express, REST, Socket.io)", level: 90, color: "bg-[#68A063]" },
    { name: "Databases (MongoDB, MySQL)", level: 85, color: "bg-[#4DB33D]" },
    { name: "Languages (JS, HTML/CSS, Java DSA/OOPs)", level: 90, color: "bg-[#F7DF1E]" },
    { name: "Tools (Git, VS Code, Postman, Antigravity, Copilot)", level: 85, color: "bg-[#E34F26]" }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]"
          >
            Technical Skills
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"
          />
        </div>

        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="w-full">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[var(--text-primary)] font-medium">{skill.name}</span>
                  <span className="text-[var(--text-muted)] text-sm font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full h-2.5 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
