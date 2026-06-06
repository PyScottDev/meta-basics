import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="app-container">
      <h1 className="counter-heading">Current number: {num}</h1>
      <div className="button-container">
        <button
          className="counter-button" 
          onClick={() => setNum(num + 1)}
        >
          Add 1
        </button>
        <button
          className="counter-button" 
          onClick={() => setNum(num - 1)}
        >
          Subtract 1
        </button>
      </div>
    </div>
  )
}

export default App