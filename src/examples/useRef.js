import './App.css';
import { useState, useEffect, useRef } from 'react'

function App() {

  // 1 problem useState
  // const [renderCount, setRenderCount] = useState(1)
  // useEffect(() => {
  //   setRenderCount(prevCount => prevCount + 1)
  // }, [renderCount])

  const [value, setValue] = useState('initial')
  //1 change values without render
  const renderCountRef = useRef(1)
  //2 get DOM of element
  const inputRef = useRef(null)
  //3 get previous value
  const prevValue = useRef('')

  useEffect(() => {
    renderCountRef.current++
    console.log('inputRef: ', inputRef.current)
  }, [value])

  useEffect(() => {
    prevValue.current = value
  }, [value])

  return (
    <div className="App">
      <h1>Render Count: {renderCountRef.current}</h1>
      <h1>Previous input value: {prevValue.current}</h1>
      <div>
        <input type="text" ref={inputRef} onChange={e => setValue(e.target.value)} value={value}/>
        <button onClick={() => inputRef.current.focus()} className="btn btn-success">Set Focus</button>
      </div>
    </div>
  );
}

export default App;
