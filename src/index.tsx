import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import './index.css';

if (process.env.NODE_ENV === 'production') {
  // Use native Performance API instead of web-vitals
  if ('PerformanceObserver' in window) {
    try {
      // Observe Largest Contentful Paint
      const observer = new PerformanceObserver(() => {
        // Performance metrics tracked
      });
      observer.observe({ entryTypes: ['paint', 'navigation', 'largest-contentful-paint'] });
    } catch (e) {
      // PerformanceObserver not supported
    }
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Не удалось найти корневой элемент для монтирования");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// PWA Registration for offline support
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Service worker registration failed, app will still work
    });
  });
}