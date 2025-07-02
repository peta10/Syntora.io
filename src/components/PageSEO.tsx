import React from 'react';
import { Helmet } from 'react-helmet-async';

interface PageSEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
  schemaData?: object;
}

/**
 * PageSEO component for setting page-specific SEO metadata
 * 
 * Usage example:
 * <PageSEO 
 *   title="About Syntora | Workflow Automation Experts"
 *   description="Learn about Syntora's workflow automation services and our expertise in n8n."
 *   canonicalPath="/about"
 * />
 */
export const PageSEO: React.FC<PageSEOProps> = ({
  title,
  description,
  canonicalPath = '',
  ogImage = '/assets/og-default.jpg',
  ogType = 'website',
  schemaData,
}) => {
  const domain = 'https://syntora.io';
  const fullUrl = `${domain}${canonicalPath}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={`${domain}${ogImage}`} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${domain}${ogImage}`} />
      
      {/* Additional Schema.org Structured Data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default PageSEO; 