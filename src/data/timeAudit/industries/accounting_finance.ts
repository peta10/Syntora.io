import { Banknote } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const accountingFinanceSections: Section[] = [
  {
    title: 'Industry Tasks: Accounting & Finance',
    questions: [
      // Task 1
      { id: 'fin-task-q1', text: 'Manually inputting financial transactions (invoices, bills, expenses)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'fin-task-q1-method', text: 'How are transactions primarily entered?', type: 'single', options: ["Manual Data Entry (Paper/Scan)", "Manual Entry from Bank Feeds", "Spreadsheet Import/Upload", "Automated Bank Feed Rules", "OCR Software", "N/A"] },
      { id: 'fin-task-q1-satisfaction', text: 'How satisfied are you with the transaction entry process?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'fin-task-q1-challenges', text: 'What are the main transaction entry challenges?', type: 'multiple', options: ["Time Consuming", "Data Entry Errors", "Mis-categorization", "Matching Transactions", "Handling Receipts", "No Major Challenges", "Other"] },
      
      // Task 2
      { id: 'fin-task-q2', text: 'Generating client invoices and following up on accounts receivable', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'fin-task-q2-method', text: 'How are invoices generated and receivables managed?', type: 'single', options: ["Manual Invoices (Word/Excel)", "Accounting Software (Manual Follow-up)", "Accounting Software (Automated Reminders)", "Integrated CRM/Billing System", "N/A"] },
      { id: 'fin-task-q2-satisfaction', text: 'How satisfied are you with invoicing/AR?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'fin-task-q2-challenges', text: 'What are the main invoicing/AR challenges?', type: 'multiple', options: ["Slow Invoice Creation", "Manual Follow-Up", "Late Payments", "Dispute Resolution", "Poor Cash Flow Visibility", "No Major Challenges", "Other"] },
      
      // Task 3
      { id: 'fin-task-q3', text: 'Processing accounts payable and scheduling vendor payments', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'fin-task-q3-method', text: 'How are accounts payable processed?', type: 'single', options: ["Manual Check Writing/Entry", "Accounting Software (Manual Approval/Entry)", "AP Automation Software", "Integrated System", "N/A"] },
      { id: 'fin-task-q3-satisfaction', text: 'How satisfied are you with the AP process?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'fin-task-q3-challenges', text: 'What are the main AP challenges?', type: 'multiple', options: ["Manual Data Entry", "Approval Delays", "Matching Invoices", "Duplicate Payments", "Fraud Risk", "No Major Challenges", "Other"] },
      
      // Task 4
      { id: 'fin-task-q4', text: 'Reconciling bank statements and credit card accounts', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'fin-task-q4-method', text: 'How is reconciliation performed?', type: 'single', options: ["Manual Comparison (Paper/Spreadsheet)", "Accounting Software (Manual Matching)", "Accounting Software (Automated Suggestions)", "N/A"] },
      { id: 'fin-task-q4-satisfaction', text: 'How satisfied are you with reconciliation?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'fin-task-q4-challenges', text: 'What are the main reconciliation challenges?', type: 'multiple', options: ["Time Consuming", "Finding Discrepancies", "Unmatched Transactions", "Bank Feed Issues", "Tedious Process", "No Major Challenges", "Other"] },
      
      // Task 5
      { id: 'fin-task-q5', text: 'Processing payroll, tax filings, and benefits calculations', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'fin-task-q5-method', text: 'How is payroll processing handled?', type: 'single', options: ["Manual Calculations/Checks", "Payroll Software (In-house)", "Outsourced Payroll Service", "Integrated HR/Payroll System", "N/A"] },
      { id: 'fin-task-q5-satisfaction', text: 'How satisfied are you with payroll processing?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'fin-task-q5-challenges', text: 'What are the main payroll challenges?', type: 'multiple', options: ["Calculation Errors", "Tax Compliance", "Deadline Pressure", "Employee Changes", "Benefits Integration", "No Major Challenges", "Other"] },
      
      // Task 6
      { id: 'fin-task-q6', text: 'Preparing financial reports, statements, and dashboards', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'fin-task-q6-method', text: 'How are financial reports generated?', type: 'single', options: ["Manual Compilation (Spreadsheets)", "Accounting Software (Standard Reports)", "Financial Reporting Software", "Integrated BI/Dashboard Tools", "N/A"] },
      { id: 'fin-task-q6-satisfaction', text: 'How satisfied are you with financial reporting?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'fin-task-q6-challenges', text: 'What are the main reporting challenges?', type: 'multiple', options: ["Time to Generate", "Data Accuracy", "Customization Limitations", "Multiple Sources", "Interpretation/Analysis", "No Major Challenges", "Other"] },
      
      // Task 7
      { id: 'fin-task-q7', text: 'Managing month-end or year-end closing procedures', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'fin-task-q7-method', text: 'How are closing procedures managed?', type: 'single', options: ["Manual Checklist", "Spreadsheet Task List", "Accounting Software Tools", "Automated Close Management System", "N/A"] },
      { id: 'fin-task-q7-satisfaction', text: 'How satisfied are you with closing procedures?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'fin-task-q7-challenges', text: 'What are the main closing procedure challenges?', type: 'multiple', options: ["Timing/Deadlines", "Task Coordination", "Accrual Calculations", "Error Correction", "Documentation", "No Major Challenges", "Other"] },
      
      // Task 8
      { id: 'fin-task-q8', text: 'Maintaining fixed asset records and calculating depreciation', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'fin-task-q8-method', text: 'How are fixed assets tracked?', type: 'single', options: ["Manual Ledger/Spreadsheet", "Accounting Software Module", "Specialized Asset Management Software", "Integrated ERP Asset Module", "N/A"] },
      { id: 'fin-task-q8-satisfaction', text: 'How satisfied are you with fixed asset management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'fin-task-q8-challenges', text: 'What are the main fixed asset management challenges?', type: 'multiple', options: ["Depreciation Calculations", "Physical Verification", "Disposals/Transfers", "Policy Compliance", "Tax Reporting", "No Major Challenges", "Other"] },
      
      // Task 9
      { id: 'fin-task-q9', text: 'Tax preparation, filing, and compliance documentation', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'fin-task-q9-method', text: 'How is tax preparation managed?', type: 'single', options: ["Manual Preparation", "Tax Software", "Outsourced Tax Service", "Integrated Accounting/Tax Platform", "N/A"] },
      { id: 'fin-task-q9-satisfaction', text: 'How satisfied are you with tax preparation?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'fin-task-q9-challenges', text: 'What are the main tax preparation challenges?', type: 'multiple', options: ["Data Collection", "Regulatory Changes", "Deadline Pressure", "Documentation Management", "Maximizing Deductions", "No Major Challenges", "Other"] },
      
      // Task 10
      { id: 'fin-task-q10', text: 'Expense report processing and reimbursements', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'fin-task-q10-method', text: 'How are expense reports processed?', type: 'single', options: ["Paper Reports/Manual Entry", "Spreadsheet Templates", "Expense Management Software", "Integrated T&E System", "N/A"] },
      { id: 'fin-task-q10-satisfaction', text: 'How satisfied are you with expense processing?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'fin-task-q10-challenges', text: 'What are the main expense processing challenges?', type: 'multiple', options: ["Receipt Management", "Policy Compliance", "Approval Workflow", "Reimbursement Timing", "Expense Categorization", "No Major Challenges", "Other"] },
      
      // Task 11
      { id: 'fin-task-q11', text: 'Budget preparation and variance analysis', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'fin-task-q11-method', text: 'How is budgeting/variance analysis handled?', type: 'single', options: ["Spreadsheet Models", "Accounting Software Budget Tool", "Dedicated Budgeting Software", "Integrated Financial Planning Platform", "N/A"] },
      { id: 'fin-task-q11-satisfaction', text: 'How satisfied are you with budgeting processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'fin-task-q11-challenges', text: 'What are the main budgeting challenges?', type: 'multiple', options: ["Data Collection", "Version Control", "Stakeholder Input", "Variance Analysis", "Forecast Accuracy", "No Major Challenges", "Other"] },
    ],
  }
];

const accountingFinance: Industry = {
  id: 'accounting_finance',
  label: 'Accounting & Finance',
  icon: Banknote,
  sections: accountingFinanceSections
};

export default accountingFinance; 