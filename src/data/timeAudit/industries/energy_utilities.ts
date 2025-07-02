import { Fuel } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const energy_utilitiesSections: Section[] = [
  {
    title: 'Industry Tasks: Energy & Utilities',
    description: "Tasks related to electricity, gas, water, renewable energy services, and utility operations.",
    questions: [
      // Task 1
      { id: 'egy-task-q1', text: 'Monitoring grid/pipeline operations, SCADA systems, or plant performance dashboards', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'egy-task-q1-method', text: 'How are operations monitored?', type: 'single', options: ["Manual Readings", "Basic Digital Systems", "SCADA/Control Systems", "Advanced Monitoring Platform", "Integrated Operations Center", "N/A"] },
      { id: 'egy-task-q1-satisfaction', text: 'How satisfied are you with monitoring processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'egy-task-q1-challenges', text: 'What are the main monitoring challenges?', type: 'multiple', options: ["Data Access", "System Integration", "Alert Management", "Remote Monitoring", "Real-time Updates", "No Major Challenges", "Other"] },
      
      // Task 2
      { id: 'egy-task-q2', text: 'Customer billing generation, meter reading data processing, and payment handling/reconciliation', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'egy-task-q2-method', text: 'How is billing/metering managed?', type: 'single', options: ["Manual Meter Reading", "Basic Billing System", "Advanced Metering Infrastructure", "Customer Information System", "Integrated Smart Billing", "N/A"] },
      { id: 'egy-task-q2-satisfaction', text: 'How satisfied are you with billing processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'egy-task-q2-challenges', text: 'What are the main billing challenges?', type: 'multiple', options: ["Meter Reading Accuracy", "Data Processing", "Bill Generation", "Payment Processing", "Dispute Resolution", "No Major Challenges", "Other"] },
      
      // Task 3
      { id: 'egy-task-q3', text: 'Scheduling and dispatching field crews for maintenance, repairs, or installations', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'egy-task-q3-method', text: 'How is crew scheduling/dispatch managed?', type: 'single', options: ["Manual Scheduling", "Basic Digital Calendar", "Workforce Management System", "Mobile Workforce Platform", "AI-Powered Field Service", "N/A"] },
      { id: 'egy-task-q3-satisfaction', text: 'How satisfied are you with crew scheduling processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'egy-task-q3-challenges', text: 'What are the main crew scheduling challenges?', type: 'multiple', options: ["Emergency Response", "Crew Availability", "Job Prioritization", "Geographic Coverage", "Skills Matching", "No Major Challenges", "Other"] },
      
      // Task 4
      { id: 'egy-task-q4', text: 'Managing service orders, work permits, and safety documentation/checklists', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'egy-task-q4-method', text: 'How are service orders/permits managed?', type: 'single', options: ["Paper Forms", "Digital Documents", "Work Order System", "Service Management Platform", "Integrated Workflow System", "N/A"] },
      { id: 'egy-task-q4-satisfaction', text: 'How satisfied are you with service order processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'egy-task-q4-challenges', text: 'What are the main service order challenges?', type: 'multiple', options: ["Documentation Completeness", "Approval Workflows", "Field Access", "Status Tracking", "Compliance Verification", "No Major Challenges", "Other"] },
      
      // Task 5
      { id: 'egy-task-q5', text: 'Processing new service connections, transfers, or disconnections', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'egy-task-q5-method', text: 'How are service connections managed?', type: 'single', options: ["Manual Process", "Basic Work Order System", "Customer Service Software", "Connection Management System", "Integrated Service Platform", "N/A"] },
      { id: 'egy-task-q5-satisfaction', text: 'How satisfied are you with connection processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'egy-task-q5-challenges', text: 'What are the main connection challenges?', type: 'multiple', options: ["Application Processing", "Technical Assessment", "Scheduling", "Documentation", "Information Transfer", "No Major Challenges", "Other"] },
      
      // Task 6
      { id: 'egy-task-q6', text: 'Handling customer inquiries regarding outages, billing, or service issues', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'egy-task-q6-method', text: 'How are customer inquiries managed?', type: 'single', options: ["Phone/Email Only", "Basic Ticketing System", "Customer Service Platform", "Integrated CRM", "Automated Support System", "N/A"] },
      { id: 'egy-task-q6-satisfaction', text: 'How satisfied are you with inquiry handling processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'egy-task-q6-challenges', text: 'What are the main inquiry handling challenges?', type: 'multiple', options: ["Volume Management", "Information Access", "Issue Resolution", "Communication Tracking", "After-Hours Support", "No Major Challenges", "Other"] },
      
      // Task 7
      { id: 'egy-task-q7', text: 'Managing asset inventory (poles, transformers, pipes, etc.) and maintenance records', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'egy-task-q7-method', text: 'How is asset management handled?', type: 'single', options: ["Paper Records", "Spreadsheet Inventory", "Basic Asset Software", "Enterprise Asset Management", "Integrated GIS/Asset Platform", "N/A"] },
      { id: 'egy-task-q7-satisfaction', text: 'How satisfied are you with asset management processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'egy-task-q7-challenges', text: 'What are the main asset management challenges?', type: 'multiple', options: ["Asset Tracking", "Maintenance Scheduling", "Age/Condition Assessment", "Replacement Planning", "Field Verification", "No Major Challenges", "Other"] },
      
      // Task 8
      { id: 'egy-task-q8', text: 'Preparing regulatory compliance reports and filings', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'egy-task-q8-method', text: 'How is regulatory reporting managed?', type: 'single', options: ["Manual Reports", "Document Templates", "Compliance Software", "Regulatory Management System", "Integrated Compliance Platform", "N/A"] },
      { id: 'egy-task-q8-satisfaction', text: 'How satisfied are you with compliance processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'egy-task-q8-challenges', text: 'What are the main compliance challenges?', type: 'multiple', options: ["Data Collection", "Regulatory Changes", "Report Preparation", "Submission Deadlines", "Audit Readiness", "No Major Challenges", "Other"] },
      
      // Task 9
      { id: 'egy-task-q9', text: 'Analyzing energy consumption data and forecasting demand manually or using basic tools', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'egy-task-q9-method', text: 'How is consumption analysis managed?', type: 'single', options: ["Manual Calculations", "Basic Spreadsheets", "Analysis Software", "Forecasting System", "AI/ML Analytics Platform", "N/A"] },
      { id: 'egy-task-q9-satisfaction', text: 'How satisfied are you with analysis processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'egy-task-q9-challenges', text: 'What are the main analysis challenges?', type: 'multiple', options: ["Data Quality", "Tool Limitations", "Analysis Complexity", "Pattern Recognition", "Forecast Accuracy", "No Major Challenges", "Other"] },
      
      // Task 10
      { id: 'egy-task-q10', text: 'Managing environmental compliance monitoring and reporting', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'egy-task-q10-method', text: 'How is environmental compliance managed?', type: 'single', options: ["Manual Monitoring", "Basic Testing/Recording", "Environmental Software", "Monitoring Systems", "Integrated Compliance Platform", "N/A"] },
      { id: 'egy-task-q10-satisfaction', text: 'How satisfied are you with environmental processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'egy-task-q10-challenges', text: 'What are the main environmental challenges?', type: 'multiple', options: ["Data Collection", "Regulatory Changes", "Monitoring Equipment", "Reporting Requirements", "Violation Management", "No Major Challenges", "Other"] },
      
      // Task 11
      { id: 'egy-task-q11', text: 'Energy Trading data entry and reconciliation (if applicable)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'egy-task-q11-method', text: 'How is energy trading managed?', type: 'single', options: ["Manual Transactions", "Spreadsheet Tracking", "Trading Software", "Energy Trading Platform", "Integrated Market System", "N/A"] },
      { id: 'egy-task-q11-satisfaction', text: 'How satisfied are you with trading processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'egy-task-q11-challenges', text: 'What are the main trading challenges?', type: 'multiple', options: ["Data Entry", "Market Monitoring", "Position Tracking", "Settlement Verification", "Risk Assessment", "No Major Challenges", "Other"] }
    ]
  }
];

const energy_utilities: Industry = {
  id: 'energy_utilities',
  label: 'Energy & Utilities',
  icon: Fuel,
  sections: energy_utilitiesSections
};

export default energy_utilities;