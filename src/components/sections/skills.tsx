"use client";

import { motion } from "framer-motion";

<<<<<<< HEAD
const items = [
  {
    title: "SaaS Architecture",
    description: "Building scalable, multi-tenant applications with robust authentication and authorization.",
    className: "md:col-span-2 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/20",
    tags: ["Multi-tenancy", "Auth & RBAC", "Scalability", "Subscriptions Model"]
  },
  {
    title: "Backend Logic",
    description: "Developing complex server-side logic, API routers, and edge functions.",
    className: "md:col-span-1 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20",
    tags: ["Node.js", "Edge Functions", "Webhooks"]
  },
  {
    title: "Database Design",
    description: "Designing normalized schemas and efficient queries for data-heavy applications.",
    className: "md:col-span-1 bg-gradient-to-br from-orange-500/10 to-amber-500/10 border-orange-500/20",
    tags: ["PostgreSQL", "Supabase", "MongoDB"]
  },
  {
    title: "API Integrations",
    description: "Seamlessly connecting third-party services like Razorpay, Twilio, and OpenAI.",
    className: "md:col-span-2 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20",
    tags: ["Razorpay", "RESTful APIs", "NodeMailer"]
  },
  {
    title: "Frontend Engineering",
    description: "Crafting pixel-perfect, accessible, and performant user interfaces.",
    className: "md:col-span-2 bg-muted/50 border-white/5",
    tags: ["Next.js", "React", "TailwindCSS", "Framer Motion", "TypeScript", "Zustand"]
  },
  {
    title: "Tools & Deployment",
    description: "Essential workflows for version control, design, and CD.",
    className: "md:col-span-1 bg-gradient-to-br from-amber-200/10 to-orange-200/10 border-amber-200/20",
    tags: ["Git", "Vercel", "Figma"]
  },
  {
    title: "Engineering Foundations",
    description: "Strong grasp of computer science fundamentals and modern theories.",
    className: "md:col-span-3 bg-gradient-to-br from-pink-500/10 to-rose-500/10 border-pink-500/20",
    tags: ["System Design", "DSA", "Data Analysis", "Machine Learning (Learning)"]
  }
=======
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
>>>>>>> d1a7e1d3a4798862f394c96a630c6e32b448e67a
];

export function SkillsSection() {
  return (
<<<<<<< HEAD
    <section id="skills" className="py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A deep dive into my capabilities as a full-stack product engineer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)" }}
              className={`rounded-2xl border p-8 flex flex-col justify-between transition-shadow relative overflow-hidden group ${item.className}`}
            >
              <div className="z-10 relative">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-background/50 border border-white/10 backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
=======
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
>>>>>>> d1a7e1d3a4798862f394c96a630c6e32b448e67a
      </div>
    </section>
  );
}


