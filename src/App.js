import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar.js';
import MenuWac from './components/MenuWac.js';

function App() {
  return (
    <div className="App">
      <div className="TopDiv">
        <div className="topDivImages">
          <img src="logo.PNG" alt="logo" className="logoWac"/>
          <img src="usa.png" alt="usa" className="usaFlag"/>
        </div>
      </div>
      <div className="MainDiv">
        <MenuWac/>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
