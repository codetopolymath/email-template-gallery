import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file
import TemplateGallery from './Pages/TemplateGallery';
import Base64Encoder from './Base64Encoder/Base64Encoder';

function Header() {

  const [currentPage, setCurrentPage] = useState('');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <header className="header">
      <nav>
        <ul className="navbar">
          <li><Link to="/" onClick={() => handlePageChange('')}>Home</Link></li>
          <li><Link to="/about" onClick={() => handlePageChange('/about')}>About</Link></li>
          <li><Link to="/contact" onClick={() => handlePageChange('/contact')}>Contact</Link></li>
          <li><Link to="/TemplateGallery" onClick={() => handlePageChange('/TemplateGallery')}>TemplateGallery</Link></li>
          <li><Link to="/Base64Encoder" onClick={() => handlePageChange('/Base64Encoder')}>Base64Encoder</Link></li>
        </ul>
      </nav>
      {currentPage === '/TemplateGallery' && <TemplateGallery />}
      {currentPage === '/Base64Encoder' && <Base64Encoder />}
    </header>
  );
}

export default Header;