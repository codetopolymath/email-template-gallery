import AWS from 'aws-sdk';

// Configure AWS SDK
AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_AWS_REGION,
});

const s3 = new AWS.S3();

export const uploadFile = (file) => {
  const params = {
    Bucket: process.env.REACT_APP_AWS_BUCKET_NAME,
    Key: file.name,
    Body: file,
    ACL: 'public-read'
  };

  return new Promise((resolve, reject) => {
    s3.upload(params, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data.Location);
      }
    });
  });
};

export const getFileUrl = (fileName) => {
  const params = {
    Bucket: process.env.REACT_APP_AWS_BUCKET_NAME,
    Key: fileName,
    Expires: 60
  };

  return new Promise((resolve, reject) => {
    s3.getSignedUrl('getObject', params, function(err, url) {
      if (err) {
        reject(err);
      } else {
        resolve(url);
      }
    });
  });
};

export const listAllFiles = () => {
  const params = {
    Bucket: process.env.REACT_APP_AWS_BUCKET_NAME,
  };

  return new Promise((resolve, reject) => {
    s3.listObjectsV2(params, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data.Contents);
      }
    });
  });
};