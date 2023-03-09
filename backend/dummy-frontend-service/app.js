const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.resolve(__dirname, 'build')));
app.use(session({'secret':'siuuu'}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, 'src','main', 'index.html'));
})

app.listen(port, () => console.log(
  `App listening at http://localhost:${port}`)
);
