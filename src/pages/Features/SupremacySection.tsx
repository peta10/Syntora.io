import { Badge } from "../../components/ui/badge"; // Corrected path
import { Card, CardContent } from "../../components/ui/card"; // Corrected path
import { motion, Variants } from "framer-motion"; // Import motion and Variants type
import { Link } from 'react-router-dom'; // Import Link

// Feature data for mapping - UPDATED with SEO keywords
const features = [
  {
    id: 1,
    title: ["Workflow Audit & Discovery"],
    description: "Identifying key bottlenecks ripe for custom workflow automation.",
    imageUrl: "/Supremacy/image-4.png",
    position: { top: 0, left: 0 },
    linkTo: "/time-audit"
  },
  {
    id: 2,
    title: ["Automation Blueprint Design"],
    description: "Creating a tailored business process automation roadmap with measurable milestones.",
    imageUrl: "/Supremacy/image-3.png",
    position: { top: 0, left: 316 },
    linkTo: null
  },
  {
    id: 3,
    title: ["Seamless Systems Integration"],
    description: "Implementing your automation solutions with minimal disruption to your operations.",
    imageUrl: "/Supremacy/image-2.png",
    position: { top: 260, left: 0 },
    linkTo: null
  },
  {
    id: 4,
    title: ["Scalable Growth & Support"],
    description: "Delivering secure, managed automation infrastructure designed for growth.",
    imageUrl: "/Supremacy/image-1.png",
    position: { top: 260, left: 316 },
    linkTo: null
  },
];

