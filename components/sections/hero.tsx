"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import {
   ArrowDown,
   BadgeCheck,
   Bug,
   Download,
   Eye,
   Facebook,
   Github,
   Linkedin,
   Mail,
   Terminal,
 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const terminalLines = [
  "student@portfolio:~$ whoami",
  "software-dev + web/api-security",
  "stack: nextjs spring django dotnet",
  "labs: htb tryhackme portswigger",
];

const floatingTags = ["OWASP Top 10", "API", "Web Security", "Next.js", "Burp Suite", "SQL","Spring Boot", "PortSwigger"];

function WalkingBug({
  className,
  size = "large",
  delay = 0,
  reverse = false,
}: {
  className: string;
  size?: "small" | "large";
  delay?: number;
  reverse?: boolean;
}) {
  const [isStopped, setIsStopped] = useState(false);
  const iconSize = size === "large" ? "h-10 w-10" : "h-7 w-7";
  const shellSize = size === "large" ? "h-20 w-20" : "h-14 w-14";

  return (
    <motion.button
      type="button"
      aria-label="Animated bug"
      onMouseEnter={() => setIsStopped(true)}
      onMouseLeave={() => setIsStopped(false)}
      animate={
        isStopped
          ? { x: 0, y: 12, rotate: 180, scale: 0.86, opacity: 0.45 }
          : {
              x: reverse ? [0, -28, -8, -36, 0] : [0, 28, 8, 36, 0],
              y: [0, -8, 4, -6, 0],
              rotate: reverse ? [0, -10, 4, -12, 0] : [0, 10, -4, 12, 0],
              scale: [1, 1.05, 1, 1.05, 1],
              opacity: 1,
            }
      }
      transition={
        isStopped
          ? { duration: 0.2 }
          : {
              duration: size === "large" ? 4.8 : 5.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }
      }
      className={`absolute hidden items-center justify-center rounded-lg border border-primary/25 bg-card/75 text-primary shadow-lg shadow-primary/10 backdrop-blur transition-colors hover:border-destructive/40 hover:bg-destructive/10 hover:text-destructive md:flex ${shellSize} ${className}`}
    >
      <Bug className={iconSize} />
      {!isStopped && (
        <motion.span
          aria-hidden="true"
          animate={{ opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="absolute -bottom-5 font-mono text-[10px] text-primary"
        >
          walking...
        </motion.span>
      )}
      {isStopped && (
        <span className="absolute -bottom-5 font-mono text-[10px] text-destructive">
          stopped
        </span>
      )}
    </motion.button>
  );
}

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 80, damping: 22 });
  const glowY = useSpring(mouseY, { stiffness: 80, damping: 22 });
  const cardPointerX = useMotionValue(160);
  const cardPointerY = useMotionValue(220);
  const cardTiltX = useMotionValue(0);
  const cardTiltY = useMotionValue(0);
  const cardGlowX = useSpring(cardPointerX, { stiffness: 180, damping: 24 });
  const cardGlowY = useSpring(cardPointerY, { stiffness: 180, damping: 24 });
  const cardRotateX = useSpring(useTransform(cardTiltY, [-0.5, 0.5], [10, -10]), {
    stiffness: 180,
    damping: 20,
  });
  const cardRotateY = useSpring(useTransform(cardTiltX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 180,
    damping: 20,
  });
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [activeLine, setActiveLine] = useState("");
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const typeNext = () => {
      const line = terminalLines[lineIndex];
      setActiveLine(line.slice(0, charIndex + 1));
      charIndex += 1;

      if (charIndex < line.length) {
        timeout = setTimeout(typeNext, 38);
        return;
      }

      timeout = setTimeout(() => {
        setTypedLines((lines) => [...lines, line]);
        setActiveLine("");
        lineIndex += 1;
        charIndex = 0;

        if (lineIndex < terminalLines.length) {
          timeout = setTimeout(typeNext, 220);
        } else {
          timeout = setTimeout(() => {
            setTypedLines([]);
            lineIndex = 0;
            charIndex = 0;
            typeNext();
          }, 1800);
        }
      }, 420);
    };

    typeNext();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
      }}
    >
      {/* Background Grid Effect */}
      <motion.div
        aria-hidden="true"
        animate={{ backgroundPosition: ["0rem 0rem", "4rem 4rem"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-70"
      />
      <motion.div
        aria-hidden="true"
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none absolute left-0 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
      />

      <WalkingBug className="right-10 top-28" delay={0.2} />
      <WalkingBug className="left-10 bottom-32 lg:flex" size="small" delay={0.8} reverse />

      <div className="pointer-events-none absolute inset-0 hidden xl:block">
        {floatingTags.map((tag, index) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, y: 12 }}
            animate={{
              opacity: [0.25, 0.75, 0.25],
              y: [0, -16, 0],
              rotate: index % 2 === 0 ? [0, 4, 0] : [0, -4, 0],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.35,
            }}
            className="absolute rounded-md border border-border bg-card/70 px-3 py-1 font-mono text-xs text-muted-foreground shadow-sm backdrop-blur"
            style={{
              left: `${12 + index * 17}%`,
              top: index % 2 === 0 ? "22%" : "72%",
            }}
          >
            {tag}
          </motion.span>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid items-center gap-10 pt-28 pb-20 lg:grid-cols-[minmax(0,1fr)_380px] lg:pt-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
               Actively seeking internships and job opportunities
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
                <motion.span
                  className="inline-block text-foreground"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {siteConfig.name}
                </motion.span>
              </h1>

              <p className="text-xl md:text-2xl text-primary font-medium">
                {siteConfig.title}
              </p>

              <p className="mx-auto max-w-xl text-lg text-muted-foreground leading-relaxed lg:mx-0">
                {siteConfig.description}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              whileHover={{ y: -4 }}
              className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-lg border border-border bg-card/80 text-left shadow-xl shadow-black/10 backdrop-blur lg:mx-0"
            >
              <motion.div
                aria-hidden="true"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-primary to-transparent"
              />
              <div className="flex items-center gap-2 border-b border-border px-4 py-3 text-muted-foreground">
                <Terminal className="h-4 w-4 text-primary" />
                <span className="font-mono text-xs">learning-profile.sh</span>
              </div>
              <div className="space-y-2 p-4 font-mono text-xs text-muted-foreground sm:text-sm">
                {typedLines.map((line, index) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.18 }}
                    className={index === 0 ? "text-primary" : ""}
                  >
                    {line}
                  </motion.p>
                ))}
                {activeLine && (
                  <p className={typedLines.length === 0 ? "text-primary" : ""}>
                    {activeLine}
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="ml-1"
                    >
                      _
                    </motion.span>
                  </p>
                )}
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 z-99 lg:justify-start">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button asChild variant="default" size="lg">
                  <a href="#contact">Get in touch</a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button asChild variant="outline" size="lg">
                  <a href="#projects">View Projects</a>
                </Button>
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-4 pt-2 lg:justify-start">
              {[
                { icon: Github, href: siteConfig.github, label: "GitHub" },
                {
                  icon: Linkedin,
                  href: siteConfig.linkedin,
                  label: "LinkedIn",
                },
                {
                   icon: Facebook,
                   href: siteConfig.facebook,
                   label: "Facebook",
                 },
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

          <motion.div
            initial={{ opacity: 0, y: -360, rotate: -18, scale: 0.86 }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: [0, 4, -2, 0],
              scale: 1,
            }}
            transition={{
              opacity: { duration: 0.2, delay: 0.25 },
              y: { type: "spring", stiffness: 72, damping: 11, delay: 0.25 },
              rotate: { duration: 1.15, delay: 0.65, ease: "easeOut" },
              scale: { type: "spring", stiffness: 100, damping: 14, delay: 0.25 },
            }}
            whileHover={{
              y: -14,
              scale: 1.03,
            }}
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              const x = event.clientX - rect.left;
              const y = event.clientY - rect.top;

              cardPointerX.set(x);
              cardPointerY.set(y);
              cardTiltX.set(x / rect.width - 0.5);
              cardTiltY.set(y / rect.height - 0.5);
            }}
            onMouseLeave={() => {
              cardPointerX.set(160);
              cardPointerY.set(220);
              cardTiltX.set(0);
              cardTiltY.set(0);
            }}
            className="group relative mx-auto w-full max-w-82.5 text-left perspective-distant sm:max-w-90"
          >
            <motion.div
              aria-hidden="true"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="absolute -top-28 left-1/2 hidden h-28 w-px origin-top bg-linear-to-b from-transparent via-primary/50 to-primary/20 lg:block"
            />
            <motion.div
              aria-hidden="true"
              animate={{ opacity: [0.35, 0.75, 0.35], scale: [1, 1.04, 1] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 rounded-xl bg-primary/20 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute -top-20 right-7 h-28 w-14 rotate-12 rounded-t-lg bg-[linear-gradient(135deg,#22c55e,#60a5fa)] shadow-xl shadow-black/20"
            />
            <div
              aria-hidden="true"
              className="absolute -top-8 right-16 h-12 w-12 rounded-full border-10 border-slate-200 bg-transparent shadow-lg dark:border-slate-700"
            />
            <motion.div
              style={{ rotateX: cardRotateX, rotateY: cardRotateY }}
              className="relative overflow-hidden rounded-lg border border-border/80 bg-card/90 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl transition-colors duration-300 group-hover:border-primary/40"
            >
              <motion.div
                aria-hidden="true"
                style={{ x: cardGlowX, y: cardGlowY }}
                className="pointer-events-none absolute left-0 top-0 -ml-24 -mt-24 h-48 w-48 rounded-full bg-primary/25 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <motion.div
                aria-hidden="true"
                animate={{ x: ["-120%", "120%"] }}
                transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.8, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-y-0 left-0 w-1/2 skew-x-[-18deg] bg-linear-to-r from-transparent via-primary/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="relative rounded-md border border-border bg-background/95 p-3 shadow-inner shadow-primary/10">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-3 py-1.5 font-mono text-[11px] font-bold uppercase text-primary">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Profile Card
                  </div>
                  <a
                    href={siteConfig.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-500 transition-colors hover:bg-emerald-400/15"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    CV Ready
                  </a>
                </div>

                <a
                  href={siteConfig.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open EY Channim CV"
                  className="group/card relative block overflow-hidden rounded-md border border-border bg-slate-950 shadow-xl shadow-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="absolute inset-0 bg-white" />
                  <div className="absolute left-0 top-0 z-10 h-28 w-full bg-[#112d54]" />
                  <div className="absolute -left-16 top-20 z-10 h-24 w-80 -rotate-28 rounded-full bg-[#00D091]" />
                  <div className="absolute -left-10 top-28 z-10 h-20 w-80 -rotate-28 rounded-full bg-[#2b9abc]" />
                  <div className="absolute -right-24 bottom-8 z-10 h-24 w-80 -rotate-28 rounded-full bg-[#37a8e4]" />
                  <div className="absolute -right-20 bottom-24 z-10 h-16 w-72 -rotate-28 rounded-full bg-[#00D091]" />
                  <div className="relative aspect-[4/4.65]">
                    {!imageError && (
                      <div className="absolute left-1/2 top-[12%] z-20 h-46 w-38 -translate-x-1/2 overflow-hidden rounded-md border-4 border-[#193967] bg-white shadow-lg">
                        <Image
                          src={siteConfig.profileImage}
                          alt={siteConfig.name}
                          fill
                          sizes="328px"
                          onError={() => setImageError(true)}
                          className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                        />
                      </div>
                    )}
                    {imageError && (
                      <div className="absolute left-1/2 top-[28%] z-20 flex h-32 w-32 -translate-x-1/2 items-center justify-center overflow-hidden rounded-md border-4 border-[#193967] bg-[linear-gradient(145deg,#f8fafc,#d9fff4,#bfdbfe)] shadow-lg">
                        <span className="font-mono text-4xl font-bold text-[#193967]">
                          CE
                        </span>
                      </div>
                    )}
                    <div className="absolute left-4 right-4 top-2 z-20 flex items-center justify-between text-white">
                      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/15 font-mono text-sm font-bold backdrop-blur">
                        EY
                      </span>
                      <span className="rounded-md border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase backdrop-blur">
                        Portfolio
                      </span>
                    </div>
                    <div className="absolute left-5 right-5 top-[66%] z-20 text-center">
                      <h2 className="truncate text-2xl font-black uppercase text-[#150d10]">
                        {siteConfig.name}
                      </h2>
                      <p className="mt-1 text-sm font-bold uppercase text-[#0f2f73]">
                        Profile / Developer
                      </p>
                      <div className="mx-auto mt-4 max-w-55 space-y-1.5 text-left text-[11px] font-semibold text-slate-700">
                        <p className="flex justify-between gap-3">
                          <span className="text-slate-500">Focus</span>
                          <span>Web/API Security</span>
                        </p>
                        <p className="flex justify-between gap-3">
                          <span className="text-slate-500">Study</span>
                          <span>IT Academy STEP & ISTAD</span>
                        </p>
                      </div>
                    </div>

                  </div>
                </a>


                <div className="mt-3 rounded-md border border-primary/20 bg-primary/10 p-2">
                  <div className="mb-2 flex items-center justify-between font-mono text-[11px] font-bold uppercase text-primary">
                    <span>{"<profile_card />"}</span>
                    <span>CV Attached</span>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Full-stack student building secure web apps and practicing
                    hands-on API security labs.
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2">
  <Button asChild size="sm" className="h-9 rounded-md">
    <a
      href={siteConfig.resume}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-1"
    >
      <Eye className="h-4 w-4" />
      View CV
    </a>
  </Button>

  <Button
    asChild
    size="sm"
    variant="outline"
    className="h-9 rounded-md bg-background/70"
  >
    <a
      href={siteConfig.resume}
      download
      className="flex items-center justify-center gap-1"
    >
      <Download className="h-4 w-4" />
      Download
    </a>
  </Button>
</div>
                </div>
              </div>
            </motion.div>
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
