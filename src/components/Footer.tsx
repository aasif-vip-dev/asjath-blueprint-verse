import { motion } from 'framer-motion';
import { Heart, Linkedin, Instagram, Mail } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 overflow-hidden border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,175,55,0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-4"
        >
          {/* Name */}
          <button
            onClick={scrollToTop}
            className="text-2xl font-display font-bold text-gradient hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            Rafiudeen Asjath Ahamed
          </button>

          {/* Tagline */}
          <p className="text-muted-foreground text-sm">
            Quantity Surveyor | Cost Control Specialist
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 my-4">
            <a
              href="https://www.linkedin.com/in/asjathahamedd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.tiktok.com/@your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
            >
              <SiTiktok className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="mailto:asjathahamadd@gmail.com"
              className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

          {/* Copyright */}
          <div className="flex flex-col items-center gap-2 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
              <span>© 2025 Rafiudeen Asjath Ahamed. All rights reserved</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1">
                Built & Managed by{' '}
                <a 
                  href="https://aasifvip.info" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors duration-300 font-semibold inline-flex items-center gap-1"
                >
                  Aasifvip — Aasifvip.info
                </a>
              </span>
            </div>
            
          </div>

          {/* Particles Animation */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: 0,
                  opacity: 0,
                }}
                animate={{
                  y: window.innerHeight,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
