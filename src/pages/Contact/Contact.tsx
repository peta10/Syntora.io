import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { FAQSection } from "../FAQ/FAQ";
import { ContactHero } from "./ContactHero";
import "./contact.css";
import { Helmet } from 'react-helmet-async';
import { supabase } from "@/lib/supabase";
import { NewContactSubmission } from "@/lib/types";

// Define FAQPage Schema specific to Contact page context - REMOVED questions
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    // Removed: Pricing question
    {
      "@type": "Question",
      "name": "How does the custom automation process work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our custom workflow automation process begins with a consultation (like our Time Audit) to understand your business processes. We then design a blueprint, develop, and implement the automation solution, ensuring seamless systems integration. We provide training and ongoing managed support."
      }
    },
    {
      "@type": "Question",
      "name": "Is my data secure on this platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we prioritize data security with enterprise-grade encryption, regular security audits, and compliance with industry standards. Your data is protected with secure access controls and regular backups."
      }
    },
    {
      "@type": "Question",
      "name": "Can I start with just one automation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! You can start with a single automation and scale as needed. This approach allows you to test our platform and see the benefits before expanding to more complex workflows."
      }
    },
    {
      "@type": "Question",
      "name": "What support do you offer after deployment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our managed automation services include comprehensive post-deployment support, covering proactive monitoring, technical assistance, maintenance, optimization, and access to our support resources."
      }
    },
    {
      "@type": "Question",
      "name": "What industries benefit most from managed workflow automation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many industries see significant benefits, including professional services, e-commerce, finance, healthcare administration, and logistics. Any business with repetitive digital tasks, complex workflows, or the need for better systems integration can improve efficiency with our managed automation solutions."
      }
    },
    // Removed: Chicago/Naperville question
    {
      "@type": "Question",
      "name": "What's the difference between your managed services and using DIY tools like Zapier/Make?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While DIY tools are great for simple tasks, our managed workflow automation services provide expert design, complex systems integration, proactive maintenance, robust security, and dedicated support for critical business processes, ensuring reliability and scalability beyond basic triggers."
      }
    }
  ]
};

// Add this near your existing faqSchema in Contact.tsx
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Syntora",
  "image": "https://yourdomain.com/logo.png", // Replace with your actual logo URL
  "url": "https://yourdomain.com/contact",
  "telephone": "+16307439686",
  "email": "contact@syntora.io",
  "description": "Managed workflow automation services for businesses in Naperville, Chicago, and nationwide.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1056 N Mill St",
    "addressLocality": "Naperville",
    "addressRegion": "IL",
    "postalCode": "60563",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "41.78", // Replace with actual coordinates
    "longitude": "-88.15" // Replace with actual coordinates
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "17:00"
  }
};

