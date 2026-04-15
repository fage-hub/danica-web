import type { Module, UseCase, Deployment, APIKey, Conversation, AIAgent } from '../types';

export const MODULES: Module[] = [
  { id: '1', name: 'AI Sales Desk', description: 'Autonomous sales agent that qualifies leads, books meetings, and closes deals across channels.', priceMin: 5000, priceMax: 50000, category: 'Commerce AI', tags: ['sales', 'automation', 'leads'], features: ['Lead qualification', 'Meeting scheduling', 'Deal closing', 'Multi-channel outreach', 'CRM integration'], icon: '💰', popular: true },
  { id: '2', name: 'AI Support Core', description: 'Intelligent support system that resolves tickets, escalates intelligently, and learns from interactions.', priceMin: 3000, priceMax: 25000, category: 'AgentOps', tags: ['support', 'tickets', 'automation'], features: ['Auto-resolution', 'Smart escalation', 'Knowledge learning', 'Multi-language', 'Sentiment analysis'], icon: '🎧', popular: true },
  { id: '3', name: 'AI Commerce Engine', description: 'Full-stack commerce AI powering product discovery, recommendations, and checkout optimization.', priceMin: 10000, priceMax: 50000, category: 'Commerce AI', tags: ['commerce', 'recommendations', 'checkout'], features: ['Product discovery', 'Smart recommendations', 'Checkout optimization', 'A/B testing', 'Revenue analytics'], icon: '🛒', popular: true },
  { id: '4', name: 'RAG Pipeline Builder', description: 'Build and deploy retrieval-augmented generation pipelines with your enterprise data.', priceMin: 2000, priceMax: 15000, category: 'RAG Systems', tags: ['RAG', 'pipeline', 'enterprise'], features: ['Visual pipeline builder', 'Multi-source ingestion', 'Chunking strategies', 'Embedding management', 'Query optimization'], icon: '🔗', new: true },
  { id: '5', name: 'LLM Gateway', description: 'Unified API gateway for all LLM providers with rate limiting, caching, and fallback.', priceMin: 1000, priceMax: 10000, category: 'LLMOps', tags: ['gateway', 'API', 'routing'], features: ['Multi-provider routing', 'Rate limiting', 'Response caching', 'Fallback chains', 'Cost tracking'], icon: '🚀', popular: true },
  { id: '6', name: 'Cyber Sentinel', description: 'AI-powered threat detection and response for your infrastructure and applications.', priceMin: 5000, priceMax: 30000, category: 'Cyber AI', tags: ['security', 'threats', 'monitoring'], features: ['Threat detection', 'Auto-response', 'Vulnerability scanning', 'Compliance monitoring', 'Incident reports'], icon: '🛡️' },
  { id: '7', name: 'Agent Orchestrator', description: 'Coordinate multiple AI agents with task routing, dependency management, and observability.', priceMin: 3000, priceMax: 20000, category: 'AgentOps', tags: ['orchestration', 'multi-agent', 'routing'], features: ['Task routing', 'Dependency graphs', 'Agent monitoring', 'Retry logic', 'Dead letter handling'], icon: '⚙️' },
  { id: '8', name: 'Knowledge Miner', description: 'Extract structured knowledge from unstructured documents, emails, and conversations.', priceMin: 1500, priceMax: 12000, category: 'RAG Systems', tags: ['extraction', 'NLP', 'documents'], features: ['Document parsing', 'Entity extraction', 'Relation mapping', 'Schema generation', 'Validation'], icon: '📚', new: true },
  { id: '9', name: 'Prompt Studio', description: 'Design, test, and version-control prompts with A/B testing and performance metrics.', priceMin: 500, priceMax: 5000, category: 'LLMOps', tags: ['prompts', 'testing', 'versioning'], features: ['Visual editor', 'Version control', 'A/B testing', 'Performance metrics', 'Template library'], icon: '✏️' },
  { id: '10', name: 'Fraud Detector', description: 'Real-time fraud detection for transactions using behavioral analysis and pattern matching.', priceMin: 8000, priceMax: 40000, category: 'Cyber AI', tags: ['fraud', 'transactions', 'real-time'], features: ['Real-time scoring', 'Behavioral analysis', 'Pattern matching', 'Alert system', 'Case management'], icon: '🔍' },
  { id: '11', name: 'Inventory AI', description: 'Predict demand, optimize stock levels, and automate reordering across warehouses.', priceMin: 3000, priceMax: 20000, category: 'Commerce AI', tags: ['inventory', 'prediction', 'optimization'], features: ['Demand forecasting', 'Stock optimization', 'Auto-reordering', 'Multi-warehouse', 'Seasonal analysis'], icon: '📦' },
  { id: '12', name: 'Conversation Memory', description: 'Persistent memory layer for AI conversations with context windows and summarization.', priceMin: 800, priceMax: 6000, category: 'RAG Systems', tags: ['memory', 'context', 'summarization'], features: ['Long-term memory', 'Context windows', 'Auto-summarization', 'Semantic retrieval', 'Session management'], icon: '🧠', new: true },
  { id: '13', name: 'Model Registry', description: 'Central registry for fine-tuned models with versioning, rollback, and deployment management.', priceMin: 2000, priceMax: 15000, category: 'LLMOps', tags: ['registry', 'models', 'deployment'], features: ['Model versioning', 'Rollback support', 'Deployment pipelines', 'Performance tracking', 'Cost analysis'], icon: '📋' },
  { id: '14', name: 'Compliance Bot', description: 'Automated compliance checking and reporting for GDPR, SOC2, HIPAA, and more.', priceMin: 4000, priceMax: 25000, category: 'Cyber AI', tags: ['compliance', 'GDPR', 'reporting'], features: ['GDPR compliance', 'SOC2 checks', 'HIPAA validation', 'Auto-reporting', 'Audit trails'], icon: '📜' },
  { id: '15', name: 'Dynamic Pricing', description: 'AI-powered pricing optimization based on market conditions, demand, and competitor analysis.', priceMin: 5000, priceMax: 30000, category: 'Commerce AI', tags: ['pricing', 'optimization', 'market'], features: ['Market analysis', 'Competitor tracking', 'Demand elasticity', 'Price testing', 'Margin optimization'], icon: '💹' },
  { id: '16', name: 'Workflow Agent', description: 'Automate business workflows with AI-driven decision nodes and human-in-the-loop approval.', priceMin: 2000, priceMax: 15000, category: 'AgentOps', tags: ['workflow', 'automation', 'approval'], features: ['Visual workflow builder', 'Decision nodes', 'Human approval', 'Parallel execution', 'Error handling'], icon: '🔄' },
  { id: '17', name: 'Embedding Hub', description: 'Manage, version, and serve vector embeddings at scale with multi-index support.', priceMin: 1000, priceMax: 8000, category: 'RAG Systems', tags: ['embeddings', 'vectors', 'indexing'], features: ['Multi-model support', 'Version management', 'Index optimization', 'Batch processing', 'Similarity search'], icon: '🎯' },
  { id: '18', name: 'Token Optimizer', description: 'Reduce token usage by 40-60% with smart prompt compression and response caching.', priceMin: 500, priceMax: 4000, category: 'LLMOps', tags: ['tokens', 'optimization', 'cost'], features: ['Prompt compression', 'Response caching', 'Usage analytics', 'Budget controls', 'Auto-tuning'], icon: '💎' },
  { id: '19', name: 'Access Guardian', description: 'Zero-trust access control with AI-powered anomaly detection and session management.', priceMin: 3000, priceMax: 20000, category: 'Cyber AI', tags: ['access', 'zero-trust', 'anomaly'], features: ['Zero-trust model', 'Anomaly detection', 'Session management', 'Role-based access', 'Audit logging'], icon: '🔐' },
  { id: '20', name: 'Customer Insights', description: 'Deep customer analytics with churn prediction, lifetime value, and segmentation.', priceMin: 4000, priceMax: 25000, category: 'Commerce AI', tags: ['analytics', 'churn', 'segmentation'], features: ['Churn prediction', 'LTV calculation', 'Segmentation', 'Behavior analysis', 'Trend detection'], icon: '📊' },
];

