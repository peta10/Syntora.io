import { ShieldCheck } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const insuranceSections: Section[] = [
  {
    title: 'Industry Tasks: Insurance',
    description: "Tasks related to insurance policy management, claims processing, underwriting, and customer service.",
    questions: [
      // Task 1
      { id: 'ins-task-q1', text: 'Processing new policy applications (data entry, document verification, underwriting data collection)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'ins-task-q1-method', text: 'How are new policy applications managed?', type: 'single', options: ["Paper Forms/Manual Entry", "Digital Forms/Manual Processing", "Basic Policy Software", "Agency Management System", "Integrated Policy Platform", "N/A"] },
      { id: 'ins-task-q1-satisfaction', text: 'How satisfied are you with application processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'ins-task-q1-challenges', text: 'What are the main application processing challenges?', type: 'multiple', options: ["Documentation Collection", "Data Entry", "Verification Process", "System Integration", "Processing Time", "No Major Challenges", "Other"] },
      
      // Task 2
      { id: 'ins-task-q2', text: 'Calculating premiums and generating quotes for potential clients', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'ins-task-q2-method', text: 'How are premium calculations/quotes managed?', type: 'single', options: ["Manual Calculations", "Rate Tables/Spreadsheets", "Basic Quoting Tool", "Rating Engine Software", "Integrated Quoting Platform", "N/A"] },
      { id: 'ins-task-q2-satisfaction', text: 'How satisfied are you with quoting processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'ins-task-q2-challenges', text: 'What are the main quoting challenges?', type: 'multiple', options: ["Calculation Complexity", "Data Gathering", "Rate Updates", "Competitive Analysis", "Quote Distribution", "No Major Challenges", "Other"] },
      
      // Task 3
      { id: 'ins-task-q3', text: 'Handling claims intake, verification, documentation gathering, and initial processing', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'ins-task-q3-method', text: 'How are claims intake/processing managed?', type: 'single', options: ["Manual Forms/Calls", "Email/Basic Digital", "Claims Management Software", "Integrated Claims Platform", "Automated Claims System", "N/A"] },
      { id: 'ins-task-q3-satisfaction', text: 'How satisfied are you with claims intake processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'ins-task-q3-challenges', text: 'What are the main claims intake challenges?', type: 'multiple', options: ["Information Gathering", "Documentation Verification", "Initial Assessment", "Assignment Routing", "Client Communication", "No Major Challenges", "Other"] },
      
      // Task 4
      { id: 'ins-task-q4', text: 'Updating customer information, policy details, and beneficiary changes', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'ins-task-q4-method', text: 'How are policy updates managed?', type: 'single', options: ["Manual Updates", "Basic Database System", "Policy Management Software", "Customer Portal", "Integrated Policy Platform", "N/A"] },
      { id: 'ins-task-q4-satisfaction', text: 'How satisfied are you with policy update processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'ins-task-q4-challenges', text: 'What are the main policy update challenges?', type: 'multiple', options: ["Documentation Requirements", "System Updates", "Version Control", "Verification Steps", "Customer Notification", "No Major Challenges", "Other"] },
      
      // Task 5
      { id: 'ins-task-q5', text: 'Managing policy renewals, sending notifications, and processing endorsements', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'ins-task-q5-method', text: 'How are renewals/endorsements managed?', type: 'single', options: ["Manual Tracking/Processing", "Basic Calendar System", "Policy Management Software", "Automated Renewal Platform", "Integrated Lifecycle System", "N/A"] },
      { id: 'ins-task-q5-satisfaction', text: 'How satisfied are you with renewal processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'ins-task-q5-challenges', text: 'What are the main renewal/endorsement challenges?', type: 'multiple', options: ["Timing Management", "Rate Changes", "Customer Communication", "Document Generation", "Tracking Responses", "No Major Challenges", "Other"] },
      
      // Task 6
      { id: 'ins-task-q6', text: 'Tracking agent commissions, calculating payouts, and generating statements', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'ins-task-q6-method', text: 'How are commissions managed?', type: 'single', options: ["Manual Calculations", "Spreadsheet Tracking", "Commission Software", "Agency Management System", "Integrated Commission Platform", "N/A"] },
      { id: 'ins-task-q6-satisfaction', text: 'How satisfied are you with commission processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'ins-task-q6-challenges', text: 'What are the main commission challenges?', type: 'multiple', options: ["Calculation Complexity", "Rate Changes", "Payment Processing", "Statement Generation", "Dispute Resolution", "No Major Challenges", "Other"] },
      
      // Task 7
      { id: 'ins-task-q7', text: 'Preparing and filing compliance documentation and regulatory reports', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'ins-task-q7-method', text: 'How is regulatory compliance managed?', type: 'single', options: ["Manual Preparation", "Document Templates", "Compliance Software", "Regulatory Management System", "Integrated Compliance Platform", "N/A"] },
      { id: 'ins-task-q7-satisfaction', text: 'How satisfied are you with compliance processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'ins-task-q7-challenges', text: 'What are the main compliance challenges?', type: 'multiple', options: ["Regulatory Changes", "Data Collection", "Report Generation", "Filing Deadlines", "Audit Preparation", "No Major Challenges", "Other"] },
      
      // Task 8
      { id: 'ins-task-q8', text: 'Communicating with agents/brokers regarding policies, commissions, or client issues', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'ins-task-q8-method', text: 'How is agent communication managed?', type: 'single', options: ["Phone/Email", "Shared Documents", "Agent Portal", "Agency Management System", "Integrated Communication Platform", "N/A"] },
      { id: 'ins-task-q8-satisfaction', text: 'How satisfied are you with agent communication processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'ins-task-q8-challenges', text: 'What are the main agent communication challenges?', type: 'multiple', options: ["Information Access", "Response Time", "Documentation Sharing", "Policy Updates", "Training/Support", "No Major Challenges", "Other"] },
      
      // Task 9
      { id: 'ins-task-q9', text: 'Responding to customer service inquiries regarding policies, billing, or claims', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'ins-task-q9-method', text: 'How are customer service inquiries managed?', type: 'single', options: ["Phone/Email Only", "Basic Ticketing System", "Customer Service Software", "Integrated CRM", "Self-Service Portal", "N/A"] },
      { id: 'ins-task-q9-satisfaction', text: 'How satisfied are you with customer service processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'ins-task-q9-challenges', text: 'What are the main customer service challenges?', type: 'multiple', options: ["Information Access", "Response Time", "Issue Resolution", "Call Volume", "Knowledge Management", "No Major Challenges", "Other"] },
      
      // Task 10
      { id: 'ins-task-q10', text: 'Managing customer correspondence (sending policy documents, letters, emails)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'ins-task-q10-method', text: 'How is customer correspondence managed?', type: 'single', options: ["Manual/Paper Mail", "Basic Email/Templates", "Document Management System", "Communication Platform", "Automated Correspondence System", "N/A"] },
      { id: 'ins-task-q10-satisfaction', text: 'How satisfied are you with correspondence processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'ins-task-q10-challenges', text: 'What are the main correspondence challenges?', type: 'multiple', options: ["Document Generation", "Delivery Tracking", "Version Control", "Personalization", "Multi-channel Management", "No Major Challenges", "Other"] },
      
      // Task 11
      { id: 'ins-task-q11', text: 'Underwriting data collection and entry support', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'ins-task-q11-method', text: 'How is underwriting data managed?', type: 'single', options: ["Manual Collection/Entry", "Spreadsheet Systems", "Basic Underwriting Software", "Underwriting Platform", "Integrated Risk System", "N/A"] },
      { id: 'ins-task-q11-satisfaction', text: 'How satisfied are you with underwriting data processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'ins-task-q11-challenges', text: 'What are the main underwriting data challenges?', type: 'multiple', options: ["Data Collection", "Information Verification", "System Integration", "Analysis Tools", "Decision Support", "No Major Challenges", "Other"] }
    ]
  }
];

const insurance: Industry = {
  id: 'insurance',
  label: 'Insurance',
  icon: ShieldCheck,
  sections: insuranceSections
};

export default insurance;