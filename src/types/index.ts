export interface Module {
  id: string;
  name: string;
  description: string;
  priceMin: number;
  priceMax: number;
  category: ModuleCategory;
  tags: string[];
  features: string[];
  icon: string;
  popular?: boolean;
  new?: boolean;
}

export type ModuleCategory = 'AgentOps' | 'RAG Systems' | 'LLMOps' | 'Commerce AI' | 'Cyber AI';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  agent?: AIAgent;
}

export interface Conversation {
  id: string;
  title: string;
  messages: ChatMessage[];
  agent: AIAgent;
  createdAt: number;
  updatedAt: number;
}

export type AIAgent = 'Sales Desk' | 'Support Core' | 'Commerce Engine';

export interface UseCase {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  recommendedLanes: string[];
  expectedOutcome: string;
  timeline: string;
  color: string;
}

export interface Deployment {
  id: string;
  name: string;
  module: string;
  status: 'active' | 'paused' | 'deploying';
  lastActive: string;
}

export interface APIKey {
  id: string;
  name: string;
  key: string;
  created: string;
  lastUsed: string;
}
