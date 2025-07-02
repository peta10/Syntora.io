# Syntora Project

## Project Overview

This project is a React-based web application showcasing Syntora's business automation services. It utilizes TypeScript for type safety, Vite for a fast development experience and build process, and Tailwind CSS for utility-first styling. Key UI components are built following Shadcn UI principles, leveraging Radix UI primitives, and animations are implemented using Framer Motion. A key feature is an integrated live chat widget powered by Google Gemini AI and Supabase for real-time communication and backend services.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (LTS version recommended)
- npm (typically included with Node.js) or yarn/pnpm

## Getting Started

**Installation:**

1.  **Clone the repository** (if you haven't already).
2.  **Navigate to the project directory:**
    ```bash
    cd path/to/your/project/directory
    ```
3.  **Install dependencies:** Use your preferred package manager.
    ```bash
    npm install
    # or
    # yarn install
    # or
    # pnpm install
    ```

**Running the Project:**

-   **Development:** To start the development server with hot module reloading:
    ```bash
    npm run dev
    # or yarn dev / pnpm dev
    ```
    Access the application via the local URL provided (e.g., `http://localhost:5173`).

-   **Build:** To create an optimized production build:
    ```bash
    npm run build
    # or yarn build / pnpm build
    ```
    The output files will be located in the `dist` directory (or as configured).

-   **Production Preview:** To serve the production build locally for testing:
    ```bash
    npm run preview
    # or yarn preview / pnpm preview
    ```

## Folder Structure

The project follows a standard structure for Vite + React applications:

```
project/
├── public/             # Static assets (images, fonts, sitemap.xml, robots.txt etc.) accessible directly
│   └── assets/         # Favicons, manifest, etc.
├── src/
│   ├── components/     # Reusable UI components (Button, Card, etc.)
│   │   ├── ui/           # Shadcn UI specific components
│   │   ├── layout/       # Layout components like Navbar, Footer, Layout.tsx
│   │   ├── chat-widget.tsx # Main component for the floating chat button and window
│   │   └── syntora-chat.tsx  # Component handling the chat interface and logic
│   ├── data/           # Static data, mock data (e.g., timeAuditData.ts)
│   ├── hooks/          # Custom React hooks (e.g., use-syntora-chat.tsx, use-chat-scroll.tsx)
│   ├── lib/            # Utility functions (e.g., cn for Tailwind class merging, Supabase client)
│   ├── pages/          # Page components and sections specific to certain pages/routes
│   │   ├── About/
│   │   ├── Bespoke/
│   │   ├── Blog/
│   │   ├── BookACall/
│   │   ├── Contact/
│   │   ├── Error/
│   │   ├── FAQ/
│   │   ├── Features/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── Infra/
│   │   ├── Local/
│   │   ├── Navbar/
│   │   ├── Pricing/
│   │   ├── PricingPage/
│   │   ├── Privacy/
│   │   ├── Process/
│   │   ├── Supremacy/
│   │   └── TimeAudit/
│   ├── screens/        # Top-level screen/layout containers (e.g., SectionFramer)
│   ├── stores/         # State management stores (e.g., Zustand for TimeAudit)
│   ├── App.tsx         # Main application component with routing
│   └── index.tsx       # Main application entry point (React root rendering)
├── .env                # Environment variables (local, untracked)
├── .env.example        # Example environment variables (tracked)
├── .gitignore          # Files and folders ignored by Git
├── index.html          # Root HTML file for Vite
├── package.json        # Project dependencies and scripts
├── postcss.config.js   # PostCSS configuration (used by Tailwind)
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript compiler options
└── vite.config.js      # Vite configuration
```

## Environment Variables

-   Configuration variables (like API keys or base URLs) should be managed using environment variables.
-   Create a `.env` file in the project root for local development. Copy the structure from `.env.example`.
-   **Do not commit `.env` files containing sensitive information.**
-   Access environment variables in the code using `import.meta.env.VITE_VARIABLE_NAME`.
-   Refer to the [Vite documentation](https://vitejs.dev/guide/env-and-mode.html) for more details on modes and `.env` file loading.

## Development Considerations

Beyond core functionality, remember to address these critical aspects:

-   **SEO:** Implement basic SEO practices (meta tags, titles, descriptions). Consider using `react-helmet-async` or framework-specific features. Ensure semantic HTML is used.
-   **Analytics:** Integrate web analytics (e.g., Google Analytics 4, Plausible, Fathom) to track user behavior and site performance. Define key events and conversions.
-   **Performance:** Optimize loading times (image optimization, code splitting/lazy loading, minimize bundle size). Regularly audit performance using Lighthouse or similar tools.
-   **Accessibility (a11y):** Ensure the application is usable by people with disabilities. Use semantic HTML, provide ARIA attributes where necessary, ensure keyboard navigation, and test color contrast. Use tools like Axe DevTools for checks.

## Google Integration

-   **Google Search Console:** Verify site ownership and submit the sitemap to monitor search performance and indexing issues.
-   **Google Business Profile:** If applicable, ensure the website link on the Google Business Profile is correct and up-to-date.

## Coding Conventions

-   **Naming:** Follow standard conventions (e.g., `PascalCase` for components, `camelCase` for variables/functions). Use descriptive names.
-   **Import Paths:**
    -   Prefer using path aliases (e.g., `@/components/ui/button`) configured in `tsconfig.json` and `vite.config.js` for cleaner imports.
    -   *Note: There have been recent changes moving components from `src/components` subfolders to `src/pages`. Ensure imports reflect the correct current location. Resolve any path issues indicated by Vite or TypeScript.*
-   **Linting & Formatting:** Use ESLint and Prettier (or similar tools) to enforce code style consistency and catch potential errors. Configure these tools and integrate them into your editor and pre-commit hooks (e.g., using Husky).
-   **TypeScript:** Leverage TypeScript's features for strong typing. Avoid using `any` where specific types can be defined.

## Testing

-   **Unit/Integration Tests:** Implement tests for critical components, utility functions, and potentially state management logic. Consider using Vitest (Vite's testing framework) or Jest with React Testing Library.
-   **End-to-End (E2E) Tests:** For testing user flows across the application, consider tools like Cypress or Playwright.

## CI/CD & Deployment

-   **Continuous Integration (CI):** Set up a CI pipeline (e.g., GitHub Actions, GitLab CI) to automatically run linters, tests, and builds on pushes or pull requests.
-   **Deployment:** Configure automated deployment to your hosting provider (e.g., Vercel, Netlify, AWS Amplify) on merges to the main branch. Ensure environment variables are correctly configured for production.

## Production Readiness Checklist

Before launching or deploying a significant update:

-   [ ] **Code Complete & Reviewed:** All features implemented, code reviewed.
-   [ ] **Dependencies Updated & Secure:** Check for outdated or vulnerable dependencies (`npm audit`).
-   [ ] **Functionality Tested:** Core user flows tested across major browsers (Chrome, Firefox, Safari, Edge).
-   [ ] **Responsive Design Verified:** Layout checked on various screen sizes (desktop, tablet, mobile).
-   [ ] **Performance Optimized:** Lighthouse score checked, assets optimized.
-   **Accessibility Checked:** Basic a11y tests passed (keyboard navigation, contrast, semantic HTML).
-   [ ] **SEO Basics Implemented:** Titles, meta descriptions set.
-   [ ] **Analytics Integrated & Working:** Tracking codes installed, key events firing.
-   [ ] **Environment Variables Configured:** Production `.env` variables are set correctly in the deployment environment.
-   [ ] **Build Successful:** Production build completes without errors.
-   [ ] **Domain & HTTPS Configured:** Correct domain points to the deployment, HTTPS is enforced.
-   [ ] **Error Monitoring:** (Optional but recommended) Set up error tracking (e.g., Sentry).
-   [ ] **Google Search Console Verified:** Site added and sitemap submitted.
-   [ ] **README Updated:** Documentation reflects the current state.

## Backend & Integrations

The application utilizes several key backend services and integrations:

-   **Supabase:** Serves as the primary backend for the live chat feature.
    -   **Realtime:** Powers the real-time messaging functionality.
    -   **Database:** Stores chat sessions and message history (e.g., in tables like `gemini_messages`, `chat_sessions`, `chat_messages`).
    -   **Edge Functions:** Hosts serverless functions that interact with the Google Gemini API for generating AI responses.
-   **Google Gemini AI:** The AI model (specifically Gemini 1.5 Flash) used to power the chatbot's conversational capabilities and generate responses.

## Live Chat Feature with Gemini AI

Syntora now includes a live chat widget that appears on all pages. This widget allows visitors to interact with an AI-powered support agent.

### Features

-   Real-time chat interface.
-   AI-powered responses using Google Gemini 1.5 Flash.
-   Conversation history persisted using Supabase.
-   Floating chat widget consistently available across the site (integrated via `Layout.tsx`).
-   Custom system prompt to tailor AI responses to Syntora's brand and services.

### Technical Implementation

The chat solution consists of several key parts:

1.  **Frontend Chat Components (`src/components/chat-widget.tsx`, `src/components/syntora-chat.tsx`):** React components that provide the floating chat button, the chat window, message display, and input handling.
2.  **Custom Hook (`src/hooks/use-syntora-chat.tsx`):** Manages chat state, message sending, interaction with the Gemini API (via Supabase Edge Function or direct REST call as currently implemented), and handles the system prompt.
3.  **Supabase Backend:**
    -   **Database:** Stores chat messages (e.g., in `gemini_messages`, `chat_sessions`, `chat_messages` tables if fully implemented for history and context). Currently, the `use-syntora-chat.tsx` hook calls the Gemini API directly, but the system is designed for potential Supabase backend processing. *Note: The README previously mentioned direct Supabase storage and Edge Functions for Gemini interaction, which is the more robust long-term approach. The current implementation in `use-syntora-chat.tsx` calls Gemini via `fetch` directly from the client-side hook for simplicity in this iteration.*
    -   **Realtime (Optional Enhancement):** While direct API calls are used, Supabase Realtime can be utilized for broadcasting assistant responses to potentially multiple user sessions or for more advanced features. The hook currently has code for Realtime subscription which might be for future use or an alternative path.
4.  **Google Gemini API:** The `gemini-1.5-flash` model is called to generate intelligent and contextual responses based on user input and the detailed system prompt.

### Configuration

The chat is configured to use:
-   Supabase Project URL (if Edge Functions and DB are primary): `https://qcrgacxgwlpltdfpwkiz.supabase.co` (as per previous README context)
-   Gemini API Key (used directly in the hook): `AIzaSyD5dA0NBVBJKP_E3A2v3KBhSj1N9UG3DJQ` (as per previous README context and `use-syntora-chat.tsx`)

### Usage

The chat widget appears as a floating button in the bottom right corner of all pages. Users can click to open the chat interface and start a conversation with the AI support agent.

When a user sends a message, it's stored in Supabase and processed by the Edge Function, which generates a response using Google Gemini AI.
