import { Users } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const human_resourcesSections: Section[] = [
  {
    title: 'Industry Tasks: Human Resources',
    questions: [
      // Task 1
      { id: 'hr-task-q1', text: 'Processing new employee onboarding and paperwork', type: 'timeEstimate', timeOptions: { hoursPerTransaction: defaultTimeOptions.hoursPerTransaction, hoursPerWeek: defaultTimeOptions.hoursPerWeek }, tooltip: "Estimate time per new hire OR total time per week." },
      { id: 'hr-task-q1-method', text: 'How is employee onboarding managed?', type: 'single', options: ["Manual Paper Forms", "Digital Forms/Spreadsheets", "HR Software Module", "Integrated Onboarding Platform", "N/A"] },
      { id: 'hr-task-q1-freq', text: 'If estimating per new hire, how many employees are onboarded per MONTH?', type: 'number', isRequired: false, tooltip: "Required only if you estimated time per new hire above." },
      { id: 'hr-task-q1-satisfaction', text: 'How satisfied are you with onboarding processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hr-task-q1-challenges', text: 'What are the main onboarding challenges?', type: 'multiple', options: ["Paperwork Volume", "Process Consistency", "Data Entry", "Compliance Tracking", "Employee Experience", "No Major Challenges", "Other"] },
      
      // Task 2
      { id: 'hr-task-q2', text: 'Managing employee time tracking, attendance, and time-off requests', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'hr-task-q2-method', text: 'How is time/attendance managed?', type: 'single', options: ["Paper Timesheets/Forms", "Spreadsheet Tracking", "Time & Attendance Software", "Integrated HRIS/Payroll System", "N/A"] },
      { id: 'hr-task-q2-satisfaction', text: 'How satisfied are you with time management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hr-task-q2-challenges', text: 'What are the main time tracking challenges?', type: 'multiple', options: ["Manual Entry Errors", "Approval Workflow", "Policy Compliance", "PTO Balance Tracking", "Reporting", "No Major Challenges", "Other"] },
      
      // Task 3
      { id: 'hr-task-q3', text: 'Benefits administration and enrollment', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'hr-task-q3-method', text: 'How is benefits administration handled?', type: 'single', options: ["Manual Forms/Spreadsheets", "Basic Benefits Software", "Benefits Administration Platform", "Integrated HRIS/Benefits System", "N/A"] },
      { id: 'hr-task-q3-satisfaction', text: 'How satisfied are you with benefits administration?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hr-task-q3-challenges', text: 'What are the main benefits challenges?', type: 'multiple', options: ["Enrollment Process", "Employee Education", "Carrier Communication", "Compliance", "Cost Management", "No Major Challenges", "Other"] },
      
      // Task 4
      { id: 'hr-task-q4', text: 'Performance review administration and tracking', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'hr-task-q4-method', text: 'How are performance reviews managed?', type: 'single', options: ["Paper Forms/Manual Process", "Document Templates/Email", "Performance Management Software", "Integrated Talent Management System", "N/A"] },
      { id: 'hr-task-q4-satisfaction', text: 'How satisfied are you with review processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hr-task-q4-challenges', text: 'What are the main review challenges?', type: 'multiple', options: ["Timeline Compliance", "Form Collection", "Manager Training", "Feedback Quality", "Goal Tracking", "No Major Challenges", "Other"] },
      
      // Task 5
      { id: 'hr-task-q5', text: 'Recruiting, job posting, and applicant tracking', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'hr-task-q5-method', text: 'How is recruiting/applicant tracking handled?', type: 'single', options: ["Manual Job Posting/Tracking", "Email/Spreadsheet System", "Applicant Tracking System", "Integrated Talent Acquisition Platform", "N/A"] },
      { id: 'hr-task-q5-satisfaction', text: 'How satisfied are you with recruiting processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hr-task-q5-challenges', text: 'What are the main recruiting challenges?', type: 'multiple', options: ["Candidate Sourcing", "Application Screening", "Interview Scheduling", "Communication Tracking", "Hiring Manager Coordination", "No Major Challenges", "Other"] },
      
      // Task 6
      { id: 'hr-task-q6', text: 'Employee data management and HRIS updates', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'hr-task-q6-method', text: 'How is employee data managed?', type: 'single', options: ["Paper Files/Spreadsheets", "Basic HR Database", "HRIS System", "Integrated HR/Payroll Platform", "N/A"] },
      { id: 'hr-task-q6-satisfaction', text: 'How satisfied are you with employee data management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hr-task-q6-challenges', text: 'What are the main data management challenges?', type: 'multiple', options: ["Data Entry/Updates", "System Integration", "Data Accuracy", "Reporting Capabilities", "Security/Privacy", "No Major Challenges", "Other"] },
      
      // Task 7
      { id: 'hr-task-q7', text: 'Employee offboarding and exit processes', type: 'timeEstimate', timeOptions: { hoursPerTransaction: defaultTimeOptions.hoursPerTransaction, hoursPerWeek: defaultTimeOptions.hoursPerWeek }, tooltip: "Estimate time per offboarding OR total time per week." },
      { id: 'hr-task-q7-method', text: 'How is employee offboarding managed?', type: 'single', options: ["Manual Checklist/Process", "Basic Digital Forms", "Offboarding Software Module", "Integrated Lifecycle Management", "N/A"] },
      { id: 'hr-task-q7-freq', text: 'If estimating per offboarding, how many employees are offboarded per MONTH?', type: 'number', isRequired: false, tooltip: "Required only if you estimated time per offboarding above." },
      { id: 'hr-task-q7-satisfaction', text: 'How satisfied are you with offboarding processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hr-task-q7-challenges', text: 'What are the main offboarding challenges?', type: 'multiple', options: ["Process Consistency", "Asset Recovery", "System Access Removal", "Knowledge Transfer", "Exit Interview Insights", "No Major Challenges", "Other"] },
      
      // Task 8
      { id: 'hr-task-q8', text: 'Compliance reporting and documentation (EEO, OSHA, etc.)', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'hr-task-q8-method', text: 'How is compliance reporting handled?', type: 'single', options: ["Manual Reporting Process", "Spreadsheet-based System", "HR Compliance Software", "Integrated Compliance Platform", "N/A"] },
      { id: 'hr-task-q8-satisfaction', text: 'How satisfied are you with compliance processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hr-task-q8-challenges', text: 'What are the main compliance challenges?', type: 'multiple', options: ["Keeping Current with Laws", "Data Collection", "Report Generation", "Documentation Storage", "Audit Preparation", "No Major Challenges", "Other"] },
      
      // Task 9
      { id: 'hr-task-q9', text: 'Training administration and tracking', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'hr-task-q9-method', text: 'How is training managed?', type: 'single', options: ["Manual Tracking/Scheduling", "Spreadsheet System", "Learning Management System", "Integrated Talent Development Platform", "N/A"] },
      { id: 'hr-task-q9-satisfaction', text: 'How satisfied are you with training administration?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hr-task-q9-challenges', text: 'What are the main training challenges?', type: 'multiple', options: ["Content Management", "Attendance Tracking", "Completion Verification", "Reporting", "Scheduling", "No Major Challenges", "Other"] },
      
      // Task 10
      { id: 'hr-task-q10', text: 'Employee relations and issue management', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'hr-task-q10-method', text: 'How are employee relations issues managed?', type: 'single', options: ["Ad-hoc Process/Notes", "Basic Case Documentation", "Case Management System", "Integrated Employee Relations Platform", "N/A"] },
      { id: 'hr-task-q10-satisfaction', text: 'How satisfied are you with issue management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'hr-task-q10-challenges', text: 'What are the main employee relations challenges?', type: 'multiple', options: ["Documentation", "Issue Resolution", "Consistency", "Manager Support", "Trend Analysis", "No Major Challenges", "Other"] },
    ]
  }
];

const human_resources: Industry = {
  id: 'human_resources',
  label: 'Human Resources',
  icon: Users,
  sections: human_resourcesSections
};

export default human_resources;