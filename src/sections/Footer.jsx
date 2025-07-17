import React from 'react';

const Footer = ({ personalInfo }) => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
