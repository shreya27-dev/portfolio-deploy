"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Globe, Cpu, MessageSquare, 
  Activity, Zap, Shield, Layout, 
  Layers, ExternalLink, MousePointer2, Sparkles
} from "lucide-react";

export default function WebsiteRedesign() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900 pt-10 pb-20 font-sans selection:bg-orange-500 selection:text-white md:mt-55 mt-20">
      
      {/* STRATEGIC NAV */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <Link href="/" className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 hover:text-black transition-all">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Case Study 02 / Strategic Pivot
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* HERO: THE PIVOT NARRATIVE */}
        <header className="mb-40 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-7xl md:text-[120px] font-black tracking-[-0.05em] leading-[0.85] mb-10"
            >
              FROM SERVICE <br />
              <span className="text-orange-500 italic text-6xl md:text-[100px]">TO SOFTWARE.</span>
            </motion.h1>
            <p className="text-2xl md:text-3xl text-zinc-500 font-medium max-w-2xl leading-tight">
              Revamping a consulting identity into <span className="text-black">Mahity</span>: A centralized hub for specialized engineering and communication tools.
            </p>
          </div>
          <div className="lg:col-span-4 border-l border-zinc-200 pl-8 pb-4">
            <div className="space-y-6">
              <Stat label="Products Launched" val="03" />
              <Stat label="Identity Shift" val="100%" />
              <Stat label="Core Tech" val="AI / SaaS" />
            </div>
          </div>
        </header>

        {/* SECTION 01: THE ECOSYSTEM GRID */}
        <section className="mb-60">
          <div className="flex items-center gap-4 mb-12">
             <h2 className="text-xs font-black uppercase tracking-[0.5em] text-zinc-400">The Product Trinity</h2>
             <div className="h-px flex-1 bg-zinc-100" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* KAVI */}
            <ProductCard 
              name="KAVI" 
              tagline="Engineering Intelligence" 
              desc="Built on Apache DevLake. Deep knowledge of development workflows and DORA metrics."
              color="bg-blue-600"
              icon={<Cpu size={24} />}
            />
            {/* SKIFF */}
            <ProductCard 
              name="SKIFF" 
              tagline="Monitoring & Hosting" 
              desc="Ensuring reliability and resilience through real-time uptime monitoring and error logs."
              color="bg-emerald-500"
              icon={<Activity size={24} />}
            />
            {/* VAANI */}
            <ProductCard 
              name="VAANI" 
              tagline="Intelligent Voice" 
              desc="The bridge for business communication. AI-powered messaging and CRM integration."
              color="bg-orange-500"
              icon={<MessageSquare size={24} />}
            />
          </div>
        </section>

        {/* SECTION 02: THE BENTO SHOWCASE (DESIGNS) */}
        <section className="mb-60">
          <div className="mb-20 text-center">
             <h3 className="text-4xl font-black tracking-tighter mb-4">Visual Architecture.</h3>
             <p className="text-zinc-500">How we translated "Services" into tangible "Features."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[800px]">
            {/* LARGE PREVIEW */}
            <div className="md:col-span-2 md:row-span-2 bg-zinc-100 rounded-[40px] overflow-hidden border border-zinc-200 group relative">
                <div className="absolute top-8 left-8 z-10 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    Landing Page Concept
                </div>
                <img src="/images/Mahity.svg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Main Hub" />
            </div>
            {/* FEATURE PREVIEWS */}
            <div className="md:col-span-2 bg-zinc-900 rounded-[40px] p-10 text-white flex flex-col justify-between">
                <Sparkles className="text-orange-500" size={32} />
                <div>
                    <h4 className="text-2xl font-bold mb-2 uppercase">The Information Philosophy</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Mahity means "Information." We designed the UI to be a mirror of this—uncluttered, data-driven, and actionable.
                    </p>
                </div>
            </div>
            <div className="bg-zinc-50 rounded-[40px] border border-zinc-200 overflow-hidden group">
                <img src="/images/Kavi.svg" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" alt="Kavi Interface" />
            </div>
            <div className="bg-zinc-50 rounded-[40px] border border-zinc-200 overflow-hidden group">
                <img src="/images/Skiff.svg" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" alt="Skiff Interface" />
            </div>
          </div>
        </section>

        {/* SECTION 03: STRATEGY SPLIT */}
        <section className="mb-60 grid md:grid-cols-2 gap-32 items-center">
            <motion.div {...fadeIn}>
                <h2 className="text-5xl font-black tracking-tighter mb-8 italic text-zinc-300">Strategy_01</h2>
                <h3 className="text-3xl font-bold mb-6">Unified Navigation, Unique Identities.</h3>
                <p className="text-zinc-500 leading-relaxed mb-8">
                    The biggest challenge was maintaining a "Family Look" while allowing Kavi, Skiff, and Vaani to have their own brand personality. We achieved this through a **Shared Design System**—using the same typography and spacing, but distinct accent colors.
                </p>
                <div className="space-y-4">
                    <FeatureItem title="Modular Grids" desc="Flexible components that work across engineering and marketing flows." />
                    <FeatureItem title="Integrated CTAs" desc="Moving from 'Contact Us' to 'Get Started' for direct software access." />
                </div>
            </motion.div>
            <div className="relative">
                <div className="aspect-square bg-zinc-100 rounded-full border-[20px] border-white shadow-2xl overflow-hidden">
                    <img src="/images/design-system.svg" className="w-full h-full object-cover grayscale brightness-110" alt="Vaani Branding" />
                </div>
                {/* FLOATING TAGS */}
                <div className="absolute top-0 right-0 bg-orange-500 text-white p-6 rounded-3xl shadow-xl -rotate-12 translate-x-10">
                    <MousePointer2 size={24} />
                </div>
            </div>
        </section>


        {/* SECTION 02: THE BENTO SHOWCASE (THE GRAND REVEAL) */}
