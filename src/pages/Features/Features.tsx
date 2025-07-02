import React from 'react';
import { FeaturesHero } from './FeaturesHero'; // Import the new hero component
// import { Infra } from '../Infra/Infra'; // OLD Import Infra component
// import { Supremacy } from '../Supremacy/Supremacy'; // OLD Import Supremacy component
import { InfraSection } from './InfraSection'; // NEW Import Infra section duplicate
import { SupremacySection } from './SupremacySection'; // NEW Import Supremacy section duplicate
import { Helmet } from 'react-helmet-async'; // Import Helmet
import { FAQSection } from '../FAQ/FAQ'; // Import FAQSection

export const Features = (): JSX.Element => {
  const featuresSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Workflow Automation Services & Features | Syntora",
    "description": "Explore Syntora's managed workflow automation services. Learn about our custom process, systems integration capabilities, and automation infrastructure.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Service",
          "position": 1,
          "name": "Automation Infrastructure",
          "description": "Connect with essential business tools to power automated growth systems.",
          "provider": {
            "@type": "Organization",
            "name": "Syntora"
          },
          "serviceType": "Workflow Automation Infrastructure"
        },
        {
          "@type": "Service",
          "position": 2,
          "name": "Custom Workflow Process",
          "description": "Our proven 4-step process delivers reliable business process automation.",
          "provider": {
            "@type": "Organization",
            "name": "Syntora"
          },
          "serviceType": "Business Process Automation"
        },
        {
          "@type": "Service",
          "position": 3,
          "name": "Sales & Lead Automation",
          "description": "AI analyzes client conversations, predicts win chances, schedules next steps, and empowers your team to close faster.",
          "provider": {
            "@type": "Organization",
            "name": "Syntora"
          },
          "serviceType": "Sales Process Automation"
        },
        {
          "@type": "Service",
          "position": 4,
          "name": "Systems Integration",
          "description": "Seamlessly connect your existing business tools and eliminate manual data transfer between platforms.",
          "provider": {
            "@type": "Organization",
            "name": "Syntora"
          },
          "serviceType": "Systems Integration"
        }
      ]
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Add Helmet for Features/Services page meta tags */}
      <Helmet>
        <title>Automation Services & Process | Custom Workflows | Syntora</title>
        <meta name="description" content="Explore Syntora's managed workflow automation services. Learn about our custom process, systems integration capabilities, and automation infrastructure." />
        <script type="application/ld+json">
          {JSON.stringify(featuresSchema)}
        </script>
      </Helmet>

      <FeaturesHero />
      
      {/* Main content container with responsive padding */}
      <div className="flex flex-col w-full px-4 sm:px-6 md:px-8 overflow-hidden"> 
        <InfraSection /> {/* Use duplicated Infra section */}
        <SupremacySection /> {/* Use duplicated Supremacy section */}
        <FAQSection /> {/* Add FAQSection here */}
      </div>
    </div>
  );
}; 