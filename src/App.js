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
        </div>
      </div>
      <div className="MainDiv">
        <MenuWac/>
      </div>
      <Sidebar/>
    </div>
  );
}

export default App;
