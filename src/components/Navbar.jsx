import React from 'react'
import './Navbar.css'
import navIcon from '../assets/Sparkle_Doll.png'

function Navbar(){
  return (
    <header className='header'>
      <nav className="navbar">
        <div href="" className="nav-icon">
          <img src={navIcon} alt="Sparkle Doll"/>
        </div>
        <div className="nav-menu">
          <div className="nav-list">
            <div className="nav-item">Home</div>
            <div className="nav-item">Work</div>
            <div className="nav-item">About</div>
            <div className="nav-item">Contact</div>
          </div>
        </div>
        <button className="nav-btn">
          <img src="" alt="" className="nav-btn-img" />Contact Me
        </button> 
      </nav>
    </header>
  )
}

export default Navbar