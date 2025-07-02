import { Video } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const media_entertainmentSections: Section[] = [
  {
    title: 'Industry Tasks: Media & Entertainment',
    questions: [
      // Combined list from markdown files
      { id: 'med-task-q1', text: 'Content creation admin tasks (file management, uploads, metadata tagging)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'med-task-q2', text: 'Production scheduling and coordination (crew, talent, locations, resources)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'med-task-q3', text: 'Managing content libraries, digital assets, and archives', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'med-task-q4', text: 'Rights management, licensing administration, and royalty tracking/payments', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'med-task-q5', text: 'Content distribution and publishing across platforms (web, social, broadcast, streaming)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'med-task-q6', text: 'Audience engagement monitoring and community management (social media, forums)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'med-task-q7', text: 'Advertising sales coordination, campaign management, and reporting', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'med-task-q8', text: 'Talent booking, contract management, and scheduling', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'med-task-q9', text: 'Analyzing audience data, content performance, and market trends reporting', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'med-task-q10', text: 'Managing project budgets and tracking production expenses', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
    ]
  }
];

const media_entertainment: Industry = {
  id: 'media_entertainment',
  label: 'Media & Entertainment',
  icon: Video,
  sections: media_entertainmentSections
};

export default media_entertainment;