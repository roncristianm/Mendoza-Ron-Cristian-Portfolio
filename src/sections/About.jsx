import React from 'react';
import ProfilePic from '../images/ProfilePic.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a web developer who loves building websites and learning new things. 
              I enjoy making websites that work well and look good.
            </p>
          </div>
          <div className="about-image">
            <img src={ProfilePic} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
