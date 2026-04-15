import type { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Grid3X3, MessageCircle, User } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

export function Layout({ children, showNav = true }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const tabs = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/modules', icon: Grid3X3, label: 'Modules' },
    { path: '/chat', icon: MessageCircle, label: 'Chat' },
    { path: '/account', icon: User, label: 'Account' },
  ];

  const hideNav = ['/login', '/register', '/forgot-password', '/onboarding'].some(p => location.pathname.startsWith(p));

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {children}
      {!hideNav && showNav && (
        <nav className="fixed bottom-0 left-0 right-0 bg-[var(--card)] border-t border-[var(--border)] px-4 py-2">
          <div className="flex justify-around max-w-md mx-auto">
            {tabs.map(tab => {
              const isActive = location.pathname === tab.path || 
                (tab.path !== '/' && location.pathname.startsWith(tab.path));
              return (
                <button
                  key={tab.path}
                  onClick={() => navigate(tab.path)}
                  className={`flex flex-col items-center gap-1 px-3 py-1 ${
                    isActive ? 'text-[var(--primary)]' : 'text-[var(--muted)]'
                  }`}
                >
                  <tab.icon size={20} />
                  <span className="text-xs">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}
