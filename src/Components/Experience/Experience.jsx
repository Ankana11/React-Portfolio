import React from "react"; 
import "./Experience.css";
import lyft from "../../img/lyft.png";
import playbees from "../../img/playbees.png";
import me from "../../img/final_exp.png";
function Experience() {
    
  return (
    <div className="experience-container">
               
       
               <div className="ex-header ex">
        <img src={me} alt="Me" className="me-image" />
        <h2>My <span className="highlight">Experiences</span></h2>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
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
                <small>2024 - Present</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorem.</p>
                <span className='right-container-arrow'></span>
            </div>
        
        </div>
    </div>
</div>

    {/* </div> */}
    </div>
  )
}

export default Experience
