import React from 'react';
import Transactions from './components/Transactions';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Reward Points Calculator</h1>
      </header>
      <Transactions />
    </div>
  );
}

export default App;
