import React, { useState } from 'react';
import './App.css';

function CounterExample() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <span>This is part of 
          <a href="https://reactjs.org/docs/hooks-intro.html"> hooks-intro</a>
        </span>  
        <p>
          You clicked {count} times.
        </p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </header>
    </div>
  );
}

export default CounterExample;
