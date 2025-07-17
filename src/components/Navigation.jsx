import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ 
  personalInfo, 
  isMenuOpen, 
  setIsMenuOpen, 
  activeSection, 
  scrollToSection 
}) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>{personalInfo.name}</h2>
        </div>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map(section => (
            <a
              key={section}
              href={`#${section}`}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section);
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
        <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
