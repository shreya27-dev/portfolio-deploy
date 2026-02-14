"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Trophy, Zap, Target, 
  ChevronRight, Sparkles, ShieldAlert, Headphones,
  BarChart2, Layers, ZapOff, Brain, AlertCircle, Smile
} from "lucide-react";

export default function TicketingTool() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-zinc-900 pt-24 pb-20 overflow-x-hidden selection:bg-[#0057FF] selection:text-white md:mt-30">
      
      {/* VIBRANT ACCENT BLUR */}
      <div className="fixed top-0 right-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#0057FF]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* NAV */}
        <nav className="mb-20">
          <Link href="/" className="group inline-flex items-center gap-3 text-xs font-bold tracking-widest text-zinc-400 hover:text-[#0057FF] transition-all duration-300 uppercase">
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
            Back to Case Studies
          </Link>
        </nav>

        {/* HERO: BRIGHT & BOLD */}
        <header className="mb-40">
          <motion.div variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }} className="flex items-center gap-3 mb-8">
            <span className="h-[1px] w-12 bg-[#0057FF]"></span>
            <span className="text-[#0057FF] font-bold uppercase tracking-[0.4em] text-[10px]">Human-Centric Service Design</span>
          </motion.div>

          <h1 className="text-7xl md:text-[120px] font-black tracking-[-0.04em] leading-[0.9] mb-12 text-zinc-900">
            Nexus <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057FF] to-[#00A3FF]">
              Ticketing.
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-zinc-200 pt-12">
            <div className="md:col-span-8">
              <p className="text-2xl md:text-4xl font-medium text-zinc-500 leading-tight">
                Designing for the <span className="text-zinc-900 underline decoration-[#0057FF] decoration-4 underline-offset-8">Support Engineer</span>. 
                Solving dashboard fatigue by stripping away the noise and focusing on <span className="italic text-zinc-900">cognitive ergonomics</span>.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col justify-end gap-3 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
              <div className="flex justify-between py-2 border-b border-zinc-100"><span>Role</span><span className="text-zinc-900 font-bold">UX Lead</span></div>
              <div className="flex justify-between py-2 border-b border-zinc-100"><span>Deliverable</span><span className="text-zinc-900 font-bold italic">Grayscale Hifi</span></div>
            </div>
          </div>
        </header>

        {/* NEW SECTION: THE FRUSTRATION VS THE FRESH START */}
        <section className="mb-60">
            <div className="grid md:grid-cols-2 gap-16">
                <div className="p-12 bg-zinc-100 rounded-[40px] border border-zinc-200 relative overflow-hidden">
                    <AlertCircle className="absolute -top-4 -right-4 text-zinc-200 w-32 h-32 rotate-12" />
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-red-500 mb-6">The Frustration</h3>
                    <p className="text-xl font-bold text-zinc-800 leading-snug mb-6">
                        Support engineers are constantly bombarded with "High Priority" red text, overlapping windows, and cluttered tables.
                    </p>
                    <p className="text-zinc-500 text-sm">
                        This leads to <strong>Dashboard Fatigue</strong>—a state where everything looks important, so nothing is. The result? Human error, high stress, and slow resolution times.
                    </p>
                </div>
                <div className="p-12 bg-white rounded-[40px] border border-[#0057FF]/20 shadow-xl shadow-[#0057FF]/5 relative overflow-hidden">
                    <Brain className="absolute -top-4 -right-4 text-[#0057FF]/5 w-32 h-32 rotate-12" />
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#0057FF] mb-6">The Fresh View</h3>
                    <p className="text-xl font-bold text-zinc-800 leading-snug mb-6">
                        A workspace that breathes. By using a grayscale-core, we create a "calm" environment where focus is the default state.
                    </p>
                    <p className="text-zinc-500 text-sm">
                        I removed visual noise so engineers can actually think. Color is used sparingly and intentionally—only for <strong>Success states</strong> and <strong>Achievements</strong>.
                    </p>
                </div>
            </div>
        </section>

        {/* SECTION 01: THE ARCHITECTURE (GRAYSCALE SHOWCASE) */}
        <section className="mb-60">
          <div className="grid md:grid-cols-2 gap-20 items-center mb-24">
            <div>
              <h2 className="text-5xl font-black mb-8 leading-none tracking-tighter text-zinc-900">
                LOGIC OVER <br />AESTHETICS.
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed">
                By designing in **Grayscale**, I forced the focus onto hierarchy. 
                Support engineers need to solve problems in seconds. If they can't navigate the flow in black and white, adding a pretty blue button won't help. 
              </p>
            </div>
            <div className="flex flex-col gap-6">
                <div className="p-8 bg-white border-l-4 border-[#0057FF] shadow-sm">
                    <h4 className="font-bold text-sm mb-2 uppercase">Core Thesis</h4>
                    <p className="text-sm text-zinc-500 italic">"Design should reduce the mental load of the user, not add to it."</p>
                </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-[#0057FF]/5 rounded-[40px] scale-95 group-hover:scale-100 transition-transform duration-700" />
            <div className="relative bg-white p-4 rounded-2xl border border-zinc-200 overflow-hidden shadow-xl">
              <img src="/images/AgentDashboardView.svg" className="w-full grayscale brightness-105" alt="Agent Dashboard" />
            </div>
          </div>
        </section>

        {/* SECTION 02: GAMIFICATION (THE BLUE POP) */}
        <section className="mb-60 py-24 bg-[#0057FF] rounded-[60px] text-white relative shadow-2xl shadow-[#0057FF]/30">
          <div className="grid md:grid-cols-2 gap-20 items-center px-10 md:px-20">
            <div className="order-2 md:order-1">
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-[32px] border border-white/20">
                <img src="/images/Leaderboard.svg" className="rounded-[14px] grayscale" alt="Leaderboard" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Smile size={48} className="mb-10 text-white/40" />
              <h2 className="text-6xl font-black tracking-tighter leading-none mb-8">
                DOPAMINE <br />ENGINE.
              </h2>
              <p className="text-xl font-medium leading-relaxed mb-10 text-white/80">
                Work shouldn't feel like a chore. The Leaderboard is the only "colorful" part of the app because it represents the reward. 
                This contrast makes winning feel more impactful.
              </p>
              <div className="space-y-4">
                {["Position #21 Personal Welcome", "Monthly Top Performer Badges", "First-Time Response Goals"].map((item) => (
                    <div key={item} className="flex items-center gap-3 font-bold text-xs uppercase tracking-[0.2em]">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" /> {item}
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03: AGENT FLOWS */}
        <section className="mb-60">
          <div className="flex justify-between items-end mb-16">
            <div>
               <h2 className="text-4xl font-black mb-2 tracking-tighter text-zinc-900 text-zinc-400">03. AGENT <span className="text-zinc-900 underline decoration-[#0057FF]">INTELLIGENCE</span></h2>
               <p className="text-zinc-500 font-medium">Smart tools for high-stakes problem solving.</p>
            </div>
            <BarChart2 className="text-[#0057FF]" size={40} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             <StepCard 
                num="01"
                title="SLA Risk"
                desc="Visual countdowns for tickets about to breach, ensuring the team stays on track."
             />
             <StepCard 
                num="02"
                title="360 Context"
                desc="Complete customer history timeline, from VIP status to previous resolutions."
                active
             />
             <StepCard 
                num="03"
                title="Knowledge base"
                desc="Integrated AI suggestions that resolve 30% of tickets without typing a word."
             />
          </div>

          <div className="mt-24 bg-white rounded-[40px] border border-zinc-200 p-6 shadow-sm">
             <img src="/images/CustomerManagementView.svg" className="w-full grayscale rounded-[28px]" alt="Customer View" />
          </div>
        </section>

        {/* LOGIC WRAP UP */}
        <section className="mb-60 py-32 border-y border-zinc-200 text-center">
            <motion.div variants={fadeIn}
             initial="initial"
             whileInView="whileInView"
             viewport={{ once: true }}>
              <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter text-zinc-900">PURE LOGIC.</h2>
              <p className="text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-16">
                This project confirms that good design is invisible. By prioritizing the 
                <strong> Support Engineer's mental health</strong>, we built a system that is as effective as it is clean.
              </p>
              <div className="flex flex-wrap justify-center gap-12">
                 <BigStat val="3" label="Primary Flows" />
                 <BigStat val="24%" label="Speed Incr." />
                 <BigStat val="0" label="Visual Noise" />
              </div>
            </motion.div>
        </section>

        {/* FINAL CTA */}
        {/* --- TICKETING TOOL FOOTER --- */}
        <footer className="mt-48 pb-20 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-6">
            
            {/* 1. NDA & STATUS WRAP */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 pt-20 mb-32">
              <div className="max-w-md">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
                    Status: Ticket Resolved
                  </span>
                </div>
                <h3 className="text-4xl font-bold tracking-tighter mb-4">Closing the Loop.</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Due to the internal nature of this enterprise tool, I’ve highlighted the core UX logic and architectural improvements. Full agent performance metrics and user PII (Personally Identifiable Information) have been redacted to comply with company NDA.
                </p>
              </div>

              {/* 2. THE FUN FACT - Sticky Note Style */}
              <motion.div 
                whileHover={{ rotate: -2 }}
                className="bg-[#FEF3C7] p-8 shadow-xl md:w-80 relative transform -rotate-1"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700/50 mb-2 block">Developer Note // Fun Fact</span>
                <p className="font-jaldi text-amber-900 leading-tight">
                  "While designing the 'Priority 1' alert sounds, I accidentally played a high-pitched siren over the office speakers. For 30 seconds, the entire engineering team thought the building was being evacuated. We kept the sound—it definitely gets attention."
                </p>
              </motion.div>
            </div>

            {/* 3. THE BIG CTA */}
            {/* <div className="text-center">
              <Link href="mailto:golatkarshreyax@gmail.com" className="group inline-flex flex-col items-center">
                <span className="text-xs font-black uppercase tracking-[0.5em] mb-8 text-zinc-400 group-hover:text-blue-600 transition-colors">
                  Ready to optimize your workflow?
                </span>
                <span className="text-5xl md:text-9xl font-black tracking-tighter text-zinc-900 group-hover:italic transition-all leading-none">
                    LET'S TALK. <span className="inline-block group-hover:translate-x-6 transition-transform">→</span>
                </span>
              </Link>
            </div> */}

            {/* 4. SOFT NAV */}
            <div className="mt-32 flex justify-between items-center border-t border-gray-100 pt-10">
               <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black">
                ← Back to Overview
               </Link>
               <Link href="/work/project-management" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-blue-600">
                Next: Project Management →
               </Link>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}

function StepCard({ num, title, desc, active = false }: { num: string, title: string, desc: string, active?: boolean }) {
  return (
    <div className={`p-10 rounded-3xl border transition-all duration-500 ${active ? 'bg-white border-[#0057FF] shadow-xl shadow-[#0057FF]/5 scale-105' : 'bg-white border-zinc-100'}`}>
        <span className={`text-[10px] font-black tracking-widest mb-6 block ${active ? 'text-[#0057FF]' : 'text-zinc-300'}`}>MODULE {num}</span>
        <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter text-zinc-900">{title}</h3>
        <p className="text-sm leading-relaxed text-zinc-500">{desc}</p>
    </div>
  );
}

function BigStat({ val, label }: { val: string, label: string }) {
  return (
    <div className="text-center">
        <div className="text-5xl font-black text-zinc-900 mb-2">{val}</div>
        <div className="text-[10px] uppercase font-black tracking-[0.3em] text-[#0057FF]">{label}</div>
    </div>
  );
}