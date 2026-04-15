import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'https://danica.it.com/api';

const api = axios.create({
  baseURL: API_BASE,
  timeout: 30000,
});

// Request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth-token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('auth-token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authApi = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  
  register: (name: string, email: string, password: string) =>
    api.post('/auth/register', { name, email, password }),
  
  logout: () => api.post('/auth/logout'),
  
  me: () => api.get('/auth/me'),
  
  forgotPassword: (email: string) =>
    api.post('/auth/forgot-password', { email }),
  
  resetPassword: (token: string, password: string) =>
    api.post('/auth/reset-password', { token, password }),
};

// Modules API
export const modulesApi = {
  list: () => api.get('/modules'),
  get: (id: string) => api.get(`/modules/${id}`),
};

// Use Cases API
export const useCasesApi = {
  list: () => api.get('/use-cases'),
  get: (id: string) => api.get(`/use-cases/${id}`),
};

// Chat API
export const chatApi = {
  send: (message: string, history: any[]) =>
    api.post('/chat', { message, history }),
  
  history: () => api.get('/chat/history'),
};

// Account API
export const accountApi = {
  get: () => api.get('/account'),
  update: (data: any) => api.patch('/account', data),
  subscribe: (planId: string) => api.post('/account/subscribe', { planId }),
  cancelSubscription: () => api.post('/account/cancel-subscription'),
};

export default api;
