import logo from './logo.svg';
import './App.css';

import Page from './Page.js';

import { useState, createContext } from 'react';

export const ThemeContext = createContext('light');

function App() {
  const [theme, changeTheme] = useState('light');

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Page />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
