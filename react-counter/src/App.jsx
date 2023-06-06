import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1>Simple Counter App using React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increase
        </button>
      </div>
      <div className="counter">Counter: {count}</div>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          Decrease
        </button>
      </div>
    </>
  )
}

export default App
