import React from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import Sidebar from 'components/sidebar/sidebar';
import Main from 'components/main/main';

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
          <Sidebar />
          <Main />
      </BrowserRouter>
      
    </div>
  )
}

export default App;
