import './App.css';
import { useState, useCallback } from 'react'
import ItemsList from './ItemsList';

function App() {

  const [counter, setCounter] = useState(0)
  const [colored, setColored] = useState(false)

  const styles ={
    color: colored ? 'red' : 'black'
  }

  const generateItems = useCallback(() => {
    return new Array(counter).fill('').map((_, index) => `text ${index + 1}`)
  }, [counter])

  return (
    <div className="App">
      <h1 style={styles}>Counter: {counter}</h1>
      <div>
        <button onClick={() => setCounter(prevCount => prevCount + 1)} className="btn btn-success">Add</button>
        <button onClick={() => setColored(prevColor => !prevColor)} className="btn btn-warning">Change color</button>
      </div>

      <ItemsList listItemsFunc={generateItems} />
      
    </div>
  );
}

export default App;
