# AI Development Rules for Enterprise Consulting Website

This document outlines the technology stack and provides clear rules for the AI developer to follow when modifying this application. The goal is to maintain consistency, readability, and best practices throughout the codebase.

## Tech Stack Overview

The application is a full-stack TypeScript project.

- **Frontend Framework**: React 18 with Vite for a fast development experience.
- **UI Components**: Built with `shadcn/ui`, which uses Radix UI primitives for accessibility and Tailwind CSS for styling.
- **Styling**: Tailwind CSS is used exclusively for styling. It's configured with custom properties for easy theming (including dark mode).
- **Routing**: `wouter` is used for its lightweight and simple API for client-side routing.
- **State Management**: TanStack React Query (`@tanstack/react-query`) is the standard for managing server state, caching, and data fetching.
- **Forms**: `React Hook Form` is used for performant form state management, combined with `Zod` for robust, type-safe validation.
- **Backend**: A Node.js server using the `Express.js` framework handles API requests.
- **Database**: A PostgreSQL database is used, with `Drizzle ORM` providing a type-safe query builder.
- **Icons**: `lucide-react` is the designated library for all icons to ensure visual consistency.

## Development & Library Usage Rules

### 1. UI and Components
- **ALWAYS** use `shadcn/ui` components (`@/components/ui/*`) for all standard UI elements like buttons, cards, forms, dialogs, etc.
- **DO NOT** create custom components for UI elements that already exist in `shadcn/ui`.
- **ALWAYS** compose new, complex components from existing `shadcn/ui` primitives.
- Place all new reusable components in `client/src/components/`. Page-specific sections should go into `client/src/components/sections/`.

### 2. Styling
- **ALWAYS** use Tailwind CSS utility classes for styling.
- **AVOID** writing custom CSS in `.css` files. Use Tailwind's `theme` and `plugins` in `tailwind.config.ts` for extensions.
- Use the predefined colors and variables (e.g., `primary`, `secondary`, `card`, `muted`) from the theme to ensure consistency between light and dark modes.

### 3. Routing
- **ALWAYS** use `wouter` for navigation.
- Use the `<Link href="/path">` component for creating navigation links.
- For programmatic navigation, you can use the `useLocation` hook and its `setLocation` function.
- Define all top-level page routes in `client/src/App.tsx`.

### 4. Data Fetching & State Management
- **ALWAYS** use TanStack React Query for fetching data from the backend.
- Use the `useQuery` hook for GET requests.
- Use the `useMutation` hook for POST, PUT, PATCH, or DELETE requests.
- **DO NOT** use `fetch` or `axios` directly inside components. All API interactions should be abstracted into hooks or service functions that use React Query.

### 5. Forms
- **ALWAYS** use `React Hook Form` (`useForm`) to manage form state.
- **ALWAYS** use `Zod` to define a validation schema for the form.
- Connect the Zod schema to React Hook Form using `@hookform/resolvers/zod`.
- Use the `Form`, `FormField`, `FormControl`, etc., components from `shadcn/ui` to build forms that are integrated with `React Hook Form`.

### 6. Backend (API)
- All API endpoints **MUST** be defined in `server/routes.ts`.
- **ALWAYS** use `Zod` to parse and validate the `req.body` for all incoming POST/PUT requests to ensure type safety and security.
- Keep business logic out of the route handlers. Abstract it into separate functions or services if it becomes complex.

### 7. Database
- All database queries **MUST** use the `Drizzle ORM`.
- Define all database table schemas in `shared/schema.ts`.
- **DO NOT** write raw SQL queries unless absolutely necessary and impossible to achieve with Drizzle.

### 8. Icons
- **ALWAYS** use icons from the `lucide-react` library. This ensures a consistent icon style across the application.