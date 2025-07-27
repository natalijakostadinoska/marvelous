import React from 'react';
import logo from '../assets/logo.png'; // Import the image here
import './Footer.scss';

const Footer = () => {
  const footerLinks = [
    ['Audio Description', 'Investor Relations', 'Legal Notices'],
    ['Help Centre', 'Jobs', 'Cookie Preferences'],
    ['Gift Cards', 'Terms of Use', 'Corporate Information']
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Links */}
        <div className="footer-links">
          {footerLinks.map((group, i) => (
            <div key={i} className="link-group">
              {group.map((link, j) => (
                <a href="#" key={j}>{link}</a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Social Icons */}
      <div className="footer-socials">
        <i className="fa-brands fa-behance"></i>
        <i className="fa-regular fa-circle-play"></i>
        <i className="fa-brands fa-dribbble"></i>
      </div>
    </footer>
  );
};

export default Footer;
