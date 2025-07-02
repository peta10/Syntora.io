import React, { useEffect } from 'react';
import { useForm, Controller, SubmitHandler, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTimeAuditStore, Answers } from '../../stores/timeAuditStore'; // Relative path
import { getRelevantQuestions, Question } from '../../data/timeAuditData'; // Relative path
import { Button } from '../ui/button'; // Relative path
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card'; // Relative path
import { Label } from '../ui/label'; // Relative path
import { Input } from '../ui/input'; // Relative path
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'; // Relative path
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'; // Relative path
import { Checkbox } from '../ui/checkbox'; // Relative path
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'; // Relative path
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming cn utility exists for class names

// Dynamically build Zod schema based on relevant questions
const buildSchema = (questions: Question[]) => {
  const shape: Record<string, z.ZodTypeAny> = {};
  questions.forEach(q => {
    switch (q.type) {
      case 'text':
        shape[q.id] = z.string().min(1, { message: 'This field is required' });
        break;
      case 'single':
      case 'scale':
      case 'timeEstimate':
        shape[q.id] = z.string({ required_error: 'Please make a selection' }).min(1);
        break;
      case 'multiple':
        // Checkbox group requires an array of strings, ensure at least one is selected
        shape[q.id] = z.array(z.string()).min(1, { message: 'Please select at least one option' });
        break;
    }
  });
  return z.object(shape);
};

type ValidationSchema = z.infer<ReturnType<typeof buildSchema>>;

