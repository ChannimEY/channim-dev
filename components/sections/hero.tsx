"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available for consulting
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
                <span className="text-foreground">{siteConfig.name}</span>
              </h1>

              <p className="text-xl md:text-2xl text-primary font-medium">
                {siteConfig.title}
              </p>

              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                {siteConfig.description}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4">
              <Button asChild variant="default" size="lg">
                <a href="#contact">Get in touch</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-4 pt-4">
              {[
                { icon: Github, href: siteConfig.github, label: "GitHub" },
                {
                  icon: Linkedin,
                  href: siteConfig.linkedin,
                  label: "LinkedIn",
                },
                { icon: Twitter, href: siteConfig.twitter, label: "Twitter" },
                {
                  icon: Mail,
                  href: `mailto:${siteConfig.email}`,
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="text-sm font-mono">Scroll to explore</span>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