export const USE_CASES: UseCase[] = [
  {
    id: 'retail-dtc',
    title: 'Retail + DTC',
    subtitle: 'Direct-to-consumer brands and retail operations',
    icon: '🛍️',
    recommendedLanes: ['AI Sales Desk', 'Dynamic Pricing', 'Inventory AI', 'Customer Insights'],
    expectedOutcome: '30% increase in conversion, 25% reduction in stockouts',
    timeline: '2-4 weeks to first deployment',
    color: '#6366f1',
  },
  {
    id: 'b2b-services',
    title: 'B2B Services',
    subtitle: 'Professional services and consulting firms',
    icon: '🏢',
    recommendedLanes: ['AI Sales Desk', 'AI Support Core', 'Workflow Agent', 'Knowledge Miner'],
    expectedOutcome: '40% faster deal cycles, 60% ticket auto-resolution',
    timeline: '1-3 weeks to first deployment',
    color: '#8b5cf6',
  },
  {
    id: 'field-operations',
    title: 'Field Operations',
    subtitle: 'On-site teams, logistics, and service delivery',
    icon: '🔧',
    recommendedLanes: ['Agent Orchestrator', 'AI Support Core', 'Workflow Agent', 'Compliance Bot'],
    expectedOutcome: '50% faster dispatch, 35% fewer escalations',
    timeline: '3-5 weeks to first deployment',
    color: '#06b6d4',
  },
  {
    id: 'saas-product',
    title: 'SaaS Product',
    subtitle: 'Software companies with AI-native features',
    icon: '☁️',
    recommendedLanes: ['LLM Gateway', 'RAG Pipeline Builder', 'Prompt Studio', 'Token Optimizer'],
    expectedOutcome: '70% cost reduction on LLM spend, 99.99% gateway uptime',
    timeline: '1-2 weeks to first deployment',
    color: '#10b981',
  },
];