// Kept original decorative elements data
const decorativeElements = [
  { id: "deco-1", width: "74px", height: "79px", top: "-20px", right: "10px", rotate: "-13.88deg", bgUrl: "/Supremacy/image-8.png" },
  { id: "deco-2", width: "109px", height: "117px", top: "32px", left: "-7px", rotate: "4.94deg", bgUrl: "/Supremacy/image-8.png" },
  { id: "deco-3", width: "142px", height: "152px", bottom: "58px", left: "-27px", rotate: "-12.55deg", bgUrl: "/Supremacy/image-8.png" },
  { id: "deco-4", width: "111px", height: "119px", bottom: "18px", right: "-27px", rotate: "14.14deg", bgUrl: "/Supremacy/image-8.png" },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// RENAMED COMPONENT
export const SupremacySection = (): JSX.Element => {
  return (
    <section className="bg-black w-full overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-8 lg:px-10">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-12 md:mb-16">
          <Badge className="bg-[#0d0d12] h-[38px] rounded-full border-[0.8px] border-solid border-[#1a1d31] mb-4 sm:mb-5">
            <span className="px-3 py-1.5 font-inter font-normal text-[15px] text-transparent bg-clip-text bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA]">
              Our Process
            </span>
          </Badge>

          <h2 className="font-inter font-semibold text-[#ffffffde] text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-center mb-3 sm:mb-4">
            Custom Workflow Automation Process
          </h2>
          
          <p className="font-inter font-normal text-[#7b7c8c] text-base md:text-lg leading-relaxed text-center max-w-2xl px-4 sm:px-0">
            Learn how our proven 4-step process delivers reliable business process automation.
          </p>
        </div>

        {/* Features Grid for Mobile - Only visible on Mobile/Tablet */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 lg:hidden justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature) => {
            const cardInnerContent = (
              <Card className="bg-transparent border-none shadow-none h-full w-full max-w-[320px]">
                <CardContent className="p-0 h-full">
                  <div className="flex flex-col items-center sm:items-start gap-5 h-full text-center sm:text-left">
                    <img
                      src={feature.imageUrl}
                      alt={`${feature.title[0]} workflow automation icon`}
                      className="w-[60px] h-[60px] object-contain"
                    />
                    <div className="flex flex-col gap-1 flex-grow">
                      <div className="flex flex-col">
                        {feature.title.map((line, index) => (
                          <h3 key={index} className="font-inter font-medium text-[#ffffffde] text-lg sm:text-xl leading-snug">
                            {line}
                          </h3>
                        ))}
                      </div>
                      <div className="flex flex-col mt-1">
                        <p className="font-inter font-normal text-[#7b7c8c] text-sm sm:text-base leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
            
            return (
              <motion.div key={feature.id} variants={cardVariants}>
                {feature.linkTo ? (
                  <Link to={feature.linkTo} className="block hover:opacity-80 transition-opacity w-full">
                    {cardInnerContent}
                  </Link>
                ) : (
                  cardInnerContent
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Cube Illustration for Mobile - Only visible on Mobile/Tablet */}
        <div className="lg:hidden relative w-full h-[360px] sm:h-[400px] flex items-center justify-center mb-16">
          <img
            src="/Supremacy/image.png"
            alt="Abstract background glow for Syntora process"
            className="absolute inset-0 w-full h-full object-contain z-0 opacity-70 pointer-events-none"
          />
          <div
            className="absolute inset-0 z-[5] pointer-events-none"
            style={{
              backgroundImage: `url('/Supremacy/grid.png')`,
              backgroundRepeat: 'repeat',
              opacity: 0.1
            }}
            role="presentation"
          />
          <img
            src="/Supremacy/image-9.png"
            alt="Syntora custom workflow automation process cube illustration"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[280px] sm:max-w-[360px] h-auto object-contain z-10 pointer-events-none"
          />
          {decorativeElements.map((element) => (
            <motion.div
              key={element.id}
              className="absolute z-10 pointer-events-none"
              style={{
                width: `calc(${element.width} * 0.6)`,
                height: `calc(${element.height} * 0.6)`,
                top: element.top,
                left: element.left,
                right: element.right,
                bottom: element.bottom,
                backgroundImage: `url(${element.bgUrl})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}
              initial={{
                rotate: parseFloat(element.rotate || '0'),
                x: 0,
                y: 0,
              }}
              animate={{
                rotate: 17,
                x: 4,
                y: -28,
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Desktop Layout: Content Section - Hidden on Mobile */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center mb-16">
            {/* Left Side Feature Grid - Apply motion */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 order-2 lg:order-1"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {features.map((feature) => {
                const cardInnerContent = (
                  <Card className="bg-transparent border-none shadow-none h-full">
                    <CardContent className="p-0 h-full">
                      <div className="flex flex-col items-start gap-5 h-full">
                        <img
                          src={feature.imageUrl}
                          alt={`${feature.title[0]} workflow automation icon`}
                          className="w-[60px] h-[60px] object-contain"
                        />
                        <div className="flex flex-col gap-1 flex-grow">
                          <div className="flex flex-col">
                            {feature.title.map((line, index) => (
                              <h3
                                key={index}
                                className="font-inter font-medium text-[#ffffffde] text-[18px] leading-[25.2px]"
                              >
                                {line}
                              </h3>
                            ))}
                          </div>
                          <div className="flex flex-col mt-1">
                            <p
                              className="font-inter font-normal text-[#7b7c8c] text-base md:text-[16.9px] leading-normal"
                            >
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );

                return (
                  <motion.div key={feature.id} variants={cardVariants}>
                    {feature.linkTo ? (
                      <Link to={feature.linkTo} className="block hover:opacity-80 transition-opacity">
                        {cardInnerContent}
                      </Link>
                    ) : (
                      cardInnerContent
                    )}
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Right Side Illustration */}
            <div className="relative w-full min-h-[500px] lg:min-h-[635px] flex items-center justify-center order-1 lg:order-2">
              {/* Background Image behind cubes */}
              <img
                src="/Supremacy/image.png"
                alt="Abstract background glow for Syntora process"
                className="absolute inset-0 w-full h-full object-contain z-0 opacity-70 pointer-events-none"
              />

              {/* Grid background overlay */}
              <div 
                className="absolute inset-0 z-[5] pointer-events-none"
                style={{
                  backgroundImage: `url('/Supremacy/grid.png')`,
                  backgroundRepeat: 'repeat',
                  opacity: 0.1 
                }}
                role="presentation"
              />

              {/* Large Central Cube */}
              <img
                src="/Supremacy/image-9.png"
                alt="Syntora custom workflow automation process cube illustration"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[582px] h-[635px] object-contain z-10 pointer-events-none"
              />

              {/* Decorative Small Cubes */}
              {decorativeElements.map((element) => (
                <motion.div
                  key={element.id}
                  className="absolute z-10 pointer-events-none"
                  style={{
                    width: element.width,
                    height: element.height,
                    top: element.top,
                    left: element.left,
                    right: element.right,
                    bottom: element.bottom,
                    backgroundImage: `url(${element.bgUrl})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat'
                  }}
                  initial={{
                    rotate: parseFloat(element.rotate || '0'),
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    rotate: 17,
                    x: 4,
                    y: -28,
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>
        </div>

        {/* From the Blog Section - Made more mobile friendly */}
        <div className="pt-12 sm:pt-16 border-t border-white/10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-8 sm:mb-12 text-[#ffffffde]">Learn More From Our Blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Mobile-optimized blog cards */}
            <Link 
              to="/blog/n8n-vs-zapier-make" 
              className="group block bg-[#0d0d12] rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 h-full"
            >
              <div className="p-4 sm:p-6 flex flex-col h-full">
                <span className="text-[#6E86FF] text-xs sm:text-sm mb-2 block">Technology Comparison</span>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 group-hover:text-[#6E86FF] transition-colors flex-grow">
                  n8n vs. Zapier vs. Make: When is Managed n8n the Smarter Choice?
                </h4>
                <p className="text-white/70 text-xs sm:text-sm">
                  Compare platforms and understand when managed n8n offers superior value.
                </p>
              </div>
            </Link>
            {/* Link to Stop Manual Data Entry */}
            <Link 
              to="/blog/stop-manual-data-entry" 
              className="group block bg-[#0d0d12] rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 h-full"
            >
              <div className="p-4 sm:p-6 flex flex-col h-full">
                <span className="text-[#6E86FF] text-xs sm:text-sm mb-2 block">Use Cases</span>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 group-hover:text-[#6E86FF] transition-colors flex-grow">
                  Stop Manual Data Entry: Automate CRM-to-Accounting Workflows
                </h4>
                <p className="text-white/70 text-xs sm:text-sm">
                  Eliminate errors and save time by automating data transfer between critical systems.
                </p>
              </div>
            </Link>
            {/* Link to DIY vs Managed */}
            <Link 
              to="/blog/diy-vs-managed-automation" 
              className="group block bg-[#0d0d12] rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 h-full"
            >
              <div className="p-4 sm:p-6 flex flex-col h-full">
                <span className="text-[#6E86FF] text-xs sm:text-sm mb-2 block">Business Value</span>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 group-hover:text-[#6E86FF] transition-colors flex-grow">
                  DIY Automation vs. Managed Services: Better Long-Term ROI
                </h4>
                <p className="text-white/70 text-xs sm:text-sm">
                  Explore the hidden costs of DIY and the benefits of expert managed services.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}; 