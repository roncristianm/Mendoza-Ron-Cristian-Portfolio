import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import ContactPortrait from '../images/ContactPortrait.jpg';

const ContactMe = ({ personalInfo, contact, text, isEditing, onContactChange, onPersonalInfoChange, onTextChange }) => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        {isEditing ? <input className="edit-input section-label-edit" value={text.contactLabel} onChange={(e) => onTextChange({ ...text, contactLabel: e.target.value })} /> : <span className="section-label">{text.contactLabel}</span>}
        {isEditing ? <input className="edit-input edit-heading" value={text.contactHeading} onChange={(e) => onTextChange({ ...text, contactHeading: e.target.value })} /> : <h2>{text.contactHeading}</h2>}
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
            {isEditing ? <input className="edit-input" value={text.findOnlineHeading} onChange={(e) => onTextChange({ ...text, findOnlineHeading: e.target.value })} /> : <h3>{text.findOnlineHeading}</h3>}
            <div className="social-links">
              {isEditing ? <input className="edit-input" value={personalInfo.github} onChange={(e) => onPersonalInfoChange({ ...personalInfo, github: e.target.value })} placeholder="GitHub URL" /> : <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                {text.githubLabel}
              </a>}
              {isEditing ? <input className="edit-input" value={personalInfo.linkedin} onChange={(e) => onPersonalInfoChange({ ...personalInfo, linkedin: e.target.value })} placeholder="LinkedIn URL" /> : <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} />
                {text.linkedinLabel}
              </a>}
            </div>
          </div>
          <div className="contact-right">
            <div className="contact-image">
              <img src={ContactPortrait} alt="Ron Cristian Mendoza at graduation" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
