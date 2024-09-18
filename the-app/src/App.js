import logo from './logo.svg';
import './App.css';

import Page from './Page.js';

import { useState, createContext } from 'react';

export const ThemeContext = createContext('light');
export const ChangeContext = createContext('change');

function App() {
  const [theme, changeTheme] = useState('light');

  function test() {
    if(theme === 'light') {
      changeTheme('dark');
    }else {
      changeTheme('light');
    }
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <ChangeContext.Provider value={test}>
          <Page />
        </ChangeContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
