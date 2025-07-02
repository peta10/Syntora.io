import { create } from 'zustand';
import { Industry, Section } from '../data/timeAudit/types';

interface TimeAuditState {
  currentStep: number;
  selectedIndustryId: string | null;
  selectedRoleId: string | null;
  selectedSizeId: string | null;
  answers: Record<string, any>; // Map question ID to answer
  relevantIndustry: Industry | null;
  relevantSections: Section[];
  totalSteps: number;
  resultsMessage: string | null;
  potentialSavingsHours: number | null;

  setDemographics: (industryId: string, roleId: string, sizeId: string) => void;
  setAnswer: (questionId: string, answer: any) => void;
  nextStep: () => void;
  previousStep: () => void;
  goToStep: (step: number) => void;
  setRelevantData: (industry: Industry | null, sections: Section[]) => void;
  setTotalSteps: (total: number) => void;
  setResults: (hours: number, message: string) => void;
  resetAudit: () => void;
}

// Export the result of create directly
export const useTimeAuditStore = create<TimeAuditState>((set) => ({
  currentStep: 1,
  selectedIndustryId: null,
  selectedRoleId: null,
  selectedSizeId: null,
  answers: {},
  relevantIndustry: null,
  relevantSections: [],
  totalSteps: 3, // Updated Default: 1. Demographics, 2. Questions, 3. Results
  resultsMessage: null,
  potentialSavingsHours: null,

  setDemographics: (industryId, roleId, sizeId) => set({
    selectedIndustryId: industryId,
    selectedRoleId: roleId,
    selectedSizeId: sizeId,
    answers: {}, // Reset answers when demographics change
    relevantIndustry: null,
    relevantSections: [],
    resultsMessage: null,
    potentialSavingsHours: null,
  }),

  setAnswer: (questionId, answer) => set((state) => ({
    answers: { ...state.answers, [questionId]: answer },
  })),

  nextStep: () => set((state) => ({
    currentStep: Math.min(state.currentStep + 1, state.totalSteps || 3) // Ensure we don't exceed total steps
  })),

  previousStep: () => set((state) => ({
    currentStep: Math.max(state.currentStep - 1, 1) // Ensure we don't go below step 1
  })),

  goToStep: (step) => set((state) => ({
      // Ensure step is within bounds (1 to totalSteps)
      currentStep: Math.max(1, Math.min(step, state.totalSteps || 3)) 
  })),

  setRelevantData: (industry, sections) => set({
      relevantIndustry: industry,
      relevantSections: sections,
  }),

  setTotalSteps: (total) => set({ totalSteps: total }),

  setResults: (hours, message) => set({
    potentialSavingsHours: hours,
    resultsMessage: message,
  }),

  resetAudit: () => set({
    currentStep: 1,
    selectedIndustryId: null,
    selectedRoleId: null,
    selectedSizeId: null,
    answers: {},
    relevantIndustry: null,
    relevantSections: [],
    totalSteps: 3,
    resultsMessage: null,
    potentialSavingsHours: null,
  }),
}));

// Removed incorrect default export structure
