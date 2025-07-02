import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/pages/Navbar/Navbar';
import { BookACallHero } from './BookACall/BookACallHero';
import { FAQSection } from '@/pages/FAQ/FAQ';

export const BookingPage: React.FC = () => {
  // State to track screen width for responsive layout
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const calInitialized = useRef(false);

  // Schema definition
  const bookingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Book a Call with Syntora",
    "description": "Schedule a free consultation to discuss your workflow automation needs",
    "mainEntity": {
      "@type": "Service",
      "name": "Business Automation Consultation",
      "description": "15-minute discovery call to discuss your workflow automation needs",
      "provider": {
        "@type": "Organization",
        "name": "Syntora",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1056 N Mill St",
          "addressLocality": "Naperville",
          "addressRegion": "IL",
          "postalCode": "60563",
          "addressCountry": "US"
        }
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  };

  // Effect to check screen size initially and on resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add resize listener
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Initialize Cal embed using user-provided script
  useEffect(() => {
    if (calInitialized.current) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "15min", {origin:"https://cal.com"});
Cal.ns["15min"]("inline", {
  elementOrSelector:"#my-cal-inline",
  config: {"layout":"month_view"},
  calLink: "parker-gawne/15min",
});
Cal.ns["15min"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#292929"},"dark":{"cal-brand":"#6E86FF"}},"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.body.appendChild(script);
    calInitialized.current = true;

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black">
        {/* SEO metadata and schema */}
        <Helmet>
          <title>Book a 15-Minute Call | Syntora Workflow Automation</title>
          <meta name="description" content="Schedule a free 15-minute discovery call with Syntora to discuss your business process automation needs. Find a time that works for you." />
          <meta name="keywords" content="workflow automation, book a call, consultation, Syntora, business process, automation services" />
          <script type="application/ld+json">
            {JSON.stringify(bookingSchema)}
          </script>
        </Helmet>
        
        <Navbar />
        <BookACallHero />
        <main className="flex-grow mt-6 sm:mt-8 md:mt-12 px-4 sm:px-6 md:px-8">
            <div className="w-full max-w-[1200px] mx-auto rounded-lg overflow-hidden shadow-lg"> 
                <div className={`bg-[#0d0d12] p-2 sm:p-4 rounded-lg ${isMobile ? 'mx-0' : 'mx-auto'}`}>
                    {/* Cal inline embed code begins */}
                    <div
                      id="my-cal-inline"
                      style={{
                        width: "100%",
                        height: "100%",
                        overflow: "scroll"
                      }}
                    />
                    {/* Cal inline embed code ends */}
                </div>
            </div>
        </main>
        <FAQSection />
    </div>
  );
};

// Add TypeScript definitions for Cal
declare global {
  interface Window {
    Cal?: {
      (namespace: string, command: string, options: any): void;
      (command: string, options: any): void;
      (command: string, namespace: string, options: any): void;
      ns: {
        [key: string]: any;
      };
      q?: any[];
      loaded?: boolean;
    };
  }
}

export default BookingPage;