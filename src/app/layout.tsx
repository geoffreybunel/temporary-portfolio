import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Geoffrey - Frontend developer",
    template: "%s | Geoffrey",
  },
  description:
    "My core expertise lies in JavaScript, React, component-based architecture, and modern development tools. I focus on building scalable and maintainable applications, improving performance, and writing clean, readable code. I particularly enjoy solving problems related to application structure, data flow, and user interface responsiveness. What differentiates my approach is my attention to code quality, testing practices, and long-term maintainability.",
  keywords: [
    "junior frontend developer",
    "senior frontend dev",
    "react",
    "nextjs",
    "web developer",
    "Developpeur Front End",
    "Developpeur javascript",
    "javascript developpeur",
    "redux",
    "tailwind",
    "typescript",
  ],
  authors: [{ name: "Geoffrey", url: "https://geoffreybunel.com" }],
  creator: "Geoffrey",
  publisher: "Geoffrey",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://geoffreybunel.com",
    title: "Geoffrey - Add Your Professional Title",
    description:
      "Add your professional description here for social media sharing.",
    siteName: "Geoffrey Portfolio",
    images: [
      {
        url: "/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Geoffrey - Professional Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geoffrey - Add Your Professional Title",
    description: "Add your professional description here for Twitter sharing.",
    creator: "@yourtwitterhandle",
    images: ["/avatar.jpg"],
  },
  verification: {
    google: "add-your-google-verification-code-here",
  },
  category: "technology",
  other: {
    "application-name": "Your Portfolio Website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(geistSans.variable, geistMono.variable)}>
        {children}
      </body>
    </html>
  );
}
