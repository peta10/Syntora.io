import { CheckIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, animate, Variants } from 'framer-motion';
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

// Define the integration features data
const integrationFeatures = [
  "Sales Automation Integration",
  "Lead Nurturing Integration",
  "AI Receptionist Integration",
  "Review & Referral Engine",
];

// Define the specific color icons to use
const specificIcons = [
  "white.png",
  "yellow.png",
  "red.png",
  "purple.png",
  "pink.png",
  "orange.png",
  "lightpurple.png",
  "green.png",
  // "blue.png" // 9th icon, not used in 4x4 layout
];

// REVERT: Re-create appIcons for bottom row
const appIcons = specificIcons.slice(0, 4).map((filename, index) => ({
  id: index + 1,
  src: `/Infra/${filename}`,
  alt: `Integration icon ${index + 1}`,
}));

// REVERT: Re-create appIconsSecondRow for top row
const appIconsSecondRow = specificIcons.slice(4, 8).map((filename, index) => ({
  id: index + 5, 
  src: `/Infra/${filename}`,
  alt: `Integration icon ${index + 5}`,
}));

// Define feature cards data - UPDATED with SEO keywords
const featureCards = [
  {
    id: 1,
    title: "Sales Workflow Automation", // UPDATED
    image: "/Infra/image-5.png", 
    description: [
      "Optimize your sales process with", // UPDATED
      "AI-driven insights and automated",
      "workflow solutions."
    ],
  },
  {
    id: 2,
    title: "Automated Lead Nurturing", // UPDATED
    image: "/Infra/image-4.png", 
    description: [
      "Engage leads instantly and advance", // UPDATED
      "deals using automated nurturing",
      "workflows."
    ],
  },
  {
    id: 3,
    title: "AI Receptionist", // UPDATED
    image: "/Infra/image-3.png", 
    description: [
      "Enhance customer service with an AI", // UPDATED
      "receptionist providing 24/7",
      "automated support."
    ],
  },
  {
    id: 4,
    title: "Review & Referral Engine", // UPDATED
    image: "/Infra/image-2.png", 
    description: [
      "Automate review requests and referral", // UPDATED
      "generation to boost your business",
      "process efficiency."
    ],
  },
];

// Define animation variants for the feature cards (similar to Bespoke.tsx)
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Stagger variant for the feature card container
const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15, // Adjust stagger timing if needed
        },
    },
};

