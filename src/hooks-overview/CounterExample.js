import React, { useState, useEffect } from 'react';
import './App.css';

function CounterExample() {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount(count + 1);

  useEffect(() => {
    document.title = `You clicked ${count} times.`;
  });

  return (
    <div className="App">
      <header className="App-header">
        <span>This is part of 
          <a href="https://reactjs.org/docs/hooks-intro.html"> hooks-intro</a>
        </span>  
        <p>
          You clicked {count} times.
        </p>
        <button onClick={handleCount}>Click me</button>
      </header>
    </div>
  );
}

export default CounterExample;
