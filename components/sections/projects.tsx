"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Projects() {
  const featuredProjects = siteConfig.projects.filter((p) => p.featured);
  const otherProjects = siteConfig.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-secondary/30">
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
            <h2 className="text-3xl font-bold text-center">Projects</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card hover:bg-secondary/50 transition-all duration-300 group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Folder className="w-10 h-10 text-primary" />
                      <div className="flex items-center gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="GitHub Repository"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="Live Demo"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs font-mono"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-6 text-center text-muted-foreground">
                Other Noteworthy Projects
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {otherProjects.map((project, index) => (
                  <motion.a
                    key={project.title}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-lg bg-card hover:bg-secondary/50 border border-border hover:border-primary/50 transition-all group"
                  >
                    <div>
                      <h4 className="font-medium group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {project.technologies.join(" · ")}
                      </p>
                    </div>
                    <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          )}

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group"
            >
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View All on GitHub
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
