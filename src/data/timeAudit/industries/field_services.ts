import { Cog } from "lucide-react";
import { Industry, Section } from "../types";
import { defaultTimeOptions } from "../commonData";

const field_servicesSections: Section[] = [
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
  }
];

const field_services: Industry = {
  id: 'field_services',
  label: 'Field Services (Specialized Trades)',
  icon: Cog,
  sections: field_servicesSections
};

export default field_services;