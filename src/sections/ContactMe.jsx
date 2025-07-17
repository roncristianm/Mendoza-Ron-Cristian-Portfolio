import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const ContactMe = ({ personalInfo }) => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>I'm always happy to talk about new jobs and fun projects.</p>
        <div className="contact-info">
          <div className="contact-item">
            <Mail size={24} />
            <span>{personalInfo.email}</span>
          </div>
          <div className="contact-item">
            <Phone size={24} />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="contact-item">
            <MapPin size={24} />
            <span>{personalInfo.location}</span>
          </div>
        </div>
        <div className="social-links">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
            <Github size={24} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
