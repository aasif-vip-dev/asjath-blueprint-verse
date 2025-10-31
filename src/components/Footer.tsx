import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

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

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© 2025 All rights reserved</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-primary animate-pulse" /> in Dubai
            </span>
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
