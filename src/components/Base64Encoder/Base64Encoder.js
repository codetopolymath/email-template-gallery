import { useState } from "react";
import './Base64Encoder.css';

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

    return (
        <div className="base64-encoder">
            <h1>Base64 Encoder</h1>
            <input type='text' value={input} onChange={e => setInput(e.target.value)}></input>
            <button onClick={handleEncode}>Encode</button>
            <div className="output-container">
                <button onClick={handleCopy}>Copy</button>
                <div>{output}</div>
            </div>
        </div>
    );
}

export default Base64Encoder;
