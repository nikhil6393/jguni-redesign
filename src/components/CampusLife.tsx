"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, MapPin, Users, Music, Coffee, Trophy, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CampusLife = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
      alt: "Campus Architecture",
      title: "Iconic Landmarks",
      span: "md:col-span-2 md:row-span-2",
      icon: MapPin,
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
      alt: "Student Collaboration",
      title: "Vibrant Hubs",
      span: "md:col-span-1 md:row-span-1",
      icon: Users,
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
      alt: "Campus Cafe",
      title: "Social Spaces",
      span: "md:col-span-1 md:row-span-1",
      icon: Coffee,
    },
    {
      src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
      alt: "Cultural Events",
      title: "Cultural Life",
      span: "md:col-span-1 md:row-span-1",
      icon: Music,
    },
    {
      src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800",
      alt: "Sports",
      title: "Athletics",
      span: "md:col-span-1 md:row-span-1",
      icon: Trophy,
    },
  ];

  return (
    <section id="campus" className="py-32 relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-6">
              <Camera className="w-4 h-4" /> Campus Experience
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black font-display leading-[1.1] tracking-tighter">
              A Living Campus For <br /><span className="text-gradient">Inspiring Minds.</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md font-medium leading-relaxed">
            Experience a world-class environment designed for growth, creativity, 
            and community. Our campus is more than just buildings; it&apos;s where 
            future leaders are forged.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 lg:gap-8 h-auto md:h-[800px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group relative rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl",
                i === 0 ? "h-[380px] md:h-auto" : "h-[260px] md:h-auto",
                img.span
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white">
                    <img.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-black font-display text-white tracking-tight">
                    {img.title}
                  </h4>
                </div>
                <p className="text-white/60 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Discover the heart of JG University&apos;s campus life and student experiences.
                </p>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-950 shadow-2xl">
                  <ArrowRight className="w-6 h-6 -rotate-45" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Highlight Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass p-8 md:p-12 rounded-[3rem] border-white/40 flex flex-wrap items-center justify-between gap-10"
        >
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-[2rem] bg-primary/10 flex items-center justify-center text-primary shadow-inner">
              <Sparkles className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-black font-display tracking-tight">Digital First Campus</h3>
              <p className="text-muted-foreground font-medium">Smart infrastructure powered by high-speed fiber connectivity.</p>
            </div>
          </div>
          
          <div className="flex gap-12">
            <div>
              <div className="text-3xl font-black font-display text-primary">100%</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Smart Classrooms</div>
            </div>
            <div className="w-px h-12 bg-slate-200 dark:bg-slate-800 hidden md:block" />
            <div>
              <div className="text-3xl font-black font-display text-amber-600">500+</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Campus Events</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CampusLife;
