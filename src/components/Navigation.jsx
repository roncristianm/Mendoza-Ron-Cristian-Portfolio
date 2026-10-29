import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ activeSection, scrollToSection, personalInfo, text, isEditing, onPersonalInfoChange, onTextChange, adminControls }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [
    { id: 'home', label: text.homeNav },
    { id: 'about', label: text.aboutNav },
    { id: 'skills', label: text.skillsNav },
    { id: 'projects', label: text.projectsNav },
    { id: 'experience', label: text.experienceNav },
    { id: 'contact', label: text.contactNav },
  ];

  const handleNav = (id) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="sidebar">
        <div className="sidebar-brand">
          <span className="sidebar-initials">
            {personalInfo.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>

        <ul className="sidebar-nav">
          {navItems.map((item) => (
            <li key={item.id}>
              {isEditing ? (
                <input className="edit-input nav-label-edit" value={item.label} onChange={(event) => onTextChange({ ...text, [`${item.id}Nav`]: event.target.value })} />
              ) : (
                <button className={`sidebar-link ${activeSection === item.id ? 'active' : ''}`} onClick={() => handleNav(item.id)}>
                  <span>{item.label}</span>
                </button>
              )}
            </li>
          ))}
        </ul>

        <button className="nav-menu-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="nav-admin-desktop">{adminControls}</div>
      </nav>

      {/* Mobile top bar */}
      <div className="mobile-bar">
        <span className="mobile-brand">{personalInfo.name}</span>
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-menu">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              className={`mobile-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNav(item.id)}
            >
              <span className="sidebar-index">0{i + 1}</span>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Navigation;
