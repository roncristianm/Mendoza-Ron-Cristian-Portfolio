import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const ContactMe = ({ personalInfo }) => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-info">
          <div className="contact-item">
            <Mail size={16} />
            <span>{personalInfo.email}</span>
          </div>
          <div className="contact-item">
            <Phone size={16} />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="contact-item">
            <MapPin size={16} />
            <span>{personalInfo.location}</span>
          </div>
        </div>
        <div className="social-links">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
            <Github size={18} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
