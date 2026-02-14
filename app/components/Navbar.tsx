// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation"; // To detect current page
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [isShrunk, setIsShrunk] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const pathname = usePathname(); // Get current route

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsShrunk(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // FIX: Prevent background scrolling when mobile menu is open
//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//   }, [isMobileMenuOpen]);

//   return (
//     <nav
//       className={`fixed left-0 w-full z-50 flex items-center justify-between transition-all duration-300 ${
//         isShrunk
//           ? "top-0 py-1 px-6 md:px-10 bg-white/90 backdrop-blur-md shadow-sm h-25"
//           : "top-4 px-6 md:px-20 bg-transparent"
//       }`}
//     >
//       {/* Left: Y Logo (Clicking logo now also goes Home) */}
//       <Link href="/" className={`transition-transform duration-300 ${isShrunk ? "w-8 h-8" : "w-10 h-10 md:w-12 md:h-12"}`}>
//         <Image
//           src="/images/y.svg"
//           alt="Y Logo"
//           width={43}
//           height={71}
//           className="transition-transform duration-500 hover:rotate-12 w-full h-full object-contain"
//         />
//       </Link>

//       {/* Center: Desktop Name (Hidden on Mobile) */}
//       <div className={`hidden md:flex flex-col items-center text-center transition-all duration-300 ${isShrunk ? "scale-50 opacity-0 hidden" : "scale-100"}`}>
//         <h1 className="font-jaro text-[#171717] flex items-center gap-1 text-[100px]">
//           Shre
//           <span className="relative inline-block mt-16 w-[62px] h-[103px]">
//             <Image src="/images/y.svg" alt="Y" fill className="object-contain" />
//           </span>
//           a&nbsp;Golatkar
//         </h1>
//         <p className="text-[25px] font-jaldi font-bold text-[#405658] -mt-4">
//           UI UX Designer / Frontend Developer
//         </p>
//       </div>

//       {/* Right Side */}
//       <div className="flex items-center">
//         {/* Desktop Links */}
//         <div className={`hidden md:flex gap-8 font-jaldi font-bold text-[#405658] ${isShrunk ? "text-lg" : "text-2xl"}`}>
//           {/* Always show Home if not on home page */}
//           {pathname !== "/" && <Link href="/" className="hover:text-black transition">Home</Link>}
//           <Link href="/about" className={`hover:text-black transition ${pathname === "/about" ? "text-black border-b-2 border-black" : ""}`}>About</Link>
//           <Link href="#work" className="hover:text-black transition">Work</Link>
//         </div>

//         {/* Mobile Hamburger/Close Icon */}
//         <button 
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="md:hidden p-2 text-[#34495e] z-[60] focus:outline-none"
//         >
//           {isMobileMenuOpen ? (
//             <X size={32} strokeWidth={2.5} />
//           ) : (
//             <Menu size={32} strokeWidth={2.5} />
//           )}
//         </button>
//       </div>

//       {/* Mobile Overlay Menu */}
//       <div className={`fixed inset-0 bg-white z-[55] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
//         isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-full"
//       }`}>
//         <div className="flex flex-col gap-10 text-center">
//           {/* Mobile Home Link */}
//           {pathname !== "/" && (
//             <Link 
//               href="/" 
//               onClick={() => setIsMobileMenuOpen(false)} 
//               className="text-5xl font-jaro text-[#171717] hover:scale-110 transition"
//             >
//               Home
//             </Link>
//           )}
//           <Link 
//             href="/about" 
//             onClick={() => setIsMobileMenuOpen(false)} 
//             className={`text-5xl font-jaro text-[#171717] hover:scale-110 transition ${pathname === "/about" ? "underline" : ""}`}
//           >
//             About
//           </Link>
//           <Link 
//             href="/#work" // Adjusted to navigate correctly from About page
//             onClick={() => setIsMobileMenuOpen(false)} 
//             className="text-5xl font-jaro text-[#171717] hover:scale-110 transition"
//           >
//             Work
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }




// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation"; 
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [isShrunk, setIsShrunk] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const pathname = usePathname(); 

//   // Handle Navbar Background on Scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsShrunk(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // FIX: Prevent background scrolling and "stuck" nav feeling
//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     // Cleanup to ensure scroll is restored on unmount
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isMobileMenuOpen]);

//   return (
//     <nav
//       className={`fixed left-0 w-full z-[100] flex items-center justify-between transition-all duration-300 ${
//         isShrunk
//           ? "top-0 py-1 px-6 md:px-10 bg-white/90 backdrop-blur-md shadow-sm h-20"
//           : "top-4 px-6 md:px-20 bg-transparent"
//       }`}
//     >
//       {/* Left: Logo */}
//       <Link 
//         href="/" 
//         className={`transition-transform duration-300 ${isShrunk ? "w-8 h-8" : "w-10 h-10 md:w-12 md:h-12"}`}
//         onClick={() => setIsMobileMenuOpen(false)}
//       >
//         <Image
//           src="/images/y.svg"
//           alt="Y Logo"
//           width={43}
//           height={71}
//           className="transition-transform duration-500 hover:rotate-12 w-full h-full object-contain"
//         />
//       </Link>

