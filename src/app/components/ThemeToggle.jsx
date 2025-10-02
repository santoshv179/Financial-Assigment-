'use client';

import { useTheme } from '@/context/ThemeProvider';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors duration-300 text-lg"
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;