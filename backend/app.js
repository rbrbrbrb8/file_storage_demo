const express = require('express');
const passport = require('passport');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const gmailRouter = require('./routes/gmailApi/gmailRoute');
const s3Router = require('./routes/s3/s3Route');
const peopleRouter = require('./routes/people/peopleRoute');
const dbHandler = require('./handlers/db/dbHandler');
const courseRouter = require('./routes/course/courseRoute');
const app = express();
dbHandler.init();

require('./auth');

const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
}

app.use(express.static(path.resolve(__dirname, 'build')));
app.use(session({'secret':'siuuu'}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())

const port = process.env.PORT || 3000;

app.use('/gmail',gmailRouter);
app.use('/s3',s3Router);
app.use('/people',peopleRouter);
app.use('/course',courseRouter);

app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, 'src','main', 'index.html'));
})

app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

app.get('/google/callback', passport.authenticate('google', {
  successRedirect: '/protected',
  failureRedirect: '/auth/failure'
}))

app.get('/auth/failure', (req, res) => {
  res.send('oops...')
});



app.use('/protected',isLoggedIn, function (req, res) {
  return res.sendFile(path.resolve(__dirname, 'src','main', 'index.html'));
});

app.listen(port, () => console.log(
  `App listening at http://localhost:${port}`)
);
