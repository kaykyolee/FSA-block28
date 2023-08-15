import { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import './App.css';
import MainSection from './components/MainSec';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Navbar/>
    <MainSection/>
    <Footer/>
    </div>
    </>
  );
}

export default App
