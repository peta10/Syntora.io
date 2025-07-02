import { Server } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const it_itsmSections: Section[] = [
  {
    title: 'Industry Tasks: IT & ITSM',
    questions: [
      // Task 1
      { id: 'it-task-q1', text: 'Handling password resets and user account unlocks', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'it-task-q1-method', text: 'How are password resets handled?', type: 'single', options: ["Manual via IT Support Ticket/Call", "Self-Service Portal (Basic)", "Automated Self-Service Tool", "Integrated Identity Management System", "N/A"] },
      { id: 'it-task-q1-satisfaction', text: 'How satisfied are you with password reset processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'it-task-q1-challenges', text: 'What are the main password reset challenges?', type: 'multiple', options: ["Time Consuming", "Security Verification", "Process Documentation", "After Hours Support", "User Training", "No Major Challenges", "Other"] },
      
      // Task 2
      { id: 'it-task-q2', text: 'Installing, updating, and patching software and operating systems', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'it-task-q2-method', text: 'How are software updates/patches managed?', type: 'single', options: ["Manual One-by-One Updates", "Basic Deployment Scripts", "Patch Management Software", "Integrated Configuration Management", "N/A"] },
      { id: 'it-task-q2-satisfaction', text: 'How satisfied are you with update/patching processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'it-task-q2-challenges', text: 'What are the main update/patching challenges?', type: 'multiple', options: ["Time Consuming", "Scheduling Downtime", "Testing Compatibility", "Rollback Capability", "Tracking Compliance", "No Major Challenges", "Other"] },
      
      // Task 3
      { id: 'it-task-q3', text: 'Managing helpdesk tickets and service requests', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'it-task-q3-method', text: 'How are IT tickets/requests managed?', type: 'single', options: ["Email/Phone Only", "Shared Mailbox/Spreadsheet", "Basic Ticketing System", "ITSM Platform with Automation", "N/A"] },
      { id: 'it-task-q3-satisfaction', text: 'How satisfied are you with ticket management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'it-task-q3-challenges', text: 'What are the main ticket management challenges?', type: 'multiple', options: ["Request Categorization", "Response Time", "Tracking Status", "Assignment/Routing", "Documentation Quality", "No Major Challenges", "Other"] },
      
      // Task 4
      { id: 'it-task-q4', text: 'Provisioning/onboarding new user accounts, devices, and access', type: 'timeEstimate', timeOptions: { hoursPerTransaction: defaultTimeOptions.hoursPerTransaction, hoursPerWeek: defaultTimeOptions.hoursPerWeek }, tooltip: "Estimate time per onboarding OR total time per week." },
      { id: 'it-task-q4-method', text: 'How is user provisioning handled?', type: 'single', options: ["Manual Step-by-Step Process", "Checklist-Based Approach", "Partial Automation Scripts", "Integrated Identity/Access Management", "N/A"] },
      { id: 'it-task-q4-freq', text: 'If estimating per onboarding, how many users are onboarded per WEEK?', type: 'number', isRequired: false, tooltip: "Required only if you estimated time per onboarding above." },
      { id: 'it-task-q4-satisfaction', text: 'How satisfied are you with user provisioning?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'it-task-q4-challenges', text: 'What are the main provisioning challenges?', type: 'multiple', options: ["Process Consistency", "Multiple Systems", "Access Level Determination", "Hardware Logistics", "Documentation", "No Major Challenges", "Other"] },
      
      // Task 5
      { id: 'it-task-q5', text: 'Backup administration and monitoring', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'it-task-q5-method', text: 'How are backups managed?', type: 'single', options: ["Manual Backup Process", "Basic Scheduled Backups", "Backup Software (Limited Monitoring)", "Comprehensive Backup Solution with Monitoring", "N/A"] },
      { id: 'it-task-q5-satisfaction', text: 'How satisfied are you with backup management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'it-task-q5-challenges', text: 'What are the main backup challenges?', type: 'multiple', options: ["Storage Capacity", "Backup Windows", "Verification Process", "Recovery Testing", "Offsite Replication", "No Major Challenges", "Other"] },
      
      // Task 6
      { id: 'it-task-q6', text: 'Network monitoring and troubleshooting', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'it-task-q6-method', text: 'How is network monitoring performed?', type: 'single', options: ["Ad-hoc/Reactive Monitoring", "Basic Network Tools", "Dedicated Monitoring Platform", "Integrated NOC with Alerting", "N/A"] },
      { id: 'it-task-q6-satisfaction', text: 'How satisfied are you with network monitoring?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'it-task-q6-challenges', text: 'What are the main network monitoring challenges?', type: 'multiple', options: ["Alert Fatigue", "Root Cause Analysis", "Visibility Gaps", "Documentation", "Response Procedures", "No Major Challenges", "Other"] },
      
      // Task 7
      { id: 'it-task-q7', text: 'Managing cloud resources and services', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'it-task-q7-method', text: 'How are cloud resources managed?', type: 'single', options: ["Manual Console Management", "Basic Scripts/CLI Tools", "Cloud Management Platform", "Infrastructure as Code Approach", "N/A"] },
      { id: 'it-task-q7-satisfaction', text: 'How satisfied are you with cloud management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'it-task-q7-challenges', text: 'What are the main cloud management challenges?', type: 'multiple', options: ["Cost Control", "Security Configuration", "Resource Sprawl", "Multi-cloud Complexity", "Governance/Compliance", "No Major Challenges", "Other"] },
      
      // Task 8
      { id: 'it-task-q8', text: 'Security administration (firewall, antivirus, access controls)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'it-task-q8-method', text: 'How is security administration handled?', type: 'single', options: ["Manual Security Management", "Basic Security Tools", "Security Platform (Limited Integration)", "Integrated Security Operations", "N/A"] },
      { id: 'it-task-q8-satisfaction', text: 'How satisfied are you with security administration?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'it-task-q8-challenges', text: 'What are the main security administration challenges?', type: 'multiple', options: ["Keeping Current", "Alert Volume", "User Access Reviews", "Compliance Requirements", "Resource Constraints", "No Major Challenges", "Other"] },
      
      // Task 9
      { id: 'it-task-q9', text: 'Asset management and inventory tracking', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'it-task-q9-method', text: 'How is IT asset management performed?', type: 'single', options: ["Spreadsheet/Manual Records", "Basic Inventory System", "IT Asset Management Software", "Integrated CMDB Solution", "N/A"] },
      { id: 'it-task-q9-satisfaction', text: 'How satisfied are you with asset management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'it-task-q9-challenges', text: 'What are the main asset management challenges?', type: 'multiple', options: ["Keeping Records Current", "Hardware Lifecycle", "Software License Tracking", "Physical Verification", "Procurement Integration", "No Major Challenges", "Other"] },
      
      // Task 10
      { id: 'it-task-q10', text: 'Documentation of systems, procedures, and configurations', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'it-task-q10-method', text: 'How is IT documentation managed?', type: 'single', options: ["Ad-hoc Documents/Folders", "Shared Files/Wiki", "Knowledge Management System", "Integrated Documentation Platform", "N/A"] },
      { id: 'it-task-q10-satisfaction', text: 'How satisfied are you with documentation practices?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'it-task-q10-challenges', text: 'What are the main documentation challenges?', type: 'multiple', options: ["Keeping Current", "Consistency", "Accessibility", "Detail Level", "Time Constraints", "No Major Challenges", "Other"] },
    ]
  }
];

const it_itsm: Industry = {
  id: 'it_itsm',
  label: 'IT & IT Service Management',
  icon: Server,
  sections: it_itsmSections
};

export default it_itsm;