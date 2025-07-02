import { Role, BusinessSize, TimeEstimateOptions } from './types';

// User Roles Data
export const userRoles = [
    { id: 'owner', label: 'Business Owner / Entrepreneur' },
    { id: 'c-suite', label: 'C-Suite Executive (CEO, COO, CTO, etc.)' },
    { id: 'director', label: 'Department Head / Director' },
    { id: 'manager', label: 'Manager / Team Lead' },
    { id: 'contributor', label: 'Individual Contributor' },
];

// Business Sizes Data
export const businessSizes = [
    { id: 'small', label: 'Small (1-20 employees, < $1M revenue)' },
    { id: 'medium', label: 'Medium (21-200 employees, $1M-$10M revenue)' },
    { id: 'large', label: 'Large (201+ employees, > $10M revenue)' },
];

// Time Estimate Options
export const defaultTimeOptions: TimeEstimateOptions = {
    hoursPerDay: ['0', '0-1', '1-2', '2-3', '3-4', '4-6', '6-8', '8+'],
    hoursPerWeek: ['0', '0-2', '2-5', '5-10', '10-15', '15-20', '20-30', '30-40', '40+'],
    hoursPerMonth: ['0', '0-10', '10-20', '20-40', '40-60', '60-80', '80-120', '120-160', '160+'],
    hoursPerTransaction: ['< 5 mins', '5-15 mins', '15-30 mins', '30-60 mins', '1-2 hours', '2+ hours']
};

// Define common role groups
export const decisionMakers: Role[] = ['owner', 'c-suite', 'director'];
export const implementers: Role[] = ['manager', 'director']; // Director overlaps
export const users: Role[] = ['contributor', 'manager']; // Manager overlaps 