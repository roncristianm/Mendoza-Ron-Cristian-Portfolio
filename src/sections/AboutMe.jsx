import React from 'react';
import AboutPortrait from '../images/AboutPortrait.jpg';

const AboutMe = ({ about, text, isEditing, onAboutChange, onTextChange }) => {
  const update = (key, value) => onAboutChange({ ...about, [key]: value });
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            {isEditing ? <input className="edit-input section-label-edit" value={text.aboutLabel} onChange={(e) => onTextChange({ ...text, aboutLabel: e.target.value })} /> : <span className="section-label">{text.aboutLabel}</span>}
            {isEditing ? <input className="edit-input edit-heading" value={about.heading} onChange={(e) => update('heading', e.target.value)} /> : <h2>{about.heading}</h2>}
            {isEditing ? <textarea className="edit-textarea" value={about.description} onChange={(e) => update('description', e.target.value)} /> : <p>{about.description}</p>}
          </div>
          <div className="about-image">
            <img src={AboutPortrait} alt="Ron Cristian Mendoza" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
