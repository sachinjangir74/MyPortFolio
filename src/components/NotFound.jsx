import { motion } from "framer-motion";

function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-12 md:p-16 rounded-3xl border border-[var(--card-border)] shadow-2xl z-10 max-w-lg w-full"
      >
        <motion.h1 
          className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-purple-400 mb-6"
          initial={{ y: -20 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          404
        </motion.h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Page Not Found
        </h2>
        
        <p className="text-[var(--text-muted)] mb-8 text-lg">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <a 
          href="/" 
          className="btn-primary px-8 py-3 text-lg inline-flex items-center gap-2"
        >
          <span>←</span> Back to Home
        </a>
      </motion.div>
    </div>
  );
}

export default NotFound;
