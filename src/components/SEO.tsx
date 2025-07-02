import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  videoUrl?: string;
  videoThumbnail?: string;
  articlePublishDate?: string;
  articleModifiedDate?: string;
  structuredData?: object;
}

export const SEO = ({
  title,
  description,
  keywords = "Chicago automation, business process automation, workflow optimization",
  canonicalUrl,
  ogImage = "https://syntora.io/assets/og-default.png",
  ogType = "website",
  videoUrl,
  videoThumbnail,
  articlePublishDate,
  articleModifiedDate,
  structuredData
}: SEOProps) => {
  const baseUrl = "https://syntora.io";
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;
  
  // Base structured data for organization
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Syntora",
    "url": "https://syntora.io",
    "logo": "https://syntora.io/assets/SyntoraLogo.png",
    "description": "Syntora provides professional workflow automation services in Chicago and Naperville area",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": ["Chicago", "Naperville"]
    }
  };

  // Merge with any additional structured data
  const finalStructuredData = structuredData 
    ? { ...baseStructuredData, ...structuredData }
    : baseStructuredData;

  // Video structured data if video is present
  const videoStructuredData = videoUrl ? {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": title,
    "description": description,
    "thumbnailUrl": videoThumbnail,
    "uploadDate": articlePublishDate || new Date().toISOString(),
    "contentUrl": videoUrl
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title} | Syntora</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Syntora" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Article Meta Tags */}
      {articlePublishDate && (
        <meta property="article:published_time" content={articlePublishDate} />
      )}
      {articleModifiedDate && (
        <meta property="article:modified_time" content={articleModifiedDate} />
      )}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Video Structured Data */}
      {videoStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(videoStructuredData)}
        </script>
      )}
    </Helmet>
  );
}; 