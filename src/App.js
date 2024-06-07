import React, { useEffect, useState } from 'react';
import './App.css';
import ContentBlock from './components/ContentBlock';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const apiUrl = `http://127.0.0.1:8000/templates/?skip=${skip}&limit=${limit}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, [skip, limit]);

  const handleNext = () => {
    setSkip(prevSkip => prevSkip + limit);
  };

  const handlePrev = () => {
    setSkip(prevSkip => Math.max(prevSkip - limit, 0));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div className="App">
      <Header />
      <div className="content-container">
        {data.map(item => (
          <ContentBlock key={item.template_uid} item={item} />
        ))}
        <div>
          <button className='app-nav-button' onClick={handlePrev}>Previous</button> 
          <button className='app-nav-button' onClick={handleNext}>Next</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
