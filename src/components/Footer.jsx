import { Routes, Route, Link } from "react-router-dom";

export default function Footer (){
    return (
        <div className="footer">
        <Link to="/home">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to='/yellow'>Yellow</Link>
      </div>
    )
}