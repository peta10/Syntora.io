import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { motion, Variants } from "framer-motion";
import { Link } from 'react-router-dom';

// UPDATED features data
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

// Original Component Name
export const Supremacy = (): JSX.Element => {
  return (
    <section className="bg-black flex flex-row justify-center w-full overflow-hidden">
      <div className="bg-black w-full max-w-[1200px] mx-auto pt-[100px] pb-[100px] px-[40px]">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-16 md:mb-20"> 
          <Badge className="bg-[#0d0d12] h-[38px] rounded-full border-[0.8px] border-solid border-[#1a1d31] mb-5">
            <span className="px-3 py-1.5 font-inter font-normal text-[15px] text-transparent bg-clip-text bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA]">
              Our Process
            </span>
          </Badge>
          <h2 className="font-inter font-semibold text-[#ffffffde] text-4xl sm:text-5xl tracking-tight md:tracking-[-1.5px] leading-tight text-center mb-4">
            Custom Workflow Automation Process
          </h2>
          <p className="font-inter font-normal text-[#7b7c8c] text-base md:text-lg leading-relaxed text-center max-w-2xl">
            Learn how our proven 4-step process delivers reliable business process automation.
          </p>
        </div>

        {/* Features Grid - Always displayed first on mobile */}
        <motion.div
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-10 justify-items-center mx-auto mb-16 lg:mb-0 lg:hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} 
        > 
          {features.map((feature) => {
            const cardInnerContent = (
              <Card className="bg-transparent border-none shadow-none h-full">
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
                          <h3 key={index} className="font-inter font-medium text-[#ffffffde] text-[18px] leading-[25.2px]">
                            {line}
                          </h3>
                        ))}
                      </div>
                      <div className="flex flex-col mt-1">
                        <p className="font-inter font-normal text-[#7b7c8c] text-base md:text-[16.9px] leading-normal">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
            return (
              <motion.div key={feature.id} variants={cardVariants} className="w-full max-w-[280px]">
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

        {/* Content Section - Original desktop layout, hidden on mobile */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center"> 
            {/* Left Side Feature Grid - Original desktop layout */}
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
                              <h3 key={index} className="font-inter font-medium text-[#ffffffde] text-[18px] leading-[25.2px]">
                                {line}
                              </h3>
                            ))}
                          </div>
                          <div className="flex flex-col mt-1">
                            <p className="font-inter font-normal text-[#7b7c8c] text-base md:text-[16.9px] leading-normal">
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

            {/* Right Side Illustration - Original desktop layout */}
            <div className="relative w-full min-h-[500px] lg:min-h-[635px] flex items-center justify-center order-1 lg:order-2">
              <img
                src="/Supremacy/image.png"
                alt="Abstract background glow for Syntora process"
                className="absolute inset-0 w-full h-full object-contain z-0 opacity-70 pointer-events-none"
              />
              <div 
                className="absolute inset-0 z-[5] pointer-events-none"
                style={{ backgroundImage: `url('/Supremacy/grid.png')`, backgroundRepeat: 'repeat', opacity: 0.1 }}
                role="presentation"
              />
              <img
                src="/Supremacy/image-9.png"
                alt="Syntora custom workflow automation process cube illustration"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[582px] h-[635px] object-contain z-10 pointer-events-none"
              />
              {decorativeElements.map((element) => (
                  <motion.div
                    key={element.id}
                    className="absolute z-10 pointer-events-none"
                    style={{ width: element.width, height: element.height, top: element.top, left: element.left, right: element.right, bottom: element.bottom, backgroundImage: `url(${element.bgUrl})`, backgroundSize: 'contain', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}
                    initial={{ rotate: parseFloat(element.rotate || '0'), x: 0, y: 0 }}
                    animate={{ rotate: 17, x: 4, y: -28 }}
                    transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
                    aria-hidden="true"
                  />
              ))}
            </div>
        </div>

        {/* Cube Illustration for Mobile - Shown after features */}
        <div className="relative w-full min-h-[400px] flex items-center justify-center lg:hidden">
          <img
            src="/Supremacy/image.png"
            alt="Abstract background glow for Syntora process"
            className="absolute inset-0 w-full h-full object-contain z-0 opacity-70 pointer-events-none"
          />
          <div 
            className="absolute inset-0 z-[5] pointer-events-none"
            style={{ backgroundImage: `url('/Supremacy/grid.png')`, backgroundRepeat: 'repeat', opacity: 0.1 }}
            role="presentation"
          />
          <img
            src="/Supremacy/image-9.png"
            alt="Syntora custom workflow automation process cube illustration"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] h-auto object-contain z-10 pointer-events-none"
          />
          {decorativeElements.map((element) => (
              <motion.div
                key={element.id}
                className="absolute z-10 pointer-events-none"
                style={{ 
                  width: `calc(${element.width} * 0.8)`, 
                  height: `calc(${element.height} * 0.8)`, 
                  top: element.top, 
                  left: element.left, 
                  right: element.right, 
                  bottom: element.bottom, 
                  backgroundImage: `url(${element.bgUrl})`, 
                  backgroundSize: 'contain', 
                  backgroundPosition: 'center center', 
                  backgroundRepeat: 'no-repeat' 
                }}
                initial={{ rotate: parseFloat(element.rotate || '0'), x: 0, y: 0 }}
                animate={{ rotate: 17, x: 4, y: -28 }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
                aria-hidden="true"
              />
          ))}
        </div>
      </div>
    </section>
  );
}; 