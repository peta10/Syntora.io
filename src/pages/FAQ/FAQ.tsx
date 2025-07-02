import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"; // Corrected path
import { Badge } from "../../components/ui/badge"; // Corrected path
import { motion, Variants } from "framer-motion"; // Import motion and Variants

// Define animation variants (copied from SupremacySection)
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, 
    },
  },
};

export const FAQSection = (): JSX.Element => { // Renamed component
  // FAQ data for mapping - Removed Pricing and Chicago/Naperville questions
  const faqItems = [
    {
      question: "How does the custom automation process work?",
      answer:
        "Our custom workflow automation process begins with a consultation (like our Time Audit) to understand your business processes. We then design a blueprint, develop, and implement the automation solution, ensuring seamless systems integration. We provide training and ongoing managed support.",
    },
    {
      question: "Is my data secure on this platform?",
      answer:
        "Yes, we prioritize data security with enterprise-grade encryption, regular security audits, and compliance with industry standards. Your data is protected with secure access controls and regular backups.",
    },
    {
      question: "Can I start with just one automation?",
      answer:
        "Absolutely! You can start with a single automation and scale as needed. This approach allows you to test our platform and see the benefits before expanding to more complex workflows.",
    },
    {
      question: "What support do you offer after deployment?",
      answer:
        "Our managed automation services include comprehensive post-deployment support, covering proactive monitoring, technical assistance, maintenance, optimization, and access to our support resources.",
    },
    {
      question: "What industries benefit most from managed workflow automation?",
      answer:
        "Many industries see significant benefits, including professional services, e-commerce, finance, healthcare administration, and logistics. Any business with repetitive digital tasks, complex workflows, or the need for better systems integration can improve efficiency with our managed automation solutions.",
    },
    {
      question: "What's the difference between your managed services and using DIY tools like Zapier/Make?",
      answer:
        "While DIY tools are great for simple tasks, our managed workflow automation services provide expert design, complex systems integration, proactive maintenance, robust security, and dedicated support for critical business processes, ensuring reliability and scalability beyond basic triggers.",
    },
  ];

  return (
    <section className="bg-black flex justify-center w-full py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-90 pointer-events-none"
        style={{
          backgroundImage: `url('/FAQ/Faqdots.png')`,
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center', 
        }}
      />
      
      <div className="max-w-[1200px] w-full flex flex-col lg:flex-row gap-12 px-10 relative z-10">
        <div className="flex flex-col gap-5 w-full lg:w-1/2 relative">
          <Badge
            variant="outline"
            className="absolute left-0 top-0 bg-[#0d0d12] rounded-full border-[0.8px] border-solid border-[#1a1d31] w-[51.53px] h-[38.4px] flex items-center justify-center"
          >
            <span className="font-inter font-normal text-[15px] text-transparent bg-clip-text bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA]">
              FAQ
            </span>
          </Badge>

          <div className="space-y-2 mt-12">
            <h2 className="text-[#ffffffde] text-5xl font-semibold tracking-tight leading-[1.2]">
              Got Questions? 
            </h2>
          </div>

          <div className="text-[#7b7c8c] text-[16.9px] leading-[25.6px] max-w-[470px]">
            <p>
              Everything you need to know about our platform in one
              place—features, pricing, integrations, and more.
            </p>
          </div>
        </div>

        <motion.div 
          className="w-full lg:w-1/2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div key={index} variants={cardVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-[#1a1d31] rounded-[20px] overflow-hidden border-none"
                >
                  <div className="rounded-[20px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(26,29,49,1)_0%,rgba(13,13,18,1)_100%)]">
                    <AccordionTrigger className="px-5 py-5 text-[16.9px] font-medium text-[#ffffffde] hover:no-underline tracking-tight">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-base leading-relaxed text-neutral-300">
                      {item.answer}
                    </AccordionContent>
                  </div>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}; 