import React, { useEffect, useState, ChangeEvent } from 'react';
import { useTimeAuditStore } from '@/stores/timeAuditStore'; // Use alias
import { Button } from '@/components/ui/button'; // Use alias
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Use alias
import { Input } from '@/components/ui/input'; // Use alias
import { Label } from '@/components/ui/label'; // Use alias
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { zodResolver } from "@hookform/resolvers/zod"; // For form validation
import { useForm } from "react-hook-form"; // For form handling
import * as z from "zod"; // For validation schema
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"; // To display results message
import { CheckCircledIcon } from '@radix-ui/react-icons'; // For success message
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// Import Supabase API functions
import { submitTimeAudit } from '@/lib/api';

// Placeholder types - replace with actual calculation results
type AnalysisResult = {
    totalManualHours: number;
    potentialAutomationHours: number;
    automationScore: number;
    topOpportunities: { id: string; text: string; hours: number }[];
    estimatedAnnualFinancialImpact?: number; // <-- Add optional financial impact
};

// --- Validation Schema ---
const formSchema = z.object({
  lead_name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  lead_email: z.string().email({ message: "Please enter a valid email address." }),
  lead_company: z.string().optional(), // Company name is optional
});

type FormData = z.infer<typeof formSchema>;

// --- Loading Messages ---
const loadingMessages = [
  "Analyzing your responses...",
    "Calculating time-saving potential...",
    "Identifying automation opportunities...",
    "Preparing your personalized report...",
    "Almost there, finalizing results..."
];

// --- Results Calculation Logic ---
const calculatePotentialSavings = (answers: Record<string, any>) => {
    console.log("Calculating potential savings from answers:", answers);

    // Simplified calculation logic
    // In a real implementation, you'd have more sophisticated calculations for each industry
    
    // Base calculation values
    let totalManualHours = 0;
    let potentialAutomationHours = 0;
    const topOpportunities: {id: string; text: string; hours: number}[] = [];

    // Iterate through answers and extract time estimates
    Object.entries(answers).forEach(([key, value]) => {
        // Simple detection of time-related answers (in real app, you'd have better structure)
        if (typeof value === 'number') {
            totalManualHours += value;
            
            // Assume 40-60% of time could be saved
            const savingFactor = 0.4 + (Math.random() * 0.2); // Random value between 0.4 and 0.6
            const potentialSavings = value * savingFactor;
            
            potentialAutomationHours += potentialSavings;
            
            // Add to opportunities if significant
            if (potentialSavings >= 1) {
                const questionKey = key.split('-')[1] || key; // Extract simple ID from complex key
                topOpportunities.push({
                    id: key,
                    text: `${questionKey.charAt(0).toUpperCase() + questionKey.slice(1)} automation`,
                    hours: Math.round(potentialSavings * 10) / 10 // Round to 1 decimal place
                });
            }
        }
        
        // For string values that are numbers (e.g., "5" hours)
        if (typeof value === 'string' && /^\d+(\.\d+)?$/.test(value)) {
            const numValue = parseFloat(value);
            totalManualHours += numValue;

            // Similar calculation
            const savingFactor = 0.4 + (Math.random() * 0.2);
            const potentialSavings = numValue * savingFactor;
            
            potentialAutomationHours += potentialSavings;
            
            // Add to opportunities if significant
            if (potentialSavings >= 1) {
                const questionKey = key.split('-')[1] || key;
                topOpportunities.push({
                    id: key,
                    text: `${questionKey.charAt(0).toUpperCase() + questionKey.slice(1)} automation`,
                    hours: Math.round(potentialSavings * 10) / 10
                });
            }
        }
    });
    
    // Estimate financial impact (crude hourly rate * 52 weeks)
    const avgHourlyRate = 50; // Placeholder hourly rate in dollars
    const annualFinancialImpact = Math.round(potentialAutomationHours * avgHourlyRate * 52);
    
    // Round values for display
    totalManualHours = Math.round(totalManualHours);
    potentialAutomationHours = Math.round(potentialAutomationHours);

    // Sort opportunities by hours (descending) and take top 5
    topOpportunities.sort((a, b) => b.hours - a.hours);
    const top5Opportunities = topOpportunities.slice(0, 5);
    
    // Generate message based on hours
    let message = "Based on your responses, you could save";
    
    if (potentialAutomationHours > 40) {
        message = `${message} significant time! We've identified over ${potentialAutomationHours} hours weekly that could be automated, which translates to dramatic efficiency gains.`;
    } else if (potentialAutomationHours > 20) {
        message = `${message} substantial time through automation. The ${potentialAutomationHours} hours weekly we've identified can have a major impact on your productivity.`;
    } else if (potentialAutomationHours > 10) {
        message = `${message} valuable time every week. The identified ${potentialAutomationHours} hours of potential automation can significantly improve your productivity.`;
    } else if (potentialAutomationHours > 5) {
        message = `${message} several hours each week through automation. The ${potentialAutomationHours} hours we've identified can boost efficiency in your processes.`;
    } else if (potentialAutomationHours > 0) {
        message = `${message} some time through automation. We've identified ${potentialAutomationHours} hours weekly that could be recovered with the right solutions.`;
    } else {
        message = "Based on your responses, your current processes are already quite optimized. However, we may still be able to suggest targeted improvements.";
  }

    // Calculate automation score (percentage of total time that can be saved)
    const automationScore = totalManualHours > 0 
        ? Math.round((potentialAutomationHours / totalManualHours) * 100) 
        : 0;
    
    return {
        hours: potentialAutomationHours,
        message,
        details: {
            totalManualHours,
            potentialAutomationHours,
            automationScore,
            topOpportunities: top5Opportunities,
            estimatedAnnualFinancialImpact: annualFinancialImpact,
        }
    };
};

