"use client";

import React from "react";
import { Quote, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "B.Tech Graduate, Class of 2023",
      content: "JG University provided me with the perfect blend of theoretical knowledge and practical exposure. The industry partnerships helped me land a job at a Fortune 500 company before graduation.",
      avatar: "https://i.pravatar.cc/150?u=rahul",
    },
    {
      name: "Priya Patel",
      role: "MBA Student",
      content: "The faculty at the School of Business are truly world-class. The mentorship program and real-world case studies have been instrumental in shaping my leadership skills and strategic mindset.",
      avatar: "https://i.pravatar.cc/150?u=priya",
    },
    {
      name: "Arjun Reddy",
      role: "Law Alumnus",
      content: "The moot court sessions and internship opportunities at JG University's School of Law were invaluable. I felt completely prepared for the legal profession from day one of my career.",
      avatar: "https://i.pravatar.cc/150?u=arjun",
    },
  ];

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-slate-50 dark:bg-slate-900/20">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-6">
            <Sparkles className="w-4 h-4" /> Student Voices
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black font-display leading-[1.1] tracking-tighter mb-8">
            Stories of <span className="text-gradient">Transformation.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
            Hear from our students and alumni about their journey at JG University 
            and how it shaped their professional careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 md:p-10 rounded-[2.5rem] relative flex flex-col justify-between border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-500 group"
            >
              <div className="absolute top-10 right-10 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote className="w-20 h-20" />
              </div>
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-xl text-foreground/90 font-medium leading-relaxed mb-12 italic">
                  "{testi.content}"
                </p>
              </div>

              <div className="flex items-center gap-5 pt-8 border-t border-slate-100 dark:border-slate-800">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-white dark:border-slate-800">
                  <Image 
                    src={testi.avatar} 
                    alt={testi.name} 
                    fill 
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-black font-display tracking-tight text-foreground">{testi.name}</h4>
                  <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Bar / Alumni Placements */}
        <div className="mt-32 border-t border-slate-200 dark:border-slate-800 pt-20">
          <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-muted-foreground mb-12">
            Our Alumni Lead Innovation At
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
          >
            {['Google', 'Microsoft', 'Amazon', 'Meta', 'Deloitte', 'Apple'].map((brand) => (
              <span key={brand} className="text-2xl md:text-3xl font-black font-display tracking-tighter hover:text-primary transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
