import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Greetings } from './components/greetings';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greetings 
          firstName="Kayo"
          lastName="Oliveira"
        />
        <Greetings 
          firstName="Maria"
          lastName="Silva"
        />
        <Greetings 
          firstName="João"
          lastName="Santos"
        />
        <Greetings 
          firstName="Fernando"
          lastName="Oliveira"
        />
      </header>
    </div>
  );
}

export default App;
