import { Landmark } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const legalSections: Section[] = [
  {
    title: 'Industry Tasks: Legal Services',
    questions: [
      // Task 1
      { id: 'leg-task-q1', text: 'Organizing, indexing, and archiving case files (digital or physical)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'leg-task-q1-method', text: 'How are case files organized/archived?', type: 'single', options: ["Manual Paper Filing System", "Basic Digital Folders/Naming", "Document Management System", "Integrated Practice Management Software", "N/A"] },
      { id: 'leg-task-q1-satisfaction', text: 'How satisfied are you with file organization?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'leg-task-q1-challenges', text: 'What are the main file management challenges?', type: 'multiple', options: ["Time Consuming", "Search/Retrieval Difficulty", "Version Control", "Security Concerns", "Space Limitations", "No Major Challenges", "Other"] },
      
      // Task 2
      { id: 'leg-task-q2', text: 'Scheduling court dates, client meetings, depositions, and managing deadlines', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'leg-task-q2-method', text: 'How are legal schedules/deadlines managed?', type: 'single', options: ["Manual Calendar/Tickler System", "General Digital Calendar", "Legal Practice Management Software", "Integrated Deadline Management System", "N/A"] },
      { id: 'leg-task-q2-satisfaction', text: 'How satisfied are you with scheduling/deadline management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'leg-task-q2-challenges', text: 'What are the main scheduling/deadline challenges?', type: 'multiple', options: ["Missed Deadlines", "Conflict Detection", "Court Rule Updates", "Coordination Across Teams", "Calendar Synchronization", "No Major Challenges", "Other"] },
      
      // Task 3
      { id: 'leg-task-q3', text: 'Performing legal research and summarizing findings', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'leg-task-q3-method', text: 'How is legal research primarily conducted?', type: 'single', options: ["Manual Library/Books", "Basic Online Search", "Legal Research Platforms (e.g., Westlaw, LexisNexis)", "AI-assisted Research Tools", "N/A"] },
      { id: 'leg-task-q3-satisfaction', text: 'How satisfied are you with research processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'leg-task-q3-challenges', text: 'What are the main research challenges?', type: 'multiple', options: ["Time Consuming", "Cost of Research Tools", "Information Overload", "Summarizing Findings", "Keeping Current", "No Major Challenges", "Other"] },
      
      // Task 4
      { id: 'leg-task-q4', text: 'Drafting, reviewing, and formatting legal documents, contracts, or correspondence', type: 'timeEstimate', timeOptions: { hoursPerTransaction: defaultTimeOptions.hoursPerTransaction, hoursPerWeek: defaultTimeOptions.hoursPerWeek }, tooltip:"Estimate time per document OR total time per week."},
      { id: 'leg-task-q4-method', text:'How are documents typically drafted/managed?', type:'single', options:["Manual Drafting from Scratch", "Using Templates (Word)", "Document Assembly Software", "Legal Practice Management Templates", "N/A"]},
      { id: 'leg-task-q4-freq', text: 'If estimating per document, how many such documents are handled per WEEK?', type: 'number', isRequired: false, tooltip: "Required only if you estimated time per document above." },
      { id: 'leg-task-q4-satisfaction', text:'How satisfied are you with document preparation?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
      { id: 'leg-task-q4-challenges', text:'What are the main document challenges?', type:'multiple', options:["Time Consuming Drafting", "Ensuring Consistency", "Version Control", "Formatting Issues", "Collaboration/Review Process", "No Major Challenges", "Other"]},
      
      // Task 5
      { id: 'leg-task-q5', text: 'Logging billable hours and generating client invoices', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'leg-task-q5-method', text: 'How are billable hours/invoices managed?', type: 'single', options: ["Manual Timesheets/Invoices", "Spreadsheets", "Time & Billing Software", "Integrated Practice Management System", "N/A"] },
      { id: 'leg-task-q5-satisfaction', text: 'How satisfied are you with time/billing management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'leg-task-q5-challenges', text: 'What are the main time/billing challenges?', type: 'multiple', options: ["Contemporaneous Time Entry", "Billing Accuracy", "Invoice Creation", "Client Fee Arrangements", "Collections Process", "No Major Challenges", "Other"] },
      
      // Task 6
      { id: 'leg-task-q6', text: 'Handling routine client intake, inquiries, and status updates', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'leg-task-q6-method', text: 'How are client communications managed?', type: 'single', options: ["Ad-hoc Email/Phone", "Shared Email Inbox", "CRM System", "Client Portal", "N/A"] },
      { id: 'leg-task-q6-satisfaction', text: 'How satisfied are you with client communication processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'leg-task-q6-challenges', text: 'What are the main client communication challenges?', type: 'multiple', options: ["Response Time", "Tracking Communications", "Client Expectations", "Consistent Messaging", "Secure Communications", "No Major Challenges", "Other"] },
      
      // Task 7
      { id: 'leg-task-q7', text: 'Managing discovery processes (document collection, review, production)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'leg-task-q7-method', text: 'How is the discovery process managed?', type: 'single', options: ["Manual Review/Production", "Basic Digital Review", "E-Discovery Software", "Integrated E-Discovery Platform", "N/A"] },
      { id: 'leg-task-q7-satisfaction', text: 'How satisfied are you with discovery management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'leg-task-q7-challenges', text: 'What are the main discovery challenges?', type: 'multiple', options: ["Volume of Documents", "Review Time", "Consistent Coding", "Production Formatting", "Cost Control", "No Major Challenges", "Other"] },
      
      // Task 8
      { id: 'leg-task-q8', text: 'Filing documents with courts or government agencies', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'leg-task-q8-method', text: 'How are court/agency filings handled?', type: 'single', options: ["Manual Paper Filing", "Basic E-Filing", "Court Filing Software", "Integrated Practice Management", "N/A"] },
      { id: 'leg-task-q8-satisfaction', text: 'How satisfied are you with the filing process?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'leg-task-q8-challenges', text: 'What are the main filing challenges?', type: 'multiple', options: ["Court-Specific Requirements", "Deadline Pressure", "Technical Issues", "Filing Fee Management", "Rejection/Correction Process", "No Major Challenges", "Other"] },
      
      // Task 9
      { id: 'leg-task-q9', text: 'Conflict checking for new clients or matters', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'leg-task-q9-method', text: 'How are conflict checks performed?', type: 'single', options: ["Manual Review/Lists", "Spreadsheet Database", "Practice Management System", "Dedicated Conflicts Software", "N/A"] },
      { id: 'leg-task-q9-satisfaction', text: 'How satisfied are you with conflict checking?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'leg-task-q9-challenges', text: 'What are the main conflict checking challenges?', type: 'multiple', options: ["Time Consuming", "Incomplete Information", "Complex Relationships", "Updating Records", "Reliability Concerns", "No Major Challenges", "Other"] },
      
      // Task 10
      { id: 'leg-task-q10', text: 'Managing trust accounting and client funds', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'leg-task-q10-method', text: 'How is trust accounting managed?', type: 'single', options: ["Manual Ledgers", "Spreadsheets", "General Accounting Software", "Legal-Specific Trust Accounting", "N/A"] },
      { id: 'leg-task-q10-satisfaction', text: 'How satisfied are you with trust accounting management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'leg-task-q10-challenges', text: 'What are the main trust accounting challenges?', type: 'multiple', options: ["Compliance Requirements", "Three-Way Reconciliation", "Allocation Tracking", "Client Reporting", "Auditability", "No Major Challenges", "Other"] },
    ],
  }
];

const legal: Industry = {
  id: 'legal',
  label: 'Legal Services',
  icon: Landmark,
  sections: legalSections
};

export default legal; 