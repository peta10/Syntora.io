import { Palette } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const arts_creativeSections: Section[] = [
  {
    title: 'Industry Tasks: Arts & Creative Services',
    questions: [
      // Task 1
      { id: 'art-task-q1', text: 'Client communication regarding project briefs, feedback, and approvals', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'art-task-q1-method', text: 'How is client communication managed?', type: 'single', options: ["Email/Phone/Ad-hoc", "Basic Project Management Tool", "Client Portal/System", "Integrated Client Collaboration Platform", "N/A"] },
      { id: 'art-task-q1-satisfaction', text: 'How satisfied are you with client communication processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'art-task-q1-challenges', text: 'What are the main client communication challenges?', type: 'multiple', options: ["Tracking Feedback", "Approval Delays", "Requirements Clarity", "Communication Frequency", "Response Management", "No Major Challenges", "Other"] },
      
      // Task 2
      { id: 'art-task-q2', text: 'Creating proposals, quotes, and contracts for creative projects', type: 'timeEstimate', timeOptions: { hoursPerTransaction: defaultTimeOptions.hoursPerTransaction, hoursPerWeek: defaultTimeOptions.hoursPerWeek }, tooltip: "Estimate time per proposal/quote OR total time per week." },
      { id: 'art-task-q2-method', text: 'How are proposals and contracts managed?', type: 'single', options: ["Manual Document Creation", "Templates/Spreadsheets", "Proposal/Contract Software", "Integrated Business Management Platform", "N/A"] },
      { id: 'art-task-q2-freq', text: 'If estimating per proposal, how many proposals/quotes are created per MONTH?', type: 'number', isRequired: false, tooltip: "Required only if you estimated time per proposal above." },
      { id: 'art-task-q2-satisfaction', text: 'How satisfied are you with proposal/contract processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'art-task-q2-challenges', text: 'What are the main proposal/contract challenges?', type: 'multiple', options: ["Pricing Calculations", "Scope Definition", "Template Creation", "Version Control", "Follow-up Process", "No Major Challenges", "Other"] },
      
      // Task 3
      { id: 'art-task-q3', text: 'Project management (tracking timelines, tasks, deliverables, milestones)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'art-task-q3-method', text: 'How is project management handled?', type: 'single', options: ["Spreadsheets/Notes", "Basic Project Management Tool", "Creative Project Software", "Integrated Creative Suite/PM System", "N/A"] },
      { id: 'art-task-q3-satisfaction', text: 'How satisfied are you with project management processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'art-task-q3-challenges', text: 'What are the main project management challenges?', type: 'multiple', options: ["Timeline Tracking", "Task Assignment", "Status Updates", "Client Communication", "Resource Allocation", "No Major Challenges", "Other"] },
      
      // Task 4
      { id: 'art-task-q4', text: 'Managing creative assets, file organization, version control, and sharing', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'art-task-q4-method', text: 'How are creative assets managed?', type: 'single', options: ["Local Folders/Manual Sharing", "Cloud Storage (Basic)", "Digital Asset Management System", "Integrated Creative/DAM Platform", "N/A"] },
      { id: 'art-task-q4-satisfaction', text: 'How satisfied are you with asset management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'art-task-q4-challenges', text: 'What are the main asset management challenges?', type: 'multiple', options: ["Version Control", "File Organization", "Asset Discovery", "Collaboration", "Large File Handling", "No Major Challenges", "Other"] },
      
      // Task 5
      { id: 'art-task-q6', text: 'Invoicing clients and tracking payments', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'art-task-q6-method', text: 'How is invoicing and payment tracking handled?', type: 'single', options: ["Manual Invoices/Spreadsheet", "Basic Accounting Software", "Creative Business Software", "Integrated Accounting/Business Platform", "N/A"] },
      { id: 'art-task-q6-satisfaction', text: 'How satisfied are you with invoicing processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'art-task-q6-challenges', text: 'What are the main invoicing challenges?', type: 'multiple', options: ["Invoice Creation", "Payment Tracking", "Client Follow-up", "Record Keeping", "Cash Flow Management", "No Major Challenges", "Other"] },
      
      // Task 6
      { id: 'art-task-q7', text: 'Marketing services and managing portfolio/website updates', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'art-task-q7-method', text: 'How is marketing/portfolio management handled?', type: 'single', options: ["Ad-hoc Updates", "Basic Website/Social Tools", "Marketing Management Software", "Integrated Marketing/Portfolio Platform", "N/A"] },
      { id: 'art-task-q7-satisfaction', text: 'How satisfied are you with marketing/portfolio processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'art-task-q7-challenges', text: 'What are the main marketing/portfolio challenges?', type: 'multiple', options: ["Content Creation", "Consistency", "Time Management", "Lead Generation", "Performance Analysis", "No Major Challenges", "Other"] },
      
      // Task 7
      { id: 'art-task-q8', text: 'Coordinating with collaborators, printers, or other vendors', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'art-task-q8-method', text: 'How is vendor coordination managed?', type: 'single', options: ["Email/Phone Communication", "Basic Tracking System", "Vendor Management Software", "Integrated Project/Vendor Platform", "N/A"] },
      { id: 'art-task-q8-satisfaction', text: 'How satisfied are you with vendor coordination?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'art-task-q8-challenges', text: 'What are the main vendor coordination challenges?', type: 'multiple', options: ["Communication Tracking", "Specification Sharing", "Quality Control", "Timeline Management", "Payment Coordination", "No Major Challenges", "Other"] },
      
      // Task 8
      { id: 'art-task-q9', text: 'Researching trends, inspiration, or technical information related to projects', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'art-task-q9-method', text: 'How is research and inspiration managed?', type: 'single', options: ["Ad-hoc Browsing/Notes", "Bookmarks/Basic Tools", "Inspiration Management System", "Integrated Research/Creative Platform", "N/A"] },
      { id: 'art-task-q9-satisfaction', text: 'How satisfied are you with research processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'art-task-q9-challenges', text: 'What are the main research challenges?', type: 'multiple', options: ["Finding Relevant Content", "Organization", "Accessing Paid Resources", "Tracking Sources", "Time Management", "No Major Challenges", "Other"] },
      
      // Task 9
      { id: 'art-task-q10', text: 'Managing software licenses and tool subscriptions', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'art-task-q10-method', text: 'How are software licenses/subscriptions managed?', type: 'single', options: ["Ad-hoc/Manual Tracking", "Spreadsheet System", "Subscription Management Tool", "Integrated Business Management Platform", "N/A"] },
      { id: 'art-task-q10-satisfaction', text: 'How satisfied are you with subscription management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'art-task-q10-challenges', text: 'What are the main subscription management challenges?', type: 'multiple', options: ["Renewal Tracking", "Cost Management", "Access Control", "License Compliance", "Tool Evaluation", "No Major Challenges", "Other"] },
      
      // Task 10
      { id: 'art-task-q11', text: 'Writing & Editing review cycles and feedback management', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'art-task-q11-method', text: 'How are review cycles and feedback managed?', type: 'single', options: ["Email/Comments/Manual", "Basic Document Collaboration", "Review Management Software", "Integrated Content/Feedback Platform", "N/A"] },
      { id: 'art-task-q11-satisfaction', text: 'How satisfied are you with review/feedback processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'art-task-q11-challenges', text: 'What are the main review/feedback challenges?', type: 'multiple', options: ["Version Tracking", "Feedback Consolidation", "Change Implementation", "Approval Process", "Communication Clarity", "No Major Challenges", "Other"] }
    ]
  }
];

const arts_creative: Industry = {
  id: 'arts_creative',
  label: 'Arts & Creative Services',
  icon: Palette,
  sections: arts_creativeSections
};

export default arts_creative;