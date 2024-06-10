import React from 'react';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: '3em',
    color: '#444',
  },
  text: {
    fontSize: '1.5em',
    color: '#666',
  },
};

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to our Home Page</h1>
      <p style={styles.text}>This is the home page of our website.</p>
    </div>
  );
}

export default Home;