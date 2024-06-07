import React, { useEffect, useState } from 'react';
import './App.css';
import ContentBlock from './components/ContentBlock';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(5);
  const [apiToken, setApiToken] = useState('');
  const [isTokenSubmitted, setIsTokenSubmitted] = useState(false);

  useEffect(() => {
    if (isTokenSubmitted && apiToken !== '') {
      setLoading(true); 
      const apiUrl = `https://mailer.pinnacle.in/api/v2/templates?api_token=${apiToken}&skip=${skip}&limit=${limit}`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          setData(data.templates);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setError(error);
          setLoading(false);
        });
    }
  }, [skip, limit, isTokenSubmitted, apiToken]);

  const handleNext = () => {
    setSkip(prevSkip => prevSkip + limit);
  };

  const handlePrev = () => {
    setSkip(prevSkip => Math.max(prevSkip - limit, 0));
  };

  const handleTokenSubmit = () => {
    setIsTokenSubmitted(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  if (!isTokenSubmitted) {
    return (
      <div className="token-form">
      <input className="token-input" type="text" placeholder="api_token" value={apiToken} onChange={e => setApiToken(e.target.value)} />
        <div className="submit-button-container">
          <button className="submit-button" onClick={handleTokenSubmit}>Submit</button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <div className="content-container">
        {data.map(item => (
          <ContentBlock key={item.uid} item={item} />
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