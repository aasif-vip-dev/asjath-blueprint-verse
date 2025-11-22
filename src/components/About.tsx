import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const stats = [
  {
    icon: Briefcase,
    value: '3+',
    label: 'Years Experience',
    color: 'text-primary',
  },
  // {
  //   icon: Award,
  //   value: '100+',
  //   label: 'Projects Completed',
  //   color: 'text-secondary',
  // },
  {
    icon: GraduationCap,
    value: '4',
    label: 'Qualifications',
    color: 'text-accent',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1f3a_1px,transparent_1px),linear-gradient(to_bottom,#1a1f3a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-gradient">
            Professional Background
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-foreground/90 leading-relaxed">
                A dedicated and detail-oriented <span className="text-primary font-semibold">Quantity Surveyor</span> with extensive experience in cost estimation, budgeting, and project management across diverse sectors including Civil, MEP, Infrastructure, Fit-Out, and Joinery works.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Proficient in utilizing industry-leading software such as <span className="text-secondary font-semibold">PlanSwift, AutoCAD, and CostX</span> to deliver accurate quantity take-offs and Bills of Quantities (BOQ). Proven track record in managing full project lifecycles from inception through completion, ensuring cost efficiency and adherence to contractual obligations.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Strong analytical and communication skills with a commitment to delivering high-quality results in fast-paced environments.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 card-glow">
                  <div className="flex items-center gap-4">
                    <div className={`${stat.color} bg-background/50 p-4 rounded-xl`}>
                      <stat.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="text-3xl font-display font-bold text-gradient">
                        {stat.value}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
