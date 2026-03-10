"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  { icon: Github, href: siteConfig.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: siteConfig.twitter, label: "Twitter" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {`Whether you're looking for a security assessment, want to collaborate 
            on a project, or just want to say hello, I'd love to hear from you. 
            My inbox is always open.`}
          </p>

          {/* Contact Info */}
          <div className="space-y-6 mb-10">
            <motion.a
              href={`mailto:${siteConfig.email}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-mono">{siteConfig.email}</span>
            </motion.a>

            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{siteConfig.location}</span>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <Button asChild size="lg" className="group">
              <a href={`mailto:${siteConfig.email}`}>
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                Send me an email
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
