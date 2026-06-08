import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const Navbar = () => {
  return (
    <nav>
      <Link to="/Home">Home</Link>
      <Link to="/products">About</Link>
      <Link to="/assignment">Contact</Link>
       <Link  to={"/cart"}>  <li>Cart</li> </Link>
    </nav>
  )
}

export default Navbar
