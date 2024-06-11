import React, { useState, useEffect } from 'react';
import { uploadFile, listAllFiles, getFileUrl } from './AmazonS3';

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
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <h2>Files:</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index} onClick={() => handleFileClick(file)}>
            {file}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default S3Service;