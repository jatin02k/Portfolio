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
<<<<<<< HEAD
    <section id="contact" className="py-32 px-4 sm:px-6 bg-muted/30 border-t border-border/50">
      <div className="mx-auto max-w-4xl text-center">
=======
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
>>>>>>> d1a7e1d3a4798862f394c96a630c6e32b448e67a
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
<<<<<<< HEAD
          className="text-4xl sm:text-6xl font-bold tracking-tight mb-6"
        >
          Ready to ship?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          I’m currently looking for new opportunities. Whether you need an MVP or a full-stack developer, my inbox is always open.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="flex justify-center gap-4 flex-wrap"
        >
          {links.map(({ href, label, icon: Icon }) => (
            <a
=======
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
>>>>>>> d1a7e1d3a4798862f394c96a630c6e32b448e67a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
<<<<<<< HEAD
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background font-medium px-6 py-3 hover:opacity-90 transition-opacity"
            >
              <Icon size={18} /> {label}
            </a>
          ))}
        </motion.div>
=======
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
>>>>>>> d1a7e1d3a4798862f394c96a630c6e32b448e67a
      </div>
    </section>
  );
}


