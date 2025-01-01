import React from 'react';
import './Modal.css'; 

const Modal = ({ project, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{project.title}</h5>
            <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <img src={project.img} alt={project.title} style={{ width: '80%' }} />
            <p className='mt-3'>{project.description}</p>
          </div>

          {/* Displaying badges for tech stack */}
          <div className="tech-stack">
            {project.stack && project.stack.map((tech, index) => (
              <span key={index} className="badge rounded-pill text-bg-secondary">{tech}</span>
            ))}
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
