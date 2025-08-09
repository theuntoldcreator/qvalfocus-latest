# Enterprise Consulting Website

## Overview

This is a production-ready enterprise consulting website built for QvalFocus, a global technology transformation firm. The application is built using a full-stack TypeScript architecture with React on the frontend and Express.js on the backend. The website showcases the company's services, industry expertise, case studies, and provides interactive features like contact forms and ROI calculators for potential clients.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for build tooling
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **UI Framework**: shadcn/ui components built on Radix UI primitives with Tailwind CSS styling
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Styling**: Tailwind CSS with CSS custom properties for theming, including dark mode support

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for contact form submissions and newsletter subscriptions
- **Validation**: Zod schemas for request validation with honeypot spam protection
- **Development**: Hot module replacement via Vite integration in development mode

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Provider**: Neon Database serverless PostgreSQL
- **Schema Management**: Drizzle Kit for migrations and schema management
- **In-Memory Storage**: Temporary MemStorage implementation for development/testing

### Authentication & Security
- **Form Security**: Honeypot fields and CSRF protection for form submissions
- **Validation**: Server-side validation using Zod schemas
- **Headers**: Security headers implementation (referenced but not fully implemented)
- **Spam Protection**: Simple challenge-response mechanisms planned

### Performance & SEO
- **Build Optimization**: Vite-based build system with code splitting
- **SEO**: Meta tags, OpenGraph cards, and JSON-LD structured data
- **Accessibility**: WCAG 2.2 AA compliance with keyboard navigation and screen reader support
- **Images**: Optimized asset handling through Vite's asset pipeline

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Query for data fetching
- **Build Tools**: Vite for development and building, TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing

### UI & Styling
- **Component Library**: Radix UI primitives for accessible base components
- **Styling**: Tailwind CSS for utility-first styling approach
- **Icons**: Lucide React for consistent iconography
- **Form Components**: React Hook Form with Hookform Resolvers for validation integration

### Backend Services
- **Web Framework**: Express.js for HTTP server and API endpoints
- **Database**: Neon Database serverless PostgreSQL with Drizzle ORM
- **Validation**: Zod for runtime type checking and validation
- **Session Management**: Connect PG Simple for PostgreSQL-backed sessions

### Development Tools
- **Development Server**: Vite dev server with HMR
- **Type Checking**: TypeScript compiler with strict mode enabled
- **Code Quality**: ESLint and Prettier configurations (implied by project structure)
- **Error Handling**: Replit-specific error modal plugin for development

### Planned Integrations
- **CRM Integration**: HubSpot or Salesforce for lead management (referenced in TODO comments)
- **Email Service**: Email notifications for form submissions (referenced in TODO comments)
- **Analytics**: Google Analytics 4 with privacy-compliant cookie consent (referenced in HTML)
- **Content Management**: MDX support for case studies and blog content (planned)