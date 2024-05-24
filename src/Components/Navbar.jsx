// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../assets/moody_transparent.png'
import '../App.css'
const Navbar = () => {
  return (
    <div className='nav'>
        <img className='logo' src={logo} alt="" />
        <ul className='navlinks'>
            <li>
                <a href="#aboutMeSection">About Me</a>
            </li>
            <li>
                <a href="#">Contact Me</a>
            </li>
            <li>
                <a href="#">My Work</a>
            </li>
            <li>
                <a href="#">Resume</a>
            </li>
        </ul>   
    </div>
  )
}
 
export default Navbar