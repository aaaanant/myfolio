import React from 'react'
import '../styles/Contact.css'
import "../styles/Button.css"
import Button from './Button'

function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "47827b57-9300-4912-b646-a3ccfd8580da");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
        <form onSubmit={onSubmit}>
         <input type="hidden" name="access_key" value="47827b57-9300-4912-b646-a3ccfd8580da"></input>
          <input type='text' placeholder='Your full name' required /><br/>
          <input type="email" placeholder='Enter your mail' required/><br/>
          <textarea placeholder='Type your message' required></textarea><br/>
           <Button type="submit" text="Submit Now"/>
           
        </form>
          <span>{result}</span>
        </div>

      </div>
    </div>


    </>
  )
}

export default Contact
