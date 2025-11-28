'use client';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Awiz – Accelerate Your Web Innovation',
    template: '%s | Awiz'
  },
  description:
    'Awiz helps developers rapidly prototype, iterate, and deploy modern web applications with an optimized DX and powerful UI components.',
  keywords: [
    'Awiz',
    'web development platform',
    'react components',
    'next.js starter',
    'frontend tooling',
    'developer experience'
  ],
  authors: [{ name: 'Awiz Team' }],
  creator: 'Awiz Team',
  publisher: 'Awiz',
  metadataBase: new URL('https://awiz.dev'),
  alternates: {
    canonical: 'https://awiz.dev/'
  },
  openGraph: {
    type: 'website',
    url: 'https://awiz.dev/',
    title: 'Awiz – Accelerate Your Web Innovation',
    description:
      'Prototype, iterate, and ship modern web apps faster with Awiz tooling & UI.',
    siteName: 'Awiz',
    images: [
      {
        url: 'https://awiz.dev/og/landing-og.png',
        width: 1200,
        height: 630,
        alt: 'Awiz Platform Overview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@AwizDev',
    title: 'Awiz – Accelerate Your Web Innovation',
    description:
      'Prototype, iterate, and ship modern web apps faster with Awiz tooling & UI.',
    images: ['https://awiz.dev/og/landing-og.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  category: 'technology'
};

import HeroSection from '@/features/landing/ui/hero';
import LandingFooter from '@/features/landing/ui/landing-footer';
import Technologies from '@/features/landing/ui/technologies';
import { useTheme } from '@/shared/providers/theme-context';

export default function Home() {
  const { actualTheme } = useTheme();

  return (
    <div className="relative min-h-screen overflow-hidden transition-all duration-1000 ease-in-out">
      {/* Dynamic Theme-Based Background */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          actualTheme === 'dark'
            ? 'bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950'
            : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
        }`}
      />

      {/* Overlay for better contrast */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          actualTheme === 'dark' ? 'bg-black/20' : 'bg-white/30'
        }`}
      />

      <div className="relative z-10 container mx-auto overflow-hidden px-6 py-12">
        {/* Hero Section */}
        <HeroSection />

        {/* Technologies Showcase Section */}
        <Technologies />

        {/* Footer CTA */}
        <LandingFooter />
      </div>
    </div>
  );
}
