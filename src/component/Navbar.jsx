import React from 'react'
import '../css/Navbar.css'
import { FaStarAndCrescent } from "react-icons/fa";


const Navbar = () => {
  return (
    <header>
        <div className="navbar">
            <div className="navbar-brand">
                <h1><FaStarAndCrescent /> Pemuda Muslim</h1>
            </div>
        </div>
    </header>
  )
}

export default Navbar