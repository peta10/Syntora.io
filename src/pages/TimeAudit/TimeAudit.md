# Time Audit Questionnaire

## Overview

The Time Audit Questionnaire is a dynamic, industry-specific tool designed to help businesses identify high-value automation opportunities. The questionnaire adapts based on the respondent's industry, role, and business size to provide personalized insights.

## Implementation Details

### Core Components

- **src/data/industryQuestionnaires.ts**: Contains industry data, question types, and adaptive logic
- **src/pages/TimeAudit.tsx**: Main component rendering the questionnaire UI
- **Step components**: Handle different stages of the questionnaire flow

### Data Structure

The questionnaire is structured with the following types:

```typescript
// Types for industry data
export type Role = string;
export type BusinessSize = string;

export interface TimeEstimateOptions {
  hoursPerDay?: string[];
  hoursPerWeek?: string[];
  hoursPerMonth?: string[];
  hoursPerTransaction?: string[];
}

export type Question = {
  id: string;
  text: string;
  type: 'single' | 'multiple' | 'scale' | 'text' | 'timeEstimate'; 
  options?: string[];
  timeOptions?: TimeEstimateOptions;
  roles?: Role[];
  sizes?: BusinessSize[];
  tooltip?: string;
};

export type Section = {
  title: string;
  description?: string;
  questions: Question[];
  roles?: Role[];
  sizes?: BusinessSize[];
};

export type Industry = {
  id: string;
  label: string;
  sections: Section[];
};
```

### Supported Industries

The questionnaire includes 18 industries with tailored questions:

1. Construction
2. Restaurant
3. Legal
4. Real Estate (Brokerage/Agent)
5. Accounting & Finance
6. Home Services
7. Healthcare
8. IT & IT Service Management (ITSM)
9. Fitness & Wellness
10. Manufacturing
11. Logistics & Supply Chain
12. Property Management
13. Hospitality & Tourism
14. Retail & Ecommerce
15. Education & Training
16. Software Development
17. Insurance
18. Marketing & Advertising

Each industry has:
- Profile questions specific to that industry
- Operations and tasks questions to gauge time spent on routine activities
- Time estimate questions with various units (daily, weekly, monthly, per transaction)

### User Roles & Business Sizes

The questionnaire adapts based on user roles:

```typescript
export const userRoles = [
    { id: 'owner', label: 'Business Owner / Entrepreneur' },
    { id: 'c-suite', label: 'C-Suite Executive (CEO, COO, CTO, etc.)' },
    { id: 'director', label: 'Department Head / Director' },
    { id: 'manager', label: 'Manager / Team Lead' },
    { id: 'contributor', label: 'Individual Contributor' },
];
```

And business sizes:

```typescript
export const businessSizes = [
    { id: 'small', label: 'Small (1-20 employees, < $1M revenue)' },
    { id: 'medium', label: 'Medium (21-200 employees, $1M-$10M revenue)' },
    { id: 'large', label: 'Large (201+ employees, > $10M revenue)' },
];
```

### Adaptive Logic

The `getRelevantQuestions` function filters questions and sections based on user role and business size:

1. It finds the selected industry data
2. Filters sections that match the user's role and business size
3. Further filters questions within each section
4. Returns only relevant sections and questions

This creates a personalized experience showing only questions that are relevant to the user's context.

### UI Implementation

- The questionnaire UI displays industry options with icons
- Progress indicator shows completion status
- Multi-step process from demographic selection to results
- Animated transitions between sections
- Mobile-responsive design

## Questionnaire Flow

1. **Demographics**: User selects industry, business size, and role
2. **Industry Questions**: User answers industry-specific questions across multiple sections
3. **Loading**: Brief animation while "analyzing" responses
4. **Results**: Shows automation potential and collects email for detailed report

## Example Questions

### Construction Industry
- "How much time is spent coordinating daily work assignments and dispatching teams?"
- "How much time is spent preparing detailed quotes and cost estimates weekly?"

### IT & IT Service Management
- "Handling password resets and access management"
- "Processing and resolving IT tickets"

### Software Development
- "Conducting code reviews and quality checks"
- "Managing releases and deployments"

## Recent Improvements

We expanded the questionnaire from 7 to 18 industries, adding comprehensive sets of questions for each new industry. Each industry has:

- Industry profile questions
- Operations questions with time estimates
- Role-specific questions
- Business size considerations

We also updated the UI with appropriate icons for each industry using Lucide React icons.

## Future Enhancements

Potential areas for enhancement include:

- More granular industry subcategories
- Integration with AI analysis tools
- Expanded question banks for deeper insights
- Customizable question weights
- Comparison benchmarks with industry averages
- Downloadable PDF reports 