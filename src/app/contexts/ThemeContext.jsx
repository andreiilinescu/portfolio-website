// contexts/ThemeContext.jsx
"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import lightFavicon from '../favicon.ico';
import darkFavicon from '../favicon.ico';

const ThemeContext = createContext();

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  // Helper to update favicon
  function updateFavicon(currentTheme) {
    const link = document.querySelector('link[rel="icon"]');
    if (link) {
      link.href = currentTheme === 'dark' ? darkFavicon.src : lightFavicon.src;
    }
  }

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = savedTheme || (prefersDark ? 'dark' : 'light');

    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
    updateFavicon(initial);
  }, []);

  // Toggle between light and dark
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    updateFavicon(nextTheme);
  };

  const value = {
    theme,
    toggleTheme,
    setTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
