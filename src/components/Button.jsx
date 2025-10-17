import React from 'react'
import "../styles/Button.css";
function Button(props) {
  return (
    <div className='button-component'>
   <button>{props.text}</button>
   </div>
  )
}

export default Button
