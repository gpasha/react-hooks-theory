import './App.css'
import React, { useEffect, useState } from 'react'

function useLogger(value) {
  useEffect(() => {
    console.log(value)
  }, [value])
}

function useInput(vinitialValue) {
  const [value, setValue] = useState(vinitialValue)

  const onChange = e => {
    setValue(e.target.value)
  }

  const clear = () => {
    setValue('')
  }

  return {
    bind: {
      value,
      onChange
    },
    value,
    clear
  }
}

function App() {

  const input = useInput('')

  useLogger(input.value)

  return (
      <div className="container p-5">
        <input type="text" {...input.bind} />
        <div>Name: {input.value}</div>
        <button onClick={input.clear}>Clear text</button>
      </div>
  )
}

export default App
