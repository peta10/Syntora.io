import { UtensilsCrossed } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const restaurantSections: Section[] = [
  {
    title: 'Industry Tasks: Restaurant & Food Service',
    questions: [
      // Task 1
      { id: 'res-task-q1', text: 'Entering or reconciling orders between POS, kitchen display systems (KDS), and delivery platforms', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'res-task-q1-method', text: 'How are orders primarily processed/reconciled?', type: 'single', options: ["Manual Entry/Paper Tickets", "POS Only (Manual Reconciliation)", "Integrated POS/KDS", "Integrated POS/KDS/Delivery Platforms", "N/A"] },
      { id: 'res-task-q1-satisfaction', text: 'How satisfied are you with the order processing system?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'res-task-q1-challenges', text: 'What are the main order processing challenges?', type: 'multiple', options: ["Order Errors", "Slow Entry", "Tablet Clutter (Delivery Apps)", "Lack of Integration", "Difficult Reconciliation", "No Major Challenges", "Other"] },
      
      // Task 2
      { id: 'res-task-q2', text: 'Tracking food, beverage, and supply inventory levels', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'res-task-q2-method', text: 'How is inventory tracking managed?', type: 'single', options: ["Manual Counts/Paper Records", "Spreadsheet Tracking", "POS Inventory Module", "Dedicated Inventory Management System", "N/A"] },
      { id: 'res-task-q2-satisfaction', text: 'How satisfied are you with inventory tracking?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'res-task-q2-challenges', text: 'What are the main inventory challenges?', type: 'multiple', options: ["Time Consuming Counts", "Accuracy Issues", "Stock Outs", "Waste Tracking", "Cost Calculations", "No Major Challenges", "Other"] },
      
      // Task 3
      { id: 'res-task-q3', text: 'Managing staff schedules, shift changes, and time-off requests', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'res-task-q3-method', text: 'How are staff schedules managed?', type: 'single', options: ["Paper Schedule/Whiteboard", "Spreadsheet", "Scheduling Software", "POS/HR Integrated System", "N/A"] },
      { id: 'res-task-q3-satisfaction', text: 'How satisfied are you with scheduling management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'res-task-q3-challenges', text: 'What are the main scheduling challenges?', type: 'multiple', options: ["Time Consuming Creation", "Last-minute Changes", "Skill/Section Matching", "Shift Coverage", "Communication to Staff", "No Major Challenges", "Other"] },
      
      // Task 4
      { id: 'res-task-q4', text: 'Recording employee hours, processing payroll, and managing tips distribution', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'res-task-q4-method', text: 'How are hours/payroll/tips managed?', type: 'single', options: ["Manual Timecards/Calculations", "Spreadsheet Tracking", "Time Clock System", "Integrated POS/Payroll System", "N/A"] },
      { id: 'res-task-q4-satisfaction', text: 'How satisfied are you with payroll/tips management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'res-task-q4-challenges', text: 'What are the main payroll/tips challenges?', type: 'multiple', options: ["Time-consuming Calculations", "Inaccurate Time Records", "Tips Distribution Fairness", "Tax Compliance", "Record Keeping", "No Major Challenges", "Other"] },
      
      // Task 5
      { id: 'res-task-q5', text: 'Manually managing reservations, waitlists, and table assignments', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'res-task-q5-method', text: 'How are reservations/waitlists managed?', type: 'single', options: ["Paper Book/List", "Spreadsheet/Digital Calendar", "Basic Reservation App", "Full Restaurant Management System", "N/A"] },
      { id: 'res-task-q5-satisfaction', text: 'How satisfied are you with reservation management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'res-task-q5-challenges', text: 'What are the main reservation challenges?', type: 'multiple', options: ["No-shows", "Double Bookings", "Special Requests Tracking", "Wait Time Estimates", "Table Optimization", "No Major Challenges", "Other"] },
      
      // Task 6
      { id: 'res-task-q6', text: 'Placing orders with food and beverage suppliers/vendors', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'res-task-q6-method', text: 'How are supplier orders placed?', type: 'single', options: ["Phone/Email Orders", "Vendor Websites/Portals", "Inventory System Auto-Orders", "Integrated Procurement System", "N/A"] },
      { id: 'res-task-q6-satisfaction', text: 'How satisfied are you with the ordering process?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'res-task-q6-challenges', text: 'What are the main supplier ordering challenges?', type: 'multiple', options: ["Time Consuming", "Order Errors", "Price Fluctuations", "Delivery Scheduling", "Quality Consistency", "No Major Challenges", "Other"] },
      
      // Task 7
      { id: 'res-task-q7', text: 'Updating menus (physical, digital, POS)', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'res-task-q7-method', text: 'How are menu updates handled?', type: 'single', options: ["Manual Updates to All Systems", "Design Software + Manual POS Updates", "Menu Management Software", "Integrated System with One-time Updates", "N/A"] },
      { id: 'res-task-q7-satisfaction', text: 'How satisfied are you with menu updating?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'res-task-q7-challenges', text: 'What are the main menu update challenges?', type: 'multiple', options: ["Consistency Across Platforms", "Price Calculations", "Design/Layout", "Training Staff on Changes", "Time Consuming Updates", "No Major Challenges", "Other"] },
      
      // Task 8
      { id: 'res-task-q8', text: 'Handling customer inquiries and resolving complaints', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'res-task-q8-method', text: 'How are customer inquiries/complaints tracked?', type: 'single', options: ["No Formal System", "Manual Log/Notes", "Shared Document/Spreadsheet", "CRM/Feedback Management System", "N/A"] },
      { id: 'res-task-q8-satisfaction', text: 'How satisfied are you with customer inquiry management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'res-task-q8-challenges', text: 'What are the main customer inquiry challenges?', type: 'multiple', options: ["Response Time", "Consistency of Solutions", "Record Keeping", "Follow-up", "Reputation Management", "No Major Challenges", "Other"] },
      
      // Task 9
      { id: 'res-task-q9', text: 'Performing daily/weekly sales reconciliation and reporting', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'res-task-q9-method', text: 'How are sales reports generated/reconciled?', type: 'single', options: ["Manual Calculations/Entries", "POS Reports + Manual Entry", "POS Reporting with Export to Accounting", "Integrated POS/Accounting System", "N/A"] },
      { id: 'res-task-q9-satisfaction', text: 'How satisfied are you with sales reporting?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'res-task-q9-challenges', text: 'What are the main sales reporting challenges?', type: 'multiple', options: ["Time Consuming", "Accuracy Issues", "Discrepancy Resolution", "Limited Analytics", "Multiple Data Sources", "No Major Challenges", "Other"] },
      
      // Task 10
      { id: 'res-task-q10', text: 'Completing food safety checklists and compliance documentation', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'res-task-q10-method', text: 'How are safety checks/compliance documented?', type: 'single', options: ["Paper Checklists/Binders", "Basic Digital Forms", "Food Safety Software", "Integrated Restaurant Management System", "N/A"] },
      { id: 'res-task-q10-satisfaction', text: 'How satisfied are you with safety documentation?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'res-task-q10-challenges', text: 'What are the main safety documentation challenges?', type: 'multiple', options: ["Consistency/Completeness", "Staff Compliance", "Record Storage/Retrieval", "Audit Preparation", "Training New Staff", "No Major Challenges", "Other"] },
      
      // Task 11
      { id: 'res-task-q11', text: 'Customer loyalty program administration', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'res-task-q11-method', text: 'How is your loyalty program managed?', type: 'single', options: ["Paper Cards/Manual Tracking", "Basic Digital Tracking", "POS Loyalty Module", "Third-party Loyalty Platform", "N/A"] },
      { id: 'res-task-q11-satisfaction', text: 'How satisfied are you with loyalty program management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'res-task-q11-challenges', text: 'What are the main loyalty program challenges?', type: 'multiple', options: ["Customer Adoption", "Reward Tracking", "Program Communication", "Measuring ROI", "System Integration", "No Major Challenges", "Other"] },
      
      // Task 12
      { id: 'res-task-q12', text: 'Inventory management and ordering', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'res-task-q12-method', text: 'How do you manage inventory ordering?', type: 'single', options: ["Manual Counts/Orders", "Par Level Sheet/Spreadsheet", "Recipe-based Inventory Software", "Automated Ordering System", "N/A"] },
      { id: 'res-task-q12-satisfaction', text: 'How satisfied are you with inventory ordering?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'res-task-q12-challenges', text: 'What are the main inventory ordering challenges?', type: 'multiple', options: ["Demand Forecasting", "Minimizing Waste", "Vendor Management", "Cost Fluctuations", "Storage Limitations", "No Major Challenges", "Other"] },
    ],
  }
];

const restaurant: Industry = {
  id: 'restaurant',
  label: 'Restaurant & Food Service',
  icon: UtensilsCrossed,
  sections: restaurantSections
};

export default restaurant; 