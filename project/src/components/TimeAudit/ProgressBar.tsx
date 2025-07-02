import React from 'react';
import { useTimeAuditStore } from '../../stores/timeAuditStore'; // Relative path

export const ProgressBar: React.FC = () => {
  const { currentStep, totalSteps } = useTimeAuditStore();
  // Calculate progress based on active steps (excluding final result step for 100%)
  const activeSteps = totalSteps - 1; // e.g., Demo, Questions, Loading
  // Progress goes from 0% (start of Demo) to 100% (end of Loading)
  const progressPercentage = Math.min(((currentStep - 1) / activeSteps) * 100, 100);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pt-6 pb-10">
      <div className="w-full bg-[#1a1d31] rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA] h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
          aria-valuenow={progressPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
          role="progressbar"
          aria-label="Questionnaire progress"
        />
      </div>
    </div>
  );
}; 