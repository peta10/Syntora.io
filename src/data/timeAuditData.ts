import { Building, UtensilsCrossed, Landmark, Banknote, Home, HeartPulse, Server, Dumbbell, Factory, Truck, Building2, Plane, Store, GraduationCap, Library, MonitorPlay, ShieldCheck, Hammer, Handshake, Car, Wrench, Users, Anchor, Leaf, Scale, Briefcase, Cpu, PawPrint, Palette, Video, BarChart2, Fuel, Sprout, BuildingIcon, Cog, Mic, Sparkles, Microscope, Lightbulb, Goal } from "lucide-react";

// Types for industry data based on TimeAudit.md
export type Role = string; // e.g., 'owner', 'c-suite', 'director', 'manager', 'contributor'
export type BusinessSize = 'small' | 'medium' | 'large'; // Enforce specific values

export interface TimeEstimateOptions {
  hoursPerDay?: string[];
  hoursPerWeek?: string[];
  hoursPerMonth?: string[];
  hoursPerTransaction?: string[];
}

export type QuestionType = 'single' | 'multiple' | 'scale' | 'text' | 'timeEstimate' | 'openEnded' | 'number'; // Added number type

export interface Question {
  id: string; // Unique identifier for the question (e.g., 'construction-q1')
  text: string;
  type: QuestionType;
  options?: string[]; // For 'single' or 'multiple' choice
  timeOptions?: TimeEstimateOptions; // For 'timeEstimate' type
  roles?: Role[]; // Roles this question applies to (if undefined, applies to all)
  sizes?: BusinessSize[]; // Business sizes this question applies to (if undefined, applies to all)
  tooltip?: string; // Optional tooltip for clarification
  isRequired?: boolean; // Added optional isRequired flag
}

export interface Section {
  title: string;
  description?: string;
  questions: Question[];
  roles?: Role[]; // Roles this section applies to (if undefined, applies to all)
  sizes?: BusinessSize[]; // Business sizes this section applies to (if undefined, applies to all)
}

export interface Industry {
  id: string; // e.g., 'construction'
  label: string; // Display name, e.g., 'Construction'
  icon: React.ElementType; // Lucide icon component
  sections: Section[];
}

// User Roles Data
export const userRoles = [
    { id: 'owner', label: 'Business Owner / Entrepreneur' },
    { id: 'c-suite', label: 'C-Suite Executive (CEO, COO, CTO, etc.)' },
    { id: 'director', label: 'Department Head / Director' },
    { id: 'manager', label: 'Manager / Team Lead' },
    { id: 'contributor', label: 'Individual Contributor' },
];

// Business Sizes Data
export const businessSizes = [
    { id: 'small', label: 'Small (1-20 employees, < $1M revenue)' },
    { id: 'medium', label: 'Medium (21-200 employees, $1M-$10M revenue)' },
    { id: 'large', label: 'Large (201+ employees, > $10M revenue)' },
];

// Time Estimate Options (Example)
const defaultTimeOptions: TimeEstimateOptions = {
    hoursPerDay: ['0', '0-1', '1-2', '2-3', '3-4', '4-6', '6-8', '8+'],
    hoursPerWeek: ['0', '0-2', '2-5', '5-10', '10-15', '15-20', '20-30', '30-40', '40+'],
    hoursPerMonth: ['0', '0-10', '10-20', '20-40', '40-60', '60-80', '80-120', '120-160', '160+'],
    hoursPerTransaction: ['< 5 mins', '5-15 mins', '15-30 mins', '30-60 mins', '1-2 hours', '2+ hours']
};

// Define common role groups
const decisionMakers: Role[] = ['owner', 'c-suite', 'director'];
const implementers: Role[] = ['manager', 'director']; // Director overlaps
const users: Role[] = ['contributor', 'manager']; // Manager overlaps

// Define common size groups - not used directly below, but useful for reference
// const smallBusiness: BusinessSize[] = ['small'];
// const mediumBusiness: BusinessSize[] = ['medium'];
// const largeBusiness: BusinessSize[] = ['large'];

// --- Common Sections (Applied to all industries, filtered internally by role/size) ---

