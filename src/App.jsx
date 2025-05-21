import React from 'react';
import { Toggle } from './Components/Toggle';
import { ThemeProvider } from './ThemeContext';

export const App = () => {
  return (
    <ThemeProvider>
      <Toggle />
    </ThemeProvider>
  );
};
