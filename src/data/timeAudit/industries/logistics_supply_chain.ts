import { Truck } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const logistics_supply_chainSections: Section[] = [
  {
    title: 'Industry Tasks: Transportation & Logistics',
    description: "Tasks related to inventory management, shipping, logistics, warehousing, and transportation.",
    questions: [
      // Task 1
      { id: 'log-task-q1', text: 'Manually tracking inventory levels (in warehouse, in transit) and reconciling stock counts', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'log-task-q1-method', text: 'How is inventory tracking managed?', type: 'single', options: ["Paper Records", "Spreadsheets", "Basic Inventory Software", "Warehouse Management System (WMS)", "Enterprise Resource Planning (ERP)", "N/A"] },
      { id: 'log-task-q1-satisfaction', text: 'How satisfied are you with inventory tracking processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'log-task-q1-challenges', text: 'What are the main inventory tracking challenges?', type: 'multiple', options: ["Manual Counts", "Accuracy Issues", "Real-time Updates", "Multiple Locations", "Integration with Other Systems", "No Major Challenges", "Other"] },
      
      // Task 2
      { id: 'log-task-q2', text: 'Processing shipment orders, generating bills of lading, printing labels, and updating tracking information', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'log-task-q2-method', text: 'How is shipment processing managed?', type: 'single', options: ["Manual Documentation", "Carrier-Specific Tools", "Shipping Software", "Transportation Management System (TMS)", "Integrated ERP/WMS", "N/A"] },
      { id: 'log-task-q2-satisfaction', text: 'How satisfied are you with shipment processing?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'log-task-q2-challenges', text: 'What are the main shipment processing challenges?', type: 'multiple', options: ["Document Generation", "Label Creation", "Carrier Communication", "Status Updates", "Exception Handling", "No Major Challenges", "Other"] },
      
      // Task 3
      { id: 'log-task-q3', text: 'Planning delivery routes and coordinating driver/carrier schedules', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'log-task-q3-method', text: 'How is route planning managed?', type: 'single', options: ["Manual Planning", "Spreadsheets/Maps", "Basic Routing Software", "Advanced Route Optimization", "AI-Driven Logistics Platform", "N/A"] },
      { id: 'log-task-q3-satisfaction', text: 'How satisfied are you with route planning processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'log-task-q3-challenges', text: 'What are the main route planning challenges?', type: 'multiple', options: ["Last-Minute Changes", "Driver Availability", "Traffic Conditions", "Delivery Windows", "Cost Optimization", "No Major Challenges", "Other"] },
      
      // Task 4
      { id: 'log-task-q4', text: 'Filling out customs documentation, compliance paperwork (e.g., hazmat), and generating reports', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'log-task-q4-method', text: 'How is documentation/compliance managed?', type: 'single', options: ["Manual Forms", "Document Templates", "Export Documentation Software", "Customs Management System", "Integrated Compliance Platform", "N/A"] },
      { id: 'log-task-q4-satisfaction', text: 'How satisfied are you with documentation processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'log-task-q4-challenges', text: 'What are the main documentation challenges?', type: 'multiple', options: ["Form Complexity", "Regulatory Changes", "International Requirements", "Error Correction", "Document Storage", "No Major Challenges", "Other"] },
      
      // Task 5
      { id: 'log-task-q5', text: 'Manual customer or carrier follow-ups regarding shipment status, delays, or issues', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'log-task-q5-method', text: 'How are customer/carrier follow-ups managed?', type: 'single', options: ["Phone/Email", "Shared Spreadsheet", "CRM System", "Transportation Management System", "Integrated Communication Platform", "N/A"] },
      { id: 'log-task-q5-satisfaction', text: 'How satisfied are you with follow-up processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'log-task-q5-challenges', text: 'What are the main follow-up challenges?', type: 'multiple', options: ["Information Access", "Issue Resolution", "Communication Tracking", "Proactive Updates", "Response Time", "No Major Challenges", "Other"] },
      
      // Task 6
      { id: 'log-task-q6', text: 'Managing warehouse operations (receiving, putaway, picking, packing)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'log-task-q6-method', text: 'How are warehouse operations managed?', type: 'single', options: ["Paper-Based System", "Barcode/Scanner System", "Basic Warehouse Software", "Warehouse Management System", "Integrated WMS/ERP", "N/A"] },
      { id: 'log-task-q6-satisfaction', text: 'How satisfied are you with warehouse processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'log-task-q6-challenges', text: 'What are the main warehouse operation challenges?', type: 'multiple', options: ["Inventory Accuracy", "Space Utilization", "Labor Efficiency", "Order Fulfillment Speed", "Returns Processing", "No Major Challenges", "Other"] },
      
      // Task 7
      { id: 'log-task-q7', text: 'Scheduling and tracking vehicle/fleet maintenance', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'log-task-q7-method', text: 'How is fleet maintenance managed?', type: 'single', options: ["Paper Logs", "Spreadsheet Tracking", "Maintenance Software", "Fleet Management System", "Telematics-Integrated Platform", "N/A"] },
      { id: 'log-task-q7-satisfaction', text: 'How satisfied are you with maintenance processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'log-task-q7-challenges', text: 'What are the main maintenance challenges?', type: 'multiple', options: ["Schedule Conflicts", "Service Record Keeping", "Cost Tracking", "Preventative Maintenance", "Vehicle Downtime", "No Major Challenges", "Other"] },
      
      // Task 8
      { id: 'log-task-q8', text: 'Auditing freight bills and managing carrier payments', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'log-task-q8-method', text: 'How are freight bills/payments managed?', type: 'single', options: ["Manual Verification", "Spreadsheet Tracking", "Accounting Software", "Freight Audit Software", "Integrated Payment Platform", "N/A"] },
      { id: 'log-task-q8-satisfaction', text: 'How satisfied are you with freight payment processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'log-task-q8-challenges', text: 'What are the main freight payment challenges?', type: 'multiple', options: ["Invoice Discrepancies", "Rate Verification", "Payment Tracking", "Carrier Communication", "Cost Allocation", "No Major Challenges", "Other"] },
      
      // Task 9
      { id: 'log-task-q9', text: 'Monitoring fuel consumption and managing fuel reporting', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
      { id: 'log-task-q9-method', text: 'How is fuel monitoring managed?', type: 'single', options: ["Manual Entry", "Spreadsheet Tracking", "Fuel Card System", "Fleet Management Software", "Telematics-Based System", "N/A"] },
      { id: 'log-task-q9-satisfaction', text: 'How satisfied are you with fuel monitoring processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'log-task-q9-challenges', text: 'What are the main fuel monitoring challenges?', type: 'multiple', options: ["Data Collection", "Consumption Analysis", "Cost Tracking", "Driver Behavior", "Reporting Requirements", "No Major Challenges", "Other"] },
      
      // Task 10
      { id: 'log-task-q10', text: 'Handling proof of delivery (POD) collection and management', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'log-task-q10-method', text: 'How is POD collection managed?', type: 'single', options: ["Paper Signatures", "Email/Scan Process", "Electronic POD App", "Transportation Management System", "Integrated Delivery Platform", "N/A"] },
      { id: 'log-task-q10-satisfaction', text: 'How satisfied are you with POD processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'log-task-q10-challenges', text: 'What are the main POD challenges?', type: 'multiple', options: ["Collection Consistency", "Document Storage", "Retrieval Speed", "Quality Issues", "Customer Disputes", "No Major Challenges", "Other"] },
      
      // Task 11
      { id: 'log-task-q11', text: 'Accident and incident reporting and documentation', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
      { id: 'log-task-q11-method', text: 'How is incident reporting managed?', type: 'single', options: ["Paper Forms", "Email/Document Process", "Digital Forms", "Safety Management System", "Integrated Risk Platform", "N/A"] },
      { id: 'log-task-q11-satisfaction', text: 'How satisfied are you with incident reporting processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'log-task-q11-challenges', text: 'What are the main incident reporting challenges?', type: 'multiple', options: ["Timely Reporting", "Documentation Completeness", "Follow-up Tracking", "Corrective Actions", "Regulatory Compliance", "No Major Challenges", "Other"] },
      
      // Task 12
      { id: 'log-task-q12', text: 'Dispatch and route optimization', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
      { id: 'log-task-q12-method', text: 'How is dispatch/route optimization managed?', type: 'single', options: ["Manual Planning", "Basic Routing Tools", "Dispatch Software", "Route Optimization System", "AI-Powered Logistics Platform", "N/A"] },
      { id: 'log-task-q12-satisfaction', text: 'How satisfied are you with dispatch/routing processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
      { id: 'log-task-q12-challenges', text: 'What are the main dispatch/routing challenges?', type: 'multiple', options: ["Last-Minute Changes", "Real-time Traffic", "Driver Communication", "Multi-Stop Efficiency", "Customer Time Windows", "No Major Challenges", "Other"] }
    ]
  }
];

const logistics_supply_chain: Industry = {
  id: 'logistics_supply_chain',
  label: 'Transportation & Logistics',
  icon: Truck,
  sections: logistics_supply_chainSections
};

export default logistics_supply_chain;