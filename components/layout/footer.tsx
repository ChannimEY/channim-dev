"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Facebook, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  { icon: Github, href: siteConfig.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: Facebook, href: siteConfig.facebook, label: "Facebook" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = siteConfig.navigation;

  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary/25">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="grid gap-10 py-12 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="space-y-5"
          >
            <a href="#" className="inline-flex items-center font-mono text-2xl font-bold text-primary">
              {"<"}
              <span className="text-foreground">Channim</span>
              <span className="text-muted-foreground"> /</span>
              {">"}
            </a>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Software development student focused on full-stack university projects,
              web/API security practice, and clean user experiences.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2">
                <MapPin className="h-4 w-4 text-primary" />
                {siteConfig.location}
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="space-y-4"
          >
            <h3 className="font-mono text-sm font-semibold text-foreground">Navigate</h3>
            <div className="grid gap-2">
              {footerLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="space-y-4"
          >
            <h3 className="font-mono text-sm font-semibold text-foreground">Connect</h3>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border py-5 text-xs text-muted-foreground sm:flex-row">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="font-mono">built_with_nextjs && tailwindcss</p>
        </div>
      </div>
    </footer>
  );
}