// RENAMED COMPONENT
export const InfraSection = (): JSX.Element => {
  // Animation setup for two rows
  const duration = 7; // CHANGED: Decreased from 25 to speed up animation
  const xTop = useMotionValue(0);
  const xBottom = useMotionValue(0);
  const contentTopRef = useRef<HTMLDivElement>(null);
  const contentBottomRef = useRef<HTMLDivElement>(null);

  // Effect for TOP row (scroll right)
  useEffect(() => {
    const contentElement = contentTopRef.current;
    if (!contentElement) return;
    const contentWidth = contentElement.offsetWidth / 2;
    let animationControls: ReturnType<typeof animate> | undefined;
    if (contentWidth > 0) {
      xTop.set(-contentWidth); // Start position for rightward scroll
      animationControls = animate(xTop, [-contentWidth, 0], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
      });
    }
    return () => animationControls?.stop();
  }, [duration, xTop]);

  // Effect for BOTTOM row (scroll left)
  useEffect(() => {
    const contentElement = contentBottomRef.current;
    if (!contentElement) return;
    const contentWidth = contentElement.offsetWidth / 2;
    let animationControls: ReturnType<typeof animate> | undefined;
    if (contentWidth > 0) {
      xBottom.set(0); // Start position for leftward scroll
      animationControls = animate(xBottom, [0, -contentWidth], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
      });
    }
    return () => animationControls?.stop();
  }, [duration, xBottom]);

  return (
    <div className="w-full bg-black text-white py-16 md:py-24 lg:py-32">
      <div className="w-full max-w-[1200px] mx-auto px-4 flex flex-col gap-12 md:gap-20">
        {/* Top Section: Mobile-first layout */}
        <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Dotted Background Image - Reduced opacity */}
          <img 
            src="/Infra/dottedinfra.png"
            alt="Dotted background pattern for Syntora automation infrastructure"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 pointer-events-none"
          />

          {/* Left content section - Center on mobile, left-align on desktop */}
          <div className="relative z-10 flex flex-col w-full lg:w-1/2 gap-6 md:gap-8 items-center lg:items-start text-center lg:text-left">
            <Badge
              variant="outline"
              className="w-fit bg-[#0d0d12] hover:bg-[#0d0d12] rounded-full px-4 py-1.5 border-[#1a1d31] text-sm md:text-base" 
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA]">
                Infrastructure
              </span>
            </Badge>

            <div className="space-y-1 font-poppins"> 
              <h2 className="text-[#ffffffde] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                Automation
              </h2>
              <h2 className="text-[#ffffffde] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                Infrastructure
              </h2>
            </div>

            <p className="text-[#7b7c8c] text-base md:text-lg leading-relaxed font-inter max-w-md lg:max-w-none"> 
              We build robust automation infrastructure, integrating essential tools to power your business growth systems.
            </p>

            <div className="flex flex-col gap-4 items-start mt-2">
              {integrationFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA] flex items-center justify-center">
                    <CheckIcon className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-[#7b7c8c] text-base md:text-lg font-inter">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right content section - Animation circle */}
          <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-center my-6 lg:my-0">
            {/* Main circle boundary - mobile-responsive sizing */}
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full p-1 bg-gradient-to-br from-white/20 via-transparent to-white/20">
              {/* Rotating background glow image */}
              <img 
                src="/Infra/image-1.png" 
                alt="Rotating glow representing Syntora systems integration capabilities"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto min-w-full min-h-full scale-125 object-cover opacity-100 mix-blend-screen pointer-events-none animate-spin-slow" 
              />
              {/* White inner glow element */}
              <div 
                className="absolute inset-1 rounded-full shadow-[0_0_5px_3px_rgba(255,255,255,0.9)] pointer-events-none"
              ></div>
              {/* Inner dark circle */}
              <div 
                className="relative z-10 w-full h-full rounded-full p-2 md:p-4 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(13,13,18,1)_0%,rgba(0,0,0,1)_100%)] flex flex-col items-center justify-center gap-4 md:gap-6" 
                style={{ clipPath: 'circle(50% at 50% 50%)' }}
              >
                {/* Top Row Container with horizontal scroll (Rightward) */}
                <div className="w-full overflow-hidden">
                   <motion.div 
                     ref={contentTopRef} 
                     className="flex flex-shrink-0 gap-3 md:gap-4" 
                     style={{ x: xTop }}
                   >
                     {[...appIconsSecondRow, ...appIconsSecondRow].map((icon, index) => (
                        <div
                            key={`${icon.id}-top-${index}`}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl md:rounded-2xl border border-[#1a1d31]/50 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(26,29,49,0.7)_0%,rgba(0,0,0,0.7)_100%)] flex items-center justify-center flex-shrink-0"
                        >
                            <img
                                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" 
                                alt={icon.alt}
                                src={icon.src}
                            />
                        </div>
                     ))}
                   </motion.div>
                </div>
               {/* Bottom Row Container with horizontal scroll (Leftward) */}
                <div className="w-full overflow-hidden">
                   <motion.div 
                     ref={contentBottomRef} 
                     className="flex flex-shrink-0 gap-3 md:gap-4" 
                     style={{ x: xBottom }}
                   >
                     {[...appIcons, ...appIcons].map((icon, index) => (
                        <div
                            key={`${icon.id}-bottom-${index}`}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl md:rounded-2xl border border-[#1a1d31]/50 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(26,29,49,0.7)_0%,rgba(0,0,0,0.7)_100%)] flex items-center justify-center flex-shrink-0"
                        >
                            <img
                                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" 
                                alt={icon.alt}
                                src={icon.src}
                            />
                        </div>
                     ))}
                   </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Section - Mobile centered grid */}
        <motion.div
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featureCards.map((card) => (
            <motion.div key={card.id} variants={cardVariants} className="w-full max-w-[280px]">
              <Card className="border-none bg-transparent p-0 shadow-none h-full">
                <CardContent className="p-0 h-full">
                  <div className="flex flex-col items-center sm:items-start gap-5 h-full text-center sm:text-left">
                    <img 
                      src={card.image} 
                      alt={`${card.title} automation icon`}
                      className="w-[60px] h-[60px] object-contain"
                    />
                    <div className="flex flex-col gap-2 flex-grow">
                      <h3 className="font-medium text-xl text-[#ffffffde] leading-tight font-poppins">
                        {card.title}
                      </h3>
                      <div className="text-[#7b7c8c] text-sm leading-normal font-inter">
                        {card.description.map((line, index) => (
                          <span key={index} className="block">{line}</span> 
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}; 