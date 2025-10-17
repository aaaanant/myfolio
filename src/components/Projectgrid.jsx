import "../styles/Projectgrid.css"
import netflix from "../assets/netflix.png"
import React from 'react'
import Button from "./Button.jsx"
function Projectgrid(props) {
  return (
    <>
      
      <div className="project-gridbox">
        <img src={props.projectimg} width={props.projectwidth} alt="" />
        <h1>{props.projecth1}</h1>
        <p>{props.projectp}</p>
        <Button text="View My Project"/>
      </div>

    </>
  )
}

export default Projectgrid
