import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue'
import Red from './components/Red'
import Home from './components/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="navbar">
      <Link to="/home">Home</Link>
      <br/>
      <Link to="/blue">Blue</Link>
      <br/>
      <Link to="/red">Red</Link>
    </div>
    <div id="main-section">
      <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/blue" element={<Blue/>}/>
      <Route path="/red" element={<Red/>}/>
      </Routes>
    </div>
    <footer>
      <h4><Link to="/home">Home</Link></h4>
      <h4><Link to="/blue">Blue</Link></h4>
      <h4><Link to="/red">Red</Link></h4>
    </footer>
    

    </>
  );
}

export default App
