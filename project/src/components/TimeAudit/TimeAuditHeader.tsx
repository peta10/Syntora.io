import React from 'react';
import { Badge } from '../ui/badge';

interface TimeAuditHeaderProps {
    title?: string;
    subtitle?: string;
    introduction?: string[];
}

export const TimeAuditHeader: React.FC<TimeAuditHeaderProps> = ({ 
    title = "Time Audit Questionnaire", 
    subtitle = "Identify Your High-Value Automation Opportunities",
    introduction = [
        "Unlock efficiency by pinpointing where automation can make the biggest impact.",
        "This 5-10 minute audit provides personalized insights based on your industry, role, and business size."
    ]
}) => {
  return (
    <header className="relative w-full pt-20 pb-10 md:pt-28 md:pb-16 text-center overflow-hidden bg-[#0d0d12]">
      {/* Background Gradient Image */}
      <div
        className="absolute inset-x-0 top-0 h-64 z-0 opacity-30 md:opacity-40 pointer-events-none"
        style={{
          backgroundImage: `url('/image.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
       {/* Optional Black Overlay for contrast */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 md:gap-6 max-w-3xl mx-auto px-4">
        <Badge className="bg-[#1a1d31]/60 backdrop-blur-sm hover:bg-[#1a1d31]/80 rounded-full border-[0.8px] border-solid border-white/10 px-4 py-1.5 shadow-md">
            <span className="font-inter font-normal text-sm md:text-base leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA]">
                Syntora Time Audit
            </span>
        </Badge>

        <h1 className="font-poppins font-semibold text-[#ffffffde] text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
          {title}
        </h1>

        <p className="font-inter font-normal text-[#7b7c8c] text-base md:text-lg leading-relaxed max-w-xl">
          {subtitle}
        </p>

        <div className="mt-4 text-[#a0a0a8] text-sm md:text-base font-inter space-y-1 max-w-xl">
            {introduction.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </div>
      </div>
    </header>
  );
}; 