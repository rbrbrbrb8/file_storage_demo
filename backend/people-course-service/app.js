const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const peopleRouter = require('./routes/people/peopleRoute');
const dbHandler = require('./handlers/db/dbHandler');
const courseRouter = require('./routes/course/courseRoute');
const app = express();
dbHandler.init();

app.use(session({'secret':'siuuu'}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())

const port = 3100;

// app.get('/peopleCourse/test', (req,res) => {
//   res.send('moice')
// })

// app.get('/peopleCourse/pls/:id', (req,res) => {
//   const {id} = req.params;
//   res.send(id)
// })

app.use('/api/people',peopleRouter);
app.use('/api/course',courseRouter);
//

app.listen(port, () => console.log(
  `App listening at http://localhost:${port}`)
);
