// components/ThemeSwitcher.jsx
"use client";

import { useState, useEffect } from 'react';
import lightFavicon from '../favicon.ico';
import darkFavicon from '../favicon.ico';
import { Moon, Sun } from "lucide-react";


export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = savedTheme || (prefersDark ? 'dark' : 'light');

    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
    updateFavicon(initial);
  }, []);

  // Helper to update favicon
  function updateFavicon(currentTheme) {
    const link = document.querySelector('link[rel="icon"]');
    if (link) {
      link.href = currentTheme === 'dark' ? darkFavicon.src : lightFavicon.src;
    }
  }

  // Toggle between light and dark
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    updateFavicon(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 text-2xl focus:outline-none"
    >
      {theme === 'light' ? <Sun className="h-4 w-4 " style={{color: 'var(--text-color)' , cursor:'pointer'}}/> : <Moon className="h-4 w-4 " style={{color: 'var(--text-color)', cursor:'pointer'}} />}
    </button>
  );
}
