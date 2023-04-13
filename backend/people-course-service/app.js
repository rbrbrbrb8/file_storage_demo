const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const peopleRouter = require('./routes/people/peopleRoute');
const dbHandler = require('./handlers/db/dbHandler');
const courseRouter = require('./routes/course/courseRoute');
const app = express();
const cors = require('cors')
dbHandler.init();
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(session({'secret':'siuuu'}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())

const port = process.env.PORT || 3100;

app.use('/api/people',peopleRouter);
app.use('/api/course',courseRouter);


app.listen(port, () => console.log(
  `App listening at http://localhost:${port}`)
);
