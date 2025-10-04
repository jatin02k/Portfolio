"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js",
  "React",
  "Zustand",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Tailwind CSS",
  "Daisy UI",
  "Framer Motion",
  "Version Control",
  "Vite",
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold"
        >
          Skills
        </motion.h2>
        <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skills.map((skill, idx) => (
            <motion.li
              key={skill}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              className="rounded-md border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/[0.03] px-3 py-2 text-sm"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}


