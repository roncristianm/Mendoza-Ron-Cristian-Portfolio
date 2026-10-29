import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const ContactMe = ({ personalInfo, contact, isEditing, onContactChange, onPersonalInfoChange }) => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <span className="section-label">Contact</span>
        <h2>Let's work together.</h2>
        <div className="contact-grid">
          <div className="contact-left">
            {isEditing ? <textarea className="edit-textarea" value={contact.description} onChange={(e) => onContactChange({ ...contact, description: e.target.value })} /> : <p>{contact.description}</p>}
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                {isEditing ? <input className="edit-input" value={personalInfo.email} onChange={(e) => onPersonalInfoChange({ ...personalInfo, email: e.target.value })} /> : <span>{personalInfo.email}</span>}
              </div>
              <div className="contact-item">
                <Phone size={16} />
                {isEditing ? <input className="edit-input" value={personalInfo.phone} onChange={(e) => onPersonalInfoChange({ ...personalInfo, phone: e.target.value })} /> : <span>{personalInfo.phone}</span>}
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                {isEditing ? <input className="edit-input" value={personalInfo.location} onChange={(e) => onPersonalInfoChange({ ...personalInfo, location: e.target.value })} /> : <span>{personalInfo.location}</span>}
              </div>
            </div>
          </div>
          <div className="contact-right">
            <h3>Find me online</h3>
            <div className="social-links">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
