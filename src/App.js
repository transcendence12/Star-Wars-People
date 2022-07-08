import React from 'react';
import logo from './logo.svg';
import SearchCharactrs from "./components/searchCharacters";
import Fetched from './components/Fetched';
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <ul>
            <li><a href="/" className="first-item">Characters</a></li>
            <li><a href="/">Favorites</a></li>
          </ul>
        </nav>
      </header>
      <main className="container">
        <h1 className="title">Star Wars Characters Search</h1>
        <SearchCharactrs/>
      </main>
      <Fetched/>
    </div>
  );
}

export default App;
