import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/TemplateGallery">TemplateGallery</Link></li>
          <li><Link to="/Base64Encoder">Base64Encoder</Link></li>
          <li><Link to="/S3Service">S3Service</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;