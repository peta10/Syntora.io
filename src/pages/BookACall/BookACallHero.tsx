import React from "react";
import { motion } from "framer-motion"; // Import motion
import { Badge } from "@/components/ui/badge"; // Import Badge

// Updated description text
const descriptionText = "Please select the time that fits you or just text us in Telegram / WhatsApp";

// Updated heading text
const headingText = "Book a 15-min Call";

// Renamed component
export const BookACallHero = (): JSX.Element => {
  return (
    // Main hero container - Same styling as ContactHero but with responsive updates
    <div
      className="w-full bg-black relative flex items-center justify-center text-center min-h-[300px] sm:min-h-[400px] md:h-[521px] py-12 sm:py-16 overflow-hidden 
                 before:content-[''] before:absolute before:inset-0 before:bg-[url(/Contact/contactherodotted.png)] before:bg-repeat before:opacity-100 before:z-0 
                 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-32 sm:after:h-48 md:after:h-64 after:z-0 
                 after:bg-[url(/Contact/gradient.png)] after:bg-no-repeat after:bg-[position:center_bottom] after:bg-[size:100%_auto] 
                 after:[mask-image:linear-gradient(to_top,black_25%,transparent_75%)] after:pointer-events-none 
                 after:filter after:brightness-120"
    >
      {/* Content wrapper - Still z-10 to be above ::before and ::after */}
      <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4 px-4 sm:px-6 w-full max-w-2xl">

        {/* Meeting Badge - Styled like ContactHero */}
        <Badge
          variant="outline"
          className="bg-[#0d0d12] rounded-full border-[0.8px] border-[#1a1d31] px-4 py-1.5 flex items-center justify-center mb-3 sm:mb-4" // Responsive margin
        >
          <span className="font-inter font-normal text-[15px] text-transparent bg-clip-text bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA]">
            Meeting
          </span>
        </Badge>
        
        {/* Heading - Single h1, updated text and styling */}
        <div className="flex flex-col items-center"> {/* Removed mt-2 since badge adds margin */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white/90 leading-tight tracking-tight" // Responsive font size
            initial={{ opacity: 0, filter: 'blur(10px)' }} 
            animate={{ opacity: 1, filter: 'blur(0px)' }} 
            transition={{ duration: 1, ease: [0.12, 0.23, 0.5, 1], delay: 0.1 }} 
          >
            {headingText}
          </motion.h1>
        </div>

        {/* Description Text - Updated content */}
        <p className="mt-3 sm:mt-4 max-w-xl lg:max-w-2xl text-sm sm:text-base md:text-lg text-gray-300/80 leading-relaxed">
          {descriptionText}
        </p>
      </div>
    </div>
  );
};

// export default BookACallHero; // Optional default export 