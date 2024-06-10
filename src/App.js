import {Home, About, Contact, NotFound} from './components/Pages';
import Base64Encoder from './components/Base64Encoder/Base64Encoder';
import TemplateGallery from './components/Pages/TemplateGallery';
import S3Service from './components/AmazonS3/S3Service';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/TemplateGallery" element={<TemplateGallery />} />
        <Route path="/Base64Encoder" element={<Base64Encoder />} />
        <Route path="/S3Service" element={<S3Service />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;