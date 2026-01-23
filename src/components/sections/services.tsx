"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Rocket, Code2, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Week 1: Architecture",
    description: "Database schema, UI flows, and tech stack selection. We lay a rock-solid foundation."
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Week 2-3: Development",
    description: "High-velocity coding. Auth, payments, core features. I ship updates every 48 hours."
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Week 4: Launch",
    description: "SEO optimization, analytics setup, and production deployment. Ready for real users."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl sm:text-5xl font-bold tracking-tight mb-4"
           >
             Need an MVP? I Ship Fast.
           </motion.h2>
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-lg text-muted-foreground max-w-2xl mx-auto"
           >
             Most developers write code. I build businesses. Here is my 4-week process to get your idea to market.
           </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 px-4">
            {steps.map((step, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="relative p-6 rounded-2xl bg-muted/20 border border-border"
                >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                        {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
            ))}
        </div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-secondary/30 border border-border p-8 sm:p-12 text-center max-w-4xl mx-auto"
        >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to build?</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                My typical engagement is $4k - $8k for a complete MVP delivered in 30 days. 
                I currently have <span className="text-primary font-semibold">1 slot open</span> for February.
            </p>
            <Button size="lg" className="rounded-full text-lg px-8 h-12" asChild>
                <Link href="/#contact">
                    Book a Strategy Call
                </Link>
            </Button>
        </motion.div>
      </div>
    </section>
  );
}
