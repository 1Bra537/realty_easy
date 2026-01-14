import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
      <header className="header">
         <div className='projectName'>LandIn</div>
          <nav className="navbar">
            <a href="/">About</a>
            <a href="/">Services</a>
            <a href="/">Contact</a>
        </nav>
    </header>
  )
}

export default Navbar
