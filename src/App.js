import './App.css'
import Alert from './Alert/Alert'
import Main from './Main/Main'
import React from 'react'

//ex.1
export const AlertContext = React.createContext()

function App() {
  const [alert, setAlert] = React.useState(false)
  return (
    <AlertContext.Provider value={alert}>
      <div className="container p-5">
        <Alert />
        <Main toggle={() => setAlert(prev => !prev)}/>
      </div>
    </AlertContext.Provider>
  )
}

export default App
