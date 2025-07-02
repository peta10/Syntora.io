import React, { useState } from 'react';
import { useTimeAuditStore } from '@/stores/timeAuditStore';
import { Question, Section as TimeAuditSection } from '@/data/timeAudit/types'; // Updated import path
import { motion } from 'framer-motion'; // <-- Import motion

// --- Shadcn Imports ---
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { InfoCircledIcon } from '@radix-ui/react-icons'; // Example icon for tooltips
import { cn } from "@/lib/utils";

// --- Prop Interface ---
interface StepQuestionsProps {
  onComplete: (answers: Record<string, any>) => void;
}

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger sections slightly
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4, // Slightly longer duration for items
      ease: "easeOut",
    },
  },
};

export const StepQuestions: React.FC<StepQuestionsProps> = ({ onComplete }) => {
  const relevantSections = useTimeAuditStore((state) => state.relevantSections);
  const initialAnswers = useTimeAuditStore((state) => state.answers);
  const [answers, setAnswers] = useState<Record<string, any>>(initialAnswers || {});

  // Ensure sections are loaded but return null if not ready, ensuring main return is reached
  if (!relevantSections || relevantSections.length === 0) {
    console.warn("StepQuestions rendered with no relevant sections."); 
    return null; // Return null instead of a div here to satisfy FC type
  }

  const handleAnswerChange = (questionId: string, value: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  // Specific handler for multiple choice checkboxes
  const handleCheckboxChange = (questionId: string, optionValue: string, checked: boolean | 'indeterminate') => {
    setAnswers((prev) => {
      const currentSelection: string[] = prev[questionId] || [];
      let newSelection: string[];
      if (checked === true) {
        newSelection = [...currentSelection, optionValue];
      } else {
        newSelection = currentSelection.filter((val: string) => val !== optionValue);
      }
      newSelection = Array.from(new Set(newSelection));
      return { ...prev, [questionId]: newSelection };
    });
  };

   // Specific handler for time estimate selects
   const handleTimeEstimateChange = (questionId: string, timeKey: 'daily' | 'weekly' | 'monthly' | 'tx', value: string) => {
     // Store as sub-keys like `questionId-daily`
     const answerKey = `${questionId}-${timeKey}`;
     setAnswers((prev) => ({ ...prev, [answerKey]: value }));
   };

  const handleSubmit = () => {
    // TODO: Add validation if needed (e.g., check for required questions)
    console.log("Submitting answers:", answers);
    onComplete(answers);
  };

  const renderQuestion = (question: Question) => {
    const questionId = question.id;
    
    // --- Conditional Logic for Satisfaction/Challenges --- 
    if (question.id.endsWith('-satisfaction') || question.id.endsWith('-challenges')) {
      const methodQuestionId = question.id.replace(/-(satisfaction|challenges)$/, '-method');
      const methodAnswer = answers[methodQuestionId];
      
      // Define which method answers should *hide* these follow-up questions
      const nonApplicableMethods = ["Fully Manual", "N/A", "Fully Manual (Phone/Text/Paper)", "Manual Invoices (Word/Excel)", "Manual Timesheets/Paper Schedule", "Manual Phone/Email Orders", "Manual Paper Forms/Logs", "Primarily Phone/Text", "Manual (Phone/Email/Paper Contracts)", "Manual Paper/Email Approvals", "Manual Filing/Tracking"]; // Add variations
      
      // If no method answer exists OR if the method answer is one of the non-applicable ones, don't render this question
      if (!methodAnswer || nonApplicableMethods.some(naMethod => methodAnswer.startsWith(naMethod))) { 
          return null; // Hide the question
      }
    }

    // --- Conditional Logic for Frequency Questions ---
    if (question.id.endsWith('-freq')) {
      const baseQuestionId = question.id.replace(/-freq$/, '');
      const txAnswerKey = `${baseQuestionId}-tx`;
      const txAnswer = answers[txAnswerKey];
      
      // Only show frequency question if user has selected a per-transaction time estimate
      if (!txAnswer) {
        return null; // Hide the frequency question if no per-transaction option was selected
      }
    }
    // --- End Conditional Logic --- 

    const answer = answers[questionId]; // Get answer for the current question (including method/satisfaction/challenge)
    
    const QuestionLabel = (
        <div className="mb-2 flex items-center justify-between">
             {/* Use lighter text color for main label */}
             <Label htmlFor={questionId} className="text-base font-medium text-[#ffffffde] font-inter">{question.text}</Label>
             {question.tooltip && (
                 <TooltipProvider delayDuration={100}>
                     <Tooltip>
                         <TooltipTrigger asChild>
                             {/* Keep tooltip icon muted */}
                             <InfoCircledIcon className="h-4 w-4 text-[#7b7c8c] hover:text-[#a0a0a8] cursor-help" />
                         </TooltipTrigger>
                         {/* Tooltip content styling */}
                         <TooltipContent side="top" align="center" className="max-w-xs bg-[#0d0d12] border-[#1a1d31] text-[#ffffffde]">
                             <p>{question.tooltip}</p>
                         </TooltipContent>
                     </Tooltip>
                 </TooltipProvider>
             )}
         </div>
    );

    switch (question.type) {
      case 'single':
        return (
          <div key={questionId} className="p-4 rounded-lg border border-[#1a1d31] bg-[#11131f]">
            <div className="space-y-3">
              {QuestionLabel}
              <div className="flex flex-wrap gap-2">
                {question.options?.map((option) => (
                  <Button
                    key={option}
                    variant={answer === option ? "default" : "outline"} 
                    size="sm"
                    onClick={() => handleAnswerChange(questionId, option)}
                    className={cn(
                      "font-inter font-normal h-auto py-2 px-3",
                      answer === option 
                        ? "bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA] text-white border-transparent hover:opacity-90"
                        // Use lighter text for unselected buttons
                        : "bg-transparent border-[#3a3d51] text-[#d1d1d6] hover:bg-[#1a1d31] hover:text-white hover:border-[#6E86FF]"
                    )}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        );

      case 'multiple':
        return (
          <div key={questionId} className="p-4 rounded-lg border border-[#1a1d31] bg-[#11131f]">
            <div className="space-y-2">
              {QuestionLabel}
              <div className="space-y-1">
                  {question.options?.map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                              id={`${questionId}-${option}`}
                              checked={(answer || []).includes(option)}
                              onCheckedChange={(checked) => handleCheckboxChange(questionId, option, checked)}
                              className="border-[#3a3d51] data-[state=checked]:bg-[#6E86FF] data-[state=checked]:border-[#6E86FF] focus-visible:ring-[#6E86FF]"
                          />
                           {/* Use lighter text for checkbox labels */}
                          <Label htmlFor={`${questionId}-${option}`} className="font-normal text-[#d1d1d6] font-inter">{option}</Label>
                      </div>
                  ))}
              </div>
            </div>
          </div>
        );

      case 'scale':
        return (
            <div key={questionId} className="p-4 rounded-lg border border-[#1a1d31] bg-[#11131f]">
              <div className="space-y-3">
                {QuestionLabel}
                <div className="flex flex-wrap gap-2">
                  {question.options?.map((option) => (
                    <Button
                      key={option}
                      variant={answer === option ? "default" : "outline"} 
                      size="sm"
                      onClick={() => handleAnswerChange(questionId, option)}
                      className={cn(
                        "font-inter font-normal h-auto py-2 px-3",
                        answer === option 
                          ? "bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA] text-white border-transparent hover:opacity-90"
                          // Use lighter text for unselected buttons
                          : "bg-transparent border-[#3a3d51] text-[#d1d1d6] hover:bg-[#1a1d31] hover:text-white hover:border-[#6E86FF]"
                      )}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
        );

      case 'text':
        return (
          <div key={questionId} className="p-4 rounded-lg border border-[#1a1d31] bg-[#11131f]">
            <div className="space-y-2">
              {QuestionLabel}
              <Input
                id={questionId}
                value={answer || ""}
                onChange={(e) => handleAnswerChange(questionId, e.target.value)}
                placeholder={(question as any).placeholder ?? "Enter text..."}
                className="bg-[#0d0d12] border-[#1a1d31] text-[#ffffffde] focus:ring-[#6E86FF]"
              />
            </div>
          </div>
        );

       case 'timeEstimate':
           return (
               <div key={questionId} className="space-y-4 rounded-md border border-[#1a1d31] p-4 bg-[#0d0d12]">
                   {QuestionLabel}
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       {question.timeOptions?.hoursPerDay && (
                           <div className="space-y-1">
                                {/* Keep sub-labels slightly muted */}
                               <Label htmlFor={`${questionId}-daily`} className="text-sm font-medium text-[#7b7c8c] font-inter">Hours per Day</Label>
                               <Select
                                   value={answers[`${questionId}-daily`] || ""}
                                   onValueChange={(value) => handleTimeEstimateChange(questionId, 'daily', value)}
                               >
                                   <SelectTrigger id={`${questionId}-daily`} className="w-full bg-[#0d0d12] border-[#1a1d31] text-[#ffffffde] focus:ring-[#6E86FF]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                   <SelectContent className="bg-[#0d0d12] border-[#1a1d31] text-[#ffffffde]">
                                       {question.timeOptions.hoursPerDay.map(opt => <SelectItem key={opt} value={opt} className="focus:bg-[#1a1d31] focus:text-white">{opt}</SelectItem>)}
                                   </SelectContent>
                               </Select>
                           </div>
                       )}
                       {question.timeOptions?.hoursPerWeek && (
                           <div className="space-y-1">
                               <Label htmlFor={`${questionId}-weekly`} className="text-sm font-medium text-[#7b7c8c] font-inter">Hours per Week</Label>
                               <Select
                                   value={answers[`${questionId}-weekly`] || ""}
                                   onValueChange={(value) => handleTimeEstimateChange(questionId, 'weekly', value)}
                               >
                                   <SelectTrigger id={`${questionId}-weekly`} className="w-full bg-[#0d0d12] border-[#1a1d31] text-[#ffffffde] focus:ring-[#6E86FF]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                   <SelectContent className="bg-[#0d0d12] border-[#1a1d31] text-[#ffffffde]">
                                       {question.timeOptions.hoursPerWeek.map(opt => <SelectItem key={opt} value={opt} className="focus:bg-[#1a1d31] focus:text-white">{opt}</SelectItem>)}
                                   </SelectContent>
                               </Select>
                           </div>
                       )}
                        {question.timeOptions?.hoursPerMonth && (
                           <div className="space-y-1">
                               <Label htmlFor={`${questionId}-monthly`} className="text-sm font-medium text-[#7b7c8c] font-inter">Hours per Month</Label>
                               <Select
                                   value={answers[`${questionId}-monthly`] || ""}
                                   onValueChange={(value) => handleTimeEstimateChange(questionId, 'monthly', value)}
                               >
                                   <SelectTrigger id={`${questionId}-monthly`} className="w-full bg-[#0d0d12] border-[#1a1d31] text-[#ffffffde] focus:ring-[#6E86FF]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                   <SelectContent className="bg-[#0d0d12] border-[#1a1d31] text-[#ffffffde]">
                                       {question.timeOptions.hoursPerMonth.map(opt => <SelectItem key={opt} value={opt} className="focus:bg-[#1a1d31] focus:text-white">{opt}</SelectItem>)}
                                   </SelectContent>
                               </Select>
                           </div>
                       )}
                        {question.timeOptions?.hoursPerTransaction && (
                           <div className="space-y-1">
                               <Label htmlFor={`${questionId}-tx`} className="text-sm font-medium text-[#7b7c8c] font-inter">Hours per Transaction</Label>
                               <Select 
                                   value={answers[`${questionId}-tx`] || ""}
                                   onValueChange={(value) => handleTimeEstimateChange(questionId, 'tx', value)}
                               >
                                   <SelectTrigger id={`${questionId}-tx`} className="w-full bg-[#0d0d12] border-[#1a1d31] text-[#ffffffde] focus:ring-[#6E86FF]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                   <SelectContent className="bg-[#0d0d12] border-[#1a1d31] text-[#ffffffde]">
                                       {question.timeOptions.hoursPerTransaction.map(opt => <SelectItem key={opt} value={opt} className="focus:bg-[#1a1d31] focus:text-white">{opt}</SelectItem>)}
                                   </SelectContent>
                                </Select>
                           </div>
                       )}
                   </div>
               </div>
           );

      case 'openEnded':
        return (
          <div key={questionId} className="p-4 rounded-lg border border-[#1a1d31] bg-[#11131f]">
            <div className="space-y-2">
              {QuestionLabel}
              <Textarea
                id={questionId}
                value={answer || ""}
                onChange={(e) => handleAnswerChange(questionId, e.target.value)}
                placeholder={(question as any).placeholder ?? "Enter details..."}
                rows={4}
                className="bg-[#0d0d12] border-[#1a1d31] text-[#ffffffde] focus:ring-[#6E86FF]"
              />
            </div>
          </div>
        );

      case 'number':
        return (
          <div key={questionId} className="p-4 rounded-lg border border-[#1a1d31] bg-[#11131f]">
            <div className="space-y-2">
              {QuestionLabel}
              <Input
                id={questionId}
                type="number"
                value={answer || ""}
                onChange={(e) => handleAnswerChange(questionId, e.target.value)}
                placeholder={(question as any).placeholder ?? "Enter a number..."}
                className="bg-[#0d0d12] border-[#1a1d31] text-[#ffffffde] focus:ring-[#6E86FF]"
              />
            </div>
          </div>
        );

      default:
        console.warn(`Unsupported question type: ${question.type} for ID: ${questionId}`);
        return (
          <div key={questionId} className="p-4 rounded-lg border border-red-500/50 bg-red-900/20">
            <div className='text-red-400'>Unsupported question type: {question.text}</div>
          </div>
        );
    }
  };

  // Main return statement is now always reached
  return (
    // Add motion variants to the main container for staggering
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden" // Optional: Define exit animation if needed
    >
      {relevantSections.map((section) => (
        // Wrap each section div in motion.div for staggering
        <motion.div 
          key={section.title.replace(/\s+/g, '_')} 
          className="space-y-4 border-t border-[#1a1d31] pt-6 first:border-t-0 first:pt-0"
          variants={itemVariants} // Apply item animation to each section
        >
          <div className="mb-4">
            <h3 className="text-xl font-poppins font-semibold text-[#ffffffde]">{section.title}</h3>
            {section.description && (
              <p className="text-sm font-inter text-[#7b7c8c] mt-1">
                {section.description}
              </p>
            )}
          </div>
          {section.questions.map(renderQuestion)}
        </motion.div>
      ))}

      {/* Keep submit button outside the animated list */}
      <div className="flex justify-end pt-4">
         <Button 
          onClick={handleSubmit}
          className="bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA] text-white font-semibold hover:opacity-90 transition-opacity duration-300"
         >
           Calculate Results
         </Button>
        </div>
    </motion.div>
  );
}; 