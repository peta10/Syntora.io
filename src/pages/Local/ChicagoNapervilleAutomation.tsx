import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { CheckIcon } from "lucide-react";
import { ShinyButton } from "../../components/magicui/shiny-button";
import { TextAnimate } from "../../components/magicui/text-animate";

const chicagoLocalSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Workflow Automation Services in Naperville & Chicago | Syntora",
  "description": "Local workflow automation services for businesses in Naperville, Chicago, and surrounding Chicagoland areas. Get custom solutions from local automation experts.",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Syntora",
    "url": "https://syntora.com"
  },
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Syntora - Naperville Workflow Automation",
    "image": "https://syntora.com/logo.png", // Update with actual logo URL
    "url": "https://syntora.com/chicago-naperville-automation-services",
    "telephone": "+16307439686",
    "email": "contact@syntora.io",
    "priceRange": "$$$",
    "description": "Managed workflow automation services specializing in n8n, for businesses in Naperville, Chicagoland, and across Illinois.",
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
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Naperville",
        "sameAs": "https://en.wikipedia.org/wiki/Naperville,_Illinois"
      },
      {
        "@type": "City",
        "name": "Chicago",
        "sameAs": "https://en.wikipedia.org/wiki/Chicago"
      },
      {
        "@type": "City",
        "name": "Aurora",
        "sameAs": "https://en.wikipedia.org/wiki/Aurora,_Illinois"
      },
      {
        "@type": "City",
        "name": "Schaumburg",
        "sameAs": "https://en.wikipedia.org/wiki/Schaumburg,_Illinois"
      },
      {
        "@type": "City",
        "name": "Evanston",
        "sameAs": "https://en.wikipedia.org/wiki/Evanston,_Illinois"
      },
      {
        "@type": "City",
        "name": "Oak Brook",
        "sameAs": "https://en.wikipedia.org/wiki/Oak_Brook,_Illinois"
      },
      {
        "@type": "City",
        "name": "Downers Grove",
        "sameAs": "https://en.wikipedia.org/wiki/Downers_Grove,_Illinois"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Chicagoland",
        "sameAs": "https://en.wikipedia.org/wiki/Chicago_metropolitan_area"
      },
      {
        "@type": "State",
        "name": "Illinois",
        "sameAs": "https://en.wikipedia.org/wiki/Illinois"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Workflow Automation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local Workflow Automation Services",
            "description": "Custom business process automation solutions for Naperville and Chicago area businesses."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chicago Business Process Automation",
            "description": "Streamline business operations with custom workflow automation tailored to Chicagoland businesses."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Naperville n8n Automation Solutions",
            "description": "Expert n8n implementation and management for businesses in Naperville and surrounding areas."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Illinois Systems Integration",
            "description": "Connect your business systems and eliminate manual data transfer with our local integration expertise."
          }
        }
      ]
    }
  }
};

