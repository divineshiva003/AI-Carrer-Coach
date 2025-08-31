// // components/LoadingScreen.jsx
// "use client";
// import { motion } from "framer-motion";

// export default function LoadingScreen({ onFinish }) {
//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       animate={{ opacity: 0 }}
//       transition={{ duration: 1, delay: 2 }} // wait 2s, then fade out in 1s
//       onAnimationComplete={onFinish}
//       className="fixed inset-0 bg-black flex items-center justify-center z-50"
//     >
//       <motion.h1
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
//         className="text-cyan-400 text-4xl md:text-6xl font-extrabold tracking-widest drop-shadow-[0_0_20px_rgba(0,191,255,0.8)]"
//       >
//         APTIGEEKS <span className="text-white">2.0</span> LOADING...
//       </motion.h1>
//     </motion.div>
//   );
// }


// components/LoadingScreen.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onFinish) onFinish();
    }, 2000); // show for 2s
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/logo1.png"
          alt="APTIGEEKS Logo"
          width={120}
          height={120}
          className="mb-6"
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-white text-3xl font-bold tracking-widest"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        APTIGEEKS 2.0
      </motion.h1>

      {/* Loading Dots */}
      <motion.div
        className="flex space-x-2 mt-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
              repeat: Infinity,
            },
          },
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-2 h-2 bg-white rounded-full"
            variants={{
              hidden: { opacity: 0.3, y: 0 },
              visible: { opacity: 1, y: -5 },
            }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}
      </motion.div>

      {/* Sub-text */}
      <p className="text-gray-400 mt-4 text-sm">Loading, please wait...</p>
    </motion.div>
  );
}
