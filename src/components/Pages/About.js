import React from 'react';
import { Box, Typography } from '@mui/material';

function About() {
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
        About Us
      </Typography>
      <Typography variant="h6" color="text.secondary">
        This page provides information about us.
      </Typography>
    </Box>
  );
}

export default About;