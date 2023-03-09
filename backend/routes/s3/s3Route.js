const express = require('express');
const s3Router = express.Router();
const multer = require('multer');
const peopleHandler = require('../../handlers/people/peopleHandler');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const s3Handler = require('../../handlers/s3/s3Handler');


s3Router.post('/upload', upload.single('image'), async (req, res) => {
  console.log(req.file.originalname);
  if(!req.file) res.status(400).send('need to contain file')
  const type = req.file.mimetype.includes('image') ? 'image' : 'PDF';
  const success = await s3Handler.uploadFile(req.file,type);
  if (success.$metadata.httpStatusCode === 200) {
    const update = await peopleHandler.addFileToPerson('121212121',{type:'file1',s3Id:success.s3Id});
    res.status(200).send({ success: true });
  }
  else res.status(success.$metadata.httpStatusCode).send({ success: false });
});

s3Router.get('/single',async (req,res) => {
  const {s3Id} = req.query;
  const url = await s3Handler.getFileUrl(s3Id);
  res.send(url)
});

s3Router.get('/multi',async (req,res) => {
  const {s3Id} = req.query;
  const urls = JSON.parse(s3Id).map(id => s3Handler.getFileUrl(id));
  res.send(await Promise.all(urls));

})

module.exports = s3Router;
