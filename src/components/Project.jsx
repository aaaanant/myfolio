import React from 'react'
import "../styles/Project.css"
import Projectgrid from './Projectgrid'
import netflix from "../assets/netflix.png"
function Project() {
  return (
    <>
      
        <div className='project-heading'>
    <h1>Project</h1>    
    </div> 

      <div className="project-grid">
<Projectgrid projectimg={netflix} projectwidth={300}
projecth1="Netflix Clone" projectp="Created using HTML, CSS AND JS"
/>

<Projectgrid />

<Projectgrid/>

    </div>

    </>
  )
}

export default Project
