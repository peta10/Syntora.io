import React from 'react';
import { useTimeAuditStore } from '../stores/timeAuditStore'; // Relative path
import { TimeAuditHeader } from '../components/TimeAudit/TimeAuditHeader'; // Relative path
import { ProgressBar } from '../components/TimeAudit/ProgressBar'; // Relative path
import { StepDemographics } from '../components/TimeAudit/StepDemographics'; // Relative path
import { StepQuestions } from '../components/TimeAudit/StepQuestions'; // Relative path
import { StepResults } from '../components/TimeAudit/StepResults'; // Relative path
// import { Footer } from './Footer/Footer'; // Assuming Footer is now a page

const TimeAuditPage: React.FC = () => {
  const { currentStep } = useTimeAuditStore();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepDemographics />;
      case 2:
        return <StepQuestions />;
      case 3: // Loading/Analyzing state handled within StepResults
      case 4: // Results display state handled within StepResults
        return <StepResults />;
      default:
         // Optionally reset state or show error message
        console.error('Invalid step:', currentStep);
        // Maybe render StepDemographics as a fallback?
        return <StepDemographics />;
    }
  };

  return (
    // Use a key tied to the step to force re-mounts if needed, or rely on useEffect within steps
    <div className="min-h-screen bg-black text-white flex flex-col">
      <TimeAuditHeader />
      <ProgressBar />
      <main className="flex-grow w-full">
         {renderStep()} 
      </main>
      {/* <Footer /> // Add footer if it should be on this page */}
    </div>
  );
};

export default TimeAuditPage; 