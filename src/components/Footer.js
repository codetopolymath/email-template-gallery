import React from 'react';
import { Box, Typography, Link, Button } from '@mui/material';
import { blue } from '@mui/material/colors';

function Footer({ handleOpenNotification }) {
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
      <Button 
        onClick={() => handleOpenNotification('Notification from Footer!', 'success')} 
        color="inherit"
        style={{ marginLeft: '20px' }}
      >
        Trigger Notification
      </Button>
    </Box>
  );
}

export default Footer;