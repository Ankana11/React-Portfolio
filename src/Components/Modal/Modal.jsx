import React, {useContext} from 'react';
import './Modal.css';
import { themeContext } from "../../Context";
const Modal = ({ project, closeModal }) => {
   const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-dialog" style={{ background: darkMode ? "black" : "" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{project.title}</h5>
            <button type="button" className="btn-close" onClick={closeModal} aria-label="Close" style={{ color: darkMode ? "black" : "" }}></button>
          </div>
          <div className="modal-body">
            <img src={project.img} alt={project.title} style={{ width: '75%' }} />
            <p style={{ color: darkMode ? "white" : "" }} className="mt-3">{project.description}</p>
          </div>

          {/* Displaying badges for tech stack */}
          <div className="tech-stack" >
            {project.stack &&
              project.stack.map((tech, index) => (
                <span key={index} className={`badge rounded-pill text-bg-dark`}>
                  {tech}
                </span>
              ))}
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-sm btn-secondary" onClick={closeModal}>
              Close
            </button>
            <button type="button" className="btn btn-sm btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