export const StepResults: React.FC = () => {
  const { 
    currentStep, 
    answers,
    resultsMessage, 
    potentialSavingsHours, 
    selectedIndustryId,
    selectedRoleId,
    selectedSizeId,
    setAnswer, 
    goToStep
  } = useTimeAuditStore();
  
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [currentLoadingMessageIndex, setCurrentLoadingMessageIndex] = useState(0);

  // --- React Hook Form Setup ---
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lead_name: "",
      lead_email: "",
      lead_company: "",
    },
  });

  // Trigger analysis only when on Step 3 and results aren't loaded
  useEffect(() => {
    if (currentStep !== 3 || results) {
      if (results) setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setCurrentLoadingMessageIndex(0);

    const messageInterval = setInterval(() => {
      setCurrentLoadingMessageIndex(prevIndex => (prevIndex + 1) % loadingMessages.length);
    }, 1500);

    // Simulate calculation time
    const calculationTimer = setTimeout(() => {
      clearInterval(messageInterval);

      // --- Call the refined calculation logic --- 
      const calculationOutput = calculatePotentialSavings(answers);
      
      // Update the zustand store with calculated hours/message if needed (optional)
      // You might want to store the full details object instead/as well
      // useTimeAuditStore.getState().setResults(calculationOutput.hours, calculationOutput.message);

      // Set the local state with the detailed results object
      console.log("Setting results state with:", calculationOutput.details);
      setResults(calculationOutput.details); 
      setIsLoading(false);
      
    }, 5000); // Keep simulation time

    return () => {
      clearTimeout(calculationTimer);
      clearInterval(messageInterval);
    };

  }, [currentStep, results, answers]); // Use allAnswers in dependency array

  // --- Email Submit Handler (Placeholder) ---
  const handleEmailSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Submitting email for detailed report:', email);
      // TODO: Implement actual email submission logic (e.g., API call)
      setEmailSubmitted(true); // This state seems unused now, onSubmit handles final step
  }

  // --- Final Form Submission Handler ---
  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    console.log("Lead Capture Data:", data);
    console.log("Full Audit Answers:", answers); // Use answers

    try {
      // Prepare data for Supabase
      const timeAuditData = {
        email: data.lead_email,
        industry_id: selectedIndustryId || '',
        role_id: selectedRoleId || '',
        size_id: selectedSizeId || '',
        answers: answers,
        potential_savings_hours: results?.potentialAutomationHours || 0,
        results_message: resultsMessage || '',
        // Store additional metadata about the lead
        lead_name: data.lead_name,
        lead_company: data.lead_company || null
      };
      
      // Submit data to Supabase
      const { data: submissionResult, error } = await submitTimeAudit({
        email: data.lead_email,
        industry_id: selectedIndustryId || '',
        role_id: selectedRoleId || '',
        size_id: selectedSizeId || '',
        answers: answers,
        potential_savings_hours: results?.potentialAutomationHours || 0,
        results_message: resultsMessage || ''
      });

      if (error) {
        throw error;
      }

      console.log("Time audit data submitted to Supabase:", submissionResult);
        setIsSubmitted(true); // Set final submitted state
      
      // Here you could trigger additional actions like sending an email
      // For example: await sendEmail(data.lead_email, 'Your Time Audit Results', ...);
    } catch (error) {
      console.error("Submission failed:", error);
      setSubmitError("An error occurred while submitting your information. Please try again.");
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="w-full max-w-3xl mx-auto px-4 pb-16 flex flex-col items-center justify-center min-h-[300px] gap-4">
        <Loader2 className="h-12 w-12 text-[#6E86FF] animate-spin" />
        <p className="text-[#a0a0a8] font-inter text-lg text-center">
          {loadingMessages[currentLoadingMessageIndex]}
        </p>
      </div>
    );
  }

  // Results display state (placeholder results)
  if (!isLoading && results) {
    // Determine if the form has been submitted successfully for conditional rendering
    const showThankYou = isSubmitted; // Use the existing isSubmitted state

    return (
        <div className="w-full max-w-3xl mx-auto px-4 pb-16 space-y-8 text-[#a0a0a8]">
            <Card className="bg-[#0d0d12] border-[#1a1d31]">
                <CardHeader>
                    <CardTitle className="text-[#ffffffde] text-2xl font-medium font-poppins text-center">Your Workflow Automation Potential</CardTitle>
                    <CardDescription className="text-[#7b7c8c] font-inter text-center mt-1">Based on your responses, here's an estimate of potential time savings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8 pt-4"> 
                    {/* --- Top Section (Score) --- */}
                    <div className="text-center">
                       <motion.div 
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, type: 'spring'}}
                            // Adjusted styling for better integration
                            className="my-4 p-4 border border-[#3a3d51]/50 rounded-lg bg-gradient-to-br from-[#1a1d31]/30 to-[#0d0d12]/30 inline-block shadow-lg"
                        >
                           <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA]">
                               {results.automationScore}<span className='text-3xl'>%</span>
                           </div>
                           <p className="text-[#a0a0a8] mt-1 text-sm font-inter">Potential Automation Score</p>
                       </motion.div>
                    </div>
                    {/* --- End Score Section --- */}
                   
                   {/* --- Key Metrics Section --- */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        {/* Box 1: Total Hours */}
                       <div className="bg-[#11131f] p-4 rounded-lg border border-[#1a1d31]">
                           <p className="text-sm text-[#7b7c8c] font-inter mb-1">Total Manual Hours / Week</p>
                           <p className="text-2xl font-semibold text-[#ffffffde] font-poppins">{results.totalManualHours} hrs</p>
                       </div>
                       {/* Box 2: Savable Hours */}
                       <div className="bg-[#11131f] p-4 rounded-lg border border-[#1a1d31]">
                           <p className="text-sm text-[#7b7c8c] font-inter mb-1">Est. Savable Hours / Week</p>
                           <p className="text-2xl font-semibold text-[#ffffffde] font-poppins">{results.potentialAutomationHours} hrs</p>
                       </div>
                        {/* Box 3: Financial Impact */}
                        {results.estimatedAnnualFinancialImpact !== undefined && results.estimatedAnnualFinancialImpact > 0 && (
                          <div className="bg-[#11131f] p-4 rounded-lg border border-[#1a1d31] md:col-span-2"> {/* Span across 2 cols on medium+ */} 
                             <p className="text-sm text-[#7b7c8c] font-inter mb-1">Estimated Annual Financial Impact</p>
                             <p className="text-2xl font-semibold text-[#6E86FF] font-poppins">
                               ${results.estimatedAnnualFinancialImpact.toLocaleString(undefined, {maximumFractionDigits: 0})}
                             </p>
                         </div>
                        )}
                   </div>
                   {/* --- End Key Metrics --- */}

                   {/* --- Top Opportunities Section --- */}
                   <div> 
                       <h4 className="text-lg font-semibold text-[#ffffffde] mb-2 text-left font-inter">Top Automation Opportunities:</h4>
                       <ul className="space-y-1 text-left list-disc list-inside text-[#a0a0a8] font-inter pl-2">
                           {results.topOpportunities.map(opp => (
                               <li key={opp.id} className="text-sm">{opp.text} <span className='text-[#7b7c8c]'>(~{opp.hours} hrs/week)</span></li>
                           ))}
                       </ul>
                   </div>
                   {/* --- End Top Opportunities --- */}

                    {/* --- Lead Capture & CTA Section --- */}
                   <div className="border-t border-[#1a1d31] pt-6 space-y-4">
                        <h4 className="text-lg font-semibold text-[#ffffffde] font-inter text-center">Unlock Full Savings & Get Your Detailed Report</h4>
                        <p className="text-sm text-[#a0a0a8] text-center max-w-md mx-auto">Enter your details below. We'll email your personalized report and you can schedule a free consultation to discuss these opportunities.</p>
                        
                        {showThankYou ? (
                            // Show Thank You message after successful submission
                             <Alert variant="default" className="border-green-500/50 text-green-300 bg-[#0d0d12]">
                               <CheckCircledIcon className="h-5 w-5 text-green-400" />
                               <AlertTitle className="font-semibold font-poppins text-green-300">Report Sent!</AlertTitle>
                               <AlertDescription className="font-inter text-green-300/90">
                                 Check your email for the detailed report. You can now schedule a consultation.
                               </AlertDescription>
                             </Alert>
                        ) : (
                            // Show Lead Capture Form
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
                                  <FormField
                                    control={form.control}
                                    name="lead_name"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel className="font-inter font-medium text-[#a0a0a8]">Full Name</FormLabel>
                                        <FormControl>
                                          <Input placeholder="Your Name" {...field} className="bg-[#0d0d12] border-[#1a1d31] text-[#ffffffde] focus:ring-[#6E86FF]" />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={form.control}
                                    name="lead_email"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel className="font-inter font-medium text-[#a0a0a8]">Work Email</FormLabel>
                                        <FormControl>
                                          <Input type="email" placeholder="name@company.com" {...field} className="bg-[#0d0d12] border-[#1a1d31] text-[#ffffffde] focus:ring-[#6E86FF]" />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={form.control}
                                    name="lead_company"
                                    render={({ field }) => (
                                      <FormItem>
                                          <FormLabel className="font-inter font-medium text-[#a0a0a8]">Company Name <span className="text-xs text-[#7b7c8c]">(Optional)</span></FormLabel>
                                        <FormControl>
                                          <Input placeholder="Your Company" {...field} className="bg-[#0d0d12] border-[#1a1d31] text-[#ffffffde] focus:ring-[#6E86FF]"/>
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                        
                                  {submitError && (
                                    <p className="text-sm text-red-400 font-inter">{submitError}</p>
                                   )}
                        
                                  <div className="flex justify-center pt-2">
                                    <Button 
                                        type="submit" 
                                        disabled={form.formState.isSubmitting}
                                        className="bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA] text-white font-semibold hover:opacity-90 transition-opacity duration-300 px-6 py-2"
                                    >
                                      {form.formState.isSubmitting ? (
                                          <>
                                              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                                          </>
                                       ) : "Submit & Get Report"} 
                                    </Button>
                                  </div>
                                </form>
                              </Form>
                        )}
                   </div>
                   {/* --- End Lead Capture Section --- */}
                </CardContent> 
            </Card>

            {/* --- Consultation CTA Button --- */}
            {showThankYou && (
                <div className="text-center mt-8">
                <Button 
                        className="bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA] text-white font-semibold hover:opacity-90 transition-opacity duration-300 px-8 py-3"
                        onClick={() => window.open('https://calendly.com/syntoraai/workflow-consultation', '_blank')}
                >
                        Schedule Your Free Consultation
                </Button>
            </div>
            )}
        </div>
    );
  }
  
   // Fallback if not loading and no results (should ideally not be reached if logic is sound)
   return (
       <div className="text-center text-[#a0a0a8]">
           <p>Could not load results. Please try starting over.</p>
            <Button onClick={() => goToStep(1)} variant="link" className="mt-2 text-[#7b7c8c]">Start Over</Button>
       </div>
   );
}; 