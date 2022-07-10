import React from 'react';
import logo from './logo.svg';
import './App.css';
import useScreenOrientation from 'use-screen-orientation';

function App() {
  const [orientation, angle] = useScreenOrientation();
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ background: 'white', color: 'black',  padding: 20 }}> orientation: {orientation}, angle: {angle}</p>
        </header>
    </div>
  );
}

export default App;
