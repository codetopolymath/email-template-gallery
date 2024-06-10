import React, { useState, useEffect } from 'react';
import { uploadFile, listAllFiles } from './AmazonS3';

const S3FileHandler = () => {
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

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const files = await listAllFiles();
        setFiles(files);
      } catch (error) {
        console.error('Error fetching files: ', error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <h2>Files:</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file.Key}</li>
        ))}
      </ul>
    </div>
  );
};

export default S3FileHandler;