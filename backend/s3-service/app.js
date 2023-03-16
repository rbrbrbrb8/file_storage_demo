const express = require('express');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const s3Handler = require('./handlers/s3/s3Handler');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');

app.use(session({ 'secret': 'siuuu' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

const port = process.env.PORT || 3200;


app.post('/s3/upload', upload.single('image'), async (req, res) => {
  // 
  if (!req.file) {
    res.status(400).send('need to contain file')
    return ;
  }
  const type = req.file.mimetype.includes('image') ? 'image' : 'PDF';
  const success = await s3Handler.uploadFile(req.file, type);
  if (success.$metadata.httpStatusCode === 200) {
    const fileData = JSON.parse(req.body.fileData);
    console.log(fileData)
    // talk with people course service!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const update = await axios.post('http://people-course-service:3100/api/people/addFile', {
      id: fileData.id,
      fileType: fileData.fileType,
      s3Id: success.s3Id
    });
    res.status(200).send({ success: true });
    return
  }

  // else res.status(success.$metadata.httpStatusCode).send({ success: false });
});

app.get('/s3/single', async (req, res) => {
  const { s3Id } = req.query;
  const url = await s3Handler.getFileUrl(s3Id);
  res.send(url)
});

app.get('/s3/multi', async (req, res) => {
  const { s3Id } = req.query;
  const urls = JSON.parse(s3Id).map(id => s3Handler.getFileUrl(id));
  res.send(await Promise.all(urls));

})

app.listen(port, () => console.log(
  `App listening at http://localhost:${port}`)
);
