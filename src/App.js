import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Greetings } from './components/greetings';
function App() {
  const userData ={
    firstName: 'Kayo',
    lastName: 'Oliveira'
  }
  const userData2 ={
    firstName: 'Chico',
    lastName: 'Oliveira'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Greetings 
            user={userData}
          />
          <Greetings 
            user={userData2}
          />

      </header>
    </div>
  );
}

export default App;
