"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";


const aboutImages = [

  {
    src: "/IMG_1410.JPG",
    alt: "EY Channim profile image",
    className: "col-span-8 row-span-5",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
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
            <h2 className="text-3xl font-bold text-center">About Me</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* About Content */}
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card/80 p-6 shadow-lg shadow-black/5 backdrop-blur">
                <div className="mb-5 flex flex-wrap gap-2">
                  {[
                    { icon: GraduationCap, label: "Software student" },
                    { icon: Shield, label: "Web/API security" },
                    { icon: MapPin, label: siteConfig.location },
                  ].map(({ icon: Icon, label }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/60 px-3 py-2 text-xs font-medium text-muted-foreground"
                    >
                      <Icon className="h-3.5 w-3.5 text-primary" />
                      {label}
                    </span>
                  ))}
                </div>

                <div className="space-y-5">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {`I'm a software development student at IT Academy STEP and a cybersecurity
                    student at ISTAD, specializing in web and API penetration testing. I do not
                    have formal company work experience yet, but I have hands-on experience from
                    real university projects and security labs.`}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {`I practice both building and testing software: frontend interfaces, backend
                    APIs, databases, mobile apps, and secure development habits. My goal is to
                    understand how systems are designed, how they fail, and how to make them
                    safer.`}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {`For cybersecurity practice, I learn through Hack The Box, TryHackMe, WebGoat,
                    CyLab Security Academy, PortSwigger Web Security Academy, and OverTheWire,
                    using tools such as Burp Suite, Nmap, Subfinder, and other pentesting tools.`}
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  "Build usable interfaces",
                  "Design reliable APIs",
                  "Practice secure testing",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                    className="rounded-lg border border-border bg-background p-4"
                  >
                    <Sparkles className="mb-3 h-4 w-4 text-primary" />
                    <p className="text-sm font-semibold">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid h-115 grid-cols-5 grid-rows-3 gap-3">
                {aboutImages.map((image, index) => (
                  <motion.div
                    key={image.src}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    className={`relative overflow-hidden rounded-lg border border-border bg-card shadow-lg shadow-black/10 ${image.className}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 360px, 100vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
                  </motion.div>
                ))}
              </div>

                          {/* Certifications */}
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="text-lg font-semibold mb-4 text-primary">
                  Learning & Practice
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {siteConfig.certifications.map((cert) => (
                    <li
                      key={cert}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
