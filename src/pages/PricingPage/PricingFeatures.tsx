import { CheckIcon, XIcon } from "lucide-react";
import React from "react";
import { Card } from "../../components/ui/card";
import { pricingFeaturesStyles } from "./pricingfeaturescss";
import { Badge } from "../../components/ui/badge";

// Define the feature interface - Allow string or boolean for plan values
interface Feature {
  id: number;
  category?: string; // Optional category for grouping
  name: string;
  description?: string;
  essential: boolean | string;
  growth: boolean | string;
  enterprise: boolean | string;
}

// Define the PricingFeatures component
export const PricingFeatures: React.FC = () => {
  // *** UPDATED Feature Comparison Data ***
  const features: Feature[] = [
    // Core Service
    { id: 1, category: "Core Service", name: "Managed Workflows", description: "Number of distinct automated processes managed.", essential: "Up to 2 Defined*", growth: "Up to 5 Defined* (Moderate Complexity)", enterprise: "Custom Number & Complexity" },
    { id: 2, category: "Core Service", name: "Monthly n8n Executions", description: "Successful end-to-end workflow runs per month.", essential: "Up to 10,000**", growth: "Up to 50,000**", enterprise: "Custom / High Volume**" },
    { id: 3, category: "Core Service", name: "Included Apps", description: "Number/type of apps connected within workflows.", essential: "Up to 3 Standard", growth: "Up to 7 Standard/Premium", enterprise: "Unlimited / Complex Integrations" },

    // Infrastructure & Monitoring
    { id: 4, category: "Infrastructure & Monitoring", name: "n8n Instance", description: "Hosting environment for your automations.", essential: "Dedicated Instance", growth: "Dedicated Instance", enterprise: "Dedicated Instance (Higher Spec Option)" },
    { id: 5, category: "Infrastructure & Monitoring", name: "Instance Management", description: "Updates, security, and upkeep of the n8n instance.", essential: true, growth: true, enterprise: true },
    { id: 6, category: "Infrastructure & Monitoring", name: "Workflow Monitoring", description: "Monitoring for errors and performance.", essential: "Basic Error Monitoring", growth: "Enhanced Monitoring & Alerting", enterprise: "Proactive Performance Monitoring & Optimization" },

    // Support & Maintenance
    { id: 7, category: "Support & Maintenance", name: "Support Channels", description: "How you can reach us for help.", essential: "Email", growth: "Email & Chat", enterprise: "Dedicated Account Manager, Priority Channels" },
    { id: 8, category: "Support & Maintenance", name: "Response SLA", description: "Target time for initial support response.", essential: "48 Business Hours", growth: "24 Business Hours", enterprise: "Custom SLA" },
    { id: 9, category: "Support & Maintenance", name: "Included Maintenance", description: "Time allocated for minor workflow adjustments/updates.", essential: "Platform Security Updates Only", growth: "1 hour / month", enterprise: "Included Block of Hours" },

    // Reporting
    { id: 10, category: "Reporting", name: "Reporting Level", description: "Insights into workflow usage and performance.", essential: "Monthly Basic Usage Report", growth: "Monthly Detailed Usage & Performance Report", enterprise: "Custom Dashboards & Analytics" },

    // Add-ons (Can be represented differently if needed)
    { id: 11, category: "Add-ons", name: "Complex Logic / Custom Code", description: "Workflows requiring custom scripting or complex logic.", essential: false, growth: "Limited Add-on", enterprise: true },
    { id: 12, category: "Add-ons", name: "AI Agent Integration", description: "Incorporating AI agents into workflows.", essential: false, growth: "Add-on", enterprise: true },
  ];

  // Group features by category
  const groupedFeatures = features.reduce((acc, feature) => {
    const category = feature.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(feature);
    return acc;
  }, {} as Record<string, Feature[]>);

  // Column headers for the static row
  const columnHeaders = ["Essential", "Growth", "Enterprise"]; // Simplified headers

  // Helper function to render indicators (Check/X icon or text)
  const renderIndicator = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <div className={pricingFeaturesStyles.checkIconContainer}>
          <CheckIcon className={pricingFeaturesStyles.checkIconGradient} />
        </div>
      ) : (
        <XIcon className={pricingFeaturesStyles.xIcon} />
      );
    } else {
      // Render string value - Increased contrast
      return (
        <span className="text-xs sm:text-sm text-white/90 text-center px-1">
          {value}
        </span>
      );
    }
  };

  // Mobile view rendering for each feature
  const renderMobileFeatureCard = (feature: Feature) => (
    <div key={feature.id} className="bg-[#0d0d12] border border-[#1a1d31] rounded-lg p-4 mb-4">
      <h3 className="font-semibold text-base text-white/90 mb-1">{feature.name}</h3>
      {feature.description && (
        <p className="text-xs text-neutral-400 mb-3">{feature.description}</p>
      )}

      <div className="grid grid-cols-3 gap-2 mt-2">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs text-neutral-400 mb-1">Essential</span>
          <div className="h-8 flex items-center justify-center">
            {renderIndicator(feature.essential)}
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-xs text-neutral-400 mb-1">Growth</span>
          <div className="h-8 flex items-center justify-center">
            {renderIndicator(feature.growth)}
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-xs text-neutral-400 mb-1">Enterprise</span>
          <div className="h-8 flex items-center justify-center">
            {renderIndicator(feature.enterprise)}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-black py-12 sm:py-16 md:py-24 flex flex-col items-center">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-8 sm:mb-12 md:mb-16 px-4">
        <Badge
          variant="outline"
          className="bg-[#0d0d12] rounded-full border-[0.8px] border-[#1a1d31] px-4 py-1.5 mb-4 sm:mb-6"
        >
          <span className="font-inter font-normal text-[15px] text-transparent bg-clip-text bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA]">
            Feature Comparison
          </span>
        </Badge>
        {/* UPDATED H1 */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white/90 text-center mb-3 sm:mb-4">
          Detailed Plan Features
        </h1>
        {/* UPDATED Description */}
        <p className="text-neutral-400 text-center max-w-2xl text-sm sm:text-base md:text-lg px-4">
          Compare the specific features, limits, and support levels across our managed automation plans to find the best fit for your operational needs.
        </p>
      </div>

      {/* Mobile view - Only visible on small screens */}
      <div className="w-full max-w-[90%] mx-auto block sm:hidden px-4">
        {/* Render mobile cards grouped by category */}
        {Object.entries(groupedFeatures).map(([category, categoryFeatures]) => (
          <div key={category} className="mb-6">
            <h2 className="text-lg font-semibold text-white/80 mb-3 border-b border-[#1a1d31] pb-1">{category}</h2>
            {categoryFeatures.map(renderMobileFeatureCard)}
          </div>
        ))}
      </div>

      {/* Desktop view - Feature Comparison Table Container - Hidden on small screens */}
      <div className="w-full max-w-[1100px] mx-auto rounded-xl border border-[#1a1d31] overflow-hidden hidden sm:block">
        {/* Static Header Row */}
        <div className={pricingFeaturesStyles.headerRow}>
          <div className={pricingFeaturesStyles.headerFeaturesCol}>
            Features
          </div>
          {columnHeaders.map((header, index) => (
            <div key={index} className={`text-center text-white/90 text-base md:text-xl font-semibold`}>
              {header}
            </div>
          ))}
        </div>

        {/* Feature Rows - Grouped by Category */}
        <Card className="border-0 bg-transparent shadow-none rounded-none">
           {Object.entries(groupedFeatures).map(([category, categoryFeatures], catIndex) => (
            <div key={category} className={`${catIndex > 0 ? 'mt-0' : ''}`}> {/* No top margin for first category */} 
              {/* Category Header Row */}
              <div className={`${pricingFeaturesStyles.featureRow(false)} bg-[#0d0d12]/50`}> {/* Category Row Styling */}
                  <div className={`${pricingFeaturesStyles.featureNameContainer} py-2`}> 
                      <span className="font-semibold text-base md:text-lg text-[#a963ff]">{category}</span> {/* Category title */} 
                  </div>
                  {/* Empty divs for alignment */} 
                  <div className={pricingFeaturesStyles.indicatorContainer}></div>
                  <div className={pricingFeaturesStyles.indicatorContainer}></div>
                  <div className={pricingFeaturesStyles.indicatorContainer}></div>
              </div>

              {/* Features within the category */}
              {categoryFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className={pricingFeaturesStyles.featureRow(!!feature.description)}
                >
                  {/* Feature Name Column */}
                  <div className={pricingFeaturesStyles.featureNameContainer}>
                    <span className={`font-semibold text-sm md:text-[17.1px] leading-tight md:leading-[25.6px] text-white/90`}>
                      {feature.name}
                    </span>
                    {feature.description && (
                      <span className={`text-xs md:text-sm text-neutral-300 mt-1`}>
                        {feature.description}
                      </span>
                    )}
                  </div>

                  {/* Indicator Columns - UPDATED with renderIndicator function */}
                  <div className={pricingFeaturesStyles.indicatorContainer}>
                    {renderIndicator(feature.essential)}
                  </div>
                  <div className={pricingFeaturesStyles.indicatorContainer}>
                    {renderIndicator(feature.growth)}
                  </div>
                  <div className={pricingFeaturesStyles.indicatorContainer}>
                    {renderIndicator(feature.enterprise)}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Card>
      </div>

      {/* Add footnotes below the table */} 
       <div className="mt-8 text-left text-[#7b7c8c] text-xs md:text-sm max-w-[1100px] mx-auto px-4 sm:px-6">
            <p className="mb-1">
              *A "Defined Workflow" is a distinct automated process with a specific trigger and outcome, scoped during onboarding.
            </p>
            <p>
              **An "n8n Execution" is counted each time a workflow successfully runs from its trigger to completion. Overage fees apply ($10 per 1,000 executions).
            </p>
             <p className="mt-1">
                Setup & Onboarding Fee applies to all plans and is quoted based on initial scope complexity.
             </p>
      </div>
    </div>
  );
};

export default PricingFeatures;