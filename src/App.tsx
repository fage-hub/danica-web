import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import { Layout } from './components/Layout';
import {
  HomePage,
  ModulesPage,
  ModuleDetailPage,
  UseCaseDetailPage,
  ChatPage,
  ChatDetailPage,
  AccountPage,
  ProfilePage,
  NotificationsPage,
  BillingPage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  OnboardingPage,
  PrivacyPage,
  TermsPage,
} from './pages';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/modules" element={<ModulesPage />} />
            <Route path="/modules/:id" element={<ModuleDetailPage />} />
            <Route path="/use-cases/:id" element={<UseCaseDetailPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/chat/:id" element={<ChatDetailPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/settings/profile" element={<ProfilePage />} />
            <Route path="/settings/notifications" element={<NotificationsPage />} />
            <Route path="/settings/billing" element={<BillingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
