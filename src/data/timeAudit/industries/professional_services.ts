import { Briefcase } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const professional_servicesSections: Section[] = [
  {
    title: 'Industry Tasks: Professional Services',
    questions: [
      // Task 1
      { id: 'prof-task-q1', text: 'Tracking billable hours and managing client timesheets', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'prof-task-q1-method', text: 'How is time tracking performed?', type: 'single', options: ["Manual Timesheets (Paper/Spreadsheet)", "Basic Time Tracking Software", "PSA Time Tracking Module", "Integrated Time/Project/Billing System", "Automated Time Capture", "N/A"] },
      { id: 'prof-task-q1-satisfaction', text: 'How satisfied are you with time tracking?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'prof-task-q1-challenges', text: 'What are the main time tracking challenges?', type: 'multiple', options: ["Forgotten Entries", "Categorization Errors", "Delayed Submission", "Approval Workflow", "Data Accuracy", "No Major Challenges", "Other"] },
      
      // Task 2
      { id: 'prof-task-q2', text: 'Creating and managing detailed client proposals or statements of work', type: 'timeEstimate', timeOptions: { hoursPerTransaction: defaultTimeOptions.hoursPerTransaction, hoursPerWeek: defaultTimeOptions.hoursPerWeek }, tooltip: "Estimate time per proposal OR total time per week." },
      { id: 'prof-task-q2-method', text: 'How are proposals/SOWs created?', type: 'single', options: ["Manual Creation (Word/Excel)", "Templates with Manual Customization", "Proposal Generation Software", "CRM/PSA Proposal Module", "Integrated Proposal Platform", "N/A"] },
      { id: 'prof-task-q2-freq', text: 'If estimating per proposal, how many proposals are created per WEEK?', type: 'number', isRequired: false, tooltip: "Required only if you estimated time per proposal above." },
      { id: 'prof-task-q2-satisfaction', text: 'How satisfied are you with proposal creation?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'prof-task-q2-challenges', text: 'What are the main proposal challenges?', type: 'multiple', options: ["Time-Consuming Process", "Scope Definition", "Pricing Consistency", "Template Limitations", "Version Control", "No Major Challenges", "Other"] },
      
      // Task 3
      { id: 'prof-task-q3', text: 'Client relationship management and communication', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'prof-task-q3-method', text: 'How is client communication managed?', type: 'single', options: ["Ad-hoc Email/Phone", "Shared Email/Calendar", "Basic CRM System", "Integrated Client Portal", "Automated Client Engagement System", "N/A"] },
      { id: 'prof-task-q3-satisfaction', text: 'How satisfied are you with client communication?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'prof-task-q3-challenges', text: 'What are the main client communication challenges?', type: 'multiple', options: ["Response Time", "Communication Tracking", "Consistent Messaging", "Document Sharing", "Client Expectations", "No Major Challenges", "Other"] },
      
      // Task 4
      { id: 'prof-task-q4', text: 'Project planning, task assignment, and progress tracking', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'prof-task-q4-method', text: 'How is project management handled?', type: 'single', options: ["Basic Task Lists/Spreadsheets", "Email/Calendar Coordination", "Project Management Software", "PSA with PM Module", "Integrated Project/Resource Platform", "N/A"] },
      { id: 'prof-task-q4-satisfaction', text: 'How satisfied are you with project management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'prof-task-q4-challenges', text: 'What are the main project management challenges?', type: 'multiple', options: ["Task Coordination", "Resource Allocation", "Timeline Management", "Scope Creep", "Client Visibility", "No Major Challenges", "Other"] },
      
      // Task 5
      { id: 'prof-task-q5', text: 'Resource allocation and capacity planning', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'prof-task-q5-method', text: 'How is resource allocation managed?', type: 'single', options: ["Manual Assignment Process", "Shared Calendars/Spreadsheets", "Basic Resource Scheduling Tool", "Advanced Capacity Planning Software", "AI-Assisted Resource Optimization", "N/A"] },
      { id: 'prof-task-q5-satisfaction', text: 'How satisfied are you with resource management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'prof-task-q5-challenges', text: 'What are the main resource management challenges?', type: 'multiple', options: ["Visibility into Availability", "Skill Matching", "Over/Under Allocation", "Schedule Conflicts", "Future Planning", "No Major Challenges", "Other"] },
      
      // Task 6
      { id: 'prof-task-q6', text: 'Generating client invoices and managing accounts receivable', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'prof-task-q6-method', text: 'How are client invoices generated?', type: 'single', options: ["Manual Invoice Creation", "Spreadsheet-Based Billing", "Accounting Software", "PSA Billing Module", "Integrated Time/Project/Billing System", "N/A"] },
      { id: 'prof-task-q6-satisfaction', text: 'How satisfied are you with invoicing processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'prof-task-q6-challenges', text: 'What are the main invoicing challenges?', type: 'multiple', options: ["Time from Work to Bill", "Invoice Accuracy", "Supporting Documentation", "A/R Follow-up", "Client Disputes", "No Major Challenges", "Other"] },
      
      // Task 7
      { id: 'prof-task-q7', text: 'Business development, lead tracking, and opportunity management', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'prof-task-q7-method', text: 'How is business development managed?', type: 'single', options: ["Ad-hoc Process/Spreadsheets", "Contact Management Software", "CRM System", "Integrated CRM/Marketing/Sales", "AI-Assisted Lead Management", "N/A"] },
      { id: 'prof-task-q7-satisfaction', text: 'How satisfied are you with business development?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'prof-task-q7-challenges', text: 'What are the main business development challenges?', type: 'multiple', options: ["Lead Generation", "Opportunity Tracking", "Pipeline Visibility", "Conversion Rate", "Follow-up Consistency", "No Major Challenges", "Other"] },
      
      // Task 8
      { id: 'prof-task-q8', text: 'Managing project budgets and monitoring profitability', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'prof-task-q8-method', text: 'How is project financial management handled?', type: 'single', options: ["Basic Spreadsheet Tracking", "Accounting Software Reports", "Project Financial Tracking Tool", "Integrated Project/Financial System", "Real-time Financial Analytics", "N/A"] },
      { id: 'prof-task-q8-satisfaction', text: 'How satisfied are you with project financial management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'prof-task-q8-challenges', text: 'What are the main project financial challenges?', type: 'multiple', options: ["Budget Tracking", "Profitability Analysis", "Scope Change Impact", "Financial Visibility", "Utilization Monitoring", "No Major Challenges", "Other"] },
      
      // Task 9
      { id: 'prof-task-q9', text: 'Tracking and reporting on key performance indicators (KPIs)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'prof-task-q9-method', text: 'How are KPIs tracked and reported?', type: 'single', options: ["Manual Data Collection/Reports", "Spreadsheet-Based Dashboards", "Business Intelligence Tool", "Integrated KPI Dashboard", "Real-time Performance Analytics", "N/A"] },
      { id: 'prof-task-q9-satisfaction', text: 'How satisfied are you with KPI tracking?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'prof-task-q9-challenges', text: 'What are the main KPI tracking challenges?', type: 'multiple', options: ["Data Collection", "Metric Definition", "Reporting Frequency", "Actionable Insights", "Data Accuracy", "No Major Challenges", "Other"] },
      
      // Task 10
      { id: 'prof-task-q10', text: 'Managing knowledge bases and maintaining reference documents', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'prof-task-q10-method', text: 'How is knowledge management handled?', type: 'single', options: ["Shared Folders/Files", "Basic Document Repository", "Knowledge Management System", "Integrated KM/Collaboration Platform", "AI-Enhanced Knowledge System", "N/A"] },
      { id: 'prof-task-q10-satisfaction', text: 'How satisfied are you with knowledge management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'prof-task-q10-challenges', text: 'What are the main knowledge management challenges?', type: 'multiple', options: ["Content Organization", "Search Capability", "Version Control", "Content Creation", "User Adoption", "No Major Challenges", "Other"] },
    ],
  }
];

const professional_services: Industry = {
  id: 'professional_services',
  label: 'Professional Services',
  icon: Briefcase,
  sections: professional_servicesSections
};

export default professional_services;