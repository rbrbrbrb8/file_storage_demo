const express = require('express');
const app = express();
require('dotenv').config(); 
const authenticateToken = require('./authenticateToken');
const jwt = require('jsonwebtoken');

app.use(express.json())

const generateAccessToken = user => {
  return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'10m'});
}

const posts = [
  {
    username:'RoyBrez',
    title:'Siuuu'
  },
  {
    username:'sheesh',
    title:'Lebron James'
  }
]

app.get('/posts',authenticateToken,(req,res) => {
  res.json(posts.filter(post => post.username === req.user.name));
})

app.post('/login',(req,res)=> {
  const username = req.body.username;
  const user = {name:username};
  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user,process.env.REFRESH_TOKEN_SECRET);
  res.json({accessToken:accessToken,refreshToken:refreshToken});
})

app.listen(6900,() => {
  console.log('app listening on port 6900');
})