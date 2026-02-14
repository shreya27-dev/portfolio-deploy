"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MovieDux() {
  return (
    <div className=" min-h-screen text-[#1a1a1a] md:mt-30">
      
    

      {/* --- SPLIT HERO SECTION --- */}
      <section className="pt-40 pb-20 px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: TEXT & CTA */}
          <div className="space-y-6">
            <div className="space-y-2">
              {/* Back Button positioned right behind/above the heading */}
              <Link 
                href="/" 
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                <span className="mr-2">←</span> Back to Portfolio
              </Link>
              
              <h1 className="text-7xl font-jaro leading-none tracking-tight">
                movieDux
              </h1>
              
              <p className="text-xl font-jaldi text-gray-500 leading-relaxed pt-4">
                A React-based discovery platform focusing on real-time data filtering 
                and persistent state management.
              </p>
            </div>

            <div className="pt-4 flex flex-col gap-8">
              <div className="flex gap-10">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-1">Stack</h4>
                  <p className="text-sm font-medium text-gray-700">React • Tailwind</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-1">Focus</h4>
                  <p className="text-sm font-medium text-gray-700">State & Logic</p>
                </div>
              </div>

              <a 
                href="https://movieeedux.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#1a1a1a] text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-600 transition-all shadow-lg group w-fit"
              >
                Watch movieDux Live 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT: COMPACT IMAGE */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <Image 
              src="/images/Moviedux.png" 
              alt="MovieDux Interface" 
              fill 
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- QUICK TECHNICAL SUMMARY --- */}
      <section className="max-w-6xl mx-auto px-8 py-16 border-t border-gray-50 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-jaro text-2xl mb-2 italic text-indigo-600">01. Logic</h3>
            <p className="font-jaldi text-gray-600 leading-relaxed text-sm">
                Used <code>.filter()</code> to create a reactive search system that updates 
                the UI instantly as the user types.
            </p>
          </div>
          <div>
            <h3 className="font-jaro text-2xl mb-2 italic text-indigo-600">02. State</h3>
            <p className="font-jaldi text-gray-600 leading-relaxed text-sm">
                Managed a global wishlist using <strong>useState</strong>, allowing seamless 
                interaction across different UI components.
            </p>
          </div>
          <div>
            <h3 className="font-jaro text-2xl mb-2 italic text-indigo-600">03. Storage</h3>
            <p className="font-jaldi text-gray-600 leading-relaxed text-sm">
                Implemented <strong>LocalStorage</strong> synchronization to ensure user 
                selections persist after browser restarts.
            </p>
          </div>
      </section>

    </div>
  );
}