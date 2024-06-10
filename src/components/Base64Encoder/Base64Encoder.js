import { useState } from "react";

function Base64Encoder() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleEncode = () => {
        const encoded = btoa(input);
        setOutput(encoded);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(output);
    };

    const styles = {
        base64Encoder: {
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            margin: '20px',
        },
        h1: {
            color: '#333',
        },
        input: {
            margin: '10px 0',
            padding: '10px',
            width: '200px',
        },
        button: {
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
        },
        div: {
            paddingTop: '40px',
            wordWrap: 'break-word',
            width: '75%',
            minHeight: '200px',
            textAlign: 'center',
            whiteSpace: 'pre-wrap',
            alignSelf: 'center',
        },
        outputContainer: {
            marginTop: '10px',
            marginBottom: '50px',
            backgroundColor: '#f0f0f0',
            borderRadius: '5px',
            textAlign: 'center',
            padding: '10px',
            position: 'relative',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        },
        outputContainerButton: {
            position: 'absolute',
            top: '10px',
            left: '10px',
        },
    };

    return (
        <div style={styles.base64Encoder}>
            <h1 style={styles.h1}>Base64 Encoder</h1>
            <input type='text' value={input} onChange={e => setInput(e.target.value)} style={styles.input}></input>
            <button onClick={handleEncode} style={styles.button}>Encode</button>
            <div style={styles.outputContainer}>
                <button onClick={handleCopy} style={styles.outputContainerButton}>Copy</button>
                <div style={styles.div}>{output}</div>
            </div>
        </div>
    );
}

export default Base64Encoder;