import type { ReactNode } from 'react';

// Typography
interface TypographyProps {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body2' | 'caption' | 'overline';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: string;
  className?: string;
  onClick?: () => void;
}

export function Typography({ children, variant = 'body', weight, color, className = '', onClick }: TypographyProps) {
  const baseStyles: Record<string, string> = {
    h1: 'text-3xl font-bold',
    h2: 'text-2xl',
    h3: 'text-xl font-semibold',
    h4: 'text-lg font-medium',
    body: 'text-base',
    body2: 'text-sm',
    caption: 'text-xs text-[var(--muted)]',
    overline: 'text-xs uppercase tracking-wider text-[var(--muted)]',
  };

  const weights: Record<string, string> = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const style = baseStyles[variant];
  const weightStyle = weight ? weights[weight] : '';
  
  if (variant === 'h1') return <h1 className={`${style} ${weightStyle} ${className}`} style={color ? { color } : undefined} onClick={onClick}>{children}</h1>;
  if (variant === 'h2') return <h2 className={`${style} ${weightStyle} ${className}`} style={color ? { color } : undefined} onClick={onClick}>{children}</h2>;
  if (variant === 'h3') return <h3 className={`${style} ${weightStyle} ${className}`} style={color ? { color } : undefined} onClick={onClick}>{children}</h3>;
  if (variant === 'h4') return <h4 className={`${style} ${weightStyle} ${className}`} style={color ? { color } : undefined} onClick={onClick}>{children}</h4>;
  return <p className={`${style} ${weightStyle} ${className}`} style={color ? { color } : undefined} onClick={onClick}>{children}</p>;
}

// Card
interface CardProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
  onClick?: () => void;
}

export function Card({ children, className = '', gradient, onClick }: CardProps) {
  return (
    <div
      className={`rounded-xl p-4 ${
        gradient
          ? 'bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]'
          : 'bg-[var(--card)]'
      } ${onClick ? 'cursor-pointer hover:bg-[var(--card-hover)] transition-colors' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

// StatCard
interface StatCardProps {
  value: string;
  label: string;
  icon: string;
}

export function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <Card className="text-center flex-1">
      <div className="text-2xl mb-1">{icon}</div>
      <div className="text-xl font-bold text-[var(--text)]">{value}</div>
      <div className="text-xs text-[var(--muted)]">{label}</div>
    </Card>
  );
}

// Button
interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled,
}: ButtonProps) {
  const variants: Record<string, string> = {
    primary: 'bg-[var(--primary)] text-white hover:opacity-90',
    secondary: 'bg-white text-[var(--primary)] hover:bg-gray-100',
    ghost: 'bg-transparent text-white border border-white/30 hover:bg-white/10',
    danger: 'bg-[var(--danger)] text-white hover:opacity-90',
  };

  const sizes: Record<string, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`rounded-lg font-medium transition-all ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

// LoadingSpinner
interface LoadingSpinnerProps {
  message?: string;
}

export function LoadingSpinner({ message = 'Loading...' }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] gap-3">
      <div className="w-8 h-8 border-2 border-[var(--primary)] border-t-transparent rounded-full animate-spin" />
      <span className="text-[var(--muted)]">{message}</span>
    </div>
  );
}
