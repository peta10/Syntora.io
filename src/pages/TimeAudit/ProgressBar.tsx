import React from 'react';
import { useTimeAuditStore } from '@/stores/timeAuditStore'; // Use alias
import { cn } from "@/lib/utils"; // Import cn utility

// Define step labels
const stepLabels = [
  "Profile",    // Step 1
  "Workflow",   // Step 2
  "Results"     // Step 3
];

export const ProgressBar: React.FC = () => {
  const currentStep = useTimeAuditStore((state) => state.currentStep);
  // Use the length of stepLabels to determine total steps dynamically
  const totalSteps = stepLabels.length;

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <div className="flex justify-between items-end mb-1">
        {/* Render Step Labels */} 
        {stepLabels.map((label, index) => (
          <div 
            key={index}
            className={cn(
                "text-xs font-medium text-center", 
                index + 1 <= currentStep ? 'text-[#a0a0a8]' : 'text-[#4a4d61]', // Highlight active/past steps
                // Basic attempt to align labels above segments
                totalSteps === 3 && index === 0 && "flex-1 text-left",
                totalSteps === 3 && index === 1 && "flex-1 text-center", 
                totalSteps === 3 && index === 2 && "flex-1 text-right",
            )} 
           >
            {label}
          </div>
        ))}
      </div>
      <div className="w-full bg-[#1a1d31] rounded-full h-2 overflow-hidden flex"> 
        {/* Create segments based on steps */}
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepIndex = index + 1;
          const isCompleted = stepIndex < currentStep;
          const isActive = stepIndex === currentStep;
          const segmentWidthPercentage = 100 / totalSteps;
          
          return (
            <div
              key={stepIndex}
              className="h-full transition-all duration-500 ease-out"
              style={{ width: `${segmentWidthPercentage}%` }}
            >
              {/* Inner div represents filled progress */}
              <div 
                className={cn(
                  "h-full rounded-full",
                  // Active step shows partial fill (e.g., 50%) or full if completed
                  // Completed steps are fully filled
                   (isActive || isCompleted) ? "bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA]" : "bg-transparent" 
                )}
                style={{
                  // If active, simulate partial progress (e.g., 50% fill) - adjust as needed
                  // If completed, it's 100% fill
                  // If future, it's 0%
                 // width: isActive ? '50%' : (isCompleted ? '100%' : '0%'), 
                 // Simpler: Just fill completed/active fully for now
                   width: (isActive || isCompleted) ? '100%' : '0%', 
                   transition: 'width 0.5s ease-out'
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}; 