import { Building, UtensilsCrossed, Landmark, Banknote, Home, HeartPulse, Server, Dumbbell, Factory, Truck, Building2, Plane, Store, GraduationCap, Library, MonitorPlay, ShieldCheck, Hammer, Handshake, Car, Wrench, Users, Anchor, Leaf } from "lucide-react"; // Added more icons

// Types for industry data based on TimeAudit.md
export type Role = string; // e.g., 'owner', 'c-suite', 'director', 'manager', 'contributor'
export type BusinessSize = 'small' | 'medium' | 'large'; // Enforce specific values

export interface TimeEstimateOptions {
  hoursPerDay?: string[];
  hoursPerWeek?: string[];
  hoursPerMonth?: string[];
  hoursPerTransaction?: string[];
}

export type QuestionType = 'single' | 'multiple' | 'scale' | 'text' | 'timeEstimate';

export interface Question {
  id: string; // Unique identifier for the question (e.g., 'construction-q1')
  text: string;
  type: QuestionType;
  options?: string[]; // For 'single', 'multiple', 'scale' choice
  timeOptions?: TimeEstimateOptions; // For 'timeEstimate' type
  roles?: Role[]; // Roles this question applies to (if undefined, applies to all)
  sizes?: BusinessSize[]; // Business sizes this question applies to (if undefined, applies to all)
  tooltip?: string; // Optional tooltip for clarification
  // Potential future fields: calculationWeight, category, etc.
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

// --- Static Data ---

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

// Default Time Estimate Options
const defaultTimeOptions: TimeEstimateOptions = {
    hoursPerDay: ['0-1', '1-2', '2-4', '4-6', '6+'],
    hoursPerWeek: ['0-5', '5-10', '10-20', '20-30', '30-40', '40+'],
    hoursPerMonth: ['0-20', '20-40', '40-80', '80-120', '120-160', '160+'],
};

// --- Industry Questionnaire Data ---
// *****************************************************************************
// IMPORTANT: The questions below are placeholders based on initial analysis.
//            You MUST manually review and populate this section with the
//            accurate and complete set of questions from the
//            @TimeAudit.md, @time-audit-1.md, @time-audit-2.md, @time-audit-3.md
//            files, ensuring correct types, options, roles, and sizes.
// *****************************************************************************
export const industries: Industry[] = [
  // --- Construction ---
  {
    id: 'construction',
    label: 'Construction',
    icon: Building,
    sections: [
      {
        title: 'Project Coordination & Management',
        questions: [
          { id: 'con-q1', text: 'Coordinating daily work assignments and dispatching teams', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'con-q2', text: 'Preparing detailed quotes and cost estimates', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek }, roles: ['owner', 'manager'] },
          { id: 'con-q3', text: 'Generating invoices and tracking payments', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'con-q4', text: 'Logging hours, managing shift schedules', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'con-q5', text: 'Ordering materials and tracking deliveries', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'con-q6', text: 'Creating progress reports, safety logs, and jobsite documentation', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'con-q7', text: 'Which project management software do you currently use?', type: 'single', options: ['Procore', 'Buildertrend', 'CoConstruct', 'Spreadsheets/Manual', 'Other', 'None'], tooltip: 'Select the primary tool used.' },
          { id: 'con-q8', text: 'How satisfied are you with your current process for change order management?', type: 'scale', options: ['Very Dissatisfied', 'Dissatisfied', 'Neutral', 'Satisfied', 'Very Satisfied'] },
        ],
      },
      {
        title: 'Client & Subcontractor Communication',
        questions: [
           { id: 'con-c1', text: 'Handling routine client inquiries and updates', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
           { id: 'con-c2', text: 'Managing communication and documentation with subcontractors', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
        ],
      },
      {
        title: 'Role-Specific (Owner/C-Suite)',
        roles: ['owner', 'c-suite'],
        questions: [
            { id: 'con-r1', text: 'Time spent managing strategic partnerships vs. daily operations?', type: 'scale', options: ['Mostly Strategic', 'Balanced', 'Mostly Operational'] },
        ]
      },
      {
        title: 'Size Considerations (Small Business)',
        sizes: ['small'],
        questions: [
            { id: 'con-s1', text: 'Do budget constraints significantly impact adopting new tech?', type: 'single', options: ['Yes', 'No', 'Somewhat'] },
        ]
      }
      // !! Add more sections and questions for Construction from Markdown !!
    ],
  },
  // --- Restaurant ---
  {
    id: 'restaurant',
    label: 'Restaurant',
    icon: UtensilsCrossed,
    sections: [
      {
        title: 'Operations & Kitchen Management',
        questions: [
          { id: 'res-q1', text: 'Entering/reconciling orders between POS and kitchen systems', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'res-q2', text: 'Tracking food, beverage, and supply levels', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'res-q3', text: 'Managing staff schedules and shift swaps', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'res-q4', text: 'Recording hours, processing payroll, and managing tips', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'res-q5', text: 'Manually managing reservations, waitlists, and table statuses', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'res-q6', text: 'Which systems are used for online ordering/delivery integration?', type: 'multiple', options: ['DoorDash', 'Grubhub', 'Uber Eats', 'Direct Website', 'Phone Orders Only', 'Other'], tooltip: 'Select all that apply.' },
        ],
      },
      // !! Add more sections and questions for Restaurant from Markdown !!
    ],
  },
  // --- Legal ---
  {
    id: 'legal',
    label: 'Legal',
    icon: Landmark,
    sections: [
      {
        title: 'Case & Client Management',
        questions: [
          { id: 'leg-q1', text: 'Organizing and archiving case files', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'leg-q2', text: 'Scheduling court dates, client meetings, and deadlines', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'leg-q3', text: 'Performing legal research and entering case data', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'leg-q4', text: 'Preparing legal documents and contracts', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'leg-q5', text: 'Logging billable hours and generating invoices', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'leg-q6', text: 'Handling routine client inquiries', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'leg-q7', text: 'What is your primary method for document management?', type: 'single', options: ['Cloud Storage (Dropbox, GDrive)', 'Dedicated Legal Software (Clio, MyCase)', 'Local Server/Folders', 'Physical Files Primarily', 'Other'] },
        ],
      },
      // !! Add more sections and questions for Legal from Markdown !!
    ],
  },
  // --- Real Estate ---
   {
    id: 'real_estate',
    label: 'Real Estate',
    icon: Building2,
    sections: [
        {
            title: 'Listings & Client Interaction',
            questions: [
                { id: 'rea-q1', text: 'Creating and updating property listings', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
                { id: 'rea-q2', text: 'Tracking leads and following up with clients', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
                { id: 'rea-q3', text: 'Coordinating property tours, meetings, open houses', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
                { id: 'rea-q4', text: 'Processing rental payments and transaction fees', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
                { id: 'rea-q5', text: 'Coordinating property maintenance requests', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
                { id: 'rea-q6', text: 'Which CRM do you primarily use?', type: 'single', options: ['Follow Up Boss', 'Top Producer', 'kvCORE', 'Spreadsheet/Manual', 'Brokerage Provided', 'Other', 'None'] },
            ]
        },
        // !! Add more sections and questions for Real Estate from Markdown !!
    ]
  },
   // --- Accounting & Finance ---
   {
    id: 'accounting_finance',
    label: 'Accounting & Finance',
    icon: Banknote,
    sections: [
      {
        title: 'Financial Operations',
        questions: [
          { id: 'fin-q1', text: 'Manually inputting financial transactions', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'fin-q2', text: 'Generating invoices and reconciling payments', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'fin-q3', text: 'Reconciling bank statements', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'fin-q4', text: 'Processing payroll and tax filings', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'fin-q5', text: 'Compiling financial reports and performance metrics', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'fin-q6', text: 'Tracking expenses and performing reconciliations', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'fin-q7', text: 'How integrated is your accounting software with other business systems (CRM, invoicing)?', type: 'scale', options: ['Not Integrated', 'Slightly Integrated', 'Moderately Integrated', 'Highly Integrated', 'Fully Integrated'] },
        ]
      },
       // !! Add more sections and questions for Accounting/Finance from Markdown !!
    ]
  },
  // --- Home Services ---
  {
    id: 'home_services',
    label: 'Home Services',
    icon: Home, // Could use Wrench if more specific?
    sections: [
      {
        title: 'Customer & Job Management',
        questions: [
          { id: 'hsv-q1', text: 'Responding to customer inquiries and entering leads', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'hsv-q2', text: 'Scheduling appointments and dispatching crews', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'hsv-q3', text: 'Planning job details for field crews', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'hsv-q4', text: 'Generating invoices and tracking payments', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'hsv-q5', text: 'Recording job details, tracking time spent', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'hsv-q6', text: 'Handling social media updates and promotions', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'hsv-q7', text: 'How do technicians typically receive job information and updates?', type: 'single', options: ['Verbal/Phone', 'Text Message', 'Email Printouts', 'Mobile App/Software', 'Other'] },
        ]
      },
      // !! Add more sections and questions for Home Services from Markdown !!
    ]
  },
  // --- Healthcare ---
  {
    id: 'healthcare',
    label: 'Healthcare',
    icon: HeartPulse,
    sections: [
      {
        title: 'Patient & Practice Management',
        questions: [
          { id: 'hea-q1', text: 'Managing patient appointments and check-ins', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'hea-q2', text: 'Updating patient records and medical history (EHR/EMR)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'hea-q3', text: 'Processing insurance claims and billing', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'hea-q4', text: 'Handling prescription refill requests and follow-ups', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'hea-q5', text: 'Tracking medical supplies and managing reordering', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'hea-q6', text: 'Coordinating lab tests and imaging appointments', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'hea-q7', text: 'How much time is spent on prior authorization processes weekly?', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
        ]
      },
      // !! Add more sections and questions for Healthcare from Markdown !!
    ]
  },
  // --- IT & ITSM ---
  {
    id: 'it_itsm',
    label: 'IT & ITSM',
    icon: Server,
    sections: [
      {
        title: 'Service Desk & Operations',
        questions: [
          { id: 'it-q1', text: 'Handling password resets and access management requests', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'it-q2', text: 'Processing and resolving IT support tickets', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'it-q3', text: 'Onboarding/offboarding employees (IT tasks)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'it-q4', text: 'Managing user credentials and permissions', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'it-q5', text: 'Software provisioning, patching, and updates', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'it-q6', text: 'Writing/maintaining internal automation scripts/documentation', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'it-q7', text: 'How automated is your user onboarding/offboarding process?', type: 'scale', options: ['Manual', 'Partially Automated', 'Mostly Automated', 'Fully Automated'] },
        ]
      },
       // !! Add more sections and questions for IT/ITSM from Markdown !!
    ]
  },
  // --- Fitness & Wellness ---
  {
    id: 'fitness_wellness',
    label: 'Fitness & Wellness',
    icon: Dumbbell,
    sections: [
      {
        title: 'Client & Facility Management',
        questions: [
          { id: 'fit-q1', text: 'Managing appointments, class bookings, schedules', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'fit-q2', text: 'Handling client check-ins and registrations', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'fit-q3', text: 'Processing payments, billing, and invoicing', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'fit-q4', text: 'Sending appointment reminders and promotional messages', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'fit-q5', text: 'Managing staff scheduling and payroll', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'fit-q6', text: 'Tracking supplies/inventory (towels, equipment, products)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
        ]
      },
      // !! Add more sections and questions for Fitness/Wellness from Markdown !!
    ]
  },
  // --- Manufacturing ---
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    icon: Factory,
    sections: [
       {
        title: 'Production & Operations',
        questions: [
          { id: 'mfg-q1', text: 'Updating production schedules or adjusting orders', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'mfg-q2', text: 'Manually tracking raw materials and finished goods inventory', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'mfg-q3', text: 'Recording inspection data and generating compliance reports', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'mfg-q4', text: 'Scheduling and tracking machine maintenance', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'mfg-q5', text: 'Entering sales orders, coordinating shipments, managing logistics', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'mfg-q6', text: 'How reliant are you on manual data entry for production reporting?', type: 'scale', options: ['Very Reliant', 'Reliant', 'Somewhat Reliant', 'Minimally Reliant', 'Not Reliant (Automated)'] },
        ]
      },
       // !! Add more sections and questions for Manufacturing from Markdown !!
    ]
  },
  // --- Logistics & Supply Chain ---
  {
    id: 'logistics_supply_chain',
    label: 'Logistics & Supply Chain',
    icon: Truck,
    sections: [
      {
        title: 'Inventory & Shipment Management',
        questions: [
          { id: 'log-q1', text: 'Manually tracking inventory levels and reconciling stock counts', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'log-q2', text: 'Processing shipment orders, printing labels, updating tracking', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'log-q3', text: 'Planning delivery routes and coordinating driver schedules', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'log-q4', text: 'Filling out customs/compliance paperwork and generating reports', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'log-q5', text: 'Manual customer/carrier follow-ups, status reports, inquiries', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
        ]
      },
      // !! Add more sections and questions for Logistics from Markdown !!
    ]
  },
   // --- Property Management ---
   {
    id: 'property_management',
    label: 'Property Management',
    icon: Building2,
    sections: [
       {
        title: 'Tenant & Maintenance Coordination',
        questions: [
          { id: 'pm-q1', text: 'Handling tenant calls/emails regarding issues/inquiries', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'pm-q2', text: 'Tracking rent payments, sending reminders, invoicing', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'pm-q3', text: 'Coordinating maintenance/repair requests with tenants/vendors', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'pm-q4', text: 'Managing lease agreements (creation, renewal, termination)', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'pm-q5', text: 'Interacting with vendors (scheduling, payment), updating records', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'pm-q6', text: 'Generating financial reports (rent roll, P&L) for owners', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
        ]
      },
      // !! Add more sections and questions for Property Mgmt from Markdown !!
    ]
  },
  // --- Hospitality & Tourism ---
  {
    id: 'hospitality_tourism',
    label: 'Hospitality & Tourism',
    icon: Plane,
    sections: [
      {
        title: 'Guest Services & Operations',
        questions: [
          { id: 'hos-q1', text: 'Updating reservations, confirming bookings, handling cancellations', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'hos-q2', text: 'Managing guest check-ins and check-outs', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'hos-q3', text: 'Handling routine guest inquiries (phone, email, in-person)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'hos-q4', text: 'Coordinating room cleaning, laundry, and maintenance tasks', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'hos-q5', text: 'Generating invoices, processing payments, reconciling accounts', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
        ]
      },
      // !! Add more sections and questions for Hospitality from Markdown !!
    ]
  },
  // --- Retail & Ecommerce ---
  {
    id: 'retail_ecommerce',
    label: 'Retail & Ecommerce',
    icon: Store,
    sections: [
        {
        title: 'Inventory & Order Management',
        questions: [
          { id: 'ret-q1', text: 'Manually updating stock levels across platforms/locations', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'ret-q2', text: 'Processing online/in-store orders and updating statuses', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'ret-q3', text: 'Handling payments, refunds, and chargebacks', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'ret-q4', text: 'Managing customer inquiries (product, order issues, returns)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'ret-q5', text: 'Updating product descriptions, images, pricing online', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'ret-q6', text: 'Coordinating with suppliers for reordering/new products', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'ret-q7', text: 'Which e-commerce platform do you use primarily?', type: 'single', options: ['Shopify', 'WooCommerce', 'BigCommerce', 'Magento', 'Custom', 'Other', 'N/A (Brick & Mortar only)'] },
        ]
      },
      // !! Add more sections and questions for Retail/Ecommerce from Markdown !!
    ]
  },
  // --- Education & Training ---
  {
    id: 'education_training',
    label: 'Education & Training',
    icon: GraduationCap,
    sections: [
        {
        title: 'Student & Administration Management',
        questions: [
          { id: 'edu-q1', text: 'Processing student applications and enrollment records', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'edu-q2', text: 'Taking daily attendance and updating student records', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'edu-q3', text: 'Creating and adjusting class schedules', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'edu-q4', text: 'Entering grades and preparing report cards', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'edu-q5', text: 'Handling tuition invoicing, fee tracking, payment processing', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'edu-q6', text: 'Managing classroom supplies ordering and event planning', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
        ]
      },
      // !! Add more sections and questions for Education from Markdown !!
    ]
  },
  // --- Software Development ---
  {
    id: 'software_development',
    label: 'Software Development',
    icon: MonitorPlay,
    sections: [
      {
        title: 'Development Lifecycle & Operations',
        questions: [
          { id: 'swd-q1', text: 'Conducting code reviews and quality assurance checks', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'swd-q2', text: 'Managing bug tracking systems and coordinating issue resolution', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'swd-q3', text: 'Writing and maintaining technical documentation', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'swd-q4', text: 'Setting up and maintaining local development environments', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'swd-q5', text: 'Managing software releases, deployments, CI/CD pipelines', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'swd-q6', text: 'Participating in stand-up meetings and status updates', type: 'timeEstimate', timeOptions: { hoursPerDay: ['0-0.5', '0.5-1', '1-1.5', '1.5+'] } },
        ]
      },
      // !! Add more sections and questions for Software Dev from Markdown !!
    ]
  },
  // --- Insurance ---
  {
    id: 'insurance',
    label: 'Insurance',
    icon: ShieldCheck,
    sections: [
       {
        title: 'Policy & Claims Processing',
        questions: [
          { id: 'ins-q1', text: 'Processing new policy applications (data entry, verification)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'ins-q2', text: 'Calculating premiums and generating quotes', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'ins-q3', text: 'Handling claims intake, verification, initial processing', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'ins-q4', text: 'Updating customer information and policy details', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'ins-q5', text: 'Managing policy renewals and sending notifications', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'ins-q6', text: 'Tracking agent commissions and processing payments', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
          { id: 'ins-q7', text: 'Preparing and filing compliance documentation', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
        ]
      },
       // !! Add more sections and questions for Insurance from Markdown !!
    ]
  },
  // --- Marketing & Advertising ---
  {
    id: 'marketing_advertising',
    label: 'Marketing & Advertising',
    icon: Library, // Consider Megaphone or similar
    sections: [
        {
        title: 'Campaign Management & Client Relations',
        questions: [
          { id: 'mkt-q1', text: 'Creating content (copy, visuals) and scheduling posts/emails', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'mkt-q2', text: 'Tracking campaign performance, analyzing data, generating reports', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'mkt-q3', text: 'Communicating with clients (updates, approvals, feedback)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'mkt-q4', text: 'Managing advertising budgets and tracking spend', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'mkt-q5', text: 'Monitoring social media channels and engaging with audience', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'mkt-q6', text: 'Organizing and managing creative assets', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'mkt-q7', text: 'Conducting competitive analysis and market research', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
        ]
      },
      // !! Add more sections and questions for Marketing from Markdown !!
    ]
  },
  // --- Consulting ---
  {
    id: 'consulting',
    label: 'Consulting',
    icon: Handshake,
    sections: [
        {
        title: 'Client Engagement & Project Delivery',
        questions: [
          { id: 'csl-q1', text: 'Preparing proposals and statements of work (SOWs)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek }, roles: ['owner', 'manager', 'director', 'c-suite']},
          { id: 'csl-q2', text: 'Conducting client research and discovery sessions', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek }},
          { id: 'csl-q3', text: 'Creating client presentations and deliverables', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek }},
          { id: 'csl-q4', text: 'Managing project timelines, resources, and budgets', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek }, roles: ['manager', 'director']},
          { id: 'csl-q5', text: 'Logging billable hours and managing client invoicing', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek }},
          { id: 'csl-q6', text: 'Scheduling client meetings and follow-ups', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek }},
        ]
      },
      // !! Add more sections and questions for Consulting from Markdown !!
    ]
  },
  // --- Automotive ---
  {
    id: 'automotive',
    label: 'Automotive (Sales/Service)',
    icon: Car,
    sections: [
        {
        title: 'Sales & Customer Interaction',
        questions: [
          { id: 'auto-s1', text: 'Managing incoming sales leads (web, phone, walk-in)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'auto-s2', text: 'Following up with potential customers', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'auto-s3', text: 'Preparing quotes, financing paperwork, and sales contracts', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'auto-s4', text: 'Updating inventory listings online and internally', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
        ],
        roles: ['manager', 'contributor'] // Example: Sales roles
      },
       {
        title: 'Service Department Operations',
        questions: [
          { id: 'auto-svc1', text: 'Scheduling service appointments', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'auto-svc2', text: 'Writing repair orders and communicating with technicians', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'auto-svc3', text: 'Ordering parts and managing service inventory', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'auto-svc4', text: 'Processing warranty claims', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'auto-svc5', text: 'Invoicing customers and processing payments for service', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
        ],
        roles: ['manager', 'contributor', 'director'] // Example: Service roles
      },
      // !! Add more sections and questions for Automotive from Markdown !!
    ]
  },
   // --- Field Services ---
  {
    id: 'field_services',
    label: 'Field Services',
    icon: Wrench,
    sections: [
        {
        title: 'Dispatching & Work Order Management',
        questions: [
           { id: 'fsv-q1', text: 'Receiving service requests and creating work orders', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
           { id: 'fsv-q2', text: 'Assigning work orders and dispatching field technicians', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
           { id: 'fsv-q3', text: 'Tracking technician location and job status in real-time (manually)', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay }, tooltip: 'Time spent checking in or manually looking up status.' },
           { id: 'fsv-q4', text: 'Managing preventative maintenance schedules', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'fsv-q5', text: 'Processing completed work orders, including technician notes/parts used', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
           { id: 'fsv-q6', text: 'Generating service reports for clients', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
        ]
      },
      // !! Add more sections and questions for Field Services from Markdown !!
    ]
  },
  // --- Human Resources ---
  {
    id: 'human_resources',
    label: 'Human Resources',
    icon: Users,
    sections: [
        {
        title: 'Recruitment & Onboarding',
        questions: [
           { id: 'hr-q1', text: 'Posting job openings and screening resumes/applications', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'hr-q2', text: 'Scheduling and coordinating interviews', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'hr-q3', text: 'Managing candidate communication and feedback', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'hr-q4', text: 'Preparing offer letters and employment contracts', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'hr-q5', text: 'Conducting background checks and reference checks', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'hr-q6', text: 'Processing new hire paperwork and managing onboarding tasks', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
        ]
      },
      {
        title: 'Employee Management & Payroll',
        questions: [
           { id: 'hr-q7', text: 'Processing payroll and managing benefits administration', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
           { id: 'hr-q8', text: 'Tracking employee time off and attendance', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'hr-q9', text: 'Managing employee records and documentation', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'hr-q10', text: 'Handling employee relations issues and inquiries', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
        ]
      },
      // !! Add more sections and questions for HR from Markdown !!
    ]
  },
  // --- Non-Profit ---
  {
    id: 'non_profit',
    label: 'Non-Profit',
    icon: Anchor, // Or HeartPulse again? Leaf?
    sections: [
        {
        title: 'Donor Management & Fundraising',
        questions: [
           { id: 'np-q1', text: 'Tracking donations and managing donor records', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'np-q2', text: 'Sending donation acknowledgements and tax receipts', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'np-q3', text: 'Planning and executing fundraising campaigns/events', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
           { id: 'np-q4', text: 'Writing grant proposals and managing grant reporting', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth }, roles: ['director', 'manager', 'owner', 'c-suite'] },
           { id: 'np-q5', text: 'Communicating with donors and supporters (newsletters, updates)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
        ]
      },
      {
        title: 'Volunteer & Program Management',
        questions: [
          { id: 'np-q6', text: 'Recruiting, scheduling, and communicating with volunteers', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'np-q7', text: 'Tracking program participation and outcomes', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'np-q8', text: 'Generating reports for board members and stakeholders', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
        ]
      },
      // !! Add more sections and questions for Non-Profit from Markdown !!
    ]
  },
  // --- Agriculture ---
  {
    id: 'agriculture',
    label: 'Agriculture',
    icon: Leaf,
    sections: [
        {
        title: 'Farm Operations & Planning',
        questions: [
          { id: 'agr-q1', text: 'Planning planting, harvesting, and crop rotation schedules', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth }, tooltip: 'Consider seasonal planning time.' },
          { id: 'agr-q2', text: 'Monitoring weather conditions and soil health manually', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
          { id: 'agr-q3', text: 'Managing pest and disease control efforts (scouting, record keeping)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'agr-q4', text: 'Tracking livestock records (health, breeding, inventory)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } }, // If applicable
          { id: 'agr-q5', text: 'Operating and maintaining farm equipment (logging usage, scheduling maintenance)', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
          { id: 'agr-q6', text: 'Managing irrigation systems manually', type: 'timeEstimate', timeOptions: { hoursPerDay: defaultTimeOptions.hoursPerDay } },
        ]
      },
       {
        title: 'Sales & Compliance',
        questions: [
           { id: 'agr-q7', text: 'Tracking inventory of harvested crops or products', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'agr-q8', text: 'Coordinating sales and deliveries to customers/markets', type: 'timeEstimate', timeOptions: { hoursPerWeek: defaultTimeOptions.hoursPerWeek } },
           { id: 'agr-q9', text: 'Maintaining compliance records for regulations (food safety, environmental)', type: 'timeEstimate', timeOptions: { hoursPerMonth: defaultTimeOptions.hoursPerMonth } },
        ]
      },
      // !! Add more sections and questions for Agriculture from Markdown !!
    ]
  },
  // --- Add other industries here as needed ---
];

// --- Utility Function ---

// Function to get relevant questions based on user selections
export const getRelevantQuestions = (
  selectedIndustryId: string | null,
  selectedRoleId: string | null,
  selectedSizeId: string | null
): { relevantIndustry: Industry | null; relevantSections: Section[] } => {
  if (!selectedIndustryId || !selectedRoleId || !selectedSizeId) {
    return { relevantIndustry: null, relevantSections: [] };
  }

  const industry = industries.find((ind) => ind.id === selectedIndustryId);
  if (!industry) {
    return { relevantIndustry: null, relevantSections: [] };
  }

  const relevantSections = industry.sections
    .filter((section) => {
      const roleMatch = !section.roles || section.roles.includes(selectedRoleId);
      const sizeMatch = !section.sizes || section.sizes.includes(selectedSizeId as BusinessSize); // Cast sizeId
      return roleMatch && sizeMatch;
    })
    .map((section) => {
      const relevantQuestions = section.questions.filter((question) => {
        const roleMatch = !question.roles || question.roles.includes(selectedRoleId);
        const sizeMatch = !question.sizes || question.sizes.includes(selectedSizeId as BusinessSize); // Cast sizeId
        return roleMatch && sizeMatch;
      });
      // Return a new section object only including relevant questions
      return { ...section, questions: relevantQuestions };
    })
    // Ensure sections are only included if they *still* have questions after filtering
    .filter(section => section.questions.length > 0);

  return { relevantIndustry: industry, relevantSections };
}; 