"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-4 text-foreground/80 max-w-3xl"
        >
          I build robust, accessible applications with a focus on DX and performance.
          My stack centers around React, Next.js, and TypeScript, paired with Node.js APIs
          and Postgres. I design smooth UI motion to guide attention and improve clarity.
        </motion.p>
      </div>
    </section>
  );
}


