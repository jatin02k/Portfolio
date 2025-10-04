"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const links = [
  { href: "https://mail.google.com/mail/?view=cm&to=jatin02kr@gmail.com", label: "Email", icon: Mail },
  { href: "https://github.com/jatin02k", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/jatin-kumar221/", label: "LinkedIn", icon: Linkedin },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-4 text-foreground/80"
        >
          I’m open to freelance, part‑time, and collaboration opportunities. Drop a line!
        </motion.p>
        <div className="mt-6 flex flex-wrap gap-3">
          {links.map(({ href, label, icon: Icon }, idx) => (
            <motion.a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              className="inline-flex items-center gap-2 rounded-md border border-black/5 dark:border-white/10 px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
            >
              <Icon size={16} /> {label}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}


