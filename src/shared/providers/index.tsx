'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from './theme-context';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <ThemeProvider defaultTheme="light">{children}</ThemeProvider>;
};

export * from './theme-context';
