import React from "react";
import { Badge } from "../../components/ui/badge";
import { Timeline } from "../../components/ui/timeline";
import { BackgroundGradient } from "../../components/ui/background-gradient";
import { useInView } from 'react-intersection-observer';

// Define process steps data for 3-step process
const processSteps = [
  {
    id: 1,
    title: "Time Audit Discovery",
    description: "Pinpoint time-wasting tasks, bottlenecks, and hidden automation opportunities inside your business.",
    cardImage: "/process/figure--framer-1obrxcl---mask-group-.png",
    screenshot: "/process/jane@gmail.com (1).png"
  },
  {
    id: 2,
    title: "Custom Automation Blueprint",
    description: "Get a personalized automation plan designed to streamline your workflows and maximize ROI.",
    cardImage: "/process/Customblueprint.png",
    screenshot: "/process/Untitled design.png"
  },
  {
    id: 3,
    title: "Seamless Automation Deployment",
    description: "Launch your new AI-driven systems with full integration into your existing tools — with minimal disruption.",
    cardImage: "/process/Seamlessautomation.png",
    screenshot: "/process/Untitled design (1).png"
  },
];

// Small helper component to manage inView state for each step's content
const StepContent = ({ step }: { step: typeof processSteps[0] }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  return (
    <div ref={ref} className="mb-10">
      <p className="font-normal text-neutral-300 text-base md:text-lg leading-relaxed mt-2 mb-4 max-w-xl">
        {step.description}
      </p>
      <BackgroundGradient
        isActive={inView}
        className="bg-neutral-900 rounded-lg border border-neutral-700 overflow-hidden shadow-md p-0"
        containerClassName="rounded-lg"
      >
        <img
          src={step.screenshot}
          alt={`${step.title} screenshot`}
          className="w-full h-auto object-contain block"
        />
      </BackgroundGradient>
    </div>
  );
};

export const Process = (): JSX.Element => {
  // Map processSteps using the StepContent helper component
  const timelineData = processSteps.map(step => ({
    title: step.title,
    content: <StepContent key={step.id} step={step} />
  }));

  return (
    <section className="bg-black text-white py-16 md:py-24 lg:py-32">
      <div className="w-full max-w-[1200px] mx-auto px-4 mb-8 md:mb-12">
        <div className="flex flex-col items-center text-center">
          <Badge className="bg-[#0d0d12] hover:bg-[#0d0d12] rounded-full border-[0.8px] border-solid border-[#1a1d31] mb-4 py-1.5 px-4">
            <span className="font-normal text-sm md:text-base leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA]">
              Process
            </span>
          </Badge>
          <h1 className="mb-4 md:mb-6">
            <span className="block font-semibold text-[#ffffffde] text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight opacity-87">
              3-Step Process for Syntora
            </span>
          </h1>
        </div>
      </div>

      <Timeline data={timelineData} />
    </section>
  );
}; 