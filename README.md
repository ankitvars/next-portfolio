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

## 🎨 Customization

### Personal Information

Update your information in `src/constants/index.ts`:

- Personal details
- Work experience
- Skills and technologies
- Projects
- Contact information

### Theme Colors

Customize colors in `src/app/globals.css`:

```css
:root {
  --electric-blue: #007bff;
  --neon-accent: #28a745;
  --neon-orange: #fd7e14;
  /* ... more colors */
}
```

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Add the section to `src/app/page.tsx`
3. Update navigation in `src/constants/index.ts`

## 🚀 Deployment

### GitHub Actions (Recommended)

This project includes automated CI/CD pipelines using GitHub Actions:

#### Setup GitHub Secrets

1. Go to your GitHub repository → Settings → Secrets and variables → Actions
2. Add the following secrets:
   - `VERCEL_TOKEN` - Your Vercel API token
   - `VERCEL_ORG_ID` - Your Vercel organization ID
   - `VERCEL_PROJECT_ID` - Your Vercel project ID
   - `RESEND_API_KEY` - Your Resend API key for contact form

#### Workflow Features

- **Automated Testing**: Linting, type checking, and build verification
- **Preview Deployments**: Automatic preview deployments for pull requests
- **Production Deployments**: Automatic deployments to production on main branch
- **Environment Variables**: Secure handling of API keys and secrets

#### Workflow Files

- `.github/workflows/deploy.yml` - Main CI/CD pipeline
- `.github/workflows/ci-cd.yml` - Alternative CI/CD setup
- `.github/workflows/deploy-vercel.yml` - Vercel-specific deployment

### Vercel (Manual)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📧 Contact Form Setup

The contact form is configured to send emails using **Resend** (free tier available). Follow these steps to set it up:

### 1. Get Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Go to API Keys section
3. Create a new API key
4. Copy the API key (starts with `re_`)

### 2. Configure Environment Variables

1. Create a `.env.local` file in the root directory
2. Add your Resend API key:

```bash
RESEND_API_KEY=re_your_api_key_here
```

### 3. Update Email Configuration

In `src/app/api/contact/route.ts`, update the following:

- **From email**: Change `noreply@yourdomain.com` to your verified domain
- **To email**: Update `ankitvars@gmail.com` to your preferred email address

### 4. Domain Verification (Optional)

For production, verify your domain in Resend:

1. Add your domain in Resend dashboard
2. Update DNS records as instructed
3. Use your verified domain in the "from" field

### Alternative Email Services

You can also use other services by modifying the API route:

- **SendGrid**: `npm install @sendgrid/mail`
- **Nodemailer**: `npm install nodemailer`
- **AWS SES**: `npm install @aws-sdk/client-ses`

## 🎯 Performance Optimizations

- **Next.js Image Optimization**: Automatic WebP conversion and lazy loading
- **Code Splitting**: Dynamic imports for heavy components
- **Bundle Analysis**: Webpack bundle analyzer for optimization
- **Lighthouse Scores**: Target 90+ for all metrics
- **SEO Optimization**: Meta tags, structured data, sitemap

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Features

1. Follow the existing component patterns
2. Use TypeScript for type safety
3. Implement responsive design
4. Add smooth animations with Framer Motion
5. Test on multiple devices and browsers

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library
- [React Hook Form](https://react-hook-form.com/) - Form library

---

**Built with ❤️ by Ankit Varshney**

For questions or support, reach out at [varshneyankit011@gmail.com](mailto:varshneyankit011@gmail.com)
