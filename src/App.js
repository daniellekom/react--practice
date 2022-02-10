//import usestate remove the first initial line
import { useState } from 'react';
import './App.css';

// create a usestate to make a button or 3 in this case
function App() {
  const[counter,setCounter]=useState(0);
  return (
    <div className="App">
      <header className="App-header">
    <h1>Counter:{counter}</h1>
    <button 
      onClick = {() => setCounter(counter + 1)}
      > + </button>
     {/* &nbsp; adds space between buttons */}
      &nbsp;
      <button
      onClick = {() => setCounter(0)} 
      > RESET</button>
      &nbsp;
      <button
      onClick={() =>setCounter (counter - 1)}
      >- </button>
      </header>
    </div>
  );
}

export default App;
