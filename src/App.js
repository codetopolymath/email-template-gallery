
import Base64Encoder from './components/Base64Encoder/Base64Encoder';
import TemplateGallery from './components/Pages/TemplateGallery';
import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Footer />
      </div>
    </Router>
  );
}

export default App;