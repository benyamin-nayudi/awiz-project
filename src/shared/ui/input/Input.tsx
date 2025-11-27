import './input.css';
import React from 'react';
import { useTheme } from '@/shared/providers/theme-context';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  theme?: 'light' | 'dark';
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  hasError?: boolean;
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  theme,
  label,
  error,
  leftIcon,
  hasError = false,
  className = '',
  id,
  ...props
}, ref) => {
  const { actualTheme } = useTheme();
  const currentTheme = theme || actualTheme;
  const themeClass = `input--${currentTheme}`;
  const errorClass = (error || hasError) ? 'input--error' : '';
  const iconClass = leftIcon ? 'input--with-icon' : '';
  
  const classes = [
    'input',
    themeClass,
    errorClass,
    iconClass,
    className
  ].filter(Boolean).join(' ');

  const inputId = id;

  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={inputId} className={`input-label input-label--${currentTheme}`}>
          {label}
        </label>
      )}
      <div className="input-container">
        {leftIcon && (
          <div className={`input-icon input-icon--${currentTheme}`}>
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          id={inputId}
          className={classes}
          {...props}
        />
      </div>
      {error && (
        <p className="input-error-message">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';