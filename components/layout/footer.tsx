"use client";

import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  { icon: Github, href: siteConfig.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: siteConfig.twitter, label: "Twitter" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start gap-1">
              Built with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> by{" "}
              <span className="text-foreground font-medium">{siteConfig.name}</span>
            </p>
            <p className="mt-1">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
