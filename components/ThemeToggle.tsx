import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved as 'light' | 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary-500/30 transition-colors group overflow-hidden"
      aria-label="Toggle Dark Mode"
    >
      <div className="relative z-10 text-slate-400 group-hover:text-primary-400 transition-colors">
        <motion.div
            initial={false}
            animate={{ rotate: theme === 'dark' ? 0 : 180, scale: theme === 'dark' ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ display: theme === 'dark' ? 'block' : 'none' }}
        >
            <Moon size={20} />
        </motion.div>
        <motion.div
            initial={false}
            animate={{ rotate: theme === 'light' ? 0 : -180, scale: theme === 'light' ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ display: theme === 'light' ? 'block' : 'none' }}
        >
            <Sun size={20} className="text-yellow-500" />
        </motion.div>
      </div>
      
      {/* Subtle glow effect behind the icon */}
      <motion.div
        layoutId="theme-glow"
        className="absolute inset-0 bg-primary-500/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </button>
  );
};

export default ThemeToggle;