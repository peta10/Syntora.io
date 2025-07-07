import React, { useEffect, ReactNode } from 'react';
import { Navbar } from '@/pages/Navbar'; // Adjust path based on your structure
import { Footer } from '@/pages/Footer/Footer'; // Adjust path based on your structure
import { Helmet } from 'react-helmet-async'; // Import Helmet
import ChatWidget from '@/components/chat-widget'; // Import the ChatWidget
import { useSEODiagnostic } from '@/lib/seo-diagnostic'; // Import the SEO diagnostic tool
import { SEO } from '../SEO';

interface LayoutProps {
  children: ReactNode;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: string;
    videoUrl?: string;
    videoThumbnail?: string;
    articlePublishDate?: string;
    articleModifiedDate?: string;
    structuredData?: object;
  };
}

// Define LocalBusiness Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Syntora",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1056 N Mill St",
    "addressLocality": "Naperville",
    "addressRegion": "IL",
    "postalCode": "60563",
    "addressCountry": "US"
  },
  "telephone": "+1-630-743-9686",
  "url": "https://syntora.io",
  "description": "Syntora provides managed workflow automation services, specializing in n8n, for businesses in Naperville, Chicagoland, and across the US."
  // Add logo URL here if available: "logo": "URL_TO_LOGO.png"
};

export const Layout = ({ children, seo }: LayoutProps) => {
  // Run SEO diagnostic in development mode only
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      useSEODiagnostic();
    }
  }, []);

  // Default SEO values
  const defaultSeo = {
    title: "Professional Workflow Automation Services",
    description: "Syntora provides expert workflow automation services in Chicago and Naperville. Transform your business processes with custom automation solutions.",
    keywords: "Chicago automation, business process automation, workflow optimization, Naperville automation services",
  };

  const finalSeo = { ...defaultSeo, ...seo };

  return (
    <>
      <SEO {...finalSeo} />
      <div className="relative w-full min-h-screen bg-black overflow-x-hidden flex flex-col">
        {/* Add Helmet for head management */}
        <Helmet>
          {/* Default Title - Override on specific pages */}
          <title>Syntora | Managed Workflow Automation Services</title>
          
          {/* Essential Meta Tags */}
          <meta name="description" content="Syntora offers managed workflow automation services to streamline business processes. Serving Naperville, Chicagoland, and the US." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta charSet="UTF-8" />
          
          {/* Open Graph / Social Media */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Syntora | Managed Workflow Automation Services" />
          <meta property="og:description" content="Streamline your business processes with Syntora's managed workflow automation services." />
          <meta property="og:url" content="https://syntora.io" />
          <meta property="og:site_name" content="Syntora" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Syntora | Managed Workflow Automation Services" />
          <meta name="twitter:description" content="Streamline your business processes with Syntora's managed workflow automation services." />
          
          {/* Inject LocalBusiness Schema globally */}
          <script type="application/ld+json">
            {JSON.stringify(localBusinessSchema)}
          </script>
        </Helmet>
        
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />

        {/* Add the ChatWidget to all pages */}
        <ChatWidget />
      </div>
    </>
  );
};

export default Layout; 