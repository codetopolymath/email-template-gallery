import React, { useState, useEffect } from 'react';
import ContentBlock from '../ContentBlock';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const TemplateGallery = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiToken = localStorage.getItem('apiToken');
        const response = await fetch(`https://mailer.pinnacle.in/api/v2/templates?api_token=${apiToken}`);
        const data = await response.json();
        if (response.ok) {
          setData(data.templates);
        } else {
          throw new Error(data.error);
        }
      } catch (error) {
        console.error(error);
        setError(error); 
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}><CircularProgress /></Box>;
  }

  if (error) { 
    return <Alert severity="error">Error: {error.message}</Alert>;
  }

  return (
    <Box sx={{ justifyContent: 'center', maxWidth: '1200px', m: '0 auto', p: '40px' }}>
      <Grid container spacing={4}>
        {data.map((template) => (
          <Grid item xs={12} key={template.id}>
            <ContentBlock item={template} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TemplateGallery;