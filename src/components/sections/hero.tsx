"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
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
    </section>
  );
}


