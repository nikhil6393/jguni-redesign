"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Beaker, Briefcase, Code, Palette, Scale, Stethoscope, ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const ProgramCard = ({ cat, i }: { cat: any; i: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={onMouseMove}
      className={cn(
        "group relative rounded-[2.5rem] overflow-hidden p-6 md:p-10 flex flex-col justify-between min-h-[380px] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]",
        cat.className
      )}
    >
      {/* Interactive Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.1), transparent 40%)`
          ),
        }}
      />

      <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
        <Image 
          src={cat.image} 
          alt={cat.title} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={i < 2}
          className="object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-30 transition-all" 
        />
      </div>
      
      <div className="relative z-10">
        <div className="bg-white/10 backdrop-blur-xl w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-white/20 shadow-xl group-hover:scale-110 transition-transform">
          <cat.icon className="w-7 h-7" />
        </div>
        <h3 className="text-3xl font-black font-display mb-4 tracking-tighter leading-tight group-hover:text-primary transition-colors">
          {cat.title}
        </h3>
        <p className="text-base font-medium opacity-70 leading-relaxed max-w-[240px]">
          {cat.description}
        </p>
      </div>
      
      <div className="relative z-10 flex items-center justify-between mt-8">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((j) => (
            <div key={j} className="w-8 h-8 rounded-full border-2 border-white/20 overflow-hidden bg-slate-800">
              <Image src={`https://i.pravatar.cc/100?img=${j+20+i}`} alt="student" width={32} height={32} />
            </div>
          ))}
        </div>
        <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-white/20">
          <ArrowUpRight className="w-6 h-6" />
        </button>
      </div>
    </motion.div>
  );
};

const Programs = () => {
  const categories = [
    {
      title: "School of Technology",
      description: "Leading the digital revolution with cutting-edge engineering and data science.",
      icon: Code,
      className: "md:col-span-2 md:row-span-2 bg-slate-950 text-white",
      image: "https://images.pexels.com/photos/12379595/pexels-photo-12379595.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "School of Business",
      description: "Cultivating innovative leaders and strategic entrepreneurs.",
      icon: Briefcase,
      className: "md:col-span-1 md:row-span-1 bg-primary text-white",
      image: "https://images.pexels.com/photos/7433844/pexels-photo-7433844.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "School of Law",
      description: "Advancing justice and legal expertise through academic pursuit.",
      icon: Scale,
      className: "md:col-span-1 md:row-span-1 bg-secondary text-white",
      image: "https://images.pexels.com/photos/6077091/pexels-photo-6077091.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "School of Design",
      description: "Exploring the boundaries of creativity and communication.",
      icon: Palette,
      className: "md:col-span-1 md:row-span-1 bg-slate-100 dark:bg-slate-900",
      image: "https://images.pexels.com/photos/6620994/pexels-photo-6620994.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "School of Sciences",
      description: "Pioneering research in biological and physical sciences.",
      icon: Beaker,
      className: "md:col-span-1 md:row-span-1 bg-slate-100 dark:bg-slate-900",
      image: "https://images.pexels.com/photos/8325761/pexels-photo-8325761.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section id="programs" className="section-padding bg-slate-50 dark:bg-slate-900/30 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-6">
              <Sparkles className="w-4 h-4" /> Academic Schools
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black font-display leading-[1.1] tracking-tighter">
              World-Class Excellence <br /><span className="text-gradient">Across Every Discipline.</span>
            </h2>
          </div>
          <button className="group text-primary font-black uppercase tracking-widest text-xs flex items-center gap-3 bg-white dark:bg-slate-800 px-8 py-4 rounded-full shadow-xl border border-primary/10 hover:bg-primary hover:text-white transition-all">
            Explore All Programs <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {categories.map((cat, i) => (
            <ProgramCard key={i} cat={cat} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
