"use client";

// import Link from "next/link";
// import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import logo from "../public/logo1.png";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    const handleScroll = () => {
      const scrollPostion = window.scrollY;
      console.log(scrollPostion);
      const scrollThreshold = 150;

      if (scrollPostion > scrollThreshold) {
        imageElement.classList.add("scrolled");
      }
      else{
        imageElement.classList.remove("scrolled");
      }
      
    };

    window.addEventListener("scroll",handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="relative bg-muted/50 from-gray-900 to-black text-white py-24">
     <div className="container mx-auto flex flex-col items-center text-center px-6">
        
         {/* Logo Animation */}
         <motion.div
           initial={{ opacity: 0, scale: 0.7 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="mb-6"
         >
           <Image
             src={logo}
             alt="AptiGeeks 2.0 Logo"
             width={300}
             height={300}
             className="drop-shadow-[0_0_20px_rgba(0,191,255,0.8)]"
             priority
           />
         </motion.div>

         {/* Heading */}
         <motion.h1
           initial={{ opacity: 0, y: -50 }}
           animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Welcome to <span className="text-cyan-400">APTIGEEKS 2.0</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          Your AI-powered career coach to crack aptitude, reasoning, and coding.
        </motion.p>

        {/* CTA Button */}
         <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.9 }}
         className="mt-8"
        >
          <a
            href="#features"
            className="px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-semibold shadow-lg shadow-cyan-500/50 transition-all"
          >
            Get Started
          </a>
        </motion.div>
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.9 }}
         className="mt-8"
        >
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
             <Image
               src={"/Untitled design.png"}
               width={1380}
               height={720}
               alt="Dashboard Preview"
               className="rounded-lg shadow-2xl border mx-auto"
               priority
             />
           </div>
         </div>
         </motion.div>
      </div>
    </section>
    
  );
};

export default HeroSection;

// components/Hero.jsx
// components/Hero.jsx
// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import logo from "../public/logo1.png";




// export default function Hero() {
//   const HeroSection = () => {
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const imageElement = imageRef.current;
//     const handleScroll = () => {
//       const scrollPostion = window.scrollY;
//       console.log(scrollPostion);
//       const scrollThreshold = 150;

//       if (scrollPostion > scrollThreshold) {
//         imageElement.classList.add("scrolled");
//       }
//       else{
//         imageElement.classList.remove("scrolled");
//       }
      
//     };

//     window.addEventListener("scroll",handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
// }
//   return (
//     <section className="relative bg-muted/50 from-gray-900 to-black text-white py-24">
//       <div className="container mx-auto flex flex-col items-center text-center px-6">
        
//         {/* Logo Animation */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.7 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="mb-6"
//         >
//           <Image
//             src={logo}
//             alt="AptiGeeks 2.0 Logo"
//             width={300}
//             height={300}
//             className="drop-shadow-[0_0_20px_rgba(0,191,255,0.8)]"
//             priority
//           />
//         </motion.div>

//         {/* Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="text-4xl md:text-6xl font-extrabold tracking-tight"
//         >
//           Welcome to <span className="text-cyan-400">APTIGEEKS 2.0</span>
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
//         >
//           Your AI-powered career coach to crack aptitude, reasoning, and coding.
//         </motion.p>

//         {/* CTA Button */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 0.9 }}
//           className="mt-8"
//         >
//           <a
//             href="#features"
//             className="px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-semibold shadow-lg shadow-cyan-500/50 transition-all"
//           >
//             Get Started
//           </a>
//         </motion.div>
//         <div className="hero-image-wrapper mt-5 md:mt-0">
//           <div ref={imageRef} className="hero-image">
//              <Image
//                src={"/Untitled design.png"}
//                width={1280}
//                height={720}
//                alt="Dashboard Preview"
//                className="rounded-lg shadow-2xl border mx-auto"
//                priority
//              />
//            </div>
//          </div>
//       </div>
//     </section>
//   );
// }