export const StepQuestions: React.FC = () => {
  const {
    relevantIndustry,
    relevantSections,
    answers: initialAnswers,
    setAnswers, // Use setAnswers to update store on submit
    nextStep,
    previousStep,
    selectedIndustryId,
    selectedRoleId,
    selectedSizeId,
    setRelevantData
  } = useTimeAuditStore();

  // Combine all questions from relevant sections
  const allRelevantQuestions = relevantSections.flatMap(section => section.questions);

  // Build the Zod schema dynamically
  const currentSchema = buildSchema(allRelevantQuestions);

  const { control, handleSubmit, formState: { errors, isValid }, register, watch, setValue } = useForm<ValidationSchema>({
    resolver: zodResolver(currentSchema),
    mode: 'onChange', // Validate on change to enable/disable button
    defaultValues: initialAnswers as FieldValues, // Pre-fill with store answers
  });

  // Effect to recalculate relevant data if demographics change (edge case)
  useEffect(() => {
    if (selectedIndustryId && selectedRoleId && selectedSizeId) {
      const { relevantIndustry: currentIndustry, relevantSections: currentSections } = getRelevantQuestions(
        selectedIndustryId, selectedRoleId, selectedSizeId
      );
      setRelevantData(currentIndustry, currentSections);
    }
  }, [selectedIndustryId, selectedRoleId, selectedSizeId, setRelevantData]);

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    console.log("Form Data:", data);
    setAnswers(data as Answers); // Update Zustand store with validated answers
    nextStep();
  };

  if (!relevantIndustry || allRelevantQuestions.length === 0) {
    return (
      <div className="w-full max-w-3xl mx-auto px-4 pb-16 text-center text-[#7b7c8c]">
        Loading questions or no relevant questions found for your selection.
        <Button onClick={previousStep} variant="outline" className="mt-4 border-[#3a3d51] text-[#a0a0a8] hover:bg-[#1a1d31] hover:text-white">
            Go Back
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl mx-auto px-4 pb-16 space-y-8">
      <TooltipProvider>
        {relevantSections.map((section) => (
          <Card key={section.title} className="bg-[#0d0d12] border-[#1a1d31]">
            <CardHeader>
              <CardTitle className="text-[#ffffffde] text-xl font-medium font-poppins">{section.title}</CardTitle>
              {section.description && (
                <CardDescription className="text-[#7b7c8c] font-inter pt-1">{section.description}</CardDescription>
              )}
            </CardHeader>
            <CardContent className="space-y-6">
              {section.questions.map((q) => (
                <div key={q.id} className="space-y-3 border-t border-[#1a1d31] pt-4 first:border-t-0 first:pt-0">
                  <Label className="text-[#a0a0a8] font-inter flex items-center gap-2">
                    <span>{q.text}</span>
                    {q.tooltip && (
                      <Tooltip delayDuration={100}>
                        <TooltipTrigger className="cursor-help">
                          <Info className="h-4 w-4 text-[#7b7c8c]" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-black border-[#3a3d51] text-[#ffffffde] max-w-xs shadow-lg">
                          <p>{q.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </Label>

                  {/* --- Input Rendering Logic Based on q.type using Controller --- */}
                  <Controller
                    name={q.id}
                    control={control}
                    render={({ field }) => (
                      <> {/* Fragment to contain input and potential error */}
                        {q.type === 'text' && (
                          <Input
                            {...field}
                            type="text"
                            className="bg-black border-[#3a3d51] text-[#ffffffde] focus:ring-[#6E86FF]"
                          />
                        )}

                        {(q.type === 'single' || q.type === 'scale') && q.options && (
                           <RadioGroup
                                onValueChange={field.onChange} // RHF handles value
                                value={field.value} // RHF handles value
                                className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2"
                            >
                                {q.options.map((option) => (
                                    <div key={option} className="flex items-center space-x-2">
                                        <RadioGroupItem
                                            value={option}
                                            id={`${q.id}-${option}`}
                                            className="border-[#7b7c8c] data-[state=checked]:border-[#6E86FF] data-[state=checked]:bg-[#6E86FF] text-white"
                                        />
                                        <Label htmlFor={`${q.id}-${option}`} className="text-[#a0a0a8] font-normal cursor-pointer">{option}</Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        )}
                        
                        {q.type === 'multiple' && q.options && (
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                              {q.options.map((option) => (
                                <div key={option} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={`${q.id}-${option}`}
                                    checked={field.value?.includes(option)} // Check if option is in the array
                                    onCheckedChange={(checked) => {
                                      const currentValue = field.value || [];
                                      if (checked) {
                                        field.onChange([...currentValue, option]);
                                      } else {
                                        field.onChange(currentValue.filter((val: string) => val !== option));
                                      }
                                    }}
                                     className="border-[#7b7c8c] data-[state=checked]:border-[#6E86FF] data-[state=checked]:bg-[#6E86FF] data-[state=checked]:text-white"
                                  />
                                  <Label htmlFor={`${q.id}-${option}`} className="text-[#a0a0a8] font-normal cursor-pointer">{option}</Label>
                                </div>
                              ))}
                            </div>
                        )}

                        {q.type === 'timeEstimate' && q.timeOptions && (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger className="w-full bg-black border-[#3a3d51] text-[#ffffffde] focus:ring-[#6E86FF]">
                              <SelectValue placeholder="Select estimated time..." />
                            </SelectTrigger>
                            <SelectContent className="bg-[#0d0d12] border-[#3a3d51] text-[#ffffffde]">
                              {/* Combine options, maybe group later */}
                              {(q.timeOptions.hoursPerDay || []).concat(q.timeOptions.hoursPerWeek || [], q.timeOptions.hoursPerMonth || []).map(option => (
                                <SelectItem key={option} value={option} className="focus:bg-[#1a1d31] focus:text-white cursor-pointer">{option} hours</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      </>
                    )}
                  />
                   {/* --- End Input Rendering --- */}
                   
                   {/* Display validation error for the field */}
                   {errors[q.id] && (
                    <p className="text-sm font-medium text-red-500">{errors[q.id]?.message?.toString()}</p>
                   )}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </TooltipProvider>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        <Button
          type="button" // Prevent form submission
          onClick={previousStep}
          variant="outline"
          className="border-[#3a3d51] text-[#a0a0a8] hover:bg-[#1a1d31] hover:text-white"
        >
          Previous
        </Button>
        <Button
          type="submit"
          className="bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA] text-white font-semibold hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!isValid} // Disable if form is invalid
        >
          Next: Analyze Results
        </Button>
      </div>
    </form>
  );
}; 