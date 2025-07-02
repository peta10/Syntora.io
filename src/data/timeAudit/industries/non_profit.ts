import { Anchor } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const non_profitSections: Section[] = [
  {
    title: 'Industry Tasks: Donor Management & Fundraising',
    questions: [
      { id: 'np-task-q1', text: 'Tracking donations, entering donor information into CRM/database', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'np-task-q2', text: 'Generating and sending donation acknowledgements and tax receipts', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'np-task-q3', text: 'Planning, executing, and tracking fundraising campaigns or events', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'np-task-q4', text: 'Researching grant opportunities, writing grant proposals, and managing grant reporting', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'np-task-q5', text: 'Board and volunteer management and coordination', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'np-task-q6', text: 'Program outcome tracking and impact reporting', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'np-task-q7', text: 'Managing donor/member communication and newsletters', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'np-task-q8', text: 'Compliance reporting and regulatory filings', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
    ]
  }
];

const non_profit: Industry = {
  id: 'non_profit',
  label: 'Non-Profit Organizations',
  icon: Anchor,
  sections: non_profitSections
};

export default non_profit;