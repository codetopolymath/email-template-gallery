import React from 'react';
import { Box, Typography } from '@mui/material';

function Home() {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        bgcolor: '#f5f5f5',
      }}
    >
      <Typography variant="h3" color="text.secondary" gutterBottom>
        Welcome to our Home Page
      </Typography>
      <Typography variant="h6" color="text.secondary">
        This is the home page of our website.
      </Typography>
    </Box>
  );
}

export default Home;