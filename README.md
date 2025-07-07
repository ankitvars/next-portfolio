# 🚀 Ankit Varshney - Senior Frontend Developer Portfolio

A stunning, modern, and highly interactive portfolio website showcasing technical excellence and creative prowess. Built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

### 🎨 Design & UX

- **Dual Theme Support**: Dark mode (default) and Light mode with smooth transitions
- **Custom Color Palette**: Electric blues, neon accents, and professional colors
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Custom Cursor**: Desktop-only cursor with hover effects and particle animations
- **Glassmorphism & Modern UI**: Frosted glass effects, gradients, and floating elements

### 🎭 Animations & Interactions

- **Framer Motion**: Staggered entrance animations, scroll animations, hover effects
- **Auto-typing Effect**: Hero section with dynamic text animation
- **Parallax Scrolling**: Background elements moving at different speeds
- **Magnetic Hover Effects**: Interactive buttons and cards
- **Smooth Page Transitions**: Route changes with slide/fade effects

### 📱 Sections

- **Hero Section**: Auto-typing introduction with floating geometric shapes
- **About Section**: Professional summary with animated counters
- **Skills Section**: Categorized skills with progress bars and interactive tabs
- **Experience Section**: Timeline layout with company details and achievements
- **Projects Section**: Interactive project showcase with carousel
- **Contact Section**: Working contact form with validation

### 🛠️ Technical Stack

- **Next.js 14+**: App Router, Server Components, API Routes
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS v4**: Custom theme system with CSS variables
- **Framer Motion**: Advanced animations and interactions
- **React Hook Form**: Form handling with Zod validation
- **Next-themes**: Theme switching with localStorage persistence
- **Embla Carousel**: Smooth carousel for project showcase
- **Lucide React**: Modern icon library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and theme variables
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Main page component
│   └── api/
│       └── contact/         # Contact form API route
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── theme-toggle.tsx # Theme switching component
│   │   └── custom-cursor.tsx # Custom cursor component
│   ├── sections/            # Page sections
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── skills-section.tsx
│   │   ├── experience-section.tsx
│   │   ├── projects-section.tsx
│   │   └── contact-section.tsx
│   ├── layout/              # Layout components
│   │   └── header.tsx       # Navigation header
│   └── providers/           # Context providers
│       └── theme-provider.tsx
├── constants/
│   └── index.ts             # Portfolio data and configuration
├── hooks/
│   └── use-animation.ts     # Custom animation hooks
├── lib/
│   └── utils.ts             # Utility functions
└── types/
    └── index.ts             # TypeScript type definitions
```
