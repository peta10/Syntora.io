import { Cpu } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const software_developmentSections: Section[] = [
  {
    title: 'Industry Tasks: Software Development',
    questions: [
      // Task 1
      { id: 'swd-task-q1', text: 'Gathering and documenting software requirements', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'swd-task-q1-method', text: 'How are requirements gathered and documented?', type: 'single', options: ["Ad-hoc Notes/Email", "Document Templates", "Requirements Management Tool", "Integrated Project/Requirements Platform", "N/A"] },
      { id: 'swd-task-q1-satisfaction', text: 'How satisfied are you with requirements processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'swd-task-q1-challenges', text: 'What are the main requirements challenges?', type: 'multiple', options: ["Unclear Stakeholder Needs", "Changing Requirements", "Documentation Detail", "Prioritization", "Validation", "No Major Challenges", "Other"] },
      
      // Task 2
      { id: 'swd-task-q2', text: 'Project planning, task breakdown, and estimation', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'swd-task-q2-method', text: 'How is project planning/estimation performed?', type: 'single', options: ["Ad-hoc Approach", "Spreadsheet/Basic Templates", "Project Management Software", "Integrated Development/Project Platform", "N/A"] },
      { id: 'swd-task-q2-satisfaction', text: 'How satisfied are you with planning/estimation?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'swd-task-q2-challenges', text: 'What are the main planning challenges?', type: 'multiple', options: ["Accurate Estimates", "Task Breakdown", "Resource Allocation", "Timeline Constraints", "Scope Management", "No Major Challenges", "Other"] },
      
      // Task 3
      { id: 'swd-task-q3', text: 'Code reviews and quality assurance', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'swd-task-q3-method', text: 'How are code reviews conducted?', type: 'single', options: ["Ad-hoc/Infrequent Reviews", "Manual Review Process", "Code Review Tools", "Integrated CI/CD with Automated QA", "N/A"] },
      { id: 'swd-task-q3-satisfaction', text: 'How satisfied are you with code review processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'swd-task-q3-challenges', text: 'What are the main code review challenges?', type: 'multiple', options: ["Time Constraints", "Developer Availability", "Process Consistency", "Code Standards Enforcement", "Knowledge Sharing", "No Major Challenges", "Other"] },
      
      // Task 4
      { id: 'swd-task-q4', text: 'Setting up, configuring, and troubleshooting local development environments', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'swd-task-q4-method', text: 'How are development environments managed?', type: 'single', options: ["Manual Setup Per Developer", "Documentation & Scripts", "Containerization (Docker)", "Fully Automated Environments", "N/A"] },
      { id: 'swd-task-q4-satisfaction', text: 'How satisfied are you with dev environment management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'swd-task-q4-challenges', text: 'What are the main environment challenges?', type: 'multiple', options: ["Setup Time", "Consistency Across Team", "Dependency Management", "Version Control", "Resource Requirements", "No Major Challenges", "Other"] },
      
      // Task 5
      { id: 'swd-task-q5', text: 'Manually testing features and bug fixes', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'swd-task-q5-method', text: 'How is manual testing performed?', type: 'single', options: ["Ad-hoc Testing", "Test Checklists/Scripts", "Test Management Tool", "Integrated Test Platform", "N/A"] },
      { id: 'swd-task-q5-satisfaction', text: 'How satisfied are you with manual testing?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'swd-task-q5-challenges', text: 'What are the main testing challenges?', type: 'multiple', options: ["Time Consuming", "Test Coverage", "Regression Testing", "Environment Issues", "Test Data Management", "No Major Challenges", "Other"] },
      
      // Task 6
      { id: 'swd-task-q6', text: 'Deployment and release management', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'swd-task-q6-method', text: 'How are deployments/releases managed?', type: 'single', options: ["Manual Deployment Process", "Basic Deployment Scripts", "CI/CD Pipeline (Limited)", "Fully Automated DevOps Pipeline", "N/A"] },
      { id: 'swd-task-q6-satisfaction', text: 'How satisfied are you with deployment processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'swd-task-q6-challenges', text: 'What are the main deployment challenges?', type: 'multiple', options: ["Deployment Errors", "Rollback Capability", "Environment Consistency", "Scheduling/Coordination", "Documentation", "No Major Challenges", "Other"] },
      
      // Task 7
      { id: 'swd-task-q7', text: 'Bug tracking, triage, and resolution', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'swd-task-q7-method', text: 'How is bug tracking/management handled?', type: 'single', options: ["Email/Spreadsheet Tracking", "Basic Issue Tracker", "Dedicated Bug Tracking System", "Integrated Dev/QA Platform", "N/A"] },
      { id: 'swd-task-q7-satisfaction', text: 'How satisfied are you with bug management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'swd-task-q7-challenges', text: 'What are the main bug management challenges?', type: 'multiple', options: ["Reproducibility", "Prioritization", "Root Cause Analysis", "Fix Verification", "Communication", "No Major Challenges", "Other"] },
      
      // Task 8
      { id: 'swd-task-q8', text: 'Documentation of code, APIs, and technical specifications', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'swd-task-q8-method', text: 'How is technical documentation created/managed?', type: 'single', options: ["Ad-hoc Documentation", "Wiki/Shared Documents", "Documentation Tools", "Integrated Documentation Platform", "N/A"] },
      { id: 'swd-task-q8-satisfaction', text: 'How satisfied are you with documentation?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'swd-task-q8-challenges', text: 'What are the main documentation challenges?', type: 'multiple', options: ["Keeping Current", "Completeness", "Developer Buy-in", "Accessibility", "Time Constraints", "No Major Challenges", "Other"] },
      
      // Task 9
      { id: 'swd-task-q9', text: 'Meetings (stand-ups, planning, retrospectives)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'swd-task-q9-method', text: 'How are development meetings conducted?', type: 'single', options: ["Ad-hoc Meetings", "Basic Scheduled Meetings", "Agile Ceremony Framework", "Data-Driven Meeting Framework", "N/A"] },
      { id: 'swd-task-q9-satisfaction', text: 'How satisfied are you with meetings?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'swd-task-q9-challenges', text: 'What are the main meeting challenges?', type: 'multiple', options: ["Time Consumption", "Focus/Relevance", "Action Items", "Remote Collaboration", "Schedule Coordination", "No Major Challenges", "Other"] },
      
      // Task 10
      { id: 'swd-task-q10', text: 'Managing technical debt and system refactoring', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'swd-task-q10-method', text: 'How is technical debt managed?', type: 'single', options: ["Ad-hoc/Reactive Approach", "Basic Tracking System", "Dedicated Tech Debt Process", "Integrated Quality/Debt Management", "N/A"] },
      { id: 'swd-task-q10-satisfaction', text: 'How satisfied are you with tech debt management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'swd-task-q10-challenges', text: 'What are the main tech debt challenges?', type: 'multiple', options: ["Prioritization", "Business Justification", "Impact Assessment", "Resource Allocation", "Measurement", "No Major Challenges", "Other"] },
    ]
  }
];

const software_development: Industry = {
  id: 'software_development',
  label: 'Software Development',
  icon: Cpu,
  sections: software_developmentSections
};

export default software_development;