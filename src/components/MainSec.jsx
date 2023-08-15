import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Blue from "./Blue";
import Red from "./Red";
import Yellow from './Yellow';


export default function MainSection (){
    return(
        <div className="main-section">
        <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/blue" element={<Blue/>}/>
        <Route path="/red" element={<Red/>}/>
        <Route path='/yellow' element={<Yellow/>}/>
        </Routes>
      </div>
    )
}