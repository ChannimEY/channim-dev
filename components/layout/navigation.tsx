"use client";

import { useState, useEffect } from "react";
import type { MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMobileMenuOpen(false);
      return;
    }

    const target = document.querySelector<HTMLElement>(href);
    if (!target) {
      setIsMobileMenuOpen(false);
      return;
    }

    const headerOffset = 96;
    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top: targetPosition, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    scrollToSection(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/75 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 py-4 sm:px-6">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45 }}
          className={cn(
            "flex items-center justify-between rounded-lg border px-4 py-3 transition-all duration-300",
            isScrolled
              ? "border-border bg-card/80 shadow-lg shadow-black/5"
              : "border-transparent bg-transparent"
          )}
        >
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(event) => handleNavClick(event, "#")}
            className="group flex items-center gap-3"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Go to top"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/25 bg-primary/10 font-mono text-sm font-bold text-primary shadow-sm shadow-primary/10">
              EY
            </span>
            <span className="font-mono text-lg font-bold text-primary sm:text-xl">
              {"<"}
              <span className="text-foreground transition-colors group-hover:text-primary">
                Channim
              </span>
              {"/>"}
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {siteConfig.navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                whileHover={{ y: -1 }}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {item.name}
              </motion.a>
            ))}
            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex h-9 items-center gap-2 rounded-md border border-input bg-background px-3 text-xs font-semibold shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="mt-3 rounded-lg border border-border bg-card/95 p-4 shadow-xl shadow-black/10 backdrop-blur space-y-2">
                {siteConfig.navigation.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item.href)}
                    whileTap={{ scale: 0.98 }}
                    className="block rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <a
                  href={siteConfig.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-3 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
