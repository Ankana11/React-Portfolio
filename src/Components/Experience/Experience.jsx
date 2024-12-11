import React from "react"; 
import "./Experience.css";
import lyft from "../../img/lyft.png";
import playbees from "../../img/playbees.png";
function Experience() {
  return (
    <div>
              <div className="blur blur-1"></div>
              <div className="blur blur-2"></div>
              <div className="ex-header ex">
        <h2>My <span className="highlight">Experiences</span></h2>
      </div>
        <div className='main'>
        <div className='timeline'>
            <div className='container left-container'>
              
                <img src={lyft} className="circle" alt=""/>
                <div className='text-box htmlcard'>
                <div className="blur blur-1"></div>
                    <h2 className='htmltext'>Lyft</h2>
                    <small>2023 - 2024</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorem.</p>
                    <span className='left-container-arrow'></span>
                </div>
            </div>
            <div className='container right-container'>
               
                <img src={playbees} className="circle" alt='' />
                <div className="blur blur-2"></div>
                <div className='text-box javascriptcard'>
                    <h2 className='javascripttext'>Playbess Technologies</h2>
                    <small>2023 - 2024</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorem.</p>
                    <span className='right-container-arrow'></span>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Experience
