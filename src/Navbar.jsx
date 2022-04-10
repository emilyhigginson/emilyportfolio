import React from 'react'
import {Link } from 'react-scroll'
function Navbar() {
  return (
    <div className='navbar'>
        Emily Higginson
        <Link className='link'  to= "blog" spy={true} smooth={true} offset={50} duration={500} >   Blog </Link>
        <Link  className='link' to= "projects" spy={true} smooth={true} offset={-20} duration={500} >   Projects </Link>
        <Link className='link' to= "about" spy={true} smooth={true} offset={50} duration={500} >   About </Link>

        <Link className='link' to="/" spy={true} smooth={true} offset={-100} duration={500} > Home </Link>
    </div>
  )
}

export default Navbar