import React, { useState } from 'react';
import { Avatar, Box, Button, Card, CardContent, Divider, Modal, Typography } from '@mui/material';

function UserProfile() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Placeholder user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Main St, Anytown, USA',
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
      <Button onClick={handleOpen}>
        <Avatar sx={{ bgcolor: 'secondary.main' }}>JD</Avatar>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 2,
            border: '2px solid #000',
          }}
        >
          <Card>
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
              <Avatar sx={{ bgcolor: 'secondary.main', width: 56, height: 56 }}>JD</Avatar>
            </Box>
            <Divider />
            <CardContent sx={{color: 'GrayText'}}>
              <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
                {user.name}
              </Typography>
              <Typography id="modal-modal-description" variant="body1" sx={{ mb: 1 }}>
                Email: {user.email}
              </Typography>
              <Typography id="modal-modal-description" variant="body1" sx={{ mb: 1 }}>
                Address: {user.address}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </Box>
  );
}

export default UserProfile;