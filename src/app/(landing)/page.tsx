'use client';

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
