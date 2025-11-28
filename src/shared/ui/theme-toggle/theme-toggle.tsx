'use client';

import React from 'react';
import { useTheme } from '../../providers';
import './theme-toggle.css';

export interface ThemeToggleProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'minimal' | 'rounded';
  showLabels?: boolean;
  className?: string;
  disabled?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  size = 'medium',
  variant = 'default',
  showLabels = false,
  className = '',
  disabled = false,
}) => {
  const { actualTheme, toggleTheme } = useTheme();

  const handleToggle = () => {
    if (!disabled) {
      toggleTheme();
    }
  };

  const sizeClasses = {
    small: 'theme-toggle--small',
    medium: 'theme-toggle--medium',
    large: 'theme-toggle--large',
  };

  const variantClasses = {
    default: 'theme-toggle--default',
    minimal: 'theme-toggle--minimal',
    rounded: 'theme-toggle--rounded',
  };

  const baseClasses = [
    'theme-toggle',
    sizeClasses[size],
    variantClasses[variant],
    actualTheme === 'dark' ? 'theme-toggle--dark' : 'theme-toggle--light',
    disabled ? 'theme-toggle--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="theme-toggle-wrapper cursor-pointer">
      {showLabels && <span className="theme-toggle-label theme-toggle-label--left">Light</span>}

      <button
        type="button"
        className={baseClasses}
        onClick={handleToggle}
        disabled={disabled}
        aria-label={`Switch to ${actualTheme === 'light' ? 'dark' : 'light'} mode`}
        role="switch"
        aria-checked={actualTheme === 'dark'}
      >
        <div className="theme-toggle-track">
          <div className="theme-toggle-thumb">
            {/* Sun Icon */}
            <svg
              className="theme-toggle-icon theme-toggle-icon--sun"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>

            {/* Moon Icon */}
            <svg
              className="theme-toggle-icon theme-toggle-icon--moon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </div>
        </div>
      </button>

      {showLabels && <span className="theme-toggle-label theme-toggle-label--right">Dark</span>}
    </div>
  );
};

export default ThemeToggle;
