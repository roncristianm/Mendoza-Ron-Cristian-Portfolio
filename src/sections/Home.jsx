import React from 'react';

const Home = ({ personalInfo, setCurrentPage }) => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <p className="home-tag">Portfolio_v1.0</p>
        <h1>Hi, I'm<br /><span className="highlight">{personalInfo.name}</span></h1>
        <h2>{personalInfo.title}</h2>
        <p>A Computer Engineering student who builds software across the stack — from web applications and backend systems to AI-powered embedded projects.</p>
        <div className="home-buttons">
          <button className="btn primary" onClick={() => setCurrentPage('projects')}>
            See My Work
          </button>
          <button className="btn secondary" onClick={() => setCurrentPage('contact')}>
            Contact Me
          </button>
        </div>
        <div className="home-stats">
          <div className="stat-item">
            <span className="stat-value">3+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">5</span>
            <span className="stat-label">Skill Areas</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">2025</span>
            <span className="stat-label">Active</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
