import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Competent Engineering Construction LLC',
    location: 'Dubai, UAE',
    position: 'Quantity Surveyor',
    period: 'July 2022 – Present',
    responsibilities: [
      'Prepared comprehensive quantity take-offs and BOQs using PlanSwift and AutoCAD for various project types',
      'Conducted rate analysis and cost estimation to support tender submissions and budget planning',
      'Managed contract administration including valuation of works, progress claims, and variation orders',
      'Collaborated with project managers and engineers to resolve discrepancies and optimize resource allocation',
      'Ensured compliance with project specifications, quality standards, and contractual requirements',
    ],
  },
  {
    company: 'Ark Construction & Developers Pvt Ltd',
    location: 'Colombo, Sri Lanka',
    position: 'Quantity Surveyor',
    period: 'April 2021 – June 2022',
    responsibilities: [
      'Executed detailed quantity surveying tasks for residential and commercial construction projects',
      'Prepared accurate Bills of Quantities and cost estimates to facilitate project budgeting',
      'Assisted in procurement processes and supplier negotiations to achieve cost savings',
      'Monitored project progress and conducted site measurements for interim payment certifications',
      'Maintained project documentation and ensured timely reporting to stakeholders',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-gradient">
            Professional Experience
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 transform -translate-x-1/2 animate-pulse" />

                {/* Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 pl-16 md:pl-0' : 'md:pl-12 pl-16 md:pr-0'}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300">
                      {/* Company Info */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-primary/10 p-3 rounded-xl">
                          <Building2 className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-display font-bold text-foreground mb-1">
                            {exp.company}
                          </h3>
                          <p className="text-lg font-semibold text-primary mb-2">
                            {exp.position}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="text-secondary mt-1.5 text-xs">▹</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
