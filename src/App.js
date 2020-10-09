import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar.js';
import MenuWac from './components/MenuWac.js';

function App() {
  return (
    <div className="App">
      <div className="TopDiv">
        <p>Logo</p>
      </div>
      <div className="MainDiv">
        <MenuWac/>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
