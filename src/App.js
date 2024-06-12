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

function App() {
  const apiToken = localStorage.getItem('apiToken');

  return (
    <Router>
      {apiToken && <Header />}
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
      {apiToken && <Footer />}
    </Router>
  );
}

export default App;
