// "use client";

// import Link from "next/link";
// import Image from "next/image";

// type Props = {
//   slug: string;
//   title: string;
//   short: string;
//   thumb: string;
// };

// export default function ProjectCard({ slug, title, short, thumb }: Props) {
//   return (
//     <Link
//       href={`/projects/${slug}`}
//       className="group block mt-10"
//       aria-label={`View project ${title}`}
//     >
//       <div className="flex flex-col gap-4">
//         {/* Image Container */}
//         <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
//           <Image
//             src={thumb}
//             alt={title}
//             fill // Use fill for better responsive control in the aspect-ratio box
//             className="object-cover transform transition-transform duration-500 group-hover:scale-105"
//           />

//           {/* Desktop-only Overlay: Visible only on md screens and up */}
//           <div className="hidden md:flex absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-colors duration-300 items-end">
//             <div className="p-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
//               <h3 className="text-3xl font-jaro text-white font-bold">{title}</h3>
//               <p className="text-sm font-jaldi text-white/90 mt-1">{short}</p>
//             </div>
//           </div>
//         </div>

//         {/* Mobile-only Text: Visible only on small screens */}
//         <div className="md:hidden px-2">
//           <h3 className="text-[28px] font-jaro text-[#171717] leading-tight">
//             {title}
//           </h3>
//           <p className="text-[18px] font-jaldi text-gray-600 mt-1">
//             {short}
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";

type Props = {
  slug: string;
  title: string;
  short: string;
  thumb: string;
  isLocked?: boolean; // Accept the new prop
};

export default function ProjectCard({ slug, title, short, thumb, isLocked }: Props) {
  // Define the common content to avoid repeating JSX
  const CardContent = (
    <div className={`flex flex-col gap-4 ${isLocked ? "opacity-75" : ""}`}>
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
        <Image
          src={thumb}
          alt={title}
          fill
          className={`object-cover transform transition-transform duration-500 ${
            isLocked ? "grayscale" : "group-hover:scale-105"
          }`}
        />

        {/* Locked Overlay */}
        {isLocked && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px]">
            <div className="bg-white/90 p-3 rounded-full shadow-xl text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <p className="mt-2 text-white font-jaro tracking-widest text-sm uppercase">Coming Soon</p>
          </div>
        )}

        {/* Desktop-only Hover Overlay (Hidden if locked) */}
        {!isLocked && (
          <div className="hidden md:flex absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-colors duration-300 items-end">
            <div className="p-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-3xl font-jaro text-white font-bold">{title}</h3>
              <p className="text-sm font-jaldi text-white/90 mt-1">{short}</p>
            </div>
          </div>
        )}
      </div>

      {/* Text: Mobile and Shared Description */}
      <div className={`${!isLocked ? "md:hidden" : ""} px-2`}>
        <h3 className={`text-[28px] font-jaro leading-tight ${isLocked ? "text-gray-500" : "text-[#171717]"}`}>
          {title} {isLocked && "🔒"}
        </h3>
        <p className="text-[18px] font-jaldi text-gray-400 mt-1">
          {isLocked ? "Project in development" : short}
        </p>
      </div>
    </div>
  );

  // If locked, return a div; otherwise, return a Link
  if (isLocked) {
    return <div className="group block mt-10 cursor-not-allowed">{CardContent}</div>;
  }

  return (
    <Link href={`/projects/${slug}`} className="group block mt-10" aria-label={`View project ${title}`}>
      {CardContent}
    </Link>
  );
}

