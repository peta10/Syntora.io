import { Dumbbell } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const fitness_wellnessSections: Section[] = [
  {
    title: 'Industry Tasks: Fitness & Wellness',
    description: "Tasks related to gyms, wellness centers, spas, personal training, yoga studios, and similar businesses.",
    questions: [
      // Task 1
      { id: 'fit-task-q1', text: 'Managing appointments, class bookings, or treatment schedules', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'fit-task-q1-method', text: 'How are appointments/bookings managed?', type: 'single', options: ["Paper Schedule", "Digital Calendar", "Basic Booking Software", "Industry-Specific Platform", "Integrated Management System", "N/A"] },
      { id: 'fit-task-q1-satisfaction', text: 'How satisfied are you with booking processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'fit-task-q1-challenges', text: 'What are the main booking challenges?', type: 'multiple', options: ["Double Bookings", "Cancellations/No-Shows", "Schedule Changes", "Client Communications", "Staff Coordination", "No Major Challenges", "Other"] },
      
      // Task 2
      { id: 'fit-task-q2', text: 'Handling client/member check-ins and registrations', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'fit-task-q2-method', text: 'How are check-ins/registrations managed?', type: 'single', options: ["Paper Sign-in", "Basic Digital System", "Check-in Software", "Member Management System", "Automated Check-in Platform", "N/A"] },
      { id: 'fit-task-q2-satisfaction', text: 'How satisfied are you with check-in processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'fit-task-q2-challenges', text: 'What are the main check-in challenges?', type: 'multiple', options: ["Speed/Efficiency", "New Member Registration", "Verification", "Peak Time Management", "Data Collection", "No Major Challenges", "Other"] },
      
      // Task 3
      { id: 'fit-task-q3', text: 'Processing payments, managing memberships/packages, and billing', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'fit-task-q3-method', text: 'How are payments/memberships managed?', type: 'single', options: ["Manual Processing", "Basic POS System", "Membership Software", "Integrated Payment Platform", "Automated Billing System", "N/A"] },
      { id: 'fit-task-q3-satisfaction', text: 'How satisfied are you with payment processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'fit-task-q3-challenges', text: 'What are the main payment/membership challenges?', type: 'multiple', options: ["Payment Processing", "Membership Tracking", "Recurring Billing", "Special Promotions", "Payment Failures", "No Major Challenges", "Other"] },
      
      // Task 4
      { id: 'fit-task-q4', text: 'Sending appointment/class reminders and promotional communications (email, SMS)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'fit-task-q4-method', text: 'How are reminders/communications managed?', type: 'single', options: ["Manual Messaging", "Email Service", "Basic Marketing Tool", "Automated Reminder System", "Integrated Communication Platform", "N/A"] },
      { id: 'fit-task-q4-satisfaction', text: 'How satisfied are you with communication processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'fit-task-q4-challenges', text: 'What are the main communication challenges?', type: 'multiple', options: ["Timing Reminders", "Message Customization", "Tracking Engagement", "Multi-Channel Management", "Content Creation", "No Major Challenges", "Other"] },
      
      // Task 5
      { id: 'fit-task-q5', text: 'Managing staff scheduling, availability, and payroll processing', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'fit-task-q5-method', text: 'How is staff scheduling/payroll managed?', type: 'single', options: ["Manual Schedule", "Spreadsheet System", "Staff Scheduling Software", "Workforce Management System", "Integrated HR Platform", "N/A"] },
      { id: 'fit-task-q5-satisfaction', text: 'How satisfied are you with staff scheduling processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'fit-task-q5-challenges', text: 'What are the main staff scheduling challenges?', type: 'multiple', options: ["Availability Management", "Shift Coverage", "Time Tracking", "Payroll Calculation", "Communication", "No Major Challenges", "Other"] },
      
      // Task 6
      { id: 'fit-task-q6', text: 'Tracking inventory (towels, equipment, retail products) and reordering supplies', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'fit-task-q6-method', text: 'How is inventory/supplies managed?', type: 'single', options: ["Manual Counting", "Spreadsheet Tracking", "Basic Inventory Software", "Retail Management System", "Integrated Inventory Platform", "N/A"] },
      { id: 'fit-task-q6-satisfaction', text: 'How satisfied are you with inventory processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'fit-task-q6-challenges', text: 'What are the main inventory challenges?', type: 'multiple', options: ["Stock Counting", "Reorder Timing", "Product Loss", "Storage Management", "Supplier Coordination", "No Major Challenges", "Other"] },
      
      // Task 7
      { id: 'fit-task-q7', text: 'Responding to member/client inquiries and managing communications', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'fit-task-q7-method', text: 'How are client inquiries managed?', type: 'single', options: ["Phone/In-Person", "Email Management", "Basic CRM", "Customer Service Platform", "Integrated Communication System", "N/A"] },
      { id: 'fit-task-q7-satisfaction', text: 'How satisfied are you with inquiry handling processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'fit-task-q7-challenges', text: 'What are the main inquiry handling challenges?', type: 'multiple', options: ["Response Time", "Tracking Conversations", "Issue Resolution", "After-Hours Support", "Staff Knowledge", "No Major Challenges", "Other"] },
      
      // Task 8
      { id: 'fit-task-q8', text: 'Coordinating facility maintenance and cleaning schedules', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'fit-task-q8-method', text: 'How is facility maintenance managed?', type: 'single', options: ["Ad-hoc Process", "Checklists/Schedules", "Basic Management Software", "Maintenance Tracking System", "Integrated Facility Platform", "N/A"] },
      { id: 'fit-task-q8-satisfaction', text: 'How satisfied are you with maintenance processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'fit-task-q8-challenges', text: 'What are the main maintenance challenges?', type: 'multiple', options: ["Schedule Coordination", "Task Verification", "Equipment Upkeep", "Staff Compliance", "Vendor Management", "No Major Challenges", "Other"] },
      
      // Task 9
      { id: 'fit-task-q9', text: 'Developing or scheduling new programs, classes, or workshops', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'fit-task-q9-method', text: 'How is program development managed?', type: 'single', options: ["Ad-hoc Planning", "Document Templates", "Program Management Software", "Class Planning System", "Integrated Program Platform", "N/A"] },
      { id: 'fit-task-q9-satisfaction', text: 'How satisfied are you with program development processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'fit-task-q9-challenges', text: 'What are the main program development challenges?', type: 'multiple', options: ["Needs Assessment", "Instructor Coordination", "Schedule Planning", "Marketing Promotion", "Attendance Tracking", "No Major Challenges", "Other"] },
      
      // Task 10
      { id: 'fit-task-q10', text: 'Tracking client progress, updating records, or generating reports', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'fit-task-q10-method', text: 'How is client progress tracked?', type: 'single', options: ["Paper Records", "Spreadsheets/Documents", "Basic Tracking Software", "Client Management System", "Integrated Progress Platform", "N/A"] },
      { id: 'fit-task-q10-satisfaction', text: 'How satisfied are you with progress tracking processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'fit-task-q10-challenges', text: 'What are the main progress tracking challenges?', type: 'multiple', options: ["Data Collection", "Consistency", "Client Access", "Report Generation", "Goal Setting", "No Major Challenges", "Other"] },
      
      // Task 11
      { id: 'fit-task-q11', text: 'Member management and communication (renewals, updates)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'fit-task-q11-method', text: 'How is member management handled?', type: 'single', options: ["Manual Process", "Basic CRM", "Member Management Software", "Integrated Membership System", "Automated Management Platform", "N/A"] },
      { id: 'fit-task-q11-satisfaction', text: 'How satisfied are you with member management processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'fit-task-q11-challenges', text: 'What are the main member management challenges?', type: 'multiple', options: ["Renewal Tracking", "Member Engagement", "Information Updates", "Communication Frequency", "Retention Strategies", "No Major Challenges", "Other"] }
    ]
  }
];

const fitness_wellness: Industry = {
  id: 'fitness_wellness',
  label: 'Fitness & Wellness',
  icon: Dumbbell,
  sections: fitness_wellnessSections
};

export default fitness_wellness;