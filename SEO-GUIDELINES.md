# SEO Guidelines for Syntora Website

This document outlines the SEO best practices that should be followed when developing or modifying the Syntora website.

## Table of Contents

1. [Meta Tags](#meta-tags)
2. [URL Structure](#url-structure)
3. [Header Tags (H1-H6)](#header-tags)
4. [Images](#images)
5. [Page Speed](#page-speed)
6. [Mobile Responsiveness](#mobile-responsiveness)
7. [Schema.org Structured Data](#structured-data)
8. [Testing and Monitoring](#testing-and-monitoring)

## Meta Tags

Every page should have unique, descriptive meta tags using the `PageSEO` component:

```tsx
<PageSEO 
  title="Page Title | Syntora"
  description="A unique, compelling description of the page content (150-160 characters)."
  canonicalPath="/page-path"
/>
```

Guidelines:
- **Title Tags**: 50-60 characters, include primary keyword near the beginning
- **Meta Descriptions**: 150-160 characters, compelling with a call to action
- **Canonical URLs**: Always include to prevent duplicate content issues

## URL Structure

- Use descriptive, keyword-rich URLs
- Separate words with hyphens (not underscores)
- Keep URLs short and readable
- Avoid URL parameters when possible

Example: `/workflow-automation-chicago` instead of `/services?type=workflow&location=chicago`

## Header Tags

- Each page should have exactly one `<h1>` tag
- Use heading tags hierarchically (h1 → h2 → h3)
- Include relevant keywords in headings
- Don't skip heading levels (e.g., don't go from h1 to h3)

Example:
```tsx
<h1>Workflow Automation Services in Chicago</h1>
<section>
  <h2>How Our Services Work</h2>
  <p>...</p>
  <h3>Step 1: Assessment</h3>
  <p>...</p>
</section>
```

## Images

Always use the optimized `Image` component:

```tsx
<Image 
  src="/path/to/image.jpg" 
  alt="Descriptive alt text" 
  width={800} 
  height={600} 
  priority={isHeroImage} 
/>
```

Guidelines:
- **Alt Text**: Descriptive alt text (very important for SEO and accessibility)
- **Dimensions**: Always specify width and height attributes to prevent layout shifts
- **File Size**: Compress images before adding to the repository
- **Format**: Use WebP format when possible, with fallbacks for older browsers
- **Priority**: Set `priority={true}` for above-the-fold images

## Page Speed

- Use code splitting for larger components
- Lazy load images and non-critical components
- Minimize third-party scripts
- Follow the build optimization settings in `vite.config.ts`

## Mobile Responsiveness

- Ensure all pages are fully responsive
- Use responsive media queries for different screen sizes
- Test on multiple devices and screen sizes
- Use the `viewport` meta tag (already set in Layout component)

## Structured Data

Use Schema.org markup for rich results:

```tsx
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "datePublished": "2023-05-25",
  "publisher": {
    "@type": "Organization",
    "name": "Syntora",
    "logo": {
      "@type": "ImageObject",
      "url": "https://syntora.io/assets/logo.png"
    }
  }
};

<PageSEO 
  // other props
  schemaData={articleSchema} 
/>
```

Common schema types to use:
- LocalBusiness (already in Layout)
- Article (for blog posts)
- FAQPage (for FAQ sections)
- Service (for service pages)
- BreadcrumbList (for navigation)

## Testing and Monitoring

- Use the built-in SEO diagnostic tool during development
- Test site with Google's Mobile-Friendly Test
- Check structured data with Google's Structured Data Testing Tool
- Monitor Google Search Console regularly
- Run periodic Lighthouse audits with `npm run audit`

---

## Development Workflow

1. For new pages, start with the `PageSEO` component
2. Ensure proper heading structure (one h1, followed by h2, h3, etc.)
3. Use the `Image` component for all images with proper alt text
4. Add appropriate Schema.org structured data
5. Test with the SEO diagnostic tool in dev mode

For questions or clarifications, refer to this document or contact the team lead. 