import React from 'react';
import { Badge } from '@/components/ui/badge'; // Use alias

// Define props if needed, e.g., title, subtitle
interface TimeAuditHeaderProps {
    title?: string;
    subtitle?: string;
    introduction?: string[];
}

export const TimeAuditHeader: React.FC<TimeAuditHeaderProps> = ({ 
    title = "Time Audit Questionnaire", 
    subtitle = "Identify Your High-Value Workflow Automation Opportunities",
    introduction = []
}) => {
  return (
    <header className="w-full pt-20 pb-4 md:pt-28 md:pb-6 text-center overflow-hidden bg-black">
      {/* REMOVED Background Gradient Image Div */}
      
       {/* REMOVED Optional black overlay Div */}

      {/* Content - No longer needs relative z-10 if overlays are gone */}
      <div className="flex flex-col items-center gap-4 md:gap-6 max-w-3xl mx-auto px-4">
        {/* Badge styling - ensure consistency if needed */}
        <Badge className="bg-[#0d0d12] hover:bg-[#0d0d12] rounded-full border-[0.8px] border-solid border-[#1a1d31] px-4 py-1.5">
            <span className="font-inter font-normal text-sm md:text-base leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA]">
                Time Audit
            </span>
        </Badge>

        {/* Ensure text colors and fonts match Infra styling */}
        <h1 className="font-poppins font-semibold text-[#ffffffde] text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
          {title}
        </h1>

        <p className="font-inter font-normal text-[#7b7c8c] text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-4 text-[#a0a0a8] text-sm md:text-base font-inter space-y-1">
            {introduction.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </div>
      </div>
    </header>
  );
}; 