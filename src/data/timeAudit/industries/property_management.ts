import { BuildingIcon } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const property_managementSections: Section[] = [
  {
    title: 'Industry Tasks: Property Management',
    description: "Tasks related to property management for residential, commercial, and multi-family units.",
    questions: [
      // Task 1
      { id: 'pm-task-q1', text: 'Handling tenant inquiries, complaints, and communications (calls, emails, portal)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'pm-task-q1-method', text: 'How are tenant communications managed?', type: 'single', options: ["Phone/Email Only", "Property Management Software", "Tenant Portal", "CRM System", "Mixed Manual/Digital", "N/A"] },
      { id: 'pm-task-q1-satisfaction', text: 'How satisfied are you with tenant communication processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'pm-task-q1-challenges', text: 'What are the main tenant communication challenges?', type: 'multiple', options: ["Response Time", "Tracking History", "Documentation", "After-Hours Issues", "Volume Management", "No Major Challenges", "Other"] },
      
      // Task 2
      { id: 'pm-task-q2', text: 'Collecting rent payments, tracking delinquencies, sending reminders, and processing fees', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'pm-task-q2-method', text: 'How are rent payments managed?', type: 'single', options: ["Manual Checks/Cash", "Bank Transfers", "Property Management Software", "Online Payment Portal", "Automated Billing System", "N/A"] },
      { id: 'pm-task-q2-satisfaction', text: 'How satisfied are you with payment collection processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'pm-task-q2-challenges', text: 'What are the main payment collection challenges?', type: 'multiple', options: ["Late Payments", "Manual Processing", "Payment Reconciliation", "Fee Calculations", "Payment Tracking", "No Major Challenges", "Other"] },
      
      // Task 3
      { id: 'pm-task-q3', text: 'Receiving, coordinating, and tracking maintenance/repair requests with tenants and vendors', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'pm-task-q3-method', text: 'How are maintenance requests managed?', type: 'single', options: ["Manual Phone/Email", "Work Order System", "Property Management Software", "Maintenance App", "Integrated System", "N/A"] },
      { id: 'pm-task-q3-satisfaction', text: 'How satisfied are you with maintenance request processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'pm-task-q3-challenges', text: 'What are the main maintenance request challenges?', type: 'multiple', options: ["Request Tracking", "Vendor Coordination", "Emergency Handling", "Status Updates", "Completion Verification", "No Major Challenges", "Other"] },
      
      // Task 4
      { id: 'pm-task-q4', text: 'Managing lease agreements (creation, signing, renewal, termination)', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'pm-task-q4-method', text: 'How are lease agreements managed?', type: 'single', options: ["Paper Documents", "Document Templates", "Digital Signing Platform", "Property Management Software", "Integrated Lease System", "N/A"] },
      { id: 'pm-task-q4-satisfaction', text: 'How satisfied are you with lease management processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'pm-task-q4-challenges', text: 'What are the main lease management challenges?', type: 'multiple', options: ["Document Creation", "Renewal Tracking", "Digital Signing", "Amendment Handling", "Storage/Retrieval", "No Major Challenges", "Other"] },
      
      // Task 5
      { id: 'pm-task-q5', text: 'Marketing vacant units, screening potential tenants, and managing applications', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'pm-task-q5-method', text: 'How is tenant screening and marketing managed?', type: 'single', options: ["Manual Listings/Screening", "Listing Websites", "Background Check Services", "Property Management Software", "Integrated Marketing/Screening Platform", "N/A"] },
      { id: 'pm-task-q5-satisfaction', text: 'How satisfied are you with screening and marketing processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'pm-task-q5-challenges', text: 'What are the main screening and marketing challenges?', type: 'multiple', options: ["Listing Management", "Application Tracking", "Background Checks", "Showing Coordination", "Qualification Verification", "No Major Challenges", "Other"] },
      
      // Task 6
      { id: 'pm-task-q6', text: 'Coordinating tenant move-ins and move-outs, including inspections', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'pm-task-q6-method', text: 'How are move-ins/move-outs managed?', type: 'single', options: ["Paper Checklists", "Digital Forms", "Mobile Inspection App", "Property Management Software", "Integrated Process System", "N/A"] },
      { id: 'pm-task-q6-satisfaction', text: 'How satisfied are you with move-in/move-out processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'pm-task-q6-challenges', text: 'What are the main move-in/move-out challenges?', type: 'multiple', options: ["Scheduling", "Inspection Documentation", "Deposit Handling", "Key Management", "Condition Documentation", "No Major Challenges", "Other"] },
      
      // Task 7
      { id: 'pm-task-q7', text: 'Managing vendor relationships (scheduling, invoicing, payment)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'pm-task-q7-method', text: 'How are vendor relationships managed?', type: 'single', options: ["Manual Contacts/Calls", "Email/Spreadsheet Tracking", "Vendor Management Software", "Property Management System", "Integrated Procurement Platform", "N/A"] },
      { id: 'pm-task-q7-satisfaction', text: 'How satisfied are you with vendor management processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'pm-task-q7-challenges', text: 'What are the main vendor management challenges?', type: 'multiple', options: ["Vendor Vetting", "Invoice Processing", "Service Scheduling", "Performance Tracking", "Cost Management", "No Major Challenges", "Other"] },
      
      // Task 8
      { id: 'pm-task-q8', text: 'Generating financial reports for property owners (rent roll, P&L, owner statements)', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'pm-task-q8-method', text: 'How are owner reports generated?', type: 'single', options: ["Manual Spreadsheets", "Accounting Software", "Property Management Software", "Financial Dashboard", "Integrated Reporting System", "N/A"] },
      { id: 'pm-task-q8-satisfaction', text: 'How satisfied are you with financial reporting processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'pm-task-q8-challenges', text: 'What are the main financial reporting challenges?', type: 'multiple', options: ["Data Collection", "Report Creation", "Accuracy Verification", "Owner Communication", "Customization Needs", "No Major Challenges", "Other"] },
      
      // Task 9
      { id: 'pm-task-q9', text: 'Conducting property inspections and documenting findings', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'pm-task-q9-method', text: 'How are property inspections managed?', type: 'single', options: ["Paper Forms", "Digital Checklists", "Mobile Inspection App", "Property Management Software", "Integrated Inspection System", "N/A"] },
      { id: 'pm-task-q9-satisfaction', text: 'How satisfied are you with inspection processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'pm-task-q9-challenges', text: 'What are the main inspection challenges?', type: 'multiple', options: ["Scheduling", "Documentation", "Photo Management", "Follow-up Tasks", "Reporting", "No Major Challenges", "Other"] },
      
      // Task 10
      { id: 'pm-task-q10', text: 'Managing property budgets and tracking expenses', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'pm-task-q10-method', text: 'How are property budgets managed?', type: 'single', options: ["Manual Spreadsheets", "Accounting Software", "Property Management Software", "Financial Management System", "Integrated Budget Platform", "N/A"] },
      { id: 'pm-task-q10-satisfaction', text: 'How satisfied are you with budget management processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'pm-task-q10-challenges', text: 'What are the main budget management challenges?', type: 'multiple', options: ["Expense Tracking", "Budget Planning", "Variance Analysis", "Approval Workflows", "Cost Allocation", "No Major Challenges", "Other"] },
      
      // Task 11
      { id: 'pm-task-q11', text: 'Interacting with vendors and updating service records', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'pm-task-q11-method', text: 'How are service records managed?', type: 'single', options: ["Paper Files", "Digital Files/Folders", "Property Management Software", "Maintenance Management System", "Integrated Service Platform", "N/A"] },
      { id: 'pm-task-q11-satisfaction', text: 'How satisfied are you with service record processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'pm-task-q11-challenges', text: 'What are the main service record challenges?', type: 'multiple', options: ["Record Keeping", "Service History Tracking", "Warranty Management", "Document Access", "Data Entry", "No Major Challenges", "Other"] }
    ]
  }
];

const property_management: Industry = {
  id: 'property_management',
  label: 'Property Management',
  icon: BuildingIcon,
  sections: property_managementSections
};

export default property_management;