import { useState } from 'react'
import './App.css'
import Fruits from './lab-7-managing-state/Fruits'
import FruitsCounter from './lab-7-managing-state/FruitsCounter'

function App() {
  const [fruits] = useState([
    { fruitName: 'apple', id: 1 },
    { fruitName: 'apple', id: 2 },
    { fruitName: 'plum', id: 3 },
  ])
  return (
    <main className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits}/>
      <FruitsCounter fruits={fruits}/>
    </main>
  )
}

export default App