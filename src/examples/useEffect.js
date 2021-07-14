import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [type, setType] = useState('users')
  const [data, setData] = useState(null)
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))

      return () => {
        console.log('clean type')
      }
  }, [type])

  useEffect(() => {
    console.log('ComponentDidMount')
  }, [])

  const definePos = e => {
    setPos({
      x: e.clientX,
      y: e.clientY
    })

  }

  useEffect(() => {
    window.addEventListener('mousemove', definePos)

    return () => {
      window.removeEventListener('mousemove', definePos)
    }
  }, [])

  return (
    <div className="App">
      <h1>Type: {type}</h1>
      <div>
        <button className="btn btn-danger" onClick={() => setType('users')}>Users</button>
        <button className="btn btn-success" onClick={() => setType('todos')}>Todos</button>
        <button className="btn btn-primary" onClick={() => setType('posts')}>Posts</button>
      </div>
      
      <div>
        <pre>{JSON.stringify(pos, null, 2)}</pre>
      </div>

      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
