"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, LayoutGrid, Calendar, ListTodo, BarChart3 } from "lucide-react";


export default function ProjectMng() {
  return (
    <main className="min-h-screen text-[#1A1A1A] pt-32 pb-20 font-sans selection:bg-blue-100 md:mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* HEADER AREA */}
       

        <header className="relative mb-32 pt-10 overflow-hidden">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    
    {/* Left Side: Content */}
    {/* Left Side: Content */}
<motion.div 
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="z-10"
>
  {/* BACK BUTTON + TAG ROW */}
  <div className="flex items-center gap-4 mb-6">
    <Link 
      href="/" 
      className="p-2 rounded-full border border-gray-100 hover:border-blue-200 hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-all group"
      aria-label="Go back"
    >
      <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
    </Link>

    <div className="px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
      <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
        SaaS Product Design
      </span>
    </div>
  </div>

  <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
    The Command <br /> Center for <span className="text-blue-600">LOQO.</span>
  </h1>
      <p className="text-xl md:text-2xl text-gray-500 max-w-lg leading-relaxed mb-10">
        Transforming fragmented startup workflows into a unified, data-driven project management ecosystem.
      </p>
      
      <div className="flex flex-wrap gap-8 py-8 border-t border-gray-100">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Role</p>
          <p className="text-lg font-semibold">Lead Designer</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Timeline</p>
          <p className="text-lg font-semibold">3 Months</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Platform</p>
          <p className="text-lg font-semibold">Web SaaS</p>
        </div>
      </div>
    </motion.div>

    {/* Right Side: Staggered Image Gallery */}
    <div className="relative h-[600px] w-full hidden lg:block">
      {/* Main Dashboard - The Anchor */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="absolute top-10 right-0 w-[90%] z-20 shadow-2xl rounded-2xl border border-white/20 overflow-hidden"
      >
        <img src="/images/Hi-Fi Dashboard.png" alt="Main Dashboard" className="w-full" />
      </motion.div>

      {/* Kanban View - Floating Left */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 -left-10 w-[60%] z-30 shadow-2xl rounded-xl border border-white/20 overflow-hidden"
      >
        <img src="/images/My Task - Kanban View.png" alt="Kanban View" className="w-full" />
      </motion.div>

      {/* Modal - The Interaction Detail */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute -bottom-5 right-20 w-[50%] z-40 shadow-2xl rounded-xl border border-white/50 overflow-hidden"
      >
        <img src="/images/My Task - ToDo View.png" alt="Interaction Detail" className="w-full" />
      </motion.div>

      {/* Decorative Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10" />
    </div>
  </div>
</header>

        {/* SECTION 01: THE CHALLENGE */}
        <section className="mb-48">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="md:w-1/3">
              <span className="text-6xl md:text-8xl font-black block mb-4 text-blue-600">01</span>
              <h2 className="text-3xl font-bold tracking-tight">The Startup <br />Challenge</h2>
            </div>
            <div className="md:w-2/3 pt-4">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                In a fast-paced startup environment, we couldn't afford a 6-month research phase. 
                I worked directly with the CEO to identify critical friction points in existing 
                tools like Monday.com and Asana.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="font-bold mb-2">Complexity Overload</h4>
                    <p className="text-sm text-gray-500">Existing tools were too "heavy" for a small, fast-moving team.</p>
                 </div>
                 <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="font-bold mb-2">Lack of Clarity</h4>
                    <p className="text-sm text-gray-500">Project status was hidden behind too many clicks.</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: THE ANALYTICS (HI-FI DASHBOARD) */}
        <section className="mb-48">
          <div className="mb-12">
            <span className="text-6xl md:text-8xl font-black text-blue-600 block mb-4">02</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Data-Driven Insights</h2>
            <p className="text-xl text-gray-500 max-w-2xl">
              I designed the dashboard to highlight "Stuck" tasks immediately, 
              ensuring managers focus on blockers before they become delays.
            </p>
          </div>
          <div className="rounded-[40px] overflow-hidden shadow-xl  group">
             <img 
               src="/images/Hi-Fi Dashboard.png" 
               alt="LOQO Dashboard" 
               className="w-full hover:scale-[1.01] transition-transform duration-700"
             />
          </div>
        </section>

        {/* SECTION 03: MULTI-VIEW SYSTEM */}
        <section className="mb-48">
          <div className="mb-12">
            <span className="text-6xl md:text-8xl font-black text-blue-600 block mb-4">03</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Visual Flexibility</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-12">
               <div className="p-8 bg-blue-50 rounded-[32px]">
                  <LayoutGrid className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-2xl font-bold mb-2">Kanban Logic</h3>
                  <p className="text-gray-600">Built for developers to manage the daily sprint flow with drag-and-drop simplicity.</p>
               </div>
               <img src="/images/My Task - Kanban View.png" className="rounded-3xl shadow-lg" />
            </div>
            <div className="space-y-12 md:pt-24">
               <div className="p-8 bg-purple-50 rounded-[32px]">
                  <BarChart3 className="text-purple-600 mb-4" size={32} />
                  <h3 className="text-2xl font-bold mb-2">Gantt Timelines</h3>
                  <p className="text-gray-600">Visualizing dependencies to ensure project milestones are met on time.</p>
               </div>
               <img src="/images/Gantt Chart.png" className="rounded-3xl shadow-lg" />
            </div>
          </div>
        </section>

        
{/* SECTION 04: PRODUCT IN MOTION */}
        <section className="mb-48">
          <div className="mb-12">
            <span className="text-6xl md:text-8xl font-black text-blue-600 block mb-4">04</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">The Interactive Experience</h2>
            <p className="text-xl text-gray-500 max-w-2xl">
              Static pixels don't do justice to the workflow. This demo showcases the fluid 
              transitions between data views and the simplified project creation logic.
            </p>
          </div>

          {/* Animated Video Container */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            {/* Soft Glow Background Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[35px] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative rounded-[32px] overflow-hidden border border-gray-200 shadow-2xl bg-white p-2">
              {/* Browser Header dots */}
              <div className="flex items-center justify-between px-6 py-4 bg-gray-50/50 border-b border-gray-100">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="px-4 py-1 bg-white text-[10px] text-gray-400 font-medium tracking-tight">
                  app.loqo.design/workspace
                </div>
                <div className="w-12" /> {/* Layout Balance */}
              </div>
              
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-auto rounded-b-[28px] shadow-inner"
              >
                <source src="/videos/project-management.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Floating Caption Overlay */}
              <div className="absolute bottom-6 right-6 hidden md:block">
                <div className="bg-black/70 backdrop-blur-md text-white px-5 py-3 border border-white/10 shadow-xl">
                  <p className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-1">Live View</p>
                  <p className="text-sm font-medium">Modular Widget & Task Interaction</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- REPLACED CTA FOOTER WITH FUN FACT & NAVIGATION --- */}
        <footer className="mt-48 pt-20 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            
            {/* Left: The Fun Fact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-10 rounded-[40px] relative overflow-hidden group"
            >
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-blue-600 font-bold mb-4 block">
                  The Final Byte // Fun Fact
                </span>
                <h3 className="text-2xl font-bold mb-4">
                  Powered by 142 Cups of Black Coffee ☕
                </h3>
                <p className="text-gray-500 leading-relaxed max-w-xs">
                  This entire design system was built while listening to a single 10-hour Lo-Fi loop on repeat. Consistency isn't just in the pixels; it's in the playlist.
                </p>
              </div>
              
              {/* Decorative background element */}
              <div className="absolute -right-8 -bottom-8 text-[120px] opacity-[0.03] group-hover:opacity-[0.08] transition-opacity rotate-12">
                📂
              </div>
            </motion.div>

            {/* Right: Soft Navigation */}
            <div className="flex flex-col items-start md:items-end gap-6 pb-4">
              <Link 
                href="/" 
                className="group flex items-center gap-3 text-gray-400 hover:text-black transition-colors"
              >
                <span className="text-sm font-medium uppercase tracking-widest">Back to Home</span>
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-black transition-all">
                  <ArrowLeft size={18} />
                </div>
              </Link>
              
              <Link 
                href="/work/redesign" // Link this to your next project slug
                className="group text-left md:text-right"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2 block font-bold">Next Case Study</span>
                <h4 className="text-3xl font-bold group-hover:text-blue-600 transition-colors flex items-center gap-3">
                  Website Redesign <ExternalLink size={24} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </h4>
              </Link>
            </div>

          </div>

          {/* Minimal Copyright/Signature */}
          <div className="mt-32 pb-10 flex justify-between items-center text-[10px] uppercase tracking-widest text-gray-400 font-bold">
            <p>© Shreya Golatkar</p>
            
          </div>
        </footer>

      </div>
    </main>
  );
}