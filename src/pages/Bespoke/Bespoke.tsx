import { motion } from "framer-motion";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { useState } from "react";

// Define card data for mapping
const topRowCards = [
  {
    id: 1,
    title: "Real-Time Needs Analysis",
    description: [
      "Conduct thorough workflow analysis",
      "to pinpoint bottlenecks and opportunities",
      "for automation within your systems.",
    ],
    image: "/Bespoke/figure--framer-9dgwf---mask-group--2.png",
  },
  {
    id: 2,
    title: "Custom Workflow Design",
    description: [
      "Build personalized automation blueprints",
      "that solve your specific operational",
      "challenges.",
    ],
    image: "/Bespoke/figure--framer-9dgwf---mask-group--1.png",
  },
  {
    id: 3,
    title: "AI-Powered Optimization",
    description: [
      "Leverage AI insights through our process",
      "optimization services to design smarter,",
      "more efficient business workflows.",
    ],
    image: "/Bespoke/figure--framer-9dgwf---mask-group-.png",
  },
];

const bottomRowCards = [
  {
    id: 1,
    title: "Seamless System Integration",
    description: [
      "Develop a robust API integration strategy",
      "to connect your disparate platforms, tools,",
      "and data into a unified system.",
    ],
    image: "/Bespoke/figure--framer-9dgwf---mask-group--4.png",
  },
  {
    id: 2,
    title: "Continuous Improvement Engine",
    description: [
      "Monitor, optimize, and evolve your automations as your business",
      "grows and changes.",
    ],
    image: "/Bespoke/figure--framer-9dgwf---mask-group--3.png",
  },
];

// Animation variants for cards
const cardVariants = {
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

// Stagger variant for the container
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2, // Stagger children animation by 0.2s
        },
    },
};

export const Bespoke = (): JSX.Element => {
  // State to track hover for bottom row cards, using card.id as key
  const [bottomHoverStates, setBottomHoverStates] = useState<Record<number, boolean>>({});

  return (
    <section className="bg-black flex flex-row justify-center w-full">
      <div className="bg-black w-full max-w-[2032.8px] py-16 md:py-24 lg:py-[100px]">
        <div className="flex flex-col w-full max-w-[1200px] items-start gap-12 md:gap-16 mx-auto px-4">
          <header className="w-full flex flex-col items-center">
            <Badge className="bg-[#0d0d12] hover:bg-[#0d0d12] rounded-full border-[0.8px] border-solid border-[#1a1d31] mb-12 md:mb-16 px-4 py-1.5">
              <span className="[font-family:'Inter',Helvetica] font-normal text-sm md:text-base leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA]">
                Experience
              </span>
            </Badge>

            <h1 className="text-center">
              <span className="block font-poppins font-semibold text-[#ffffffde] text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight pb-2 md:pb-4">
                Bespoke Automation
              </span>
              <span className="block font-poppins font-semibold text-[#ffffffde] text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
                Infrastructure
              </span>
            </h1>

            <p className="text-center mt-6 md:mt-8 max-w-xl">
              <span className="block [font-family:'Inter',Helvetica] font-normal text-[#7b7c8c] text-base md:text-lg leading-relaxed">
                Smart, scalable automations tailored to your business —
              </span>
              <span className="block [font-family:'Inter',Helvetica] font-normal text-[#7b7c8c] text-base md:text-lg leading-relaxed">
                This is the Syntora approach to custom automation.
              </span>
            </p>
          </header>

          <div className="w-full space-y-8">
            {/* Top row - 3 cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {topRowCards.map((card) => (
                <motion.div key={card.id} variants={cardVariants} className="group">
                  <Card
                      className="bg-black rounded-[20px] border-[0.8px] border-solid border-[#1a1d31] overflow-hidden flex flex-col h-full"
                  >
                    <CardContent className="p-0 flex flex-col flex-grow">
                      <div className="flex flex-col h-full">
                        <img
                          className="w-full h-auto aspect-video object-cover transition duration-300 group-hover:brightness-110"
                          alt={`${card.title} illustration`}
                          src={card.image}
                        />
                        <div className="p-6 flex flex-col gap-2 flex-grow">
                          <h3 className="[font-family:'Inter',Helvetica] font-medium text-[#ffffffde] text-lg md:text-xl leading-snug">
                            {card.title}
                          </h3>
                          <div className="flex flex-col flex-grow mb-auto">
                            {card.description.map((line, index) => (
                              <p
                                key={index}
                                className="[font-family:'Inter',Helvetica] font-normal text-[#7b7c8c] text-sm md:text-base leading-relaxed"
                              >
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom row - 2 cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {bottomRowCards.map((card) => {
                // Get hover state for this specific card
                const isHovered = bottomHoverStates[card.id] ?? false;

                return (
                  <motion.div
                    key={card.id}
                    variants={cardVariants}
                    // Removed group class
                    // Added mouse enter/leave handlers
                    onMouseEnter={() => setBottomHoverStates(prev => ({ ...prev, [card.id]: true }))}
                    onMouseLeave={() => setBottomHoverStates(prev => ({ ...prev, [card.id]: false }))}
                  >
                    <Card
                        className="bg-black rounded-[20px] border-[0.8px] border-solid border-[#1a1d31] overflow-hidden flex flex-col h-full"
                    >
                      <CardContent className="p-0 flex flex-col flex-grow">
                        {/* Apply inline style for brightness and transition */}
                        <div
                          className="flex flex-col h-full" // Removed transition/hover classes
                          style={{
                            filter: isHovered ? 'brightness(1.2)' : 'brightness(1)',
                            transition: 'filter 0.3s ease-out',
                          }}
                        >
                          <img
                            className="w-full h-auto aspect-video object-cover" // Removed transition/hover classes
                            alt={`${card.title} illustration`}
                            src={card.image}
                          />
                          <div className="p-6 flex flex-col gap-2 flex-grow">
                            <h3 className="[font-family:'Inter',Helvetica] font-medium text-[#ffffffde] text-lg md:text-xl leading-snug">
                              {card.title}
                            </h3>
                            <div className="flex flex-col flex-grow mb-auto">
                              {card.description.map((line, index) => (
                                <p
                                  key={index}
                                  className="[font-family:'Inter',Helvetica] font-normal text-[#7b7c8c] text-sm md:text-base leading-relaxed"
                                >
                                  {line}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};