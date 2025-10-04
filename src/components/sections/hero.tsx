"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="hero" className="relative pt-28 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-semibold tracking-tight"
            >
              Building delightful web experiences
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-foreground/80 text-lg"
            >
              I’m Jatin, a full-stack web developer specializing in MERN, Next.js, and TypeScript. I build fast, accessible, and scalable web applications with clean design and thoughtful interactions. My focus is on creating smooth user experiences and deploying production-ready products that balance performance and aesthetics.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 flex gap-3"
            >
              <Button asChild>
                <a href="#projects" className="gap-2 inline-flex items-center">
                  View projects
                  <ArrowRight size={16} />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Get in touch</a>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-square rounded-2xl bg-gradient-to-br from-black/5 to-black/0 dark:from-white/10 dark:to-white/0 border border-black/5 dark:border-white/10"
          >
            <div className="absolute inset-0 grid place-items-center text-center p-8">
              <p className="text-sm uppercase tracking-widest text-foreground/60">
                Next.js • TypeScript • Tailwind • MERN
              </p>
              <p className="mt-2 text-2xl font-semibold">Clean. Fast. Animated.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


