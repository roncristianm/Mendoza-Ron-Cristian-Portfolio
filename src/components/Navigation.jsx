import React from 'react';

const navItems = [
  { id: 'home',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'skills',     label: 'Skills' },
  { id: 'projects',   label: 'My Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact',    label: 'Contact' },
];

const Navigation = ({ currentPage, setCurrentPage, personalInfo }) => {
  return (
    <nav className="sidebar">
      <div className="sidebar-name">
        <span>{personalInfo.name}</span>
        <p>{personalInfo.title}</p>
      </div>
      <ul className="sidebar-nav">
        {navItems.map(item => (
          <li key={item.id}>
            <button
              className={`sidebar-link ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => setCurrentPage(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
