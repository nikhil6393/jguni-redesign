"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play, Users, Award, BookOpen, Globe } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const STAGGER_WORDS = ["Shaping", "the", "Future", "of"];

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const yVisual = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityVisual = useTransform(scrollY, [0, 400], [1, 0]);

  // Animated gradient mesh background with "Light Beams"
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      t += 0.002;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Crimson Orb
      const grd1 = ctx.createRadialGradient(
        canvas.width * (0.8 + 0.1 * Math.sin(t)),
        canvas.height * (0.3 + 0.1 * Math.cos(t * 0.5)),
        0,
        canvas.width * (0.8 + 0.1 * Math.sin(t)),
        canvas.height * (0.3 + 0.1 * Math.cos(t * 0.5)),
        canvas.width * 0.5
      );
      grd1.addColorStop(0, "rgba(153, 27, 27, 0.12)");
      grd1.addColorStop(1, "rgba(153, 27, 27, 0)");
      ctx.fillStyle = grd1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Amber Orb
      const grd2 = ctx.createRadialGradient(
        canvas.width * (0.2 + 0.1 * Math.cos(t * 0.7)),
        canvas.height * (0.7 + 0.1 * Math.sin(t * 0.4)),
        0,
        canvas.width * (0.2 + 0.1 * Math.cos(t * 0.7)),
        canvas.height * (0.7 + 0.1 * Math.sin(t * 0.4)),
        canvas.width * 0.45
      );
      grd2.addColorStop(0, "rgba(217, 119, 6, 0.08)");
      grd2.addColorStop(1, "rgba(217, 119, 6, 0)");
      ctx.fillStyle = grd2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -90 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", stiffness: 70, damping: 15 } as any,
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section ref={containerRef} className="relative min-h-[110vh] flex items-center pt-20 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 -z-20 w-full h-full pointer-events-none" />
      
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Floating Grain Texture */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      <div className="container mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-center">
        {/* Left Content */}
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="text-center lg:text-left z-10">
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
            <div className="glass px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-primary flex items-center gap-2 mb-10 border-white/40 shadow-xl">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              Empowering Minds Since 1999
            </div>
          </motion.div>

          <div className="mb-8" style={{ perspective: "1200px" }}>
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[1] font-display tracking-tighter">
              {STAGGER_WORDS.map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block">
                  {word}
                </motion.span>
              ))}
            </div>
            <motion.div variants={wordVariants} className="text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[1] font-display tracking-tighter">
              <span className="text-gradient">Higher Learning.</span>
            </motion.div>
          </div>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
            JG University stands at the intersection of tradition and innovation, 
            cultivating a community of visionary thinkers and global leaders. 
            Discover your path in our world-class ecosystem.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center lg:justify-start gap-6 items-center">
            <MagneticButton className="bg-primary text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-3 shadow-2xl shadow-primary/30 group transition-all">
              Start Your Journey <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <button className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl border-white/40">
                <Play className="w-5 h-5 text-primary fill-primary ml-1" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-foreground/80 group-hover:text-primary transition-colors">
                Experience Campus
              </span>
            </button>
          </motion.div>
          
          <motion.div variants={fadeUp} className="mt-20 pt-10 border-t border-border/50 flex flex-wrap justify-center lg:justify-start gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
            {["UGC Approved", "NAAC A++", "QS Ranked", "ISO 9001"].map((tag) => (
              <span key={tag} className="text-[10px] font-black uppercase tracking-[0.3em] font-display">{tag}</span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Visuals */}
        <div className="relative">
          <motion.div 
            style={{ y: yVisual, opacity: opacityVisual }}
            className="relative z-10 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border-[12px] border-white dark:border-slate-800"
          >
            <Image
              src="/university_hero_collage_1778945378775.png"
              alt="JG University Campus Life"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover scale-110 hover:scale-100 transition-transform duration-1000"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-10 left-10 right-10">
              <div className="flex items-center gap-4 text-white">
                <div className="h-1 w-12 bg-primary rounded-full" />
                <span className="text-xs font-black uppercase tracking-widest">Innovation Hub</span>
              </div>
              <h3 className="text-3xl font-black text-white mt-2 font-display">A New Era of Academic Brilliance</h3>
            </div>
          </motion.div>

          {/* Floating Stat Cards */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute -right-8 top-20 z-20 glass-card p-6 rounded-2xl flex items-center gap-5 border-white/50 backdrop-blur-2xl"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl font-black text-foreground">15K+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Global Students</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
            className="absolute -left-12 bottom-20 z-20 glass-card p-6 rounded-2xl flex items-center gap-5 border-white/50 backdrop-blur-2xl"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl font-black text-foreground">#1</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Regional Ranking</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, type: "spring" }}
            className="absolute left-1/2 -translate-x-1/2 -bottom-10 z-20 glass-card px-8 py-5 rounded-2xl flex items-center gap-8 border-white/50 backdrop-blur-2xl"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200 relative">
                  <Image 
                    src={`https://i.pravatar.cc/100?img=${i+10}`} 
                    alt="alumni" 
                    fill 
                    sizes="40px"
                    className="object-cover" 
                  />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] font-bold text-white relative z-10">
                +4k
              </div>
            </div>
            <div>
              <div className="text-sm font-black text-foreground">Placement Record</div>
              <div className="text-[10px] font-bold text-green-600 uppercase tracking-widest">98% Success Rate</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
