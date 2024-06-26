import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import UserProfile  from './UserProfile';

function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
          <Button color="inherit" component={RouterLink} to="/home">Home</Button>
          <Button color="inherit" component={RouterLink} to="/about">About</Button>
          <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>
          <Button color="inherit" component={RouterLink} to="/TemplateGallery">TemplateGallery</Button>
          <Button color="inherit" component={RouterLink} to="/UploadTemplate">UploadTemplate</Button>
          <Button color="inherit" component={RouterLink} to="/Base64Encoder">Base64Encoder</Button>
          <Button color="inherit" component={RouterLink} to="/S3Service">S3Service</Button>
          <UserProfile /> 
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;