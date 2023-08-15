import { Routes, Route, Link } from "react-router-dom";



export default function Navbar (){
    return (
        <div className="navbar">
        <Link to="/home">Home</Link>
        <br/>
        <Link to="/blue">Blue</Link>
        <br/>
        <Link to="/red">Red</Link>
      </div>
    )
}