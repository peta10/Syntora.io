import React, { useState } from 'react';
import { useTimeAuditStore } from '../../stores/timeAuditStore'; // Relative path
import { industries, userRoles, businessSizes, getRelevantQuestions, BusinessSize } from '../../data/timeAuditData'; // Relative path
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'; // Relative path
import { Button } from '../ui/button'; // Relative path
import { Label } from '../ui/label'; // Relative path
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card'; // Relative path
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '../ui/alert'; // Relative path

export const StepDemographics: React.FC = () => {
  const {
    setDemographics,
    nextStep,
    setRelevantData,
    selectedIndustryId: initialIndustryId,
    selectedRoleId: initialRoleId,
    selectedSizeId: initialSizeId,
  } = useTimeAuditStore();

  // Local state matches store types
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(initialIndustryId);
  const [selectedRole, setSelectedRole] = useState<string | null>(initialRoleId);
  const [selectedSize, setSelectedSize] = useState<BusinessSize | null>(initialSizeId);
  const [error, setError] = useState<string | null>(null);

  const handleNext = () => {
    if (!selectedIndustry || !selectedRole || !selectedSize) {
      setError('Please make a selection for all fields.');
      return;
    }
    setError(null);
    // Update store
    setDemographics(selectedIndustry, selectedRole, selectedSize);
    // Pre-calculate relevant data for next step
    const { relevantIndustry, relevantSections } = getRelevantQuestions(
        selectedIndustry,
        selectedRole,
        selectedSize
    );
    setRelevantData(relevantIndustry, relevantSections);
    nextStep();
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pb-16">
        <Card className="bg-[#0d0d12] border-[#1a1d31]">
            <CardHeader>
                <CardTitle className="text-[#ffffffde] text-xl font-medium font-poppins">Select Your Context</CardTitle>
                <CardDescription className="text-[#7b7c8c] font-inter">Help us tailor the questions to your specific situation.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                 {error && (
                    <Alert variant="destructive" className="bg-red-900/30 border-red-500/50 text-red-300">
                        <AlertCircle className="h-4 w-4" color="#f87171" />
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
                
                {/* Industry Selection */}
                <div className="space-y-2">
                    <Label htmlFor="industry-select" className="text-[#a0a0a8] font-inter">Industry</Label>
                    <Select 
                        value={selectedIndustry ?? undefined} 
                        onValueChange={(value: string) => {
                             setSelectedIndustry(value);
                             setError(null); // Clear error on change
                        }}
                    >
                        <SelectTrigger id="industry-select" className="w-full bg-black border-[#3a3d51] text-[#ffffffde] focus:ring-[#6E86FF]">
                            <SelectValue placeholder="Select your industry..." />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0d0d12] border-[#3a3d51] text-[#ffffffde]">
                            {industries.map((industry) => (
                                <SelectItem 
                                    key={industry.id} 
                                    value={industry.id}
                                    className="focus:bg-[#1a1d31] focus:text-white cursor-pointer"
                                >
                                    <div className="flex items-center gap-2">
                                        <industry.icon className="h-4 w-4 text-[#7b7c8c]" />
                                        <span>{industry.label}</span>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Role Selection */}
                <div className="space-y-2">
                    <Label htmlFor="role-select" className="text-[#a0a0a8] font-inter">Your Role</Label>
                    <Select 
                        value={selectedRole ?? undefined} 
                        onValueChange={(value: string) => {
                            setSelectedRole(value);
                            setError(null); // Clear error on change
                        }}
                    >
                        <SelectTrigger id="role-select" className="w-full bg-black border-[#3a3d51] text-[#ffffffde] focus:ring-[#6E86FF]">
                            <SelectValue placeholder="Select your role..." />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0d0d12] border-[#3a3d51] text-[#ffffffde]">
                            {userRoles.map((role) => (
                                <SelectItem 
                                    key={role.id} 
                                    value={role.id}
                                    className="focus:bg-[#1a1d31] focus:text-white cursor-pointer"
                                >
                                    {role.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Business Size Selection */}
                <div className="space-y-2">
                    <Label htmlFor="size-select" className="text-[#a0a0a8] font-inter">Business Size</Label>
                    <Select 
                        value={selectedSize ?? undefined} 
                        onValueChange={(value: string) => {
                            // Ensure the value is a valid BusinessSize before setting
                            if (value === 'small' || value === 'medium' || value === 'large') {
                                setSelectedSize(value);
                                setError(null); // Clear error on change
                            }
                        }}
                    >
                        <SelectTrigger id="size-select" className="w-full bg-black border-[#3a3d51] text-[#ffffffde] focus:ring-[#6E86FF]">
                            <SelectValue placeholder="Select your business size..." />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0d0d12] border-[#3a3d51] text-[#ffffffde]">
                            {businessSizes.map((size) => (
                                <SelectItem 
                                    key={size.id} 
                                    value={size.id}
                                    className="focus:bg-[#1a1d31] focus:text-white cursor-pointer"
                                >
                                    {size.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Navigation Button */}
                <div className="flex justify-end pt-4">
                     <Button 
                        onClick={handleNext}
                        className="bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA] text-white font-semibold hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!selectedIndustry || !selectedRole || !selectedSize} // Disable if not all selected
                     >
                        Next: Questions
                    </Button>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}; 