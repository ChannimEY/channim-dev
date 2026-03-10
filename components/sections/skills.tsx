"use client";

import { motion } from "framer-motion";
import { Shield, Code2, Wrench } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const skillCategories = [
  {
    title: "Security",
    icon: Shield,
    skills: siteConfig.skills.security,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
  },
  {
    title: "Development",
    icon: Code2,
    skills: siteConfig.skills.development,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: siteConfig.skills.tools,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12 max-w-4xl mx-auto">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-3xl font-bold text-center">Skills & Tools</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.bgColor}`}>
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="group flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${category.bgColor} ${category.color.replace("text-", "bg-")}`}
                      />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
