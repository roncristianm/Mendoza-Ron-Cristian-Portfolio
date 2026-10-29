import React from 'react';
import ProfilePic from '../images/ProfilePic.jpg';

const AboutMe = ({ about, isEditing, onAboutChange }) => {
  const update = (key, value) => onAboutChange({ ...about, [key]: value });
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <span className="section-label">About Me</span>
            {isEditing ? <input className="edit-input edit-heading" value={about.heading} onChange={(e) => update('heading', e.target.value)} /> : <h2>{about.heading}</h2>}
            {isEditing ? <textarea className="edit-textarea" value={about.description} onChange={(e) => update('description', e.target.value)} /> : <p>{about.description}</p>}
          </div>
          <div className="about-image">
            <img src={ProfilePic} alt="Ron Cristian Mendoza" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
