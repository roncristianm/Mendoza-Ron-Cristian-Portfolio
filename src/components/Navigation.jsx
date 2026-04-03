import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'skills',     label: 'Skills' },
  { id: 'projects',   label: 'My Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact',    label: 'Contact' },
];

const Navigation = ({ currentPage, setCurrentPage, personalInfo }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id) => {
    setCurrentPage(id);
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="sidebar">
        <div className="sidebar-brand">
          <span className="sidebar-initials">
            {personalInfo.name.split(' ').map(n => n[0]).join('')}
          </span>
          <div className="sidebar-info">
            <p className="sidebar-name">{personalInfo.name}</p>
            <p className="sidebar-title">{personalInfo.title}</p>
          </div>
        </div>

        <div className="sidebar-divider" />

        <ul className="sidebar-nav">
          {navItems.map((item, i) => (
            <li key={item.id}>
              <button
                className={`sidebar-link ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => handleNav(item.id)}
              >
                <span className="sidebar-index">0{i + 1}</span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="sidebar-footer">
          <span className="sidebar-status">
            <span className="status-dot" />
            Available
          </span>
        </div>
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
              className={`mobile-link ${currentPage === item.id ? 'active' : ''}`}
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
