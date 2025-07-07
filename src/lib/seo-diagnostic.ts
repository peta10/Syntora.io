/**
 * SEO Diagnostic Tool
 * 
 * Provides utilities to check for common SEO issues in development mode.
 * This file is not intended to be included in production builds.
 */

interface SEODiagnostic {
  severity: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
  fix?: string;
}

/**
 * Checks for common SEO issues on the page
 * Call this function in development only
 */
export const runSEODiagnostic = (): SEODiagnostic[] => {
  if (process.env.NODE_ENV === 'production') {
    return [];
  }
  
  const issues: SEODiagnostic[] = [];
  
  // Check for title
  const title = document.querySelector('title');
  if (!title) {
    issues.push({
      severity: 'error',
      message: 'No title tag found',
      fix: 'Add a <title> tag to your document head or use the SEO component'
    });
  } else if (title.textContent?.length === 0) {
    issues.push({
      severity: 'error',
      message: 'Empty title tag found',
      fix: 'Add content to your <title> tag'
    });
  } else if (title.textContent && (title.textContent.length < 10 || title.textContent.length > 60)) {
    issues.push({
      severity: 'warning',
      message: 'Title tag length is not optimal (should be between 10-60 characters)',
      element: title.textContent,
      fix: 'Adjust your title tag length to be between 10-60 characters'
    });
  }
  
  // Check for meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    issues.push({
      severity: 'error',
      message: 'No meta description found',
      fix: 'Add a meta description tag to your document head'
    });
  } else if (!metaDescription.getAttribute('content') || metaDescription.getAttribute('content')?.length === 0) {
    issues.push({
      severity: 'error',
      message: 'Empty meta description found',
      fix: 'Add content to your meta description tag'
    });
  } else if (metaDescription.getAttribute('content') && 
            (metaDescription.getAttribute('content')!.length < 50 || 
             metaDescription.getAttribute('content')!.length > 160)) {
    issues.push({
      severity: 'warning',
      message: 'Meta description length is not optimal (should be between 50-160 characters)',
      element: metaDescription.getAttribute('content') || '',
      fix: 'Adjust your meta description length to be between 50-160 characters'
    });
  }
  
  // Check for H1
  const h1Elements = document.querySelectorAll('h1');
  if (h1Elements.length === 0) {
    issues.push({
      severity: 'error',
      message: 'No H1 tag found',
      fix: 'Add an H1 tag to your page'
    });
  } else if (h1Elements.length > 1) {
    issues.push({
      severity: 'warning',
      message: `Multiple H1 tags found (${h1Elements.length})`,
      fix: 'Use only one H1 tag per page'
    });
  }
  
  // Check for canonical link
  const canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    issues.push({
      severity: 'warning',
      message: 'No canonical link found',
      fix: 'Add a canonical link tag to your document head'
    });
  }
  
  // Check for image alt attributes
  const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
  if (imagesWithoutAlt.length > 0) {
    issues.push({
      severity: 'warning',
      message: `${imagesWithoutAlt.length} images without alt attributes found`,
      fix: 'Add alt attributes to all images'
    });
  }

  // Check for structured data
  const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
  if (structuredData.length === 0) {
    issues.push({
      severity: 'info',
      message: 'No structured data (schema.org) found',
      fix: 'Consider adding structured data to improve search results'
    });
  }
  
  return issues;
};

/**
 * Logs SEO issues to the console in development mode
 */
export const logSEOIssues = () => {
  if (process.env.NODE_ENV === 'production') {
    return;
  }
  
  const issues = runSEODiagnostic();
  
  if (issues.length === 0) {
    console.log('%c✅ No SEO issues detected', 'color: green; font-weight: bold');
    return;
  }
  
  console.group('%c🔍 SEO Diagnostic Results', 'color: blue; font-weight: bold');
  
  issues.forEach(issue => {
    let style = 'font-weight: bold;';
    
    switch (issue.severity) {
      case 'error':
        style += ' color: red';
        break;
      case 'warning':
        style += ' color: orange';
        break;
      case 'info':
        style += ' color: blue';
        break;
    }
    
    console.log(`%c${issue.severity.toUpperCase()}: ${issue.message}`, style);
    
    if (issue.element) {
      console.log(`Element: "${issue.element}"`);
    }
    
    if (issue.fix) {
      console.log(`Fix: ${issue.fix}`);
    }
    
    console.log('---');
  });
  
  console.groupEnd();
};

/**
 * SEO diagnostic hook - only use in development
 */
export const useSEODiagnostic = () => {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    // We use setTimeout to ensure the DOM has loaded
    setTimeout(() => {
      logSEOIssues();
    }, 1000);
  }
};

export default useSEODiagnostic;