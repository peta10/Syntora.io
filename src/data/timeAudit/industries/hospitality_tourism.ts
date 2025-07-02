import { Plane } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const hospitality_tourismSections: Section[] = [
  {
    title: 'Industry Tasks: Hospitality & Tourism',
    questions: [
      // Task 1
      { id: 'hos-task-q1', text: 'Managing reservations (individual, group), confirming bookings, handling modifications/cancellations', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'hos-task-q1-method', text: 'How are reservations managed?', type: 'single', options: ["Manual Phone/Email Booking", "Basic Reservation Software", "Property Management System", "Integrated Reservation/PMS Platform", "N/A"] },
      { id: 'hos-task-q1-satisfaction', text: 'How satisfied are you with reservation processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hos-task-q1-challenges', text: 'What are the main reservation challenges?', type: 'multiple', options: ["Double Bookings", "Real-time Availability", "Modification Process", "Channel Management", "Group Bookings", "No Major Challenges", "Other"] },
      
      // Task 2
      { id: 'hos-task-q2', text: 'Managing guest check-ins and check-outs', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'hos-task-q2-method', text: 'How are check-in/check-out processes handled?', type: 'single', options: ["Manual Paper Process", "Basic PMS System", "Digital Check-in System", "Mobile/Self-Service Solution", "N/A"] },
      { id: 'hos-task-q2-satisfaction', text: 'How satisfied are you with check-in/out processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hos-task-q2-challenges', text: 'What are the main check-in/out challenges?', type: 'multiple', options: ["Guest Waiting Time", "Key/Access Management", "Payment Processing", "Special Requests", "Group Processing", "No Major Challenges", "Other"] },
      
      // Task 3
      { id: 'hos-task-q3', text: 'Handling routine guest inquiries, requests, and concierge services (phone, email, in-person)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'hos-task-q3-method', text: 'How are guest inquiries and requests managed?', type: 'single', options: ["Ad-hoc Process/Notes", "Standard Log Book", "Request Tracking System", "Integrated Guest Service Platform", "N/A"] },
      { id: 'hos-task-q3-satisfaction', text: 'How satisfied are you with guest service processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hos-task-q3-challenges', text: 'What are the main guest service challenges?', type: 'multiple', options: ["Request Tracking", "Communication Between Shifts", "Response Time", "Service Consistency", "Staff Knowledge", "No Major Challenges", "Other"] },
      
      // Task 4
      { id: 'hos-task-q4', text: 'Coordinating housekeeping, room service, laundry, and maintenance tasks', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'hos-task-q4-method', text: 'How are housekeeping/maintenance tasks coordinated?', type: 'single', options: ["Manual Scheduling/Paper Notes", "Basic Task Lists", "Department Software", "Integrated Operations Platform", "N/A"] },
      { id: 'hos-task-q4-satisfaction', text: 'How satisfied are you with operations coordination?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hos-task-q4-challenges', text: 'What are the main operational challenges?', type: 'multiple', options: ["Staff Communication", "Task Prioritization", "Room Status Updates", "Quality Control", "Resource Allocation", "No Major Challenges", "Other"] },
      
      // Task 5
      { id: 'hos-task-q5', text: 'Generating guest folios/invoices, processing payments, and reconciling accounts', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'hos-task-q5-method', text: 'How is billing and payment processing handled?', type: 'single', options: ["Manual Invoicing", "Basic POS/Payment System", "Property Management System", "Integrated Payments/Accounting Platform", "N/A"] },
      { id: 'hos-task-q5-satisfaction', text: 'How satisfied are you with billing processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hos-task-q5-challenges', text: 'What are the main billing challenges?', type: 'multiple', options: ["Charge Accuracy", "Folio Management", "Payment Processing", "Group Billing", "Accounting Integration", "No Major Challenges", "Other"] },
      
      // Task 6
      { id: 'hos-task-q6', text: 'Managing staff schedules for front desk, housekeeping, F&B, etc.', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'hos-task-q6-method', text: 'How are staff schedules managed?', type: 'single', options: ["Manual Scheduling/Paper", "Spreadsheet Based", "Scheduling Software", "Integrated Workforce Management", "N/A"] },
      { id: 'hos-task-q6-satisfaction', text: 'How satisfied are you with staff scheduling?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hos-task-q6-challenges', text: 'What are the main scheduling challenges?', type: 'multiple', options: ["Staff Availability", "Demand Forecasting", "Last-minute Changes", "Department Coordination", "Communication", "No Major Challenges", "Other"] },
      
      // Task 7
      { id: 'hos-task-q7', text: 'Managing inventory for amenities, linens, food & beverage, etc.', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'hos-task-q7-method', text: 'How is inventory management handled?', type: 'single', options: ["Manual Counts/Tracking", "Spreadsheet System", "Inventory Management Software", "Integrated Procurement System", "N/A"] },
      { id: 'hos-task-q7-satisfaction', text: 'How satisfied are you with inventory processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hos-task-q7-challenges', text: 'What are the main inventory challenges?', type: 'multiple', options: ["Stock Accuracy", "Ordering/Reordering", "Department Coordination", "Cost Control", "Storage Management", "No Major Challenges", "Other"] },
      
      // Task 8
      { id: 'hos-task-q8', text: 'Responding to guest reviews and managing online reputation', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'hos-task-q8-method', text: 'How are online reviews managed?', type: 'single', options: ["Ad-hoc Monitoring", "Manual Platform Checking", "Review Management Software", "Integrated Reputation System", "N/A"] },
      { id: 'hos-task-q8-satisfaction', text: 'How satisfied are you with online reputation management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hos-task-q8-challenges', text: 'What are the main review management challenges?', type: 'multiple', options: ["Monitoring Multiple Platforms", "Timely Responses", "Response Quality", "Internal Communication", "Reputation Metrics", "No Major Challenges", "Other"] },
      
      // Task 9
      { id: 'hos-task-q9', text: 'Coordinating group bookings, event planning, and catering details', type: 'timeEstimate', timeOptions: { hoursPerTransaction: defaultTimeOptions.hoursPerTransaction, hoursPerWeek: defaultTimeOptions.hoursPerWeek }, tooltip: "Estimate time per event OR total time per week." },
      { id: 'hos-task-q9-method', text: 'How are group events managed?', type: 'single', options: ["Manual Coordination/Paper", "Basic Event Documentation", "Event Management Software", "Integrated Sales/Events Platform", "N/A"] },
      { id: 'hos-task-q9-freq', text: 'If estimating per event, how many group events are managed per MONTH?', type: 'number', isRequired: false, tooltip: "Required only if you estimated time per event above." },
      { id: 'hos-task-q9-satisfaction', text: 'How satisfied are you with group/event processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hos-task-q9-challenges', text: 'What are the main group/event challenges?', type: 'multiple', options: ["Contract Management", "Detail Coordination", "Department Communication", "Schedule Conflicts", "Resource Allocation", "No Major Challenges", "Other"] },
      
      // Task 10
      { id: 'hos-task-q10', text: 'Managing loyalty program administration and member communications', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'hos-task-q10-method', text: 'How is loyalty program management handled?', type: 'single', options: ["Manual Tracking/Spreadsheet", "Basic Loyalty Software", "CRM System with Loyalty", "Integrated Marketing/Loyalty Platform", "N/A"] },
      { id: 'hos-task-q10-satisfaction', text: 'How satisfied are you with loyalty program management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hos-task-q10-challenges', text: 'What are the main loyalty program challenges?', type: 'multiple', options: ["Point Tracking", "Member Communication", "Benefit Delivery", "Program Analysis", "Integration with PMS", "No Major Challenges", "Other"] },
    ]
  }
];

const hospitality_tourism: Industry = {
  id: 'hospitality_tourism',
  label: 'Hospitality & Tourism',
  icon: Plane,
  sections: hospitality_tourismSections
};

export default hospitality_tourism;