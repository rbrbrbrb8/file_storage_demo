const amazon = require('@aws-sdk/client-s3');
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const s3Handler = {};
const sharp = require('sharp');
const crypto = require('crypto');
require('dotenv').config()


const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;
const accessKey = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

const s3 = new S3Client({
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey
  },
  region: bucketRegion
});


const randomImageName = () => crypto.randomBytes(32).toString('hex');

s3Handler.uploadFile = async (file,type) => {
  const resizedBuffer = type ==='image' ? await sharp(file.buffer).resize({ width: 100, height: 100, fit: 'contain' }).toBuffer() : file.buffer;
  const key = randomImageName();
  const extensionIndex = file.originalname.split('.').length - 1 ;
  const extension = file.originalname.split('.')[extensionIndex];
  const params = {
    Bucket: bucketName,
    Key: key + '.' + extension,
    Body: resizedBuffer,
    ContentType: file.mimetype
  }
  const command = new PutObjectCommand(params);
  const result = await s3.send(command);
  result.s3Id = key + '.' + extension;
  return result;
}

s3Handler.getFileUrl = s3Id => {
  const getObjectParams = {
    Bucket:bucketName,
    Key:s3Id
  }
  const command = new GetObjectCommand(getObjectParams);
  return getSignedUrl(s3, command, { expiresIn: 3600 });
}

module.exports = s3Handler;