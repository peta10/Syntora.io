import React, { useState } from 'react';
import { industries, userRoles, businessSizes } from '@/data/timeAudit';
import { useTimeAuditStore } from '@/stores/timeAuditStore';

// --- Shadcn Imports ---
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

// --- Prop Interface ---
interface StepDemographicsProps {
  onComplete: (data: { selectedIndustryId: string; selectedRoleId: string; selectedSizeId: string }) => void;
}

export const StepDemographics: React.FC<StepDemographicsProps> = ({ onComplete }) => {
  // Get default values from store if needed
  const initialIndustry = useTimeAuditStore((state) => state.selectedIndustryId);
  const initialRole = useTimeAuditStore((state) => state.selectedRoleId);
  const initialSize = useTimeAuditStore((state) => state.selectedSizeId);

  const [industry, setIndustry] = useState<string>(initialIndustry || "");
  const [role, setRole] = useState<string>(initialRole || "");
  const [size, setSize] = useState<string>(initialSize || "");
  const [error, setError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleSubmit = () => {
    if (!industry || !role || !size) {
      setError("Please make a selection for all fields.");
      return;
    }
    setError(null);
    onComplete({
      selectedIndustryId: industry,
      selectedRoleId: role,
      selectedSizeId: size,
    });
  };

  const handleAnswerChange = (id: string, value: string) => {
    setAnswers({ ...answers, [id]: value });
  };

  return (
    <div className="space-y-8">
       {error && (
         <p className="text-sm text-red-400">{error}</p>
       )}
      <div className="space-y-3">
        <Label className="font-inter font-medium text-[#a0a0a8] text-base">Select Your Industry</Label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {industries.map((ind) => {
            const isSelected = industry === ind.id;
            const IconComponent = ind.icon;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setIndustry(ind.id)}
                className={cn(
                  "flex flex-col items-center justify-center p-4 rounded-lg border border-[#1a1d31] bg-[#0d0d12] hover:bg-[#1a1d31] hover:border-[#3a3d51] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0d0d12] focus:ring-[#6E86FF]",
                  isSelected && "ring-2 ring-[#6E86FF] border-[#6E86FF] bg-[#1a1d31]"
                )}
              >
                <IconComponent className={cn("h-8 w-8 mb-2", isSelected ? "text-[#8a9eff]" : "text-[#7b7c8c]")} />
                <span className={cn("text-center text-xs font-medium font-inter", isSelected ? "text-[#ffffffde]" : "text-[#a0a0a8]")}>
                  {ind.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* --- Role Selection --- */}
      <div className="space-y-3"> 
        <Label className="font-inter font-medium text-[#a0a0a8] text-base">Select Your Role</Label>
        {/* Replace Select with Button Group/Pills */}
        <div className="flex flex-wrap gap-2">
          {userRoles.map((r) => (
            <Button
              key={r.id}
              variant={role === r.id ? "default" : "outline"} // Use default variant for selected
              size="sm" // Use smaller buttons for pills
              onClick={() => setRole(r.id)}
              className={cn(
                "font-inter font-normal", // Use Inter font
                role === r.id 
                  ? "bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA] text-white border-transparent hover:opacity-90" // Selected: Gradient background
                  : "bg-transparent border-[#3a3d51] text-[#a0a0a8] hover:bg-[#1a1d31] hover:text-white hover:border-[#6E86FF]" // Unselected: Outline style
              )}
            >
              {r.label}
            </Button>
          ))}
        </div>
      </div>
      {/* --- End Role Selection --- */}

      {/* --- Size Selection --- */}
       <div className="space-y-3">
        <Label className="font-inter font-medium text-[#a0a0a8] text-base">Select Your Business Size</Label>
        {/* Replace Select with Button Group/Pills */}
        <div className="flex flex-wrap gap-2">
          {businessSizes.map((s) => (
            <Button
              key={s.id}
              variant={size === s.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSize(s.id)}
               className={cn(
                "font-inter font-normal",
                size === s.id 
                  ? "bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA] text-white border-transparent hover:opacity-90"
                  : "bg-transparent border-[#3a3d51] text-[#a0a0a8] hover:bg-[#1a1d31] hover:text-white hover:border-[#6E86FF]"
              )}
            >
              {s.label}
            </Button>
          ))}
        </div>
      </div>
      {/* --- End Size Selection --- */}

      {/* --- Optional Hourly Rate --- */}
       <div className="space-y-2 pt-2">
        <Label htmlFor="demographics-hourly-rate" className="font-inter font-medium text-[#a0a0a8]">
          Average Hourly Cost 
          <span className="text-xs text-[#7b7c8c] font-normal"> (Optional, for financial impact estimate)</span>
        </Label>
        <Input
          id="demographics-hourly-rate"
          type="number" // Use number type for easier parsing
          min="0"
          step="1" // Allow whole dollars/currency units
          value={answers['demographics-hourly-rate'] || ""} // Use answers state directly if modifying StepDemographics state
          onChange={(e) => handleAnswerChange('demographics-hourly-rate', e.target.value)} // Need a handler for this state
          placeholder="e.g., 75" // Placeholder example
          className="bg-[#0d0d12] border-[#1a1d31] text-[#ffffffde] focus:ring-[#6E86FF] max-w-[150px]" // Limit width
        />
         <p className="text-xs text-[#7b7c8c] font-normal pt-1">Enter the approximate average fully-loaded hourly cost ($) for roles performing these tasks. We can use benchmarks if left blank.</p>
       </div>
      {/* --- End Optional Hourly Rate --- */}

      <div className="flex justify-end pt-4">
        <Button 
          onClick={handleSubmit} 
          disabled={!industry || !role || !size}
          className="bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA] text-white font-semibold hover:opacity-90 transition-opacity duration-300"
        >
          Next: Questions
        </Button>
      </div>
    </div>
  );
}; 