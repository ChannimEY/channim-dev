"use client";

import { motion } from "framer-motion";
import { Shield, Code, Bug, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";

const stats = [
  {
    icon: Bug,
    value: siteConfig.stats.vulnerabilitiesFound,
    label: "Vulnerabilities Found",
  },
  {
    icon: Shield,
    value: siteConfig.stats.companiesSecured,
    label: "Companies Secured",
  },
  {
    icon: Award,
    value: siteConfig.stats.bountiesEarned,
    label: "Bug Bounties Earned",
  },
  {
    icon: Code,
    value: siteConfig.stats.yearsExperience,
    label: "Years Experience",
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
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {`I'm a security researcher and software developer with a passion for 
                finding and fixing vulnerabilities in web applications. My expertise 
                lies in API security, where I've identified critical flaws in 
                authentication systems, authorization logic, and data handling.`}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {`When I'm not breaking things, I'm building them. I develop secure, 
                scalable applications using modern technologies. I believe that the 
                best security comes from understanding both sides — how systems are 
                built and how they can be broken.`}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {`I've been recognized on bug bounty platforms like HackerOne and 
                Bugcrowd, and have responsibly disclosed vulnerabilities to major 
                tech companies. I'm also an advocate for security education and 
                regularly share my knowledge through blog posts and talks.`}
              </p>

              {/* Certifications */}
              <div className="pt-6">
                <h3 className="text-lg font-semibold mb-4 text-primary">
                  Certifications
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

            {/* Stats Cards */}
            <div className="md:col-span-2 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="bg-card hover:bg-secondary/50 transition-colors group">
                    <CardContent className="p-6 text-center space-y-2">
                      <stat.icon className="w-8 h-8 mx-auto text-primary group-hover:scale-110 transition-transform" />
                      <div className="text-2xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
