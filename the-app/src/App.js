import logo from './logo.svg';
import './App.css';

import Page from './Page.js';

import { useState, createContext } from 'react';

export const ScreenContext = createContext(0);

function App() {
  const [screenState, changeScreen] = useState(0);

  function switchScreen(val) {
    changeScreen(val);
    console.log(val);
    console.log(screenState);
  }

  return (
    <div className="App">
      <ScreenContext.Provider value={switchScreen}>
        <Page />
      </ScreenContext.Provider>
    </div>
  );
}

export default App;
