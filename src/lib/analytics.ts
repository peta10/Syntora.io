// Google Analytics utility functions

/**
 * Track a page view in Google Analytics
 */
export const trackPageView = (path: string, title?: string) => {
  if (!window.gtag) return;
  
  window.gtag('event', 'page_view', {
    page_title: title || document.title,
    page_location: window.location.href,
    page_path: path
  });
};

/**
 * Track a custom event in Google Analytics
 */
export const trackEvent = (
  eventName: string, 
  eventParams: Record<string, any> = {}
) => {
  if (!window.gtag) return;
  
  window.gtag('event', eventName, eventParams);
};

/**
 * Track user interaction with important elements
 */
export const trackInteraction = (
  category: string,
  action: string,
  label?: string,
  value?: number
) => {
  trackEvent(action, {
    event_category: category,
    event_label: label,
    value: value
  });
}; 