const generalAdminSection: Section = {
    title: "General Administrative Tasks",
    description: "Time spent on common administrative activities.",
    questions: [
        { id: 'admin-q1', text: 'Managing email inbox and responding to routine communications', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
        { id: 'admin-q2', text: 'Attending internal meetings (excluding project-specific ones)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
        { id: 'admin-q3', text: 'Coordinating schedules or booking meetings for yourself or others', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek }, roles: ['manager', 'director', 'owner', 'c-suite'] },
        { id: 'admin-q4', text: 'Creating, reviewing, or approving internal documents (reports, memos, etc.)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
        { id: 'admin-q5', text: 'Manual data entry into spreadsheets or internal systems (non-industry specific)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
        { id: 'admin-q6', text: 'Coordinating tasks or information flow between team members/departments', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek }, roles: ['manager', 'director', 'c-suite'] },
        { id: 'admin-q7', text: 'Handling routine compliance checks or internal documentation requirements', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek }, roles: ['manager', 'director', 'owner', 'c-suite'] },
    ]
};

const roleSpecificPerspectivesSection: Section = {
    title: "Role Perspectives on Automation",
    description: "Questions about automation related to your specific role.",
    questions: [
        // Role Specific Questions (from point 7)
        { id: 'role-q1', text: 'Which tasks do you wish you could spend significantly less time on?', type: 'text', roles: users },
        { id: 'role-q2', text: 'From your perspective, where would automation provide the most value to your team/department?', type: 'text', roles: implementers },
        { id: 'role-q3', text: 'From your perspective, where would automation provide the most strategic value to the organization?', type: 'text', roles: decisionMakers },
        { id: 'role-q4', text: 'What are the biggest barriers you see to implementing new automation technologies in your area?', type: 'text' }, // Applicable to all, but perspective differs
        { id: 'role-q5', text: 'What is your level of decision-making authority regarding adopting new software or tools?', type: 'single', options: ['None', 'Influence/Recommend', 'Approve Budget', 'Final Decision'], roles: ['manager', 'director', 'c-suite', 'owner'] },
        { id: 'role-q6', text: 'How comfortable are you with learning and using new technologies?', type: 'scale', options: ['Very Uncomfortable', 'Slightly Uncomfortable', 'Neutral', 'Comfortable', 'Very Comfortable'] },
        { id: 'role-q7', text: 'Have you previously been involved in implementing automation tools? If so, briefly describe the experience.', type: 'text' },
        { id: 'role-q8', text: 'What specific metrics (e.g., time saved, error reduction, cost reduction, revenue increase) would you use to measure the success of automation?', type: 'text' },
    ]
};

const sizeSpecificChallengesSection: Section = {
    title: "Business Size Challenges & Opportunities",
    description: "Questions related to the scale of your operations.",
    questions: [
        // Size Specific Questions (from point 6)
        { id: 'size-s1', text: 'How significantly do budget constraints impact your ability to invest in new technology?', type: 'scale', options: ['Not at all', 'Slightly', 'Moderately', 'Significantly', 'Major Barrier'], sizes: ['small'] }, // Explicit size IDs
        { id: 'size-s2', text: 'Do team members frequently wear multiple hats or handle tasks outside their core role?', type: 'single', options: ['Rarely', 'Sometimes', 'Frequently', 'Constantly'], sizes: ['small'] },
        { id: 'size-s3', text: 'What are the primary bottlenecks preventing your business/department from growing faster?', type: 'text', sizes: ['small'] },
        { id: 'size-m1', text: 'How challenging is it to standardize processes across different teams or functions?', type: 'scale', options: ['Not Challenging', 'Slightly', 'Moderately', 'Very Challenging'], sizes: ['medium'] },
        { id: 'size-m2', text: 'How well integrated are your core business systems (e.g., CRM, ERP, Finance)?', type: 'scale', options: ['Not Integrated', 'Poorly Integrated', 'Moderately Integrated', 'Well Integrated', 'Fully Integrated'], sizes: ['medium', 'large'] }, // Also relevant for large
        { id: 'size-m3', text: 'How often do you need custom solutions vs. being able to use off-the-shelf software?', type: 'single', options: ['Almost Always Off-the-shelf', 'Mostly Off-the-shelf', 'Balanced Mix', 'Mostly Custom', 'Almost Always Custom'], sizes: ['medium'] },
        { id: 'size-l1', text: 'How complex is the integration between your primary enterprise systems (e.g., ERP, CRM, SCM)?', type: 'scale', options: ['Simple', 'Moderate', 'Complex', 'Very Complex'], sizes: ['large'] },
        { id: 'size-l2', text: 'How significant are compliance and security requirements when evaluating new technology?', type: 'scale', options: ['Minimal', 'Moderate', 'Significant', 'Critical'], sizes: ['large'] },
        { id: 'size-l3', text: 'Describe your typical process and challenges related to change management when implementing new tools.', type: 'text', sizes: ['large'] },
        { id: 'size-l4', text: 'How challenging is standardizing processes across multiple locations or globally (if applicable)?', type: 'scale', options: ['Not Applicable', 'Not Challenging', 'Slightly', 'Moderately', 'Very Challenging'], sizes: ['large'] },
    ]
};

const openEndedStrategySection: Section = {
    title: "Strategic Outlook & Goals",
    description: "Final thoughts on automation potential.",
    questions: [
        // Open Ended Questions (from point 8)
        { id: 'open-dm1', text: 'What key strategic goals for the next 1-3 years could be accelerated through better automation?', type: 'openEnded', roles: decisionMakers },
        { id: 'open-dm2', text: 'How important is leveraging technology for competitive advantage in your market?', type: 'scale', options: ['Not Important', 'Slightly Important', 'Moderately Important', 'Very Important', 'Critical'], roles: decisionMakers },
        { id: 'open-dm3', text: 'Briefly describe your process for allocating budget to new technology investments.', type: 'openEnded', roles: decisionMakers },
        { id: 'open-imp1', text: 'What are the biggest potential challenges you foresee in getting your team to adopt new automated workflows?', type: 'openEnded', roles: implementers },
        { id: 'open-imp2', text: 'Are there specific workflows you believe are prime candidates for redesign through automation?', type: 'openEnded', roles: implementers },
        { id: 'open-user1', text: 'Describe one daily or weekly task that causes the most frustration due to its manual nature.', type: 'openEnded', roles: users },
        { id: 'open-user2', text: 'If automation freed up 2-3 hours of your week, what higher-value activities or skill development would you focus on?', type: 'openEnded', roles: users },
    ]
};

// --- Industry Specific Data ---
// Fully populated based on TimeAudit*.md task lists (as timeEstimate questions)
export const industries: Industry[] = [
  {
    id: 'construction',
    label: 'Construction & Trades', // Updated label
    icon: Hammer, // Updated icon
    sections: [
      {
        title: 'Industry Tasks: Construction & Trades',
        questions: [
          // Task 1
          { id: 'con-task-q1', text: 'Coordinating daily work assignments and dispatching teams/crews', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'con-task-q1-method', text: 'How is this coordination primarily performed?', type: 'single', options: ["Fully Manual (Phone/Text/Paper)", "Basic Tools (Spreadsheets/Shared Calendar)", "Specific Dispatch/Project Mgmt Software", "Integration Platform (Connecting Systems)", "Fully Automated/Managed", "N/A"] },
          { id: 'con-task-q1-satisfaction', text: 'How satisfied are you with the current process/tool for coordination?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"], roles: [], sizes: [], tooltip: "Only answer if not Fully Manual or N/A" }, // Conditional logic handled in frontend
          { id: 'con-task-q1-challenges', text: 'What are the main challenges with the current coordination process/tool?', type: 'multiple', options: ["Too Slow", "Error-Prone", "Poor Communication", "Hard to Track Changes", "Doesn\'t Integrate", "Too Complex", "No Major Challenges", "Other"], roles: [], sizes: [], tooltip: "Only answer if not Fully Manual or N/A" }, // Conditional logic handled in frontend
          // Task 2
          { id: 'con-task-q2', text: 'Preparing detailed quotes, bids, and cost estimates', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek }, roles: ['owner', 'manager', 'c-suite', 'director'] },
          { id: 'con-task-q2-method', text: 'How are quotes/estimates primarily generated?', type: 'single', options: ["Fully Manual (Paper/Calculator)", "Spreadsheets", "Basic Quoting Tool", "Specialized Estimating Software", "Integrated CRM/ERP System", "N/A"], roles: ['owner', 'manager', 'c-suite', 'director'] },
          { id: 'con-task-q2-satisfaction', text: 'How satisfied are you with the current quoting process/tool?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"], roles: ['owner', 'manager', 'c-suite', 'director'] },
          { id: 'con-task-q2-challenges', text: 'What are the main challenges with quoting?', type: 'multiple', options: ["Time Consuming", "Inaccurate Costs", "Inconsistent Pricing", "Hard to Collaborate", "Lack of Material Price Updates", "Difficult Client Presentation", "No Major Challenges", "Other"], roles: ['owner', 'manager', 'c-suite', 'director'] },
          // Task 3
          { id: 'con-task-q3', text: 'Generating project invoices and tracking payments', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'con-task-q3-method', text: 'How are invoices generated and tracked?', type: 'single', options: ["Manual Invoices (Word/Excel)", "Basic Accounting Software (e.g., QuickBooks)", "Project Management Software Feature", "Integrated Accounting/Project System", "N/A"] },
          { id: 'con-task-q3-satisfaction', text: 'How satisfied are you with the invoicing/payment process?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'con-task-q3-challenges', text: 'What are the main invoicing/payment challenges?', type: 'multiple', options: ["Slow Generation", "Tracking Payments Manually", "Delayed Payments", "Disputes", "Poor Reporting", "Doesn\'t Link to Job Costs", "No Major Challenges", "Other"] },
          // Task 4
          { id: 'con-task-q4', text: 'Logging employee/crew hours and managing shift schedules', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'con-task-q4-method', text: 'How are hours logged and schedules managed?', type: 'single', options: ["Manual Timesheets/Paper Schedule", "Spreadsheets", "Time Tracking App", "Project Management Software Feature", "Integrated HR/Payroll System", "N/A"] },
          { id: 'con-task-q4-satisfaction', text: 'How satisfied are you with time tracking/scheduling?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'con-task-q4-challenges', text: 'What are the main time/scheduling challenges?', type: 'multiple', options: ["Inaccurate Logging", "Manual Data Entry for Payroll", "Difficult Schedule Changes", "Poor Crew Visibility", "Compliance Issues", "No Major Challenges", "Other"] },
          // Task 5
          { id: 'con-task-q5', text: 'Ordering materials, managing inventory, and tracking deliveries', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'con-task-q5-method', text: 'How are materials ordered and tracked?', type: 'single', options: ["Manual Phone/Email Orders", "Supplier Portal/Spreadsheet", "Inventory Management Software", "Integrated Project/Accounting System", "N/A"] },
          { id: 'con-task-q5-satisfaction', text: 'How satisfied are you with material management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'con-task-q5-challenges', text: 'What are the main material management challenges?', type: 'multiple', options: ["Stockouts/Delays", "Inaccurate Inventory", "Manual Purchase Orders", "Difficult Delivery Tracking", "Cost Overruns", "No Major Challenges", "Other"] },
          // Task 6
          { id: 'con-task-q6', text: 'Creating progress reports, safety logs, and updating jobsite documentation', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'con-task-q6-method', text: 'How is jobsite documentation handled?', type: 'single', options: ["Manual Paper Forms/Logs", "Photos + Email/Text", "Spreadsheets/Word Docs", "Project Management Software Forms", "Dedicated Safety/Reporting App", "N/A"] },
          { id: 'con-task-q6-satisfaction', text: 'How satisfied are you with documentation handling?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'con-task-q6-challenges', text: 'What are the main documentation challenges?', type: 'multiple', options: ["Time Consuming Data Entry", "Lost/Incomplete Forms", "Hard to Search/Retrieve", "Poor Reporting Format", "Compliance Risks", "No Major Challenges", "Other"] },
           // Task 7
          { id: 'con-task-q7', text: 'Handling client communications regarding project updates or changes', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'con-task-q7-method', text: 'How are client communications primarily managed?', type: 'single', options: ["Primarily Phone/Text", "Primarily Email", "Spreadsheet Tracking", "Project Management Portal/App", "CRM System", "N/A"] },
          { id: 'con-task-q7-satisfaction', text: 'How satisfied are you with client communication management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'con-task-q7-challenges', text: 'What are the main client communication challenges?', type: 'multiple', options: ["Missed Updates", "Disorganized Information", "Time Consuming Responses", "Lack of Central Record", "Managing Expectations", "No Major Challenges", "Other"] },
           // Task 8
          { id: 'con-task-q8', text: 'Managing subcontractor communications, contracts, and compliance', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'con-task-q8-method', text: 'How are subcontractor interactions managed?', type: 'single', options: ["Manual (Phone/Email/Paper Contracts)", "Spreadsheets for Tracking", "Project Management Software Communication", "Dedicated Subcontractor Portal", "N/A"] },
          { id: 'con-task-q8-satisfaction', text: 'How satisfied are you with subcontractor management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'con-task-q8-challenges', text: 'What are the main subcontractor management challenges?', type: 'multiple', options: ["Document Tracking (Insurance, etc.)", "Communication Delays", "Contract Management", "Compliance Issues", "Payment Coordination", "No Major Challenges", "Other"] },
          // Task 9
          { id: 'con-task-q9', text: 'Processing change orders and updating project plans', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'con-task-q9-method', text: 'How are change orders processed?', type: 'single', options: ["Manual Paper/Email Approvals", "Spreadsheet Tracking", "Project Management Software Feature", "Integrated Change Order System", "N/A"] },
          { id: 'con-task-q9-satisfaction', text: 'How satisfied are you with the change order process?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'con-task-q9-challenges', text: 'What are the main change order challenges?', type: 'multiple', options: ["Slow Approval Times", "Tracking Impact on Budget/Schedule", "Client Communication", "Documentation Issues", "Scope Creep", "No Major Challenges", "Other"] },
          // Task 10
          { id: 'con-task-q10', text: 'Permit application processing and tracking', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'con-task-q10-method', text: 'How are permits managed?', type: 'single', options: ["Manual Filing/Tracking", "Spreadsheet Tracking", "Project Management Software Task", "Specialized Permit Software/Service", "N/A"] },
          { id: 'con-task-q10-satisfaction', text: 'How satisfied are you with permit management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'con-task-q10-challenges', text: 'What are the main permit challenges?', type: 'multiple', options: ["Application Delays", "Tracking Status", "Complex Requirements", "Managing Expirations", "Coordination with Agencies", "No Major Challenges", "Other"] },
        ],
      },
    ],
  },
  {
    id: 'restaurant',
    label: 'Restaurant & Food Service', // Updated label
    icon: UtensilsCrossed,
    sections: [
      {
        title: 'Industry Tasks: Restaurant & Food Service',
        questions: [
          // Task 1
          { id: 'res-task-q1', text: 'Entering or reconciling orders between POS, kitchen display systems (KDS), and delivery platforms', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'res-task-q1-method', text: 'How are orders primarily processed/reconciled?', type: 'single', options: ["Manual Entry/Paper Tickets", "POS Only (Manual Reconciliation)", "Integrated POS/KDS", "Integrated POS/KDS/Delivery Platforms", "N/A"] },
          { id: 'res-task-q1-satisfaction', text: 'How satisfied are you with the order processing system?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'res-task-q1-challenges', text: 'What are the main order processing challenges?', type: 'multiple', options: ["Order Errors", "Slow Entry", "Tablet Clutter (Delivery Apps)", "Lack of Integration", "Difficult Reconciliation", "No Major Challenges", "Other"] },
          // Task 2
          { id: 'res-task-q2', text: 'Tracking food, beverage, and supply inventory levels', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'res-task-q3', text: 'Managing staff schedules, shift changes, and time-off requests', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'res-task-q4', text: 'Recording employee hours, processing payroll, and managing tips distribution', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'res-task-q5', text: 'Manually managing reservations, waitlists, and table assignments', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'res-task-q6', text: 'Placing orders with food and beverage suppliers/vendors', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'res-task-q7', text: 'Updating menus (physical, digital, POS)', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'res-task-q8', text: 'Handling customer inquiries and resolving complaints', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'res-task-q9', text: 'Performing daily/weekly sales reconciliation and reporting', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'res-task-q10', text: 'Completing food safety checklists and compliance documentation', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'res-task-q11', text: 'Customer loyalty program administration', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'res-task-q12', text: 'Inventory management and ordering', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } }, // Added from time-audit-2
        ],
      },
    ],
  },
  // 3. Legal Services
  {
    id: 'legal',
    label: 'Legal Services',
    icon: Landmark,
    sections: [
      {
        title: 'Industry Tasks: Legal Services',
        questions: [
          // Combined list from markdown files
          { id: 'leg-task-q1', text: 'Organizing, indexing, and archiving case files (digital or physical)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'leg-task-q2', text: 'Scheduling court dates, client meetings, depositions, and managing deadlines', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'leg-task-q3', text: 'Performing legal research and summarizing findings', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'leg-task-q4', text: 'Drafting, reviewing, and formatting legal documents, contracts, or correspondence', type: 'timeEstimate', timeOptions: { hoursPerTransaction: defaultTimeOptions.hoursPerTransaction, hoursPerWeek: defaultTimeOptions.hoursPerWeek }, tooltip:"Estimate time per document OR total time per week."}, // Allow either
          { id: 'leg-task-q4-method', text:'How are documents typically drafted/managed?', type:'single', options:["Manual Drafting from Scratch", "Using Templates (Word)", "Document Assembly Software", "Legal Practice Management Templates", "N/A"]},
          { id: 'leg-task-q4-freq', text: 'If estimating per document, how many such documents are handled per WEEK?', type: 'number', isRequired: false, tooltip: "Required only if you estimated time per document above." }, // Make conditional
          { id: 'leg-task-q4-satisfaction', text:'How satisfied are you with document preparation?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'leg-task-q4-challenges', text:'What are the main document challenges?', type:'multiple', options:["Time Consuming Drafting", "Ensuring Consistency", "Version Control", "Formatting Issues", "Collaboration/Review Process", "No Major Challenges", "Other"]},
          { id: 'leg-task-q5', text: 'Logging billable hours and generating client invoices', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'leg-task-q6', text: 'Handling routine client intake, inquiries, and status updates', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'leg-task-q7', text: 'Managing discovery processes (document collection, review, production)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'leg-task-q8', text: 'Filing documents with courts or government agencies', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'leg-task-q9', text: 'Conflict checking for new clients or matters', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'leg-task-q10', text: 'Managing trust accounting and client funds', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
        ],
      },
    ],
  },
   // 4. Real Estate
   {
    id: 'real_estate',
    label: 'Real Estate',
    icon: Building2,
    sections: [
        {
        title: 'Industry Tasks: Real Estate',
            questions: [
              // Combined list from markdown files
              { id: 'rea-task-q1', text: 'Creating, updating, and managing property listings (MLS, website, portals)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
              { id: 'rea-task-q2', text: 'Tracking leads (from web forms, calls, etc.) and performing client follow-up', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
              { id: 'rea-task-q3', text: 'Coordinating and scheduling property showings, tours, meetings, and open houses', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
              { id: 'rea-task-q4', text: 'Preparing and processing offers, purchase agreements, leases, and transaction paperwork', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
              { id: 'rea-task-q5', text: 'Coordinating with lenders, inspectors, appraisers, and title companies', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
              { id: 'rea-task-q6', text: 'Managing client relationship management (CRM) system data entry', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
              { id: 'rea-task-q7', text: 'Creating marketing materials (flyers, virtual tours, social media posts)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
              { id: 'rea-task-q8', text: 'Tracking commission statements and processing payments', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
              { id: 'rea-task-q9', text: 'Handling routine client questions about properties or the transaction process', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
              { id: 'rea-task-q10', text: 'Coordinating property maintenance (if applicable, often covered by Property Management)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } }, 
            ],
        },
    ]
  },
  // 5. Accounting & Finance
  {
    id: 'accounting_finance',
    label: 'Accounting & Finance',
    icon: Banknote,
    sections: [
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
           // ... Add Method/Satisfaction/Challenges for remaining Finance tasks (q3-q11) ...
          { id: 'fin-task-q3', text: 'Processing accounts payable and scheduling vendor payments', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'fin-task-q3-method', text: 'How are accounts payable processed?', type: 'single', options: ["Manual Check Writing/Entry", "Accounting Software (Manual Approval/Entry)", "AP Automation Software", "Integrated System", "N/A"] },
          { id: 'fin-task-q3-satisfaction', text: 'How satisfied are you with the AP process?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'fin-task-q3-challenges', text: 'What are the main AP challenges?', type: 'multiple', options: ["Manual Data Entry", "Approval Delays", "Matching Invoices", "Duplicate Payments", "Fraud Risk", "No Major Challenges", "Other"] },

          { id: 'fin-task-q4', text: 'Reconciling bank statements and credit card accounts', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'fin-task-q4-method', text: 'How is reconciliation performed?', type: 'single', options: ["Manual Comparison (Paper/Spreadsheet)", "Accounting Software (Manual Matching)", "Accounting Software (Automated Suggestions)", "N/A"] },
          { id: 'fin-task-q4-satisfaction', text: 'How satisfied are you with reconciliation?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'fin-task-q4-challenges', text: 'What are the main reconciliation challenges?', type: 'multiple', options: ["Time Consuming", "Finding Discrepancies", "Unmatched Transactions", "Bank Feed Issues", "Tedious Process", "No Major Challenges", "Other"] },
          
          // ... (Continue for q5 to q11) ...
        ]
      }
    ]
  },
    // 6. Home Services (General - Repair, Cleaning, Landscaping etc.)
  {
    id: 'home_services',
    label: 'Home Services (Repair, Cleaning, etc.)',
    icon: Wrench, // Switched to Wrench from Home
    sections: [
      {
        title: 'Industry Tasks: Home Services',
        questions: [
           // Task 1
          { id: 'hsv-task-q1', text: 'Responding to customer inquiries (phone, email, web form) and entering lead information', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'hsv-task-q1-method', text: 'How are inquiries/leads managed?', type: 'single', options: ["Manual Notes/Phone Log", "Spreadsheet", "Email Inbox Only", "Basic CRM/Contact Manager", "Field Service Management Software", "N/A"] },
          { id: 'hsv-task-q1-satisfaction', text: 'How satisfied are you with inquiry/lead handling?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'hsv-task-q1-challenges', text: 'What are the main inquiry/lead challenges?', type: 'multiple', options: ["Slow Response Time", "Lost Leads", "Inconsistent Follow-Up", "Manual Data Entry", "Difficulty Assigning/Tracking", "No Major Challenges", "Other"] },
          // Task 2
          { id: 'hsv-task-q2', text: 'Scheduling appointments, managing technician calendars, and dispatching crews', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'hsv-task-q2-method', text: 'How is scheduling/dispatch handled?', type: 'single', options: ["Manual Calendar/Whiteboard", "Shared Digital Calendar", "Spreadsheet", "Scheduling Software", "Field Service Management Software", "N/A"] },
          { id: 'hsv-task-q2-satisfaction', text: 'How satisfied are you with scheduling/dispatch?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'hsv-task-q2-challenges', text: 'What are the main scheduling challenges?', type: 'multiple', options: ["Time Consuming", "Double Booking", "Optimizing Routes", "Communicating Changes", "Technician Availability", "No Major Challenges", "Other"] },
          // ... Add Method/Satisfaction/Challenges for remaining Home Services tasks (q3-q12) ...
          { id: 'hsv-task-q3', text: 'Planning job details, preparing work orders, or providing instructions for field crews', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'hsv-task-q3-method', text:'How are job details/work orders managed?', type:'single', options:["Verbal Instructions/Paper Notes", "Email/Text", "Word/Excel Templates", "Field Service Mgmt Software Feature", "N/A"]},
          { id: 'hsv-task-q3-satisfaction', text:'How satisfied are you with job planning?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'hsv-task-q3-challenges', text:'What are the main job planning challenges?', type:'multiple', options:["Missing Information", "Inconsistent Instructions", "Communicating to Field", "Tracking Job Progress", "Lack of Standardization", "No Major Challenges", "Other"]},

          { id: 'hsv-task-q4', text: 'Generating estimates or quotes for services', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'hsv-task-q4-method', text:'How are estimates generated?', type:'single', options:["Manual Calculation/Paper", "Spreadsheet Template", "Quoting Software", "Field Service Mgmt Software Feature", "N/A"]},
          { id: 'hsv-task-q4-satisfaction', text:'How satisfied are you with the quoting process?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'hsv-task-q4-challenges', text:'What are the main quoting challenges?', type:'multiple', options:["Time Consuming", "Inaccurate Pricing", "Professional Appearance", "Tracking Sent Quotes", "Fast Follow-Up", "No Major Challenges", "Other"]},
          
          // ... (Continue for q5 to q12 for Home Services) ...
        ]
      },
    ]
  },
  // 7. Healthcare & Medical Practices
  {
    id: 'healthcare',
    label: 'Healthcare & Medical Practices',
    icon: HeartPulse,
    sections: [
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
           // ... Add Method/Satisfaction/Challenges for remaining Healthcare tasks (q3-q12) ...
           { id: 'hea-task-q3', text: 'Updating patient electronic health records (EHR/EMR) and medical history', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
           { id: 'hea-task-q3-method', text:'How are patient records updated?', type:'single', options:["Manual Entry During/After Visit", "Dictation/Transcription Service", "Patient Portal Updates (Manual Review)", "Direct Entry via EHR/EMR Interface", "N/A"]},
           { id: 'hea-task-q3-satisfaction', text:'How satisfied are you with record updating?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
           { id: 'hea-task-q3-challenges', text:'What are the main record updating challenges?', type:'multiple', options:["Time Consuming Data Entry", "Incomplete Information", "Navigating EHR Clunkiness", "Interoperability Issues", "Ensuring Accuracy", "No Major Challenges", "Other"]},

           { id: 'hea-task-q4', text: 'Processing insurance claims, billing patients, and managing accounts receivable', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
           { id: 'hea-task-q4-method', text:'How is billing/claims handled?', type:'single', options:["Manual Form Submission/Spreadsheet Tracking", "EHR/PM Billing Module (Manual Scrubbing)", "Clearinghouse Submission", "Outsourced Billing Service", "N/A"]},
           { id: 'hea-task-q4-satisfaction', text:'How satisfied are you with the billing/claims process?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
           { id: 'hea-task-q4-challenges', text:'What are the main billing challenges?', type:'multiple', options:["Claim Denials/Rejections", "Coding Errors", "Time to Payment", "Manual Follow-Up on AR", "Patient Collections", "No Major Challenges", "Other"]},
           
           // ... (Continue for q5 to q12 for Healthcare) ...
        ]
      },
    ]
  },
    // 8. IT & IT Service Management (ITSM)
  {
    id: 'it_itsm',
    label: 'IT & IT Service Management',
    icon: Server,
    sections: [
      {
        title: 'Industry Tasks: IT & ITSM',
        questions: [
          // Task 1
          { id: 'it-task-q1', text: 'Handling password resets and user account unlocks', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'it-task-q1-method', text: 'How are password resets handled?', type: 'single', options: ["Manual via IT Support Ticket/Call", "Self-Service Portal (Basic)", "Automated Self-Service Tool", "Integrated Identity Management System", "N/A"] },
          { id: 'it-task-q1-satisfaction', text: 'How satisfied are users/IT with the reset process?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'it-task-q1-challenges', text: 'What are the main challenges with password resets?', type: 'multiple', options: ["High Volume of Requests", "IT Staff Time Consuming", "User Frustration", "Security Concerns", "Slow Resolution", "No Major Challenges", "Other"] },
          // Task 2
          { id: 'it-task-q2', text: 'Processing and resolving IT support tickets (hardware, software, network issues)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'it-task-q2-method', text: 'How are IT support tickets managed?', type: 'single', options: ["Email/Manual Tracking", "Basic Ticketing System", "ITSM Platform (e.g., ServiceNow, Jira)", "Integrated ITSM/Monitoring Tools", "N/A"] },
          { id: 'it-task-q2-satisfaction', text: 'How satisfied are you with the ticketing system/process?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'it-task-q2-challenges', text: 'What are the main ticketing challenges?', type: 'multiple', options: ["Slow Resolution Times", "Poor Ticket Routing", "Lack of Automation (e.g., responses)", "Difficult Reporting", "Poor User Experience", "No Major Challenges", "Other"] },
          // Task 3
          { id: 'it-task-q3', text: 'Onboarding new employees (account creation, hardware setup, software installation)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'it-task-q3-method', text:'How is IT onboarding handled?', type:'single', options:["Manual Checklist/Process", "Scripted Tasks", "Workflow Automation Tool", "Integrated HR/ITSM System", "N/A"]},
          { id: 'it-task-q3-satisfaction', text:'How satisfied are you with the IT onboarding process?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'it-task-q3-challenges', text:'What are the main IT onboarding challenges?', type:'multiple', options:["Time Consuming", "Inconsistent Setup", "Delays in Access", "Coordination with HR", "Asset Tracking", "No Major Challenges", "Other"]},
          // Task 4
          { id: 'it-task-q4', text: 'Offboarding employees (disabling accounts, retrieving hardware)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'it-task-q4-method', text:'How is IT offboarding handled?', type:'single', options:["Manual Checklist/Process", "Scripted Tasks", "Workflow Automation Tool", "Integrated HR/ITSM System", "N/A"]},
          { id: 'it-task-q4-satisfaction', text:'How satisfied are you with the IT offboarding process?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'it-task-q4-challenges', text:'What are the main IT offboarding challenges?', type:'multiple', options:["Security Risks (Lingering Access)", "Asset Retrieval", "Data Backup/Transfer", "Coordination with HR", "Timeliness", "No Major Challenges", "Other"]},
          // Task 5
          { id: 'it-task-q5', text: 'Managing user credentials, permissions, and access groups', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'it-task-q5-method', text:'How are credentials/permissions managed?', type:'single', options:["Manual Requests/Updates", "Spreadsheet Tracking", "Directory Services (AD/LDAP)", "Identity Management System", "N/A"]},
          { id: 'it-task-q5-satisfaction', text:'How satisfied are you with access management?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'it-task-q5-challenges', text:'What are the main access management challenges?', type:'multiple', options:["Slow Provisioning", "Inconsistent Permissions", "Auditing Difficulties", "Privilege Creep", "Security Risks", "No Major Challenges", "Other"]},
          // Task 6
          { id: 'it-task-q6', text: 'Software deployment, patching, and updates across devices', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'it-task-q6-method', text:'How are software updates/deployments handled?', type:'single', options:["Manual Installation per Device", "Scripting (e.g., PowerShell)", "Group Policy (GPO)", "Endpoint Management Software (e.g., Intune, SCCM)", "N/A"]},
          { id: 'it-task-q6-satisfaction', text:'How satisfied are you with software deployment?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'it-task-q6-challenges', text:'What are the main software deployment challenges?', type:'multiple', options:["Time Consuming", "Patching Failures", "Testing Compatibility", "User Disruptions", "Ensuring Compliance", "No Major Challenges", "Other"]},
          // Task 7
          { id: 'it-task-q7', text: 'System monitoring (servers, network), alert handling, and basic troubleshooting', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'it-task-q7-method', text:'How is system monitoring handled?', type:'single', options:["Manual Checks/No Proactive Monitoring", "Basic Ping/Status Checks", "Monitoring Software (e.g., Nagios, Zabbix, Datadog)", "Integrated ITSM/Monitoring Platform", "N/A"]},
          { id: 'it-task-q7-satisfaction', text:'How satisfied are you with monitoring/alerting?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'it-task-q7-challenges', text:'What are the main monitoring challenges?', type:'multiple', options:["Alert Fatigue/Noise", "False Positives/Negatives", "Lack of Root Cause Analysis", "Manual Response Required", "Integration with Ticketing", "No Major Challenges", "Other"]},
          // Task 8
          { id: 'it-task-q8', text: 'Writing or maintaining internal automation scripts or technical documentation', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'it-task-q8-method', text:'How is documentation/scripting managed?', type:'single', options:["Ad-hoc/Tribal Knowledge", "Shared Network Drive/Wiki", "Version Control System (e.g., Git)", "Dedicated Knowledge Base Platform", "N/A"]},
          { id: 'it-task-q8-satisfaction', text:'How satisfied are you with documentation/script management?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'it-task-q8-challenges', text:'What are the main documentation/scripting challenges?', type:'multiple', options:["Outdated Information", "Hard to Find", "Lack of Standardization", "Time Consuming to Write/Maintain", "Poor Version Control", "No Major Challenges", "Other"]},
          // Task 9
          { id: 'it-task-q9', text: 'Managing IT hardware/software asset inventory and licenses', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'it-task-q9-method', text:'How is IT asset inventory managed?', type:'single', options:["Manual Spreadsheet/List", "Basic Inventory Tool", "ITSM Asset Management Module", "Integrated Discovery/Management Tools", "N/A"]},
          { id: 'it-task-q9-satisfaction', text:'How satisfied are you with asset management?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'it-task-q9-challenges', text:'What are the main asset management challenges?', type:'multiple', options:["Inaccurate Data", "Tracking Asset Lifecycle", "License Compliance", "Manual Updates", "Integration with Purchasing/Onboarding", "No Major Challenges", "Other"]},
          // Task 10
          { id: 'it-task-q10', text: 'Performing routine system backups and recovery checks', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'it-task-q10-method', text:'How are backups managed?', type:'single', options:["Manual Backups (External Drives)", "Basic Backup Software (Local)", "Cloud Backup Service", "Enterprise Backup Solution", "N/A"]},
          { id: 'it-task-q10-satisfaction', text:'How satisfied are you with backup/recovery procedures?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'it-task-q10-challenges', text:'What are the main backup challenges?', type:'multiple', options:["Backup Failures", "Slow Recovery Times", "Testing Recovery Regularly", "Storage Costs", "Ensuring Full Coverage", "No Major Challenges", "Other"]},
          // Task 11
          { id: 'it-task-q11', text: 'Conducting security compliance checks and vulnerability assessments', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'it-task-q11-method', text:'How are security checks performed?', type:'single', options:["Manual Checklist Review", "Basic Scans", "Vulnerability Scanning Tools", "Managed Security Service (MSSP)", "Integrated Compliance/Security Platform", "N/A"]},
          { id: 'it-task-q11-satisfaction', text:'How satisfied are you with security check processes?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'it-task-q11-challenges', text:'What are the main security check challenges?', type:'multiple', options:["Time Consuming Manual Checks", "Prioritizing Vulnerabilities", "Remediation Tracking", "Reporting for Audits", "Staying Updated on Threats", "No Major Challenges", "Other"]},
          // Task 12
          { id: 'it-task-q12', text: 'Documentation and knowledge base maintenance', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } }, // Duplicate of Q8 Text? Combining/refining needed.
          { id: 'it-task-q12-method', text:'How is the knowledge base maintained?', type:'single', options:["Ad-hoc/Tribal Knowledge", "Shared Network Drive/Wiki", "ITSM Knowledge Module", "Dedicated KB Platform", "N/A"]},
          { id: 'it-task-q12-satisfaction', text:'How satisfied are you with knowledge base maintenance?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'it-task-q12-challenges', text:'What are the main knowledge base challenges?', type:'multiple', options:["Outdated Information", "Hard to Find Articles", "Lack of Contribution", "Poor Searchability", "Keeping it Organized", "No Major Challenges", "Other"]},
        ]
      },
    ]
  },
  // 9. Fitness & Wellness
  {
    id: 'fitness_wellness',
    label: 'Fitness & Wellness',
    icon: Dumbbell,
    sections: [
      {
        title: 'Industry Tasks: Fitness & Wellness',
        questions: [
          // Combined list from markdown files
          { id: 'fit-task-q1', text: 'Managing appointments, class bookings, or treatment schedules', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'fit-task-q2', text: 'Handling client/member check-ins and registrations', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'fit-task-q3', text: 'Processing payments, managing memberships/packages, and billing', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'fit-task-q4', text: 'Sending appointment/class reminders and promotional communications (email, SMS)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'fit-task-q5', text: 'Managing staff scheduling, availability, and payroll processing', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'fit-task-q6', text: 'Tracking inventory (towels, equipment, retail products) and reordering supplies', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'fit-task-q7', text: 'Responding to member/client inquiries and managing communications', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'fit-task-q8', text: 'Coordinating facility maintenance and cleaning schedules', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'fit-task-q9', text: 'Developing or scheduling new programs, classes, or workshops', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'fit-task-q10', text: 'Tracking client progress, updating records, or generating reports', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'fit-task-q11', text: 'Member management and communication (renewals, updates)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
        ]
      },
    ]
  },
    // 10. Manufacturing & Production
  {
    id: 'manufacturing',
    label: 'Manufacturing & Production',
    icon: Factory,
    sections: [
       {
        title: 'Industry Tasks: Manufacturing & Production',
        questions: [
          // Combined list from markdown files
          { id: 'mfg-task-q1', text: 'Creating, updating, or adjusting production schedules and work orders', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'mfg-task-q2', text: 'Manually tracking raw materials, work-in-progress (WIP), and finished goods inventory', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'mfg-task-q3', text: 'Recording quality control data, inspection results, and generating compliance reports', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'mfg-task-q4', text: 'Scheduling, tracking, and documenting machine maintenance (preventative and reactive)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'mfg-task-q5', text: 'Entering sales orders, creating shipping documents, and coordinating logistics', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'mfg-task-q6', text: 'Monitoring production line performance and manually compiling reports', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'mfg-task-q7', text: 'Managing supplier communications, purchase orders, and receiving materials', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'mfg-task-q8', text: 'Tracking employee time and attendance on the production floor', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'mfg-task-q9', text: 'Handling scrap reporting and material yield calculations', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'mfg-task-q10', text: 'Ensuring safety compliance and managing incident reporting', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
        ]
      },
    ]
  },
  // 11. Transportation & Logistics
  {
    id: 'logistics_supply_chain',
    label: 'Transportation & Logistics',
    icon: Truck,
    sections: [
      {
        title: 'Industry Tasks: Transportation & Logistics',
        questions: [
          // Task 1
          // Combined list from markdown files
          { id: 'log-task-q1', text: 'Manually tracking inventory levels (in warehouse, in transit) and reconciling stock counts', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'log-task-q2', text: 'Processing shipment orders, generating bills of lading, printing labels, and updating tracking information', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'log-task-q3', text: 'Planning delivery routes and coordinating driver/carrier schedules', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'log-task-q4', text: 'Filling out customs documentation, compliance paperwork (e.g., hazmat), and generating reports', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'log-task-q5', text: 'Manual customer or carrier follow-ups regarding shipment status, delays, or issues', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'log-task-q6', text: 'Managing warehouse operations (receiving, putaway, picking, packing)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'log-task-q7', text: 'Scheduling and tracking vehicle/fleet maintenance', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'log-task-q8', text: 'Auditing freight bills and managing carrier payments', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'log-task-q9', text: 'Monitoring fuel consumption and managing fuel reporting', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'log-task-q10', text: 'Handling proof of delivery (POD) collection and management', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'log-task-q11', text: 'Accident and incident reporting and documentation', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'log-task-q12', text: 'Dispatch and route optimization', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
        ]
      },
    ]
  },
   // 12. Property Management
  {
    id: 'property_management',
    label: 'Property Management',
    icon: BuildingIcon,
    sections: [
       {
        title: 'Industry Tasks: Property Management',
        questions: [
          // Combined list from markdown files
          { id: 'pm-task-q1', text: 'Handling tenant inquiries, complaints, and communications (calls, emails, portal)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'pm-task-q2', text: 'Collecting rent payments, tracking delinquencies, sending reminders, and processing fees', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'pm-task-q3', text: 'Receiving, coordinating, and tracking maintenance/repair requests with tenants and vendors', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'pm-task-q4', text: 'Managing lease agreements (creation, signing, renewal, termination)', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'pm-task-q5', text: 'Marketing vacant units, screening potential tenants, and managing applications', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'pm-task-q6', text: 'Coordinating tenant move-ins and move-outs, including inspections', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'pm-task-q7', text: 'Managing vendor relationships (scheduling, invoicing, payment)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'pm-task-q8', text: 'Generating financial reports for property owners (rent roll, P&L, owner statements)', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'pm-task-q9', text: 'Conducting property inspections and documenting findings', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'pm-task-q10', text: 'Managing property budgets and tracking expenses', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'pm-task-q11', text: 'Interacting with vendors and updating service records', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
        ]
      },
    ]
  },
    // 13. Hospitality & Tourism
  {
    id: 'hospitality_tourism',
    label: 'Hospitality & Tourism',
    icon: Plane,
    sections: [
      {
        title: 'Industry Tasks: Hospitality & Tourism',
        questions: [
           // Combined list from markdown files
          { id: 'hos-task-q1', text: 'Managing reservations (individual, group), confirming bookings, handling modifications/cancellations', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'hos-task-q2', text: 'Managing guest check-ins and check-outs', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'hos-task-q3', text: 'Handling routine guest inquiries, requests, and concierge services (phone, email, in-person)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'hos-task-q4', text: 'Coordinating housekeeping, room service, laundry, and maintenance tasks', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'hos-task-q5', text: 'Generating guest folios/invoices, processing payments, and reconciling accounts', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'hos-task-q6', text: 'Managing staff schedules for front desk, housekeeping, F&B, etc.', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'hos-task-q7', text: 'Managing inventory for amenities, linens, food & beverage, etc.', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'hos-task-q8', text: 'Responding to guest reviews and managing online reputation', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'hos-task-q9', text: 'Coordinating group bookings, event planning, and catering details', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'hos-task-q10', text: 'Managing loyalty program administration and member communications', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'hos-task-q11', text: 'Guest feedback collection and response', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
        ]
      },
    ]
  },
  // 14. Retail & Ecommerce
  {
    id: 'retail_ecommerce',
    label: 'Retail & Ecommerce',
    icon: Store,
    sections: [
        {
        title: 'Industry Tasks: Retail & Ecommerce',
        questions: [
          // Task 1
          { id: 'ret-task-q1', text: 'Manually updating stock levels/inventory across physical stores, online platforms, or marketplaces', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'ret-task-q1-method', text: 'How is inventory primarily updated?', type: 'single', options: ["Manual Counts/Updates per Channel", "Spreadsheet Imports", "POS Sync (Basic)", "Centralized Inventory Management System", "Integrated POS/Ecommerce/IMS", "N/A"] },
          { id: 'ret-task-q1-satisfaction', text: 'How satisfied are you with inventory management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'ret-task-q1-challenges', text: 'What are the main inventory challenges?', type: 'multiple', options: ["Overselling/Stockouts", "Inaccurate Counts", "Time Consuming Updates", "Managing Multiple Channels", "Slow Syncing", "No Major Challenges", "Other"] },
          // Task 2
          { id: 'ret-task-q2', text: 'Processing online or in-store orders (picking, packing, shipping) and updating order statuses', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'ret-task-q2-method', text: 'How are orders processed?', type: 'single', options: ["Manual Print/Pick/Pack", "Basic Order Management in Ecommerce Platform", "Warehouse Management System (WMS)", "Integrated Order/Inventory/Shipping System", "N/A"] },
          { id: 'ret-task-q2-satisfaction', text: 'How satisfied are you with order processing?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'ret-task-q2-challenges', text: 'What are the main order processing challenges?', type: 'multiple', options: ["Slow Fulfillment", "Picking/Packing Errors", "Shipping Label Generation", "Updating Order Status Manually", "Managing Returns", "No Major Challenges", "Other"] },
          // Task 3
          { id: 'ret-task-q3', text: 'Handling customer payments, processing refunds, and managing chargebacks', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'ret-task-q3-method', text:'How are payments/refunds handled?', type:'single', options:["Manual Processing/Separate Systems", "POS System", "Ecommerce Platform Gateway", "Integrated Payment/Accounting System", "N/A"]},
          { id: 'ret-task-q3-satisfaction', text:'How satisfied are you with payment/refund processing?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'ret-task-q3-challenges', text:'What are the main payment/refund challenges?', type:'multiple', options:["Manual Reconciliation", "High Transaction Fees", "Chargeback Disputes", "Slow Refund Processing", "Security Concerns", "No Major Challenges", "Other"]},
          // Task 4
          { id: 'ret-task-q4', text: 'Managing customer service inquiries (product questions, order issues, returns, complaints)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'ret-task-q4-method', text:'How are customer inquiries managed?', type:'single', options:["Direct Email/Phone (Manual Tracking)", "Shared Inbox/Spreadsheet", "Basic Helpdesk Software", "Integrated CRM/Helpdesk", "N/A"]},
          { id: 'ret-task-q4-satisfaction', text:'How satisfied are you with customer service management?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'ret-task-q4-challenges', text:'What are the main customer service challenges?', type:'multiple', options:["Slow Response Times", "Lack of Customer History", "Handling Returns/Exchanges", "Tracking Issues to Resolution", "Agent Training/Consistency", "No Major Challenges", "Other"]},
          // Task 5
          { id: 'ret-task-q5', text: 'Updating product information (descriptions, images, pricing) on website or POS', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'ret-task-q5-method', text:'How is product information updated?', type:'single', options:["Manual Update per Channel", "Spreadsheet Upload", "PIM Software", "Integrated Ecommerce/PIM/POS", "N/A"]},
          { id: 'ret-task-q5-satisfaction', text:'How satisfied are you with product info management?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'ret-task-q5-challenges', text:'What are the main product info challenges?', type:'multiple', options:["Time Consuming Updates", "Inconsistent Information", "Image/Media Handling", "Ensuring Accuracy", "Updating Pricing Quickly", "No Major Challenges", "Other"]},
          // Task 6
          { id: 'ret-task-q6', text: 'Coordinating with suppliers, placing purchase orders, and managing receiving', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'ret-task-q6-method', text:'How are supplier orders/receiving handled?', type:'single', options:["Manual Email/Phone Orders", "Spreadsheet Tracking", "Inventory Management Software POs", "EDI/Supplier Portal", "Integrated ERP/Inventory", "N/A"]},
          { id: 'ret-task-q6-satisfaction', text:'How satisfied are you with supplier coordination?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'ret-task-q6-challenges', text:'What are the main supplier coordination challenges?', type:'multiple', options:["Manual PO Creation", "Tracking Order Status", "Receiving Discrepancies", "Communication Delays", "Managing Lead Times", "No Major Challenges", "Other"]},
          // Task 7
          { id: 'ret-task-q7', text: 'Managing promotional campaigns, discounts, and loyalty programs', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'ret-task-q7-method', text:'How are promotions/loyalty managed?', type:'single', options:["Manual Setup per Channel", "POS Discount Feature", "Ecommerce Platform Promotions", "Dedicated Loyalty Platform", "Integrated Marketing/POS System", "N/A"]},
          { id: 'ret-task-q7-satisfaction', text:'How satisfied are you with promotion/loyalty management?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'ret-task-q7-challenges', text:'What are the main promotion/loyalty challenges?', type:'multiple', options:["Complex Setup", "Tracking Effectiveness/ROI", "Segmenting Customers", "Applying Discounts Correctly", "Communicating Offers", "No Major Challenges", "Other"]},
          // Task 8
          { id: 'ret-task-q8', text: 'Visual merchandising updates (in-store displays or website layout)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'ret-task-q8-method', text:'How is visual merchandising managed?', type:'single', options:["Manual Updates/Arrangement", "Using Planograms (Manual)", "Ecommerce Platform Theme Editor", "A/B Testing Tools", "N/A"]},
          { id: 'ret-task-q8-satisfaction', text:'How satisfied are you with visual merchandising processes?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'ret-task-q8-challenges', text:'What are the main visual merchandising challenges?', type:'multiple', options:["Time Consuming Updates", "Ensuring Consistency (Online/Offline)", "Testing Effectiveness", "Implementing Changes Quickly", "Coordinating with Marketing", "No Major Challenges", "Other"]},
          // Task 9
          { id: 'ret-task-q9', text: 'Managing employee schedules and tracking time/attendance', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'ret-task-q9-method', text:'How are staff schedules/time managed?', type:'single', options:["Manual Paper/Spreadsheet", "Time Clock (Manual Calculation)", "Scheduling Software", "Integrated POS/HR System", "N/A"]},
          { id: 'ret-task-q9-satisfaction', text:'How satisfied are you with staff scheduling/time tracking?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'ret-task-q9-challenges', text:'What are the main staff scheduling challenges?', type:'multiple', options:["Creating Schedules", "Handling Time Off/Swaps", "Calculating Payroll Hours", "Ensuring Coverage", "Communication", "No Major Challenges", "Other"]},
          // Task 10
          { id: 'ret-task-q10', text: 'Generating sales reports and analyzing performance data', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'ret-task-q10-method', text:'How are sales reports generated/analyzed?', type:'single', options:["Manual Export/Spreadsheet Analysis", "POS/Ecommerce Platform Reports", "BI Tool/Dedicated Analytics", "Integrated Reporting Dashboard", "N/A"]},
          { id: 'ret-task-q10-satisfaction', text:'How satisfied are you with sales reporting/analysis?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'ret-task-q10-challenges', text:'What are the main reporting challenges?', type:'multiple', options:["Time Consuming Report Generation", "Combining Data Sources", "Lack of Actionable Insights", "Difficult Data Visualization", "Accuracy Concerns", "No Major Challenges", "Other"]},
          // Task 11
          { id: 'ret-task-q11', text: 'Loss prevention monitoring and reporting', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'ret-task-q11-method', text:'How is loss prevention handled?', type:'single', options:["Manual Observation/Checks", "Basic Camera Review", "POS Exception Reports", "Dedicated LP Software/Analytics", "N/A"]},
          { id: 'ret-task-q11-satisfaction', text:'How satisfied are you with loss prevention methods?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'ret-task-q11-challenges', text:'What are the main loss prevention challenges?', type:'multiple', options:["Identifying Theft/Fraud", "Time Spent Reviewing Footage/Reports", "Internal Shrinkage", "Investigating Discrepancies", "Lack of Integrated Data", "No Major Challenges", "Other"]},
        ]
      },
    ]
  },
    // 15. Education & Training
  {
    id: 'education_training',
    label: 'Education & Training',
    icon: GraduationCap,
    sections: [
        {
        title: 'Industry Tasks: Education & Training',
        questions: [
           // Combined list from markdown files
          { id: 'edu-task-q1', text: 'Processing student/participant applications and managing enrollment records', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } }, // Often seasonal
          { id: 'edu-task-q1-method', text: 'How are applications/enrollment records managed?', type: 'single', options: ["Paper Forms/Manual Entry", "Spreadsheets/Basic Database", "Student Information System (SIS)", "Online Application Portal/Integrated System", "N/A"] },
          { id: 'edu-task-q1-satisfaction', text: 'How satisfied are you with application/enrollment management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'edu-task-q1-challenges', text: 'What are the main application/enrollment challenges?', type: 'multiple', options: ["Time Consuming Data Entry", "Document Management", "Communication with Applicants", "Tracking Application Status", "Reporting/Analytics", "No Major Challenges", "Other"] },
          
          { id: 'edu-task-q2', text: 'Taking attendance, tracking participation, and updating student/participant records', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'edu-task-q2-method', text: 'How is attendance/participation tracked?', type: 'single', options: ["Paper Rosters/Manual Entry", "Spreadsheets", "LMS/SIS Attendance Module", "Digital Check-in System/App", "N/A"] },
          { id: 'edu-task-q2-satisfaction', text: 'How satisfied are you with attendance/participation tracking?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'edu-task-q2-challenges', text: 'What are the main attendance tracking challenges?', type: 'multiple', options: ["Manual Process/Time Consuming", "Accuracy Concerns", "Late/Missing Entries", "Reporting/Analytics", "System Usability", "No Major Challenges", "Other"] },
          
          { id: 'edu-task-q3', text: 'Creating, adjusting, and communicating class, course, or training schedules', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } }, // Term-based
          { id: 'edu-task-q3-method', text: 'How are schedules created and communicated?', type: 'single', options: ["Manual Creation/Email Distribution", "Spreadsheets/PDFs", "SIS/LMS Schedule Module", "Dedicated Scheduling Platform with Portal", "N/A"] },
          { id: 'edu-task-q3-satisfaction', text: 'How satisfied are you with schedule management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'edu-task-q3-challenges', text: 'What are the main scheduling challenges?', type: 'multiple', options: ["Conflict Resolution", "Last-Minute Changes", "Communication to Stakeholders", "Resource Allocation", "Complexity Management", "No Major Challenges", "Other"] },
          
          { id: 'edu-task-q4', text: 'Grading assignments/exams, entering grades, and preparing report cards or certificates', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } }, // Varies by role
          { id: 'edu-task-q4-method', text: 'How is grading/reporting handled?', type: 'single', options: ["Manual Grading/Paper Records", "Spreadsheets/Gradebooks", "LMS/SIS Grading Module", "Integrated Assessment & Reporting System", "N/A"] },
          { id: 'edu-task-q4-satisfaction', text: 'How satisfied are you with the grading/reporting process?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'edu-task-q4-challenges', text: 'What are the main grading/reporting challenges?', type: 'multiple', options: ["Time Consuming", "Grade Entry Errors", "Feedback Distribution", "Report Generation", "System Limitations", "No Major Challenges", "Other"] },
          
          { id: 'edu-task-q5', text: 'Handling tuition/fee invoicing, tracking payments, and managing financial aid processes', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'edu-task-q5-method', text: 'How is tuition/payment processing handled?', type: 'single', options: ["Manual Invoices/Tracking", "Spreadsheets/Basic Accounting", "SIS Financial Module", "Integrated Payment/Financial Aid System", "N/A"] },
          { id: 'edu-task-q5-satisfaction', text: 'How satisfied are you with payment/financial aid processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'edu-task-q5-challenges', text: 'What are the main payment/financial challenges?', type: 'multiple', options: ["Payment Tracking", "Late/Missing Payments", "Aid Application Processing", "Reporting Requirements", "System Integration Issues", "No Major Challenges", "Other"] },
          
          { id: 'edu-task-q6', text: 'Managing classroom supplies ordering and event planning weekly/monthly', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'edu-task-q6-method', text: 'How are supplies/events managed?', type: 'single', options: ["Manual Lists/Planning", "Spreadsheets", "Basic Purchase Order System", "Integrated Procurement/Event Platform", "N/A"] },
          { id: 'edu-task-q6-satisfaction', text: 'How satisfied are you with supplies/event management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'edu-task-q6-challenges', text: 'What are the main supplies/event challenges?', type: 'multiple', options: ["Budget Tracking", "Approval Processes", "Inventory Management", "Vendor Coordination", "Communication/Planning", "No Major Challenges", "Other"] },
          
          { id: 'edu-task-q7', text: 'Communicating with students, parents, or participants regarding progress or administrative matters', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'edu-task-q7-method', text: 'How is stakeholder communication managed?', type: 'single', options: ["Individual Emails/Phone Calls", "Mass Emails/Newsletters", "SIS/LMS Communication Tools", "Dedicated Communication Platform", "N/A"] },
          { id: 'edu-task-q7-satisfaction', text: 'How satisfied are you with stakeholder communication?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'edu-task-q7-challenges', text: 'What are the main communication challenges?', type: 'multiple', options: ["Time Consuming", "Message Consistency", "Response Tracking", "Translation/Accessibility", "Contact Information Accuracy", "No Major Challenges", "Other"] },
          
          { id: 'edu-task-q8', text: 'Developing or updating curriculum, course materials, or training content', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } }, // Varies by role
          { id: 'edu-task-q8-method', text: 'How is curriculum/content development managed?', type: 'single', options: ["Individual Creation/Documents", "Shared Files/Templates", "Content Management System", "LMS with Content Authoring Tools", "N/A"] },
          { id: 'edu-task-q8-satisfaction', text: 'How satisfied are you with content development processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'edu-task-q8-challenges', text: 'What are the main content development challenges?', type: 'multiple', options: ["Time Constraints", "Collaboration Difficulties", "Version Control", "Alignment with Standards", "Distribution/Publishing", "No Major Challenges", "Other"] },
          
          { id: 'edu-task-q9', text: 'Coordinating substitute teachers or trainers', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'edu-task-q9-method', text: 'How are substitutes coordinated?', type: 'single', options: ["Manual Calls/Texts", "Spreadsheet Tracking", "Staff Management System", "Dedicated Substitute Platform", "N/A"] },
          { id: 'edu-task-q9-satisfaction', text: 'How satisfied are you with substitute coordination?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'edu-task-q9-challenges', text: 'What are the main substitute coordination challenges?', type: 'multiple', options: ["Finding Available Substitutes", "Last-Minute Absences", "Providing Materials/Instructions", "Qualification Matching", "Payment Processing", "No Major Challenges", "Other"] },
          
          { id: 'edu-task-q10', text: 'Preparing documentation for accreditation or compliance reporting', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'edu-task-q10-method', text: 'How is compliance/accreditation documentation managed?', type: 'single', options: ["Manual Document Collection", "Spreadsheets/Shared Folders", "Document Management System", "Compliance Management Platform", "N/A"] },
          { id: 'edu-task-q10-satisfaction', text: 'How satisfied are you with compliance/accreditation processes?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'edu-task-q10-challenges', text: 'What are the main compliance/accreditation challenges?', type: 'multiple', options: ["Time-Intensive Documentation", "Meeting Deadlines", "Staying Current with Requirements", "Report Generation", "Document Organization", "No Major Challenges", "Other"] },
          
          { id: 'edu-task-q11', text: 'Managing library resources or learning center operations', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'edu-task-q11-method', text: 'How are library/learning resources managed?', type: 'single', options: ["Manual Catalogs/Checkout", "Spreadsheet Inventory", "Basic Library Management System", "Integrated Digital Resource Platform", "N/A"] },
          { id: 'edu-task-q11-satisfaction', text: 'How satisfied are you with resource management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'edu-task-q11-challenges', text: 'What are the main resource management challenges?', type: 'multiple', options: ["Inventory Tracking", "Resource Acquisition", "Circulation Management", "Digital/Physical Integration", "Budget Constraints", "No Major Challenges", "Other"] },
        ]
      },
    ]
  },
  // 16. Software Development & Engineering
  {
    id: 'software_development',
    label: 'Software Development & Engineering',
    icon: Cpu,
    sections: [
      {
        title: 'Industry Tasks: Software Development & Engineering',
        questions: [
          { id: 'swd-task-q1', text: 'Conducting manual code reviews and providing feedback', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'swd-task-q1-method', text: 'How are code reviews conducted?', type: 'single', options: ["In-Person/Over-The-Shoulder", "Email/Document Comments", "Pull Request Comments (GitHub/GitLab/etc.)", "Dedicated Code Review Tool", "N/A"] },
          { id: 'swd-task-q1-satisfaction', text: 'How satisfied are you with the code review process?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'swd-task-q1-challenges', text: 'What are the main code review challenges?', type: 'multiple', options: ["Time Consuming", "Inconsistent Standards", "Feedback Clarity", "Review Thoroughness", "Knowledge Gaps", "No Major Challenges", "Other"] },
          
          { id: 'swd-task-q2', text: 'Managing bug tracking systems, triaging issues, coordinating resolution', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'swd-task-q2-method', text: 'How are bugs/issues tracked?', type: 'single', options: ["Email/Spreadsheets", "Shared Document/List", "Basic Issue Tracker", "Integrated Dev/Project Tool (JIRA, etc.)", "N/A"] },
          { id: 'swd-task-q2-satisfaction', text: 'How satisfied are you with bug/issue management?', type: 'scale', options: ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"] },
          { id: 'swd-task-q2-challenges', text: 'What are the main bug tracking challenges?', type: 'multiple', options: ["Issue Prioritization", "Incomplete Information", "Duplication/Tracking", "Communication/Status Updates", "Resolution Time", "No Major Challenges", "Other"] },
          
          { id: 'swd-task-q3', text: 'Writing and maintaining technical documentation or knowledge base articles', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'swd-task-q4', text: 'Setting up, configuring, and troubleshooting local development environments', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'swd-task-q5', text: 'Manually managing software releases, deployments, or CI/CD pipeline steps', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'swd-task-q6', text: 'Participating in daily stand-up meetings and providing status updates', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'swd-task-q7', text: 'Manual testing (functional, regression, UI/UX)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'swd-task-q8', text: 'Researching and managing third-party library dependencies and updates', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'swd-task-q9', text: 'Responding to ad-hoc technical support requests from internal teams', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'swd-task-q10', text: 'Refactoring existing code or addressing technical debt', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'swd-task-q11', text: 'Technical debt management discussions and planning', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
        ]
      },
    ]
  },
    // 17. Insurance
  {
    id: 'insurance',
    label: 'Insurance',
    icon: ShieldCheck,
    sections: [
       {
        title: 'Industry Tasks: Insurance',
        questions: [
          { id: 'ins-task-q1', text: 'Processing new policy applications (data entry, document verification, underwriting data collection)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'ins-task-q2', text: 'Calculating premiums and generating quotes for potential clients', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'ins-task-q3', text: 'Handling claims intake, verification, documentation gathering, and initial processing', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'ins-task-q4', text: 'Updating customer information, policy details, and beneficiary changes', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'ins-task-q5', text: 'Managing policy renewals, sending notifications, and processing endorsements', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'ins-task-q6', text: 'Tracking agent commissions, calculating payouts, and generating statements', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'ins-task-q7', text: 'Preparing and filing compliance documentation and regulatory reports', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'ins-task-q8', text: 'Communicating with agents/brokers regarding policies, commissions, or client issues', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'ins-task-q9', text: 'Responding to customer service inquiries regarding policies, billing, or claims', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'ins-task-q10', text: 'Managing customer correspondence (sending policy documents, letters, emails)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'ins-task-q11', text: 'Underwriting data collection and entry support', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
        ]
      },
    ]
  },
  // 18. Marketing & Advertising
  {
    id: 'marketing_advertising',
    label: 'Marketing & Advertising',
    icon: Mic,
    sections: [
        {
        title: 'Industry Tasks: Marketing & Advertising',
        questions: [
            // Task 1
            { id: 'mkt-task-q1', text: 'Creating content (blog posts, social media updates, ad copy, visuals, email copy)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'mkt-task-q1-method', text:'How is content creation primarily managed?', type:'single', options:["Manual Creation per Task", "Content Calendar/Spreadsheet", "Project Management Tool", "Content Marketing Platform", "N/A"]},
            { id: 'mkt-task-q1-satisfaction', text:'How satisfied are you with the content creation workflow?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
            { id: 'mkt-task-q1-challenges', text:'What are the main content creation challenges?', type:'multiple', options:["Time Consuming", "Generating Ideas", "Approval Process Bottlenecks", "Managing Assets", "Ensuring Brand Consistency", "No Major Challenges", "Other"]},
            // Task 2
            { id: 'mkt-task-q2', text: 'Scheduling and publishing content across various channels (social media, website, email)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'mkt-task-q2-method', text:'How is content scheduled/published?', type:'single', options:["Manual Posting per Channel", "Basic Social Media Scheduler", "Marketing Automation Platform", "Integrated Content/Social Platform", "N/A"]},
            { id: 'mkt-task-q2-satisfaction', text:'How satisfied are you with content publishing?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
            { id: 'mkt-task-q2-challenges', text:'What are the main publishing challenges?', type:'multiple', options:["Time Consuming Manual Posting", "Optimizing for Each Channel", "Tracking Performance Across Channels", "Coordinating Timing", "Last Minute Changes", "No Major Challenges", "Other"]},
            // Task 3
             { id: 'mkt-task-q3', text: 'Tracking campaign performance, analyzing data (web analytics, ad metrics), and generating reports', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
             { id: 'mkt-task-q3-method', text:'How is performance tracked/reported?', type:'single', options:["Manual Data Collection/Spreadsheets", "Platform-Specific Analytics Only", "Google Analytics/Looker Studio", "Marketing Analytics Platform", "Integrated Dashboard", "N/A"]},
             { id: 'mkt-task-q3-satisfaction', text:'How satisfied are you with performance tracking?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
             { id: 'mkt-task-q3-challenges', text:'What are the main tracking/reporting challenges?', type:'multiple', options:["Aggregating Data from Multiple Sources", "Time Consuming Report Generation", "Deriving Actionable Insights", "Attribution Tracking", "Visualizing Data Effectively", "No Major Challenges", "Other"]},
            // Task 4
            { id: 'mkt-task-q4', text: 'Communicating with clients or internal stakeholders (updates, approvals, feedback)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
            { id: 'mkt-task-q4-method', text:'How are client/stakeholder communications managed?', type:'single', options:["Primarily Email/Phone", "Spreadsheet Tracking", "Project Management Tool Comments/Tasks", "Client Portal", "N/A"]},
            { id: 'mkt-task-q4-satisfaction', text:'How satisfied are you with this communication process?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
            { id: 'mkt-task-q4-challenges', text:'What are the main communication challenges?', type:'multiple', options:["Keeping Everyone Informed", "Managing Feedback/Approvals", "Version Control (for creatives)", "Lack of Central Record", "Time Consuming Updates", "No Major Challenges", "Other"]},
            // Task 5
            { id: 'mkt-task-q5', text: 'Managing advertising budgets, tracking spend, and optimizing campaigns (e.g., Google Ads, social ads)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'mkt-task-q5-method', text:'How are ad budgets/campaigns managed?', type:'single', options:["Manual Spreadsheet Tracking", "Platform Interfaces Only", "Ad Management Software", "Integrated Analytics/Ad Platform", "N/A"]},
            { id: 'mkt-task-q5-satisfaction', text:'How satisfied are you with ad management?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
            { id: 'mkt-task-q5-challenges', text:'What are the main ad management challenges?', type:'multiple', options:["Tracking Spend Across Platforms", "Optimizing Bids/Budgets", "Reporting ROI", "Keeping Creatives Updated", "Attribution Complexity", "No Major Challenges", "Other"]},
            // Task 6
            { id: 'mkt-task-q6', text: 'Monitoring social media channels, engaging with audience, responding to comments/messages', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
            { id: 'mkt-task-q6-method', text:'How is social media engagement managed?', type:'single', options:["Manual Checks on Each Platform", "Basic Social Media Management Tool", "Platform with Unified Inbox", "Integrated Social/CRM Tool", "N/A"]},
            { id: 'mkt-task-q6-satisfaction', text:'How satisfied are you with social media engagement?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
            { id: 'mkt-task-q6-challenges', text:'What are the main social engagement challenges?', type:'multiple', options:["Time Consuming Monitoring", "Responding Quickly", "Handling Negative Comments", "Tracking Mentions", "Measuring Impact", "No Major Challenges", "Other"]},
            // Task 7
            { id: 'mkt-task-q7', text: 'Organizing, managing, and distributing creative assets (images, videos, brand guidelines)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'mkt-task-q7-method', text:'How are creative assets managed?', type:'single', options:["Shared Network Drive/Folders", "Cloud Storage (Dropbox/GDrive)", "Digital Asset Management (DAM) System", "Project Management Tool Attachments", "N/A"]},
            { id: 'mkt-task-q7-satisfaction', text:'How satisfied are you with asset management?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
            { id: 'mkt-task-q7-challenges', text:'What are the main asset management challenges?', type:'multiple', options:["Finding Assets", "Version Control", "Ensuring Brand Compliance", "Sharing with Stakeholders", "Storage Limits", "No Major Challenges", "Other"]},
             // Task 8
            { id: 'mkt-task-q8', text: 'Conducting competitive analysis and market research', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
            { id: 'mkt-task-q8-method', text:'How is research conducted?', type:'single', options:["Manual Web Searches/Browsing", "Spreadsheet Tracking", "Subscription Tools (e.g., SEMrush, Similarweb)", "Commissioned Reports", "N/A"]},
            { id: 'mkt-task-q8-satisfaction', text:'How satisfied are you with the research process?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
            { id: 'mkt-task-q8-challenges', text:'What are the main research challenges?', type:'multiple', options:["Time Consuming Data Collection", "Synthesizing Information", "Cost of Tools/Reports", "Staying Up-to-Date", "Finding Reliable Data", "No Major Challenges", "Other"]},
             // Task 9
            { id: 'mkt-task-q9', text: 'Managing email marketing lists, segmenting audiences, and executing email campaigns', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'mkt-task-q9-method', text:'How are email campaigns managed?', type:'single', options:["Manual List Management/Basic Email Client", "Spreadsheets for Lists", "Email Marketing Service (e.g., Mailchimp)", "Marketing Automation Platform", "Integrated CRM/Email Platform", "N/A"]},
            { id: 'mkt-task-q9-satisfaction', text:'How satisfied are you with email marketing management?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
            { id: 'mkt-task-q9-challenges', text:'What are the main email marketing challenges?', type:'multiple', options:["List Segmentation/Management", "Creating Engaging Content", "Ensuring Deliverability", "Tracking Performance/ROI", "Compliance (GDPR/CAN-SPAM)", "No Major Challenges", "Other"]},
            // Task 10
            { id: 'mkt-task-q10', text: 'Tracking marketing qualified leads (MQLs) and managing lead nurturing workflows', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'mkt-task-q10-method', text:'How are MQLs/nurturing handled?', type:'single', options:["Manual Tracking/Sales Handoff", "Spreadsheet", "CRM (Manual Workflows)", "Marketing Automation Platform Workflows", "N/A"]},
            { id: 'mkt-task-q10-satisfaction', text:'How satisfied are you with lead nurturing?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
            { id: 'mkt-task-q10-challenges', text:'What are the main lead nurturing challenges?', type:'multiple', options:["Defining/Tracking MQLs", "Creating Nurturing Content", "Automating Workflows", "Sales Handoff Process", "Measuring Effectiveness", "No Major Challenges", "Other"]},
            // Task 11
            { id: 'mkt-task-q11', text: 'Meeting coordination and note-taking for marketing projects', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'mkt-task-q11-method', text:'How are marketing meetings/notes handled?', type:'single', options:["Manual Scheduling/Paper Notes", "Shared Calendar/Digital Notes (Unstructured)", "Project Management Tool Tasks/Notes", "Meeting Transcription/Summary Tools", "N/A"]},
            { id: 'mkt-task-q11-satisfaction', text:'How satisfied are you with meeting coordination/notes?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
            { id: 'mkt-task-q11-challenges', text:'What are the main meeting/note challenges?', type:'multiple', options:["Scheduling Conflicts", "Taking Accurate Notes", "Distributing Action Items", "Finding Past Decisions", "Time Spent in Meetings", "No Major Challenges", "Other"]},
        ]
      },
    ]
  },
  // 19. Professional Services (Consulting, HR, General)
   {
    id: 'professional_services',
    label: 'Professional Services (Consulting, HR, etc.)',
    icon: Briefcase,
    sections: [
      {
        title: 'Industry Tasks: Professional Services',
        questions: [
          // Task 1
          { id: 'prof-task-q1', text: 'Preparing proposals, statements of work (SOWs), or engagement letters', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek }, roles: decisionMakers },
          { id: 'prof-task-q1-method', text:'How are proposals/SOWs created?', type:'single', options:["Manual Document Creation (Word/Pages)", "Using Standard Templates", "Proposal Generation Software", "Integrated CRM/Proposal Tool", "N/A"], roles: decisionMakers},
          { id: 'prof-task-q1-satisfaction', text:'How satisfied are you with the proposal process?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"], roles: decisionMakers},
          { id: 'prof-task-q1-challenges', text:'What are the main proposal challenges?', type:'multiple', options:["Time Consuming Creation", "Ensuring Accuracy/Consistency", "Customization Effort", "Tracking Proposal Status", "Approval Workflow", "No Major Challenges", "Other"], roles: decisionMakers},
          // Task 2
          { id: 'prof-task-q2', text: 'Conducting client research, discovery sessions, or needs analysis', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'prof-task-q2-method', text:'How is client research/discovery managed?', type:'single', options:["Manual Notes/Interviews", "Standard Questionnaire/Survey", "CRM Notes", "Collaborative Document/Platform", "N/A"]},
          { id: 'prof-task-q2-satisfaction', text:'How satisfied are you with the discovery process?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'prof-task-q2-challenges', text:'What are the main discovery challenges?', type:'multiple', options:["Organizing Information", "Ensuring All Key Areas Covered", "Sharing Findings with Team", "Time Consuming", "Extracting Actionable Insights", "No Major Challenges", "Other"]},
          // Task 3
          { id: 'prof-task-q3', text: 'Creating client presentations, reports, and deliverables', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'prof-task-q3-method', text:'How are client deliverables created?', type:'single', options:["Manual Creation (PowerPoint/Word/Excel)", "Using Standard Templates", "Reporting/BI Tool Exports", "Collaborative Platform Export", "N/A"]},
          { id: 'prof-task-q3-satisfaction', text:'How satisfied are you with deliverable creation?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'prof-task-q3-challenges', text:'What are the main deliverable challenges?', type:'multiple', options:["Time Consuming Formatting", "Data Accuracy", "Version Control", "Collaboration/Review Process", "Ensuring Professional Look", "No Major Challenges", "Other"]},
          // Task 4
          { id: 'prof-task-q4', text: 'Managing project timelines, resources, budgets, and task assignments', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek }, roles: implementers },
          { id: 'prof-task-q4-method', text:'How are projects managed?', type:'single', options:["Manual Tracking/Spreadsheets", "Basic Task List Apps", "Project Management Software (e.g., Asana, Jira)", "Integrated Professional Services Automation (PSA) Tool", "N/A"], roles: implementers},
          { id: 'prof-task-q4-satisfaction', text:'How satisfied are you with project management tools/process?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"], roles: implementers},
          { id: 'prof-task-q4-challenges', text:'What are the main project management challenges?', type:'multiple', options:["Tracking Progress Accurately", "Resource Allocation", "Budget Monitoring", "Task Dependencies", "Communication within Team/Client", "No Major Challenges", "Other"], roles: implementers},
          // Task 5
          { id: 'prof-task-q5', text: 'Logging billable hours, tracking project expenses, and managing client invoicing', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'prof-task-q5-method', text:'How is time/expense/invoicing handled?', type:'single', options:["Manual Timesheets/Expense Reports/Invoices", "Spreadsheets", "Time Tracking Software + Separate Invoicing", "Integrated PSA/Accounting Software", "N/A"]},
          { id: 'prof-task-q5-satisfaction', text:'How satisfied are you with time/expense/invoicing?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'prof-task-q5-challenges', text:'What are the main time/expense/invoicing challenges?', type:'multiple', options:["Inaccurate Time Tracking", "Lost Expense Receipts", "Manual Invoice Creation", "Delayed Billing/Payment", "Project Profitability Tracking", "No Major Challenges", "Other"]},
          // Task 6
          { id: 'prof-task-q6', text: 'Scheduling client meetings, preparing agendas, and follow-ups', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'prof-task-q6-method', text:'How are client meetings managed?', type:'single', options:["Manual Email/Phone Coordination", "Shared Calendar Invites", "Scheduling Links (e.g., Calendly)", "CRM Integrated Scheduling", "N/A"]},
          { id: 'prof-task-q6-satisfaction', text:'How satisfied are you with meeting management?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'prof-task-q6-challenges', text:'What are the main meeting management challenges?', type:'multiple', options:["Finding Mutual Availability", "Preparing Agendas", "Taking/Sharing Notes", "Tracking Action Items", "Time Spent Scheduling", "No Major Challenges", "Other"]},
          // Task 7 (HR Focus - Kept here as example)
          { id: 'prof-task-q7', text: 'Screening resumes/applications and scheduling interviews (HR focus)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } }, // Note: Might fit better in HR industry
          { id: 'prof-task-q7-method', text:'(HR) How are resumes screened/interviews scheduled?', type:'single', options:["Manual Review/Email Coordination", "Spreadsheet Tracking", "Applicant Tracking System (ATS)", "Integrated HRIS", "N/A"]},
          { id: 'prof-task-q7-satisfaction', text:'(HR) How satisfied are you with screening/scheduling?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'prof-task-q7-challenges', text:'(HR) What are the main screening/scheduling challenges?', type:'multiple', options:["Volume of Applications", "Time Consuming Review", "Candidate Communication", "Interviewer Coordination", "Tracking Candidate Status", "No Major Challenges", "Other"]},
          // Task 8 (HR Focus - Kept here as example)
          { id: 'prof-task-q8', text: 'Processing new hire paperwork and managing employee onboarding tasks (HR focus)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } }, // Note: Might fit better in HR industry
          { id: 'prof-task-q8-method', text:'(HR) How is onboarding paperwork handled?', type:'single', options:["Manual Paper Forms", "Emailing Fillable PDFs", "Onboarding Software", "Integrated HRIS", "N/A"]},
          { id: 'prof-task-q8-satisfaction', text:'(HR) How satisfied are you with the onboarding paperwork process?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'prof-task-q8-challenges', text:'(HR) What are the main onboarding paperwork challenges?', type:'multiple', options:["Manual Data Entry into Systems", "Collecting Forms on Time", "Ensuring Accuracy/Completeness", "Poor New Hire Experience", "Compliance Risks", "No Major Challenges", "Other"]},
           // Task 9
          { id: 'prof-task-q9', text: 'Managing client communications and relationship building', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'prof-task-q9-method', text:'How are ongoing client communications managed?', type:'single', options:["Primarily Email/Phone (Ad-hoc)", "Regular Check-in Calls (Manual Tracking)", "CRM Activity Logging", "Client Portal Updates", "N/A"]},
          { id: 'prof-task-q9-satisfaction', text:'How satisfied are you with client communication management?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'prof-task-q9-challenges', text:'What are the main client communication challenges?', type:'multiple', options:["Maintaining Regular Contact", "Tracking Interactions", "Sharing Information Internally", "Ensuring Client Satisfaction", "Time Consuming", "No Major Challenges", "Other"]},
          // Task 10
          { id: 'prof-task-q10', text: 'Developing or maintaining internal knowledge bases or best practices', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'prof-task-q10-method', text:'How is internal knowledge managed?', type:'single', options:["Informal/Tribal Knowledge", "Shared Drive/Documents", "Internal Wiki", "Dedicated Knowledge Management System", "N/A"]},
          { id: 'prof-task-q10-satisfaction', text:'How satisfied are you with internal knowledge management?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'prof-task-q10-challenges', text:'What are the main knowledge management challenges?', type:'multiple', options:["Information Hard to Find", "Outdated Content", "Lack of Contribution/Maintenance", "Poor Organization", "Onboarding New Team Members", "No Major Challenges", "Other"]},
          // Task 11
          { id: 'prof-task-q11', text: 'Business Process Outsourcing task coordination (if applicable)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'prof-task-q11-method', text:'(BPO) How are outsourced tasks coordinated?', type:'single', options:["Email/Manual Instructions", "Shared Spreadsheets", "Project Management Tool", "Vendor Portal", "N/A"]},
          { id: 'prof-task-q11-satisfaction', text:'(BPO) How satisfied are you with BPO task coordination?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'prof-task-q11-challenges', text:'(BPO) What are the main BPO coordination challenges?', type:'multiple', options:["Clear Instructions", "Tracking Progress/Quality", "Communication Delays", "Handling Exceptions", "Reporting", "No Major Challenges", "Other"]},
           // Task 12
          { id: 'prof-task-q12', text: 'Event Planning & Management coordination (if applicable)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'prof-task-q12-method', text:'(Events) How is event planning coordinated?', type:'single', options:["Manual Checklists/Spreadsheets", "Email/Calendar Coordination", "Project Management Tool", "Event Management Software", "N/A"]},
          { id: 'prof-task-q12-satisfaction', text:'(Events) How satisfied are you with event planning coordination?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'prof-task-q12-challenges', text:'(Events) What are the main event planning challenges?', type:'multiple', options:["Vendor Coordination", "Budget Tracking", "Timeline Management", "Attendee Communication/Registration", "On-site Logistics", "No Major Challenges", "Other"]},
           // Task 13
          { id: 'prof-task-q13', text: 'Administrative Services task coordination (if applicable)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'prof-task-q13-method', text:'(Admin) How are general admin tasks coordinated/managed?', type:'single', options:["Ad-hoc Requests/Email", "Shared To-Do List/Spreadsheet", "Task Management Software", "Virtual Assistant Platform", "N/A"]},
          { id: 'prof-task-q13-satisfaction', text:'(Admin) How satisfied are you with admin task coordination?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"]},
          { id: 'prof-task-q13-challenges', text:'(Admin) What are the main admin task challenges?', type:'multiple', options:["Prioritization", "Tracking Requests", "Communication Overhead", "Turnaround Time", "Lack of Standardization", "No Major Challenges", "Other"]},
        ]
      },
    ]
  },
   // 20. Automotive (Sales/Service)
  {
    id: 'automotive',
    label: 'Automotive (Sales/Service)',
    icon: Car,
    sections: [
        {
        title: 'Industry Tasks: Automotive Sales',
        roles: ['manager', 'contributor', 'director', 'owner', 'c-suite'], // Sales roles primarily
        questions: [
          // Task 1
          { id: 'auto-sales-q1', text: 'Managing incoming sales leads (web, phone, walk-in) and data entry into CRM', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'auto-sales-q1-method', text:'How are sales leads managed?', type:'single', options:["Manual Log/Sticky Notes", "Spreadsheet", "Basic Contact Manager", "Automotive CRM System", "N/A"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
          { id: 'auto-sales-q1-satisfaction', text:'How satisfied are you with lead management?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
          { id: 'auto-sales-q1-challenges', text:'What are the main lead management challenges?', type:'multiple', options:["Slow Lead Response", "Inconsistent Follow-Up", "Manual Data Entry", "Tracking Lead Source", "Assigning Leads", "No Major Challenges", "Other"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
          // Task 2
          { id: 'auto-sales-q2', text: 'Following up with potential customers (calls, emails, texts)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'auto-sales-q2-method', text:'How is customer follow-up primarily handled?', type:'single', options:["Manual Reminders/Calls", "Email Templates (Manual Send)", "CRM Tasks/Reminders", "Automated Sequences (CRM/Marketing Tool)", "N/A"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
          { id: 'auto-sales-q2-satisfaction', text:'How satisfied are you with the follow-up process?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
          { id: 'auto-sales-q2-challenges', text:'What are the main follow-up challenges?', type:'multiple', options:["Remembering to Follow Up", "Knowing What to Say", "Tracking Communication History", "Time Consuming", "Low Response Rates", "No Major Challenges", "Other"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
          // Task 3
           { id: 'auto-sales-q3', text: 'Preparing quotes, financing paperwork, and sales contracts', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'auto-sales-q3-method', text:'How is deal paperwork generated?', type:'single', options:["Manual Forms/Calculations", "Spreadsheet Templates", "Dealership Management System (DMS) Module", "Integrated DMS/CRM/Finance System", "N/A"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
           { id: 'auto-sales-q3-satisfaction', text:'How satisfied are you with paperwork generation?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
           { id: 'auto-sales-q3-challenges', text:'What are the main paperwork challenges?', type:'multiple', options:["Time Consuming", "Data Entry Errors", "Ensuring Compliance", "Getting Signatures", "Calculations (Finance/Lease)", "No Major Challenges", "Other"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
          // Task 4
           { id: 'auto-sales-q4', text: 'Updating vehicle inventory listings online and internally (photos, descriptions, pricing)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'auto-sales-q4-method', text:'How is inventory listed/updated?', type:'single', options:["Manual Entry per Website/Platform", "Spreadsheet Uploads", "DMS Inventory Module", "Inventory Syndication Service", "N/A"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
           { id: 'auto-sales-q4-satisfaction', text:'How satisfied are you with inventory listing?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
           { id: 'auto-sales-q4-challenges', text:'What are the main inventory listing challenges?', type:'multiple', options:["Time Consuming Photo/Data Entry", "Keeping Pricing Accurate", "Syndication Errors", "Removing Sold Units Quickly", "Writing Descriptions", "No Major Challenges", "Other"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
           // Task 5
          { id: 'auto-sales-q5', text: 'Coordinating vehicle test drives and appraisals', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'auto-sales-q5-method', text:'How are test drives/appraisals managed?', type:'single', options:["Manual Coordination", "Shared Calendar", "CRM Activity Tracking", "Dedicated Tool/App", "N/A"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
          { id: 'auto-sales-q5-satisfaction', text:'How satisfied are you with managing drives/appraisals?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
          { id: 'auto-sales-q5-challenges', text:'What are the main challenges?', type:'multiple', options:["Scheduling Conflicts", "Tracking Availability (Vehicle/Staff)", "Documenting Appraisals", "Customer Wait Times", "No Major Challenges", "Other"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
          // Task 6
          { id: 'auto-sales-q6', text: 'Managing customer handovers and delivery documentation', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'auto-sales-q6-method', text:'How are deliveries/handovers managed?', type:'single', options:["Manual Checklist/Paperwork", "DMS Delivery Module", "CRM Task Tracking", "N/A"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
          { id: 'auto-sales-q6-satisfaction', text:'How satisfied are you with the delivery process?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
          { id: 'auto-sales-q6-challenges', text:'What are the main delivery challenges?', type:'multiple', options:["Ensuring All Paperwork Complete", "Vehicle Prep Coordination", "Customer Scheduling", "Explaining Features", "Post-Delivery Follow-up", "No Major Challenges", "Other"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
        ]
      },
       {
        title: 'Industry Tasks: Automotive Service',
        roles: ['manager', 'contributor', 'director', 'owner', 'c-suite'], // Service roles primarily
        questions: [
           // Task 1
          { id: 'auto-svc-q1', text: 'Scheduling service appointments (phone, online requests)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'auto-svc-q1-method', text:'How are service appointments scheduled?', type:'single', options:["Manual Phone/Calendar", "Spreadsheet", "Basic Online Booking Form", "DMS Scheduling Module", "Integrated Online Booking/DMS", "N/A"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
          { id: 'auto-svc-q1-satisfaction', text:'How satisfied are you with service scheduling?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
          { id: 'auto-svc-q1-challenges', text:'What are the main service scheduling challenges?', type:'multiple', options:["Time Consuming Phone Calls", "Matching Technician Availability/Skills", "Managing Walk-ins", "Appointment Reminders", "Online Booking Integration", "No Major Challenges", "Other"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
           // Task 2
          { id: 'auto-svc-q2', text: 'Writing repair orders, documenting customer concerns, and communicating with technicians', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'auto-svc-q2-method', text:'How are repair orders (ROs) managed?', type:'single', options:["Manual Paper ROs", "Basic Digital Form/Template", "DMS Repair Order Module", "Tablet-based Inspection/RO System", "N/A"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
          { id: 'auto-svc-q2-satisfaction', text:'How satisfied are you with RO management?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
          { id: 'auto-svc-q2-challenges', text:'What are the main RO challenges?', type:'multiple', options:["Illegible Handwriting", "Incomplete Information", "Communicating with Techs", "Tracking Job Status", "Adding Parts/Labor Accurately", "No Major Challenges", "Other"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
           // Task 3
           { id: 'auto-svc-q3', text: 'Ordering parts, managing service parts inventory, and tracking status', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'auto-svc-q3-method', text:'How are parts ordered/managed?', type:'single', options:["Manual Phone Orders/Paper Catalogs", "Spreadsheet Tracking", "Online Supplier Portals", "DMS Parts Inventory Module", "Integrated Parts Ordering/Inventory", "N/A"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
           { id: 'auto-svc-q3-satisfaction', text:'How satisfied are you with parts management?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
           { id: 'auto-svc-q3-challenges', text:'What are the main parts challenges?', type:'multiple', options:["Stockouts/Delays", "Incorrect Parts Ordered", "Time Consuming Lookups", "Managing Core Returns", "Inventory Accuracy", "No Major Challenges", "Other"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
            // Task 4
           { id: 'auto-svc-q4', text: 'Processing warranty claims and submitting documentation', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'auto-svc-q4-method', text:'How are warranty claims processed?', type:'single', options:["Manual Paper Forms/Fax", "Manufacturer Web Portal (Manual Entry)", "DMS Warranty Module", "Integrated System", "N/A"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
           { id: 'auto-svc-q4-satisfaction', text:'How satisfied are you with warranty claim processing?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
           { id: 'auto-svc-q4-challenges', text:'What are the main warranty challenges?', type:'multiple', options:["Time Consuming Process", "Claim Rejections/Denials", "Documentation Requirements", "Tracking Claim Status", "Slow Reimbursement", "No Major Challenges", "Other"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
            // Task 5
           { id: 'auto-svc-q5', text: 'Invoicing customers for service, explaining charges, and processing payments', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
           { id: 'auto-svc-q5-method', text:'How is service invoicing/payment handled?', type:'single', options:["Manual Invoice/Cashier", "DMS Invoicing Module", "Online Payment Portal", "Integrated System", "N/A"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
           { id: 'auto-svc-q5-satisfaction', text:'How satisfied are you with service invoicing?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
           { id: 'auto-svc-q5-challenges', text:'What are the main service invoicing challenges?', type:'multiple', options:["Explaining Charges Clearly", "Processing Payments Quickly", "Handling Discounts/Coupons", "Accuracy", "Integration with RO/Parts", "No Major Challenges", "Other"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
            // Task 6
           { id: 'auto-svc-q6', text: 'Communicating service updates and completion status to customers', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
           { id: 'auto-svc-q6-method', text:'How are service updates communicated?', type:'single', options:["Manual Phone Calls/Voicemails", "Manual Texts/Emails", "Automated SMS/Email Updates (from DMS/Tool)", "Customer Portal", "N/A"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
           { id: 'auto-svc-q6-satisfaction', text:'How satisfied are you with customer communication?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
           { id: 'auto-svc-q6-challenges', text:'What are the main communication challenges?', type:'multiple', options:["Keeping Customers Informed", "Getting Approvals for Additional Work", "Explaining Technical Issues", "Time Spent on Calls/Messages", "Consistency", "No Major Challenges", "Other"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
           // Task 7
           { id: 'auto-svc-q7', text: 'Managing loaner vehicle coordination or shuttle services', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
           { id: 'auto-svc-q7-method', text:'How are loaners/shuttles managed?', type:'single', options:["Manual Log/Whiteboard", "Spreadsheet", "Calendar Tracking", "Dedicated Fleet/Loaner Software", "N/A"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
           { id: 'auto-svc-q7-satisfaction', text:'How satisfied are you with loaner/shuttle management?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
           { id: 'auto-svc-q7-challenges', text:'What are the main loaner/shuttle challenges?', type:'multiple', options:["Vehicle Availability", "Tracking Usage/Mileage", "Coordinating Pick-up/Drop-off", "Insurance/Documentation", "Scheduling Drivers (Shuttle)", "No Major Challenges", "Other"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
           // Task 8
           { id: 'auto-svc-q8', text: 'Vehicle inspection documentation', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
           { id: 'auto-svc-q8-method', text:'How are vehicle inspections documented?', type:'single', options:["Manual Paper Checklists", "Basic Digital Form", "Tablet-based Inspection Software", "Integrated DMS Inspection Module", "N/A"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
           { id: 'auto-svc-q8-satisfaction', text:'How satisfied are you with inspection documentation?', type:'scale', options:["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
           { id: 'auto-svc-q8-challenges', text:'What are the main inspection challenges?', type:'multiple', options:["Illegibility/Incompleteness", "Attaching Photos/Videos", "Generating Customer Reports", "Upselling Recommended Services", "Consistency Between Techs", "No Major Challenges", "Other"], roles: ['manager', 'contributor', 'director', 'owner', 'c-suite']},
        ]
      },
    ]
  },
   // 21. Field Services (Specialized Trades)
  {
    id: 'field_services',
    label: 'Field Services (Specialized Trades)',
    icon: Cog,
    sections: [
        {
        title: 'Industry Tasks: Field Services',
        questions: [
          // Combined list from markdown files
           { id: 'fsv-task-q1', text: 'Receiving service requests (calls, emails, forms) and creating/updating work orders', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
           { id: 'fsv-task-q2', text: 'Assigning work orders and dispatching field technicians based on location, skill, availability', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
           { id: 'fsv-task-q3', text: 'Manually tracking technician location and job status updates throughout the day', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay }, tooltip: 'Time spent checking in via phone/text or looking up status manually.' },
           { id: 'fsv-task-q4', text: 'Managing preventative maintenance schedules and creating recurring work orders', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'fsv-task-q5', text: 'Processing completed work orders, including technician notes, photos, parts used, and customer signatures', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
           { id: 'fsv-task-q6', text: 'Generating service reports for clients or internal records', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'fsv-task-q7', text: 'Managing service contracts and warranty information', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'fsv-task-q8', text: 'Ordering and managing inventory for service vehicle stock or warehouse parts', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'fsv-task-q9', text: 'Creating quotes/estimates for repair or installation work', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
           { id: 'fsv-task-q10', text: 'Invoicing for service work and tracking payments', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
        ]
      },
    ]
  },
  // 22. Human Resources (as a distinct department/function)
  {
    id: 'human_resources',
    label: 'Human Resources',
    icon: Users,
    sections: [
        {
        title: 'Industry Tasks: Recruitment & Onboarding',
        questions: [
           // Combined list from markdown files
           { id: 'hr-task-q1', text: 'Posting job openings on various platforms and managing applicant tracking system (ATS)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'hr-task-q2', text: 'Screening resumes/applications against job requirements', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'hr-task-q3', text: 'Scheduling and coordinating interviews between candidates and hiring managers', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'hr-task-q4', text: 'Managing candidate communication (updates, feedback, rejections)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'hr-task-q5', text: 'Preparing offer letters, employment contracts, and background check authorizations', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'hr-task-q6', text: 'Conducting background checks and reference checks', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'hr-task-q7', text: 'Processing new hire paperwork and managing onboarding tasks (I9, W4, benefits enrollment)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
        ]
      },
      {
        title: 'Industry Tasks: Employee Management & Payroll',
        questions: [
           { id: 'hr-task-q8', text: 'Processing payroll, ensuring accuracy, and handling deductions/garnishments', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
           { id: 'hr-task-q9', text: 'Managing employee benefits administration (enrollment, changes, vendor communication)', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
           { id: 'hr-task-q10', text: 'Tracking employee time off requests, accruals, and attendance records', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'hr-task-q11', text: 'Maintaining employee records (personnel files, performance reviews, training logs)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'hr-task-q12', text: 'Handling employee relations issues, investigations, and disciplinary actions', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'hr-task-q13', text: 'Managing performance review cycles and documentation', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } }, // Often cyclical
           { id: 'hr-task-q14', text: 'Ensuring compliance with labor laws and regulations (reporting, postings, policy updates)', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
           { id: 'hr-task-q15', text: 'Managing employee offboarding processes (exit interviews, final pay, COBRA)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
        ]
      },
    ]
  },
    // 23. Non-Profit
  {
    id: 'non_profit',
    label: 'Non-Profit Organizations',
    icon: Anchor,
    sections: [
        {
        title: 'Industry Tasks: Donor Management & Fundraising',
        questions: [
           { id: 'np-task-q1', text: 'Tracking donations, entering donor information into CRM/database', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'np-task-q2', text: 'Generating and sending donation acknowledgements and tax receipts', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'np-task-q3', text: 'Planning, executing, and tracking fundraising campaigns or events', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
           { id: 'np-task-q4', text: 'Researching grant opportunities, writing grant proposals, and managing grant reporting', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth }, roles: ['director', 'manager', 'owner', 'c-suite'] },
           { id: 'np-task-q5', text: 'Communicating with donors and supporters (newsletters, impact reports, appeals)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'np-task-q6', text: 'Managing donor stewardship activities and relationship building', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
        ]
      },
      {
        title: 'Industry Tasks: Volunteer & Program Management',
        questions: [
          { id: 'np-task-q7', text: 'Recruiting, screening, onboarding, and scheduling volunteers', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'np-task-q8', text: 'Communicating with volunteers regarding schedules, tasks, and appreciation', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'np-task-q9', text: 'Tracking program participation, collecting data, and measuring outcomes', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'np-task-q10', text: 'Generating reports for board members, funders, and stakeholders', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'np-task-q11', text: 'Managing program logistics (supplies, venues, participant communication)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'np-task-q12', text: 'Advocacy efforts and community outreach coordination', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
        ]
      },
    ]
  },
  // 24. Agriculture & Farming
  {
    id: 'agriculture',
    label: 'Agriculture & Farming',
    icon: Sprout, // Changed from Leaf
    sections: [
        {
        title: 'Industry Tasks: Agriculture & Farming',
        questions: [
          // Combined list from markdown files
          { id: 'agr-task-q1', text: 'Crop planning and rotation scheduling', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'agr-task-q2', text: 'Equipment maintenance logging and scheduling', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'agr-task-q3', text: 'Weather monitoring and response planning', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'agr-task-q4', text: 'Inventory management of seeds, feed, fertilizer, and supplies', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'agr-task-q5', text: 'Harvest scheduling and yield tracking/reporting', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } }, // Seasonal peak
          { id: 'agr-task-q6', text: 'Labor scheduling and management for farm workers', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'agr-task-q7', text: 'Compliance documentation and reporting (environmental, safety, organic)', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'agr-task-q8', text: 'Market price monitoring and sales planning/coordination', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'agr-task-q9', text: 'Irrigation scheduling and monitoring', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } }, // Seasonal
          { id: 'agr-task-q10', text: 'Pest and disease monitoring and record keeping', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'agr-task-q11', text: 'Tracking livestock records (health, breeding, feeding, inventory - if applicable)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
        ]
      },
    ]
  },
  // 25. Media & Entertainment
  {
    id: 'media_entertainment',
    label: 'Media & Entertainment',
    icon: Video,
    sections: [
        {
        title: 'Industry Tasks: Media & Entertainment',
        questions: [
            // Combined list from markdown files
            { id: 'med-task-q1', text: 'Content creation admin tasks (file management, uploads, metadata tagging)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'med-task-q2', text: 'Production scheduling and coordination (crew, talent, locations, resources)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'med-task-q3', text: 'Managing content libraries, digital assets, and archives', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'med-task-q4', text: 'Rights management, licensing administration, and royalty tracking/payments', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
            { id: 'med-task-q5', text: 'Content distribution and publishing across platforms (web, social, broadcast, streaming)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'med-task-q6', text: 'Audience engagement monitoring and community management (social media, forums)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
            { id: 'med-task-q7', text: 'Advertising sales coordination, campaign management, and reporting', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'med-task-q8', text: 'Talent booking, contract management, and scheduling', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'med-task-q9', text: 'Analyzing audience data, content performance, and market trends reporting', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'med-task-q10', text: 'Managing project budgets and tracking production expenses', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
        ]
      },
    ]
  },
  // 26. Energy & Utilities
  {
    id: 'energy_utilities',
    label: 'Energy & Utilities',
    icon: Fuel,
    sections: [
        {
        title: 'Industry Tasks: Energy & Utilities',
        questions: [
            // Combined list from markdown files
            { id: 'egy-task-q1', text: 'Monitoring grid/pipeline operations, SCADA systems, or plant performance dashboards', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
            { id: 'egy-task-q2', text: 'Customer billing generation, meter reading data processing, and payment handling/reconciliation', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
            { id: 'egy-task-q3', text: 'Scheduling and dispatching field crews for maintenance, repairs, or installations', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
            { id: 'egy-task-q4', text: 'Managing service orders, work permits, and safety documentation/checklists', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
            { id: 'egy-task-q5', text: 'Processing new service connections, transfers, or disconnections', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'egy-task-q6', text: 'Handling customer inquiries regarding outages, billing, or service issues', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
            { id: 'egy-task-q7', text: 'Managing asset inventory (poles, transformers, pipes, etc.) and maintenance records', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'egy-task-q8', text: 'Preparing regulatory compliance reports and filings', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
            { id: 'egy-task-q9', text: 'Analyzing energy consumption data and forecasting demand manually or using basic tools', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'egy-task-q10', text: 'Managing environmental compliance monitoring and reporting', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
            { id: 'egy-task-q11', text: 'Energy Trading data entry and reconciliation (if applicable)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
        ]
      },
    ]
  },
    // 27. Arts & Creative Services
  {
    id: 'arts_creative',
    label: 'Arts & Creative Services',
    icon: Palette,
    sections: [
        {
        title: 'Industry Tasks: Arts & Creative Services',
        questions: [
            // Combined list from markdown files
            { id: 'art-task-q1', text: 'Client communication regarding project briefs, feedback, and approvals', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
            { id: 'art-task-q2', text: 'Creating proposals, quotes, and contracts for creative projects', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'art-task-q3', text: 'Project management (tracking timelines, tasks, deliverables, milestones)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'art-task-q4', text: 'Managing creative assets, file organization, version control, and sharing', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            // { id: 'art-task-q5', text: 'Performing creative work (design, writing, photography, etc.) - Focus on non-creative surrounding tasks', type: 'text', tooltip:"Focus on time spent on surrounding administrative tasks, not the core creative work itself." }, // Non-time question removed for now
            { id: 'art-task-q6', text: 'Invoicing clients and tracking payments', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
            { id: 'art-task-q7', text: 'Marketing services and managing portfolio/website updates', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'art-task-q8', text: 'Coordinating with collaborators, printers, or other vendors', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'art-task-q9', text: 'Researching trends, inspiration, or technical information related to projects', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'art-task-q10', text: 'Managing software licenses and tool subscriptions', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
            { id: 'art-task-q11', text: 'Writing & Editing review cycles and feedback management', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
        ]
      },
    ]
  },
    // 28. Technology (General - Combining SW Dev, ITSM, and others)
  {
    id: 'technology_general',
    label: 'Technology (General)',
    icon: Sparkles,
    sections: [
        {
        title: 'Industry Tasks: Technology (General)',
        description: "Select time spent on tasks applicable to your role within the technology sector.",
        questions: [
            // Combined list from markdown files
            { id: 'tech-task-q1', text: 'Customer/Technical support ticket handling and resolution', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
            { id: 'tech-task-q2', text: 'Handling password resets and access management requests', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
            { id: 'tech-task-q3', text: 'Onboarding/offboarding users (internal or external)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'tech-task-q4', text: 'Software/System testing and quality assurance (manual)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'tech-task-q5', text: 'Conducting manual code reviews or reviewing technical designs', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
            { id: 'tech-task-q6', text: 'Managing bug tracking systems, triaging issues, coordinating resolution', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
            { id: 'tech-task-q7', text: 'Writing and maintaining technical documentation or knowledge base articles', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'tech-task-q8', text: 'Manually managing software releases, deployments, or CI/CD pipeline steps', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'tech-task-q9', text: 'Product management tasks (roadmap planning, feature prioritization, user stories)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'tech-task-q10', text: 'Sales engineering / Pre-sales technical support calls or demos', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'tech-task-q11', text: 'Managing cloud infrastructure (provisioning, monitoring, cost optimization)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'tech-task-q12', text: 'Data analysis, reporting, and business intelligence tasks (manual data gathering/reporting)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'tech-task-q13', text: 'User experience (UX) research coordination or design feedback management', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'tech-task-q14', text: 'Cybersecurity operations (manual log review, incident response coordination, compliance checks)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'tech-task-q15', text: 'Managing IT/Software asset inventory and licenses manually', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
        ]
      },
    ]
  },
  // 29. Government & Public Sector
  {
    id: 'government_public_sector',
    label: 'Government & Public Sector',
    icon: Scale,
    sections: [
        {
        title: 'Industry Tasks: Government & Public Sector',
        questions: [
             // Combined list from markdown files
            { id: 'gov-task-q1', text: 'Processing permits, licenses, or applications', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
            { id: 'gov-task-q2', text: 'Managing public records requests and retrieval', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'gov-task-q3', text: 'Handling citizen inquiries (phone, email, in-person) and routing/resolving issues', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
            { id: 'gov-task-q4', text: 'Preparing and filing compliance reports and documentation', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
            { id: 'gov-task-q5', text: 'Budget tracking, allocation documentation, and financial reporting', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'gov-task-q6', text: 'Managing program enrollment, eligibility verification, and participant tracking', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'gov-task-q7', text: 'Grant application review, management, and reporting', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
            { id: 'gov-task-q8', text: 'Preparing agendas, minutes, and materials for committee or public meetings', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'gov-task-q9', text: 'Scheduling and documenting inspections or audits', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'gov-task-q10', text: 'Administering elections or voting processes (if applicable)', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } }, // Cyclical
        ]
      },
    ]
  },
    // 30. Home & Personal Services (Distinct from specialized Field/Home Services)
  {
    id: 'home_personal_services',
    label: 'Home & Personal Services',
    icon: PawPrint,
    sections: [
        {
        title: 'Industry Tasks: Home & Personal Services',
        description: "Tasks related to services like cleaning, pet care, personal care, child care, elder care, etc.",
        questions: [
             // Combined list from markdown files
            { id: 'hps-task-q1', text: 'Client scheduling, appointment confirmations, and reminders', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
            { id: 'hps-task-q2', text: 'Managing client intake forms and collecting necessary information', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'hps-task-q3', text: 'Communicating with clients regarding service details, changes, or feedback', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
            { id: 'hps-task-q4', text: 'Assigning staff/providers to clients or jobs', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
            { id: 'hps-task-q5', text: 'Tracking service completion and logging notes/details', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
            { id: 'hps-task-q6', text: 'Invoicing clients and processing payments', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'hps-task-q7', text: 'Managing staff schedules, time tracking, and payroll', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'hps-task-q8', text: 'Ordering and managing supplies needed for services', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'hps-task-q9', text: 'Marketing services and managing online presence (website, social media)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
            { id: 'hps-task-q10', text: 'Ensuring compliance with licensing or safety regulations', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
        ]
      },
    ]
  },
];

// --- Utility Function --- // MODIFIED TO INCLUDE COMMON SECTIONS

// Function to get relevant questions based on user selections
export const getRelevantQuestions = (
  selectedIndustryId: string | null,
  selectedRoleId: string | null,
  selectedSizeId: string | null
): { relevantIndustry: Industry | null; relevantSections: Section[] } => {
  console.log("[getRelevantQuestions] Input:", { selectedIndustryId, selectedRoleId, selectedSizeId }); // Log inputs

  if (!selectedIndustryId || !selectedRoleId || !selectedSizeId) {
    console.log("[getRelevantQuestions] Missing input, returning empty.");
    return { relevantIndustry: null, relevantSections: [] };
  }

  const industry = industries.find((ind) => ind.id === selectedIndustryId);
  console.log("[getRelevantQuestions] Found Industry:", industry?.label);

  if (!industry) {
    console.log("[getRelevantQuestions] Industry not found, returning empty.");
    return { relevantIndustry: null, relevantSections: [] };
  }

  // --- TEMPORARY DEBUGGING: Focus ONLY on industry task sections --- 
  console.log("[getRelevantQuestions] Filtering industry sections...");
  const industrySectionsFiltered = industry.sections
    // Ensure we ONLY check sections that are meant for industry tasks
    .filter(section => section.title.startsWith('Industry Tasks:')) 
    .map((section) => {
      console.log(`[getRelevantQuestions] Checking section: "${section.title}"`);
      // Filter questions within the industry section by role/size
      const relevantQuestions = section.questions.filter((question) => {
        const roleMatch = !question.roles || question.roles.includes(selectedRoleId);
        const sizeMatch = !question.sizes || question.sizes.includes(selectedSizeId as BusinessSize);
        // console.log(`[getRelevantQuestions]   Question "${question.id}": RoleMatch=${roleMatch}, SizeMatch=${sizeMatch}`); // Verbose log if needed
        return roleMatch && sizeMatch;
      });
      console.log(`[getRelevantQuestions]   Found ${relevantQuestions.length} relevant questions for this section.`);
      // Only include the section if it has relevant questions after filtering
      return relevantQuestions.length > 0 ? { ...section, questions: relevantQuestions } : null;
    })
    .filter(section => section !== null) as Section[];
    
  console.log("[getRelevantQuestions] Filtered Industry Sections:", industrySectionsFiltered); // Log result before combining

  // --- Temporarily disable adding common sections for debugging --- 
  // const commonSectionsFiltered = [...]; 
  // const relevantSections = [...industrySectionsFiltered, ...commonSectionsFiltered];
  const relevantSections = industrySectionsFiltered; // JUST use industry sections for now

  console.log("[getRelevantQuestions] Final relevantSections returned:", relevantSections); 
  return { relevantIndustry: industry, relevantSections };
}; 