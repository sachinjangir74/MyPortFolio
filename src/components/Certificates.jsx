import { motion } from "framer-motion";

function Certificates() {
  const certs = [
    {
      title: "Software Development",
      provider: "Apna College",
      image: "https://via.placeholder.com/400x300",
    },
    {
      title: "Data Structures & Algorithms in Java",
      provider: "Apna College",
      image: "https://via.placeholder.com/400x300",
    }
  ];

  return (
    <section id="certificates" className="py-24 relative bg-[var(--bg-primary)]">
      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]"
          >
            Certificates
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card rounded-2xl overflow-hidden p-4 group hover:shadow-[0_8px_30px_rgb(99,102,241,0.1)] transition-all duration-300"
            >
              <div className="overflow-hidden rounded-xl mb-4 relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1 px-2">{cert.title}</h3>
              <p className="text-[var(--color-primary)] font-medium px-2">{cert.provider}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certificates;
