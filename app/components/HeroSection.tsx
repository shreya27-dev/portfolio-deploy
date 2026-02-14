// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-[100px] md:pt-[300px] pb-12 min-h-screen overflow-hidden">
      
//       {/* LEFT SIDE: Text Content */}
//       <div className="flex-1 z-10 space-y-6 md:space-y-8 md:ml-12 md: w-full">
        
//         {/* Avatar and Heading Group */}
//         <div className="flex items-center justify-between md:justify-start gap-4 md:gap-10">
//           <h1 className="text-[42px] md:text-[60px] font-jaro text-[#171717] leading-[1.1]">
//             Hey, I’m <span className="text-[#171717]">Shreya</span>
//           </h1>

//           {/* Avatar with Background Circle */}
//           <div className="relative shrink-0">
//             <div className="absolute inset-0 m-auto w-[70px] h-[70px] md:w-[130px] md:h-[130px] rounded-full animate-colorShift z-0" />
//             <div className="relative z-10 w-[80px] h-[80px] md:w-[150px] md:h-[150px]">
//                 <Image
//                 src="/images/avatar.svg"
//                 alt="Shreya avatar"
//                 fill
//                 className="object-contain mt-2"
//                 />
//             </div>
//           </div>
//         </div>

//         {/* Description */}
//         <p className="max-w-[700px] text-[22px] md:text-[40px] font-jaldi font-bold leading-tight md:leading-snug text-[#6D6D6D]">
//           <a href="#about" className="underline decoration-[#6D6D6D]/30">
//             A designer and a web3 degen.
//           </a>{" "}
//           Get to know more about me. Let me turn your ideas into{" "}
//           <span className="underline decoration-[#405658]/30 font-bold text-[#171717]">
//             designs that convert.
//           </span>
//         </p>

//         {/* Experience Badges - Fixed for Single Line */}
//         <div className="flex flex-row items-center gap-2 md:gap-4 pt-4 whitespace-nowrap overflow-visible">
//           <p className="text-lg md:text-[24px] font-jaldi text-[#171717]">
//             <span className="text-[#276ef1] font-bold">2+ years</span> of
//           </p>

//           <span className="inline-block bg-[#E3B930] text-[#906E00] font-jaldi font-bold text-[16px] md:text-3xl px-3 md:px-6 py-1 md:py-2 rounded-xl border-2 border-dashed border-[#A88614] rotate-[-5deg] shadow-sm">
//             DESIGNING
//           </span>

//           <span className="text-xl font-jaldi text-[#6D6D6D]">&</span>

//           <span className="inline-block bg-[#A974E3] text-[#431386] font-jaldi font-bold text-[16px] md:text-3xl px-3 md:px-6 py-1 md:py-2 rounded-xl border-2 border-dashed border-[#7B30E3] rotate-[5deg] shadow-sm">
//             CODING
//           </span>
//         </div>
//       </div>

//       {/* RIGHT SIDE: The Collage Image */}
//       <div className="mt-12 md:mt-0 flex justify-end items-end md:h-full w-full md:w-auto">
//         <Image
//           src="/images/Print Fair (1).svg"
//           alt="Hero Collage"
//           width={800}
//           height={800}
//           className="w-full h-auto max-w-[400px] md:max-w-none object-contain md:mr-[-64px] lg:mr-[-80px] xl:mr-[-100px] translate-y-4"
//         />
//       </div>

//     </section>
//   );
// }



import Image from "next/image";

export default function Hero() {
  return (
    // Changed min-h-screen to min-h-[auto] for mobile to collapse extra space
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-24 md:pt-[300px] pb-12 min-h-[auto] md:min-h-screen overflow-hidden">
      
      {/* LEFT SIDE: Text Content */}
      <div className="flex-1 z-10 space-y-6 md:space-y-8 md:ml-12 md:mb-20 w-full">
        
        {/* Avatar and Heading Group - Adjusted for better mobile grouping */}
        <div className="flex items-center justify-between md:justify-start gap-4">
          <h1 className="text-[36px] md:text-[60px] font-jaro text-[#171717] leading-tight whitespace-nowrap">
            Hey, I’m <span className="text-[#171717]">Shreya</span>
          </h1>

          {/* Avatar - Slightly smaller for mobile to save vertical space */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 m-auto w-[60px] h-[60px] md:w-[130px] md:h-[130px] rounded-full animate-colorShift z-0" />
            <div className="relative z-10 w-[70px] h-[70px] md:w-[150px] md:h-[150px]">
                <Image
                src="/images/avatar.svg"
                alt="Shreya avatar"
                fill
                className="object-contain"
                priority
                />
            </div>
          </div>
        </div>

        {/* Description - Adjusted leading and text size for readability */}
        {/* Updated Description */}
<div className="max-w-[700px]">
  <p className="text-[20px] md:text-[36px] font-jaldi font-bold leading-[1.2] md:leading-snug text-[#6D6D6D]">
    A <span className="text-[#171717]">UI UX Designer</span> and 
    <span className="text-[#171717]"> Frontend Developer</span>. 
    I bridge the gap between aesthetic design and functional code to turn your ideas into{" "}
    <span className="underline decoration-[#405658]/30 font-bold text-[#171717]">
      designs that convert.
    </span>
  </p>
</div>

        {/* Experience Badges - Wrapped for mobile, single line for desktop */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <p className="text-lg md:text-[24px] font-jaldi text-[#171717]">
            <span className="text-[#276ef1] font-bold">2+ years</span> of
          </p>

          <div className="flex items-center gap-3">
            <span className="inline-block bg-[#E3B930] text-[#906E00] font-jaldi font-bold text-sm md:text-3xl px-4 py-1 rounded-xl border-2 border-dashed border-[#A88614] rotate-[-5deg] shadow-sm">
              DESIGNING
            </span>

            <span className="text-xl font-jaldi text-[#6D6D6D]">&</span>

            <span className="inline-block bg-[#A974E3] text-[#431386] font-jaldi font-bold text-sm md:text-3xl px-4 py-1 rounded-xl border-2 border-dashed border-[#7B30E3] rotate-[5deg] shadow-sm">
              CODING
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Hidden on mobile to remove whitespace gap */}
      <div className="hidden md:flex mt-12 md:mt-0 justify-end items-end md:h-full w-full md:w-auto">
        <Image
          src="/images/Print Fair (1).svg"
          alt="Hero Collage"
          width={800}
          height={800}
          className="w-full h-auto max-w-[400px] md:max-w-none object-contain md:mr-[-64px] lg:mr-[-80px] xl:mr-[-100px] translate-y-4"
        />
      </div>

    </section>
  );
}