import './App.css'
import React, { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  const changeNameHandler = event => {
    return setName(event.target.value)
  }

  const changeLastNameHandler = event => {
    return setLastName(event.target.value)
  }

  return (
      <div className="container p-5">
        <input type="text" value={name} onChange={changeNameHandler}/>
        <input type="text" value={lastName} onChange={changeLastNameHandler}/>
        <div>Name: {name} / Last Name: {lastName}</div>
      </div>
  )
}

export default App
