import React from "react";
import { Badge } from "@/components/ui/badge"; // Assuming badge component path
import { motion } from "framer-motion"; // Import motion

// Combined description text from the original textGroups
const descriptionText = "Learn how Syntora began with a vision to empower every business through intelligent, tailor‑made automation.";

// Main headings from the original data
const headings = [
  "How It All Started",
];

export const AboutHero = (): JSX.Element => {
  return (
    // Main hero container - Layered background for dot opacity control
    <div
      className="w-full bg-black relative flex items-center justify-center text-center h-[300px] overflow-hidden 
                 before:content-[''] before:absolute before:inset-0 before:bg-[url(/Contact/contactherodotted.png)] before:bg-repeat before:opacity-100 before:z-0 
                 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-64 after:z-0 
                 after:bg-[url(/Contact/gradient.png)] after:bg-no-repeat after:bg-[position:center_bottom] after:bg-[size:100%_auto] 
                 after:[mask-image:linear-gradient(to_top,black_25%,transparent_75%)] after:pointer-events-none 
                 after:filter after:brightness-120" // Changed dot opacity to 100%
      style={{
        // backgroundImage removed from here
        // backgroundRepeat removed from here
      }}
    >
      {/* Content wrapper - Still z-10 to be above ::before and ::after */}
      <div className="relative z-10 flex flex-col items-center gap-4 px-4">

        {/* Contact Badge - Styled like FAQ badge */}
        <Badge
          variant="outline"
          className="bg-[#0d0d12] rounded-full border-[0.8px] border-[#1a1d31] px-4 py-1.5 flex items-center justify-center" // Matched styles from FAQ badge (excluding position/fixed size)
        >
          {/* Inner span for gradient text */}
          <span className="font-inter font-normal text-[15px] text-transparent bg-clip-text bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA]">
            About
          </span>
        </Badge>

        {/* Headings - Updated font size, opacity, and added animation */}
        <div className="flex flex-col items-center mt-2"> 
          <motion.h1 
            className="text-5xl md:text-5xl lg:text-5xl font-semibold text-white/90 leading-tight tracking-tight"
            initial={{ opacity: 0, filter: 'blur(10px)' }} // Initial state from image
            animate={{ opacity: 1, filter: 'blur(0px)' }} // Animate state
            transition={{ duration: 1, ease: [0.12, 0.23, 0.5, 1], delay: 0.1 }} // Transition from image
          >
            {headings[0]}
          </motion.h1>
          <motion.h1 
            className="text-5xl md:text-5xl lg:text-5xl font-semibold text-white/90 leading-tight tracking-tight mt-1 md:mt-2"
            initial={{ opacity: 0, filter: 'blur(10px)' }} // Initial state from image
            animate={{ opacity: 1, filter: 'blur(0px)' }} // Animate state
            transition={{ duration: 1, ease: [0.12, 0.23, 0.5, 1], delay: 0.1 }} // Transition from image - same delay for simultaneous animation
          >
            {headings[1]}
          </motion.h1>
        </div>

        {/* Description Text */}
        <p className="mt-4 max-w-xl lg:max-w-2xl text-base md:text-lg text-gray-300/80 leading-relaxed"> {/* Adjusted opacity */}
          {descriptionText}
        </p>
      </div>
    </div>
  );
};

// export default ContactHero; // Exporting named component 