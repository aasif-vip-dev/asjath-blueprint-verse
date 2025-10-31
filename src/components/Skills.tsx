import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Calculator,
  FileText,
  TrendingUp,
  FileCheck,
  DollarSign,
  ClipboardList,
  PenTool,
  Ruler,
  Layers,
  Layout,
  Hammer,
  Package,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Professional Skills',
    color: 'from-primary to-yellow-500',
    skills: [
      { name: 'Quantity Take-off', icon: Calculator },
      { name: 'BOQ Preparation', icon: FileText },
      { name: 'Cost Estimation', icon: DollarSign },
      { name: 'Cost Control', icon: TrendingUp },
      { name: 'Contract Administration', icon: FileCheck },
      { name: 'Progress Monitoring', icon: ClipboardList },
    ],
  },
  {
    title: 'Software Expertise',
    color: 'from-secondary to-teal-500',
    skills: [
      { name: 'PlanSwift', icon: Layout },
      { name: 'AutoCAD', icon: PenTool },
      { name: 'CostX', icon: Layers },
      { name: 'Microsoft Office', icon: Package },
    ],
  },
  {
    title: 'Technical Skills',
    color: 'from-accent to-blue-500',
    skills: [
      { name: 'Rate Analysis', icon: Calculator },
      { name: 'IPA Preparation', icon: FileText },
      { name: 'Site Measurement', icon: Ruler },
      { name: 'Material Management', icon: Hammer },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden bg-muted/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(30deg,#1a1f3a_12%,transparent_12.5%,transparent_87%,#1a1f3a_87.5%,#1a1f3a),linear-gradient(150deg,#1a1f3a_12%,transparent_12.5%,transparent_87%,#1a1f3a_87.5%,#1a1f3a),linear-gradient(30deg,#1a1f3a_12%,transparent_12.5%,transparent_87%,#1a1f3a_87.5%,#1a1f3a),linear-gradient(150deg,#1a1f3a_12%,transparent_12.5%,transparent_87%,#1a1f3a_87.5%,#1a1f3a)] bg-[length:80px_140px] opacity-20" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Core Competencies
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-gradient">
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              className="relative group"
            >
              {/* Category Card */}
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 h-full hover:border-primary/50 transition-all duration-300">
                {/* Header */}
                <div className="mb-8">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                    <span className="text-white font-display font-semibold text-sm">
                      {category.title}
                    </span>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: catIndex * 0.2 + skillIndex * 0.05,
                      }}
                      className="group/skill relative"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-xl opacity-0 group-hover/skill:opacity-20 blur-md transition-all duration-300`} />
                      
                      <div className="relative bg-background/50 backdrop-blur-sm border border-border/30 rounded-xl p-4 hover:border-primary/50 transition-all duration-300 cursor-pointer transform hover:scale-105">
                        <skill.icon className="h-6 w-6 text-primary mb-2" />
                        <p className="text-sm font-medium text-foreground/90 leading-tight">
                          {skill.name}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-3 -right-3 w-16 h-16 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`w-full h-full rounded-full bg-gradient-to-br ${category.color} blur-xl animate-pulse`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
