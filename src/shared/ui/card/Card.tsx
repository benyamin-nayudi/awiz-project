import './card.css';
import { useTheme } from '@/shared/providers/theme-context';

export interface CardProps {
  theme?: 'light' | 'dark';
  children: React.ReactNode;
  backgroundColor?: string;
  onClick?: () => void;
  className?: string;
}

export const Card = ({
  theme,
  children,
  backgroundColor,
  onClick,
  className = '',
  ...props
}: CardProps) => {
  const { actualTheme } = useTheme();
  const currentTheme = theme || actualTheme;
  const themeClass = `card--${currentTheme}`;
  const interactiveClass = onClick ? 'card--interactive' : '';
  
  const classes = [
    'card',
    'card--elevated',
    themeClass,
    interactiveClass,
    className
  ].filter(Boolean).join(' ');

  const CardElement = onClick ? 'button' : 'div';

  return (
    <CardElement
      type={onClick ? 'button' : undefined}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
      <style jsx>{`
        .card {
          background-color: ${backgroundColor};
        }
      `}</style>
    </CardElement>
  );
};