"use client";

import { motion } from "framer-motion";
<<<<<<< HEAD
import { Github, ExternalLink, ArrowRight, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Cofounder",
    description: "A SaaS platform designed to help solo developers validate ideas, manage distribution, and handle marketing automation. Currently in development.",
    tags: ["Future Project", "SaaS", "Marketing"],
    links: { demo: "#", github: "#" },
    isFuture: true,
    metric: "Coming Soon",
    image: "/cofounder.png"
  },
  {
    title: "Complaint Management System",
    description: "Full-stack application for raising and managing complaints. Features dual-role (User/Admin) interfaces, email notifications (Nodemailer), and filtered CRUD operations.",
    tags: ["Next.js", "MongoDB", "TypeScript", "Tailwind"],
    links: { 
      demo: "https://complaint-management-mu.vercel.app/", 
      github: "https://github.com/jatin02k/complaint-management" 
    },
    isFuture: false,
    metric: "Full CRUD & Auth",
    image: "/cms.png"
  },
  {
    title: "Quick-Cart",
    description: "E-commerce inventory management system built for speed and scalability. Manages product states and inventory levels efficiently.",
    tags: ["Next.js", "Supabase", "PostgreSQL"],
    links: { 
      demo: "https://github.com/jatin02k/Quick-Cart", 
      github: "https://github.com/jatin02k/Quick-Cart" 
    },
    isFuture: false,
    metric: "Supabase Backend",
    image: "/quickCart.png"
  }
=======
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
>>>>>>> d1a7e1d3a4798862f394c96a630c6e32b448e67a
];

export function ProjectsSection() {
  return (
<<<<<<< HEAD
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">Selected Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
             From future visions to shipped software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[400px] flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                 <Image 
                   src={project.image} 
                   alt={project.title}
                   fill
                   className="object-cover transition-transform duration-500 group-hover:scale-105"
                 />
                 {/* Dark Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent" />
              </div>

              {/* Clickable Area for non-future projects */}
              {!project.isFuture && (
                <Link href={project.links.demo} target="_blank" className="absolute inset-0 z-20" aria-label={`View ${project.title}`} />
              )}

              {/* Content Overlay */}
              <div className="relative z-10 flex flex-col h-full p-6 text-white justify-end">
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                     <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
                     {project.isFuture && <Lock className="w-4 h-4 text-white/70" />}
                  </div>
                  <p className="text-white/80 text-sm line-clamp-3 mb-4 leading-relaxed font-light">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/10 text-white/90 backdrop-blur-sm border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                   <div className="text-xs font-mono text-primary-foreground/80 bg-primary/20 px-2 py-1 rounded">
                      {project.metric}
                   </div>
                   
                   {!project.isFuture && (
                      <div className="relative z-30"> {/* z-30 to be clickable above the card link */}
                         <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20 rounded-full" asChild>
                            <Link href={project.links.github} target="_blank">
                                 <Github className="w-5 h-5" />
                            </Link>
                         </Button>
                      </div>
                   )}
                   {project.isFuture && (
                      <span className="text-xs text-white/50 italic">In Development</span>
                   )}
                </div>
              </div>
            </motion.div>
=======
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
>>>>>>> d1a7e1d3a4798862f394c96a630c6e32b448e67a
          ))}
        </div>
      </div>
    </section>
  );
}
<<<<<<< HEAD
=======


>>>>>>> d1a7e1d3a4798862f394c96a630c6e32b448e67a
