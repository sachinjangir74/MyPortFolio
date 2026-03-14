import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    const formData = new FormData(event.target);

    // Using Web3Forms API to send email without a backend
    // USER NEEDS TO REPLACE 'YOUR_WEB3FORMS_ACCESS_KEY_HERE' LATER
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        event.target.reset(); // clear the form fields
        
        // Clear message after 5 seconds
        setTimeout(() => {
            setStatus("");
        }, 5000);
      } else {
        console.error("Error from Web3Forms:", data);
        setStatus("error");
      }
    } catch (error) {
       console.error("Network Error:", error);
       setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[var(--bg-primary)]">
      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]"
          >
            Contact Me
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          
          {/* Info Side */}
          <motion.div 
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Let's Connect</h3>
            <p className="text-[var(--text-muted)] leading-relaxed text-lg">
              I am currently open to new opportunities, internships, and freelance projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6 pt-4 text-[var(--text-secondary)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full flex items-center justify-center text-xl">📧</div>
                <div>
                  <p className="text-sm text-[var(--text-muted)] font-semibold mb-1">Email</p>
                  <p className="font-medium text-[var(--text-primary)] hover:text-[var(--color-primary)] transition-colors"><a href="mailto:hello@example.com">hello@example.com</a></p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full flex items-center justify-center text-xl">📞</div>
                <div>
                  <p className="text-sm text-[var(--text-muted)] font-semibold mb-1">Phone</p>
                  <p className="font-medium text-[var(--text-primary)]">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full flex items-center justify-center text-xl">📍</div>
                <div>
                  <p className="text-sm text-[var(--text-muted)] font-semibold mb-1">Location</p>
                  <p className="font-medium text-[var(--text-primary)]">Bengaluru, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={onSubmit} className="glass-card p-8 rounded-3xl flex flex-col gap-6 relative">
              
              {/* Form Status Messages */}
              {status === "success" && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-500/20 text-green-400 border border-green-500/50 rounded-xl text-center text-sm font-medium">
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-500/20 text-red-400 border border-red-500/50 rounded-xl text-center text-sm font-medium">
                  Something went wrong. Please try again later.
                </motion.div>
              )}

              {/* Required Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE" />
              
              {/* Subject Title for Emails */}
              <input type="hidden" name="subject" value="New Submission from Portfolio" />

              <div>
                <label className="block text-sm font-medium text-[var(--text-muted)] mb-2" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  className="w-full bg-[var(--bg-primary)]/50 border border-[var(--card-border)] rounded-xl py-3 px-4 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-muted)] mb-2" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full bg-[var(--bg-primary)]/50 border border-[var(--card-border)] rounded-xl py-3 px-4 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-muted)] mb-2" htmlFor="message">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Hello Sachin, I'd like to discuss..."
                  rows="5"
                  className="w-full bg-[var(--bg-primary)]/50 border border-[var(--card-border)] rounded-xl py-3 px-4 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === "submitting"}
                className="btn-primary w-full py-4 text-lg mt-2 shadow-lg shadow-[var(--color-primary)]/30 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {status === "submitting" ? (
                   <>
                     <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                     Sending...
                   </>
                ) : "Send Message"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
