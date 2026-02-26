# Amara - Next.js Project

## Overview
Amara is a Next.js 15 application built with TypeScript, featuring a modern web design portfolio. The project uses React 19, Tailwind CSS for styling, GSAP for animations, and Firebase for backend services.

## Project Architecture

### Tech Stack
- **Framework**: Next.js 16.0.8 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4, Sass
- **Animations**: GSAP 3.13 with @gsap/react
- **Smooth Scrolling**: Lenis
- **Backend**: Firebase (storage, authentication, database)
- **Build Tool**: Next.js (Turbopack disabled in Replit environment)
- **Code Quality**: ESLint, Prettier, Husky, Lint-staged

### Project Structure
```
.
├── app/                 # Next.js App Router pages
│   ├── news/           # News pages with dynamic routes
│   ├── landing/        # Landing page
│   ├── design/         # Design page (formerly Philosophy)
│   ├── projects/       # Projects pages with dynamic routes
│   ├── about-us/       # About Us page (formerly Studio)
│   └── page.tsx        # Homepage
├── components/         # Reusable React components
├── helpers/            # Utility functions
├── hooks/              # Custom React hooks
├── lib/                # Library configurations
├── public/             # Static assets
│   ├── fonts/
│   └── images/
├── styles/             # Global styles and Sass files
└── types/              # TypeScript type definitions
```

## Replit Configuration

### Development Environment
- **Port**: 5000 (configured for Replit's webview)
- **Host**: 0.0.0.0 (allows external connections)
- **Workflow**: "Next.js Dev Server" runs `npm run dev`
- **Turbopack**: Disabled (incompatible with Replit's symlink structure)
- **Allowed Origins**: Configured to accept all dev origins for Replit proxy

### Key Configuration Changes for Replit
1. **next.config.ts**: Added `allowedDevOrigins: ["*"]` to allow Replit's proxy
2. **next.config.ts**: Smart cache-control headers (static assets cached 1yr, HTML revalidates)
3. **package.json**: Updated dev script to use port 5000 with host 0.0.0.0
4. **package.json**: Removed `--turbopack` flag from dev and build scripts

### Environment Setup
The project uses Node.js 20 with npm as the package manager.

## Firebase Integration
The application uses Firebase for:
- Image storage (firebasestorage.googleapis.com)
- Authentication
- Database

Firebase configuration is stored in the project and images are served from:
`https://firebasestorage.googleapis.com/v0/b/amara-72893.firebasestorage.app/o/**`

## Deployment
Configured for autoscale deployment on Replit with:
- **Build**: `npm run build`
- **Run**: `npm start`
- **Target**: Autoscale (stateless web application)

## Scripts
- `npm run dev`: Start development server on port 5000
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier

## Known Issues
- Large SVG files (hero-balance.svg) exceed 500KB and cause Babel optimization warnings
- Turbopack is disabled due to symlink issues in Replit environment

## Analytics
- **Google Tag Manager**: Integrated in `app/layout.tsx`
  - Container ID: `GTM-5DZD354R`
  - Script loads on all pages via Next.js Script component
  - Noscript fallback included for browsers without JavaScript

## Image Naming Convention
All images follow this naming pattern:
`UniqueDescriptionShort_Amara_Interior_Design_Procurement_Miami_Dubai.webp`
- Example: `Aerial_Container_Cargo_Ship_Amara_Interior_Design_Procurement_Miami_Dubai.webp`
- Format: WebP (all images converted)
- Images stored in `public/images/pages/` organized by section (home/, design/, news/, projects/, studio/, procurement/, landing/, about-us/)

## SEO Configuration
- **Production Domain**: `https://amarainteriordesign.com` (set via `NEXT_PUBLIC_SITE_URL` env var)
- **Structured Data**: JSON-LD Organization schema in `app/layout.tsx` (name, logo, locations, services)
- **Canonical URLs**: Set on every page via `alternates.canonical` in metadata exports
- **Sitemap**: Dynamic sitemap at `app/sitemap.ts` — includes all static pages + dynamic projects/blog posts
- **Robots.txt**: Generated via `app/robots.ts` — allows all crawlers, references sitemap, blocks "coming soon" projects
- **llms.txt**: AI discoverability file at `public/llms.txt` — describes business for AI assistants
- **Cache-Control**: Static assets (images, fonts, JS/CSS) cached 1 year; HTML pages revalidate on every request
- **OG/Twitter Cards**: Configured in root layout with proper production URLs
- **Image Alt Texts**: All keyword-rich with "Amara Interior Design Miami Dubai" pattern across 25+ components
- **Heading Hierarchy**: Every page has exactly one `<h1>` in the hero section, with proper `h1→h2→h3` progression (no skipped levels)

## Recent Changes
- **2025-02-26**: Renamed all images to follow naming convention
  - All 40+ used images renamed to `UniqueDescriptionShort_Amara_Interior_Design_Procurement_Miami_Dubai.webp`
  - Updated all code references across 30+ component/page files
- **2025-02-26**: Converted all used images from PNG/JPG to WebP
  - 31 images converted using cwebp (quality 85) across design/, home/, news/, projects/, studio/
  - Updated all code references in 23 component/page files
  - Original PNG/JPG files deleted after conversion
  - All images now use WebP format for better page load performance
- **2025-02-26**: Consolidated studio components into about-us
  - Moved `components/pages/studio/Hero.tsx` to `components/pages/about-us/HeroAbout.tsx`
  - Removed unused `components/pages/studio/` directory (ContactUs, Experiences, Work, Story were not imported)
  - Updated About Us hero text: "Where Design Comes to Life", "Residential. Commercial. Wellness.", "MIAMI - DUBAI - PARIS"
  - Updated About Us section heading to "About Our Studio"
  - Note: `public/images/pages/studio/` retained (used by multiple pages)
- **2025-01-13**: Added Google Tag Manager
  - GTM script and noscript fallback added to root layout
  - Loads automatically on all pages
- **2024-12-03**: Initial Replit setup
  - Configured Next.js to run on port 5000 with 0.0.0.0 host
  - Disabled Turbopack to fix symlink errors
  - Added allowedDevOrigins for Replit proxy compatibility
  - Configured deployment settings for autoscale
