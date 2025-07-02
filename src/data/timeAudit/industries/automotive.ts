import { Car } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const automotiveSections: Section[] = [
{
    title: 'Industry Tasks: Automotive',
        questions: [
          // Task 1
      { id: 'auto-task-q1', text: 'Managing vehicle inventory, tracking stock, and pricing updates', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'auto-task-q1-method', text: 'How is vehicle inventory managed?', type: 'single', options: ["Manual Tracking (Paper/Spreadsheet)", "Basic Dealer Management System", "Integrated Inventory Platform", "Advanced DMS with Inventory Analytics", "N/A"] },
      { id: 'auto-task-q1-satisfaction', text: 'How satisfied are you with inventory management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'auto-task-q1-challenges', text: 'What are the main inventory challenges?', type: 'multiple', options: ["Manual Updates", "Inventory Accuracy", "Photo Management", "Pricing Strategy", "Online Listing Maintenance", "No Major Challenges", "Other"] },
      
      // Task 2
      { id: 'auto-task-q2', text: 'Scheduling service appointments and managing repair orders', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'auto-task-q2-method', text: 'How are service appointments scheduled?', type: 'single', options: ["Manual Calendar/Phone Scheduling", "Basic Scheduling Software", "Service Department Module", "Integrated DMS/Customer Portal", "AI-Assisted Scheduling System", "N/A"] },
      { id: 'auto-task-q2-satisfaction', text: 'How satisfied are you with appointment management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'auto-task-q2-challenges', text: 'What are the main scheduling challenges?', type: 'multiple', options: ["Double Bookings", "Technician Availability", "Time Estimation", "Customer Communication", "Last-Minute Changes", "No Major Challenges", "Other"] },
      
      // Task 3
      { id: 'auto-task-q3', text: 'Parts inventory management and ordering', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'auto-task-q3-method', text: 'How is parts inventory managed?', type: 'single', options: ["Manual Counts/Ordering", "Basic Parts Management Software", "DMS Parts Module", "Integrated Parts/Service/Inventory System", "Automated Replenishment System", "N/A"] },
      { id: 'auto-task-q3-satisfaction', text: 'How satisfied are you with parts management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'auto-task-q3-challenges', text: 'What are the main parts inventory challenges?', type: 'multiple', options: ["Stock Levels", "Ordering Process", "Supplier Integration", "Obsolete Inventory", "Fast-Moving Items", "No Major Challenges", "Other"] },
      
      // Task 4
      { id: 'auto-task-q4', text: 'Creating and managing vehicle listings (online, classifieds, etc.)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'auto-task-q4-method', text: 'How are vehicle listings created/managed?', type: 'single', options: ["Manual Creation per Platform", "Basic Listing Software", "Inventory Syndication Tool", "Integrated Multi-channel Platform", "Automated Listing Management", "N/A"] },
      { id: 'auto-task-q4-satisfaction', text: 'How satisfied are you with listing management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'auto-task-q4-challenges', text: 'What are the main listing challenges?', type: 'multiple', options: ["Multiple Platform Management", "Photo/Content Creation", "Pricing Updates", "Listing Performance", "Removal of Sold Vehicles", "No Major Challenges", "Other"] },
      
      // Task 5
      { id: 'auto-task-q5', text: 'Processing sales documentation and paperwork', type: 'timeEstimate', timeOptions: { hoursPerTransaction: defaultTimeOptions.hoursPerTransaction, hoursPerDay: defaultTimeOptions.hoursPerDay }, tooltip: "Estimate time per transaction OR total time per day." },
      { id: 'auto-task-q5-method', text: 'How is sales documentation processed?', type: 'single', options: ["Manual Paper Forms", "Basic Digital Forms/Templates", "DMS F&I Module", "Electronic Document Management", "Fully Digital Transaction Platform", "N/A"] },
      { id: 'auto-task-q5-freq', text: 'If estimating per transaction, how many sales are processed per DAY?', type: 'number', isRequired: false, tooltip: "Required only if you estimated time per transaction above." },
      { id: 'auto-task-q5-satisfaction', text: 'How satisfied are you with documentation processing?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'auto-task-q5-challenges', text: 'What are the main documentation challenges?', type: 'multiple', options: ["Manual Data Entry", "Compliance Requirements", "Customer Signatures", "Storage/Retrieval", "Error Correction", "No Major Challenges", "Other"] },
      
      // Task 6
      { id: 'auto-task-q6', text: 'Customer follow-up (service reminders, maintenance schedules)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'auto-task-q6-method', text: 'How are customer follow-ups managed?', type: 'single', options: ["Manual Follow-up Process", "Basic Reminder System", "CRM Follow-up Module", "Automated Communication System", "AI-driven Customer Engagement", "N/A"] },
      { id: 'auto-task-q6-satisfaction', text: 'How satisfied are you with customer follow-up?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'auto-task-q6-challenges', text: 'What are the main follow-up challenges?', type: 'multiple', options: ["Consistency", "Timing", "Message Personalization", "Multiple Vehicle Tracking", "Response Tracking", "No Major Challenges", "Other"] },
      
      // Task 7
      { id: 'auto-task-q7', text: 'Creating repair estimates and communicating with customers about service', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'auto-task-q7-method', text: 'How are repair estimates created?', type: 'single', options: ["Manual Estimates", "Basic Estimating Software", "Integrated Service Estimating", "Digital Inspection/Estimate Platform", "AI-Assisted Estimate Generation", "N/A"] },
      { id: 'auto-task-q7-satisfaction', text: 'How satisfied are you with estimate creation?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'auto-task-q7-challenges', text: 'What are the main estimating challenges?', type: 'multiple', options: ["Accuracy", "Customer Approvals", "Supplemental Estimates", "Parts Pricing", "Labor Time Estimates", "No Major Challenges", "Other"] },
      
      // Task 8
      { id: 'auto-task-q8', text: 'Tracking leads and managing the sales pipeline', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'auto-task-q8-method', text: 'How are sales leads managed?', type: 'single', options: ["Manual Lead Tracking", "Basic CRM System", "Dedicated Automotive CRM", "Integrated Lead Management Platform", "AI-Enhanced Lead Prioritization", "N/A"] },
      { id: 'auto-task-q8-satisfaction', text: 'How satisfied are you with lead management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'auto-task-q8-challenges', text: 'What are the main lead management challenges?', type: 'multiple', options: ["Lead Quality", "Response Time", "Follow-up Consistency", "Source Attribution", "Lead Conversion", "No Major Challenges", "Other"] },
      
      // Task 9
      { id: 'auto-task-q9', text: 'Managing loaner/rental vehicles and scheduling', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'auto-task-q9-method', text: 'How are loaner/rental vehicles managed?', type: 'single', options: ["Manual Tracking/Scheduling", "Basic Scheduling Software", "Dedicated Fleet Management", "Integrated DMS Loaner Module", "Automated Loaner Management", "N/A"] },
      { id: 'auto-task-q9-satisfaction', text: 'How satisfied are you with loaner management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'auto-task-q9-challenges', text: 'What are the main loaner management challenges?', type: 'multiple', options: ["Vehicle Availability", "Customer Agreements", "Vehicle Condition Tracking", "Insurance Verification", "Key Management", "No Major Challenges", "Other"] },
      
      // Task 10
      { id: 'auto-task-q10', text: 'Warranty claims processing and tracking', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'auto-task-q10-method', text: 'How are warranty claims processed?', type: 'single', options: ["Manual Claim Submission", "Basic Claims Tracking", "Dedicated Warranty System", "Integrated DMS Warranty Module", "Automated Claims Processing", "N/A"] },
      { id: 'auto-task-q10-satisfaction', text: 'How satisfied are you with warranty claims processing?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'auto-task-q10-challenges', text: 'What are the main warranty claims challenges?', type: 'multiple', options: ["Documentation Requirements", "Submission Deadlines", "Claim Rejections", "Payment Tracking", "Policy Interpretation", "No Major Challenges", "Other"] }
    ]
  }
];

const automotive: Industry = {
  id: 'automotive',
  label: 'Automotive',
  icon: Car,
  sections: automotiveSections
};

export default automotive;