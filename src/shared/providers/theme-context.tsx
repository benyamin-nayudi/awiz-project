'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Theme types
export type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: ThemeMode;
  actualTheme: 'light' | 'dark';
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

// Create Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider Component
interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: ThemeMode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  defaultTheme = 'system' 
}) => {
  // Get system preference
  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Initialize theme from localStorage
  const getInitialTheme = (): ThemeMode => {
    if (typeof window === 'undefined') return defaultTheme;
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    return savedTheme || defaultTheme;
  };

  // Resolve actual theme
  const resolveActualTheme = (themeMode: ThemeMode): 'light' | 'dark' => {
    return themeMode === 'system' ? getSystemTheme() : themeMode;
  };

  const [theme, setThemeState] = useState<ThemeMode>(getInitialTheme);
  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>(() => 
    resolveActualTheme(getInitialTheme())
  );

  // Apply theme to document
  const applyTheme = (resolvedTheme: 'light' | 'dark') => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(resolvedTheme);
      root.setAttribute('data-theme', resolvedTheme);
    }
  };

  // Update theme and localStorage
  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    
    const resolved = resolveActualTheme(newTheme);
    setActualTheme(resolved);
    applyTheme(resolved);
  };

  // Toggle between light and dark (ignores system)
  const toggleTheme = () => {
    const newTheme = actualTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Apply initial theme on mount
  useEffect(() => {
    applyTheme(actualTheme);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        const resolved = getSystemTheme();
        setActualTheme(resolved);
        applyTheme(resolved);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme]);

  const contextValue: ThemeContextType = {
    theme,
    actualTheme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};