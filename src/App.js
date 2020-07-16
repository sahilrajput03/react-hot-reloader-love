import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root'
// import logo from './logo.svg';
import './App.css';

function App() {
  const [myValue, setMyvalue] = useState(0)

  return (
    <div className="App">
      Waht do you say noww?
      <div onClick={() => {
        setMyvalue(myValue + 2)
      }} style={{ color: "blue" }}>This is redd!!   and ..!!.</div> {myValue * myValue}

    </div>
  );
}

// export default App; // Old stle of reloading with react.
export default process.env.NODE_ENV === "development" ? hot(App) : App
// New style of reloading with no refresh instant update capability.

// console.log('process.env.NODE_ENV=>', process.env.NODE_ENV) // This log doesn't print anything to console, idk why.