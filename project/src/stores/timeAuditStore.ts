import { create } from 'zustand';
import { Industry, Section, BusinessSize } from '../data/timeAuditData'; // Corrected relative path

// Type for answers, using Record for key-value store
export type Answers = Record<string, any>;

interface TimeAuditState {
  currentStep: number;
  selectedIndustryId: string | null;
  selectedRoleId: string | null;
  selectedSizeId: BusinessSize | null; // Use specific type
  answers: Answers;
  relevantIndustry: Industry | null;
  relevantSections: Section[];
  totalSteps: number;
  automationScore: number | null; // Store calculated result

  setDemographics: (industryId: string, roleId: string, sizeId: BusinessSize) => void;
  setAnswer: (questionId: string, answer: any) => void;
  setAnswers: (newAnswers: Answers) => void; // For react-hook-form integration
  nextStep: () => void;
  previousStep: () => void;
  goToStep: (step: number) => void;
  setRelevantData: (industry: Industry | null, sections: Section[]) => void;
  setTotalSteps: (total: number) => void;
  setAutomationScore: (score: number) => void;
  reset: () => void; // Function to reset the entire state
}

const initialState = {
    currentStep: 1,
    selectedIndustryId: null,
    selectedRoleId: null,
    selectedSizeId: null,
    answers: {},
    relevantIndustry: null,
    relevantSections: [],
    totalSteps: 4, // 1. Demo, 2. Questions, 3. Loading, 4. Results
    automationScore: null,
};

export const useTimeAuditStore = create<TimeAuditState>((set, get) => ({
  ...initialState,

  setDemographics: (industryId, roleId, sizeId) => set({
    selectedIndustryId: industryId,
    selectedRoleId: roleId,
    selectedSizeId: sizeId,
    answers: {}, // Reset answers when demographics change
    automationScore: null, // Reset score
    currentStep: 1, // Ensure we are on step 1 after setting demographics
  }),

  setAnswer: (questionId, answer) => set((state) => ({
    answers: { ...state.answers, [questionId]: answer },
  })),

  setAnswers: (newAnswers) => set((state) => ({
    answers: { ...state.answers, ...newAnswers }, // Merge new answers
  })),

  nextStep: () => set((state) => ({
    currentStep: Math.min(state.currentStep + 1, state.totalSteps)
  })),

  previousStep: () => set((state) => ({
    currentStep: Math.max(state.currentStep - 1, 1)
  })),

  goToStep: (step) => set((state) => ({
      currentStep: Math.max(1, Math.min(step, state.totalSteps))
  })),

  setRelevantData: (industry, sections) => set({
      relevantIndustry: industry,
      relevantSections: sections,
  }),

  setTotalSteps: (total) => set({ totalSteps: total }),

  setAutomationScore: (score) => set({ automationScore: score }),

  reset: () => set(initialState), // Reset to initial values
})); 