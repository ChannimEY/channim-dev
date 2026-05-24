"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Facebook, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  { icon: Github, href: siteConfig.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: Facebook, href: siteConfig.facebook, label: "Facebook" },
];

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function createMailtoHref(payload: ContactPayload) {
  const subject = payload.subject || "Portfolio contact";
  const body = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    "",
    payload.message,
  ].join("\n");

  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok) {
        if (data.code === "EMAIL_NOT_CONFIGURED") {
          window.location.href = createMailtoHref(payload);
          setStatus("success");
          setFeedback("Your email app is ready with the message. Please press send.");
          return;
        }

        throw new Error(data.error ?? "Could not send your message.");
      }

      form.reset();
      setStatus("success");
      setFeedback("Message sent. Thank you for reaching out.");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Could not send your message.");
    }
  }

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
            {`I'm open to student projects, internships, cybersecurity learning opportunities,
            and collaboration on web, API, mobile, or security practice projects. My inbox is
            always open.`}
          </p>

          <form
            onSubmit={handleSubmit}
            className="mb-10 grid gap-4 rounded-lg border border-border bg-card p-5 text-left shadow-lg shadow-black/5"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium">
                <span>Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Your name"
                />
              </label>
              <label className="space-y-2 text-sm font-medium">
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="space-y-2 text-sm font-medium">
              <span>Subject</span>
              <input
                name="subject"
                type="text"
                className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Project, internship, or collaboration"
              />
            </label>

            <label className="space-y-2 text-sm font-medium">
              <span>Message</span>
              <textarea
                name="message"
                required
                rows={6}
                className="min-h-36 w-full resize-y rounded-md border border-input bg-background px-3 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Write your message..."
              />
            </label>

            {feedback && (
              <p
                className={`text-sm ${
                  status === "success" ? "text-primary" : "text-destructive"
                }`}
              >
                {feedback}
              </p>
            )}

            <Button type="submit" size="lg" className="group w-full sm:w-fit" disabled={status === "loading"}>
              <Send className="w-4 h-4 mr-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              {status === "loading" ? "Sending..." : "Send message"}
            </Button>
          </form>

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
