import React from 'react'
import "../styles/Home.css"
import "../styles/Button.css"
import Button from './Button'

import About from './About'
import Skills from './Skills'
import Project from './Project'
import Contact from './Contact'

function Home() {
  return (
     <>
     
     <div className='home-grid'>
      <div className='home-box-1'>

      <h1><span>FULL STACK DEVELOPER</span></h1>
      <h1>crafting dynamic and user-friendly website</h1>
      <p>I’m Anant Bhatt — passionate about creating user-friendly websites with clean code and great design.</p>
             <Button text="Resume"/>

      </div>

      <div className='home-box-2'>

      </div>
     </div>

     <About/>
     <Skills/>
     <Project/>
    <Contact/>

     
     </>
  )
}

export default Home