<section className="mb-60">
  <div className="mb-20">
    <h2 className="text-xs font-black uppercase tracking-[0.5em] text-orange-500 mb-4">Interface Gallery</h2>
    <h3 className="text-5xl font-black tracking-tighter">The Final Manifestation.</h3>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[300px]">
    
    {/* 01. MAIN HUB - Large Featured Slot */}
    <div className="md:col-span-4 md:row-span-2 bg-zinc-100 rounded-[40px] overflow-hidden border border-zinc-200 group relative">
      <div className="absolute top-6 left-6 z-10 bg-black text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
        Mahity Hub
      </div>
      <img 
        src="/images/About Us.svg" 
        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000" 
        alt="Mahity Desktop View" 
      />
    </div>

    {/* 02. VAANI - Vertical Spotlight */}
    <div className="md:col-span-2 md:row-span-3 bg-[#FFF5F0] rounded-[40px] overflow-hidden border border-orange-100 group relative">
       <div className="absolute top-6 left-6 z-10 bg-orange-500 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
        Vaani CRM
      </div>
      <img 
        src="/images/Vaani - Customers Sales.svg" 
        className="w-full h-full object-cover group-hover:rotate-2 transition-transform duration-500" 
        alt="Vaani Mobile Interface" 
      />
    </div>

    {/* 03. SKIFF - Usage Analytics */}
    <div className="md:col-span-2 md:row-span-2 bg-zinc-900 rounded-[40px] overflow-hidden group relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
      <div className="absolute bottom-8 left-8 z-20">
        <p className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-2">Contact Us</p>
        <h4 className="text-white text-xl font-bold">Inutive contact us page</h4>
      </div>
      <img 
        src="/images/Contact Us.svg" 
        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" 
        alt="Skiff Analytics Dashboard" 
      />
    </div>

    {/* 04. KAVI - Documentation Flow */}
    <div className="md:col-span-2 md:row-span-1 bg-white rounded-[40px] border border-zinc-200 overflow-hidden flex items-center justify-center p-8 group">
       <img 
        src="/images/MarketPlace.svg" 
        className="w-full shadow-2xl rounded-lg group-hover:-translate-y-4 transition-transform duration-500" 
        alt="Kavi Auto-Docs" 
      />
    </div>

  </div>
