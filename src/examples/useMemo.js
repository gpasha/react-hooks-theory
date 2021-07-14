import './App.css';
import { useState, useEffect, useMemo } from 'react'

function complexCount(num) {
  console.log('complexCount')
  let i = 0
  while (i < 1000000000) i++
  return num * 2
}

function App() {

  const [counter, setCounter] = useState(40)
  const [colored, setColored] = useState(false)

  //cash value
  const computedCount = useMemo(() => {
    return complexCount(counter)
  }, [counter])

  //cash for object
  const styles = useMemo(() => ({
    color: colored ? 'red' : 'black'
  }), [colored])

  useEffect(() => {
    console.log('styles changed')
  }, [styles])

  return (
    <div className="App">
      <h1 style={styles}>Counter: {computedCount}</h1>
      <div>
        <button onClick={() => setCounter(counter + 1)} className="btn btn-success">Add</button>
        <button onClick={() => setCounter(counter - 1)} className="btn btn-danger">Sub</button>
        <button onClick={() => setColored(() => !colored)} className="btn btn-warning">Change color</button>
      </div>
    </div>
  );
}

export default App;
