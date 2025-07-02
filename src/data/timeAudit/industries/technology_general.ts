import { Sparkles } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const technology_generalSections: Section[] = [
  {
    title: 'Industry Tasks: Technology (General)',
    description: "Select time spent on tasks applicable to your role within the technology sector.",
    questions: [
      // Combined list from markdown files
      { id: 'tech-task-q1', text: 'Customer/Technical support ticket handling and resolution', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'tech-task-q2', text: 'Handling password resets and access management requests', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'tech-task-q3', text: 'Onboarding/offboarding users (internal or external)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'tech-task-q4', text: 'Software/System testing and quality assurance (manual)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'tech-task-q5', text: 'Conducting manual code reviews or reviewing technical designs', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'tech-task-q6', text: 'Managing bug tracking systems, triaging issues, coordinating resolution', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'tech-task-q7', text: 'Writing and maintaining technical documentation or knowledge base articles', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'tech-task-q8', text: 'Manually managing software releases, deployments, or CI/CD pipeline steps', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'tech-task-q9', text: 'Product management tasks (roadmap planning, feature prioritization, user stories)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'tech-task-q10', text: 'Sales engineering / Pre-sales technical support calls or demos', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'tech-task-q11', text: 'Managing cloud infrastructure (provisioning, monitoring, cost optimization)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'tech-task-q12', text: 'Data analysis, reporting, and business intelligence tasks (manual data gathering/reporting)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'tech-task-q13', text: 'User experience (UX) research coordination or design feedback management', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'tech-task-q14', text: 'Cybersecurity operations (manual log review, incident response coordination, compliance checks)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'tech-task-q15', text: 'Managing IT/Software asset inventory and licenses manually', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
    ]
  }
];

const technology_general: Industry = {
  id: 'technology_general',
  label: 'Technology (General)',
  icon: Sparkles,
  sections: technology_generalSections
};

export default technology_general;