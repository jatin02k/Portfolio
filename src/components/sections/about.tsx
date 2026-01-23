"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2

          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold mb-8 text-center"
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-background shadow-xl">
              <Image 
                src="/jatin.png" 
                alt="Profile" 
                fill 
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg text-foreground/80 leading-relaxed text-center md:text-left space-y-6"
          >
            <p>
              Hey, I'm Jatin Kumar.
            </p>
            <p>
              I'm a full-stack developer who builds web applications. I work with React, Node.js, and PostgreSQL.
            </p>
            <p>
              Right now I'm building <span className="text-foreground font-medium">Appointor</span> - a booking system for freelancers and indie hackers. 
              I'm also available for freelance work helping startups build their MVPs.
            </p>
            <p className="font-medium text-foreground">
              If you need an MVP built or want to try Appointor, reach out.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


