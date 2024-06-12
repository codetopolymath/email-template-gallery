import { Container, Typography, Button, TextField, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const StyledContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  textAlign: 'center',
  backgroundColor: '#f5f5f5',
});

const StyledPaper = styled(Paper)({
  padding: '20px',
});

const StyledHeading = styled(Typography)({
  fontSize: '3em',
  color: '#444',
});

const StyledText = styled(Typography)({
  fontSize: '1.5em',
  color: '#666',
});

const StyledButton = styled(Button)({
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#0077cc',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
});

const Login = () => {
  const navigate = useNavigate();
  const [apiToken, setApiToken] = useState('');
  const [data, setData] = useState({ status: '', message: '' });

  useEffect(() => {
    const storedToken = localStorage.getItem('apiToken');
    if (storedToken) {
      navigate('/home');
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {
        // Make API call to authenticate the token    
        const response = await fetch(`https://mailer.pinnacle.in/api/v2/checkUser?api_token=${apiToken}`, {
            method: 'GET',
        });

        console.log('response', response);

        const data = await response.json();
        setData(data);

        if (data.status === 'success' && data.message === 'USER_EXIST') {
            // Store the API token in local storage
            localStorage.setItem('apiToken', apiToken);

            navigate('/home');
        } else if (data.status === 'failed' && data.message === 'USER_DOES_NOT_EXIST') {
            console.error('User does not exist');
        } else {
            console.error('Unexpected response', data);
        }
    } catch (error) {
        console.error('Error during login', error);
    }
};

  return (
    <StyledContainer>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <StyledPaper elevation={3}>
            <StyledHeading variant="h3" padding="20px">Login Page</StyledHeading>
            <TextField 
              variant="outlined" 
              value={apiToken} 
              onChange={(e) => setApiToken(e.target.value)} 
              style={{ marginBottom: '20px', width: '100%' }}
            />
            <StyledButton variant="contained" color="primary" onClick={handleLogin}>Login</StyledButton>
            {data.status === 'failed' && data.message === 'USER_DOES_NOT_EXIST' && (
              <StyledText variant="body1" color="error">User does not exist</StyledText>
            )}
          </StyledPaper>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Login;