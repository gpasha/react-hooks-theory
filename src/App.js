import './App.css'
import React, { useEffect, useState } from 'react'

function useLogger(value) {
  useEffect(() => {
    console.log(value)
  }, [value])
}

function useInput(vinitialValue) {
  const [value, setValue] = useState(vinitialValue)

  function onChange(e) {
    setValue(e.target.value)
  }

  return {
    value,
    onChange
  }
}

function App() {

  const input = useInput('')
  const lastName = useInput('')

  useLogger(input.value)

  return (
      <div className="container p-5">
        <input type="text" {...input} />
        <input type="text" {...lastName} />
        <div>Name: {input.value} / Last Name:{lastName.value}</div>
        <button>Clear text</button>
      </div>
  )
}

export default App
