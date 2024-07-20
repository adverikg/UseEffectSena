import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Numero de clicks: ${count}`
  }, [count])
  return (
    <>
      <div className="card">
      <h1>Número de clicks: {count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          Haz click
        </button>
      </div>
    </>
  )
}

export default App
