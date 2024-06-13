import React, { useState, useEffect } from 'react';
import { uploadFile, listAllFiles, getFileUrl } from './AmazonS3';
import { Button, List, ListItem, ListItemText, Input, Container, Typography } from '@mui/material';

const S3Service = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        const url = await uploadFile(selectedFile);
        console.log(`File uploaded at: ${url}`);
      } catch (error) {
        console.error('Error uploading file: ', error);
      }
    }
  };

  const handleFileClick = async (fileName) => {
    try {
      const url = await getFileUrl(fileName);
      window.open(url, '_blank');
    } catch (error) {
      console.error('Error getting file URL: ', error);
    }
  };

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const fetchedFiles = await listAllFiles();
        setFiles(fetchedFiles);
        console.log('Files fetched by component: ', fetchedFiles);
      } catch (error) {
        console.error('Error fetching files: ', error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <Container>
      <Input style={{padding:'20px', margin: '20px', borderRadius: '5px' }} type="file" onChange={handleFileChange} />
      <Button variant="contained" color="primary" onClick={handleUpload}>Upload</Button>
      <Typography variant="h6">Files:</Typography>
      <List>
        {files.map((file, index) => (
          <ListItem button key={index} onClick={() => handleFileClick(file)}>
            <ListItemText primary={file} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default S3Service;