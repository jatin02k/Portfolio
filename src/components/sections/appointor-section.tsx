"use client";

import { motion } from "framer-motion";
import { Calendar, CreditCard, LayoutTemplate, ArrowRight, ShieldCheck, UserCog, Store, TrendingUp, Clock, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <LayoutTemplate className="w-5 h-5" />,
    title: "Multi-Tenant Architecture",
    description: "Each business gets a branded portal and separated database."
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: "Razorpay Payments",
    description: "Integrated payment gateway for advance bookings and automatic order tracking."
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Smart Scheduling",
    description: "Conflict-free slots with timezone support for multiple staff members."
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Secure Authentication",
    description: "JWT-based auth with Supabase RLS policies for complete data isolation."
  },
  {
    icon: <UserCog className="w-5 h-5" />,
    title: "Admin Dashboard",
    description: "Manage bookings, services, staff availability, and client insights."
  },
  {
    icon: <Store className="w-5 h-5" />,
    title: "Custom Branding",
    description: "Fully customizable booking pages that match your clients' brand identity."
  }
];

const benefits = [
  {
    icon: <Clock className="w-8 h-8 text-blue-500" />,
    title: "Save 15+ Hours/Week",
    description: "Eliminate the back-and-forth updates on WhatsApp and Email. Let the system handle scheduling 24/7."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-green-500" />,
    title: "Increase Revenue",
    description: "Reduce no-shows with advance payments and automated reminders. Fill your calendar effortlessly."
  },
  {
    icon: <Zap className="w-8 h-8 text-purple-500" />,
    title: "Professional Image",
    description: "Give your clients a seamless, branded booking experience that builds trust and authority."
  }
];

export function AppointorSection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium"
           >
             Flagship Project
           </motion.div>
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-3xl sm:text-5xl font-bold tracking-tight mb-6"
           >
             Appointor: Full-Stack Booking Platform
           </motion.h2>
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
           >
             A comprehensive SaaS solving appointment chaos for coaches and consultants.
           </motion.p>
        </div>

        {/* Split Layout: Mockup (Left) | Features (Right) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            
            {/* Left: Mockup + Tech Stack */}
            <div className="order-2 lg:order-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-xl bg-background border border-border/50 shadow-2xl overflow-hidden group"
              >
                  <Image 
                    src="/appointor.png" 
                    alt="Appointor Admin Dashboard" 
                    fill
                    className="object-cover"
                  />
                  {/* Subtle gradient overlay to blend with dark mode if needed */}
                  <div className="absolute inset-0 bg-black/10" />
              </motion.div>

              {/* Tech Stack */}
              <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="flex flex-wrap justify-center sm:justify-start gap-3"
              >
                  {[
                    "Next.js 15",
                    "Supabase Auth & DB",
                    "Tailwind v4",
                    "Razorpay",
                    "Middleware"
                  ].map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tech}
                    </span>
                  ))}
              </motion.div>
            </div>

            {/* Right: 6 Features */}
            <div className="grid sm:grid-cols-2 gap-6 order-1 lg:order-2">
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                        className="p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                            {feature.icon}
                        </div>
                        <h3 className="font-semibold mb-1 text-sm">{feature.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Why Use It Section */}
        <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-8">Why Businesses Choose Appointor</h3>
            <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (idx * 0.1) }}
                        className="p-6 rounded-2xl bg-background/50 border border-border/50"
                    >
                        <div className="mb-4 flex justify-center">{benefit.icon}</div>
                        <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                        <p className="text-muted-foreground">{benefit.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* CTAs */}
        <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center"
        >
             <div className="flex flex-wrap justify-center gap-4 mb-4">
                 <Button asChild size="lg" className="rounded-full">
                   <Link href="https://appointor.vercel.app" target="_blank">
                     View Live Production <ArrowRight className="ml-2 w-4 h-4" />
                   </Link>
                 </Button>
                 <Button asChild variant="outline" size="lg" className="rounded-full">
                   <Link href="https://github.com/jatin02k/appointor" target="_blank">
                     View Source Code
                   </Link>
                 </Button>
             </div>
             <p className="text-xs text-muted-foreground">
               Live Demo Credentials: admin@demo.com / password123
             </p>
        </motion.div>

      </div>
    </section>
  );
}
