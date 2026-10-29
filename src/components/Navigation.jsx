import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'skills',     label: 'Skills' },
  { id: 'projects',   label: 'My Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact',    label: 'Contact' },
];

const Navigation = ({ activeSection, scrollToSection, personalInfo, isEditing, onPersonalInfoChange, adminControls }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

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
              <button
                className={`sidebar-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNav(item.id)}
              >
                <span>{item.label}</span>
              </button>
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
