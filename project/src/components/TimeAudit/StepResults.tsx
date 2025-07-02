import React, { useEffect, useState, ChangeEvent } from 'react';
import { useTimeAuditStore, Answers } from '../../stores/timeAuditStore'; // Relative path
import { Button } from '../../components/ui/button'; // Relative path
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card'; // Relative path
import { Input } from '../../components/ui/input'; // Relative path
import { Label } from '../../components/ui/label'; // Relative path
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { BusinessSize, Question } from '../../data/timeAuditData'; // Relative path

// --- Calculation Logic (Placeholder) ---

// Example: Assign rough hourly estimates based on time range answers
const timeEstimateToHours = (estimate: string | undefined): number => {
  if (!estimate) return 0;
  // Basic parsing - refine this based on actual options and desired weighting
  const range = estimate.split('-');
  if (range[0] === '0') return 0.5; // e.g., '0-1' -> 0.5 hours
  if (estimate.includes('+')) return parseFloat(estimate.replace('+', '')) + 1; // e.g., '6+' -> 7
  if (range.length === 2) return (parseFloat(range[0]) + parseFloat(range[1])) / 2; // Midpoint
  return parseFloat(estimate) || 0; // Fallback
};

// Placeholder: Convert question type answers to weekly hours
const calculateWeeklyHours = (questionId: string, answer: any, timeOptions: any): number => {
    // This needs to be much more sophisticated based on question ID patterns and timeOptions
    if (typeof answer !== 'string') return 0;
    const hours = timeEstimateToHours(answer);
    if (timeOptions?.hoursPerDay) return hours * 5; // Assume 5 day week
    if (timeOptions?.hoursPerMonth) return hours / 4; // Rough conversion
    return hours; // Assume weekly if not specified otherwise
};

// Placeholder: Calculate total manual hours and potential savings
const calculateResults = (answers: Answers, allQuestions: Question[]) => {
  let totalManualHours = 0;
  let potentialAutomationHours = 0;
  const topOpportunities: { id: string; text: string; hours: number }[] = [];

  allQuestions.forEach(q => {
      if (q.type === 'timeEstimate' && answers[q.id]) {
          const weeklyHours = calculateWeeklyHours(q.id, answers[q.id], q.timeOptions);
          totalManualHours += weeklyHours;
          // Placeholder: Assume 50% automation potential for timeEstimate questions
          const potentialSaving = weeklyHours * 0.5;
          potentialAutomationHours += potentialSaving;
          if (potentialSaving > 0) {
              topOpportunities.push({ id: q.id, text: q.text, hours: parseFloat(potentialSaving.toFixed(1)) });
          }
      }
      // Add logic for other question types (e.g., scale might influence potential)
  });

  // Sort opportunities by potential saving
  topOpportunities.sort((a, b) => b.hours - a.hours);

  const automationScore = totalManualHours > 0 ? Math.min(Math.round((potentialAutomationHours / totalManualHours) * 100), 100) : 0;

  return {
    totalManualHours: parseFloat(totalManualHours.toFixed(1)),
    potentialAutomationHours: parseFloat(potentialAutomationHours.toFixed(1)),
    automationScore,
    topOpportunities: topOpportunities.slice(0, 5), // Show top 5
  };
};

// --- Component --- 

type AnalysisResult = ReturnType<typeof calculateResults>;

