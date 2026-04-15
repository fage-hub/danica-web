import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggle: () => void;
  colors: typeof darkColors;
}

const darkColors = {
  primary: '#6366f1',
  secondary: '#8b5cf6',
  accent: '#06b6d4',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  background: '#0f172a',
  card: '#1e293b',
  cardHover: '#334155',
  text: '#f8fafc',
  textSecondary: '#cbd5e1',
  muted: '#94a3b8',
  border: '#334155',
};

const lightColors = {
  primary: '#4f46e5',
  secondary: '#7c3aed',
  accent: '#0891b2',
  success: '#059669',
  warning: '#d97706',
  danger: '#dc2626',
  background: '#f8fafc',
  card: '#ffffff',
  cardHover: '#f1f5f9',
  text: '#0f172a',
  textSecondary: '#475569',
  muted: '#64748b',
  border: '#e2e8f0',
};

const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  toggle: () => {},
  colors: darkColors,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('light', !isDark);
  }, [isDark]);

  const toggle = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggle, colors: isDark ? darkColors : lightColors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
