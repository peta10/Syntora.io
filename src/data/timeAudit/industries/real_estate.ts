import { Building2 } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const realEstateSections: Section[] = [
  {
    title: 'Industry Tasks: Real Estate',
    questions: [
      // Task 1
      { id: 'rea-task-q1', text: 'Creating, updating, and managing property listings (MLS, website, portals)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'rea-task-q1-method', text: 'How are property listings managed?', type: 'single', options: ["Manual Entry into Each Platform", "CRM with Manual Push to MLS/Portals", "Listing Management Software", "Integrated Marketing/MLS Platform", "N/A"] },
      { id: 'rea-task-q1-satisfaction', text: 'How satisfied are you with listing management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'rea-task-q1-challenges', text: 'What are the main listing management challenges?', type: 'multiple', options: ["Multiple Entry Points", "Keeping Information Updated", "Photo/Media Management", "MLS Rules Compliance", "Syndication Issues", "No Major Challenges", "Other"] },
      
      // Task 2
      { id: 'rea-task-q2', text: 'Tracking leads (from web forms, calls, etc.) and performing client follow-up', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'rea-task-q2-method', text: 'How are real estate leads managed?', type: 'single', options: ["Manual Tracking (Notes/Spreadsheet)", "Basic Contact Management", "Real Estate CRM", "Integrated Marketing/Lead System", "N/A"] },
      { id: 'rea-task-q2-satisfaction', text: 'How satisfied are you with lead management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'rea-task-q2-challenges', text: 'What are the main lead management challenges?', type: 'multiple', options: ["Lead Response Time", "Follow-up Consistency", "Lead Quality Assessment", "Lead Source Attribution", "Pipeline Visibility", "No Major Challenges", "Other"] },
      
      // Task 3
      { id: 'rea-task-q3', text: 'Coordinating and scheduling property showings, tours, meetings, and open houses', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'rea-task-q3-method', text: 'How are showings and appointments scheduled?', type: 'single', options: ["Manual Calendar/Phone Calls", "General Calendar App", "Showing Appointment Software", "Integrated Scheduling System", "N/A"] },
      { id: 'rea-task-q3-satisfaction', text: 'How satisfied are you with showing/appointment scheduling?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'rea-task-q3-challenges', text: 'What are the main scheduling challenges?', type: 'multiple', options: ["Coordination with Multiple Parties", "Last-minute Changes", "Key/Access Management", "Showing Feedback Collection", "Travel Time Optimization", "No Major Challenges", "Other"] },
      
      // Task 4
      { id: 'rea-task-q4', text: 'Preparing and processing offers, purchase agreements, leases, and transaction paperwork', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'rea-task-q4-method', text: 'How are transaction documents prepared/processed?', type: 'single', options: ["Manual Documents/Forms", "Templates with Manual Entry", "Form-Filling Software", "Transaction Management Platform", "N/A"] },
      { id: 'rea-task-q4-satisfaction', text: 'How satisfied are you with document preparation?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'rea-task-q4-challenges', text: 'What are the main document preparation challenges?', type: 'multiple', options: ["Time Consuming", "Error Prevention", "Version Control", "E-signature Management", "Storage/Retrieval", "No Major Challenges", "Other"] },
      
      // Task 5
      { id: 'rea-task-q5', text: 'Coordinating with lenders, inspectors, appraisers, and title companies', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'rea-task-q5-method', text: 'How is service provider coordination handled?', type: 'single', options: ["Ad-hoc Emails/Calls", "Shared Checklist/Calendar", "Transaction Management System", "Integrated Platform with Provider Access", "N/A"] },
      { id: 'rea-task-q5-satisfaction', text: 'How satisfied are you with service provider coordination?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'rea-task-q5-challenges', text: 'What are the main coordination challenges?', type: 'multiple', options: ["Communication Tracking", "Deadline Management", "Document Collection", "Status Visibility", "Service Quality Issues", "No Major Challenges", "Other"] },
      
      // Task 6
      { id: 'rea-task-q6', text: 'Managing client relationship management (CRM) system data entry', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'rea-task-q6-method', text: 'How is CRM data management handled?', type: 'single', options: ["No Formal CRM (Basic Contact List)", "Manual CRM Data Entry", "Partial Automation (Email/Calendar Integration)", "Fully Integrated CRM System", "N/A"] },
      { id: 'rea-task-q6-satisfaction', text: 'How satisfied are you with CRM data management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'rea-task-q6-challenges', text: 'What are the main CRM challenges?', type: 'multiple', options: ["Time-consuming Data Entry", "Incomplete Information", "Duplicate Records", "System Complexity", "Reporting Limitations", "No Major Challenges", "Other"] },
      
      // Task 7
      { id: 'rea-task-q7', text: 'Creating marketing materials (flyers, virtual tours, social media posts)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'rea-task-q7-method', text: 'How are marketing materials created?', type: 'single', options: ["Manual Design from Scratch", "Templates in Design Software", "Listing Marketing Platform", "Integrated Marketing Automation", "N/A"] },
      { id: 'rea-task-q7-satisfaction', text: 'How satisfied are you with marketing material creation?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'rea-task-q7-challenges', text: 'What are the main marketing material challenges?', type: 'multiple', options: ["Time Consuming", "Design Consistency", "Content Creation", "Distribution Management", "Campaign Tracking", "No Major Challenges", "Other"] },
      
      // Task 8
      { id: 'rea-task-q8', text: 'Tracking commission statements and processing payments', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'rea-task-q8-method', text: 'How are commissions/payments tracked?', type: 'single', options: ["Manual Ledger/Spreadsheet", "Accounting Software", "Transaction Management with Commission Module", "Brokerage Management System", "N/A"] },
      { id: 'rea-task-q8-satisfaction', text: 'How satisfied are you with commission/payment tracking?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'rea-task-q8-challenges', text: 'What are the main commission tracking challenges?', type: 'multiple', options: ["Calculation Complexity", "Payment Timing", "Split Commission Management", "Expense Tracking", "Tax Documentation", "No Major Challenges", "Other"] },
      
      // Task 9
      { id: 'rea-task-q9', text: 'Handling routine client questions about properties or the transaction process', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'rea-task-q9-method', text: 'How are client questions/communications managed?', type: 'single', options: ["Ad-hoc Responses (Phone/Email)", "FAQ Documents/Templates", "CRM with Communication Tracking", "Client Portal with Resources", "N/A"] },
      { id: 'rea-task-q9-satisfaction', text: 'How satisfied are you with client question management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'rea-task-q9-challenges', text: 'What are the main client question management challenges?', type: 'multiple', options: ["Repetitive Questions", "Response Time", "Consistent Information", "After-Hours Availability", "Complex Explanations", "No Major Challenges", "Other"] },
      
      // Task 10
      { id: 'rea-task-q10', text: 'Coordinating property maintenance (if applicable, often covered by Property Management)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'rea-task-q10-method', text: 'How is property maintenance coordinated?', type: 'single', options: ["Ad-hoc Requests/Manual Tracking", "Shared Maintenance Log", "Property Management Software", "Integrated Property/Vendor System", "N/A"] },
      { id: 'rea-task-q10-satisfaction', text: 'How satisfied are you with maintenance coordination?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'rea-task-q10-challenges', text: 'What are the main maintenance coordination challenges?', type: 'multiple', options: ["Vendor Scheduling", "Issue Documentation", "Budget Management", "Tenant Communication", "Emergency Response", "No Major Challenges", "Other"] },
    ],
  }
];

const realEstate: Industry = {
  id: 'real_estate',
  label: 'Real Estate',
  icon: Building2,
  sections: realEstateSections
};

export default realEstate; 