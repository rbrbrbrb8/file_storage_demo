const express = require('express');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const s3Handler = require('./handlers/s3/s3Handler');
const session = require('express-session');
const bodyParser = require('body-parser');
const dbHandler = require('./handlers/db/dbHandler');
const app = express();
dbHandler.init();

app.use(session({'secret':'siuuu'}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())

const port = process.env.PORT || 3200;


app.post('/upload', upload.single('image'), async (req, res) => {
  console.log(req.file.originalname);
  if(!req.file) res.status(400).send('need to contain file')
  const type = req.file.mimetype.includes('image') ? 'image' : 'PDF';
  const success = await s3Handler.uploadFile(req.file,type);
  if (success.$metadata.httpStatusCode === 200) {
    //talk with people course service!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const update = await peopleHandler.addFileToPerson('121212121',{type:'file1',s3Id:success.s3Id});
    res.status(200).send({ success: true });
  }
  else res.status(success.$metadata.httpStatusCode).send({ success: false });
});

app.get('/single',async (req,res) => {
  const {s3Id} = req.query;
  const url = await s3Handler.getFileUrl(s3Id);
  res.send(url)
});

app.get('/multi',async (req,res) => {
  const {s3Id} = req.query;
  const urls = JSON.parse(s3Id).map(id => s3Handler.getFileUrl(id));
  res.send(await Promise.all(urls));

})

app.listen(port, () => console.log(
  `App listening at http://localhost:${port}`)
);
