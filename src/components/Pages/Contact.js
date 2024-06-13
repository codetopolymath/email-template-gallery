import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

function Contact() {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,
        textAlign: 'center',
        bgcolor: '#f5f5f5',
      }}
    >
      <Typography variant="h3" color="text.secondary" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Please fill out this form to contact us.
      </Typography>
      <Box 
        component="form" 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate 
        autoComplete="off"
      >
        <TextField id="name" label="Name" variant="outlined" />
        <TextField id="email" label="Email" variant="outlined" />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default Contact;