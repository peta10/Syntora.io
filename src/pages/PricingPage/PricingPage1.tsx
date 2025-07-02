import React from "react";
import { Badge } from "../../components/ui/badge"; // Adjusted path
import { motion } from "framer-motion";
import { Pricing } from "../Pricing/Pricing"; // Import the existing Pricing component (adjusted path)
import { Footer } from "../Footer/Footer"; // Import the Footer component (adjusted path)
import { PricingFeatures } from './PricingFeatures'; // Import the features component - Use Uppercase
import { Helmet } from 'react-helmet-async'; // Import Helmet

// Adapted description text for Pricing Hero
const descriptionText = "Focus on your business while we manage your workflow automation. Choose the right level of managed service and support.";

// Adapted headings for Pricing Hero
const headings = [
  "Managed Automation Plans",
  "Built For Your Business",
];

// Add this before your component's return statement
const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Managed Workflow Automation Pricing | Syntora",
  "description": "Explore Syntora's flexible managed workflow automation plans, featuring defined workflow limits, execution tiers, and dedicated support.",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Offer",
        "position": 1,
        "name": "Essential",
        "description": "Ideal for businesses starting with 1-2 core processes. Up to 2 Defined Workflows, 10k Monthly Executions, Email Support (48hr SLA).",
        "price": "299",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "299",
          "priceCurrency": "USD",
          "unitText": "MONTH"
        },
        "offeredBy": {
          "@type": "Organization",
          "name": "Syntora"
        }
      },
      {
        "@type": "Offer",
        "position": 2,
        "name": "Growth",
        "description": "For automating multiple processes. Up to 5 Defined Workflows, 50k Monthly Executions, Email & Chat Support (24hr SLA), 1hr/mo Maintenance.",
        "price": "799",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "799",
          "priceCurrency": "USD",
          "unitText": "MONTH"
        },
        "offeredBy": {
          "@type": "Organization",
          "name": "Syntora"
        }
      },
      {
        "@type": "Offer",
        "position": 3,
        "name": "Enterprise",
        "description": "Custom managed solutions for complex, high-volume needs. Custom workflows, executions, integrations, dedicated support, and optimization.",
        "offeredBy": {
          "@type": "Organization",
          "name": "Syntora"
        }
      }
    ]
  }
};

// Define the new Pricing Page component
export const PricingPage1 = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen bg-black"> {/* Ensure page takes full height */}
      {/* Add Helmet for Pricing page meta tags */}
      <Helmet>
        <title>Managed Workflow Automation Pricing | Plans & Costs | Syntora</title>
        <meta name="description" content="Explore Syntora's flexible pricing plans for managed workflow automation services. Find the right solution for your business, from essential automation to enterprise-level custom workflows." />
        <script type="application/ld+json">
          {JSON.stringify(pricingSchema)}
        </script>
      </Helmet>

      {/* Hero Section - Adapted from ContactHero */}
      <div
        className="w-full bg-black relative flex items-center justify-center text-center min-h-[300px] sm:min-h-[400px] md:h-[521px] py-12 sm:py-16 overflow-hidden
                   before:content-[''] before:absolute before:inset-0 before:bg-[url(/Contact/contactherodotted.png)] before:bg-repeat before:opacity-100 before:z-0
                   after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-32 sm:after:h-48 md:after:h-64 after:z-0
                   after:bg-[url(/Contact/gradient.png)] after:bg-no-repeat after:bg-[position:center_bottom] after:bg-[size:100%_auto]
                   after:[mask-image:linear-gradient(to_top,black_25%,transparent_75%)] after:pointer-events-none
                   after:filter after:brightness-120"
      >
        {/* Content wrapper */}
        <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4 px-4 sm:px-6 w-full max-w-2xl">

          {/* Pricing Badge */}
          <Badge
            variant="outline"
            className="bg-[#0d0d12] rounded-full border-[0.8px] border-[#1a1d31] px-4 py-1.5 flex items-center justify-center"
          >
            <span className="font-inter font-normal text-[15px] text-transparent bg-clip-text bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA]">
              Pricing
            </span>
          </Badge>

          {/* Headings */}
          <div className="flex flex-col items-center mt-1 sm:mt-2">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white/90 leading-tight tracking-tight"
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: [0.12, 0.23, 0.5, 1], delay: 0.1 }}
            >
              {headings[0]}
            </motion.h1>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white/90 leading-tight tracking-tight mt-1"
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: [0.12, 0.23, 0.5, 1], delay: 0.1 }}
            >
              {headings[1]}
            </motion.h1>
          </div>

          {/* Description Text */}
          <p className="mt-3 sm:mt-4 max-w-xl lg:max-w-2xl text-sm sm:text-base md:text-lg text-gray-300/80 leading-relaxed">
            {descriptionText}
          </p>
        </div>
      </div>

      {/* Main Content Area - Render the existing Pricing component */}
      <main className="flex-grow"> {/* Use flex-grow to push footer down */}
        <Pricing />
        <PricingFeatures />
      </main>
    </div>
  );
};

export default PricingPage1; // Default export 