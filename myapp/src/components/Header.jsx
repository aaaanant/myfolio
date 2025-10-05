import React from 'react'
import "../styles/header.css";
import Button from './Button';
function Header() {
  return (
    <>
    
    <nav>
      <div className='brand'>
      <h1>Myfolio</h1>
      </div>
      <div className='list-space'>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About Me</a></li>
        <li><a href='#'>Skills</a></li>
        <li><a href='#'>Project</a></li>
        <Button text="Resume"/>
      </ul>
      </div>
      <div className='menu'>
<i class="fa-solid fa-bars"></i>
      </div>
      <div className='close'>
<i class="fa-solid fa-xmark"></i>
      </div>
    </nav>
    
    </>
  )
}

export default Header
