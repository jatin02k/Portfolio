"use client";

import { motion } from "framer-motion";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

const experience: ExperienceItem[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Acme Corp",
    period: "2023 — Present",
    bullets: [
      "Led migration to Next.js App Router and RSC, improving TTFB by 38%",
      "Built motion-rich UI patterns with Framer Motion and accessible components",
    ],
  },
  {
    role: "Full‑stack Developer",
    company: "StartUp Labs",
    period: "2021 — 2023",
    bullets: [
      "Shipped multi-tenant SaaS with billing, RBAC, and analytics",
      "Implemented CI/CD and testing (Playwright, Vitest), cutting regressions by 60%",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold"
        >
          Experience
        </motion.h2>
        <div className="mt-6 space-y-6">
          {experience.map((item, idx) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/[0.03] p-4"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold">
                  {item.role} · <span className="text-foreground/80">{item.company}</span>
                </h3>
                <span className="text-sm text-foreground/70">{item.period}</span>
              </div>
              <ul className="mt-3 list-disc pl-5 text-foreground/80 text-sm">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


