import React from 'react';
import ProfilePic from '../images/ProfilePic.jpg';

const Home = ({ personalInfo, home, scrollToSection, isEditing, onHomeChange }) => {
  const update = (key, value) => onHomeChange({ ...home, [key]: value });
  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="home-copy">
          <p className="home-tag">Portfolio / 2026</p>
          <h1>Hi, I'm<br /><span className="highlight">{personalInfo.name}</span></h1>
          <h2>{personalInfo.title}</h2>
        {isEditing ? <textarea className="edit-textarea home-edit" value={home.intro} onChange={(e) => update('intro', e.target.value)} /> : <p>{home.intro}</p>}
          <div className="home-buttons">
            <button className="btn primary" onClick={() => scrollToSection('projects')}>Explore my work</button>
            <button className="btn secondary" onClick={() => scrollToSection('contact')}>Let's connect</button>
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
