"use client";

import React from "react";
import { Award, BookOpen, Globe, Lightbulb, ShieldCheck, Zap, Sparkles, MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      title: "UGC Recognized",
      description: "Highest academic standards recognized by the University Grants Commission.",
      icon: Award,
      color: "text-red-600",
      bg: "bg-red-500/10",
    },
    {
      title: "Global Exposure",
      description: "Partnerships with premier international universities for global learning.",
      icon: Globe,
      color: "text-blue-600",
      bg: "bg-blue-500/10",
    },
    {
      title: "Placement Support",
      description: "Dedicated cell with a consistent 98% placement track record.",
      icon: Zap,
      color: "text-amber-600",
      bg: "bg-amber-500/10",
    },
    {
      title: "Research Focus",
      description: "State-of-the-art research laboratories fostering a culture of inquiry.",
      icon: BookOpen,
      color: "text-emerald-600",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Innovation Hub",
      description: "Dedicated ecosystem for startups and entrepreneurial ventures.",
      icon: Lightbulb,
      color: "text-indigo-600",
      bg: "bg-indigo-500/10",
    },
    {
      title: "Scholarships",
      description: "Merit-based programs ensuring talent always finds its way.",
      icon: ShieldCheck,
      color: "text-green-600",
      bg: "bg-green-500/10",
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.07]" 
          style={{ 
            backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)", 
            backgroundSize: "48px 48px" 
          }} 
        />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-amber-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10 px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-6">
            <Sparkles className="w-4 h-4" /> Why JG University
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black font-display leading-[1.1] tracking-tighter mb-8">
            Empowering Future <br /><span className="text-gradient">Global Leaders.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
            We provide a holistic educational ecosystem that nurtures talent, 
            encourages innovation, and prepares students for global success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-2 overflow-hidden"
            >
              {/* Card Hover Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-[3] transition-transform duration-700 -z-10" />
              
              <div className={`${feature.bg} ${feature.color} w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-8 border border-white/50 dark:border-slate-700 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <feature.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-black font-display mb-4 tracking-tight group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground font-medium leading-relaxed mb-8">
                {feature.description}
              </p>
              
              <button className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
                Learn More <MoveRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
