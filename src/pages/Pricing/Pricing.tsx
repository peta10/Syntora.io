import { useState } from "react";
import { CheckIcon } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Badge } from "../../components/ui/badge";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { Card, CardContent } from "../../components/ui/card";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import { Link } from "react-router-dom";
// Removed import "./pricingcss.tsx";

// Define animation variants for the pricing cards
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

// Stagger variant for the pricing card container
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Adjust stagger timing if needed
    },
  },
};

export const Pricing = (): JSX.Element => {
  // State for billing cycle ('monthly' or 'yearly')
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  // *** UPDATED PRICING PLAN DATA ***
  const pricingPlans = [
    {
      title: "Essential",
      // Placeholder prices - User needs to finalize
      prices: { monthly: "$299", yearly: "$2,700" }, // Assuming 10x for yearly
      popular: false,
      features: [
        "Ideal for businesses starting with 1-2 core processes.",
        "Up to 2 Defined Workflows*",
        "Up to 10,000 Monthly n8n Executions**",
        "Connects up to 3 standard apps",
        "Dedicated n8n Instance + Management",
        "Basic Workflow Error Monitoring",
        "Email Support (48 Business Hour Response SLA)",
        "Monthly Basic Usage Report",
        "Platform Security Updates Only",
      ],
      ctaText: "Get Started", // Updated CTA text
    },
    {
      title: "Growth",
      // Placeholder prices - User needs to finalize
      prices: { monthly: "$799", yearly: "$7,200" }, // Assuming 10x for yearly
      popular: true,
      features: [
        "For automating multiple processes or needing more support.",
        "Up to 5 Defined Workflows* (Moderate Complexity)",
        "Up to 50,000 Monthly n8n Executions**",
        "Connects up to 7 standard/premium apps",
        "Dedicated n8n Instance + Management",
        "Enhanced Workflow Monitoring & Alerting",
        "Email & Chat Support (24 Business Hour Response SLA)",
        "Monthly Detailed Usage & Performance Report",
        "Includes 1 hour/month for minor workflow adjustments/updates",
      ],
      ctaText: "Choose Growth", // Updated CTA text
    },
    {
      title: "Enterprise",
      prices: { monthly: "Custom Quote", yearly: "Custom Quote" },
      popular: false,
      features: [
        "Complex, high-volume, or mission-critical automation.",
        "Custom Number & Complexity (Incl. custom code, AI Agents)",
        "Custom / High Volume Monthly n8n Executions**",
        "Unlimited / Complex Integrations",
        "Dedicated n8n Instance (Potentially higher spec) + Management",
        "Proactive Performance Monitoring & Optimization",
        "Dedicated Account Manager, Priority Support, Custom SLA",
        "Custom Dashboards & Analytics Reporting",
        "Included Block of Hours for ongoing development/optimization",
      ],
      ctaText: "Request Custom Quote", // Updated CTA text
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-87 pointer-events-none"
        style={{
          backgroundImage: `url('/Pricing/pricingdots.png')`, // Assuming path from public folder
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center', 
        }}
      />

      <main className="container mx-auto flex flex-col items-center gap-4 py-12 sm:py-16 md:py-24 relative z-10 px-4 sm:px-6">
        {/* Header Section */}
        <section className="flex flex-col items-center justify-center py-8 sm:py-12 w-full">
          <Badge
            variant="outline"
            className="bg-[#0d0d12] border-[#1a1d31] rounded-full px-0 py-0 mb-4 h-[38px] flex items-center justify-center"
          >
            <span className="px-3 py-1.5 font-normal text-[15px] text-transparent bg-clip-text bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA]">
              Pricing
            </span>
          </Badge>

          <h1 className="font-semibold text-[#ffffffde] text-3xl sm:text-4xl md:text-[52px] tracking-[-1px] md:tracking-[-2.08px] leading-tight md:leading-[62.4px] text-center mb-4 sm:mb-6">
            Managed Automation Plans
          </h1>

          <p className="text-[#7b7c8c] text-base md:text-[16.9px] leading-relaxed md:leading-[25.6px] text-center max-w-[550px] px-4">
            Focus on your business while we manage your workflow automation.
            <br className="hidden sm:block" />
            Choose the right level of managed service and support.
          </p>
        </section>

        {/* Pricing Cards Section */}
        <section className="flex flex-col items-center w-full">
          {/* Pricing toggle */}
          <div className="mb-8">
            <ToggleGroup
              type="single"
              value={billingCycle}
              defaultValue="monthly"
              onValueChange={(value: string) => {
                if (value) setBillingCycle(value as 'monthly' | 'yearly');
              }}
              className="bg-[#0d0d12] rounded-[500px] border-[0.8px] border-solid border-[#1a1d31] h-[46px] w-56"
            >
              <ToggleGroupItem
                value="monthly"
                className="relative w-[104px] h-[34px] rounded-[100px] data-[state=on]:bg-gradient-to-b data-[state=on]:from-[rgba(0,0,0,0.54)] data-[state=on]:to-[#6e86ff] data-[state=on]:via-[#a963ff]"
              >
                <span className="font-normal text-[16.9px] text-[#ffffffde]">
                  Monthly
                </span>
              </ToggleGroupItem>
              <ToggleGroupItem
                value="yearly"
                className="relative w-[92px] h-[34px] rounded-[100px] data-[state=on]:bg-gradient-to-b data-[state=on]:from-[rgba(0,0,0,0.54)] data-[state=on]:to-[#6e86ff] data-[state=on]:via-[#a963ff]"
              >
                <span className="font-normal text-[16.9px] text-[#ffffffde]">
                  Yearly
                </span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          {/* Pricing cards container - Apply motion */}
          <motion.div
            className="flex flex-col md:flex-row flex-wrap justify-center items-center md:items-end gap-6 md:gap-8 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // Trigger slightly earlier to account for card height
          >
            {pricingPlans.map((plan, index) => {
              // Define conditional heights for larger screens
              let minHeightClass = "";
              if (index === 0) { // Essential
                minHeightClass = "md:min-h-[540px]"; // Adjusted height for more features
              } else if (index === 1) { // Growth (Popular)
                minHeightClass = "md:min-h-[580px]"; // Adjusted height for more features
              } else { // Enterprise
                minHeightClass = "md:min-h-[560px]"; // Adjusted height for more features
              }

              return (
                <motion.div key={index} variants={cardVariants} className="w-full sm:w-[380px] max-w-full px-4 sm:px-0">
                  <Card
                    className={`w-full sm:w-[379px] rounded-[20px] overflow-hidden ${minHeightClass} ${ index === 1 ? "shadow-[0px_0px_40px_#B778DF50] border-none" : "bg-[#323648] border-none"}`}
                  >
                    <CardContent className="p-0 h-full">
                      <div className="w-full h-full rounded-[19.5px] overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,rgba(26,29,49,1)_0%,rgba(13,13,18,1)_100%)] p-6 sm:p-8 flex flex-col">
                        <div className="flex flex-col gap-5 sm:gap-7 flex-grow">
                          {/* Title and price section */}
                          <div className="flex flex-col gap-3">
                            <div className="flex items-center">
                              <h3 className="text-xl font-semibold text-[#ffffffde]">
                                {plan.title}
                              </h3>
                              {plan.popular && (
                                <Badge className="ml-4 bg-[#ff367c] text-white rounded-[999px] px-2.5 py-1 shrink-0">
                                  <span className="text-[14.2px]">Popular</span>
                                </Badge>
                              )}
                            </div>

                            <div className="flex items-end flex-wrap">
                              {plan.title !== "Enterprise" ? (
                                <>
                                  <span className="font-medium text-4xl sm:text-5xl md:text-[53.3px] text-[#ffffffde] tracking-[-1px] md:tracking-[-2.08px] leading-tight md:leading-[62.4px]">
                                    {plan.prices[billingCycle]}
                                  </span>
                                  <span className="text-sm sm:text-base md:text-[16.9px] text-neutral-300 ml-2 mb-1">
                                    {billingCycle === 'monthly' ? '/mo' : '/yr'}
                                  </span>
                                </>
                              ) : (
                                <span className="font-normal text-xl sm:text-2xl md:text-[25.3px] text-[#ffffffde]">
                                  {plan.prices[billingCycle]}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Divider */}
                          <div className="h-px w-full bg-[#1a1d31]" />

                          {/* Features list */}
                          <div className="flex flex-col gap-4 sm:gap-5">
                            {plan.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-start gap-2"
                              >
                                <div className="w-6 h-6 mt-0.5 flex items-center justify-center shrink-0">
                                  <CheckIcon className="w-[15px] h-[11px] text-[#6E86FF]" />
                                </div>
                                <span className="text-sm sm:text-base md:text-[16.9px] text-neutral-300">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* UPDATED CTA Button - Uses plan.ctaText */}
                        <Link to="/book-a-call" className="mt-auto block">
                          <ShinyButton
                            className="mt-6 sm:mt-8 w-full rounded-full text-gray-700 text-sm font-normal px-6 py-2.5 border-[0.8px] border-solid border-[#ffffff66] overflow-hidden shrink-0"
                            style={{
                              background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 37%, rgba(208, 208, 208, 1) 100%)',
                              '--primary': '#E0E0E0', // Light grey shiny effect
                              boxShadow: '0 0 15px 4px rgba(255, 89, 0, 0.6)', // Orange glow
                            } as React.CSSProperties}
                          >
                            {plan.ctaText}
                          </ShinyButton>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* *** ADDED: Setup Fee and Overage Policy Text *** */}
          <div className="mt-10 text-center text-[#7b7c8c] text-sm md:text-[14px] max-w-lg px-4">
            <p className="mb-2">
              *A "Defined Workflow" is a distinct automated process with a specific trigger and outcome.
              <br />
              **An "n8n Execution" is one successful run of an entire workflow from trigger to end.
            </p>
            <p className="mb-2 font-medium text-neutral-300">
              All plans require a separate, one-time Setup & Onboarding Fee, quoted based on initial scope.
            </p>
            <p>
              Monthly execution overages are billed at $10 per 1,000 executions.
            </p>
          </div>

        </section>
      </main>
    </div>
  );
};