</section>

        {/* --- WEBSITE REDESIGN FOOTER --- */}
        <footer className="mt-48 pb-20 border-t border-zinc-100">
          <div className="max-w-6xl mx-auto px-6 pt-32">
            
            {/* 1. THE NDA & EVOLUTION NOTE */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Case Study Finalized</span>
                </div>
                <h3 className="text-5xl font-bold tracking-tighter mb-6">Identity <br/> Reimagined.</h3>
                <p className="text-zinc-500 leading-relaxed max-w-sm">
                  To respect the strategic rollout of Mahity's new brand, I've focused this case study on the design systems and UX architecture. Specific market strategy documents and pre-launch conversion data are omitted per NDA.
                </p>
              </div>

              {/* 2. THE FUN FACT - "Before & After" Mood */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative bg-white border border-zinc-200 p-10 rounded-[40px] shadow-sm overflow-hidden group"
              >
                <div className="relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-4 block">Design Lore // Fun Fact</span>
                  <h4 className="text-xl font-bold mb-4 italic">"The Napkin Sketch"</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    The core grid system for the new Mahity layout wasn't born in Figma. It was sketched on the back of a flight safety manual during a 4-hour flight because I forgot my sketchbook. Sometimes the best constraints are physical ones.
                  </p>
                </div>
                {/* Decorative Grid Icon */}
                <div className="absolute -right-4 -bottom-4 text-8xl opacity-[0.05] group-hover:rotate-12 transition-transform duration-700">
                  📐
                </div>
              </motion.div>
            </div>

            {/* 3. THE NEXT PHASE CTA - Integrated Layout */}
            <div className="relative rounded-[50px] bg-zinc-950 p-12 md:p-20 overflow-hidden text-center">
               {/* Background Glow */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-600/20 to-transparent opacity-50" />
               
               <div className="relative z-10">
                 <h2 className="text-white text-5xl md:text-8xl font-black tracking-tighter mb-12 leading-none">
                    READY FOR THE <br /> <span className="text-zinc-500 italic">NEXT PHASE?</span>
                 </h2>
                 
                 <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <Link 
                      href="mailto:hello@mahity.com" 
                      className="w-full md:w-auto px-10 py-5 bg-white text-black rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group"
                    >
                      Discuss Your Project
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                    
                    <Link 
                      href="/" 
                      className="w-full md:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all"
                    >
                      View All Work
                    </Link>
                 </div>
               </div>
            </div>

            {/* Footer Bottom Nav */}
            <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
              <p>© Shreya Golatkar</p>
              
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}

function Stat({ label, val }: { label: string, val: string }) {
  return (
    <div>
        <div className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-1">{label}</div>
        <div className="text-3xl font-black">{val}</div>
    </div>
  );
}

function ProductCard({ name, tagline, desc, color, icon }: { name: string, tagline: string, desc: string, color: string, icon: React.ReactNode }) {
  return (
    <div className="p-10 rounded-[48px] border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:shadow-2xl hover:shadow-zinc-200 transition-all duration-500 group">
        <div className={`w-14 h-14 rounded-2xl ${color} text-white flex items-center justify-center mb-10 group-hover:scale-110 transition-transform`}>
            {icon}
        </div>
        <h3 className="text-3xl font-black tracking-tighter mb-2">{name}</h3>
        <p className={`text-[10px] font-black uppercase tracking-[0.3em] mb-6 ${color.replace('bg-', 'text-')}`}>{tagline}</p>
        <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function FeatureItem({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="flex gap-4">
            <Zap className="text-orange-500 mt-1" size={16} />
            <div>
                <h5 className="font-bold text-sm uppercase">{title}</h5>
                <p className="text-xs text-zinc-400">{desc}</p>
            </div>
        </div>
    );
}