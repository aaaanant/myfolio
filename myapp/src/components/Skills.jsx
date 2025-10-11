import React from "react"
import "../styles/Skills.css"
function Skills() {

  return (
    <>
    
    <div className='skills-heading'>
    <h1>Skills</h1>    
    </div> 
    
        <div className="skills-grid">
      <div className="skills-grid-1">

        {/* HTML5 */}
        <div className='skills-name-value'>
       
        <div className='skills-name'>
        <p>HTML5</p>
       </div>

        <div className='skills-progress'>
            <p>0%</p>
            <progress value={8} max={10}></progress> 
            <p>100%</p>
        </div>

        </div>

        
        {/* CSS */}
        <div className='skills-name-value'>
       
        <div className='skills-name'>
        <p>CSS</p>
       </div>

        <div className='skills-progress'>
            <p>0%</p>
             <progress value={7} max={10} />
            <p>100%</p>
        </div>

        </div>

        {/* JS EC6 */}
<div className='skills-name-value'>
       
        <div className='skills-name'>
        <p>JavaScript</p>
       </div>

        <div className='skills-progress'>
            <p>0%</p>
             <progress value={5} max={10} />
            <p>100%</p>
        </div>

        </div>

        {/* React Jsx */}
<div className='skills-name-value'>
       
        <div className='skills-name'>
        <p>React Jsx</p>
       </div>

        <div className='skills-progress'>
            <p>0%</p>
             <progress value={5} max={10} />
            <p>100%</p>
        </div>

        </div>

        {/* Webflow */}
    <div className='skills-name-value'>
       
        <div className='skills-name'>
        <p>Webflow</p>
       </div>

        <div className='skills-progress'>
            <p>0%</p>
             <progress value={5} max={10} />
            <p>100%</p>
        </div>

        </div>

        {/* C++ */}
    <div className='skills-name-value'>
       
        <div className='skills-name'>
        <p>C++</p>
       </div>

        <div className='skills-progress'>
            <p>0%</p>
             <progress value={7} max={10} />
            <p>100%</p>
        </div>

        </div>

        {/* C++ */}
    <div className='skills-name-value'>
       
        <div className='skills-name'>
        <p>MongoDB</p>
       </div>

        <div className='skills-progress'>
            <p>0%</p>
             <progress value={4} max={10} />
            <p>100%</p>
        </div>

        </div>
        
        {/* MySQL */}
    <div className='skills-name-value'>
       
        <div className='skills-name'>
        <p>MySQL</p>
       </div>

        <div className='skills-progress'>
            <p>0%</p>
             <progress value={7} max={10} />
            <p>100%</p>
        </div>

        </div>



        </div>


      <div className="skills-grid-2">

        </div>

    </div>
    </>
  )
}

export default Skills
