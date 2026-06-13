import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const Navbar = () => {
  return (
    <nav id="nav">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Cart">Cart</Link>
    </nav>
  )
}

export default Navbar