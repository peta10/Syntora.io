import { Scale } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const government_public_sectorSections: Section[] = [
  {
    title: 'Industry Tasks: Government & Public Sector',
    questions: [
      // Combined list from markdown files
      { id: 'gov-task-q1', text: 'Processing permits, licenses, or applications', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'gov-task-q2', text: 'Managing public records requests and retrieval', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'gov-task-q3', text: 'Handling citizen inquiries (phone, email, in-person) and routing/resolving issues', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'gov-task-q4', text: 'Preparing and filing compliance reports and documentation', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'gov-task-q5', text: 'Budget tracking, allocation documentation, and financial reporting', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'gov-task-q6', text: 'Managing program enrollment, eligibility verification, and participant tracking', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'gov-task-q7', text: 'Grant application review, management, and reporting', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'gov-task-q8', text: 'Preparing agendas, minutes, and materials for committee or public meetings', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'gov-task-q9', text: 'Scheduling and documenting inspections or audits', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'gov-task-q10', text: 'Administering elections or voting processes (if applicable)', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } }, // Cyclical
    ]
  }
];

const government_public_sector: Industry = {
  id: 'government_public_sector',
  label: 'Government & Public Sector',
  icon: Scale,
  sections: government_public_sectorSections
};

export default government_public_sector;