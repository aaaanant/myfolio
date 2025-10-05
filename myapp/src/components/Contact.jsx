import React from 'react'
import '../styles/Contact.css'
import "../styles/Button.css"
import Button from './Button'

function Contact() {
  return (
    <>
    
    <div className='contact-heading'>
      <h1>Contact Me</h1>
    </div>

    <div className="contact-grid">
      <div className="contact-grid-1">
        <h1>Got a project idea?</h1>
        <h2>Looking to collaborate or work together?</h2>
        <p>Fill out the form, and I’ll get back to you within 48 hours.</p>
        <div className='contact-details'>
        <p><i class="fa-solid fa-envelope"></i>anantbhatt789@gmail.com</p>
        <p><i class="fa-solid fa-phone"></i>+91-6397859115</p>
        </div>
      </div>

      <div className="contact-grid-2">
        <p>FILL THE FORM BELOW*</p>
      <div className='contact-form'>
        <form>
          <input type='text' placeholder='Your full name' required /><br/>
          <input type="email" placeholder='Enter your mail' required/><br/>
          <textarea placeholder='Type your message' required></textarea><br/>
           <Button text="Submit Now"/>
        </form>
        </div>

      </div>
    </div>


    </>
  )
}

export default Contact
