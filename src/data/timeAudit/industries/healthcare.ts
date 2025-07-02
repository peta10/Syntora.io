import { HeartPulse } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const healthcareSections: Section[] = [
  {
    title: 'Industry Tasks: Healthcare & Medical Practices',
    questions: [
      // Task 1
      { id: 'hea-task-q1', text: 'Managing patient appointments (scheduling, rescheduling, reminders)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'hea-task-q1-method', text: 'How are appointments primarily managed?', type: 'single', options: ["Manual Phone/Paper Book", "Basic Digital Calendar", "EHR/PM Scheduling Module", "Online Patient Scheduling Portal", "N/A"] },
      { id: 'hea-task-q1-satisfaction', text: 'How satisfied are you with appointment management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hea-task-q1-challenges', text: 'What are the main appointment challenges?', type: 'multiple', options: ["Time Consuming Scheduling", "No-Shows/Cancellations", "Manual Reminders", "Double Booking", "Optimizing Provider Time", "No Major Challenges", "Other"] },
      
      // Task 2
      { id: 'hea-task-q2', text: 'Patient check-in/check-out process and collecting co-pays/payments', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'hea-task-q2-method', text: 'How is check-in/check-out handled?', type: 'single', options: ["Manual Paper Forms/Entry", "EHR/PM System (Manual Data)", "Patient Kiosk/Tablet Check-in", "Integrated Check-in/Payment System", "N/A"] },
      { id: 'hea-task-q2-satisfaction', text: 'How satisfied are you with check-in/out?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hea-task-q2-challenges', text: 'What are the main check-in/out challenges?', type: 'multiple', options: ["Wait Times", "Manual Form Entry", "Insurance Verification Delays", "Payment Collection Issues", "Staff Time", "No Major Challenges", "Other"] },
      
      // Task 3
      { id: 'hea-task-q3', text: 'Updating patient electronic health records (EHR/EMR) and medical history', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'hea-task-q3-method', text:'How are patient records updated?', type:'single', options:["Manual Entry During/After Visit", "Dictation/Transcription Service", "Patient Portal Updates (Manual Review)", "Direct Entry via EHR/EMR Interface", "N/A"]},
      { id: 'hea-task-q3-satisfaction', text:'How satisfied are you with record updating?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
      { id: 'hea-task-q3-challenges', text:'What are the main record updating challenges?', type:'multiple', options:["Time Consuming Data Entry", "Incomplete Information", "Navigating EHR Clunkiness", "Interoperability Issues", "Ensuring Accuracy", "No Major Challenges", "Other"]},
      
      // Task 4
      { id: 'hea-task-q4', text: 'Processing insurance claims, billing patients, and managing accounts receivable', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'hea-task-q4-method', text:'How is billing/claims handled?', type:'single', options:["Manual Form Submission/Spreadsheet Tracking", "EHR/PM Billing Module (Manual Scrubbing)", "Clearinghouse Submission", "Outsourced Billing Service", "N/A"]},
      { id: 'hea-task-q4-satisfaction', text:'How satisfied are you with the billing/claims process?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
      { id: 'hea-task-q4-challenges', text:'What are the main billing challenges?', type:'multiple', options:["Claim Denials/Rejections", "Coding Errors", "Time to Payment", "Manual Follow-Up on AR", "Patient Collections", "No Major Challenges", "Other"]},
      
      // Task 5
      { id: 'hea-task-q5', text: 'Verifying insurance eligibility and benefits', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'hea-task-q5-method', text: 'How is insurance verification performed?', type: 'single', options: ["Manual Phone Calls/Payer Websites", "Batch Verification Process", "Real-time Eligibility Software", "Integrated PM/Verification System", "N/A"] },
      { id: 'hea-task-q5-satisfaction', text: 'How satisfied are you with insurance verification?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hea-task-q5-challenges', text: 'What are the main verification challenges?', type: 'multiple', options: ["Time Consuming Process", "Staff Training Requirements", "Payer Website Navigation", "Collecting Patient Information", "Interpreting Benefits", "No Major Challenges", "Other"] },
      
      // Task 6
      { id: 'hea-task-q6', text: 'Managing prior authorizations for procedures, medications, or referrals', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'hea-task-q6-method', text: 'How are prior authorizations handled?', type: 'single', options: ["Manual Submission/Phone Calls", "Fax/Portal Submission (Manual Tracking)", "Authorization Management Software", "Integrated PM/Authorization System", "N/A"] },
      { id: 'hea-task-q6-satisfaction', text: 'How satisfied are you with authorization processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hea-task-q6-challenges', text: 'What are the main authorization challenges?', type: 'multiple', options: ["Time Consuming Process", "Payer Requirements Variation", "Documentation Gathering", "Status Tracking", "Denial Management", "No Major Challenges", "Other"] },
      
      // Task 7
      { id: 'hea-task-q7', text: 'Inventory management of medical supplies, medications, and equipment', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'hea-task-q7-method', text: 'How is medical inventory managed?', type: 'single', options: ["Manual Counts/Paper Records", "Spreadsheet Tracking", "Barcode/Scanning System", "Integrated Inventory Management System", "N/A"] },
      { id: 'hea-task-q7-satisfaction', text: 'How satisfied are you with inventory management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hea-task-q7-challenges', text: 'What are the main inventory challenges?', type: 'multiple', options: ["Stock Levels/Stockouts", "Expiration Date Tracking", "Tracking Usage per Patient", "Supply Chain Issues", "Cost Management", "No Major Challenges", "Other"] },
      
      // Task 8
      { id: 'hea-task-q8', text: 'Managing staff scheduling, time off requests, and credential tracking', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'hea-task-q8-method', text: 'How is staff scheduling/credentialing managed?', type: 'single', options: ["Manual Schedule/Paper Files", "Spreadsheets/Shared Calendar", "Staff Scheduling Software", "Integrated HR/Scheduling System", "N/A"] },
      { id: 'hea-task-q8-satisfaction', text: 'How satisfied are you with staff management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hea-task-q8-challenges', text: 'What are the main staff management challenges?', type: 'multiple', options: ["Schedule Creation", "Time-Off Management", "Credential Expiration Tracking", "Shift Coverage", "Payroll Integration", "No Major Challenges", "Other"] },
      
      // Task 9
      { id: 'hea-task-q9', text: 'Handling patient communications (appointment reminders, test results, follow-ups)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'hea-task-q9-method', text: 'How are patient communications managed?', type: 'single', options: ["Manual Phone Calls", "Manual Emails/Texts", "Automated Messaging System", "Patient Portal/App", "N/A"] },
      { id: 'hea-task-q9-satisfaction', text: 'How satisfied are you with patient communications?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hea-task-q9-challenges', text: 'What are the main communication challenges?', type: 'multiple', options: ["Staff Time Requirements", "Tracking Outreach/Responses", "Patient Engagement", "Communication Documentation", "HIPAA Compliance", "No Major Challenges", "Other"] },
      
      // Task 10
      { id: 'hea-task-q10', text: 'Preparing and submitting regulatory compliance reports', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'hea-task-q10-method', text: 'How is compliance reporting handled?', type: 'single', options: ["Manual Reporting Process", "Spreadsheet-based Tracking", "EHR Reporting Module", "Dedicated Compliance Software", "N/A"] },
      { id: 'hea-task-q10-satisfaction', text: 'How satisfied are you with compliance reporting?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hea-task-q10-challenges', text: 'What are the main compliance reporting challenges?', type: 'multiple', options: ["Data Collection/Organization", "Understanding Requirements", "Deadline Management", "Report Generation", "Auditing/Verification", "No Major Challenges", "Other"] },
      
      // Task 11
      { id: 'hea-task-q11', text: 'Coordinating referrals to specialists or external providers', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'hea-task-q11-method', text: 'How are referrals managed?', type: 'single', options: ["Manual Referral Process (Phone/Fax)", "EHR Referral Module", "Dedicated Referral Management System", "Health Information Exchange", "N/A"] },
      { id: 'hea-task-q11-satisfaction', text: 'How satisfied are you with referral management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hea-task-q11-challenges', text: 'What are the main referral challenges?', type: 'multiple', options: ["Finding Available Specialists", "Insurance Network Verification", "Tracking Referral Status", "Medical Record Transfer", "Patient Follow-up", "No Major Challenges", "Other"] },
      
      // Task 12
      { id: 'hea-task-q12', text: 'Managing quality metrics reporting and improvement initiatives', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'hea-task-q12-method', text: 'How are quality metrics managed?', type: 'single', options: ["Manual Data Collection", "Spreadsheet Analysis", "EHR Quality Module", "Dedicated Analytics Platform", "N/A"] },
      { id: 'hea-task-q12-satisfaction', text: 'How satisfied are you with quality management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hea-task-q12-challenges', text: 'What are the main quality management challenges?', type: 'multiple', options: ["Data Accuracy/Completeness", "Measure Interpretation", "Provider Buy-in", "Implementing Improvements", "Reporting Burden", "No Major Challenges", "Other"] },
    ],
  }
];

const healthcare: Industry = {
  id: 'healthcare',
  label: 'Healthcare & Medical Practices',
  icon: HeartPulse,
  sections: healthcareSections
};

export default healthcare; 