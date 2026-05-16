"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Users, Target, BookOpen, Sparkles, Award, Globe } from "lucide-react";
import { CountUp } from "./CountUp";
import { cn } from "@/lib/utils";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const stats = [
    { label: "Students", value: 15000, suffix: "+", icon: Users, color: "text-blue-600" },
    { label: "Placement", value: 98, suffix: "%", icon: Target, color: "text-primary" },
    { label: "Programs", value: 50, suffix: "+", icon: BookOpen, color: "text-amber-600" },
  ];

  return (
    <section id="about" ref={containerRef} className="section-padding relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-amber-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Image Grid with Parallax */}
          <div className="relative order-2 lg:order-1 px-4 lg:px-0">
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              <motion.div style={{ y: y1 }} className="space-y-6 lg:space-y-8 mt-12">
                <div className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                  <Image 
                    src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800" 
                    alt="Campus Building" 
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                  <Image 
                    src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&q=80&w=600" 
                    alt="Library" 
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </motion.div>
              
              <motion.div style={{ y: y2 }} className="space-y-6 lg:space-y-8">
                <div className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                  <Image 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600" 
                    alt="Graduation" 
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                  <Image 
                    src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=600" 
                    alt="Classroom" 
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 glass px-8 py-8 rounded-full shadow-2xl border-white/50 text-center"
            >
              <div className="text-4xl font-black text-primary font-display">25+</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mt-1">Years of Legacy</div>
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-8">
              <Sparkles className="w-4 h-4" /> Discover JG University
            </div>
            
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black font-display mb-8 leading-[1.1] tracking-tighter">
              Inspiring Innovation, <span className="text-gradient">Achieving Excellence.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed font-medium">
              Since 1999, JG University has been a pioneer in transforming students 
              into world-class professionals. We blend rigorous academics with 
              real-world industry exposure, creating a unique ecosystem for holistic 
              development and groundbreaking research.
            </p>

            <div className="grid gap-6 mb-16">
              {[
                { title: "UGC Recognized", desc: "Internationally accredited degree programs.", icon: Award },
                { title: "Global Network", desc: "Partnerships with 100+ institutions worldwide.", icon: Globe },
                { title: "Research First", desc: "State-of-the-art labs and innovation hubs.", icon: Sparkles },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-5 group p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black font-display tracking-tight group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-muted-foreground font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 p-10 rounded-[2.5rem] glass-card border-white/40">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className={cn("text-3xl md:text-4xl font-black font-display mb-1", stat.color)}>
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
