import React, { useState } from "react";
import "./Portfolio.css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import Modal from "../Modal/Modal"; 


const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false); 
  const [projectDetails, setProjectDetails] = useState({});

  const projects = [
    { 
      id: 1, 
      img: Sidebar, 
      title: "Sidebar Project", 
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, quam, consequuntur alias officia inventore ea consectetur eligendi sed consequatur necessitatibus reprehenderit optio provident amet error!.", 
      stack: ["JavaScript", "React", "CSS"]
    },
    { 
      id: 2, 
      img: Ecommerce, 
      title: "Ecommerce Project", 
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, quam, consequuntur alias officia inventore ea consectetur eligendi sed consequatur necessitatibus reprehenderit optio provident amet error!", 
      stack: ["Node.js", "MongoDB", "Express", "React"]
    },
    { 
      id: 3, 
      img: MusicApp, 
      title: "Music App Project", 
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, quam, consequuntur alias officia inventore ea consectetur eligendi sed consequatur necessitatibus reprehenderit optio provident amet error!",
      stack: ["React", "JavaScript", "CSS"]
    },
    { 
      id: 4, 
      img: HOC, 
      title: "HOC Project", 
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, quam, consequuntur alias officia inventore ea consectetur eligendi sed consequatur necessitatibus reprehenderit optio provident amet error!",
      stack: ["React", "JavaScript"]
    },
    { 
      id: 5, 
      img: Sidebar, 
      title: "HOC Project", 
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, quam, consequuntur alias officia inventore ea consectetur eligendi sed consequatur necessitatibus reprehenderit optio provident amet error!",
      stack: ["React", "JavaScript"]
    },
  ];

  const openModal = (project) => {
    setProjectDetails(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setProjectDetails({});
  };

  return (
   
      <div className="portfolio" id="portfolio">
        <h2 className="mb-4">Portfolio</h2>

   
      <div className="portfolio-row">
        {projects.map((project) => (
          <div className="portfolio-card" key={project.id} onClick={() => openModal(project)}>
            <img src={project.img} alt={project.title} />
          </div>
        ))}
      </div>

   
      {modalOpen && (
        <Modal
          project={projectDetails}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Portfolio;
