import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building, Zap, Construction, Home, Box, Wrench } from 'lucide-react';

const expertise = [
  {
    icon: Building,
    title: 'Civil Works',
    description: 'Structural, foundation, and general construction projects',
    color: 'from-primary to-yellow-600',
    projects: ['Residential Buildings', 'Commercial Complexes', 'Infrastructure'],
  },
  {
    icon: Zap,
    title: 'MEP Works',
    description: 'Mechanical, Electrical, and Plumbing systems',
    color: 'from-secondary to-teal-600',
    projects: ['HVAC Systems', 'Electrical Installations', 'Plumbing Networks'],
  },
  {
    icon: Construction,
    title: 'Infrastructure',
    description: 'Roads, drainage, and civil infrastructure',
    color: 'from-accent to-blue-600',
    projects: ['Road Construction', 'Drainage Systems', 'Underground Utilities'],
  },
  {
    icon: Home,
    title: 'Fit-Out Works',
    description: 'Interior finishing and space customization',
    color: 'from-purple-500 to-pink-600',
    projects: ['Office Fit-outs', 'Retail Spaces', 'Interior Renovations'],
  },
  {
    icon: Box,
    title: 'Joinery Works',
    description: 'Custom carpentry and woodwork projects',
    color: 'from-orange-500 to-red-600',
    projects: ['Custom Cabinets', 'Doors & Windows', 'Furniture'],
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description: 'Facility management and upkeep services',
    color: 'from-green-500 to-emerald-600',
    projects: ['Preventive Maintenance', 'Repairs', 'Facility Management'],
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="portfolio" className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.08),transparent_40%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.08),transparent_40%)] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Project Categories
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-gradient">
            Areas of Expertise
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Comprehensive quantity surveying services across diverse construction sectors
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />

              {/* Card */}
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 h-full overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div className={`w-full h-full bg-gradient-to-br ${item.color} rounded-full transform translate-x-8 -translate-y-8`} />
                </div>

                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.color} mb-4 relative z-10`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {item.description}
                  </p>

                  {/* Project Types */}
                  <div className="space-y-2">
                    {item.projects.map((project, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color}`} />
                        <span>{project}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
