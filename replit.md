# Skyled Pro Indonesia

## Overview

Skyled Pro Indonesia is a corporate portfolio website for a strategic holding company that operates three specialized business divisions:

1. **Event Organizer** - Full-service event management including MICE, crowd management, and multimedia production
2. **Consulting** - Strategic consulting focused on Social License to Operate (SLO), CSR, and ESG services
3. **Production** - Custom textile manufacturing and corporate merchandise solutions

The application is a modern React-based single-page application with an Express backend, designed to showcase the company's services and facilitate client contact.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18+ with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and caching
- **Styling**: Tailwind CSS with custom design tokens defined in `tailwind.config.ts`
- **UI Components**: shadcn/ui component library (New York style variant) built on Radix UI primitives
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express
- **API Structure**: RESTful endpoints prefixed with `/api`
- **Session Management**: Express sessions with PostgreSQL store option (connect-pg-simple)
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Validation**: Zod with drizzle-zod integration

### Project Structure
```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Route page components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and constants
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   └── storage.ts    # Data storage interface
├── shared/           # Shared types and schemas
│   └── schema.ts     # Drizzle database schema
└── attached_assets/  # Reference design files
```

### Design System
- **Font Family**: Plus Jakarta Sans (Google Fonts)
- **Color Palette**: Custom "skyled" brand colors (navy, blue, accent, light, gold, teal, orange)
- **Component Patterns**: Cards with rounded corners (32px), gradient backgrounds, hover animations
- **Layout**: Max-width 7xl container, responsive grid layouts

### Data Storage
- **Primary**: PostgreSQL database via Drizzle ORM
- **Fallback**: In-memory storage implementation for development
- **Schema Location**: `shared/schema.ts` defines database tables

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Schema management and migrations (`drizzle-kit push` for schema sync)

### Frontend Libraries
- **Radix UI**: Accessible UI primitives (dialogs, dropdowns, tooltips, etc.)
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel component
- **React Day Picker**: Date selection component
- **Class Variance Authority**: Component variant management

### Development Tools
- **Vite**: Development server with HMR
- **TypeScript**: Type checking across full stack
- **ESBuild**: Production bundling for server
- **PostCSS/Autoprefixer**: CSS processing

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development environment indicator