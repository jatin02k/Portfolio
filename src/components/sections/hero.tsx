"use client";

import { motion } from "framer-motion";
<<<<<<< HEAD
import Link from "next/link";
=======
import { ArrowRight } from "lucide-react";
>>>>>>> d1a7e1d3a4798862f394c96a630c6e32b448e67a
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
<<<<<<< HEAD
    <section className="relative min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl text-center z-10">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-foreground leading-[1.1] mb-6">
            I build <span className="text-primary">SaaS products</span>. <br />
            You can hire me to build yours.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto font-light mb-10"
        >
          I turn startup ideas into production-ready MVPs in 4 weeks. <br className="hidden sm:block" />
          Currently building <span className="text-foreground font-medium">Appointor</span> in public.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
           <Button size="lg" className="rounded-full text-lg px-8 h-12" asChild>
             <Link href="#services">
               Start Your MVP
             </Link>
           </Button>
           <Button variant="outline" size="lg" className="rounded-full text-lg px-8 h-12" asChild>
             <Link href="https://appointor.vercel.app" target="_blank">
               Try Appointor
             </Link>
           </Button>
        </motion.div>

        <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1 }}
           className="mt-8 text-sm text-muted-foreground/60"
        >
        </motion.p>
      </div>

       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <span className="text-sm text-muted-foreground tracking-widest uppercase">Scroll</span>
      </motion.div>
=======
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
>>>>>>> d1a7e1d3a4798862f394c96a630c6e32b448e67a
    </section>
  );
}


