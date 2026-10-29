import React from 'react';
import ProfilePic from '../images/ProfilePic.jpg';

const Home = ({ personalInfo, home, text, scrollToSection, isEditing, onHomeChange, onPersonalInfoChange, onTextChange }) => {
  const update = (key, value) => onHomeChange({ ...home, [key]: value });
  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="home-copy">
          {isEditing ? <input className="edit-input home-tag-edit" value={text.homeTag} onChange={(e) => onTextChange({ ...text, homeTag: e.target.value })} /> : <p className="home-tag">{text.homeTag}</p>}
          <h1>{isEditing ? <input className="edit-input" value={text.homeGreeting} onChange={(e) => onTextChange({ ...text, homeGreeting: e.target.value })} /> : text.homeGreeting}<br />{isEditing ? <input className="edit-input" value={personalInfo.name} onChange={(e) => onPersonalInfoChange({ ...personalInfo, name: e.target.value })} /> : <span className="highlight">{personalInfo.name}</span>}</h1>
          {isEditing ? <input className="edit-input" value={personalInfo.title} onChange={(e) => onPersonalInfoChange({ ...personalInfo, title: e.target.value })} /> : <h2>{personalInfo.title}</h2>}
        {isEditing ? <textarea className="edit-textarea home-edit" value={home.intro} onChange={(e) => update('intro', e.target.value)} /> : <p>{home.intro}</p>}
          <div className="home-buttons">
            {isEditing ? <input className="edit-input button-text-edit" value={text.homePrimaryButton} onChange={(e) => onTextChange({ ...text, homePrimaryButton: e.target.value })} /> : <button className="btn primary" onClick={() => scrollToSection('projects')}>{text.homePrimaryButton}</button>}
            {isEditing ? <input className="edit-input button-text-edit" value={text.homeSecondaryButton} onChange={(e) => onTextChange({ ...text, homeSecondaryButton: e.target.value })} /> : <button className="btn secondary" onClick={() => scrollToSection('contact')}>{text.homeSecondaryButton}</button>}
          </div>
        </div>
        <div className="home-portrait">
          <div className="portrait-frame">
            <img src={ProfilePic} alt={personalInfo.name} />
          </div>
          <span className="portrait-orbit orbit-one" />
          <span className="portrait-orbit orbit-two" />
        </div>
      </div>
    </section>
  );
};

export default Home;
