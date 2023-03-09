const {google} = require('googleapis');
const path = require('path');
const fs = require('fs');
const credentials = require('../../../credentials.json');
require('dotenv').config()

const code = '4/0AWtgzh7f4nL8cqbsjfNv6LtaDpLq8XbpJ2Riv64-gPUCW19PndWdq_5vd4CdZyt4QH7S8Q';
const { client_secret, client_id, redirect_uris } = credentials.installed;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
oAuth2Client.getToken(code).then(({tokens}) => {
  const tokenPath = path.join(__dirname,'..','..','..','token.json');
  fs.writeFileSync(tokenPath,JSON.stringify(tokens));
  console.log('access token and refresh token stored to token.json');
})