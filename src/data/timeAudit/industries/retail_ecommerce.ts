import { Store } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const retail_ecommerceSections: Section[] = [
  {
    title: 'Industry Tasks: Retail & Ecommerce',
    questions: [
      // Task 1
      { id: 'ret-task-q1', text: 'Manually updating stock levels/inventory across physical stores, online platforms, or marketplaces', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'ret-task-q1-method', text: 'How is inventory primarily updated?', type: 'single', options: ["Manual Counts/Updates per Channel", "Spreadsheet Imports", "POS Sync (Basic)", "Centralized Inventory Management System", "Integrated POS/Ecommerce/IMS", "N/A"] },
      { id: 'ret-task-q1-satisfaction', text: 'How satisfied are you with inventory management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'ret-task-q1-challenges', text: 'What are the main inventory challenges?', type: 'multiple', options: ["Time Consuming Updates", "Accuracy Issues", "Channel Synchronization", "Real-time Visibility", "Out-of-Stock Situations", "No Major Challenges", "Other"] },

      // Task 2
      { id: 'ret-task-q2', text: 'Processing customer orders, fulfillment, and shipping', type: 'timeEstimate', timeOptions: { hoursPerTransaction: defaultTimeOptions.hoursPerTransaction, hoursPerDay: defaultTimeOptions.hoursPerDay }, tooltip: "Estimate time per order OR total time per day." },
      { id: 'ret-task-q2-method', text: 'How are orders primarily processed?', type: 'single', options: ["Manual Order Entry/Processing", "Basic Order Management", "Dedicated Order Management System", "Integrated Order/Inventory/Shipping", "Automated Fulfillment System", "N/A"] },
      { id: 'ret-task-q2-freq', text: 'If estimating per order, how many orders are processed per DAY?', type: 'number', isRequired: false, tooltip: "Required only if you estimated time per order above." },
      { id: 'ret-task-q2-satisfaction', text: 'How satisfied are you with order processing?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'ret-task-q2-challenges', text: 'What are the main order processing challenges?', type: 'multiple', options: ["Manual Data Entry", "Order Tracking", "Shipping Integration", "Returns Processing", "Multi-channel Management", "No Major Challenges", "Other"] },

      // Task 3
      { id: 'ret-task-q3', text: 'Managing product catalog details, images, and descriptions across sales channels', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'ret-task-q3-method', text: 'How is product information managed?', type: 'single', options: ["Manual Updates per Channel", "Spreadsheet/File Management", "Basic Product Database", "Product Information Management (PIM)", "Integrated PIM with Channels", "N/A"] },
      { id: 'ret-task-q3-satisfaction', text: 'How satisfied are you with product information management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'ret-task-q3-challenges', text: 'What are the main product information challenges?', type: 'multiple', options: ["Consistency Across Channels", "Image Management", "Content Creation", "Attribute Management", "Channel-Specific Requirements", "No Major Challenges", "Other"] },

      // Task 4
      { id: 'ret-task-q4', text: 'Processing customer returns, exchanges, and refunds', type: 'timeEstimate', timeOptions: { hoursPerTransaction: defaultTimeOptions.hoursPerTransaction, hoursPerWeek: defaultTimeOptions.hoursPerWeek }, tooltip: "Estimate time per return OR total time per week." },
      { id: 'ret-task-q4-method', text: 'How are returns/refunds processed?', type: 'single', options: ["Manual Returns Processing", "Basic Returns Management", "Dedicated Returns Software", "Integrated Returns/Inventory/Finance", "Automated Returns System", "N/A"] },
      { id: 'ret-task-q4-freq', text: 'If estimating per return, how many returns are processed per WEEK?', type: 'number', isRequired: false, tooltip: "Required only if you estimated time per return above." },
      { id: 'ret-task-q4-satisfaction', text: 'How satisfied are you with returns processing?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'ret-task-q4-challenges', text: 'What are the main returns processing challenges?', type: 'multiple', options: ["Manual Documentation", "Inventory Updates", "Customer Communication", "Reconciliation with Sales", "Return Analysis", "No Major Challenges", "Other"] },

      // Task 5
      { id: 'ret-task-q5', text: 'Managing customer communications (inquiries, order status, problems)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'ret-task-q5-method', text: 'How are customer communications managed?', type: 'single', options: ["Manual Responses (Email/Phone)", "Shared Email/Ticketing", "CRM/Customer Service Platform", "Integrated Communications Hub", "Automated Response System", "N/A"] },
      { id: 'ret-task-q5-satisfaction', text: 'How satisfied are you with customer communications?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'ret-task-q5-challenges', text: 'What are the main customer communication challenges?', type: 'multiple', options: ["Response Time", "Query Organization", "Consistent Messaging", "Tracking Conversations", "Multi-channel Management", "No Major Challenges", "Other"] },

      // Task 6
      { id: 'ret-task-q6', text: 'Creating or updating product pricing across multiple channels or locations', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'ret-task-q6-method', text: 'How is pricing managed?', type: 'single', options: ["Manual Updates per Channel", "Spreadsheet/Batch Updates", "Pricing Management Software", "Dynamic Pricing System", "Integrated Pricing Platform", "N/A"] },
      { id: 'ret-task-q6-satisfaction', text: 'How satisfied are you with pricing management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'ret-task-q6-challenges', text: 'What are the main pricing challenges?', type: 'multiple', options: ["Consistency Across Channels", "Competitor Tracking", "Special Promotions", "Price Testing", "Margin Calculation", "No Major Challenges", "Other"] },

      // Task 7
      { id: 'ret-task-q7', text: 'Managing in-store merchandising and planograms (physical retail)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'ret-task-q7-method', text: 'How is merchandising/planogram management handled?', type: 'single', options: ["Manual Planning/Sketches", "Basic Layout Software", "Dedicated Planogram Software", "Integrated Merchandising System", "AI-Assisted Merchandising", "N/A"] },
      { id: 'ret-task-q7-satisfaction', text: 'How satisfied are you with merchandising management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'ret-task-q7-challenges', text: 'What are the main merchandising challenges?', type: 'multiple', options: ["Time-Consuming Planning", "Store Compliance", "Space Optimization", "Seasonal Changeovers", "Performance Tracking", "No Major Challenges", "Other"] },

      // Task 8
      { id: 'ret-task-q8', text: 'Reconciling sales data, processing payments, and managing financial data', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'ret-task-q8-method', text: 'How are sales data and payments reconciled?', type: 'single', options: ["Manual Reconciliation", "Spreadsheet Tracking", "Accounting Software", "Integrated POS/Accounting", "Automated Reconciliation System", "N/A"] },
      { id: 'ret-task-q8-satisfaction', text: 'How satisfied are you with financial reconciliation?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'ret-task-q8-challenges', text: 'What are the main reconciliation challenges?', type: 'multiple', options: ["Multi-channel Complexity", "Payment Gateway Issues", "Error Resolution", "Reporting Limitations", "Time Delay", "No Major Challenges", "Other"] },

      // Task 9
      { id: 'ret-task-q9', text: 'Managing promotions, discounts, or loyalty programs', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'ret-task-q9-method', text: 'How are promotions/loyalty programs managed?', type: 'single', options: ["Manual Setup per Channel", "Basic Promotion Rules", "Dedicated Promotion Software", "Integrated Marketing/Promo System", "AI-Assisted Promotion Optimization", "N/A"] },
      { id: 'ret-task-q9-satisfaction', text: 'How satisfied are you with promotion management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'ret-task-q9-challenges', text: 'What are the main promotion challenges?', type: 'multiple', options: ["Cross-Channel Consistency", "Timing/Scheduling", "Performance Tracking", "Customer Targeting", "Technical Limitations", "No Major Challenges", "Other"] },

      // Task 10
      { id: 'ret-task-q10', text: 'Managing staff scheduling, training, and performance tracking', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'ret-task-q10-method', text: 'How is retail staff management handled?', type: 'single', options: ["Manual Schedules/Paper Tracking", "Spreadsheet Management", "Staff Scheduling Software", "Integrated Workforce Management", "AI-Assisted Scheduling", "N/A"] },
      { id: 'ret-task-q10-satisfaction', text: 'How satisfied are you with staff management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'ret-task-q10-challenges', text: 'What are the main staff management challenges?', type: 'multiple', options: ["Schedule Creation", "Coverage Planning", "Performance Tracking", "Training Management", "Labor Cost Optimization", "No Major Challenges", "Other"] },
    ],
  }
];

const retail_ecommerce: Industry = {
  id: 'retail_ecommerce',
  label: 'Retail & Ecommerce',
  icon: Store,
  sections: retail_ecommerceSections
};

export default retail_ecommerce;