export const Contact = (): JSX.Element => {
  // Contact information data - Reverted to original two cards
  const contactCards = [
    {
      title: "Email Us",
      description: ["Reach out to our team for quick", "assistance."], // Reverted description
      contact: "contact@syntora.io", 
      imageUrl: "/Contact/image.png",
      // contactType removed
    },
    {
      title: "Call Us",
      description: ["Drop us a message, and we'll get", "back to you soon."], // Reverted description
      contact: "630-743-9686",
      imageUrl: "/Contact/image-1.png",
      // contactType removed
    },
    // Removed the Address Card
  ];

  // Form field data for mapping - Updated IDs to match database column names
  const formFields = [
    {
      id: "first_name",
      label: "First Name",
      placeholder: "Julie",
      type: "text",
      width: "half",
    },
    {
      id: "last_name",
      label: "Last Name",
      placeholder: "Gawne",
      type: "text",
      width: "half",
    },
    {
      id: "company_name",
      label: "Company Name",
      placeholder: "Syntora",
      type: "text",
      width: "full",
    },
    {
      id: "email",
      label: "Email",
      placeholder: "juliegawne@gmail.com",
      type: "email",
      width: "full",
    },
    {
      id: "contact_number",
      label: "Contact Number",
      placeholder: "+1234567890",
      type: "tel",
      width: "full",
    },
    {
      id: "automation_request",
      label: "Automation Request",
      placeholder: "Share your Automation",
      type: "textarea",
      width: "full",
    },
  ];

  // Form state
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    email: "",
    contact_number: "",
    automation_request: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{type: 'success' | 'error', message: string} | null>(null);
  
  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Basic validation
    if (!formData.first_name || !formData.last_name || !formData.email) {
      setFormMessage({
        type: 'error',
        message: "Please fill in all required fields."
      });
      return;
    }
    
    setIsSubmitting(true);
    setFormMessage(null);
    
    try {
      // Prepare submission data
      const submission: NewContactSubmission = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        company_name: formData.company_name || null,
        email: formData.email,
        contact_number: formData.contact_number || null,
        automation_request: formData.automation_request || null,
        ip_address: null, // This would be set server-side
        created_at: new Date().toISOString()
      };
      
      // Submit to Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert(submission);
        
      if (error) throw error;
      
      // Success message
      setFormMessage({
        type: 'success',
        message: "Form submitted successfully! We'll be in touch with you shortly."
      });
      
      // Reset form
      setFormData({
        first_name: "",
        last_name: "",
        company_name: "",
        email: "",
        contact_number: "",
        automation_request: ""
      });
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormMessage({
        type: 'error',
        message: "There was a problem submitting your form. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Add Helmet for Contact page meta tags and FAQ Schema */}
      <Helmet>
        <title>Contact Syntora | Managed Workflow Automation | Naperville & Chicago</title>
        <meta name="description" content="Contact Syntora for managed workflow automation services in Naperville, Chicagoland, and nationwide. Get a quote, request a demo, or ask about our automation solutions." />
        {/* Inject FAQPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        {/* Add LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      
      <ContactHero />
      <section 
        className="w-full bg-black text-white py-12 sm:py-16 md:py-24 lg:py-32 min-h-[816px] relative px-4 sm:px-6 md:px-10"
        style={{ 
          backgroundImage: `url(/Contact/contacdotted.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top right',
        }}
      >
        
        <div className="w-full max-w-[1200px] mx-auto relative z-10">
          {/* Use flex-col-reverse on mobile to show form first, then normal on desktop */}
          <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left Side: Contact Info + Promo */}
            <div className="flex flex-col gap-8 md:gap-12 w-full md:w-1/2 mt-8 md:mt-0">
              {/* Contact Cards - Mobile optimized */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8"> 
                {contactCards.map((card, index) => (
                  <div 
                    key={index} 
                    className="flex-1 p-5 sm:p-6 flex flex-col gap-3 sm:gap-4 min-h-[180px] sm:h-[218px] bg-[#0d0d12] rounded-lg border border-[#1a1d31]" 
                  >
                    <img 
                      src={card.imageUrl} 
                      alt={`${card.title} icon`} 
                      className="w-12 h-12 sm:w-16 sm:h-16" 
                    />
                    <div className="flex flex-col gap-2 sm:gap-3">
                      <div className="flex flex-col gap-1 sm:gap-1.5">
                        <h3 className="text-lg sm:text-xl font-semibold text-white">
                          {card.title}
                        </h3>
                        <div className="flex flex-col">
                          {card.description.map((line, i) => (
                            <p key={i} className="text-xs sm:text-sm text-gray-400 font-normal">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                      
                      {/* Display contact info inside the card */}
                      <div className="mt-1">
                        {index === 0 ? (
                          <a href={`mailto:${card.contact}`} className="text-base sm:text-lg font-semibold text-white hover:text-blue-400 transition-colors">
                            {card.contact}
                          </a>
                        ) : (
                          <a href={`tel:+1${card.contact.replace(/-/g, '')}`} className="text-base sm:text-lg font-semibold text-white hover:text-blue-400 transition-colors">
                            +1 ({card.contact.substring(0,3)}) {card.contact.substring(4)}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Card - Mobile optimized */}
              <Card className="promo-card w-full bg-[#0d0d12] border border-[#1a1d31]">
                <CardContent className="promo-content p-0">
                  <div className="promo-inner flex flex-col justify-start items-start gap-6 sm:gap-8 py-5 sm:py-6 px-5 sm:px-10">
                    <div className="flex flex-col gap-1 sm:gap-2">
                      <h2 className="text-lg sm:text-xl font-semibold text-white">
                        Unlock Your Growth Infrastructure
                      </h2>
                      <div className="flex flex-col">
                        <p className="text-xs sm:text-sm text-gray-400 font-normal">
                          Access automation insights, priority upgrades, and expert support.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start gap-6">
                      <div className="flex flex-col gap-3 sm:gap-4 flex-grow">
                        <div className="flex flex-col gap-2 sm:gap-2.5">
                          {[
                            { text: "Exclusive Insights", iconSrc: "/Contact/group.png" },
                            { text: "Networking & Collaboration", iconSrc: "/Contact/group-1.png" },
                            { text: "Priority Support & Resources", iconSrc: "/Contact/group-2.png" },
                          ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 sm:gap-3">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                                <img
                                  className="feature-icon w-3 h-3 sm:w-4 sm:h-4"
                                  alt="Feature icon"
                                  src={feature.iconSrc}
                                />
                              </div>
                              <p className="text-xs sm:text-sm text-gray-400 font-normal">
                                {feature.text}
                              </p>
                            </div>
                          ))}
                        </div>

                        <Button className="join-button w-24 sm:w-28 h-9 sm:h-10 self-start">
                          <div className="join-button-inner">
                            <span className="join-text uppercase text-xs sm:text-sm font-medium">
                              COMING SOON
                            </span>
                          </div>
                        </Button>
                      </div>

                      <div
                        className="promo-image w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 mr-0 sm:mr-4"
                        style={{ backgroundImage: `url(/Contact/image-2.png)` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side: Form - Mobile optimized */}
            <Card className="contact-form-card w-full md:w-1/2 overflow-hidden bg-[#0d0d12] border border-[#1a1d31]">
              <form onSubmit={handleSubmit}>
                <CardContent className="flex flex-col gap-6 sm:gap-8 pt-8 sm:pt-10 pb-5 sm:pb-6 px-5 sm:px-6">
                  {formMessage && (
                    <div className={`p-3 rounded-md ${formMessage.type === 'success' ? 'bg-blue-500/20 text-blue-200' : 'bg-red-500/20 text-red-200'}`}>
                      {formMessage.message}
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    {formFields
                      .filter((field) => field.width === "half")
                      .map((field) => (
                        <div key={field.id} className="flex flex-col gap-1 sm:gap-1.5 flex-1">
                          <Label
                            htmlFor={field.id}
                            className="text-xs sm:text-sm font-bold text-white"
                          >
                            {field.label}
                          </Label>
                          <Input
                            id={field.id}
                            placeholder={field.placeholder}
                            type={field.type}
                            className="form-input h-9 sm:h-10 px-3 text-sm sm:text-base text-gray-200 placeholder:text-gray-500"
                            value={formData[field.id as keyof typeof formData] || ""}
                            onChange={handleInputChange}
                            required={field.id === "first_name" || field.id === "last_name" || field.id === "email"}
                          />
                        </div>
                      ))}
                  </div>

                  {formFields
                    .filter(
                      (field) => field.width === "full",
                    )
                    .map((field) => (
                      <div key={field.id} className="flex flex-col gap-1 sm:gap-1.5">
                        <Label
                          htmlFor={field.id}
                          className="text-xs sm:text-sm font-bold text-white"
                        >
                          {field.label}
                        </Label>
                        {field.type === 'textarea' ? (
                          <Textarea
                            id={field.id}
                            placeholder={field.placeholder}
                            className="form-textarea min-h-[100px] sm:min-h-[120px] p-3 text-sm sm:text-base text-gray-200 placeholder:text-gray-500"
                            value={formData[field.id as keyof typeof formData] || ""}
                            onChange={handleInputChange}
                          />
                        ) : (
                          <Input
                            id={field.id}
                            placeholder={field.placeholder}
                            type={field.type}
                            className="form-input h-9 sm:h-10 px-3 text-sm sm:text-base text-gray-200 placeholder:text-gray-500"
                            value={formData[field.id as keyof typeof formData] || ""}
                            onChange={handleInputChange}
                            required={field.id === "email"}
                          />
                        )}
                      </div>
                    ))}

                  <div onClick={!isSubmitting ? undefined : (e) => e.preventDefault()}>
                    <ShinyButton
                      className={`w-full rounded-full text-gray-700 text-xs sm:text-sm font-medium px-5 sm:px-6 py-2 sm:py-2.5 border-[0.8px] border-solid border-[#ffffff66] overflow-hidden mt-1 sm:mt-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                      style={{
                        background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 37%, rgba(208, 208, 208, 1) 100%)',
                        '--primary': '#E0E0E0', 
                        boxShadow: '0 0 15px 4px rgba(255, 100, 80, 0.5)',
                      } as React.CSSProperties}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </ShinyButton>
                  </div>
                </CardContent>
              </form>
            </Card>
          </div>
        </div>
      </section>
      <FAQSection />
    </>
  );
};

export default Contact; 