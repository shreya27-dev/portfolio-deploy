"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CrowdFund() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white selection:bg-indigo-500/30">
      
      {/* --- MINIMAL NAV --- */}
      {/* <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 hover:text-white transition-all">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Portfolio
          </Link>
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_#f59e0b]" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-amber-200">Deployment in Progress</span>
          </div>
        </div>
      </nav> */}

      {/* --- HERO SECTION --- */}
      {/* --- UPDATED HERO SECTION --- */}
{/* --- UPDATED HERO SECTION --- */}
<section className="relative pt-48 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
  {/* Decorative Background Glow */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />
  
  <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
    {/* LEFT COLUMN: Text Content */}
    <div>
      <Link href="/" className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500 hover:text-white transition-all mb-12">
        <span className="group-hover:-translate-x-1 transition-transform">←</span> Portfolio
      </Link>

      <div className="flex items-center gap-4 mb-6">
          <div className="inline-block px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20">
              <span className="text-indigo-400 font-bold tracking-[0.2em] uppercase text-[10px]">Web3 Engineering .01</span>
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[9px] uppercase tracking-widest font-bold text-amber-200">Deployment in Progress</span>
          </div>
      </div>

      <h1 className="text-7xl md:text-9xl font-jaro leading-[0.85] mb-8 tracking-tighter">
          Crowd<br/><span className="text-indigo-500 italic">Fund</span>
      </h1>

      <p className="text-xl md:text-2xl font-jaldi text-gray-400 leading-relaxed max-w-xl mb-10">
        A decentralized experiment in trust. Built to explore the intersection of 
        <span className="text-white italic"> Solidity Smart Contracts</span> and automated distribution logic.
      </p>

      {/* Technical Status Alert */}
      <div className="bg-white/5 p-6 rounded-2xl border-l-4 border-indigo-500 max-w-md">
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-300 mb-2">Technical Status</p>
          <p className="text-gray-400 text-sm leading-relaxed">
              Smart contracts are currently being audited and optimized for the <span className="text-white">Sepolia Testnet</span>. UI integration is 90% complete.
          </p>
      </div>
    </div>

    {/* RIGHT COLUMN: The Image Container */}
    <div className="relative group">
      {/* Subtle Background Glow behind image */}
      <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full group-hover:bg-indigo-500/30 transition-all duration-700" />
      
      <div className="relative aspect-[4/5] bg-[#111] rounded-[48px] overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center p-8 md:p-12">
         {/* Replace with your actual project screenshot or mock-up */}
         <div className="relative w-full h-full">
            <Image 
            src="/images/Crowfunding.jpg" 
            alt="CrowdFund Interface Preview" 
            fill 
            className="object-contain opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
            priority
            />
         </div>
         
         {/* Glassmorphism Overlay Label */}
         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-black/40 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="font-mono text-[9px] text-gray-300 uppercase tracking-[0.3em] whitespace-nowrap">Conceptual UI v1.0</p>
         </div>
      </div>
    </div>
  </div>
</section>

      {/* --- OVERVIEW STRIP --- */}
      <section className="border-y border-white/5 bg-white/[0.02] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
                { label: 'Role', val: 'Contract Dev / UI' },
                { label: 'Stack', val: 'Solidity & Next.js' },
                { label: 'SDK', val: 'Thirdweb' },
                { label: 'Network', val: 'Ethereum (Sepolia)' },
            ].map((item, i) => (
                <div key={i} className="space-y-2">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{item.label}</p>
                    <p className="text-lg font-jaro text-indigo-100">{item.val}</p>
                </div>
            ))}
        </div>
      </section>

      {/* --- CORE CONTENT --- */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-24">
            <div>
                <h2 className="text-4xl font-jaro mb-8 italic">The Objective</h2>
                <div className="space-y-6 text-gray-400 font-jaldi text-lg leading-loose">
                    <p>
                        The goal was to strip away the "middle-man" architecture of traditional fundraising. 
                        By leveraging <span className="text-white">Thirdweb</span>, I focused on building a secure logic layer that allows users to create campaigns, pledge funds, and track targets with zero platform fees.
                    </p>
                    <p>
                        This project serves as a deep-dive into <span className="text-white">State Synchronization</span>—ensuring that the visual UI reflects complex blockchain transactions in real-time without friction.
                    </p>
                </div>
            </div>
            
            {/* Tech Cluster */}
            <div className="grid grid-cols-2 gap-4">
                {['Solidity', 'Thirdweb', 'Ethers.js', 'MetaMask', 'Next.js', 'Tailwind'].map((tech) => (
                    <div key={tech} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-colors group">
                        <p className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-1 group-hover:text-indigo-400 transition-colors">Dependency</p>
                        <p className="text-xl font-jaro">{tech}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- FOOTER / CTA --- */}
      <footer className="pb-32 px-6">
        <div className="max-w-7xl mx-auto bg-indigo-600 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
          {/* Animated background element */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-jaro mb-8 leading-none">Under the<br/>Hood</h2>
            <p className="font-jaldi text-indigo-100 text-xl max-w-xl mx-auto mb-12">
              The project is currently in the testing phase. You can explore the raw contract logic and frontend architecture on GitHub while I prep the final deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                    href="https://github.com/shreya27-dev/Crowd-Funding" 
                    className="inline-block bg-white text-indigo-600 px-12 py-5 rounded-2xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1"
                >
                    View Repository
                </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}