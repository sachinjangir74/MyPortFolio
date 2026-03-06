function Footer() {
  return (
    <footer className="w-full py-8 mt-20 border-t border-[var(--card-border)] bg-[var(--bg-primary)]/80 backdrop-blur-sm transition-colors duration-300">
      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-sm text-[var(--text-muted)] group">
          © {new Date().getFullYear()} <span className="group-hover:text-[var(--color-primary)] transition-colors">Sachin Jangir</span>. All Rights Reserved.
        </p>

        <div className="flex space-x-6">
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noreferrer"
            className="text-[var(--text-muted)] font-medium hover:text-[var(--color-primary)] transition-colors transform hover:-translate-y-1"
          >
            GitHub
          </a>

          <a 
            href="https://linkedin.com/" 
            target="_blank" 
            rel="noreferrer"
            className="text-[var(--text-muted)] font-medium hover:text-[var(--color-primary)] transition-colors transform hover:-translate-y-1"
          >
            LinkedIn
          </a>

          <a 
            href="mailto:sachin@example.com"
            className="text-[var(--text-muted)] font-medium hover:text-[var(--color-primary)] transition-colors transform hover:-translate-y-1"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
