import React from 'react';
import { Layout } from '../../components/layout/Layout';
import { AboutHero } from './Abouthero';
import { Card, CardContent } from "@/components/ui/card"; // Import Card components
import { motion } from 'framer-motion'; // Import motion
import { Sparkles, CheckIcon } from 'lucide-react'; // Import icon and check icon for mobile bullets
import PageSEO from '@/components/PageSEO';

// Helper component for gradient text span
const GradientSpan: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA]">
    {children}
  </span>
);

const About = () => {
  const seo = {
    title: "About Syntora - Chicago's Workflow Automation Experts",
    description: "Learn about Syntora's mission to transform businesses through intelligent workflow automation. Serving Chicago, Naperville, and beyond with expert automation solutions.",
    keywords: "Chicago automation experts, workflow automation company, Naperville business automation, automation consulting",
    canonicalUrl: "/about",
    structuredData: {
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "Syntora",
        "description": "Professional workflow automation services in Chicago and Naperville",
        "foundingDate": "2023",
        "areaServed": ["Chicago", "Naperville", "Illinois"],
        "serviceType": ["Workflow Automation", "Business Process Optimization", "Automation Consulting"]
      }
    }
  };

  return (
    <Layout seo={seo}>
      <PageSEO 
        title="About Syntora | Workflow Automation Experts"
        description="Learn about our team of workflow automation experts who help businesses streamline operations with n8n, Zapier, and Make integration platforms."
        canonicalPath="/about"
      />
      
      <div className="bg-black text-white pt-16 pb-24 md:pt-24 md:pb-32 px-4 md:px-8 flex flex-col items-center">
        <AboutHero />
        <Card className="w-full max-w-5xl mt-16 md:mt-20 overflow-hidden bg-gradient-to-b from-[#0d0d12] to-[#111118] border border-[#1a1d31]"> {/* Adjusted max-width, margin, gradient bg */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CardContent className="flex flex-col gap-6 md:gap-8 pt-10 pb-12 px-6 md:px-12"> {/* Adjusted padding */}
              {/* Smaller Heading with Icon */}
              <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
                <Sparkles className="w-6 h-6 text-[#8A9BFF]" />
                <h2 className="text-3xl font-medium text-white/80 text-center">
                  Our Story
                </h2>
                <Sparkles className="w-6 h-6 text-[#FF8AB5]" />
              </div>

              {/* Origin Story Section */}
              <section className="w-full max-w-6xl mx-auto py-16 md:py-24 lg:py-32 px-4 md:px-8">
                {/* Optional: Add dotted overlay here if desired using ::before or another div */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
                  
                  {/* Left Column: Illustration Placeholder */}
                  <motion.div 
                    className="w-full aspect-square md:aspect-auto md:h-full bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeIn' }}
                    viewport={{ once: true }}
                    aria-label="Abstract graphic of interconnected automation nodes."
                  >
                    [Placeholder: Interconnected Nodes Illustration]
                  </motion.div>

                  {/* Right Column: Copy Block */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  >
                    <p className="text-sm font-semibold uppercase text-blue-400 mb-3 tracking-wider"> {/* Placeholder accent color */}
                      Our Beginning
                    </p>
                    {/* Optional: Add 'since 2024' tag here */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-white/90 mb-6 leading-tight">
                      From Time Lost to Time Gained
                    </h2>
                    <p className="text-base md:text-lg text-neutral-300/85 mb-4 leading-relaxed">
                      [Placeholder Paragraph 1: Approx 80 words describing the pain point Syntora observed, like time lost to manual hand-offs and lack of continuity.]
                    </p>
                    <p className="text-base md:text-lg text-neutral-300/85 mb-8 leading-relaxed">
                      [Placeholder Paragraph 2: Approx 80 words describing the insight and solution, like the Time Audit leading to custom, synchronized automation.]
                    </p>
                    
                    {/* Bullet Points */}
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" /> {/* Placeholder accent color */} 
                        <span className="text-base md:text-lg text-neutral-200/90">
                          [Placeholder Bullet 1: e.g., Clear context at every hand-off]
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" /> {/* Placeholder accent color */} 
                        <span className="text-base md:text-lg text-neutral-200/90">
                          [Placeholder Bullet 2: e.g., 24/7 automated workflows]
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" /> {/* Placeholder accent color */} 
                        <span className="text-base md:text-lg text-neutral-200/90">
                          [Placeholder Bullet 3: e.g., Scalable growth infrastructure]
                        </span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </section>
            </CardContent>
          </motion.div>
        </Card>
      </div>
    </Layout>
  );
};

export default About; 