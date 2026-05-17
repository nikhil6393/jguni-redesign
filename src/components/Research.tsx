"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Beaker, BookOpen, Cpu, Globe, Lightbulb, Microscope, Sparkles, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Research = () => {
  const initiatives = [
    {
      title: "AI & Future Tech",
      area: "Innovation Lab 01",
      desc: "Pioneering research in neural networks and ethical AI frameworks.",
      icon: Cpu,
      color: "from-blue-600/20 to-indigo-600/20",
    },
    {
      title: "Sustainable Energy",
      area: "Green Hub",
      desc: "Developing the next generation of solar and fusion energy solutions.",
      icon: Lightbulb,
      color: "from-emerald-600/20 to-teal-600/20",
    },
    {
      title: "Quantum Biology",
      area: "Bio-Sciences",
      desc: "Exploring the intersection of quantum mechanics and biological systems.",
      icon: Microscope,
      color: "from-purple-600/20 to-pink-600/20",
    },
  ];

  return (
    <section id="research" className="py-32 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-6">
            <Beaker className="w-4 h-4" /> Research & Innovation
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black font-display leading-[1.1] tracking-tighter mb-8">
            Solving Global Challenges <br /><span className="text-gradient">Through Radical Inquiry.</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed">
            Our researchers are pushing the boundaries of human knowledge. 
            From deep-sea exploration to deep-space computing, JG University 
            is at the forefront of the world&apos;s most critical scientific breakthroughs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {initiatives.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative glass p-10 rounded-[2.5rem] border-white/40 overflow-hidden"
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10", item.color)} />
              
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-10">
                <item.icon className="w-8 h-8" />
              </div>
              
              <div className="text-xs font-black uppercase tracking-widest text-primary mb-4 opacity-70">
                {item.area}
              </div>
              
              <h3 className="text-2xl font-black font-display mb-6 tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground font-medium leading-relaxed mb-10 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {item.desc}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <button className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-primary group-hover:text-slate-950 dark:group-hover:text-white transition-all">
                  View Projects <MoveRight className="w-4 h-4" />
                </button>
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Impact Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-[2rem] border-white/40">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <Globe className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black font-display tracking-tight">Global Collaboration</h4>
              </div>
              <p className="text-muted-foreground font-medium mb-6">
                Working with researchers across 6 continents to tackle climate change, 
                healthcare access, and digital equity.
              </p>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((j) => (
                  <div key={j} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-lg relative">
                    <Image 
                      src={`https://i.pravatar.cc/100?img=${j+30}`} 
                      alt="Researcher" 
                      fill
                      sizes="40px"
                      className="object-cover" 
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-lg relative z-10">
                  +500
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="https://images.pexels.com/photos/3735715/pexels-photo-3735715.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Research Lab" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest mb-4">
                  <Sparkles className="w-3 h-3" /> Live Feed
                </div>
                <h4 className="text-2xl font-black font-display text-white tracking-tight">Main Innovation Hall</h4>
                <p className="text-white/70 text-sm font-medium">Currently hosting the 2024 Quantum computing Symposium.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Research;
