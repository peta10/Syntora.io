import { Hero } from "../../pages/Hero";
import { Bespoke } from "../../pages/Bespoke/Bespoke";
// import { Process } from "../../pages/Process/Process"; // Removed Process import
import { Infra } from "../../pages/Infra/Infra";
import { Supremacy } from "../../pages/Supremacy/Supremacy";
import { Pricing } from "../../pages/Pricing/Pricing";
import { FAQSection } from "../../pages/FAQ/FAQ";

export const SectionFramer = () => {
  return (
    <div className="flex-1">
        <Hero />
        <Bespoke />
        {/* <Process /> // Removed Process component usage */}
        <Infra />
        <Supremacy />
        <Pricing />
        <FAQSection />
    </div>
  );
}; 