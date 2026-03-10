"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site-config";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Experience List */}
          <div className="relative space-y-12">
            {siteConfig.experience.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 p-6 rounded-xl hover:bg-muted/50 transition-all duration-300"
              >
                {/* Visual Timeline Decorator (Desktop Only) */}
                <div className="hidden md:block absolute left-[184px] top-0 bottom-0 w-px bg-border group-last:h-8" />
                <div className="hidden md:block absolute left-[180px] top-9 w-2 h-2 rounded-full bg-muted-foreground/30 group-hover:bg-primary transition-colors ring-4 ring-background" />

                {/* Date / Period */}
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider pt-2">
                  {exp.period}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold inline-flex items-center gap-1 group-hover:text-primary transition-colors">
                      {exp.role}
                      <ArrowUpRight className="w-4 h-4 translate-y-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <div className="text-lg font-medium text-foreground/80">
                      {exp.company}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="rounded-md px-2 py-0.5 text-xs font-semibold bg-secondary/50 text-secondary-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}