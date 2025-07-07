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

Every page should have unique, descriptive meta tags passed to the `Layout` component via the `seo` prop. The `Layout` component uses the `SEO` component internally.

Example for a page component:
```tsx
const MyPage = () => {
  const seo = {
    title: "My Page Title | Syntora",
    description: "A unique, compelling description of the page content (150-160 characters).",
    canonicalUrl: "/my-page-path"
  };

  return (
    <Layout seo={seo}>
      {/* Page content goes here */}
    </Layout>
  );
};
```

Guidelines:
- **Title Tags**: 50-60 characters, include primary keyword near the beginning
- **Meta Descriptions**: 150-160 characters, compelling with a call to action
- **Canonical URLs**: Always include the page's path to prevent duplicate content issues. It must be a relative path starting with `/`.

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
- **Image Size**: Specify `width` and `height` to prevent layout shift
- **Optimization**: Images should be compressed and served in modern formats (e.g., WebP)
- **Priority**: Use the `priority` prop for above-the-fold images to load them faster

## Page Speed

- Aim for a Load Contentful Paint (LCP) of 2.5 seconds or less
- Minimize main-thread work and JavaScript execution time
- Use code splitting to load only necessary code for each page
- Defer loading of offscreen images and non-critical CSS

## Mobile Responsiveness

- Ensure the website is fully usable and looks great on all device sizes
- Use responsive design techniques (e.g., media queries, flexible grids)
- Test on real devices or using browser developer tools

## Structured Data

- Use Schema.org structured data to help search engines understand your content
- The `SEO` component handles basic structured data (Organization, LocalBusiness)
- For specific page types (e.g., articles, products), you can pass additional structured data via the `structuredData` prop in the `seo` object.

Example:
```tsx
const seo = {
  // ... other seo props
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "My Article Title",
    "author": {
      "@type": "Person",
      "name": "John Doe"
    },
    "datePublished": "2024-01-01"
  }
};
```

## Testing and Monitoring

- Regularly check Google Search Console for indexing issues and performance reports
- Use the SEO diagnostic tool in development (check the browser console) to catch common mistakes
- Periodically run Lighthouse audits to check for performance, accessibility, and SEO best practices

## Best Practices Checklist

1. For new pages, create an `seo` object with `title`, `description`, and `canonicalUrl`.
2. Pass the `seo` object to the `Layout` component.
3. Ensure every page has a single `<h1>` tag.
4. All images must have descriptive `alt` text.
5. Test the page on mobile devices. 