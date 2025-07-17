import React from 'react';

const Character = ({ personalInfo, scrollToSection }) => {
  return (
    <section id="home" className="character">
      <div className="character-content">
        <h1>Hi, I'm <span className="highlight">{personalInfo.name}</span></h1>
        <h2>{personalInfo.title}</h2>
        <p>I love creating new things and building great websites that people enjoy using.</p>
        <div className="character-buttons">
          <button className="btn primary" onClick={() => scrollToSection('projects')}>
            See My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Character;
