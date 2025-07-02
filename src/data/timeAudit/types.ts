import { LucideIcon } from "lucide-react";

// Types for industry data
export type Role = string; // e.g., 'owner', 'c-suite', 'director', 'manager', 'contributor'
export type BusinessSize = 'small' | 'medium' | 'large'; // Enforce specific values

export interface TimeEstimateOptions {
  hoursPerDay?: string[];
  hoursPerWeek?: string[];
  hoursPerMonth?: string[];
  hoursPerTransaction?: string[];
}

export type QuestionType = 'single' | 'multiple' | 'scale' | 'text' | 'timeEstimate' | 'openEnded' | 'number';

export interface Question {
  id: string; // Unique identifier for the question (e.g., 'construction-q1')
  text: string;
  type: QuestionType;
  options?: string[]; // For 'single' or 'multiple' choice
  timeOptions?: TimeEstimateOptions; // For 'timeEstimate' type
  roles?: Role[]; // Roles this question applies to (if undefined, applies to all)
  sizes?: BusinessSize[]; // Business sizes this question applies to (if undefined, applies to all)
  tooltip?: string; // Optional tooltip for clarification
  isRequired?: boolean; // Added optional isRequired flag
}

export interface Section {
  title: string;
  description?: string;
  questions: Question[];
  roles?: Role[]; // Roles this section applies to (if undefined, applies to all)
  sizes?: BusinessSize[]; // Business sizes this section applies to (if undefined, applies to all)
}

export interface Industry {
  id: string; // e.g., 'construction'
  label: string; // Display name, e.g., 'Construction'
  icon: LucideIcon; // Lucide icon component
  sections: Section[];
} 