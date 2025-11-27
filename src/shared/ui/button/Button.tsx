import './button.css';
import { ReactNode } from 'react';
import { useTheme } from '@/shared/providers/theme-context';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  theme?: 'light' | 'dark';
  label: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  theme,
  backgroundColor,
  label,
  icon,
  ...props
}: ButtonProps) => {
  const { actualTheme } = useTheme();
  const currentTheme = theme || actualTheme;
  const mode = primary ? 'button--primary' : 'button--secondary';
  const themeClass = `button--${currentTheme}`;
  return (
    <button
      type="button"
      className={['button', `button--${size}`, mode, themeClass].join(' ')}
      {...props}
    >
      <div className="button-content">
        {icon && <span className="button-icon button-icon--left">{icon}</span>}
        <span className="button-label">{label}</span>
      </div>
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
