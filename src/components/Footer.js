import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { blue, blueGrey } from '@mui/material/colors';

function Footer() {
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: blue[500],
        color: 'white',
        height: '30px',
        position: 'fixed',
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <Typography variant="body1">
        Template gallery by{' '}
        <Link href="https://mailer.pinnacle.in" color="inherit" underline="hover">
          mailer.pinnacle.com
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;