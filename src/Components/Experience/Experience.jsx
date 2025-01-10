import React from "react"; 
import "./Experience.css";
import lyft from "../../img/lyft.png";
import playbees from "../../img/playbees.png";
function Experience() {
  return (
    <div className="experience-container">
               
       
              <div className="ex-header ex">
        <h2>My <span className="highlight">Experiences</span></h2>
      </div>
    
        <div className="timeline-wrapper">
       
    <div className='timeline'>
       
        <div className='container left-container'>
   
            <img src={lyft} className="circle" alt="Lyft Logo" />
            <div className='text-box'>
                <h4>Lyft</h4>
                <small>2023 - 2024</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorem.</p>
                <span className='left-container-arrow'></span>
            </div>
        </div>
       
        <div className='container right-container'>
       
            <img src={playbees} className="circle" alt="Playbess Logo" />
            <div className='text-box'>
                <h4>Playbess Technologies</h4>
                <small>2023 - 2024</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorem.</p>
                <span className='right-container-arrow'></span>
            </div>
        <div className="blur blur-1"></div>
        </div>
    </div>
</div>

    {/* </div> */}
    </div>
  )
}

export default Experience
