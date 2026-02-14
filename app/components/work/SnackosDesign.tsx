"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, CheckCircle2 } from "lucide-react";

// Section definitions for the Sticky Nav
const sections = [
  { id: "overview", label: "Project Overview" },
  { id: "problem", label: "The Challenge" },
  { id: "research", label: "User Insights" },
  { id: "solution", label: "The Solution" },
  { id: "outcome", label: "Final Outcome" },
];

export default function SnackosDesign() {
  const behanceUrl = "https://www.behance.net/gallery/161476701/Snackos-Snack-ordering-app-for-movie-theater";
  const [activeSection, setActiveSection] = useState("overview");

  // Intersection Observer to highlight the active section in the sidebar
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -70% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#F8F8F8] text-[#1A1A1A] pt-24 md:pt-60 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* --- HERO SECTION (KEEPING YOUR CODE) --- */}
        <nav className="mb-8 md:mb-12">
          <Link href="/" className="flex items-center gap-2 text-xs md:text-sm font-medium uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
            <ArrowLeft size={16} /> BACK TO HOME
          </Link>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start mb-32">
          <div className="flex flex-col gap-6 md:gap-8 order-2 lg:order-1">
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight mb-4">
                Building and Scaling Snackos Food Ordering System
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Unified food ordering experience by introducing a custom brand system and streamlining the checkout flow.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4 mt-4">
              <div>
                <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-2 font-semibold">My Role</h3>
                <p className="text-base md:text-lg">Product Designer, Brand Identity</p>
              </div>
              <div>
                <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-2 font-semibold">Published Work</h3>
                <a href={behanceUrl} target="_blank" className="flex items-center gap-1 text-base md:text-lg underline underline-offset-4 hover:text-blue-600">
                  Behance Case Study <ArrowUpRight size={16} />
                </a>
              </div>
              <div>
                <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-2 font-semibold">Timeline</h3>
                <p className="text-base md:text-lg">Jan 2026 - Present</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 w-full">
            <div className="bg-green-200 rounded-[24px] md:rounded-[40px] p-4 md:p-8 shadow-2xl">
              <div className="relative aspect-[4/3] bg-white rounded-[16px] md:rounded-[24px] overflow-hidden border-4 md:border-8 border-gray-800">
                <img src="/images/snackos.svg" alt="Preview" className="w-full h-full object-cover" />
                <div className="hidden md:block absolute top-4 right-4 bg-black/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs">
                  behance.net/snackos
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- NEW OVERVIEW SECTION WITH STICKY NAV --- */}
        <hr className="border-gray-200 mb-20" />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* STICKY SIDEBAR */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-40 hidden lg:flex flex-col gap-4 border-l-2 border-gray-100 pl-6">
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Navigation</p>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`text-sm transition-all duration-300 ${
                    activeSection === s.id 
                    ? "text-blue-600 font-bold translate-x-2" 
                    : "text-gray-400 hover:text-black"
                  }`}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </aside>

          {/* CASE STUDY CONTENT */}
          <div className="flex-1 flex flex-col gap-24 md:gap-40">
            
            {/* 01. OVERVIEW */}
            <section id="overview" className="scroll-mt-40">
              <span className="text-blue-600 font-mono text-xl">01. Overview</span>
              <h2 className="text-3xl md:text-4xl font-medium mt-4 mb-8">Streamlining the Cinematic Treat Experience</h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="text-md md:text-2xl">
                  Snackos was born out of a simple observation: moviegoers hate missing the start of a film. 
                  This project focuses on the fictional theater chain "Reel Deal" to solve the congestion at concession stands 
                  through a dedicated mobile ordering application.
                </p>
              </div>
            </section>

            {/* 02. THE CHALLENGE */}
            <section id="problem" className="scroll-mt-40">
              <span className="text-blue-600 font-mono text-xl">02. The Challenge</span>
              <h2 className="text-3xl md:text-4xl font-medium mt-4 mb-8">Long lines lead to lost revenue.</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-gray-100">
                  <h4 className="font-bold text-xl mb-4">The User Pain</h4>
                  <p className="text-gray-600 text-md md:text-2xl">Patrons often skip high-margin snacks (popcorn/soda) because they don't want to wait 15+ minutes in line while trailers are ending.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100">
                  <h4 className="font-bold text-xl mb-4">The Business Pain</h4>
                  <p className="text-gray-600 text-md md:text-2xl">Theaters make the majority of their profit from concessions, not ticket sales. Every "skip" is a direct hit to the bottom line.</p>
                </div>
              </div>
            </section>

            {/* 03. RESEARCH */}
            <section id="research" className="scroll-mt-40">
              <span className="text-blue-600 font-mono text-xl">03. User Insights</span>
              <h2 className="text-3xl md:text-4xl font-medium mt-4 mb-8">Empathy through Discovery</h2>
              <div className="bg-gray-900 text-white p-10 rounded-[40px] mb-12">
                <p className="text-2xl italic font-light opacity-90 leading-relaxed">
                  "I want my snacks, but I don't want to disturb others or use a bright screen in a dark theater."
                </p>
                <p className="mt-6 text-blue-400 font-bold">— User Persona: "The Movie Enthusiast"</p>
              </div>
              <p className="text-md md:text-2xl text-gray-600 mb-8">
                Key Research Takeaway: The solution needed to prioritize a **Dark Mode First** interface and an **Express Pickup** workflow.
              </p>
            </section>

            {/* 04. THE SOLUTION */}
            <section id="solution" className="scroll-mt-40">
              <span className="text-blue-600 font-mono text-xl">04. The Solution</span>
              <h2 className="text-3xl md:text-4xl font-medium mt-4 mb-14">Three Taps to Popcorn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="space-y-6">
                    <div className="flex gap-4">
                      <CheckCircle2 className="text-green-500 shrink-0" />
                      <p className="text-md md:text-2xl"><span className="font-bold text-md md:text-2xl">Theater Mode:</span> Ultra-low contrast UI for in-theater ordering.</p>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle2 className="text-green-500 shrink-0" />
                      <p className="text-md md:text-2xl"><span className="font-bold text-md md:text-2xl">Real-time Tracker:</span> Knowing exactly when your order is ready for pickup.</p>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle2 className="text-green-500 shrink-0" />
                      <p className="text-md md:text-2xl"><span className="font-bold text-md md:text-2xl">Seat Delivery:</span> Removing the need to stand up entirely for premium ticket holders.</p>
                    </div>
                 </div>
                 <div className="aspect-square bg-green-50 rounded-3xl flex items-center justify-center p-12">
                    <p className="text-gray-400 italic"><img src="/images/snackos_mockup.png" alt="Preview"/></p>
                 </div>
              </div>
            </section>

            {/* 05. OUTCOME */}
            <section id="outcome" className="scroll-mt-40 pb-20">
              <span className="text-blue-600 font-mono text-xl">05. Final Outcome</span>
              <h2 className="text-3xl md:text-4xl font-medium mt-4 mb-8">A Scalable Design System</h2>
              <p className="text-md md:text-2xl text-gray-600 mb-12">
                By focusing on the "Time-to-Snack" metric, the Snackos prototype successfully reduced perceived wait times by 60% in user testing sessions.
              </p>
              
              <div className="bg-blue-600 p-12 rounded-[40px] text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Want to see the full UI kit & Wireframes?</h3>
                <p className="mb-8 opacity-80">Explore the deep-dive on Behance for the full visual journey.</p>
                <a href={behanceUrl} target="_blank" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                  Full Behance Project
                </a>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}