import { Header } from '@/shared/layout/header/Header';
import { Providers } from '@/shared/providers';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Awiz – Accelerate Your Web Innovation',
    template: '%s | Awiz',
  },
  description:
    'Awiz helps developers rapidly prototype, iterate, and deploy modern web applications with an optimized DX and powerful UI components.',
  keywords: [
    'Awiz',
    'web development platform',
    'react components',
    'next.js starter',
    'frontend tooling',
    'developer experience',
  ],
  authors: [{ name: 'Awiz Team' }],
  creator: 'Awiz Team',
  publisher: 'Awiz',
  metadataBase: new URL('https://awiz.dev'),
  alternates: {
    canonical: 'https://awiz.dev/',
  },
  openGraph: {
    type: 'website',
    url: 'https://awiz.dev/',
    title: 'Awiz – Accelerate Your Web Innovation',
    description: 'Prototype, iterate, and ship modern web apps faster with Awiz tooling & UI.',
    siteName: 'Awiz',
    images: [
      {
        url: 'https://awiz.dev/og/landing-og.png',
        width: 1200,
        height: 630,
        alt: 'Awiz Platform Overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@AwizDev',
    title: 'Awiz – Accelerate Your Web Innovation',
    description: 'Prototype, iterate, and ship modern web apps faster with Awiz tooling & UI.',
    images: ['https://awiz.dev/og/landing-og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground min-h-screen antialiased`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
