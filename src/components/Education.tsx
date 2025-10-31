import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen, Compass } from 'lucide-react';

const education = [
  {
    icon: GraduationCap,
    degree: 'BSc (Hons) in Quantity Surveying and Construction',
    institution: 'De Montfort University',
    location: 'United Kingdom (Online)',
    year: '2024',
    color: 'from-primary to-yellow-500',
  },
  {
    icon: Award,
    degree: 'HND in Quantity Surveying',
    institution: 'Gatehouse Awards',
    location: 'United Kingdom (Online)',
    year: '2023',
    color: 'from-secondary to-teal-500',
  },
  {
    icon: BookOpen,
    degree: 'Diploma in Quantity Surveying',
    institution: 'E.C. Nations College',
    location: 'Colombo, Sri Lanka',
    year: '2018',
    color: 'from-accent to-blue-500',
  },
  {
    icon: Compass,
    degree: 'Certificate in AutoCAD',
    institution: 'Pebbles Academy',
    location: 'Colombo, Sri Lanka',
    year: '2018',
    color: 'from-purple-500 to-pink-500',
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Academic Excellence
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-gradient">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />

              {/* Card */}
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${edu.color} mb-6`}>
                  <edu.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-display font-bold text-foreground leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-semibold">
                    {edu.institution}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{edu.location}</span>
                    <span className="px-3 py-1 bg-muted/50 rounded-full">{edu.year}</span>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${edu.color} rounded-bl-full`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
