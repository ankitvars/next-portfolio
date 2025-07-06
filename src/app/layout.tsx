import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ankit Varshney - Senior Frontend Developer",
  description: "Senior React.js Developer and Frontend Specialist with 3+ years of experience. Specializing in React.js, Next.js, MERN stack, and modern web technologies.",
  keywords: [
    "Ankit Varshney",
    "Senior Full Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "TypeScript Developer",
    "Portfolio",
    "Web Development",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Express.js"
  ],
  authors: [{ name: "Ankit Varshney" }],
  creator: "Ankit Varshney",
  publisher: "Ankit Varshney",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ankits-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ankit Varshney - Senior Frontend Developer",
    description: "Senior React.js Developer and Frontend Specialist with 3+ years of experience. Specializing in React.js, Next.js, MERN stack, and modern web technologies.",
    url: "https://ankits-portfolio.vercel.app",
    siteName: "Ankit Varshney Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ankit Varshney - Senior Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Varshney - Senior Full Stack Developer",
    description: "Senior React.js Developer and Full Stack Developer with 3+ years of experience.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
