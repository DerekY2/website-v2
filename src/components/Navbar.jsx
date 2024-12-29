import React from 'react'
import './Navbar.css'
import navIcon from '../assets/Sparkle_Doll.png'

function Navbar(){
  return (
    <nav className="navbar">
      <img src={navIcon} alt="Sparkle Doll" className='nav-icon' />
      <div className="nav-menu">
        <ul className="nav-list">
          <li className="nav-link">Home</li>
          <li className="nav-link">Work</li>
          <li className="nav-link">About</li>
          <li className="nav-link">Contact</li>
        </ul>
      </div>
      <button className="nav-btn">
        <img src="" alt="" className="nav-btn-img" />Contact Me
      </button> 
    </nav>
  )
}

export default Navbar

