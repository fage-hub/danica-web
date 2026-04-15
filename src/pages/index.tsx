import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, StatCard, Typography, Button, LoadingSpinner } from '../components/ui';
import { MODULES, USE_CASES, CONVERSATIONS, AI_AGENTS, DEPLOYMENTS, API_KEYS } from '../constants/mockData';

export function HomePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const featured = MODULES.filter(m => m.popular).slice(0, 3);

  if (loading) return <LoadingSpinner message="Loading..." />;

  return (
    <div className="pb-20">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-6 pt-12 rounded-b-3xl">
        <Typography variant="overline">AI COMMERCE INFRASTRUCTURE</Typography>
        <Typography variant="h1" className="mt-2 text-white">
          Build revenue-ready AI systems
        </Typography>
        <Typography variant="body" className="mt-2 text-white/80">
          Production AI architecture for sales, support, operations, and digital product growth.
        </Typography>
        <div className="flex gap-3 mt-4">
          <Button variant="secondary" size="sm" onClick={() => navigate('/modules')}>
            Start Discovery
          </Button>
          <Button variant="ghost" size="sm" onClick={() => navigate('/modules')}>
            View Modules
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-2 px-4 -mt-5">
        <StatCard value="50+" label="Modules" icon="🧩" />
        <StatCard value="24h" label="Response" icon="⚡" />
        <StatCard value="99.95%" label="Uptime" icon="🛡️" />
      </div>

      {/* Featured Products */}
      <div className="p-4">
        <Typography variant="h3" weight="bold" className="mb-3">
          Featured AI Packs
        </Typography>
        {featured.map(mod => (
          <Card key={mod.id} className="mb-3" onClick={() => navigate(`/modules/${mod.id}`)}>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{mod.icon}</span>
              <div className="flex-1">
                <Typography variant="h4" weight="semibold">{mod.name}</Typography>
                <Typography variant="caption">{mod.category}</Typography>
              </div>
            </div>
            <Typography variant="body2" className="mt-2 text-[var(--text-secondary)]">
              {mod.description}
            </Typography>
            <div className="flex justify-between items-center mt-3">
              <Typography variant="caption" color="var(--primary)">
                ₱{mod.priceMin.toLocaleString()} – ₱{mod.priceMax.toLocaleString()}
              </Typography>
              <span className="text-[var(--primary)]">→</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Use Cases */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <Typography variant="h3" weight="bold">Use Cases</Typography>
          <Typography variant="body2" color="var(--primary)" className="cursor-pointer">
            See all →
          </Typography>
        </div>
        {USE_CASES.map(uc => (
          <Card key={uc.id} className="mb-3" onClick={() => navigate(`/use-cases/${uc.id}`)}>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{uc.icon}</span>
              <div className="flex-1">
                <Typography variant="h4" weight="semibold">{uc.title}</Typography>
                <Typography variant="caption">{uc.subtitle}</Typography>
              </div>
            </div>
            <Typography variant="body2" color="var(--success)" className="mt-2">
              {uc.expectedOutcome}
            </Typography>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <Card gradient className="mx-4 mb-4">
        <Typography variant="h3" weight="bold" className="text-white">
          Need a custom AI rollout?
        </Typography>
        <Typography variant="body2" className="mt-2 text-white/80">
          Share your tools and targets. Get a practical implementation map.
        </Typography>
        <Button variant="ghost" size="sm" className="mt-3" onClick={() => navigate('/chat')}>
          Get Started
        </Button>
      </Card>
    </div>
  );
}

export function ModulesPage() {
  const navigate = useNavigate();
  const categories = [...new Set(MODULES.map(m => m.category))];

  return (
    <div className="p-4 pb-20">
      <Typography variant="h2" weight="bold" className="mb-4">AI Modules</Typography>
      
      {categories.map(cat => (
        <div key={cat} className="mb-6">
          <Typography variant="h4" weight="semibold" className="mb-2">{cat}</Typography>
          <div className="grid gap-3">
            {MODULES.filter(m => m.category === cat).map(mod => (
              <Card key={mod.id} onClick={() => navigate(`/modules/${mod.id}`)}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{mod.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Typography variant="h4" weight="semibold">{mod.name}</Typography>
                      {mod.popular && <span className="text-xs bg-[var(--primary)] text-white px-2 py-0.5 rounded">Popular</span>}
                      {mod.new && <span className="text-xs bg-[var(--success)] text-white px-2 py-0.5 rounded">New</span>}
                    </div>
                    <Typography variant="caption">{mod.description.slice(0, 60)}...</Typography>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ModuleDetailPage() {
  const navigate = useNavigate();
  const id = window.location.pathname.split('/modules/')[1];
  const mod = MODULES.find(m => m.id === id);

  if (!mod) return <div className="p-4">Module not found</div>;

  return (
    <div className="p-4 pb-20">
      <button onClick={() => navigate(-1)} className="text-[var(--primary)] mb-4">← Back</button>
      
      <div className="text-5xl mb-4">{mod.icon}</div>
      <Typography variant="h2" weight="bold">{mod.name}</Typography>
      <Typography variant="body" className="mt-2 text-[var(--text-secondary)]">{mod.description}</Typography>
      
      <div className="mt-4 p-3 bg-[var(--card)] rounded-lg">
        <Typography variant="h4" weight="semibold">₱{mod.priceMin.toLocaleString()} – ₱{mod.priceMax.toLocaleString()}</Typography>
        <Typography variant="caption">Monthly</Typography>
      </div>

      <div className="mt-4">
        <Typography variant="h4" weight="semibold" className="mb-2">Features</Typography>
        {mod.features.map((f, i) => (
          <div key={i} className="flex items-center gap-2 py-1">
            <span className="text-[var(--success)]">✓</span>
            <Typography variant="body2">{f}</Typography>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {mod.tags.map(tag => (
          <span key={tag} className="text-xs bg-[var(--card)] px-2 py-1 rounded">{tag}</span>
        ))}
      </div>

      <Button className="w-full mt-6" onClick={() => navigate('/chat')}>
        Start Consultation
      </Button>
    </div>
  );
}

export function UseCaseDetailPage() {
  const navigate = useNavigate();
  const id = window.location.pathname.split('/use-cases/')[1];
  const uc = USE_CASES.find(u => u.id === id);

  if (!uc) return <div className="p-4">Use case not found</div>;

  return (
    <div className="p-4 pb-20">
      <button onClick={() => navigate(-1)} className="text-[var(--primary)] mb-4">← Back</button>
      
      <div className="text-5xl mb-4">{uc.icon}</div>
      <Typography variant="h2" weight="bold">{uc.title}</Typography>
      <Typography variant="body" className="mt-1 text-[var(--text-secondary)]">{uc.subtitle}</Typography>
      
      <Card className="mt-4">
        <Typography variant="h4" weight="semibold" className="mb-2">Expected Outcome</Typography>
        <Typography variant="body" color="var(--success)">{uc.expectedOutcome}</Typography>
        <Typography variant="caption" className="mt-2 block">{uc.timeline}</Typography>
      </Card>

      <div className="mt-4">
        <Typography variant="h4" weight="semibold" className="mb-2">Recommended Modules</Typography>
        {uc.recommendedLanes.map((lane, i) => (
          <div key={i} className="flex items-center gap-2 py-2 border-b border-[var(--border)]">
            <span>→</span>
            <Typography variant="body2">{lane}</Typography>
          </div>
        ))}
      </div>

      <Button className="w-full mt-6" onClick={() => navigate('/chat')}>
        Start Implementation
      </Button>
    </div>
  );
}

export function ChatPage() {
  const navigate = useNavigate();

  return (
    <div className="p-4 pb-20">
      <Typography variant="h2" weight="bold" className="mb-4">AI Assistants</Typography>
      
      <div className="mb-6">
        <Typography variant="h4" weight="semibold" className="mb-2">Start New Chat</Typography>
        {AI_AGENTS.map((agent: any) => (
          <Card key={agent.name} className="mb-2" onClick={() => navigate(`/chat/new?agent=${encodeURIComponent(agent.name)}`)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{agent.icon}</span>
              <div className="flex-1">
                <Typography variant="h4" weight="semibold">{agent.name}</Typography>
                <Typography variant="caption">{agent.description}</Typography>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Typography variant="h4" weight="semibold" className="mb-2">Recent Conversations</Typography>
      {CONVERSATIONS.map((conv: any) => (
        <Card key={conv.id} className="mb-2" onClick={() => navigate(`/chat/${conv.id}`)}>
          <Typography variant="h4" weight="semibold">{conv.title}</Typography>
          <Typography variant="caption">{conv.agent} • {conv.messages.length} messages</Typography>
        </Card>
      ))}
    </div>
  );
}

export function ChatDetailPage() {
  const navigate = useNavigate();
  const id = window.location.pathname.split('/chat/')[1];
  const conv = CONVERSATIONS.find((c: any) => c.id === id);
  const [input, setInput] = useState('');

  if (!conv) {
    const agentParam = new URLSearchParams(window.location.search).get('agent');
    const agent = AI_AGENTS.find((a: any) => a.name === agentParam);
    
    return (
      <div className="flex flex-col h-[calc(100vh-80px)]">
        <div className="p-4 border-b border-[var(--border)]">
          <button onClick={() => navigate(-1)} className="text-[var(--primary)] mr-4">←</button>
          <Typography variant="h4" weight="semibold">{agent?.name || 'New Chat'}</Typography>
        </div>
        <div className="flex-1 p-4 flex items-center justify-center text-[var(--muted)]">
          Start the conversation below
        </div>
        <div className="p-4 border-t border-[var(--border)] flex gap-2">
          <input
            className="flex-1 bg-[var(--card)] rounded-lg px-4 py-2 outline-none"
            placeholder="Type a message..."
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <Button onClick={() => {}}>Send</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[calc(100vh-80px)]">
      <div className="p-4 border-b border-[var(--border)]">
        <button onClick={() => navigate(-1)} className="text-[var(--primary)] mr-4">←</button>
        <Typography variant="h4" weight="semibold">{conv.title}</Typography>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {conv.messages.map((msg: any) => (
          <div key={msg.id} className={`${msg.role === 'user' ? 'text-right' : ''}`}>
            <div className={`inline-block max-w-[80%] p-3 rounded-lg ${
              msg.role === 'user' 
                ? 'bg-[var(--primary)] text-white' 
                : 'bg-[var(--card)]'
            }`}>
              <Typography variant="body2">{msg.content}</Typography>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-[var(--border)] flex gap-2">
        <input
          className="flex-1 bg-[var(--card)] rounded-lg px-4 py-2 outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <Button onClick={() => {}}>Send</Button>
      </div>
    </div>
  );
}

export function AccountPage() {
  const navigate = useNavigate();

  return (
    <div className="p-4 pb-20">
      <Typography variant="h2" weight="bold" className="mb-4">Account</Typography>
      
      <Card className="mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center text-white text-xl">
            D
          </div>
          <div>
            <Typography variant="h4" weight="semibold">Danica</Typography>
            <Typography variant="caption">Pro Plan</Typography>
          </div>
        </div>
      </Card>

      <Typography variant="h4" weight="semibold" className="mb-2">Active Deployments</Typography>
      {DEPLOYMENTS.map((dep: any) => (
        <Card key={dep.id} className="mb-2">
          <div className="flex justify-between items-center">
            <div>
              <Typography variant="body" weight="semibold">{dep.name}</Typography>
              <Typography variant="caption">{dep.lastActive}</Typography>
            </div>
            <span className={`px-2 py-1 rounded text-xs ${
              dep.status === 'active' ? 'bg-[var(--success)]/20 text-[var(--success)]' : 'bg-[var(--warning)]/20 text-[var(--warning)]'
            }`}>
              {dep.status}
            </span>
          </div>
        </Card>
      ))}

      <Typography variant="h4" weight="semibold" className="mb-2 mt-6">API Keys</Typography>
      {API_KEYS.map((key: any) => (
        <Card key={key.id} className="mb-2">
          <Typography variant="body" weight="semibold">{key.name}</Typography>
          <Typography variant="caption" className="font-mono">{key.key.slice(0, 20)}...</Typography>
          <Typography variant="caption" className="block mt-1">Last used: {key.lastUsed}</Typography>
        </Card>
      ))}

      <div className="mt-6 space-y-2">
        <Card onClick={() => navigate('/settings/profile')} className="cursor-pointer">
          <Typography variant="body">Edit Profile →</Typography>
        </Card>
        <Card onClick={() => navigate('/settings/notifications')} className="cursor-pointer">
          <Typography variant="body">Notifications →</Typography>
        </Card>
        <Card onClick={() => navigate('/settings/billing')} className="cursor-pointer">
          <Typography variant="body">Billing →</Typography>
        </Card>
      </div>
    </div>
  );
}

// Settings Pages
export function ProfilePage() {
  const navigate = useNavigate();
  return (
    <div className="p-4 pb-20">
      <button onClick={() => navigate(-1)} className="text-[var(--primary)] mb-4">← Back</button>
      <Typography variant="h2" weight="bold" className="mb-4">Edit Profile</Typography>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-[var(--muted)]">Name</label>
          <input className="w-full mt-1 bg-[var(--card)] rounded-lg px-4 py-2 outline-none" defaultValue="Danica" />
        </div>
        <div>
          <label className="text-sm text-[var(--muted)]">Email</label>
          <input className="w-full mt-1 bg-[var(--card)] rounded-lg px-4 py-2 outline-none" defaultValue="danica@example.com" />
        </div>
        <Button className="w-full">Save Changes</Button>
      </div>
    </div>
  );
}

export function NotificationsPage() {
  const navigate = useNavigate();
  return (
    <div className="p-4 pb-20">
      <button onClick={() => navigate(-1)} className="text-[var(--primary)] mb-4">← Back</button>
      <Typography variant="h2" weight="bold" className="mb-4">Notifications</Typography>
      
      <Card className="mb-2">
        <div className="flex justify-between items-center">
          <Typography variant="body">Push Notifications</Typography>
          <input type="checkbox" defaultChecked className="w-5 h-5" />
        </div>
      </Card>
      <Card className="mb-2">
        <div className="flex justify-between items-center">
          <Typography variant="body">Email Notifications</Typography>
          <input type="checkbox" defaultChecked className="w-5 h-5" />
        </div>
      </Card>
      <Card className="mb-2">
        <div className="flex justify-between items-center">
          <Typography variant="body">Deployment Alerts</Typography>
          <input type="checkbox" defaultChecked className="w-5 h-5" />
        </div>
      </Card>
    </div>
  );
}

export function BillingPage() {
  const navigate = useNavigate();
  return (
    <div className="p-4 pb-20">
      <button onClick={() => navigate(-1)} className="text-[var(--primary)] mb-4">← Back</button>
      <Typography variant="h2" weight="bold" className="mb-4">Billing</Typography>
      
      <Card gradient className="mb-4">
        <Typography variant="h4" weight="bold" className="text-white">Pro Plan</Typography>
        <Typography variant="body" className="text-white/80">₱45,000/month</Typography>
        <Typography variant="caption" className="text-white/60">Renews on May 15, 2026</Typography>
      </Card>

      <Typography variant="h4" weight="semibold" className="mb-2">Usage This Month</Typography>
      <Card className="mb-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Typography variant="body2">API Calls</Typography>
            <Typography variant="body2">12,840</Typography>
          </div>
          <div className="flex justify-between">
            <Typography variant="body2">Tokens</Typography>
            <Typography variant="body2">2.4M</Typography>
          </div>
          <div className="flex justify-between">
            <Typography variant="body2">Storage</Typography>
            <Typography variant="body2">12.5 GB</Typography>
          </div>
        </div>
      </Card>

      <Button variant="danger" className="w-full">Cancel Subscription</Button>
    </div>
  );
}

// Auth Pages
export function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="p-4 flex flex-col min-h-screen">
      <Typography variant="h2" weight="bold" className="mb-2">Welcome Back</Typography>
      <Typography variant="body" className="text-[var(--muted)] mb-6">Sign in to your account</Typography>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-[var(--muted)]">Email</label>
          <input className="w-full mt-1 bg-[var(--card)] rounded-lg px-4 py-2 outline-none" placeholder="you@example.com" />
        </div>
        <div>
          <label className="text-sm text-[var(--muted)]">Password</label>
          <input type="password" className="w-full mt-1 bg-[var(--card)] rounded-lg px-4 py-2 outline-none" placeholder="••••••••" />
        </div>
        <Button className="w-full">Sign In</Button>
        <Button variant="ghost" className="w-full" onClick={() => navigate('/register')}>
          Create Account
        </Button>
        <Typography variant="caption" className="text-center cursor-pointer" onClick={() => navigate('/forgot-password')}>
          Forgot password?
        </Typography>
      </div>
    </div>
  );
}

export function RegisterPage() {
  const navigate = useNavigate();
  return (
    <div className="p-4 flex flex-col min-h-screen">
      <Typography variant="h2" weight="bold" className="mb-2">Create Account</Typography>
      <Typography variant="body" className="text-[var(--muted)] mb-6">Get started with Danica AI</Typography>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-[var(--muted)]">Name</label>
          <input className="w-full mt-1 bg-[var(--card)] rounded-lg px-4 py-2 outline-none" />
        </div>
        <div>
          <label className="text-sm text-[var(--muted)]">Email</label>
          <input className="w-full mt-1 bg-[var(--card)] rounded-lg px-4 py-2 outline-none" placeholder="you@example.com" />
        </div>
        <div>
          <label className="text-sm text-[var(--muted)]">Password</label>
          <input type="password" className="w-full mt-1 bg-[var(--card)] rounded-lg px-4 py-2 outline-none" />
        </div>
        <Button className="w-full">Create Account</Button>
        <Typography variant="caption" className="text-center">
          Already have an account? <span className="text-[var(--primary)] cursor-pointer" onClick={() => navigate('/login')}>Sign in</span>
        </Typography>
      </div>
    </div>
  );
}

export function ForgotPasswordPage() {
  const navigate = useNavigate();
  return (
    <div className="p-4 flex flex-col min-h-screen">
      <Typography variant="h2" weight="bold" className="mb-2">Reset Password</Typography>
      <Typography variant="body" className="text-[var(--muted)] mb-6">Enter your email to receive a reset link</Typography>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-[var(--muted)]">Email</label>
          <input className="w-full mt-1 bg-[var(--card)] rounded-lg px-4 py-2 outline-none" placeholder="you@example.com" />
        </div>
        <Button className="w-full">Send Reset Link</Button>
        <Typography variant="caption" className="text-center cursor-pointer" onClick={() => navigate('/login')}>
          ← Back to sign in
        </Typography>
      </div>
    </div>
  );
}

// Other Pages
export function OnboardingPage() {
  const navigate = useNavigate();
  return (
    <div className="p-4 flex flex-col min-h-screen items-center justify-center">
      <div className="text-6xl mb-4">🚀</div>
      <Typography variant="h2" weight="bold" className="mb-2 text-center">Welcome to Danica</Typography>
      <Typography variant="body" className="text-[var(--muted)] mb-6 text-center">
        AI-powered commerce infrastructure for your business
      </Typography>
      <Button className="w-full max-w-xs" onClick={() => navigate('/')}>Get Started</Button>
    </div>
  );
}

export function PrivacyPage() {
  const navigate = useNavigate();
  return (
    <div className="p-4 pb-20">
      <button onClick={() => navigate(-1)} className="text-[var(--primary)] mb-4">← Back</button>
      <Typography variant="h2" weight="bold" className="mb-4">Privacy Policy</Typography>
      <Typography variant="body" className="text-[var(--text-secondary)]">
        Your privacy is important to us. This policy describes how we collect, use, and protect your data.
        {/* Add full privacy policy content */}
      </Typography>
    </div>
  );
}

export function TermsPage() {
  const navigate = useNavigate();
  return (
    <div className="p-4 pb-20">
      <button onClick={() => navigate(-1)} className="text-[var(--primary)] mb-4">← Back</button>
      <Typography variant="h2" weight="bold" className="mb-4">Terms of Service</Typography>
      <Typography variant="body" className="text-[var(--text-secondary)]">
        By using Danica, you agree to these terms. Please read them carefully.
        {/* Add full terms content */}
      </Typography>
    </div>
  );
}
