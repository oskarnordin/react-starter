import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  console.log('Current theme:', theme);

  return (
    <button
      type='button'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Toggle Theme
    </button>
  );
};
