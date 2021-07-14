import './App.css';
import { useState } from 'react'

function computeInitialCounter() {
  console.log('computeInitialCounter...')
  return Math.trunc(Math.random() * 20)
}

function App() {
  // const [counter, setCounter] = useState(0)
  const [counter, setCounter] = useState(() => computeInitialCounter())

  function add() {
    setCounter(prevCounterValue => prevCounterValue + 1 )
    // setCounter(prevCounterValue => prevCounterValue + 1 )
    // setCounter(prevCounterValue => prevCounterValue + 1 )
  }

  function sub() {
    setCounter(prevCounterValue => prevCounterValue - 1)
  }

  const [state, setState] = useState({
    title: 'Some Title',
    date: new Date()
  })

  function changeTitle() {
    setState(prevState => {
      return {
        ...prevState,
        title: 'New Title text'
      }
    })
  }

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      {/* 1 */}
      {/* <button className="btn btn-danger" onClick={() => setCounter(counter + 1)}>ADD</button>
      <button className="btn btn-success" onClick={() => setCounter(counter - 1)}>SUB</button> */}
      {/* 2 */}
      <button className="btn btn-danger" onClick={add}>ADD</button>
      <button className="btn btn-success" onClick={sub}>SUB</button>
      {/* 3 */}
      <button className="btn btn-primary" onClick={changeTitle}>Change Title</button>

      <div>
        <pre>
          {JSON.stringify(state, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default App;
