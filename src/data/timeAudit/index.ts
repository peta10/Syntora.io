// Export all types
export * from './types';

// Export common data and sections
export * from './commonData';
export * from './commonSections';

// Import all industries from our centralized file
import allIndustries from './allIndustries';

// Re-export all industries
export const industries = allIndustries;

// Export the utility function
export const getRelevantQuestions = (
  selectedIndustryId: string | null,
  selectedRoleId: string | null,
  selectedSizeId: string | null
) => {
  console.log("[getRelevantQuestions] Input:", { selectedIndustryId, selectedRoleId, selectedSizeId }); 

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

  const industrySectionsFiltered = industry.sections
    .filter(section => section.title.startsWith('Industry Tasks:'))
    .map((section) => {
      console.log(`[getRelevantQuestions] Checking section: "${section.title}"`);
      
      const relevantQuestions = section.questions.filter((question) => {
        const roleMatch = !question.roles || question.roles.includes(selectedRoleId);
        const sizeMatch = !question.sizes || question.sizes.includes(selectedSizeId as any);
        return roleMatch && sizeMatch;
      });
      
      console.log(`[getRelevantQuestions] Found ${relevantQuestions.length} relevant questions for this section.`);
      return relevantQuestions.length > 0 ? { ...section, questions: relevantQuestions } : null;
    })
    .filter(section => section !== null) as any[];
    
  console.log("[getRelevantQuestions] Filtered Industry Sections:", industrySectionsFiltered);

  const relevantSections = industrySectionsFiltered;

  console.log("[getRelevantQuestions] Final relevantSections returned:", relevantSections); 
  return { relevantIndustry: industry, relevantSections };
}; 