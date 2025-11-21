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
      { name: 'Quantity Take-off', icon: Calculator, level: 95 },
      { name: 'BOQ Preparation', icon: FileText, level: 98 },
      { name: 'Cost Estimation', icon: DollarSign, level: 92 },
      { name: 'Cost Control', icon: TrendingUp, level: 90 },
      { name: 'Contract Administration', icon: FileCheck, level: 88 },
      { name: 'Progress Monitoring', icon: ClipboardList, level: 85 },
    ],
  },
  {
    title: 'Software Expertise',
    color: 'from-secondary to-teal-500',
    skills: [
      { name: 'PlanSwift', icon: Layout, level: 95 },
      { name: 'AutoCAD', icon: PenTool, level: 90 },
      { name: 'CostX', icon: Layers, level: 88 },
      { name: 'Microsoft Office', icon: Package, level: 98 },
    ],
  },
  {
    title: 'Technical Skills',
    color: 'from-accent to-blue-500',
    skills: [
      { name: 'Rate Analysis', icon: Calculator, level: 92 },
      { name: 'IPA Preparation', icon: FileText, level: 90 },
      { name: 'Site Measurement', icon: Ruler, level: 88 },
      { name: 'Material Management', icon: Hammer, level: 85 },
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

                {/* Skills List with Progress Bars */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: catIndex * 0.2 + skillIndex * 0.1,
                      }}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <skill.icon className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-primary">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative h-2 bg-background/50 rounded-full overflow-hidden border border-border/30">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1.5,
                            delay: catIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${category.color} relative`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                        </motion.div>
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
