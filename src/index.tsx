import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async'; // Needed for Layout's Helmet
import App from './App'; // Assuming your main App component is here
import './global.css'; // Make sure Tailwind styles are imported globally

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the app element');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HelmetProvider> {/* Wrap App with HelmetProvider */}
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);
