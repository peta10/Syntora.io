import React from 'react'; // Keep basic React import
import { useTimeAuditStore } from '@/stores/timeAuditStore'; // Keep Zustand store import
import { TimeAuditHeader } from './TimeAuditHeader'; // Keep Header import
import { ProgressBar } from './ProgressBar'; // Restore ProgressBar import
import { StepDemographics } from './StepDemographics'; // Restore StepDemographics import
import { StepQuestions } from './StepQuestions'; // Restore StepQuestions import
import { StepResults } from './StepResults'; // Restore StepResults import
import { motion, AnimatePresence } from 'framer-motion'; // Restore animation imports
import { Helmet } from 'react-helmet-async'; // Keep Helmet import
import { getRelevantQuestions } from '@/data/timeAudit'; // <-- Updated import path

// --- REMOVE SurveyJS Imports ---
// import { Model } from 'survey-core';
// import { Survey } from 'survey-react-ui';
// import 'survey-core/survey-core.min.css'; 
// import './survey-theme.css'; 
// import { industries, userRoles, businessSizes, getRelevantQuestions, Question, Section as TimeAuditSection } from '@/data/timeAuditData';

// --- REMOVE SurveyJS Helpers & State ---
// const mapQuestionToSurveyElement = ...
// const parseTimeEstimate = ...
// const calculatePotentialSavings = ...
// const demographicsSurveyJson = ...

const TimeAuditPage: React.FC = () => {
  // Restore original state usage from Zustand
  const { currentStep, answers, setAnswer, nextStep, setResults, setDemographics, setRelevantData } = useTimeAuditStore(); 

  // --- REMOVE SurveyJS State ---
  // const [surveyModel, setSurveyModel] = useState<Model | null>(null);
  // const [surveyJson, setSurveyJson] = useState<any>(demographicsSurveyJson);
  // const [currentSurveyStage, setCurrentSurveyStage] = useState<...>(...);
  // const [finalResultsData, setFinalResultsData] = useState<any>(null);

  // --- REMOVE SurveyJS Callbacks & Effects ---
  // const onSurveyComplete = useCallback(...);
  // useEffect(() => { /* model init */ }, []);
  // useEffect(() => { /* json update */ }, [surveyJson, surveyModel]);

  // --- Handler for StepDemographics completion ---
  const handleDemographicsComplete = (data: { selectedIndustryId: string; selectedRoleId: string; selectedSizeId: string }) => {
    console.log("Demographics complete:", data);
    // Update store with demographics and reset answers/results
    setDemographics(data.selectedIndustryId, data.selectedRoleId, data.selectedSizeId);
    
    // ---> ADD THIS BACK: Fetch relevant data and update the store <---
    const { relevantIndustry, relevantSections } = getRelevantQuestions(
      data.selectedIndustryId, 
      data.selectedRoleId, 
      data.selectedSizeId
    );
    setRelevantData(relevantIndustry, relevantSections); 
    console.log("Set relevant sections in store:", relevantSections); // Log for confirmation
    // ---> END ADDITION <--- 

    nextStep(); // Move to the questions step
  };

  // --- Handler for StepQuestions completion ---
  const handleQuestionsComplete = (updatedAnswers: Record<string, any>) => {
    console.log("Questions complete:", updatedAnswers);
    // Update answers in the store (assuming StepQuestions passes the full set)
    // Note: setAnswer in the store currently takes one answer at a time.
    // We might need a setAllAnswers function in the store, or iterate here.
    Object.entries(updatedAnswers).forEach(([key, value]) => {
        setAnswer(key, value);
    });

    // --- Trigger Calculation (Logic likely moved to StepResults) ---
    // const { hours, message } = calculatePotentialSavings(updatedAnswers); // Or get all answers from store
    // setResults(hours, message);
    nextStep(); // Move to the results step
  };

  // --- Restore original step rendering logic ---
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepDemographics onComplete={handleDemographicsComplete} />;
      case 2:
        return <StepQuestions onComplete={handleQuestionsComplete} />;
      case 3: // Step 3 now handles both Loading and Results display
        return <StepResults />; // StepResults likely handles its own loading/calculation now
      default:
        // Optionally reset state or show error message
        console.error('Invalid step:', currentStep);
        // Perhaps reset to step 1 if state is invalid
        // useTimeAuditStore.getState().goToStep(1);
        return <div>Invalid Step</div>; // Fallback
    }
  };

  // Add this before your component's return statement
  const timeAuditSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Workflow Automation Time Audit Calculator",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Identify time-saving opportunities with Syntora's free time audit tool. Calculate potential savings from workflow automation and business process automation.",
    "creator": {
      "@type": "Organization",
      "name": "Syntora",
      "url": "https://syntora.com"
    },
    "isAccessibleForFree": true,
    "isPartOf": {
      "@type": "WebPage",
      "url": "https://syntora.com/time-audit",
      "name": "Workflow Automation Time Audit Calculator | Syntora",
      "description": "Identify time-saving opportunities with Syntora's free time audit tool. Calculate potential savings from workflow automation and business process automation."
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <Helmet>
        <title>Workflow Automation Time Audit Calculator | Syntora</title>
        <meta name="description" content="Identify time-saving opportunities with Syntora's free time audit tool. Calculate potential savings from workflow automation and business process automation." />
        <script type="application/ld+json">
          {JSON.stringify(timeAuditSchema)}
        </script>
      </Helmet>

      <TimeAuditHeader />
      {/* Restore ProgressBar */}
      <div className="mb-8 md:mb-12">
        <ProgressBar />
      </div>
      <main className="w-full px-4">
        {/* Restore original container styling if needed */}
        <div className="max-w-2xl mx-auto bg-gray-900/30 rounded-lg p-6 md:p-10">
          {/* Restore AnimatePresence for transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep} // Use currentStep for animation key
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()} 
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default TimeAuditPage; 