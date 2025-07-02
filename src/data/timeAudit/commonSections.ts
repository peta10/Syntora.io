import { Section } from './types';
import { defaultTimeOptions, decisionMakers, implementers, users } from './commonData';

// Common sections applied to all industries
export const generalAdminSection: Section = {
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

export const roleSpecificPerspectivesSection: Section = {
    title: "Role Perspectives on Automation",
    description: "Questions about automation related to your specific role.",
    questions: [
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

export const sizeSpecificChallengesSection: Section = {
    title: "Business Size Challenges & Opportunities",
    description: "Questions related to the scale of your operations.",
    questions: [
        { id: 'size-s1', text: 'How significantly do budget constraints impact your ability to invest in new technology?', type: 'scale', options: ['Not at all', 'Slightly', 'Moderately', 'Significantly', 'Major Barrier'], sizes: ['small'] },
        { id: 'size-s2', text: 'Do team members frequently wear multiple hats or handle tasks outside their core role?', type: 'single', options: ['Rarely', 'Sometimes', 'Frequently', 'Constantly'], sizes: ['small'] },
        { id: 'size-s3', text: 'What are the primary bottlenecks preventing your business/department from growing faster?', type: 'text', sizes: ['small'] },
        { id: 'size-m1', text: 'How challenging is it to standardize processes across different teams or functions?', type: 'scale', options: ['Not Challenging', 'Slightly', 'Moderately', 'Very Challenging'], sizes: ['medium'] },
        { id: 'size-m2', text: 'How well integrated are your core business systems (e.g., CRM, ERP, Finance)?', type: 'scale', options: ['Not Integrated', 'Poorly Integrated', 'Moderately Integrated', 'Well Integrated', 'Fully Integrated'], sizes: ['medium', 'large'] },
        { id: 'size-m3', text: 'How often do you need custom solutions vs. being able to use off-the-shelf software?', type: 'single', options: ['Almost Always Off-the-shelf', 'Mostly Off-the-shelf', 'Balanced Mix', 'Mostly Custom', 'Almost Always Custom'], sizes: ['medium'] },
        { id: 'size-l1', text: 'How complex is the integration between your primary enterprise systems (e.g., ERP, CRM, SCM)?', type: 'scale', options: ['Simple', 'Moderate', 'Complex', 'Very Complex'], sizes: ['large'] },
        { id: 'size-l2', text: 'How significant are compliance and security requirements when evaluating new technology?', type: 'scale', options: ['Minimal', 'Moderate', 'Significant', 'Critical'], sizes: ['large'] },
        { id: 'size-l3', text: 'Describe your typical process and challenges related to change management when implementing new tools.', type: 'text', sizes: ['large'] },
        { id: 'size-l4', text: 'How challenging is standardizing processes across multiple locations or globally (if applicable)?', type: 'scale', options: ['Not Applicable', 'Not Challenging', 'Slightly', 'Moderately', 'Very Challenging'], sizes: ['large'] },
    ]
};

export const openEndedStrategySection: Section = {
    title: "Strategic Outlook & Goals",
    description: "Final thoughts on automation potential.",
    questions: [
        { id: 'open-dm1', text: 'What key strategic goals for the next 1-3 years could be accelerated through better automation?', type: 'openEnded', roles: decisionMakers },
        { id: 'open-dm2', text: 'How important is leveraging technology for competitive advantage in your market?', type: 'scale', options: ['Not Important', 'Slightly Important', 'Moderately Important', 'Very Important', 'Critical'], roles: decisionMakers },
        { id: 'open-dm3', text: 'Briefly describe your process for allocating budget to new technology investments.', type: 'openEnded', roles: decisionMakers },
        { id: 'open-imp1', text: 'What are the biggest potential challenges you foresee in getting your team to adopt new automated workflows?', type: 'openEnded', roles: implementers },
        { id: 'open-imp2', text: 'Are there specific workflows you believe are prime candidates for redesign through automation?', type: 'openEnded', roles: implementers },
        { id: 'open-user1', text: 'Describe one daily or weekly task that causes the most frustration due to its manual nature.', type: 'openEnded', roles: users },
        { id: 'open-user2', text: 'If automation freed up 2-3 hours of your week, what higher-value activities or skill development would you focus on?', type: 'openEnded', roles: users },
    ]
};

// Export all common sections
export const commonSections = [
    generalAdminSection,
    roleSpecificPerspectivesSection,
    sizeSpecificChallengesSection,
    openEndedStrategySection
]; 