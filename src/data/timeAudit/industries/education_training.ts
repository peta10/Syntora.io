import { GraduationCap } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const education_trainingSections: Section[] = [
  {
    title: 'Industry Tasks: Education & Training',
    questions: [
      // Task 1
      { id: 'edu-task-q1', text: 'Processing student/participant applications and managing enrollment records', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'edu-task-q1-method', text: 'How are applications/enrollment records managed?', type: 'single', options: ["Paper Forms/Manual Entry", "Spreadsheets/Basic Database", "Student Information System (SIS)", "Online Application Portal/Integrated System", "N/A"] },
      { id: 'edu-task-q1-satisfaction', text: 'How satisfied are you with enrollment processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'edu-task-q1-challenges', text: 'What are the main enrollment challenges?', type: 'multiple', options: ["Document Collection", "Data Entry", "Verification Process", "Communication with Applicants", "Record Storage/Retrieval", "No Major Challenges", "Other"] },
      
      // Task 2
      { id: 'edu-task-q2', text: 'Creating and maintaining student/participant schedules and class rosters', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'edu-task-q2-method', text: 'How are schedules and rosters managed?', type: 'single', options: ["Manual Scheduling/Paper", "Spreadsheet-Based System", "Scheduling Software", "Integrated SIS/Scheduling Platform", "N/A"] },
      { id: 'edu-task-q2-satisfaction', text: 'How satisfied are you with scheduling processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'edu-task-q2-challenges', text: 'What are the main scheduling challenges?', type: 'multiple', options: ["Schedule Conflicts", "Room Allocation", "Class Size Management", "Schedule Changes", "Communication", "No Major Challenges", "Other"] },
      
      // Task 3
      { id: 'edu-task-q3', text: 'Managing grades, assessments, and academic records', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'edu-task-q3-method', text: 'How are grades and assessments managed?', type: 'single', options: ["Paper Gradebooks/Manual Records", "Spreadsheet Tracking", "Gradebook Software", "Integrated LMS/SIS Platform", "N/A"] },
      { id: 'edu-task-q3-satisfaction', text: 'How satisfied are you with grading/assessment processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'edu-task-q3-challenges', text: 'What are the main grading/assessment challenges?', type: 'multiple', options: ["Data Entry", "Calculation Accuracy", "Reporting", "Record Keeping", "Student/Parent Communication", "No Major Challenges", "Other"] },
      
      // Task 4
      { id: 'edu-task-q4', text: 'Processing tuition/fee payments and financial aid', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'edu-task-q4-method', text: 'How are payments and financial aid managed?', type: 'single', options: ["Manual Payment Processing", "Basic Accounting Software", "Student Billing System", "Integrated Finance/SIS Platform", "N/A"] },
      { id: 'edu-task-q4-satisfaction', text: 'How satisfied are you with payment/aid processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'edu-task-q4-challenges', text: 'What are the main payment/aid challenges?', type: 'multiple', options: ["Payment Tracking", "Aid Application Processing", "Student Communication", "Reporting", "Compliance Requirements", "No Major Challenges", "Other"] },
      
      // Task 5
      { id: 'edu-task-q5', text: 'Managing student/participant communications and notifications', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'edu-task-q5-method', text: 'How are student communications managed?', type: 'single', options: ["Ad-hoc Email/Phone", "Manual Mailing Lists", "Communication Software", "Integrated SIS/Communication Platform", "N/A"] },
      { id: 'edu-task-q5-satisfaction', text: 'How satisfied are you with communication processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'edu-task-q5-challenges', text: 'What are the main communication challenges?', type: 'multiple', options: ["Maintaining Contact Lists", "Message Consistency", "Tracking Communication", "Targeting Specific Groups", "Response Management", "No Major Challenges", "Other"] },
      
      // Task 6
      { id: 'edu-task-q6', text: 'Creating and distributing teaching/training materials and resources', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'edu-task-q6-method', text: 'How are teaching materials managed?', type: 'single', options: ["Manual Creation/Distribution", "Digital File Sharing", "Learning Management System", "Integrated Content Platform", "N/A"] },
      { id: 'edu-task-q6-satisfaction', text: 'How satisfied are you with teaching material processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'edu-task-q6-challenges', text: 'What are the main teaching material challenges?', type: 'multiple', options: ["Content Creation", "Distribution", "Version Control", "Accessibility", "User Adoption", "No Major Challenges", "Other"] },
      
      // Task 7
      { id: 'edu-task-q7', text: 'Tracking attendance and participation', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'edu-task-q7-method', text: 'How is attendance tracking handled?', type: 'single', options: ["Paper Attendance Sheets", "Spreadsheet Tracking", "Attendance Software", "Integrated SIS/LMS System", "N/A"] },
      { id: 'edu-task-q7-satisfaction', text: 'How satisfied are you with attendance processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'edu-task-q7-challenges', text: 'What are the main attendance challenges?', type: 'multiple', options: ["Data Collection", "Accuracy", "Reporting", "Follow-up Process", "Integration with Other Systems", "No Major Challenges", "Other"] },
      
      // Task 8
      { id: 'edu-task-q8', text: 'Administering and proctoring tests and assessments', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'edu-task-q8-method', text: 'How are tests and assessments administered?', type: 'single', options: ["Paper Tests/Manual Grading", "Digital Tests with Manual Setup", "Assessment Software", "Integrated LMS/Assessment System", "N/A"] },
      { id: 'edu-task-q8-satisfaction', text: 'How satisfied are you with test administration?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'edu-task-q8-challenges', text: 'What are the main testing challenges?', type: 'multiple', options: ["Test Creation", "Proctoring/Security", "Grading Process", "Results Analysis", "Feedback Delivery", "No Major Challenges", "Other"] },
      
      // Task 9
      { id: 'edu-task-q9', text: 'Managing instructor/trainer scheduling and assignments', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'edu-task-q9-method', text: 'How is instructor scheduling managed?', type: 'single', options: ["Manual Assignment Process", "Spreadsheet System", "Scheduling Software", "Integrated Faculty Management System", "N/A"] },
      { id: 'edu-task-q9-satisfaction', text: 'How satisfied are you with instructor scheduling?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'edu-task-q9-challenges', text: 'What are the main instructor scheduling challenges?', type: 'multiple', options: ["Availability Management", "Qualification Matching", "Schedule Conflicts", "Communication", "Workload Balance", "No Major Challenges", "Other"] },
      
      // Task 10
      { id: 'edu-task-q10', text: 'Preparing and submitting compliance reports and accreditation documentation', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'edu-task-q10-method', text: 'How is compliance reporting handled?', type: 'single', options: ["Manual Report Creation", "Spreadsheet/Document Templates", "Compliance Software", "Integrated Data/Reporting System", "N/A"] },
      { id: 'edu-task-q10-satisfaction', text: 'How satisfied are you with compliance processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'edu-task-q10-challenges', text: 'What are the main compliance challenges?', type: 'multiple', options: ["Data Collection", "Report Generation", "Deadline Management", "Documentation", "Regulatory Changes", "No Major Challenges", "Other"] },
    ]
  }
];

const education_training: Industry = {
  id: 'education_training',
  label: 'Education & Training',
  icon: GraduationCap,
  sections: education_trainingSections
};

export default education_training;