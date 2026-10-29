import React from 'react';

const Home = ({ personalInfo, home, scrollToSection, isEditing, onHomeChange }) => {
  const update = (key, value) => onHomeChange({ ...home, [key]: value });
  return (
    <section id="home" className="home">
      <div className="home-content">
        <p className="home-tag">Portfolio_v1.0</p>
        <h1>Hi, I'm<br /><span className="highlight">{personalInfo.name}</span></h1>
        <h2>{personalInfo.title}</h2>
        {isEditing ? <textarea className="edit-textarea home-edit" value={home.intro} onChange={(e) => update('intro', e.target.value)} /> : <p>{home.intro}</p>}
        <div className="home-buttons">
          <button className="btn primary" onClick={() => scrollToSection('projects')}>
            See My Work
          </button>
          <button className="btn secondary" onClick={() => scrollToSection('contact')}>
            Contact Me
          </button>
        </div>
        <div className="home-stats">
          <div className="stat-item">
            <span className="stat-value">{isEditing ? <input className="edit-input stat-edit" value={home.projectStat} onChange={(e) => update('projectStat', e.target.value)} /> : home.projectStat}</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{isEditing ? <input className="edit-input stat-edit" value={home.skillStat} onChange={(e) => update('skillStat', e.target.value)} /> : home.skillStat}</span>
            <span className="stat-label">Skill Areas</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{isEditing ? <input className="edit-input stat-edit" value={home.activeStat} onChange={(e) => update('activeStat', e.target.value)} /> : home.activeStat}</span>
            <span className="stat-label">Active</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