//       {/* Center: Desktop Branding */}
//       <div className={`hidden md:flex flex-col items-center text-center transition-all duration-300 ${isShrunk ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"}`}>
//         <h1 className="font-jaro text-[#171717] flex items-center gap-1 text-[80px] lg:text-[100px]">
//           Shre
//           <span className="relative inline-block mt-12 w-[50px] h-[80px] lg:w-[62px] lg:h-[103px]">
//             <Image src="/images/y.svg" alt="Y" fill className="object-contain" />
//           </span>
//           a&nbsp;Golatkar
//         </h1>
//         <p className="text-xl lg:text-[25px] font-jaldi font-bold text-[#405658] -mt-4">
//           UI UX Designer / Frontend Developer
//         </p>
//       </div>

//       {/* Right Side: Navigation */}
//       <div className="flex items-center">
//         {/* Desktop Links */}
//         <div className={`hidden md:flex items-center gap-8 font-jaldi font-bold text-[#405658] ${isShrunk ? "text-lg" : "text-2xl"}`}>
//           {pathname !== "/" && (
//             <Link href="/" className="hover:text-black transition">Home</Link>
//           )}
//           <Link 
//             href="/about" 
//             className={`hover:text-black transition ${pathname === "/about" ? "text-blue-600" : ""}`}
//           >
//             About
//           </Link>
//           <Link href="/#work" className="hover:text-black transition">Work</Link>
//         </div>

//         {/* Mobile Hamburger Toggle */}
//         <button 
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="md:hidden p-2 text-[#34495e] z-[999] focus:outline-none relative"
//           aria-label="Toggle menu"
//         >
//           {isMobileMenuOpen ? (
//             <X size={32} strokeWidth={2.5} className="text-black" />
//           ) : (
//             <Menu size={32} strokeWidth={2.5} />
//           )}
//         </button>
//       </div>

//       {/* Mobile Overlay Menu */}
//       <div className={`fixed inset-0 top-0 left-0 w-full h-full bg-white z-[990] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
//         isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-full"
//       }`}>
//         <div className="flex flex-col gap-8 text-center">
//           {/* Mobile Home Link */}
//           {pathname !== "/" && (
//             <Link 
//               href="/" 
//               onClick={() => setIsMobileMenuOpen(false)} 
//               className="text-5xl font-jaro text-[#171717] hover:text-blue-600 transition"
//             >
//               Home
//             </Link>
//           )}
//           <Link 
//             href="/about" 
//             onClick={() => setIsMobileMenuOpen(false)} 
//             className={`text-5xl font-jaro text-[#171717] hover:text-blue-600 transition ${pathname === "/about" ? "text-blue-600" : ""}`}
//           >
//             About
//           </Link>
//           <Link href="/#work" className="hover:text-black transition">Work</Link>


// <Link 
//   href="/#work" 
//   onClick={() => setIsMobileMenuOpen(false)} 
//   className="text-5xl font-jaro text-[#171717] hover:text-blue-600 transition"
// >
//   Work
// </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }'


"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); 

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed left-0 w-full z-[100] flex items-center justify-between transition-all duration-300 ${
      isShrunk ? "top-0 py-1 px-6 md:px-10 bg-white/90 backdrop-blur-md shadow-sm h-20" : "top-4 px-6 md:px-20 bg-transparent"
    }`}>
      
      {/* Logo */}
      <Link href="/" className={`transition-transform duration-300 ${isShrunk ? "w-8 h-8" : "w-10 h-10 md:w-12 md:h-12"}`} onClick={() => setIsMobileMenuOpen(false)}>
        <Image src="/images/y.svg" alt="Logo" width={43} height={71} className="hover:rotate-12 transition-transform duration-500 w-full h-full object-contain" />
      </Link>

      {/* Desktop Center Branding */}
      <div className={`hidden md:flex flex-col items-center transition-all duration-300 ${isShrunk ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"}`}>
        <h1 className="font-jaro text-[#171717] flex items-center gap-1 text-[80px] lg:text-[100px]">
          Shre
          <span className="relative inline-block mt-12 w-[50px] h-[80px] lg:w-[62px] lg:h-[103px]">
            <Image src="/images/y.svg" alt="Y" fill className="object-contain" />
          </span>
          a&nbsp;Golatkar
        </h1>
        <p className="text-xl lg:text-[25px] font-jaldi font-bold text-[#405658] -mt-4">UI UX Designer / Frontend Developer</p>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center">
        <div className={`hidden md:flex items-center gap-8 font-jaldi font-bold text-[#405658] ${isShrunk ? "text-lg" : "text-2xl"}`}>
          {pathname !== "/" && <Link href="/" className="hover:text-black">Home</Link>}
          <Link href="/about" className={`hover:text-black ${pathname === "/about" ? "text-blue-600" : ""}`}>About</Link>
          <Link href="/#work" className="hover:text-black">Work</Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 z-[999] relative">
          {isMobileMenuOpen ? <X size={32} strokeWidth={2.5} className="text-black" /> : <Menu size={32} strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[990] flex flex-col items-center justify-center transition-all duration-500 ${isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-full"}`}>
        <div className="flex flex-col gap-10 text-center">
          {pathname !== "/" && <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-5xl font-jaro text-[#171717]">Home</Link>}
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={`text-5xl font-jaro text-[#171717] ${pathname === "/about" ? "text-blue-600" : ""}`}>About</Link>
          <Link href="/#work" onClick={() => setIsMobileMenuOpen(false)} className="text-5xl font-jaro text-[#171717]">Work</Link>
        </div>
      </div>
    </nav>
  );
}