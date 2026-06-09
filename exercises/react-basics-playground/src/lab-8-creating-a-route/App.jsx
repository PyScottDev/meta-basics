import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './lab-8-creating-a-route/Home'
import About from './lab-8-creating-a-route/About'
import Contact from './lab-8-creating-a-route/Contact'

function App() {
  return (
    <main>
      <nav>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  )
}

export default App