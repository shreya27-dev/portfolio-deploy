"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Terminal, Cpu, Zap, CreditCard, 
  Globe, Layout, Sparkles, MousePointerClick, ShieldCheck
} from "lucide-react";

export default function HostingPlatform() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 font-sans selection:bg-indigo-500/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12 md:mt-40">
        
        {/* NAV / BACK */}
        {/* <nav className="mb-16">
          <Link href="/" className="group inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.3em] text-gray-500 hover:text-indigo-400 transition-colors uppercase">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            root / projects / skiff-easy-deploy
          </Link>
        </nav> */}

        {/* HERO SECTION */}
        <header className="mb-48">
          <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-8">
            <Sparkles size={14} />
            <span className="text-[10px] font-mono uppercase tracking-widest">Simplifying Complexity</span>
          </motion.div>

          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none mb-10">
            Skiff<span className="text-indigo-500">.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
            <div className="md:col-span-2">
              <p className="text-2xl md:text-4xl font-medium text-gray-300 leading-tight">
                Making cloud hosting <span className="text-white italic">accessible</span>. 
                I transformed complex infrastructure into a <span className="text-indigo-400 font-bold underline underline-offset-8">no-code deployment flow</span> for non-technical creators.
              </p>
            </div>
            <div className="space-y-4 border-l border-white/10 pl-8">
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Focus</p>
                <p className="text-lg font-bold">User Accessibility</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Goal</p>
                <p className="text-lg font-bold text-indigo-400">Zero-Friction Deploy</p>
              </div>
            </div>
          </div>
        </header>

        {/* SECTION: THE PROBLEM VS SOLUTION */}
        <section className="mb-48 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 rounded-[40px] bg-red-500/5 border border-red-500/10">
                <h3 className="text-red-400 font-bold mb-4 uppercase tracking-widest text-xs">The Technical Gap</h3>
                <p className="text-gray-400 leading-relaxed">
                    Traditional hosting platforms (AWS/GCP) overwhelm non-technical users with jargon like "vCPU clusters" and "DNS A-records." This creates a "Fear of Clicking" that halts deployment.
                </p>
            </div>
            <div className="p-10 rounded-[40px] bg-emerald-500/5 border border-emerald-500/10">
                <h3 className="text-emerald-400 font-bold mb-4 uppercase tracking-widest text-xs">The Skiff Solution</h3>
                <p className="text-gray-400 leading-relaxed">
                    We replaced manual config with <strong>Guided Presets</strong>. Users choose their goal (e.g., "Hobbyist" or "Pro") and the system handles the technical resource allocation automatically.
                </p>
            </div>
        </section>

        {/* SECTION 01: WELCOME & OVERVIEW */}
        <section className="mb-48">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <span className="text-indigo-500 font-mono text-sm mb-4 block">01 // HUMAN-CENTRIC DASHBOARD</span>
              <h2 className="text-4xl font-bold mb-6 tracking-tight">Speak Human, Not Machine.</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Instead of "Instance Logs," the dashboard greets the user by name and presents a clear "Search for resources" bar. I used large, friendly cards like <span className="text-white font-bold">"Healthy_veg"</span> to make server instances feel less intimidating.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center"><MousePointerClick /></div>
                <h4 className="font-bold">One-Click Actions</h4>
              </div>
              <p className="text-sm text-gray-500 italic leading-relaxed">
                "Added 'Quick Actions' like Pay Now and Renew Domain directly to the home screen so non-technical owners never miss a critical update."
              </p>
            </div>
          </div>
          <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-[#0A0A0A] p-4">
            <img src="/images/Overview.svg" alt="Skiff Overview" className="rounded-[32px] w-full" />
          </div>
        </section>

        {/* SECTION 02: GUIDED PROVISIONING */}
        <section className="mb-48">
          <div className="mb-16">
            <span className="text-indigo-500 font-mono text-sm mb-4 block">02 // NO-CODE CONFIGURATION</span>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Choose a Plan, Not a Processor.</h2>
            <p className="text-gray-400 text-lg max-w-3xl">
              I designed the provisioning flow to use plain-language tiers. Instead of asking for vCPU counts, we ask <span className="text-white italic">"How this plan will help you?"</span> and provide descriptions like "Ideal for scaling apps."
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
               <div className="bg-[#0A0A0A] rounded-[32px] p-2 border border-white/10">
                 <img src="/images/WebServices-instanceTypes.svg" alt="Web Services" className="rounded-[28px]" />
               </div>
               <div className="bg-indigo-500/10 p-8 rounded-3xl border border-indigo-500/20">
                  <h4 className="font-bold text-indigo-400 mb-2">Technical Shielding</h4>
                  <p className="text-sm text-gray-400">
                    Advanced settings (like vCPU and RAM) are present but de-emphasized. The primary focus is the <strong>Price/Plan</strong>, which is what non-technical users care about most.
                  </p>
               </div>
            </div>
            <div className="bg-[#0A0A0A] rounded-[32px] p-2 border border-white/10">
              <img src="/images/DatabaseCreate-Configure.svg" alt="Database Setup" className="rounded-[28px] h-full object-cover" />
            </div>
          </div>
        </section>

        {/* SECTION 03: VISUAL AUTOMATION (CRON) */}
        <section className="mb-48">
          <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
            <div className="md:w-1/2">
              <span className="text-indigo-500 font-mono text-sm mb-4 block">03 // AUTOMATION FOR EVERYONE</span>
              <h2 className="text-4xl font-bold mb-6 tracking-tight">Scheduling Without Code.</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We translated "Cron Expressions" into a simple <strong>Quick Preset</strong> menu. 
                Users select "Every day at 9:00 AM" from a dropdown. The system then displays a "Human-Readable" confirmation: <span className="text-indigo-400 italic">"Upcoming Execution: Tomorrow at 9:00 AM EST."</span>
              </p>
              <div className="p-6 bg-white/5 rounded-2xl border-l-4 border-indigo-500">
                <p className="text-sm text-gray-300 italic">
                  "This removes the need for a developer to set up simple background tasks, empowering business owners to manage their own automation."
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-[#0A0A0A] rounded-[32px] p-2 border border-white/10">
                <img src="/images/CronJob4.svg" alt="Cron Job" className="rounded-[28px]" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04: DOMAIN MANAGEMENT */}
        <section className="mb-48">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#0A0A0A] rounded-[32px] p-2 border border-white/10">
              <img src="/images/Domains.svg" alt="Domain Management" className="rounded-[28px]" />
            </div>
            <div>
              <span className="text-indigo-500 font-mono text-sm mb-4 block">04 // CONNECTIVITY</span>
              <h2 className="text-4xl font-bold mb-6 tracking-tight">DNS Made Simple.</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Domains are usually where users get stuck. I designed a clear <strong>"Fix DNS Issue"</strong> button and a "Pending/Active" status indicator that uses simple traffic-light colors (Red/Green/Amber).
              </p>
              <div className="flex gap-4">
                <div className="flex-1 p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                   <p className="text-2xl font-bold text-emerald-400">8</p>
                   <p className="text-[10px] text-gray-500 uppercase">Active</p>
                </div>
                <div className="flex-1 p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                   <p className="text-2xl font-bold text-amber-400">2</p>
                   <p className="text-[10px] text-gray-500 uppercase">Pending</p>
                </div>
                <div className="flex-1 p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                   <p className="text-2xl font-bold text-red-400">1</p>
                   <p className="text-[10px] text-gray-500 uppercase">Issues</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 05: BILLING TRANSPARENCY */}
        <section className="mb-48">
          <div className="text-center mb-16">
            <span className="text-indigo-500 font-mono text-sm mb-4 block">05 // FINOPS</span>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">No Surprise Bills.</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              For non-technical users, budget is the #1 concern. I designed the billing overview to show <strong>"This Month Usage"</strong> as a big, bold number with a <strong>"Budget Alert"</strong> progress bar.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <img src="/images/Billing-overview.svg" className="rounded-[32px] border border-white/10" alt="Billing Overview" />
            <img src="/images/Billing-Usage.svg" className="rounded-[32px] border border-white/10" alt="Usage" />
          </div>
        </section>

        {/* IMPACT / RESULT */}
        <section className="mb-48 py-24 border-y border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8">Designing for the Next Million Users.</h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
               Skiff proves that cloud infrastructure doesn't have to be scary. By focusing on 
               <strong>guided flows, human-readable status, and proactive financial alerts</strong>, 
               we built a platform where any business owner can deploy their future with confidence.
            </p>
            <div className="flex justify-center gap-12">
                <div>
                    <p className="text-4xl font-bold text-indigo-400">Zero</p>
                    <p className="text-xs text-gray-500 uppercase mt-2 font-mono">Terminal Commands Needed</p>
                </div>
                <div className="w-px h-16 bg-white/10" />
                <div>
                    <p className="text-4xl font-bold text-indigo-400">1.5</p>
                    <p className="text-xs text-gray-500 uppercase mt-2 font-mono">Months to Handoff</p>
                </div>
            </div>
          </div>
        </section>

        {/* --- HOSTING PLATFORM FOOTER --- */}
        <footer className="mt-48 pt-20 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            
            {/* 1. NDA & END STATUS */}
            <div className="flex flex-col items-center text-center mb-24">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.2em]">Documentation Complete</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">That’s a wrap on Skiff.</h3>
              
              <p className="text-gray-400 text-sm max-w-lg leading-relaxed italic">
                Note: To protect the infrastructure integrity and proprietary logic of the platform, certain backend flows and internal security dashboards have been omitted due to NDA. I’m happy to discuss the high-level logic during an interview.
              </p>
            </div>

            {/* 2. THE FUN FACT - Status Card Style */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-[32px] p-8 md:p-12 text-white overflow-hidden relative group"
            >
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                  <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">System Log // Fun Fact</span>
                  <h4 className="text-2xl font-bold mb-4 italic">"The Zero-Downtime Design"</h4>
                  <p className="text-zinc-400 text-sm max-w-xs leading-relaxed">
                    While designing the 'Uptime Monitoring' dashboard, my own internet went out for 4 hours. I had to finish the wireframes at a local 24/7 laundromat using their guest Wi-Fi. Irony at its finest.
                  </p>
                </div>
                
                <div className="flex flex-col items-center gap-4">
                  <div className="text-5xl group-hover:rotate-12 transition-transform duration-500">📡</div>
                  <div className="px-4 py-1 rounded-md bg-white/10 border border-white/10 text-[10px] font-mono text-zinc-500">
                    LATENCY: 24ms
                  </div>
                </div>
              </div>

              {/* Decorative Tech Grid Overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" 
                style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '20px 20px' }} 
              />
            </motion.div>

            {/* 3. NAVIGATION */}
            <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-8">
               <Link href="/" className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-emerald-500 transition-colors">
                ← Back to Journey
               </Link>

               <Link href="/work/Ticketing-Tool" className="group text-right">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1 block">Up Next</span>
                  <span className="text-2xl font-bold group-hover:text-emerald-500 transition-colors">Ticketing Tool →</span>
               </Link>
            </div>

          </div>
        </footer>

      </div>
    </main>
  );
}