"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  href: string;
  image: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Clyro — task Manager",
    description:
      "A to-do application with full CRUD functionality and user authentication.",
    href: "https://clyro-task-manager-tool.vercel.app/login",
    image: "/clyro.png",
    tags: ["Next.js", 'Node.js', "MongoDB", "TailwindCSS"],
  },
  {
    title: "Chatter — Real time Chat App",
    description:
      "Real-time chat application supporting direct one-to-one conversations with authentication and persistent sessions.",
    href: "https://chatter-qg5q.onrender.com",
    image: "/chatter-dark.png",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
  },
  {
    title: "QuickCart — E-commerce Store",
    description:
      "A simple e-commerce website showcasing products with individual product detail views. Focused on clean UI and responsive design.",
    href: "https://github.com/jatin02k/Quick-Cart",
    image: "/quick-cart.png",
    tags: ["Next.js", 'Supabase', "Tailwind"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold"
        >
          Projects
        </motion.h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.a
              key={project.title}
              href={project.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/[0.03] p-4 hover:shadow-sm"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg border border-black/5 dark:border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
              <p className="mt-1 text-sm text-foreground/80">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs rounded-md border border-black/5 dark:border-white/10 px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}


