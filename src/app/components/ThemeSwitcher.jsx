// components/ThemeSwitcher.jsx
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

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
