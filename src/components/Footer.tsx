"use client";

import React from "react";
import Link from "next/link";
import { Share2, GraduationCap, Camera, User, Send, Mail, Phone, MapPin, Globe, MessageSquare, Code, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative pt-32 bg-slate-950 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px]" />
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 mb-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
          viewport={{ once: true }}
          className="relative rounded-[4rem] p-12 md:p-24 text-center overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5"
        >
          {/* Animated Mesh Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary/40 to-slate-950 opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs font-black uppercase tracking-[0.2em] mb-10">
              <Sparkles className="w-4 h-4" /> Admissions 2024
            </div>
            
            <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-black font-display mb-10 leading-[1] tracking-tighter">
              Begin Your Global <br /><span className="text-gradient">Legacy Today.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/70 mb-14 max-w-3xl mx-auto font-medium leading-relaxed">
              Join a legacy of excellence and shape your future with JG University. 
              Applications are now open for the upcoming academic session.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="#apply" className="group bg-white text-slate-950 px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all shadow-2xl hover:-translate-y-1 flex items-center gap-3">
                Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#visit" className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/20 transition-all">
                Visit Campus
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-24 relative z-10">
        <div className="space-y-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-white p-2.5 rounded-2xl shadow-xl">
              <GraduationCap className="text-primary w-7 h-7" />
            </div>
            <span className="text-2xl font-black font-display tracking-tighter text-white uppercase">
              JG UNIVERSITY
            </span>
          </Link>
          <p className="text-slate-400 font-medium leading-relaxed">
            Empowering students through academic excellence and 
            innovative research for over 25 years. Leading the way in 
            modern institutional education.
          </p>
          <div className="flex gap-5">
            {[TwitterIcon, LinkedinIcon, InstagramIcon, YoutubeIcon].map((Icon, i) => (
              <Link key={i} href="#" className="w-12 h-12 bg-white/5 backdrop-blur-xl flex items-center justify-center rounded-2xl hover:bg-primary transition-all border border-white/5 hover:scale-110 hover:shadow-2xl group">
                <Icon className="w-5 h-5 group-hover:text-white transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-black font-display uppercase tracking-widest mb-10 text-white/50">Academics</h4>
          <ul className="space-y-5 text-slate-400 font-medium">
            <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Undergraduate Programs</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Postgraduate Studies</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Doctoral Research</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Online Education</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Executive Learning</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-black font-display uppercase tracking-widest mb-10 text-white/50">University</h4>
          <ul className="space-y-5 text-slate-400 font-medium">
            <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" /> About JG University</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Campus Life</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Faculty & Staff</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Alumni Network</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Career Services</Link></li>
          </ul>
        </div>

        <div className="glass-card p-10 rounded-[2.5rem] bg-white/5 border-white/5">
          <h4 className="text-lg font-black font-display uppercase tracking-widest mb-10 text-white/50">Contact Us</h4>
          <ul className="space-y-6 text-slate-300 font-medium">
            <li className="flex gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-sm">Main Campus, University Road, JG City, IN 380001</span>
            </li>
            <li className="flex gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-sm font-black">+91 (0) 123 456 7890</span>
            </li>
            <li className="flex gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-sm font-black break-all">admissions@jguniversity.edu</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-10 bg-black/40 relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-xs font-black uppercase tracking-widest">
          <p>© 2024 JG University. Designed for Excellence.</p>
          <div className="flex gap-10">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
