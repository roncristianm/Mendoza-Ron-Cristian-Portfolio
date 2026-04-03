import React from 'react';
import ProfilePic from '../images/ProfilePic.jpg';

const AboutMe = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <span className="section-label">About Me</span>
            <h2>Building things<br />for the web.</h2>
            <p>
              I'm a web developer who loves building websites and learning new things.
              I enjoy making websites that work well and look good — from frontend interfaces
              to backend systems, I like understanding how all the pieces fit together.
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
