"use client";

import Image from "next/image";

export default function FooterSection() {
  return (
    <section className="w-full pt-20 md:pt-28 pb-10 md:pb-16 px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

        {/* LEFT — BIG TEXT */}
        <div className="space-y-0 md:space-y-4">
          <h1 className="text-[60px] md:text-[120px] font-jaro leading-[0.9] md:leading-[1.05] tracking-tight">
            Let’s create
          </h1>
          <h1 className="text-[60px] md:text-[120px] font-jaro leading-[0.9] md:leading-[1.05] tracking-tight">
            something
          </h1>
          <h1 className="relative text-[60px] md:text-[120px] font-jaro leading-[0.9] md:leading-[1.05] tracking-tight w-fit">
            extraordinary
            <span className="absolute left-0 bottom-[-10px] md:bottom-[-25px] w-full md:w-[600px]">
              <Image
                src="/images/underline.svg"
                alt=""
                width={600}
                height={40}
                className="select-none pointer-events-none w-full"
              />
            </span>
          </h1>
          <h1 className="text-[60px] md:text-[120px] font-jaro leading-[0.9] md:leading-[1.05] tracking-tight pt-4 md:pt-0">
            together.
          </h1>
        </div>

        {/* RIGHT — PROFILE + CONTACT */}
        <div className="flex flex-col md:ml-20 mt-10 md:mt-0">
          {/* Avatar + Name */}
          <div className="flex items-center md:items-start gap-4">
            <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] relative">
              <Image
                src="/images/avatar.svg"
                alt="Avatar"
                fill
                className="object-contain"
              />
            </div>

            <div className="space-y-1 md:space-y-3 md:mt-8">
              <h2 className="text-[22px] md:text-[25px] font-jaldi text-[#405658] font-semibold">Shreya Golatkar</h2>
              <p className="text-[14px] text-black/70">
                UI UX Designer / Frontend Developer
              </p>
              {/* Icons row */}
              <div className="flex gap-3 pt-1">
                <Image src="/images/mail.svg" alt="" width={22} height={22} />
                <Image src="/images/behance.svg" alt="" width={22} height={22} />
                <Image src="/images/website.svg" alt="" width={22} height={22} />
              </div>
            </div>
          </div>

          {/* CONTACT SECTION */}
          <div className="mt-10 md:mt-6 md:ml-42 font-jaldi">
            <p className="text-[20px] md:text-[25px] font-bold text-[#405658]">Contact me</p>
            <p className="text-[22px] md:text-[30px] text-black/70 mt-1 break-words">
              golatkarshreyax@gmail.com
            </p>
          </div>

          {/* TAGLINE */}
          <p className="text-[28px] md:text-[30px] font-regular leading-tight max-w-md mt-12 md:mt-30 md:ml-20 font-jaro">
            Hit me up if you’re looking for a fast, reliable Product designer who can bring your vision to life
          </p>

          {/* LinkedIn Icon */}
          <a href="#" className="mt-6 md:ml-20 inline-block w-fit">
            <Image
              src="/images/linkedin.svg"
              alt="LinkedIn"
              width={45}
              height={45}
            />
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full border-t mt-20 md:mt-24 pt-8 flex items-center justify-between text-[#C4C4C4] font-jaro">
        
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Image src="/images/y.svg" alt="" width={35} height={35} className="md:w-[45px] md:h-[45px]" />
        </div>

        {/* Center: Copyright + Love (Stacked but grouped in center) */}
        <div className="flex flex-col items-center text-center">
          <p className="text-[14px] md:text-[30px] font-semibold leading-tight">
            Copyright © Shreya
          </p>
          <p className="text-[12px] md:text-[20px] leading-tight">
            Built with love ♡
          </p>
        </div>

        {/* Right: Created By */}
        <div className="flex-shrink-0 text-right">
          <p className="text-[12px] md:text-[18px]">
            Created by ~ Shreya Golatkar
          </p>
        </div>
        
      </div>
    </section>
  );
}