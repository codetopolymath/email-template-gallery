import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

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
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        p: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>Base64 Encoder</Typography>
      <TextField 
        variant="outlined" 
        value={input} 
        onChange={e => setInput(e.target.value)} 
        sx={{ mb: 2, width: '100%', p: 1, border: '1px solid #ccc', borderRadius: '4px' }}  
      />
      <Button variant="contained" onClick={handleEncode} sx={{ mb: 2 }}>Encode</Button>
      <Paper 
        sx={{
          p: 2, 
          display: 'block', 
          flexDirection: 'column', 
          alignItems: 'center', 
          width: '100%',
          mt: 2,
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 2, width: '100%', p: 1, border: '1px solid #ccc', borderRadius: '4px' }}>
            <Button variant="contained" onClick={handleCopy} sx={{ mb: 2 }}>Copy</Button>
        </Box>
        <Typography sx={{ wordWrap: 'break-word', overflowWrap: 'break-word',  }}>{output}</Typography>
      </Paper>
    </Box>
  );
}

export default Base64Encoder;