export const StepResults: React.FC = () => {
  const {
      answers,
      goToStep,
      currentStep,
      setAutomationScore,
      automationScore,
      relevantSections, // Needed to get all questions for calculation
      selectedSizeId, // Needed for visual calculator type
      reset // Get reset function from store
  } = useTimeAuditStore();

  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // Combine all questions for calculation
  const allQuestions = relevantSections.flatMap(section => section.questions);

  // Effect to calculate results when moving to loading/results step
  useEffect(() => {
    if (currentStep === 3 && !results) { // Only calculate if moving to step 3 and no results yet
      setIsLoading(true);
      const calculated = calculateResults(answers, allQuestions);
      setResults(calculated);
      setAutomationScore(calculated.automationScore);

      // Simulate calculation delay for UX
      const timer = setTimeout(() => {
        setIsLoading(false);
        goToStep(4); // Move to the actual results display step
      }, 1500); // Shorter delay now calculation is pseudo-real

      return () => clearTimeout(timer);
    } else if (currentStep === 4) {
        // Ensure loading is off if we navigate back to results
        setIsLoading(false);
        // Re-fetch results from state if needed (though calculation should be stable)
        if (!results && automationScore !== null) {
             const calculated = calculateResults(answers, allQuestions);
             setResults(calculated);
        }
    } else {
        // Reset if navigating away
        // setIsLoading(true); // Don't reset loading if just moving away
        // setResults(null); // Keep results if user navigates back/forth
    }
  }, [currentStep, answers, allQuestions, goToStep, setAutomationScore, results, automationScore]);

  const handleEmailSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Submitting email for detailed report:', email);
      // TODO: Implement actual email submission logic (API call)
      setEmailSubmitted(true);
      // Optionally clear email: setEmail('');
  }

  const handleStartOver = () => {
    reset(); // Call the reset function from the store
    // goToStep(1); // Zustand reset already sets step to 1
  }

  // --- Visual Calculator Component --- 
  const VisualCalculator = ({ score, size }: { score: number, size: BusinessSize | null }) => {
      const fillPercentage = Math.min(score, 100);
      let containerStyle = "w-48 h-64 border-2 border-[#3a3d51] rounded-lg relative overflow-hidden bg-black/30"; // Default: Tank/Medium
      let liquidStyle = "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-500 to-emerald-400";

      if (size === 'small') { // Flask style
          containerStyle = "w-48 h-64 border-2 border-[#3a3d51] rounded-t-lg rounded-b-full relative overflow-hidden bg-black/30 flask-neck"; // Add flask-neck class
      } else if (size === 'large') { // System/Complex style
          // Simplified representation for now
           containerStyle = "w-64 h-64 border-2 border-[#3a3d51] rounded-xl relative overflow-hidden bg-black/30 grid grid-cols-2 gap-1 p-1";
           // For large, maybe show multiple bars or a different graphic?
           return (
                <div className={containerStyle}>
                    <div className="text-center col-span-2 mb-2 text-sm text-[#7b7c8c]">System Capacity</div>
                    <div className="h-full w-full bg-[#1a1d31] rounded relative overflow-hidden">
                        <motion.div 
                            className={liquidStyle}
                            initial={{ height: '0%' }}
                            animate={{ height: `${fillPercentage}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        />
                    </div>
                     <div className="h-full w-full bg-[#1a1d31] rounded relative overflow-hidden">
                        <motion.div 
                            className={liquidStyle}
                            initial={{ height: '0%' }}
                            animate={{ height: `${fillPercentage}%` }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        />
                    </div>
                     <div className="text-center col-span-2 mt-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA]">
                         {score}%
                     </div>
                </div>
           );
      }
      
      return (
          <div className={containerStyle}>
               {/* Animated liquid fill */}
              <motion.div
                  className={liquidStyle}
                  initial={{ height: '0%' }}
                  animate={{ height: `${fillPercentage}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
              >
                 {/* Optional: Add subtle wave/bubble effect here */}
              </motion.div>
               {/* Score Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                     <span className="text-3xl font-bold text-white/80 mix-blend-overlay pointer-events-none">
                         {score}% 
                     </span>
                 </div> 
          </div>
      );
  }

  // Loading state (Step 3)
  if (currentStep === 3 || (currentStep === 4 && isLoading && !results)) {
    return (
      <div className="w-full max-w-3xl mx-auto px-4 pb-16 flex flex-col items-center justify-center min-h-[400px] gap-4">
        <Loader2 className="h-12 w-12 text-[#6E86FF] animate-spin" />
        <p className="text-[#a0a0a8] font-inter text-lg">Analyzing your responses...</p>
      </div>
    );
  }

  // Results display state (Step 4)
  if (currentStep === 4 && results) {
    return (
        <div className="w-full max-w-3xl mx-auto px-4 pb-16 space-y-8">
            <Card className="bg-[#0d0d12] border-[#1a1d31]">
                <CardHeader>
                    <CardTitle className="text-[#ffffffde] text-2xl font-medium font-poppins text-center">Your Automation Potential</CardTitle>
                    <CardDescription className="text-[#7b7c8c] font-inter text-center">Based on your responses, here's a summary of potential time savings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8 text-center">
                   {/* Visual Calculator */}
                   <div className="flex flex-col items-center justify-center my-8">
                        <VisualCalculator score={results.automationScore} size={selectedSizeId} />
                         <p className="text-[#a0a0a8] mt-4 text-sm font-medium">
                            Potential Automation Score
                         </p>
                   </div>
                   
                   {/* Stats Grid */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                       <div className="bg-black p-4 rounded border border-[#1a1d31]">
                           <p className="text-sm text-[#7b7c8c]">Total Manual Hours / Week (Est.)</p>
                           <p className="text-xl font-semibold text-[#ffffffde]">{results.totalManualHours} hrs</p>
                       </div>
                       <div className="bg-black p-4 rounded border border-[#1a1d31]">
                           <p className="text-sm text-[#7b7c8c]">Potential Automated Hours / Week</p>
                           <p className="text-xl font-semibold text-green-400">{results.potentialAutomationHours} hrs</p>
                       </div>
                   </div>

                    {/* Top Opportunities */}
                   {results.topOpportunities.length > 0 && (
                       <div className='text-left'>
                           <h4 className="text-lg font-semibold text-[#ffffffde] mb-3">Top Automation Opportunities:</h4>
                           <ul className="space-y-2 list-disc list-inside text-[#a0a0a8]">
                               {results.topOpportunities.map(opp => (
                                   <li key={opp.id} className="text-sm">{opp.text} (~{opp.hours} hrs/week potential saving)</li>
                               ))}
                           </ul>
                       </div>
                   )}

                    {/* Email Form */}
                   <div className="border-t border-[#1a1d31] pt-8">
                        <h4 className="text-lg font-semibold text-[#ffffffde] mb-3">Get Your Detailed Report & Analysis</h4>
                        <p className="text-[#7b7c8c] text-sm mb-4 max-w-md mx-auto">Enter your email to receive a personalized breakdown of these results and potential next steps.</p>
                        {emailSubmitted ? (
                            <p className="text-green-400 font-medium">Thank you! Your detailed report will be sent shortly.</p>
                        ) : (
                            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                <Input 
                                    type="email"
                                    placeholder="Enter your email address" 
                                    value={email}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                    required
                                    className="flex-grow bg-black border-[#3a3d51] text-[#ffffffde] focus:ring-[#6E86FF] placeholder:text-[#555761]"
                                />
                                <Button 
                                    type="submit"
                                    className="bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA] text-white font-semibold hover:opacity-90 transition-opacity duration-300 whitespace-nowrap"
                                >
                                    Send My Report
                                </Button>
                            </form>
                        )}
                   </div>

                </CardContent> 
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-start pt-4">
                <Button 
                    onClick={handleStartOver} // Use reset handler
                    variant="outline"
                    className="border-[#3a3d51] text-[#a0a0a8] hover:bg-[#1a1d31] hover:text-white"
                >
                    Start Over
                </Button>
            </div>
        </div>
    );
  }
  
  // Fallback / Error state
  return (
       <div className="w-full max-w-3xl mx-auto px-4 pb-16 text-center text-[#7b7c8c]">
        An unexpected error occurred or calculation failed.
        <Button onClick={handleStartOver} variant="outline" className="mt-4 border-[#3a3d51] text-[#a0a0a8] hover:bg-[#1a1d31] hover:text-white">Start Over</Button>
      </div>
  );
}; 