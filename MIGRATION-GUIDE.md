# 4-Part Question Structure Migration Guide

## Overview

This project has been restructured to split the large `timeAuditData.ts` file into multiple smaller files. We've also implemented the 4-part question structure (Task, Method, Satisfaction, Challenges) for several industries already.

## What's Been Done

1. Created a new file structure:
   - `src/data/timeAudit/types.ts` - Common types
   - `src/data/timeAudit/commonData.ts` - Common data (roles, sizes, etc.)
   - `src/data/timeAudit/commonSections.ts` - Common sections (general admin, etc.)
   - `src/data/timeAudit/industries/` - Individual industry files
   - `src/data/timeAudit/allIndustries.ts` - List of all industries
   - `src/data/timeAudit/index.ts` - Main export file

2. Migrated the first set of industries with the 4-part question structure:
   - Construction
   - Restaurant
   - Legal Services
   - Real Estate
   - Accounting & Finance
   - Healthcare

## How to Complete the Migration

### Option 1: Using the Migration Script

We've created a script that attempts to extract industries from the original file:

```bash
node migrate-industries.js
```

This script will:
1. Extract industry data from the original file
2. Create new files for industries that haven't been migrated
3. Update `allIndustries.ts`

However, please note that the script will not automatically add the 4-part question structure to the tasks.

### Option 2: Manual Migration (Recommended)

For each remaining industry:

1. Create a new file in `src/data/timeAudit/industries/{id}.ts`
2. Copy the structure from an existing industry file (like `healthcare.ts`)
3. Update the industry details (id, label, icon)
4. For each task in the industry:
   - Keep the original task question with its timeOptions
   - Add the Method question (`{id: 'xxx-task-q1-method', ...}`)
   - Add the Satisfaction question (`{id: 'xxx-task-q1-satisfaction', ...}`)
   - Add the Challenges question (`{id: 'xxx-task-q1-challenges', ...}`)
   - If the task should be measured "per transaction", add `hoursPerTransaction: defaultTimeOptions.hoursPerTransaction` to the timeOptions and add a frequency question (`{id: 'xxx-task-q1-freq', ...}`)
5. Update `allIndustries.ts` to import your new file

### 4-Part Question Structure

For each task, follow this pattern:

```typescript
// Task Question
{ id: 'xxx-task-q1', text: 'Original task description', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },

// Method Question (customize options for each task)
{ id: 'xxx-task-q1-method', text: 'How is this task performed?', type: 'single', options: ["Manual Process", "Basic Digital Tools", "Specialized Software", "Integrated System", "N/A"] },

// Satisfaction Question (keep options consistent)
{ id: 'xxx-task-q1-satisfaction', text: 'How satisfied are you with this process?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },

// Challenges Question (customize options for each task)
{ id: 'xxx-task-q1-challenges', text: 'What are the main challenges?', type: 'multiple', options: ["Time Consuming", "Error Prone", "Bottlenecks", "Staff Training", "Cost", "No Major Challenges", "Other"] },
```

For transaction-based tasks, also add:

```typescript
// Add hoursPerTransaction to timeOptions
{ id: 'xxx-task-q1', text: 'Original task description', type: 'timeEstimate', timeOptions: { hoursPerTransaction: defaultTimeOptions.hoursPerTransaction, hoursPerWeek: defaultTimeOptions.hoursPerWeek }, tooltip: "Estimate time per transaction OR total time per week." },

// Add frequency question
{ id: 'xxx-task-q1-freq', text: 'If estimating per transaction, how many such transactions are handled per WEEK?', type: 'number', isRequired: false, tooltip: "Required only if you estimated time per transaction above." },
```

## Remaining Tasks After Migration

Once all industries have the 4-part question structure:

1. Update `StepQuestions.tsx` to add conditional logic for displaying frequency questions
2. Update `calculatePotentialSavings` in `StepResults.tsx` to use frequency and hourly rate
3. Update the results display in `StepResults.tsx`

## Testing

As you migrate each industry, test it in the application to ensure:
1. The questions display correctly
2. The correct follow-up questions appear
3. The flow works as expected

## Need Help?

If you have questions about the migration process, please refer to the existing migrated industries as examples. 