export const DEPLOYMENTS: Deployment[] = [
  { id: '1', name: 'Sales Desk - Production', module: 'AI Sales Desk', status: 'active', lastActive: '2 min ago' },
  { id: '2', name: 'Support Core - Staging', module: 'AI Support Core', status: 'paused', lastActive: '1 hour ago' },
  { id: '3', name: 'Commerce Engine - Prod', module: 'AI Commerce Engine', status: 'active', lastActive: '5 min ago' },
];

export const API_KEYS: APIKey[] = [
  { id: '1', name: 'Production Key', key: 'dk_prod_a8f3e2b1c4d5f6g7h8i9j0k1l2m3n4o5', created: '2024-01-15', lastUsed: '2 min ago' },
  { id: '2', name: 'Staging Key', key: 'dk_stg_x9y8z7w6v5u4t3s2r1q0p9o8n7m6l5k4', created: '2024-02-20', lastUsed: '1 hour ago' },
  { id: '3', name: 'Development Key', key: 'dk_dev_f1e2d3c4b5a6z7y8x9w0v1u2t3s4r5q6', created: '2024-03-10', lastUsed: '3 days ago' },
];

const createConversation = (id: string, title: string, agent: AIAgent, messages: { role: 'user' | 'assistant'; content: string }[]): Conversation => ({
  id,
  title,
  agent,
  createdAt: Date.now() - Math.random() * 86400000 * 7,
  updatedAt: Date.now() - Math.random() * 3600000,
  messages: messages.map((m, i) => ({
    id: `${id}-${i}`,
    ...m,
    timestamp: Date.now() - (messages.length - i) * 60000,
    agent: m.role === 'assistant' ? agent : undefined,
  })),
});

export const CONVERSATIONS: Conversation[] = [
  createConversation('1', 'Product inquiry for electronics', 'Sales Desk', [
    { role: 'user', content: 'I\'m looking for a bulk pricing option for 500 units of the Pro model.' },
    { role: 'assistant', content: 'Great question! For bulk orders of 500+ units on the Pro model, we offer a **15% volume discount** bringing the per-unit price to **₱8,500** (from ₱10,000).\n\nHere\'s what\'s included:\n- Extended 3-year warranty\n- Priority shipping\n- Dedicated account manager\n- Custom branding options\n\nWould you like me to prepare a formal quote?' },
    { role: 'user', content: 'Yes, please. Also what are the payment terms?' },
    { role: 'assistant', content: 'I\'ll prepare that quote right away. Our standard payment terms for bulk orders:\n\n- **Net 30** for established accounts\n- **Net 15** with 2% early payment discount\n- **50/50 split** available (50% upfront, 50% on delivery)\n\nI\'ll send the quote to your email within the hour. Would you like to schedule a call to discuss further?' },
  ]),
  createConversation('2', 'API integration help', 'Support Core', [
    { role: 'user', content: 'How do I set up the LLM Gateway with my existing API?' },
    { role: 'assistant', content: 'Setting up the LLM Gateway is straightforward. Here\'s the quick start:\n\n```bash\nnpm install @danica/llm-gateway\n```\n\nThen configure your providers:\n\n```typescript\nconst gateway = new LLMGateway({\n  providers: {\n    openai: { apiKey: process.env.OPENAI_KEY },\n    anthropic: { apiKey: process.env.ANTHROPIC_KEY },\n  },\n  routing: \'cost-optimized\'\n});\n```\n\nThis gives you a unified endpoint that automatically routes to the best provider based on cost and latency. Need help with a specific provider?' },
  ]),
  createConversation('3', 'Revenue optimization strategies', 'Commerce Engine', [
    { role: 'user', content: 'What modules should I deploy for a mid-size e-commerce store doing ₱5M monthly?' },
    { role: 'assistant', content: 'For ₱5M monthly revenue, I recommend this deployment stack:\n\n**Phase 1 (Week 1-2):**\n1. **Dynamic Pricing** — immediate 8-12% revenue lift\n2. **AI Sales Desk** — capture abandoned carts, upsell\n\n**Phase 2 (Week 3-4):**\n3. **Customer Insights** — segmentation for targeted campaigns\n4. **Inventory AI** — prevent stockouts on top SKUs\n\n**Expected ROI:** ₱750K-1.2M additional monthly revenue within 60 days.\n\nThe total investment would be around ₱45K/month for all four modules. Want me to create a deployment plan?' },
  ]),
];

export const AI_AGENTS: { name: AIAgent; description: string; icon: string }[] = [
  { name: 'Sales Desk', description: 'Qualify leads, book meetings, close deals', icon: '💰' },
  { name: 'Support Core', description: 'Resolve tickets, escalate smartly', icon: '🎧' },
  { name: 'Commerce Engine', description: 'Product discovery, recommendations, optimization', icon: '🛒' },
];
