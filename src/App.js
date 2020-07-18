import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root'
// import logo from './logo.svg';
import './App.css';

console.log('amaing things!!!')

const ss = 10
function App() {
  let [myValue, setMyvalue] = useState(400)
  let some = 100;
  // let more = 20;
  useEffect(() => {
    // alert("Amazing tually or so??..")
  }, [])

  console.log('Is it goodD?...')
  return (
    <div className="App">
      what are you upto nowwww/?
      <div onClick={() => {
        setMyvalue(myValue + 4 + some)
      }} style={{ color: "blue" }}>This is redd!!   and ..!!.</div> {myValue+6}

    </div>
  );
}


// export default App; // Old stle of reloading with react.
export default process.env.NODE_ENV === "development" ? hot(App) : App
// New style of reloading with no refresh instant update capability.

// console.log('process.env.NODE_ENV=>', process.env.NODE_ENV) // This log doesn't print anything to console, idk why.