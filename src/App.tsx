import { useEffect } from 'react'; // Import useEffect
import Lenis from '@studio-freight/lenis'; // Import Lenis
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import { trackPageView } from './lib/analytics'; // Import our analytics utility
import { SectionFramer } from './screens/SectionFramer'; // Adjust path if needed
import TimeAuditPage from './pages/TimeAudit/TimeAudit'; // Adjust path if needed
import { Contact } from './pages/Contact/Contact'; // Import the Contact component
import { Layout } from './components/layout/Layout'; // Import the Layout component
import BookingPage from './pages/BookingPage'; // Import the new BookingPage
import PricingPage1 from './pages/PricingPage/PricingPage1'; // Import the new Pricing page
import { Features } from './pages/Features/Features'; // Import the new Features page
import About from './pages/About/About'; // Import the new About page
import { ChicagoNapervilleAutomation } from './pages/Local/ChicagoNapervilleAutomation'; // Import the new local page
import { PrivacyPolicy } from './pages/Privacy/PrivacyPolicy'; // Import the new Privacy Policy page
import { NotFound } from './pages/Error/NotFound'; // Import the 404 page
import { BlogIndex } from './pages/Blog/BlogIndex'; // Import the Blog Index page
import { N8nVsZapierMake } from './pages/Blog/Articles/N8nVsZapierMake'; // Import the first blog article
import { StopManualDataEntry } from './pages/Blog/Articles/StopManualDataEntry'; // Import the second blog article
import { DiyVsManagedAutomation } from './pages/Blog/Articles/DiyVsManagedAutomation'; // Import the third blog article
import { ChicagoAutomationOpportunities } from './pages/Blog/Articles/ChicagoAutomationOpportunities'; // Import the fourth blog article
import ChatPage from './pages/ChatPage'; // Import the ChatPage component

// Inner component to handle Lenis and anchor scrolling, allowing access to router hooks like useLocation
// Define the gtag function type to avoid TypeScript errors
declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}

function AppContent() {
  const location = useLocation(); // Get location to potentially reset scroll on navigation

  // Track page views in Google Analytics when the route changes
  useEffect(() => {
    // Use our utility function to track page views
    trackPageView(location.pathname + location.search);
    
    // Remove this in production if you don't want console logs
    console.log('GA Pageview tracked:', location.pathname);
  }, [location]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // --- Anchor Link Integration ---
    const handleClick = (event: MouseEvent) => {
      let targetElement: HTMLElement | null = event.target as HTMLElement;
      // Find the anchor tag, searching up the DOM tree if the click was inside it
      while (targetElement && targetElement.tagName !== 'A') {
        targetElement = targetElement.parentElement;
      }

      if (targetElement && targetElement.tagName === 'A') {
        const anchor = targetElement as HTMLAnchorElement;
        const href = anchor.getAttribute('href');

        // Check if it's an internal anchor link on the same page
        if (href && href.startsWith('#')) {
           // Check if the link's pathname matches the current page pathname
           // This prevents hijacking links intended for other pages
           const linkUrl = new URL(anchor.href); // Get full URL to check pathname
           if (linkUrl.pathname === window.location.pathname) {
               event.preventDefault(); // Prevent default jump
               // Use Lenis to scroll smoothly
               lenis.scrollTo(href, {
                  // offset: 0, // Optional: Adjust offset if you have a fixed header
                  // duration: 1.5, // Optional: Adjust scroll duration
                  // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Optional: Custom easing
               });
               console.log("Lenis scrolling to:", href);
           }
        }
      }
    };

    document.addEventListener('click', handleClick);
    // --- End Anchor Link Integration ---

    // Cleanup function
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener('click', handleClick); // Remove listener
    };
  }, []); // Run once on mount

   // Optional: Scroll to top on route change
   useEffect(() => {
     window.scrollTo(0, 0); // Native scroll to top instantly
     // OR If you want Lenis to handle scroll to top on nav:
     // const lenisInstance = useLenis(); // Need a way to access the instance if needed here
     // lenisInstance?.scrollTo(0, { immediate: true });
   }, [location.pathname]); // Trigger on pathname change


  // The actual routes rendering
  return (
      <Routes>
        <Route path="/" element={<Layout><SectionFramer /></Layout>} />
        <Route 
          path="/time-audit" 
          element={<Layout><TimeAuditPage /></Layout>} // Wrap with Layout
        />
        <Route 
          path="/contact" 
          element={<Layout><Contact /></Layout>} // Wrap with Layout
        />
        {/* Add route for BookingPage */}
        <Route 
          path="/book-a-call" 
          element={<Layout><BookingPage /></Layout>} // Wrap with Layout
        />
        {/* Add route for PricingPage1 */}
        <Route 
          path="/pricing" 
          element={<Layout><PricingPage1 /></Layout>} // Wrap with Layout
        />
        {/* Add route for Features page */}
        <Route
          path="/features"
          element={<Layout><Features /></Layout>} // Wrap with Layout
        />
        {/* Add route for About page */}
        <Route
          path="/about"
          element={<Layout><About /></Layout>} // Wrap with Layout
        />
        {/* Add route for Chicago/Naperville page */}
        <Route
          path="/chicago-naperville-automation-services"
          element={<Layout><ChicagoNapervilleAutomation /></Layout>} // Wrap with Layout
        />
        {/* Add route for Privacy Policy page */}
        <Route
          path="/privacy-policy"
          element={<Layout><PrivacyPolicy /></Layout>} // Wrap with Layout
        />
        {/* Blog routes */}
        <Route
          path="/blog"
          element={<Layout><BlogIndex /></Layout>}
        />
        <Route
          path="/blog/n8n-vs-zapier-make"
          element={<Layout><N8nVsZapierMake /></Layout>}
        />
        <Route
          path="/blog/stop-manual-data-entry"
          element={<Layout><StopManualDataEntry /></Layout>}
        />
        <Route
          path="/blog/diy-vs-managed-automation"
          element={<Layout><DiyVsManagedAutomation /></Layout>}
        />
        <Route
          path="/blog/chicago-automation-opportunities"
          element={<Layout><ChicagoAutomationOpportunities /></Layout>}
        />
        {/* Chat Page - We add the Chat Widget to any page that needs it */}
        <Route
          path="/chat"
          element={<Layout><ChatPage /></Layout>}
        />
        {/* 404 Page - catch-all for undefined routes */}
        <Route
          path="*"
          element={<Layout><NotFound /></Layout>}
        />
        {/* Add other routes here if needed */}
      </Routes>
  );
}

// Main App component wraps the content with the Router
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App; 