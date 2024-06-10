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
    padding: '50px',
  },
  heading: {
    fontSize: '3em',
    color: '#444',
  },
  text: {
    fontSize: '1.5em',
    color: '#666',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    width: '200px',
    fontSize: '1em',
  },
  submit: {
    margin: '20px 0',
    padding: '10px 20px',
    fontSize: '1em',
    backgroundColor: '#444',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

function Contact() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.text}>Please fill out this form to contact us.</p>
      <form style={styles.form}>
        <label for="name">Name:</label>
        <input style={styles.input} type="text" id="name" name="name" />
        <label for="email">Email:</label>
        <input style={styles.input} type="text" id="email" name="email" />
        <input style={styles.submit} type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;