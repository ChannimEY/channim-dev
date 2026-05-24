"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Code2, Shield, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  function toggleCategory(title: string) {
    setExpandedCategories((current) => ({
      ...current,
      [title]: !current[title],
    }));
  }

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

          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-muted-foreground">
              A focused view of the tools I use most. Expand each category to see the full stack.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-6 max-w-6xl mx-auto lg:grid-cols-3">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="rounded-lg border border-border bg-card p-5 shadow-lg shadow-black/5"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.bgColor}`}>
                      <category.icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                      <p className="text-xs text-muted-foreground">
                        {category.skills.length} skills
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {(expandedCategories[category.title]
                    ? category.skills
                    : category.skills.slice(0, 6)
                  ).map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="group inline-flex items-center gap-2 rounded-md border border-border bg-secondary/45 px-3 py-2 text-sm transition-colors hover:border-primary/40 hover:bg-primary/10"
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${category.bgColor} ${category.color.replace("text-", "bg-")}`}
                      />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {category.skills.length > 6 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => toggleCategory(category.title)}
                    className="mt-5 w-full justify-center gap-2 rounded-md"
                    aria-expanded={Boolean(expandedCategories[category.title])}
                  >
                    {expandedCategories[category.title]
                      ? "Show less"
                      : `View ${category.skills.length - 6} more`}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        expandedCategories[category.title] ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
