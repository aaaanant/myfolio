import React from 'react'
import "../styles/Footer.css"
function Footer() {
  return (
   <>
   
   <div className='footer-grid'>
    <div className='footer-box-1'>
        <h2><i class="fa-solid fa-envelope"></i>anantbhatt789@gmail.com</h2>
        <h2><i class="fa-solid fa-phone"></i>+91-6397859115</h2>
    </div>
    <div className='footer-box-2'>
    <h4>Social Media</h4>
    <p><a href='#'>LinkedIn</a> </p>
    <p><a href='#'>GitHub</a> </p>
    <p><a href='#'>Instagram</a> </p>
    <p><a href='#'>WhatsApp</a> </p>
    </div>
   </div>
   <div className='copyright'>
    <p>Copyright © 2025 - Anant Bhatt</p>
   </div>
   </>
  )
}

export default Footer
