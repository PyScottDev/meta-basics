import './App.css'
import Card from './lab-4-random-number-cards/Card'

const randNum = () => Math.floor(Math.random() * 100) + 1;

function App() {
  return (
    <main>
      <h1>Task: Add three Card elements</h1>
      <Card num={randNum()} />
      <Card num={randNum()} />
      <Card num={randNum()} />
    </main>
  )
}

export default App