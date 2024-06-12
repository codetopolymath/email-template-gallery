import React, { useState } from 'react';

const UploadTemplate = () => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [apiToken, setApiToken] = useState('');
    const [message, setMessage] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const payload = { name, content };
        const apiToken = localStorage.getItem('apiToken');

        fetch(`https://mailer.pinnacle.in/api/v2/templates?api_token=${apiToken}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
            redirect: 'follow',
            mode: 'no-cors'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => setMessage('Template created successfully!'))
        .catch(error => setMessage('Error: ' + error.message));
    };

    const formContainerStyle = {
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    };

    const inputStyle = {
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '100%'
    };

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: 'white',
        cursor: 'pointer'
    };

    const messageStyle = {
        marginTop: '20px',
        fontSize: '18px'
    };

    return (
        <div style={formContainerStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={e => setName(e.target.value)} required style={inputStyle} />
                </label>
                <label>
                    Content (Base64 Encoded):
                    <textarea value={content} onChange={e => setContent(e.target.value)} required style={inputStyle} />
                </label>
                <button onSubmit={handleSubmit} type="submit" style={buttonStyle}>Submit</button>
            </form>
            {message && <p style={messageStyle}>{message}</p>}
        </div>
    );
};

export default UploadTemplate;
