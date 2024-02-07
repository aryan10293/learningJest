import logo from './logo.svg';
import './App.css';
import React from 'react';
function App({num}) {
  let [count, setCount] = React.useState(num)

  const addOne = (e) => {
    e.preventDefault()
    setCount(count + 1)
  }
  const subtractOne = (e) => {
    e.preventDefault()
    setCount(count - 1)
  }
  const restart = (e) => {
    e.preventDefault()
    setCount(0)
  }
  return (
    <div className="App">
      <h1 data-testid={'count'}>{count}</h1>
      <div>
      <button onClick={addOne}> add one</button>
      <button onClick={subtractOne}> substract one</button>
      <button onClick={restart}> set to 0</button>
      </div>
    </div>
  );
}

export default App;
