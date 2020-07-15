import React from 'react';
import { hot } from 'react-hot-loader/root'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          i love hot reload as its really fast......
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lucky link here and whats nowww....and whats noww?
        </a>
      </header>
    </div>
  );
}

// export default App; // Old stle of reloading with react.
export default process.env.NODE_ENV === "development" ? hot(App) : App
// New style of reloading with no refresh instant update capability.

// console.log('process.env.NODE_ENV=>', process.env.NODE_ENV) // This log doesn't print anything to console, idk why.