export const ChicagoNapervilleAutomation = (): JSX.Element => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-black relative overflow-hidden">
      {/* Add Helmet for Local Landing page meta tags */}
      <Helmet>
        <title>Automation Services in Naperville & Chicagoland | Syntora</title>
        <meta name="description" content="Syntora offers managed workflow automation services for businesses in Naperville and Chicagoland. Improve efficiency with local expertise and custom solutions." />
        <script type="application/ld+json">
          {JSON.stringify(chicagoLocalSchema)}
        </script>
      </Helmet>
      
      {/* Dotted Overlay - similar to Hero */}
      <div
        className="absolute inset-0 w-full h-full z-[1]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 0)',
          backgroundSize: '10px 10px',
        }}
      ></div>
      
      <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
        
        {/* Main Heading */}
        <div className="mb-10 md:mb-14 text-center">
          <TextAnimate
            as="h1"
            animation="blurInUp"
            by="word"
            once
            className="font-bold font-poppins text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tighter text-[#ffffffde]"
          >
            Managed Workflow Automation Services in Naperville & Chicagoland
          </TextAnimate>
        </div>

        {/* Introduction / Value Proposition - Enhanced */}
        <p className="text-lg text-center mb-12 text-[#ffffffb3] max-w-3xl mx-auto">
          Is your Chicagoland business bogged down by repetitive tasks? Syntora, based right here in Naperville, IL, provides expert managed workflow automation services designed to streamline your operations, boost productivity, and save valuable time.
        </p>

        {/* Benefits Section - Enhanced Descriptions */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8 text-[#ffffffde]">Why Chicagoland Businesses Choose Syntora</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Benefit 1 */}
            <div className="bg-[#0d0d12] p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <h3 className="font-semibold text-lg mb-2 text-white">Local Naperville Expertise</h3>
              <p className="text-[#ffffffb3]">As a Naperville-based automation agency, we offer personalized service and understand the unique challenges and opportunities facing businesses throughout Chicagoland and Illinois.</p>
            </div>
            {/* Benefit 2 */}
            <div className="bg-[#0d0d12] p-6 rounded-lg border border-white/10 backdrop-blur-sm"> 
              <h3 className="font-semibold text-lg mb-2 text-white">Custom Workflow Solutions</h3>
              <p className="text-[#ffffffb3]">We don't offer one-size-fits-all. We design and manage bespoke workflow automation solutions tailored precisely to your company's specific processes and goals.</p>
            </div>
             {/* Benefit 3 */}
             <div className="bg-[#0d0d12] p-6 rounded-lg border border-white/10 backdrop-blur-sm"> 
              <h3 className="font-semibold text-lg mb-2 text-white">Measurable Efficiency Gains</h3>
              <p className="text-[#ffffffb3]">Our focus is on automating tasks that yield tangible results: reduced errors, faster turnaround times, and freeing up your Chicago-area team for high-value work.</p>
            </div>
             {/* Benefit 4 */}
             <div className="bg-[#0d0d12] p-6 rounded-lg border border-white/10 backdrop-blur-sm"> 
              <h3 className="font-semibold text-lg mb-2 text-white">Scalable & Reliable Systems</h3>
              <p className="text-[#ffffffb3]">We implement robust business process automation systems designed to grow with your Naperville or Chicagoland business, ensuring long-term reliability and performance.</p>
            </div>
          </div>
        </div>

        {/* Services Mentioned - Refined */}
         <div className="mb-16 text-center">
           <h2 className="text-2xl font-semibold mb-6 text-[#ffffffde]">Our Chicagoland Automation Services Include:</h2>
           <ul className="list-none inline-block text-left text-[#ffffffb3] space-y-3">
                <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-3 text-[#6E86FF]"/>Managed Workflow Automation</li>
                <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-3 text-[#6E86FF]"/>Custom Workflow Design & Implementation</li>
                <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-3 text-[#6E86FF]"/>Business Process Automation Consulting (Naperville/Chicago Focus)</li>
                <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-3 text-[#6E86FF]"/>API & Systems Integration Solutions</li>
                <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-3 text-[#6E86FF]"/>Automated Reporting & Data Management</li>
           </ul>
        </div>

        {/* Local Testimonials Placeholder */}
        <div className="mb-16 text-center p-8 bg-[#0d0d12]/70 rounded-lg border border-[#6E86FF]/20 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4 text-[#ffffffde]">Trusted by Naperville & Chicago Businesses</h2>
          <p className="text-[#ffffffb3] italic">(Local client testimonials and case studies coming soon!)</p>
        </div>

        {/* Call to Action - Enhanced */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-[#ffffffde]">Ready to Automate Your Chicagoland Business?</h2>
          <p className="text-lg mb-8 text-[#ffffffb3] max-w-3xl mx-auto">Let's discuss how our managed automation services can transform your Naperville or Chicago-based operations. Get started with a free consultation.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <Link to="/book-a-call">
              <ShinyButton
                className="rounded-full text-sm font-normal px-5 py-2 border-[0.8px] border-solid border-[#1a1d31]"
                style={{
                  background: '#0d0d12',
                  '--primary': '#6E86FF',
                  boxShadow: '0 0 15px 2px rgba(110, 134, 255, 0.5)',
                } as React.CSSProperties}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA]">
                  Schedule Your Free Consultation
                </span>
              </ShinyButton>
            </Link>
            <Link to="/contact">
              <ShinyButton
                className="rounded-full text-sm font-normal px-5 py-2 border-[0.8px] border-solid border-[#ffffff66]"
                style={{
                  background: '#0d0d12',
                  '--primary': '#E0E0E0',
                  boxShadow: '0 0 15px 2px rgba(255, 255, 255, 0.3)',
                } as React.CSSProperties}
              >
                <span className="text-[#ffffffde]">
                  Ask a Question
                </span>
              </ShinyButton>
            </Link>
          </div>
        </div>

        {/* From the Blog Section */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <h2 className="text-2xl font-semibold text-center mb-8 text-[#ffffffde]">Learn More From Our Blog</h2>
          <div className="max-w-2xl mx-auto">
            <Link 
              to="/blog/chicago-automation-opportunities" 
              className="group block bg-[#0d0d12] rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 mb-6"
            >
              <div className="p-6">
                <span className="text-[#6E86FF] text-sm mb-2 block">Local Business</span>
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#6E86FF] transition-colors">
                  Boosting Efficiency for Naperville & Chicago Businesses: Top 3 Workflow Automation Opportunities
                </h4>
                <p className="text-white/70 text-sm">
                  Discover automation strategies tailored for the Chicagoland market to streamline operations and drive growth.
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Office Location */}
        <div className="mt-16 pt-10 border-t border-white/10 text-center">
          <h3 className="text-xl font-semibold mb-4 text-[#ffffffde]">Visit Our Naperville Office</h3>
          <p className="text-[#ffffffb3] mb-4">Syntora<br/>1056 N Mill St<br/>Naperville, IL 60563</p>
          <p className="text-[#ffffffb3] mb-4">Phone: <a href="tel:+1-630-743-9686" className="hover:text-[#6E86FF] transition-colors">+1 (630) 743-9686</a></p>
        </div> 

      </div>
    </section>
  );
}; 