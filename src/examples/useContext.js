import './App.css'
import Alert from './Alert/Alert'
import Main from './Main/Main'
import React from 'react'
import AlertContextComponent from './Alert/AlertContext'

function App() {
  return (
    <AlertContextComponent>
      <div className="container p-5">
        <Alert />
        <Main/>
      </div>
    </AlertContextComponent>
  )
}

export default App
