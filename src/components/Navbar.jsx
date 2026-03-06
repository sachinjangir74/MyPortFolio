import { useState, useEffect } from "react";
// Removed: import "../styles/navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);

  /* =========================
     Theme Toggle
  ========================= */
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  /* =========================
     Scroll Listener
  ========================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (open) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  // Navigation links
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Internships", href: "#internships" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'} ${scrolled ? 'glass-card shadow-lg' : 'bg-transparent'}`}>
      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32 flex justify-between items-center">

        {/* Logo */}
        <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors">
          <a href="#home">Sachin.dev</a>
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="/resume.pdf" 
              download
              className="btn-primary text-sm shadow-[0_4px_14px_0_rgba(99,102,241,0.39)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.23)] hover:bg-[var(--color-primary-hover)] transition duration-200"
            >
              Resume
            </a>
          </li>
          <li>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[var(--card-bg)] transition-colors text-xl focus:outline-none"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? "🌞" : "🌙"}
            </button>
          </li>
        </ul>

        {/* Mobile Toggle & Theme Buttons */}
        <div className="flex lg:hidden items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-[var(--card-bg)] transition-colors text-xl focus:outline-none"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
          
          <button
            className="p-2 text-[var(--text-primary)] focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Mobile Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 w-full glass-card border-t border-[var(--card-border)] overflow-hidden transition-all duration-300 ${open ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}>
        <ul className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <li key={link.name} onClick={() => setOpen(false)}>
              <a 
                href={link.href} 
                className="block text-base font-medium text-[var(--text-primary)] hover:text-[var(--color-primary)]"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li onClick={() => setOpen(false)} className="pt-2">
            <a 
              href="/resume.pdf" 
              download
              className="inline-block btn-primary text-sm shadow-md"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
