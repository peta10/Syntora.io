import { PawPrint } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const home_personal_servicesSections: Section[] = [
  {
    title: 'Industry Tasks: Home & Personal Services',
    description: "Tasks related to services like cleaning, pet care, personal care, child care, elder care, etc.",
    questions: [
      // Task 1
      { id: 'hps-task-q1', text: 'Client scheduling, appointment confirmations, and reminders', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'hps-task-q1-method', text: 'How is client scheduling managed?', type: 'single', options: ["Manual Calendar/Phone", "Paper Appointment Book", "Basic Calendar Software", "Scheduling/Booking Platform", "Integrated CRM/Booking System", "N/A"] },
      { id: 'hps-task-q1-satisfaction', text: 'How satisfied are you with scheduling processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hps-task-q1-challenges', text: 'What are the main scheduling challenges?', type: 'multiple', options: ["Double Bookings", "Reminder Management", "Change/Cancellation Handling", "Staff Coordination", "Client Communication", "No Major Challenges", "Other"] },
      
      // Task 2
      { id: 'hps-task-q2', text: 'Managing client intake forms and collecting necessary information', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'hps-task-q2-method', text: 'How are client intake forms managed?', type: 'single', options: ["Paper Forms/Manual Entry", "Email/PDF Forms", "Basic Digital Forms", "Client Portal/System", "Integrated CRM Platform", "N/A"] },
      { id: 'hps-task-q2-satisfaction', text: 'How satisfied are you with intake processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hps-task-q2-challenges', text: 'What are the main intake challenges?', type: 'multiple', options: ["Form Completion", "Data Entry", "Information Storage", "Sensitive Data Handling", "Form Updates/Revisions", "No Major Challenges", "Other"] },
      
      // Task 3
      { id: 'hps-task-q3', text: 'Communicating with clients regarding service details, changes, or feedback', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'hps-task-q3-method', text: 'How is client communication managed?', type: 'single', options: ["Phone Calls/Voicemail", "Email/Text Messages", "Messaging App/System", "Client Portal/Platform", "Automated Communication System", "N/A"] },
      { id: 'hps-task-q3-satisfaction', text: 'How satisfied are you with client communication?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hps-task-q3-challenges', text: 'What are the main communication challenges?', type: 'multiple', options: ["Response Time", "Message Tracking", "Detail Documentation", "After-Hours Communication", "Communication Consistency", "No Major Challenges", "Other"] },
      
      // Task 4
      { id: 'hps-task-q4', text: 'Assigning staff/providers to clients or jobs', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'hps-task-q4-method', text: 'How is staff assignment managed?', type: 'single', options: ["Manual Assignment Process", "Spreadsheet/Calendar System", "Staff Scheduling Software", "Integrated Scheduling/CRM Platform", "AI-Assisted Assignment System", "N/A"] },
      { id: 'hps-task-q4-satisfaction', text: 'How satisfied are you with staff assignment?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hps-task-q4-challenges', text: 'What are the main staff assignment challenges?', type: 'multiple', options: ["Staff Availability", "Skill Matching", "Geographic Considerations", "Schedule Coordination", "Last-Minute Changes", "No Major Challenges", "Other"] },
      
      // Task 5
      { id: 'hps-task-q5', text: 'Tracking service completion and logging notes/details', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'hps-task-q5-method', text: 'How is service tracking/documentation handled?', type: 'single', options: ["Paper Notes/Forms", "Text Messages/Email", "Basic Digital Forms", "Mobile App/Service Software", "Integrated Service Management Platform", "N/A"] },
      { id: 'hps-task-q5-satisfaction', text: 'How satisfied are you with service tracking?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hps-task-q5-challenges', text: 'What are the main service tracking challenges?', type: 'multiple', options: ["Consistent Documentation", "Detail Completeness", "Photo/Evidence Collection", "Client Verification", "Record Accessibility", "No Major Challenges", "Other"] },
      
      // Task 6
      { id: 'hps-task-q6', text: 'Invoicing clients and processing payments', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'hps-task-q6-method', text: 'How is invoicing/payment managed?', type: 'single', options: ["Manual Invoices/Cash/Checks", "Basic Invoice Templates/POS", "Accounting Software", "Integrated Payment/Service Platform", "Automated Billing System", "N/A"] },
      { id: 'hps-task-q6-satisfaction', text: 'How satisfied are you with payment processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hps-task-q6-challenges', text: 'What are the main payment/invoicing challenges?', type: 'multiple', options: ["Invoice Creation", "Payment Collection", "Record Keeping", "Payment Reconciliation", "Late Payment Follow-up", "No Major Challenges", "Other"] },
      
      // Task 7
      { id: 'hps-task-q7', text: 'Managing staff schedules, time tracking, and payroll', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'hps-task-q7-method', text: 'How is staff scheduling/payroll managed?', type: 'single', options: ["Paper Timesheets/Manual", "Spreadsheet System", "Staff Management Software", "Integrated HR/Payroll System", "Automated Time/Payroll Platform", "N/A"] },
      { id: 'hps-task-q7-satisfaction', text: 'How satisfied are you with staff management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hps-task-q7-challenges', text: 'What are the main staff management challenges?', type: 'multiple', options: ["Time Verification", "Schedule Coordination", "Payroll Calculation", "Staff Communication", "Compliance Requirements", "No Major Challenges", "Other"] },
      
      // Task 8
      { id: 'hps-task-q8', text: 'Ordering and managing supplies needed for services', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'hps-task-q8-method', text: 'How is inventory/supply management handled?', type: 'single', options: ["Manual Tracking/Ordering", "Spreadsheet Inventory", "Inventory Management Software", "Integrated Supply/Service Platform", "Automated Reordering System", "N/A"] },
      { id: 'hps-task-q8-satisfaction', text: 'How satisfied are you with supply management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hps-task-q8-challenges', text: 'What are the main supply management challenges?', type: 'multiple', options: ["Tracking Usage", "Reorder Timing", "Supplier Management", "Storage Organization", "Cost Control", "No Major Challenges", "Other"] },
      
      // Task 9
      { id: 'hps-task-q9', text: 'Marketing services and managing online presence (website, social media)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'hps-task-q9-method', text: 'How is marketing/online presence managed?', type: 'single', options: ["Ad-hoc/Manual Updates", "Basic Website/Social Tools", "Marketing Management Software", "Integrated Marketing Platform", "Outsourced Marketing Service", "N/A"] },
      { id: 'hps-task-q9-satisfaction', text: 'How satisfied are you with marketing management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hps-task-q9-challenges', text: 'What are the main marketing challenges?', type: 'multiple', options: ["Content Creation", "Consistency", "Performance Tracking", "Platform Management", "Time Allocation", "No Major Challenges", "Other"] },
      
      // Task 10
      { id: 'hps-task-q10', text: 'Ensuring compliance with licensing or safety regulations', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'hps-task-q10-method', text: 'How is compliance management handled?', type: 'single', options: ["Manual Document Management", "Basic Spreadsheet Tracking", "Compliance Management Software", "Integrated Compliance Platform", "Professional Service/Consultant", "N/A"] },
      { id: 'hps-task-q10-satisfaction', text: 'How satisfied are you with compliance processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hps-task-q10-challenges', text: 'What are the main compliance challenges?', type: 'multiple', options: ["Keeping Current", "Documentation Storage", "Renewal Management", "Staff Training", "Inspection Preparation", "No Major Challenges", "Other"] }
    ]
  }
];

const home_personal_services: Industry = {
  id: 'home_personal_services',
  label: 'Home & Personal Services',
  icon: PawPrint,
  sections: home_personal_servicesSections
};

export default home_personal_services;