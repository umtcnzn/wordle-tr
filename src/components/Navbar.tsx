import React from 'react'

function Navbar() {
  return (
    <nav className="navbar bg-base-100 drop-shadow-md">
        <div className="navbar-start">
            <img alt='logo' className='w-10 h-10' src='https://upload.wikimedia.org/wikipedia/commons/c/c5/Wordle_Logo.svg' />
        </div>
        <div className="navbar-center">
            <p className="btn btn-ghost text-xl font-bold">TÜRKÇE WORDLE</p>
        </div>
        <div className="navbar-end">
        
        </div>
    </nav>
  )
}

export default Navbar