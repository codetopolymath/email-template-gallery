import { Home, About, Contact, NotFound } from './components/Pages';
import Base64Encoder from './components/Base64Encoder/Base64Encoder';
import TemplateGallery from './components/Pages/TemplateGallery';
import UploadTemplate from './components/Pages/UploadTemplate';
import S3Service from './components/AmazonS3/S3Service';
import Login from './components/Login/Login';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Box } from '@mui/material';
import Notification from './components/Notification';
import React, { useState } from 'react';

function App() {
  const apiToken = localStorage.getItem('apiToken');
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });

  const handleOpenNotification = (message, severity) => {
    setNotification({ open: true, message, severity });
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <Router>
      {apiToken && <Header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1 }} />}
      <Box mt={10} style={{ overflowY: 'auto', paddingBottom: '20px', paddingTop: '10px' }}>
        <Routes>
          <Route path="/login" element={apiToken ? <Navigate to="/home" /> : <Login />} />
          {apiToken ? (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/TemplateGallery" element={<TemplateGallery />} />
              <Route path="/UploadTemplate" element={<UploadTemplate />} /> 
              <Route path="/Base64Encoder" element={<Base64Encoder />} />
              <Route path="/S3Service" element={<S3Service />} />
              <Route path="*" element={<NotFound />} />
            </>
          ) : (
            <Route path="*" element={<Login />} />
          )}
        </Routes>
      </Box>
      {apiToken && <Footer handleOpenNotification={handleOpenNotification} />}
      <Notification
        message={notification.message}
        severity={notification.severity}
        duration={notification.duration}
        open={notification.open}
        onClose={handleCloseNotification}
      />
    </Router>
  );
}

export default App;
