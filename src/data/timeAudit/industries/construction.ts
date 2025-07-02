import { Hammer } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const constructionSections: Section[] = [
  {
    title: 'Industry Tasks: Construction & Trades',
    questions: [
      // Task 1
      { id: 'con-task-q1', text: 'Coordinating daily work assignments and dispatching teams/crews', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'con-task-q1-method', text: 'How is this coordination primarily performed?', type: 'single', options: ["Fully Manual (Phone/Text/Paper)", "Basic Tools (Spreadsheets/Shared Calendar)", "Specific Dispatch/Project Mgmt Software", "Integration Platform (Connecting Systems)", "Fully Automated/Managed", "N/A"] },
      { id: 'con-task-q1-satisfaction', text: 'How satisfied are you with the current process/tool for coordination?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"], roles: [], sizes: [], tooltip: "Only answer if not Fully Manual or N/A" },
      { id: 'con-task-q1-challenges', text: 'What are the main challenges with the current coordination process/tool?', type: 'multiple', options: ["Too Slow", "Error-Prone", "Poor Communication", "Hard to Track Changes", "Doesn\'t Integrate", "Too Complex", "No Major Challenges", "Other"], roles: [], sizes: [], tooltip: "Only answer if not Fully Manual or N/A" },
      
      // Task 2
      { id: 'con-task-q2', text: 'Preparing detailed quotes, bids, and cost estimates', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek }, roles: ['owner', 'manager', 'c-suite', 'director'] },
      { id: 'con-task-q2-method', text: 'How are quotes/estimates primarily generated?', type: 'single', options: ["Fully Manual (Paper/Calculator)", "Spreadsheets", "Basic Quoting Tool", "Specialized Estimating Software", "Integrated CRM/ERP System", "N/A"], roles: ['owner', 'manager', 'c-suite', 'director'] },
      { id: 'con-task-q2-satisfaction', text: 'How satisfied are you with the current quoting process/tool?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"], roles: ['owner', 'manager', 'c-suite', 'director'] },
      { id: 'con-task-q2-challenges', text: 'What are the main challenges with quoting?', type: 'multiple', options: ["Time Consuming", "Inaccurate Costs", "Inconsistent Pricing", "Hard to Collaborate", "Lack of Material Price Updates", "Difficult Client Presentation", "No Major Challenges", "Other"], roles: ['owner', 'manager', 'c-suite', 'director'] },
      
      // Task 3
      { id: 'con-task-q3', text: 'Generating project invoices and tracking payments', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'con-task-q3-method', text: 'How are invoices generated and tracked?', type: 'single', options: ["Manual Invoices (Word/Excel)", "Basic Accounting Software (e.g., QuickBooks)", "Project Management Software Feature", "Integrated Accounting/Project System", "N/A"] },
      { id: 'con-task-q3-satisfaction', text: 'How satisfied are you with the invoicing/payment process?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'con-task-q3-challenges', text: 'What are the main invoicing/payment challenges?', type: 'multiple', options: ["Slow Generation", "Tracking Payments Manually", "Delayed Payments", "Disputes", "Poor Reporting", "Doesn\'t Link to Job Costs", "No Major Challenges", "Other"] },
      
      // Task 4
      { id: 'con-task-q4', text: 'Logging employee/crew hours and managing shift schedules', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'con-task-q4-method', text: 'How are hours logged and schedules managed?', type: 'single', options: ["Manual Timesheets/Paper Schedule", "Spreadsheets", "Time Tracking App", "Project Management Software Feature", "Integrated HR/Payroll System", "N/A"] },
      { id: 'con-task-q4-satisfaction', text: 'How satisfied are you with time tracking/scheduling?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'con-task-q4-challenges', text: 'What are the main time/scheduling challenges?', type: 'multiple', options: ["Inaccurate Logging", "Manual Data Entry for Payroll", "Difficult Schedule Changes", "Poor Crew Visibility", "Compliance Issues", "No Major Challenges", "Other"] },
      
      // Task 5
      { id: 'con-task-q5', text: 'Ordering materials, managing inventory, and tracking deliveries', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'con-task-q5-method', text: 'How are materials ordered and tracked?', type: 'single', options: ["Manual Phone/Email Orders", "Supplier Portal/Spreadsheet", "Inventory Management Software", "Integrated Project/Accounting System", "N/A"] },
      { id: 'con-task-q5-satisfaction', text: 'How satisfied are you with material management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'con-task-q5-challenges', text: 'What are the main material management challenges?', type: 'multiple', options: ["Stockouts/Delays", "Inaccurate Inventory", "Manual Purchase Orders", "Difficult Delivery Tracking", "Cost Overruns", "No Major Challenges", "Other"] },
      
      // Task 6
      { id: 'con-task-q6', text: 'Creating progress reports, safety logs, and updating jobsite documentation', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'con-task-q6-method', text: 'How is jobsite documentation handled?', type: 'single', options: ["Manual Paper Forms/Logs", "Photos + Email/Text", "Spreadsheets/Word Docs", "Project Management Software Forms", "Dedicated Safety/Reporting App", "N/A"] },
      { id: 'con-task-q6-satisfaction', text: 'How satisfied are you with documentation handling?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'con-task-q6-challenges', text: 'What are the main documentation challenges?', type: 'multiple', options: ["Time Consuming Data Entry", "Lost/Incomplete Forms", "Hard to Search/Retrieve", "Poor Reporting Format", "Compliance Risks", "No Major Challenges", "Other"] },
      
      // Task 7
      { id: 'con-task-q7', text: 'Handling client communications regarding project updates or changes', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'con-task-q7-method', text: 'How are client communications primarily managed?', type: 'single', options: ["Primarily Phone/Text", "Primarily Email", "Spreadsheet Tracking", "Project Management Portal/App", "CRM System", "N/A"] },
      { id: 'con-task-q7-satisfaction', text: 'How satisfied are you with client communication management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'con-task-q7-challenges', text: 'What are the main client communication challenges?', type: 'multiple', options: ["Missed Updates", "Disorganized Information", "Time Consuming Responses", "Lack of Central Record", "Managing Expectations", "No Major Challenges", "Other"] },
      
      // Task 8
      { id: 'con-task-q8', text: 'Managing subcontractor communications, contracts, and compliance', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'con-task-q8-method', text: 'How are subcontractor interactions managed?', type: 'single', options: ["Manual (Phone/Email/Paper Contracts)", "Spreadsheets for Tracking", "Project Management Software Communication", "Dedicated Subcontractor Portal", "N/A"] },
      { id: 'con-task-q8-satisfaction', text: 'How satisfied are you with subcontractor management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'con-task-q8-challenges', text: 'What are the main subcontractor management challenges?', type: 'multiple', options: ["Document Tracking (Insurance, etc.)", "Communication Delays", "Contract Management", "Compliance Issues", "Payment Coordination", "No Major Challenges", "Other"] },
      
      // Task 9
      { id: 'con-task-q9', text: 'Processing change orders and updating project plans', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'con-task-q9-method', text: 'How are change orders processed?', type: 'single', options: ["Manual Paper/Email Approvals", "Spreadsheet Tracking", "Project Management Software Feature", "Integrated Change Order System", "N/A"] },
      { id: 'con-task-q9-satisfaction', text: 'How satisfied are you with the change order process?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'con-task-q9-challenges', text: 'What are the main change order challenges?', type: 'multiple', options: ["Slow Approval Times", "Tracking Impact on Budget/Schedule", "Client Communication", "Documentation Issues", "Scope Creep", "No Major Challenges", "Other"] },
      
      // Task 10
      { id: 'con-task-q10', text: 'Permit application processing and tracking', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'con-task-q10-method', text: 'How are permits managed?', type: 'single', options: ["Manual Filing/Tracking", "Spreadsheet Tracking", "Project Management Software Task", "Specialized Permit Software/Service", "N/A"] },
      { id: 'con-task-q10-satisfaction', text: 'How satisfied are you with permit management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'con-task-q10-challenges', text: 'What are the main permit challenges?', type: 'multiple', options: ["Application Delays", "Tracking Status", "Complex Requirements", "Managing Expirations", "Coordination with Agencies", "No Major Challenges", "Other"] },
    ],
  }
];

const construction: Industry = {
  id: 'construction',
  label: 'Construction & Trades',
  icon: Hammer,
  sections: constructionSections
};

export default construction; 