# CodeGeek - IQ Testing Platform

A modern, responsive web application for IQ testing and cognitive assessments. Built with Next.js and Tailwind CSS, featuring an elegant UI/UX design optimized for both desktop and mobile devices.

## Project Structure

```
codegeek/
├── public/                # Static assets and images
│   └── images/            # Image assets used throughout the site
├── src/
│   ├── app/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── Accordion.tsx       # Collapsible content component
│   │   │   ├── AvailableTest.tsx   # Test options display
│   │   │   ├── Footer.tsx          # Site footer
│   │   │   ├── Header.tsx          # Navigation header
│   │   │   ├── HeroSection.tsx     # Landing page hero section
│   │   │   ├── Plans.tsx           # Subscription plans
│   │   │   ├── Results.tsx         # Test results display
│   │   │   ├── ScrollingBanner.tsx # Animated logo banner
│   │   │   └── Section.tsx         # Reusable section container
│   │   ├── data.ts        # Static data for components
│   │   ├── globals.css    # Global styles and Tailwind directives
│   │   ├── layout.tsx     # Root layout with metadata
│   │   └── page.tsx       # Main landing page
│   └── types/             # TypeScript type definitions
├── package.json           # Project dependencies
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Key Features

- **Interactive Components**: Accordion sections, dynamic buttons, and hover effects
- **Custom Animations**: Infinite scrolling banner with pause-on-hover functionality
- **Optimized Images**: Next.js Image component for optimized loading
- **Accessibility**: Semantic HTML structure with proper ARIA attributes

## Technology Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS with custom configurations
- **Icons**: React Icons library
- **Deployment**: Ready for deployment on Vercel

## Getting Started

First, clone the repository and install dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Mobile Optimization

The application uses a mobile-first approach with responsive Tailwind classes:

- Flexible layouts that adapt to different screen sizes
- Touch-friendly interactive elements
- Optimized spacing and typography for mobile reading
- Component-specific responsive behavior (stacking, grid adjustments, etc.)

## Deployment

This project is configured for easy deployment on Vercel:

```bash
vercel
```

For other hosting platforms, build the production version:

```bash
npm run build
npm run start
```
