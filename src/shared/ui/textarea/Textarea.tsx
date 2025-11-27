import './textarea.css';
import React from 'react';
import { useTheme } from '@/shared/providers/theme-context';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  theme?: 'light' | 'dark';
  label?: string;
  error?: string;
  hasError?: boolean;
  className?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({
  theme,
  label,
  error,
  hasError = false,
  className = '',
  id,
  ...props
}, ref) => {
  const { actualTheme } = useTheme();
  const currentTheme = theme || actualTheme;
  const themeClass = `textarea--${currentTheme}`;
  const errorClass = (error || hasError) ? 'textarea--error' : '';
  
  const classes = [
    'textarea',
    themeClass,
    errorClass,
    className
  ].filter(Boolean).join(' ');

  const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="textarea-wrapper">
      {label && (
        <label htmlFor={textareaId} className={`textarea-label textarea-label--${currentTheme}`}>
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        className={classes}
        {...props}
      />
      {error && (
        <p className="textarea-error-message">{error}</p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';