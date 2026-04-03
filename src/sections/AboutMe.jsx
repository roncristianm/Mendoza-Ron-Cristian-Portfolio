import React from 'react';
import ProfilePic from '../images/ProfilePic.jpg';

const AboutMe = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <span className="section-label">About Me</span>
            <h2>Engineering solutions,<br />one line at a time.</h2>
            <p>
              I'm a Computer Engineering student with a passion for building software that solves real problems.
              My work spans web development, backend systems, and AI-powered applications.
              I enjoy understanding how hardware and software work together,
              and I'm always looking for projects where I can apply that across the full stack.
            </p>
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
