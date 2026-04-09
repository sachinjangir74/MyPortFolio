import { motion } from "framer-motion";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)]/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[120px] -z-10 mix-blend-screen" />

      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          
          {/* Left / Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-semibold tracking-wide">
              Welcome to my portfolio
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight text-[var(--text-primary)]">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-indigo-400">
                Sachin Kumar Jangir
              </span>
            </motion.h1>
            
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-medium text-[var(--text-secondary)] mb-6">
              Full-Stack Developer
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Full-stack developer specializing in scalable web applications, real-time systems, and interactive data visualization. Experienced in building production-ready systems with optimized performance, secure architecture, and seamless user experience.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#contact" className="btn-primary shadow-lg shadow-[var(--color-primary)]/30">
                  Hire Me
              </a>
              <a href="/resume.pdf" download className="btn-secondary">
                  Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right / Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end z-10"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-indigo-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src="https://via.placeholder.com/400"
                alt="Profile"
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-[var(--card-border)] shadow-2xl z-10"
              />
              
              {/* Floating badges */}
              <motion.div 
                className="absolute top-10 -left-6 glass-card px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-xl text-center">⚛️</div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-medium">Specialist in</div>
                  <div className="text-sm font-bold text-[var(--text-primary)]">React.js</div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute bottom-10 -right-6 glass-card px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-10 h-10 bg-[var(--color-primary)]/20 rounded-full flex items-center justify-center text-[var(--color-primary)] text-xl">*</div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-medium">Modern</div>
                  <div className="text-sm font-bold text-[var(--text-primary)]">UI / UX</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
