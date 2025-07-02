import { Factory } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const manufacturingSections: Section[] = [
  {
    title: 'Industry Tasks: Manufacturing & Production',
    questions: [
      // Task 1
      { id: 'mfg-task-q1', text: 'Creating, updating, or adjusting production schedules and work orders', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'mfg-task-q1-method', text: 'How are production schedules managed?', type: 'single', options: ["Manual Spreadsheets/Whiteboard", "Basic Production Software", "MRP System (Limited Integration)", "Integrated ERP/MES System", "N/A"] },
      { id: 'mfg-task-q1-satisfaction', text: 'How satisfied are you with scheduling processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'mfg-task-q1-challenges', text: 'What are the main scheduling challenges?', type: 'multiple', options: ["Real-time Updates", "Resource Conflicts", "Change Management", "Visibility Across Teams", "Integration with Orders", "No Major Challenges", "Other"] },
      
      // Task 2
      { id: 'mfg-task-q2', text: 'Manually tracking raw materials, work-in-progress (WIP), and finished goods inventory', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'mfg-task-q2-method', text: 'How is inventory tracked?', type: 'single', options: ["Manual Counts/Paper Records", "Spreadsheet Tracking", "Inventory Management Software", "Integrated ERP/Inventory System", "N/A"] },
      { id: 'mfg-task-q2-satisfaction', text: 'How satisfied are you with inventory tracking?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'mfg-task-q2-challenges', text: 'What are the main inventory challenges?', type: 'multiple', options: ["Accuracy", "Real-time Visibility", "WIP Tracking", "Stock Levels", "Material Traceability", "No Major Challenges", "Other"] },
      
      // Task 3
      { id: 'mfg-task-q3', text: 'Recording quality control data, inspection results, and generating compliance reports', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'mfg-task-q3-method', text: 'How is quality control data managed?', type: 'single', options: ["Paper Forms/Manual Records", "Spreadsheet Documentation", "Quality Management Software", "Integrated QMS/ERP System", "N/A"] },
      { id: 'mfg-task-q3-satisfaction', text: 'How satisfied are you with quality control processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'mfg-task-q3-challenges', text: 'What are the main quality control challenges?', type: 'multiple', options: ["Data Collection", "Report Generation", "Compliance Tracking", "Defect Analysis", "Corrective Actions", "No Major Challenges", "Other"] },
      
      // Task 4
      { id: 'mfg-task-q4', text: 'Scheduling, tracking, and documenting machine maintenance (preventative and reactive)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'mfg-task-q4-method', text: 'How is maintenance managed?', type: 'single', options: ["Reactive/Paper Records", "Basic Maintenance Schedule", "CMMS Software", "Integrated Maintenance/ERP System", "N/A"] },
      { id: 'mfg-task-q4-satisfaction', text: 'How satisfied are you with maintenance processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'mfg-task-q4-challenges', text: 'What are the main maintenance challenges?', type: 'multiple', options: ["Preventative Scheduling", "Downtime Tracking", "Spare Parts Management", "Work Order Management", "Technician Availability", "No Major Challenges", "Other"] },
      
      // Task 5
      { id: 'mfg-task-q5', text: 'Entering sales orders, creating shipping documents, and coordinating logistics', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'mfg-task-q5-method', text: 'How are orders and shipping managed?', type: 'single', options: ["Manual Paper Process", "Spreadsheet/Email System", "Order Management Software", "Integrated ERP/Logistics System", "N/A"] },
      { id: 'mfg-task-q5-satisfaction', text: 'How satisfied are you with order management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'mfg-task-q5-challenges', text: 'What are the main order/shipping challenges?', type: 'multiple', options: ["Order Entry", "Shipping Documentation", "Order Tracking", "Carrier Coordination", "Delivery Scheduling", "No Major Challenges", "Other"] },
      
      // Task 6
      { id: 'mfg-task-q6', text: 'Monitoring production line performance and manually compiling reports', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'mfg-task-q6-method', text: 'How is production performance monitored?', type: 'single', options: ["Manual Observation/Notes", "Spreadsheet Tracking", "Production Monitoring Software", "Integrated MES/Analytics System", "N/A"] },
      { id: 'mfg-task-q6-satisfaction', text: 'How satisfied are you with performance monitoring?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'mfg-task-q6-challenges', text: 'What are the main monitoring challenges?', type: 'multiple', options: ["Real-time Data", "Report Generation", "KPI Tracking", "Root Cause Analysis", "Performance Visibility", "No Major Challenges", "Other"] },
      
      // Task 7
      { id: 'mfg-task-q7', text: 'Managing supplier communications, purchase orders, and receiving materials', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'mfg-task-q7-method', text: 'How is procurement managed?', type: 'single', options: ["Manual/Email Process", "Spreadsheet Tracking", "Procurement Software", "Integrated ERP/Procurement System", "N/A"] },
      { id: 'mfg-task-q7-satisfaction', text: 'How satisfied are you with procurement processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'mfg-task-q7-challenges', text: 'What are the main procurement challenges?', type: 'multiple', options: ["Supplier Communication", "PO Tracking", "Receiving Process", "Quality Verification", "Lead Time Management", "No Major Challenges", "Other"] },
      
      // Task 8
      { id: 'mfg-task-q8', text: 'Tracking employee time and attendance on the production floor', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'mfg-task-q8-method', text: 'How is production floor time tracking handled?', type: 'single', options: ["Paper Timesheets", "Manual Clock-in System", "Electronic Time Tracking", "Integrated Labor/ERP System", "N/A"] },
      { id: 'mfg-task-q8-satisfaction', text: 'How satisfied are you with time tracking?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'mfg-task-q8-challenges', text: 'What are the main time tracking challenges?', type: 'multiple', options: ["Accuracy", "Job/Task Assignment", "Reporting", "Payroll Integration", "Productivity Analysis", "No Major Challenges", "Other"] },
      
      // Task 9
      { id: 'mfg-task-q9', text: 'Handling scrap reporting and material yield calculations', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'mfg-task-q9-method', text: 'How is scrap/yield tracking handled?', type: 'single', options: ["Manual Records/Counts", "Spreadsheet Calculations", "Scrap Tracking Software", "Integrated MES/Quality System", "N/A"] },
      { id: 'mfg-task-q9-satisfaction', text: 'How satisfied are you with scrap/yield tracking?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'mfg-task-q9-challenges', text: 'What are the main scrap/yield challenges?', type: 'multiple', options: ["Accurate Counting", "Root Cause Analysis", "Cost Tracking", "Trend Analysis", "Process Improvement", "No Major Challenges", "Other"] },
      
      // Task 10
      { id: 'mfg-task-q10', text: 'Ensuring safety compliance and managing incident reporting', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'mfg-task-q10-method', text: 'How is safety compliance managed?', type: 'single', options: ["Paper Forms/Manual Process", "Spreadsheet Tracking", "Safety Management Software", "Integrated EHS System", "N/A"] },
      { id: 'mfg-task-q10-satisfaction', text: 'How satisfied are you with safety processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'mfg-task-q10-challenges', text: 'What are the main safety compliance challenges?', type: 'multiple', options: ["Training Tracking", "Incident Documentation", "Corrective Actions", "Audit Readiness", "Regulatory Updates", "No Major Challenges", "Other"] },
    ]
  }
];

const manufacturing: Industry = {
  id: 'manufacturing',
  label: 'Manufacturing & Production',
  icon: Factory,
  sections: manufacturingSections
};

export default manufacturing;