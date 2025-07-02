import { Mic } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const marketing_advertisingSections: Section[] = [
  {
    title: 'Industry Tasks: Marketing & Advertising',
    questions: [
      // Task 1
      { id: 'mar-task-q1', text: 'Creating and scheduling social media content', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'mar-task-q1-method', text: 'How is social media content managed?', type: 'single', options: ["Manual Per-Platform Posting", "Basic Scheduling Tool", "Social Media Management Platform", "Integrated Content/Analytics System", "N/A"] },
      { id: 'mar-task-q1-satisfaction', text: 'How satisfied are you with social media management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'mar-task-q1-challenges', text: 'What are the main social media challenges?', type: 'multiple', options: ["Content Creation", "Consistent Scheduling", "Multi-Platform Management", "Performance Tracking", "Audience Engagement", "No Major Challenges", "Other"] },
      
      // Task 2
      { id: 'mar-task-q2', text: 'Managing digital ad campaigns (Google, Meta, LinkedIn, etc.)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'mar-task-q2-method', text: 'How are digital ad campaigns managed?', type: 'single', options: ["Manual Per-Platform Management", "Basic Tracking Spreadsheets", "Dedicated Ad Management Tool", "Integrated Campaign Platform", "N/A"] },
      { id: 'mar-task-q2-satisfaction', text: 'How satisfied are you with ad campaign management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'mar-task-q2-challenges', text: 'What are the main ad campaign challenges?', type: 'multiple', options: ["Performance Optimization", "Cross-Platform Tracking", "Budget Management", "Creative Updates", "Reporting", "No Major Challenges", "Other"] },
      
      // Task 3
      { id: 'mar-task-q3', text: 'Creating and distributing email marketing campaigns', type: 'timeEstimate', timeOptions: { hoursPerTransaction: defaultTimeOptions.hoursPerTransaction, hoursPerWeek: defaultTimeOptions.hoursPerWeek }, tooltip: "Estimate time per email campaign OR total time per week." },
      { id: 'mar-task-q3-method', text: 'How are email campaigns managed?', type: 'single', options: ["Basic Email (BCC/Groups)", "Email Software Templates", "Email Marketing Platform", "Integrated Marketing Automation", "N/A"] },
      { id: 'mar-task-q3-freq', text: 'If estimating per email campaign, how many campaigns are created per WEEK?', type: 'number', isRequired: false, tooltip: "Required only if you estimated time per campaign above." },
      { id: 'mar-task-q3-satisfaction', text: 'How satisfied are you with email marketing?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'mar-task-q3-challenges', text: 'What are the main email marketing challenges?', type: 'multiple', options: ["Content Creation", "List Management", "Deliverability", "Performance Analysis", "Segmentation", "No Major Challenges", "Other"] },
      
      // Task 4
      { id: 'mar-task-q4', text: 'Creating marketing graphics, visuals, and creative assets', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'mar-task-q4-method', text: 'How are creative assets produced?', type: 'single', options: ["Ad-hoc Design Software", "Template-Based Creation", "Dedicated Design Team/System", "Integrated Creative Platform", "N/A"] },
      { id: 'mar-task-q4-satisfaction', text: 'How satisfied are you with creative production?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'mar-task-q4-challenges', text: 'What are the main creative challenges?', type: 'multiple', options: ["Design Resources", "Brand Consistency", "Version Management", "Production Time", "Feedback Process", "No Major Challenges", "Other"] },
      
      // Task 5
      { id: 'mar-task-q5', text: 'Analyzing marketing performance metrics and creating reports', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'mar-task-q5-method', text: 'How is marketing data analyzed/reported?', type: 'single', options: ["Manual Data Collection", "Spreadsheet-Based Reports", "Analytics Platform", "Integrated Marketing Dashboard", "N/A"] },
      { id: 'mar-task-q5-satisfaction', text: 'How satisfied are you with marketing analytics?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'mar-task-q5-challenges', text: 'What are the main analytics challenges?', type: 'multiple', options: ["Data Collection", "Multiple Data Sources", "Insight Generation", "Report Creation", "Attribution Modeling", "No Major Challenges", "Other"] },
      
      // Task 6
      { id: 'mar-task-q6', text: 'Managing content calendars and campaign schedules', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'mar-task-q6-method', text: 'How are content calendars managed?', type: 'single', options: ["Basic Calendar/Spreadsheet", "Project Management Tool", "Marketing Calendar Software", "Integrated Marketing Platform", "N/A"] },
      { id: 'mar-task-q6-satisfaction', text: 'How satisfied are you with content calendar management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'mar-task-q6-challenges', text: 'What are the main calendar management challenges?', type: 'multiple', options: ["Scheduling Consistency", "Coordination", "Version Control", "Approval Workflow", "Multi-channel Planning", "No Major Challenges", "Other"] },
      
      // Task 7
      { id: 'mar-task-q7', text: 'Competitor and market research', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'mar-task-q7-method', text: 'How is market research conducted?', type: 'single', options: ["Ad-hoc Research", "Basic Research Tools", "Research Management System", "Integrated Market Intelligence Platform", "N/A"] },
      { id: 'mar-task-q7-satisfaction', text: 'How satisfied are you with market research processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'mar-task-q7-challenges', text: 'What are the main research challenges?', type: 'multiple', options: ["Data Collection", "Analysis Time", "Actionable Insights", "Competitive Intelligence", "Trend Identification", "No Major Challenges", "Other"] },
      
      // Task 8
      { id: 'mar-task-q8', text: 'Managing customer data and CRM entries', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'mar-task-q8-method', text: 'How is customer data managed?', type: 'single', options: ["Spreadsheet/Basic Database", "Basic CRM System", "Marketing Automation Platform", "Integrated CRM/Marketing System", "N/A"] },
      { id: 'mar-task-q8-satisfaction', text: 'How satisfied are you with customer data management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'mar-task-q8-challenges', text: 'What are the main data management challenges?', type: 'multiple', options: ["Data Entry", "Data Quality", "System Integration", "Segmentation", "Privacy Compliance", "No Major Challenges", "Other"] },
      
      // Task 9
      { id: 'mar-task-q9', text: 'Creating and updating website content', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'mar-task-q9-method', text: 'How is website content managed?', type: 'single', options: ["Basic Website Editor", "CMS Platform", "Developer-Dependent Updates", "Integrated Content Hub", "N/A"] },
      { id: 'mar-task-q9-satisfaction', text: 'How satisfied are you with website content management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'mar-task-q9-challenges', text: 'What are the main website content challenges?', type: 'multiple', options: ["Update Frequency", "Content Creation", "Design Limitations", "Technical Constraints", "Workflow/Approvals", "No Major Challenges", "Other"] },
      
      // Task 10
      { id: 'mar-task-q10', text: 'SEO management and optimization', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'mar-task-q10-method', text: 'How is SEO managed?', type: 'single', options: ["Ad-hoc Optimization", "Basic SEO Tools", "Dedicated SEO Platform", "Integrated SEO/Content System", "N/A"] },
      { id: 'mar-task-q10-satisfaction', text: 'How satisfied are you with SEO management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'mar-task-q10-challenges', text: 'What are the main SEO challenges?', type: 'multiple', options: ["Keyword Research", "Content Optimization", "Technical SEO", "Link Building", "Performance Tracking", "No Major Challenges", "Other"] },
    ]
  }
];

const marketing_advertising: Industry = {
  id: 'marketing_advertising',
  label: 'Marketing & Advertising',
  icon: Mic,
  sections: marketing_advertisingSections
};

export default marketing_advertising;